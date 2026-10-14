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
      text: "When Peng stepped out the museum at around 2pm and waved to the crowds, pro-CCP supporters began chanting “Warmly welcome (to the U.S.)” together. Still, some dissidents among the crowds tried to expressed their opposition to Xi Jinping. One protester loudly shouted, “Xi Jinping is a devil!” But many around them soon moved not only to silence them but to attack them for what they said."
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
      credit: "X @standwithfree, @whyyoutouzhele, @ScarlettCa",
      text: "At the same time, two masked individuals opened their black umbrellas between Peng and the protesters, apparently to keep her from seeing them."
    },
    {
      type: "media",
      side: "left",
      media: "media/clip-07.mp4",
      credit: "X @whyyoutouzhele, @ScarlettCa",
      text: "When another protester, Xinzhan Dong, raised a banner reading “Xi Jinping, step down! Chinese Communist Party, step down!”, at least four masked individuals rushed up from behind, and one of them wielding a large closed black umbrella like a baton. At the same moment, a pro-CCP individual tore the banner from his hands."
    },
    {
      type: "media",
      side: "left",
      media: "media/clip-08.mp4",
      credit: "X @whyyoutouzhele, @ScarlettCa",
      text: "Guanjun Geng, standing besides Dong, grabbed the umbrella’s tip as it was jabbed toward them and struggled with the masked individual for control of it. Soon, he was carried away by the ICS police to the back of the crowd and was thrown to the ground."
    },
    {
      type: "pair",
      items: [
        { media: "media/07-1_X@SomeCharlieBear.png", credit: "X @SomeCharlieBear" },
        { media: "media/clip-09.mp4", credit: "X @JenniferZeng15" }
      ],
      text: "The black umbrella resembles a design in a Chinese patent for a multifunctional anti-riot umbrella intended for police use. It can be a baton when closed and its canopy shields against knives, sticks and stones when opened. The umbrella also includes a tear gas in the handle. Plainclothes police around Tiananmen Square have been seen carrying similar umbrellas."
    },
    {
      type: "media",
      side: "left",
      media: "media/clip-10.mp4",
      credit: "X @whyyoutouzhele, @standwithfree",
      text: "Pengfei Niu came forward to the conflict, but was soon beaten by another masked individuals and dragged by three to the back of the crowds violently. Niu was pushed on the ground in front of the US Park Police."
    },
    {
      type: "heading",
      text: "Targeted attacks"
    },
    {
      type: "text",
      text: "Amid the clashes, a masked woman pepper-sprayed four protesters at different times and places. Each time, she walked straight toward her target, sprayed them in the face and was gone within two seconds. All four were members of the Democratic Party of China, a group founded by dissidents and banned by the Chinese Communist Party."
    },
    {
      type: "pair",
      items: [
        { media: "media/clip-11.mp4", credit: "X @whyyoutouzhele" },
        { media: "media/08-2_X@MinMin89485072.jpeg", credit: "X @MinMin89485072" }
      ],
      text: "The first was Mingfa Huang, who joined the party in Los Angeles in 2023 and has been active in the pro-democracy movement. The woman rushed up from behind him, sprayed him at least three times from two angles and ran off."
    },
    {
      type: "pair",
      items: [
        { media: "media/clip-12.mp4", credit: "X @whyyoutouzhele" },
        { media: "media/clip-13.mp4", credit: "X @MinMin89485072" }
      ],
      text: "Seconds later, she walked straight up to Guanjun Geng, an active member of the party’s Los Angeles branch. Geng had just been thrown to the ground by a guard from ICS, the security firm contracted by the Chinese Embassy. The woman crouched down, sprayed him and left. U.S. Park Police officers were only steps away."
    },
    {
      type: "pair",
      items: [
        { media: "media/clip-14.mp4", credit: "X @whyyoutouzhele" },
        { media: "media/clip-15.mp4", credit: "X @MinMin89485072" }
      ],
      text: "Seconds later, she walked straight up to Guanjun Geng, an active member of the party’s Los Angeles branch. Geng had just been thrown to the ground by a guard from ICS, the security firm contracted by the Chinese Embassy. The woman crouched down, sprayed him and left. U.S. Park Police officers were only steps away."
    },
    {
      type: "pair",
      items: [
        { media: "media/08-4_X@MinMin89485072.jpeg", credit: "X @MinMin89485072" },
        { media: "media/Screenshot 2026-10-13 at 10.22.40 PM.png", credit: "X @MinMin89485072" }
      ],
      text: "US Park Police, MPD and USSS all said they didn’t make any arrest during the conflict and USPP said “no one was able to identify the suspect who used the pepper spray when USPP arrived on scene.”"
    },
    {
      type: "heading",
      text: "Masked individuals"
    },
    {
      type: "pair",
      items: [
        { media: "media/64_X@jenniferzeng97.jpeg", credit: "X @jenniferzeng97" },
        { media: "media/clip-16.mp4", credit: "X @jenniferzeng97" },
        {media: "media/clip-17.mp4", credit: "X @dayutalk" }
      ],
      text:"Masked individuals dressed exactly like those in this confrontation — khaki baseball caps, sunglasses, black masks and dark jackets — appeared in large numbers on Washington streets during Xi’s visit. They wore no visible badges or identification but videos show them patrolling around protest sites across Washington DC and filming protesters’ faces up close, and in this confrontation, they used force to silence protesters and picked out some of them to attack."
    },
    {
      type: "pair",
      items: [
        { media: "media/clip-18.mp4", credit: "X @muyang" },
        { media: "media/65-2_X@HPizheng.jpeg", credit: "X @HPizheng" },
        {media: "media/65_X@HPizheng11983 2.jpeg", credit: "X @dHPizheng" }
      ],
      text:"There are signs these masked individuals were not acting alone. A video shows a group of them filing into an area on Constitution Avenue that the Secret Service had closed to the public. The Secret Service said the sidewalks around the Waldorf Astoria “were closed during this visit” and that “some pedestrians may have been prompted to provide proof of residency or work to access areas around this site.” A photo taken during the confrontation shows the masked woman who used pepper spray talking with a ICS guard. Another photo shows her leaving the scene escorted by other masked individuals."
    }
  ]
};
