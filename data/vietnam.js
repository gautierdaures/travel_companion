// Country ID card — schema reference lives in data/index.js
export default {
  code: "vn",
  name: "Vietnam",
  flag: "🇻🇳",
  region: "Southeast Asia",
  tagline: "Limestone bays, terraced rice, and the best street food on earth.",

  languages: {
    name: "Vietnamese",
    note: "Tonal with six tones, written in a Latin alphabet loaded with diacritics that mark those tones. Northern and southern accents differ. Locals are forgiving — a smiling 'cảm ơn' opens doors.",
    phrases: [
      { en: "Hello", local: "Xin chào", pron: "sin chow" },
      { en: "Thank you", local: "Cảm ơn", pron: "gam un" },
      { en: "You're welcome", local: "Không có gì", pron: "khom gaw zee" },
      { en: "Please", local: "Làm ơn", pron: "lam un" },
      { en: "Excuse me / Sorry", local: "Xin lỗi", pron: "sin loy" },
      { en: "Yes / No", local: "Vâng / Không", pron: "vung / khom" },
      { en: "How much is it?", local: "Bao nhiêu tiền?", pron: "bow nyew tien?" },
      { en: "Where is…?", local: "…ở đâu?", pron: "… uh dow?" },
      { en: "Delicious!", local: "Ngon quá!", pron: "ngon kwa!" },
      { en: "Cheers!", local: "Một hai ba, dô!", pron: "mot hai ba, yo!" },
      { en: "Goodbye", local: "Tạm biệt", pron: "tam byet" },
    ],
  },

  history: {
    summary:
      "Vietnam spent a thousand years under Chinese rule before winning independence in the 10th century, then defended it fiercely — repelling Mongol fleets and building dynasties that pushed the country's borders steadily south along the coast. French colonization in the 19th century brought coffee, baguettes, and railways along with exploitation. The 20th century was defined by struggle: independence declared in 1945, the long war that split north from south, and reunification in 1975. Since the Đổi Mới reforms of 1986, Vietnam has opened up and boomed, one of Asia's fastest-changing economies while remaining deeply tied to family, ancestors, and the rhythms of the rice harvest.",
    timeline: [
      { era: "111 BCE–938 CE", text: "A millennium of Chinese rule leaves lasting marks on language and cuisine." },
      { era: "938 (Battle of Bạch Đằng)", text: "Ngô Quyền defeats the Chinese fleet and wins independence." },
      { era: "1802–1945 (Nguyễn dynasty)", text: "The last imperial dynasty rules from the citadel at Huế." },
      { era: "1945–1975", text: "Independence declared; decades of war end in reunification." },
      { era: "1986 (Đổi Mới)", text: "Market reforms open the economy and transform daily life." },
    ],
  },

  books: [
    { title: "The Sympathizer", author: "Viet Thanh Nguyen", year: "2015", note: "A double agent's darkly funny reckoning with the war and exile — Pulitzer winner." },
    { title: "The Quiet American", author: "Graham Greene", year: "1955", note: "Love and politics in 1950s Saigon as French colonialism unravels." },
    { title: "The Sorrow of War", author: "Bảo Ninh", year: "1990", note: "A North Vietnamese soldier's haunted memory — the war from the other side." },
    { title: "Vietnam: A New History", author: "Christopher Goscha", year: "2016", note: "A sweeping, readable history well beyond the war years." },
  ],

  meals: [
    { name: "Phở", description: "The national soup — rice noodles in a clear beef or chicken broth simmered for hours, with herbs, lime, and chili added to taste.", tip: "Eat it for breakfast at a busy street stall; the broth is best early before it's been sitting." },
    { name: "Bánh mì", description: "A French-colonial baguette stuffed with pâté, pickled vegetables, chili, and cilantro — the world's best sandwich, argued fiercely." },
    { name: "Bún chả", description: "Grilled pork patties in a sweet-sour dipping broth with rice vermicelli and herbs — Hanoi's specialty." },
    { name: "Gỏi cuốn", description: "Fresh spring rolls of shrimp, herbs, and noodles wrapped in translucent rice paper, dunked in peanut sauce." },
    { name: "Cà phê sữa đá", description: "Strong drip coffee over sweetened condensed milk and ice — a colonial legacy turned national obsession." },
  ],

  climate: {
    unit: "°C",
    note: "Figures are for Hanoi / the north, which has a cool winter. The centre (Huế, Đà Nẵng) floods Sep–Nov, and the south (Saigon, Mekong) is hot year-round with a wet season May–Oct.",
    coords: [21.03, 105.85], // Hanoi — representative point for the fetch script
    key: "vn",
    best: [3, 4, 10, 11],
    avoid: [5, 6, 7, 8, 9],
    months: [
      { mean: 16, rain: 20 }, { mean: 18, rain: 30 }, { mean: 21, rain: 40 },
      { mean: 25, rain: 90 }, { mean: 27, rain: 190 }, { mean: 29, rain: 240 },
      { mean: 29, rain: 290 }, { mean: 28, rain: 320 }, { mean: 27, rain: 260 },
      { mean: 24, rain: 130 }, { mean: 21, rain: 45 }, { mean: 17, rain: 20 },
    ],
  },

  events: [
    { name: "Tết (Lunar New Year)", when: "Late Jan – mid Feb", months: [1, 2], kind: "avoid", description: "The most important holiday of the year — the whole country travels home and effectively shuts for a week: transport is jammed and many restaurants, shops, and sights close." },
    { name: "Hội An Lantern Festival", when: "Every full moon", months: [], kind: "go", description: "On the 14th night of each lunar month the old town cuts its electric lights and floats candlelit lanterns down the river — the loveliest evening in Vietnam." },
    { name: "Mid-Autumn Festival", when: "September", months: [9], kind: "go", description: "Lion dances, mooncakes, and children's lantern parades fill the streets after dark — especially charming in Hội An and Hanoi's Old Quarter." },
    { name: "Reunification Day & Labour Day", when: "Apr 30 – May 1", months: [4, 5], kind: "note", description: "Back-to-back public holidays send locals to the coast; beach towns and flights fill up and prices climb — book ahead or steer clear." },
  ],

  places: [
    { name: "Hạ Long Bay", category: "nature", coords: [20.9101, 107.1839], region: "Quảng Ninh (north)", description: "Thousands of limestone islands rising from emerald water; sleep aboard a junk and slip into quieter Bái Tử Long to dodge crowds." },
    { name: "Hội An Old Town", category: "history", coords: [15.8801, 108.338], region: "central coast", description: "A lantern-lit former trading port of tailor shops and yellow merchant houses, car-free and glowing after dark." },
    { name: "Hà Giang Loop", category: "offbeat", coords: [22.8268, 104.9784], region: "far north", description: "A three-day motorbike ride through the country's most dramatic mountains, terraced valleys, and ethnic-minority markets." },
    { name: "Imperial Citadel of Huế", category: "history", coords: [16.4698, 107.5796], region: "central Vietnam", description: "The moated palace complex of the Nguyễn emperors on the Perfume River — partly ruined, deeply atmospheric." },
    { name: "Phong Nha caves", category: "nature", coords: [17.59, 106.283], region: "Quảng Bình", description: "Home to Sơn Đoòng, the world's largest cave; even the accessible caverns here are cathedral-scaled." },
    { name: "Mekong Delta", category: "nature", coords: [10.0452, 105.7469], region: "the south", description: "A watery maze of floating markets, fruit orchards, and stilt houses — explore by boat from Cần Thơ at dawn." },
    { name: "Sa Pa rice terraces", category: "nature", coords: [22.3364, 103.8438], region: "Lào Cai", description: "Staircase valleys of green-and-gold paddies farmed by Hmong and Dao communities; trek village-to-village." },
  ],
};
