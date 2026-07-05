// Country ID card — schema reference lives in data/index.js
export default {
  code: "kh",
  name: "Cambodia",
  flag: "🇰🇭",
  region: "Southeast Asia",
  tagline: "Angkor's temple-mountains rising from the jungle, and a nation reborn.",

  languages: {
    name: "Khmer",
    note: "Non-tonal (a relief after its neighbors), written in an elegant curling script descended from ancient India. It has one of the world's largest alphabets. A warm 'suostei' and a slight bow with the hands (the sampeah) go a long way.",
    phrases: [
      { en: "Hello", local: "សួស្តី", pron: "suo-sdei" },
      { en: "Thank you", local: "អរគុណ", pron: "aw-kun" },
      { en: "Thank you very much", local: "អរគុណច្រើន", pron: "aw-kun chraeun" },
      { en: "Please", local: "សូម", pron: "soam" },
      { en: "Excuse me / Sorry", local: "សុំទោស", pron: "som-toh" },
      { en: "Yes / No", local: "បាទ/ទេ", pron: "baat (m) / te" },
      { en: "How much is it?", local: "តម្លៃប៉ុន្មាន？", pron: "thlai pon-maan?" },
      { en: "Where is…?", local: "…នៅឯណា？", pron: "… nov ae naa?" },
      { en: "Delicious!", local: "ឆ្ងាញ់！", pron: "chnganh!" },
      { en: "Cheers!", local: "លើកកែវ！", pron: "leuk kaew!" },
      { en: "Goodbye", local: "លាហើយ", pron: "lea haey" },
    ],
  },

  history: {
    summary:
      "Cambodia was the heart of the Khmer Empire, which from the 9th to 15th centuries ruled much of mainland Southeast Asia and built Angkor — the largest religious monument on Earth — as its capital. After Angkor's decline the kingdom shrank, caught between Thai and Vietnamese neighbors, and became a French protectorate in the 19th century. Independence in 1953 gave way to one of the century's darkest chapters: the Khmer Rouge seized power in 1975 and killed roughly a quarter of the population before being driven out in 1979. Cambodia has spent the decades since rebuilding, and today its people — remarkably warm given that history — welcome visitors to a country of temples, rivers, and resilience.",
    timeline: [
      { era: "802–1431 (Khmer Empire)", text: "Angkor becomes the capital of a vast empire and builds its great temples." },
      { era: "1113–1150 (Angkor Wat)", text: "Suryavarman II builds the world's largest religious monument." },
      { era: "1863–1953 (French protectorate)", text: "Cambodia falls under French colonial administration, then wins independence." },
      { era: "1975–1979 (Khmer Rouge)", text: "Pol Pot's regime empties the cities; a genocide kills some two million people." },
      { era: "1993–present", text: "A UN-backed monarchy is restored and the country rebuilds and reopens." },
    ],
  },

  books: [
    { title: "First They Killed My Father", author: "Loung Ung", year: "2000", note: "A child's survival of the Khmer Rouge years — searing and essential." },
    { title: "The Gate", author: "François Bizot", year: "2000", note: "A French scholar captured by the Khmer Rouge; a rare, human first-hand account." },
    { title: "River of Time", author: "Jon Swain", year: "1995", note: "A war correspondent's elegy for 1970s Indochina and lost Phnom Penh." },
    { title: "A History of Cambodia", author: "David Chandler", year: "1983", note: "The standard, readable history from Angkor to the present." },
  ],

  meals: [
    { name: "Fish amok", description: "The national dish — freshwater fish steamed in a mild coconut-and-lemongrass curry (kroeung) set with egg, served in a banana-leaf cup.", tip: "Best where it's freshly steamed to order rather than ladled from a warming tray." },
    { name: "Kuy teav", description: "A clear pork-and-rice-noodle soup eaten for breakfast, dressed at the table with lime, herbs, and chili." },
    { name: "Lok lak", description: "Stir-fried cubes of marinated beef served over lettuce and tomato with a lime-and-black-pepper dipping sauce." },
    { name: "Nom banh chok", description: "'Khmer noodles' — rice vermicelli under a green fish gravy and a heap of raw vegetables; a morning market staple." },
    { name: "Bai sach chrouk", description: "Grilled marinated pork over broken rice with pickles and a fried egg — the classic Cambodian breakfast." },
  ],

  climate: {
    unit: "°C",
    note: "Figures are for Phnom Penh / Siem Reap. Tropical and warm all year: a dry season (Nov–Apr) and a wet monsoon (May–Oct). April is the fierce peak of the heat.",
    coords: [11.56, 104.92], // Phnom Penh — representative point for the fetch script
    key: "kh",
    best: [11, 12, 1, 2],
    avoid: [4, 5, 6, 7, 8, 9, 10],
    months: [
      { mean: 27, rain: 15 }, { mean: 28, rain: 8 }, { mean: 30, rain: 39 },
      { mean: 30, rain: 88 }, { mean: 29, rain: 154 }, { mean: 28, rain: 156 },
      { mean: 28, rain: 156 }, { mean: 28, rain: 179 }, { mean: 27, rain: 248 },
      { mean: 27, rain: 247 }, { mean: 27, rain: 77 }, { mean: 26, rain: 27 },
    ],
  },

  events: [
    { name: "Khmer New Year (Choul Chnam Thmey)", when: "Mid-April", months: [4], kind: "note", description: "The joyful three-day New Year, but also the hottest time of year — Angkor fills with domestic visitors and many city businesses pause as families head home." },
    { name: "Angkor Sankranta", when: "Mid-April", months: [4], kind: "go", description: "New Year games, dancing, and traditional festivities staged among the temples of Angkor themselves — a rare chance to see them come alive." },
    { name: "Pchum Ben (Ancestors' Day)", when: "Sep – Oct", months: [9, 10], kind: "note", description: "A solemn 15-day festival honouring ancestors; Cambodians throng the pagodas and, on the public-holiday days, offices and many shops close." },
    { name: "Water Festival (Bon Om Touk)", when: "November (full moon)", months: [11], kind: "go", description: "Cambodia's biggest celebration: millions pack Phnom Penh's riverfront for longboat races marking the reversal of the Tonlé Sap's flow." },
  ],

  places: [
    { name: "Angkor Wat", category: "history", coords: [13.4125, 103.867], region: "Siem Reap", description: "The vast 12th-century temple-mountain, still the world's largest religious monument — arrive before dawn for the reflection at sunrise." },
    { name: "Ta Prohm", category: "history", coords: [13.4348, 103.889], region: "Angkor Archaeological Park", description: "The 'jungle temple' left half-swallowed by strangler-fig roots, atmospheric and otherworldly." },
    { name: "Bayon", category: "architecture", coords: [13.4413, 103.859], region: "Angkor Thom", description: "A temple of over 200 giant serene stone faces gazing in every direction from its towers." },
    { name: "Tuol Sleng & Killing Fields", category: "history", coords: [11.549, 104.917], region: "Phnom Penh", description: "A former school turned prison and the memorial fields nearby — sobering but vital to understanding modern Cambodia." },
    { name: "Koh Rong Samloem", category: "nature", coords: [10.606, 103.302], region: "Gulf of Thailand", description: "A quiet island of white sand and bioluminescent plankton after dark — the mellow antidote to the temples." },
    { name: "Battambang", category: "offbeat", coords: [13.0957, 103.2022], region: "northwest Cambodia", description: "A riverside town of French shophouses, the improvised bamboo train, and some of the country's best countryside cycling." },
    { name: "Kampot & Kep", category: "food", coords: [10.55, 104.25], region: "south coast", description: "Pepper plantations and sleepy colonial towns; eat crab tossed with the region's famous green peppercorns by the sea." },
  ],
};
