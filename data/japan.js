// Country ID card — schema reference lives in data/index.js
export default {
  code: "jp",
  name: "Japan",
  flag: "🇯🇵",
  region: "East Asia",
  tagline: "Cedar shrines, mountain trails, and food raised to a craft.",

  languages: {
    name: "Japanese",
    note: "No tones. Vowels are pure (a-e-i-o-u as in Spanish). A little effort goes a long way — politeness matters more than perfect grammar.",
    phrases: [
      { en: "Hello", local: "こんにちは", pron: "kon-nichi-wa" },
      { en: "Good morning", local: "おはようございます", pron: "ohayō gozaimasu" },
      { en: "Thank you", local: "ありがとうございます", pron: "arigatō gozaimasu" },
      { en: "Please", local: "お願いします", pron: "onegai shimasu" },
      { en: "Excuse me / Sorry", local: "すみません", pron: "sumimasen" },
      { en: "Yes / No", local: "はい / いいえ", pron: "hai / iie" },
      { en: "How much is it?", local: "いくらですか？", pron: "ikura desu ka?" },
      { en: "Where is…?", local: "…はどこですか？", pron: "… wa doko desu ka?" },
      { en: "Delicious!", local: "おいしい！", pron: "oishii!" },
      { en: "Cheers!", local: "乾杯！", pron: "kanpai!" },
      { en: "Goodbye", local: "さようなら", pron: "sayōnara" },
    ],
  },

  history: {
    summary:
      "Japan spent much of its history as a chain of islands absorbing ideas from China and Korea — writing, Buddhism, city planning — then reworking them into something unmistakably its own. Centuries of samurai rule under shōguns ended when the country sealed itself off almost entirely for over 200 years (the Edo period), a hothouse that produced much of what we now call 'traditional' Japan. Forced open in the 1850s, it modernized at breakneck speed, built an empire, lost catastrophically in WWII, and rebuilt into a global economic power — all while keeping shrines, festivals, and craft traditions very much alive.",
    timeline: [
      { era: "c. 300 BCE–300 CE", text: "Wet-rice farming and the first clan-based states take shape." },
      { era: "794–1185 (Heian)", text: "Courtly golden age in Kyoto; 'The Tale of Genji' is written." },
      { era: "1603–1868 (Edo)", text: "Tokugawa shōguns close the country; peace, cities, and craft flourish." },
      { era: "1868 (Meiji Restoration)", text: "Rapid industrial modernization under the restored emperor." },
      { era: "1945–present", text: "Postwar reconstruction into a technological and cultural powerhouse." },
    ],
  },

  books: [
    { title: "The Tale of Genji", author: "Murasaki Shikibu", year: "c. 1010", note: "The world's first novel — court intrigue and impermanence from the Heian era." },
    { title: "The Roads to Sata", author: "Alan Booth", year: "1985", note: "A 2,000-mile walk down the length of Japan; the anti-tourist Japan." },
    { title: "Kokoro", author: "Natsume Sōseki", year: "1914", note: "Quiet, aching novel about the shift from old Japan to modern life." },
    { title: "The Narrow Road to the Deep North", author: "Matsuo Bashō", year: "1694", note: "Bashō's travel haiku through the wild north — a hiker's classic." },
  ],

  meals: [
    { name: "Ramen", description: "Regional to obsession — miso in Sapporo, tonkotsu in Fukuoka. Slurping is encouraged.", tip: "Look for tiny counter shops with a ticket vending machine at the door." },
    { name: "Okonomiyaki", description: "Savory cabbage pancake griddled at your table; Osaka and Hiroshima each swear their version is right." },
    { name: "Sushi & sashimi", description: "Best eaten at a counter where the chef hands you each piece; morning markets are cheapest." },
    { name: "Soba", description: "Buckwheat noodles, hot or cold — a mountain-village staple, especially around Nagano." },
    { name: "Kaiseki", description: "Multi-course seasonal tasting menu; the pinnacle of Japanese food craft, often at ryokan inns." },
  ],

  places: [
    { name: "Kumano Kodo", category: "nature", region: "Kii Peninsula", description: "Ancient pilgrimage trails through cedar forest linking remote shrines — walk hut-to-hut, few crowds." },
    { name: "Naoshima", category: "architecture", region: "Seto Inland Sea", description: "Island of Tadao Ando concrete museums and outdoor art; take the ferry and rent a bike." },
    { name: "Kanazawa", category: "history", region: "Ishikawa", description: "Intact Edo-era geisha and samurai districts, gold-leaf craft, one of Japan's great gardens — Kyoto without the crush." },
    { name: "Yakushima", category: "nature", region: "Kyūshū (south)", description: "Rain-soaked island of thousand-year-old cedars and mossy ravines that inspired 'Princess Mononoke'." },
    { name: "Nishiki Market", category: "food", region: "Kyoto", description: "Narrow covered market — pickles, tofu, tsukudani; go hungry and graze the stalls." },
    { name: "Ouchi-juku", category: "offbeat", region: "Fukushima", description: "Thatched-roof former post town in the mountains where you eat soba with a single leek instead of chopsticks." },
    { name: "Kōya-san", category: "history", region: "Wakayama", description: "Mountaintop Buddhist monastery town; stay overnight in a temple and join dawn prayers." },
  ],
};
