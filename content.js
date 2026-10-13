/*
  ============================================================
  這是你唯一需要編輯的檔案
  ============================================================

  頁面由上到下的每一段，就是下面 blocks 裡的一個 { ... }。
  想新增一段：複製一個 { ... }，貼在想要的位置，改內容就好。
  每個 { ... } 之間要用逗號隔開。

  可用的段落類型（type）：

    "heading"  章節標題
    "text"     只有文字
    "media"    一段影片或照片 + 旁邊的文字（像華郵那樣左右交錯）
               side: "left" 影片在左、"right" 影片在右
    "wide"     滿版的大影片或照片，下面放圖說
    "pair"     兩支影片／照片並排

  影片和照片：放進 media 資料夾，寫上檔名，例如 "media/clip-01.mp4"
    - .mp4 / .webm 會被當成影片：捲到就自動播放（靜音、循環）
    - .jpg / .png / .webp 會被當成照片
    - subtitles（可選）：.vtt 字幕檔
    - poster（可選）：影片載入前顯示的封面圖，例如 "media/clip-01.jpg"
    - credit：圖說／來源，會顯示在影片下方

  文字裡空一行 = 新段落。可以用 <b>粗體</b>、<i>斜體</i>。
  date（可選）：在段落上方顯示時間標記，適合記錄調查進度。
*/

window.STORY = {
  title: "Pro-Beijing Groups Silenced and Attacked Protesters During Xi’s Washington Visit",
  author: "Sammy Liu",
  updated: "2026-10-12",

  blocks: [
    {
      type: "text",
      text: "Protesters opposing the Chinese Communist Party were blocked, harassed and attacked in Washington DC during Chinese President Xi Jinping’s September visit."
    },
    {
      type: "text",
      text: "Those acted violence included pro-Beijing crowds, guards from a security firm contracted by the Chinese Embassy, and a pro-Beijing community leader with a documented history of organizing crowds that attack protesters during Xi’s visit in San Fransisco in 2023. Masked individuals carried out many of the most violent attacks, according to an analysis of more than 50 videos and social media posts, while non of them were arrested by the US police at the scene. At least one was filmed passing through a security checkpoint into an area the U.S. Secret Service had closed to the public."
    },

    { type: "heading", text: "第一部分：事件經過" },

    {
      type: "media",
      side: "left",
      media: "media/clip-01.mp4",
      subtitles: "media/clip-01.vtt",
      credit: "（來源：目擊者提供）",
      date: "14:32:05",
      text: "這段文字會出現在影片旁邊。描述這支影片裡看到什麼，以及它在整個時間軸上的位置。"
    },

    {
      type: "media",
      side: "right",
      media: "media/clip-02.mp4",
      credit: "（來源：社群媒體）",
      date: "14:32:40",
      text: "下一段影片換到右邊。標注（圈人、反黑、說話者字幕）建議在 Premiere 裡先做好再輸出。"
    },

    {
      type: "wide",
      media: "media/clip-03.mp4",
      credit: "（來源：監視器畫面）"
    },

    {
      type: "pair",
      items: [
        { media: "media/clip-01.mp4", credit: "角度 A" },
        { media: "media/photo-01.jpg", credit: "角度 B" }
      ],
      text: "兩個角度並排比對，適合呈現同一時間、不同來源的畫面。"
    },

    { type: "heading", text: "第二部分：目前進度" },

    {
      type: "text",
      date: "10 月 12 日",
      text: "這裡可以寫調查進度：已經確認了什麼、還在查證什麼、下一步打算做什麼。"
    }
  ]
};
