// 這個檔案負責把 content.js 的內容排成網頁。一般不需要修改。
(function () {
  const S = window.STORY || { blocks: [] };
  const story = document.getElementById("story");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.title = S.title || document.title;
  setText("title", S.title);
  setText("subtitle", S.subtitle);
  setText("byline", [S.author, S.updated].filter(Boolean).join(" | "));
  setText("footer-note", S.author ? "By " + S.author : "");

  function setText(id, value) {
    const el = document.getElementById(id);
    if (!value) { el.remove(); return; }
    el.textContent = value;
  }

  function isVideo(src) {
    return /\.(mp4|webm|mov|m4v)(\?.*)?$/i.test(src || "");
  }

  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function prose(text) {
    const wrap = el("div", "prose");
    String(text || "").split(/\n\s*\n/).forEach(p => {
      if (p.trim()) wrap.appendChild(el("p", null, p.trim().replace(/\n/g, "<br>")));
    });
    return wrap;
  }

  function stamp(date) {
    return date ? el("p", "stamp", date) : null;
  }

  function figure(item) {
    const fig = el("figure", "figure");
    const frame = el("div", "frame");
    if (isVideo(item.media)) {
      const v = document.createElement("video");
      v.src = item.media;
      v.muted = true;
      v.loop = item.loop !== false;
      v.playsInline = true;
      v.preload = "metadata";
      v.setAttribute("muted", "");
      v.setAttribute("playsinline", "");
      if (item.poster) v.poster = item.poster;
      if (item.subtitles) {
        const t = document.createElement("track");
        t.kind = "subtitles";
        t.src = item.subtitles;
        t.srclang = "en";
        t.label = "Subtitles";
        t.default = true;
        v.appendChild(t);
      }
      if (reduceMotion) v.controls = true;
      frame.appendChild(v);
      if (item.sound !== false) frame.appendChild(soundButton(v));
      autoplay.observe(v);
    } else {
      const img = document.createElement("img");
      img.src = item.media;
      img.alt = item.alt || item.credit || "";
      img.loading = "lazy";
      frame.appendChild(img);
    }
    fig.appendChild(frame);
    if (item.credit) fig.appendChild(el("figcaption", null, item.credit));
    return fig;
  }

  function soundButton(video) {
    const b = el("button", "sound", "Sound on");
    b.type = "button";
    b.addEventListener("click", () => {
      video.muted = !video.muted;
      b.textContent = video.muted ? "Sound on" : "Sound off";
      b.setAttribute("aria-pressed", String(!video.muted));
      if (!video.muted) {
        // 一次只讓一支影片有聲音
        document.querySelectorAll("video").forEach(o => {
          if (o !== video && !o.muted) {
            o.muted = true;
            const ob = o.parentElement.querySelector(".sound");
            if (ob) { ob.textContent = "Sound on"; ob.setAttribute("aria-pressed", "false"); }
          }
        });
        video.play().catch(() => {});
      }
    });
    return b;
  }

  // 捲到畫面中才播放，離開就暫停
  const autoplay = new IntersectionObserver(entries => {
    entries.forEach(({ target, isIntersecting }) => {
      if (reduceMotion) return;
      if (isIntersecting) target.play().catch(() => {});
      else target.pause();
    });
  }, { threshold: 0.55 });

  const builders = {
    heading(b) {
      return el("h2", "section-head", b.text);
    },
    text(b) {
      const s = el("section", "block text");
      const st = stamp(b.date); if (st) s.appendChild(st);
      s.appendChild(prose(b.text));
      return s;
    },
    media(b) {
      const s = el("section", "block media " + (b.side === "right" ? "media-right" : "media-left"));
      s.appendChild(figure(b));
      const side = el("div", "aside");
      const st = stamp(b.date); if (st) side.appendChild(st);
      side.appendChild(prose(b.text));
      s.appendChild(side);
      return s;
    },
    wide(b) {
      const s = el("section", "block wide");
      if (b.text) s.appendChild(prose(b.text));
      s.appendChild(figure(b));
      return s;
    },
    pair(b) {
      const s = el("section", "block pair");
      if (b.text) s.appendChild(prose(b.text));
      const row = el("div", "pair-row");
      (b.items || []).forEach(i => row.appendChild(figure(i)));
      s.appendChild(row);
      return s;
    }
  };

  (S.blocks || []).forEach((b, i) => {
    const make = builders[b.type];
    if (!make) {
      story.appendChild(el("p", "block error",
        `Block ${i + 1}: unknown type "${b.type}". Use heading, text, media, wide or pair.`));
      return;
    }
    story.appendChild(make(b));
  });
})();
