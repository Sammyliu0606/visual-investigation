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
    - sound: false（可選）：不顯示「Sound on」按鈕，適合本來就沒有聲音的影片

  文字裡空一行 = 新段落。可以用 <b>粗體</b>、<i>斜體</i>。
  date（可選）：在段落上方顯示時間標記，適合記錄調查進度。
*/

window.STORY = {
  title: "Pro-Beijing groups silenced and attacked protesters during Xi’s D.C. visit",
  author: "Sammy Liu",
  updated: "October 12, 2026",

  blocks: [
    {
      type: "text",
      text: "Protesters opposing the Chinese Communist Party were blocked, harassed and attacked in Washington DC during Chinese President Xi Jinping’s September visit."
    },
    {
      type: "text",
      text: "Those acted violence included pro-Beijing crowds, guards from a security firm contracted by the Chinese Embassy, and a pro-Beijing community leader with a documented history of organizing crowds that attack protesters during Xi’s visit in San Fransisco in 2023. Masked individuals carried out many of the most violent attacks, according to an analysis of more than 50 videos and social media posts, while non of them were arrested by the US police at the scene. At least one was filmed passing through a security checkpoint into an area the U.S. Secret Service had closed to the public."
    },
    {
      type: "text",
      text: "Of several clashes between protesters and CCP supporters happened around the US Capital during Xi’s visit, the most extreme confrontations was on September 24, after Chinese First Lady Peng Liyuan ended her tour in the Smithsonian National Museum of Asian Art with Melania Trump."
    },
    {
      type: "pair",
      items: [
        { media: "media/clip-01.mp4", credit: "APT" },
        { media: "media/clip-02.mp4", credit: "X @ScarlettCa" }
      ],
      text: "When Peng was still touring the museum, the pro-CCP crowds directed by Chen Shanzhuan, a prominent leader in Chinese immigrants based in New York, were already gathered on Jefferson Dr. "
    },
    {
      type: "pair",
      items: [
        { media: "media/12-3_X@LawrenceSellin.jpeg" },
        { media: "media/12-2_X@LawrenceSellin.jpeg", credit: "X @LawrenceSellin" }
      ],
      text: "Chan has close ties to Beijing. In March 2024, he was the only American in a small group of overseas Chinese invited to China’s top political advisory body, The New York Times reported. The business and hometown associations he runs have organized multiple events in New York City attended by Chinese officials. He also helped organize crowds of supporters when Xi visited San Francisco in 2023."
    },
    {
      type: "pair",
      items: [
        { media: "media/clip-03.mp4", credit: "X @standwithfree" },
        { media: "media/clip-03-1.mp4", credit: "X @whyyoutouzhele" }
      ],
      text: "When Peng stepped out the museum at around 2pm and waving to the crowds, pro-CCP crowds started shouted “Warmly welcome (to the U.S.)” cohesively. Still, some dissidents among the crowds tried to expressed their opposition to Xi Jinping. But many around them later moved not only to silence them but to attack them for what they said."
    },
    {
      type: "heading",
      text: "Silenced by force"
    },
    {
      type: "media",
      side: "left",
      media: "media/clip-04.mp4",
      credit: "X @standwithfree",
      text: "As a protester, Kai Lee, shouted “Step down, Xi Jinping,” Chan thrust a megaphone blaring a pre-recorded “Welcome, welcome, warmly welcome” directly into his face, apprently to drown him out."
    },
    {
      type: "media",
      side: "right",
      media: "media/clip-05.mp4",
      credit: "AP, X @nicksortor",
      text: "The same type of megaphone, looping the same recorded chant, appeared at welcome gatherings across the city."
    },
    {
      type: "media",
      side: "left",
      media: "media/clip-06.mp4",
      credit: "",
      text: "When another protester, Xinzhan Dong, raised a banner reading “Xi Jinping, step down! Chinese Communist Party, step down!”, at least four masked individuals rushed up from behind, and one of them wielding a large closed black umbrella like a baton. At the same moment, a pro-CCP individual tore the banner from his hands."
    },







    {
      type: "wide",
      media: "media/clip-03.mp4",
      credit: "（來源：監視器畫面）"
    }
};
