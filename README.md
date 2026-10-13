# Visual Investigation 網頁模板

捲動式敘事網頁：影片捲到畫面中就自動播放（靜音、循環），離開畫面就暫停。

## 檔案說明

| 檔案 | 用途 | 需要改嗎 |
|---|---|---|
| `content.js` | 所有文字、影片、照片、圖說 | **只改這個** |
| `media/` | 放影片（.mp4）、照片（.jpg/.png）、字幕（.vtt） | 放檔案進來 |
| `index.html`、`script.js` | 網頁程式 | 不用 |
| `style.css` | 顏色和字型（最上面的變數） | 想換風格再改 |

## 怎麼新增一段

打開 `content.js`，複製一個 `{ ... }` 貼到想要的位置，改內容。段落類型：

- `heading`：章節標題
- `text`：純文字
- `media`：影片/照片 + 旁邊文字，`side: "left"` 或 `"right"`
- `wide`：滿版大影片
- `pair`：兩支影片並排比對

常見錯誤：兩個 `{ ... }` 之間忘了逗號、引號沒有成對。如果打開網頁一片空白，通常是這兩個原因。

## 在自己電腦上預覽

直接雙擊 `index.html` 用瀏覽器打開就可以看。

例外：.vtt 字幕檔在雙擊打開時不會顯示（瀏覽器的安全限制），push 到 GitHub Pages 之後就正常了。想在本機看字幕，可以在資料夾裡執行 `python3 -m http.server`，再打開 http://localhost:8000。

## 影片建議

- 每段剪短（5 到 30 秒），標注和說話者字幕先在 Premiere 做好
- 輸出設定：H.264、1080p 或 720p，目標位元率約 3 到 5 Mbps
- **GitHub 單一檔案上限 100 MB**，超過 50 MB 會跳警告。影片太大請壓縮，或切成多段
- 瀏覽器只允許「靜音」影片自動播放，所以頁面上每支影片都有「開啟聲音」按鈕

## 發布到 GitHub Pages

1. 在 GitHub 建立一個新的 repository（例如 `visual-investigation`）
2. 把整個資料夾 push 上去：
   ```bash
   cd visual-investigation
   git init
   git add .
   git commit -m "first version"
   git branch -M main
   git remote add origin https://github.com/你的帳號/visual-investigation.git
   git push -u origin main
   ```
3. 到 repository 的 **Settings → Pages**，Source 選 **Deploy from a branch**，Branch 選 `main`、資料夾選 `/ (root)`，按 Save
4. 等一到兩分鐘，網址會是 `https://你的帳號.github.io/visual-investigation/`

之後每次更新：

```bash
git add .
git commit -m "更新進度"
git push
```

注意：public 的 repository 任何人都看得到內容和影片。如果調查素材敏感，請先確認可以公開。
