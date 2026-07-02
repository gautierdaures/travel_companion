// Country ID card — schema reference lives in data/index.js
export default {
  code: "cn",
  name: "China",
  flag: "🇨🇳",
  region: "East Asia",
  tagline: "Five thousand years of empire, from terracotta armies to neon megacities.",

  languages: {
    name: "Mandarin Chinese",
    note: "Tonal — the same syllable means different things at four different pitches, so 'mā/má/mǎ/mà' are four words. Pinyin (romanization) helps, but pointing and a translation app go a long way. Regional languages like Cantonese differ hugely.",
    phrases: [
      { en: "Hello", local: "你好", pron: "nǐ hǎo" },
      { en: "Thank you", local: "谢谢", pron: "xiè xie" },
      { en: "You're welcome", local: "不客气", pron: "bú kè qi" },
      { en: "Please", local: "请", pron: "qǐng" },
      { en: "Excuse me / Sorry", local: "对不起", pron: "duì bu qǐ" },
      { en: "Yes / No", local: "是 / 不是", pron: "shì / bú shì" },
      { en: "How much is it?", local: "多少钱？", pron: "duō shǎo qián?" },
      { en: "Where is…?", local: "…在哪里？", pron: "… zài nǎ lǐ?" },
      { en: "Delicious!", local: "好吃！", pron: "hǎo chī!" },
      { en: "Cheers!", local: "干杯！", pron: "gān bēi!" },
      { en: "Goodbye", local: "再见", pron: "zài jiàn" },
    ],
  },

  history: {
    summary:
      "China is the world's oldest continuous civilization, unified under its first emperor in 221 BCE and ruled by a succession of dynasties — Han, Tang, Song, Ming, Qing — each leaving philosophy, poetry, porcelain, and engineering on a monumental scale. The Great Wall, the Grand Canal, gunpowder, paper, and the compass all trace back here. The last emperor fell in 1912; decades of upheaval, civil war, and the founding of the People's Republic in 1949 followed. Since the reforms of the late 1970s, China has transformed from a rural society into an economic superpower at breathtaking speed, while ancient temples and tea houses persist beside the skyscrapers.",
    timeline: [
      { era: "221 BCE (Qin unification)", text: "The first emperor unites the warring states and standardizes writing and roads." },
      { era: "618–907 (Tang dynasty)", text: "A cosmopolitan golden age of poetry, Silk Road trade, and Buddhist flowering." },
      { era: "1368–1644 (Ming dynasty)", text: "The Forbidden City is built and the Great Wall reaches its familiar form." },
      { era: "1912 (End of empire)", text: "The Qing dynasty falls; two thousand years of imperial rule end." },
      { era: "1978–present", text: "Economic reforms open the country and drive decades of explosive growth." },
    ],
  },

  books: [
    { title: "Wild Swans", author: "Jung Chang", year: "1991", note: "Three generations of women through a century of Chinese upheaval — the modern classic." },
    { title: "River Town", author: "Peter Hessler", year: "2001", note: "A Peace Corps teacher on the Yangtze captures China on the cusp of change." },
    { title: "Journey to the West", author: "Wu Cheng'en", year: "c. 1592", note: "The Monkey King's pilgrimage — China's beloved mythic adventure." },
    { title: "The Three-Body Problem", author: "Liu Cixin", year: "2008", note: "Cultural Revolution history spirals into cosmic sci-fi; a global phenomenon." },
  ],

  meals: [
    { name: "Peking duck", description: "Lacquered, crisp-skinned duck carved tableside and rolled into thin pancakes with scallion and hoisin.", tip: "In Beijing, book ahead at a specialist roast-duck house — the whole meal is built around one bird." },
    { name: "Dim sum", description: "A Cantonese parade of small steamed and fried dishes — dumplings, buns, rolls — pushed around on carts for late-morning yum cha." },
    { name: "Hot pot", description: "A simmering communal cauldron you cook your own meat and vegetables in; Sichuan's version is numbingly spicy." },
    { name: "Xiaolongbao", description: "Shanghai soup dumplings — bite a hole, sip the broth inside, then eat; scaldingly good." },
    { name: "Hand-pulled noodles (lamian)", description: "Dough stretched to strands before your eyes, from the Muslim northwest — often in a clear beef broth." },
  ],

  climate: {
    unit: "°C",
    note: "Figures are for Beijing / the north. The south (Guangzhou, Hong Kong) is subtropical and humid, and the far west and Tibet are high and dry — check your specific region.",
    best: [4, 5, 9, 10],
    months: [
      { min: -8, max: 2, mean: -3 },
      { min: -6, max: 5, mean: 0 },
      { min: 0, max: 12, mean: 6 },
      { min: 8, max: 20, mean: 14 },
      { min: 14, max: 26, mean: 20 },
      { min: 19, max: 30, mean: 25 },
      { min: 22, max: 31, mean: 27 },
      { min: 21, max: 30, mean: 26 },
      { min: 15, max: 26, mean: 20 },
      { min: 8, max: 19, mean: 14 },
      { min: 0, max: 10, mean: 5 },
      { min: -6, max: 4, mean: -1 },
    ],
  },

  events: [
    { name: "Spring Festival (Chinese New Year)", when: "Late Jan – mid Feb", months: [1, 2], kind: "avoid", description: "Spectacular, but the world's largest human migration: hundreds of millions travel home, trains and flights book out weeks ahead, and many shops and sights close for days." },
    { name: "Lantern Festival", when: "15th day after New Year (Feb)", months: [2], kind: "go", description: "Closes the New Year period with glowing lantern displays, riddles, and tangyuan dumplings — lovely once the travel crush has eased." },
    { name: "Mid-Autumn Festival", when: "Sep – early Oct", months: [9, 10], kind: "go", description: "Families gather under the full moon to share mooncakes and light lanterns; parks and lakesides come alive at dusk." },
    { name: "National Day / Golden Week", when: "Oct 1 – 7", months: [10], kind: "avoid", description: "A week-long national holiday when domestic tourists mob every major site; expect packed trains and hours-long queues at the Great Wall and Forbidden City." },
  ],

  places: [
    { name: "The Great Wall (Jinshanling)", category: "history", coords: [40.677, 117.244], region: "near Beijing", description: "Skip the crowded stretches for this partly wild, partly restored section — hike between watchtowers with the wall to yourself." },
    { name: "Forbidden City", category: "architecture", coords: [39.9163, 116.3972], region: "Beijing", description: "The vast imperial palace of the Ming and Qing emperors — 900 buildings behind vermilion walls at the city's heart." },
    { name: "Terracotta Army", category: "history", coords: [34.3841, 109.2785], region: "Xi'an", description: "Thousands of life-size clay soldiers buried to guard the first emperor, each face individually modeled." },
    { name: "Zhangjiajie", category: "nature", coords: [29.317, 110.479], region: "Hunan", description: "Thousands of sheer sandstone pillars rising from the mist — the landscape that inspired the floating mountains of 'Avatar'." },
    { name: "Li River (Guilin to Yangshuo)", category: "nature", coords: [24.9, 110.49], region: "Guangxi", description: "Drift past the karst peaks and water buffalo painted on every scroll of classical China — best by bamboo raft." },
    { name: "Bund & French Concession", category: "architecture", coords: [31.2304, 121.4737], region: "Shanghai", description: "Colonial-era waterfront facing a futurist skyline, and leafy plane-tree streets behind — old and new Shanghai in one walk." },
    { name: "Jiuzhaigou", category: "offbeat", coords: [33.2603, 103.918], region: "Sichuan", description: "A high valley of impossibly turquoise lakes and waterfalls fed by snowmelt, ringed by Tibetan villages." },
  ],
};
