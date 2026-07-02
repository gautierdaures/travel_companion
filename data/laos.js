// Country ID card — schema reference lives in data/index.js
export default {
  code: "la",
  name: "Laos",
  flag: "🇱🇦",
  region: "Southeast Asia",
  tagline: "The Mekong's unhurried heart — gilded temples and jungle-clad mountains.",

  languages: {
    name: "Lao",
    note: "Tonal and closely related to Thai, written in its own flowing script. Speech is soft and unhurried, matching the pace of life. 'Sabaidee' with a small bow of the hands (the nop) is the all-purpose greeting.",
    phrases: [
      { en: "Hello", local: "ສະບາຍດີ", pron: "sa-bai-dee" },
      { en: "Thank you", local: "ຂອບໃຈ", pron: "khop-jai" },
      { en: "Thank you very much", local: "ຂອບໃຈຫຼາຍໆ", pron: "khop-jai lai-lai" },
      { en: "Please", local: "ກະລຸນາ", pron: "ga-lu-na" },
      { en: "Excuse me / Sorry", local: "ຂໍໂທດ", pron: "kaw-thot" },
      { en: "Yes / No", local: "ແມ່ນ / ບໍ່", pron: "maen / baw" },
      { en: "How much is it?", local: "ເທົ່າໃດ？", pron: "thao-dai?" },
      { en: "Where is…?", local: "…ຢູ່ໃສ？", pron: "… yu-sai?" },
      { en: "Delicious!", local: "ແຊບ！", pron: "saep!" },
      { en: "Cheers!", local: "ໂຊກດີ！", pron: "sok-dee!" },
      { en: "Goodbye", local: "ລາກ່ອນ", pron: "la-kawn" },
    ],
  },

  history: {
    summary:
      "Laos traces its identity to the 14th-century kingdom of Lan Xang — 'the Land of a Million Elephants' — which for centuries ruled the middle Mekong from the royal city of Luang Prabang. Later fragmented and squeezed between powerful neighbors, it fell under French colonial rule in the 19th century as part of Indochina. The country became the most heavily bombed nation per capita in history during the Vietnam War's 'Secret War,' then emerged in 1975 as a socialist republic. Landlocked and mountainous, with a small population and a Buddhist rhythm centered on the temple and the river, Laos remains the most laid-back corner of Southeast Asia.",
    timeline: [
      { era: "1353 (Lan Xang founded)", text: "Fa Ngum unites the Lao principalities into the 'Land of a Million Elephants.'" },
      { era: "16th century", text: "Buddhism flourishes; Luang Prabang and later Vientiane become royal capitals." },
      { era: "1893–1953 (French rule)", text: "Laos becomes a protectorate within French Indochina." },
      { era: "1964–1973 (Secret War)", text: "Massive U.S. bombing during the Vietnam War, still felt through unexploded ordnance." },
      { era: "1975 (Republic)", text: "The monarchy ends and the Lao People's Democratic Republic is founded." },
    ],
  },

  books: [
    { title: "The Coroner's Lunch", author: "Colin Cotterill", year: "2004", note: "A wry murder mystery set in 1970s Vientiane — the whole Dr. Siri series is a joy." },
    { title: "Ant Egg Soup", author: "Natacha Du Pont de Bie", year: "2004", note: "A gastronomic ramble across Laos in search of its little-known cuisine." },
    { title: "Stalking the Elephant Kings", author: "Christopher Kremmer", year: "1997", note: "A search for the fate of the vanished Lao royal family." },
    { title: "A Short History of Laos", author: "Grant Evans", year: "2002", note: "A clear, compact introduction to the land between." },
  ],

  meals: [
    { name: "Larb", description: "The national dish — minced meat or fish tossed with lime, chili, fish sauce, and toasted rice powder, eaten with sticky rice.", tip: "Roll the sticky rice into a ball with your fingers and use it to scoop up the larb." },
    { name: "Sticky rice (khao niaw)", description: "Steamed glutinous rice served in a woven basket; the national staple, eaten by hand at every meal." },
    { name: "Tam mak hoong", description: "Green papaya salad pounded in a mortar — funkier and fierier than the Thai version, with fermented fish sauce." },
    { name: "Khao piak sen", description: "A comforting bowl of hand-cut rice noodles in chicken broth — the Lao breakfast of choice." },
    { name: "Or lam", description: "A Luang Prabang stew of buffalo meat, herbs, and eggplant, mildly bitter and peppery from mak khaen." },
  ],

  climate: {
    unit: "°C",
    note: "Figures are for Vientiane / the Mekong lowlands. Three seasons: cool-dry (Nov–Feb), hot (Mar–May), and wet (Jun–Oct). Northern mountains like Luang Prabang are noticeably cooler at night.",
    best: [11, 12, 1, 2],
    months: [
      { min: 17, max: 28, mean: 22 },
      { min: 19, max: 30, mean: 24 },
      { min: 22, max: 33, mean: 27 },
      { min: 24, max: 34, mean: 29 },
      { min: 25, max: 33, mean: 29 },
      { min: 25, max: 32, mean: 28 },
      { min: 25, max: 31, mean: 28 },
      { min: 24, max: 31, mean: 27 },
      { min: 24, max: 31, mean: 27 },
      { min: 23, max: 31, mean: 27 },
      { min: 20, max: 29, mean: 24 },
      { min: 17, max: 28, mean: 22 },
    ],
  },

  events: [
    { name: "Pi Mai (Lao New Year)", when: "Mid-April", months: [4], kind: "go", description: "A three-day nationwide water fight and temple festival — joyous and drenching, but it's also the hottest, dustiest time of year and many businesses close." },
    { name: "Boun Bang Fai (Rocket Festival)", when: "May", months: [5], kind: "go", description: "Villages launch home-made bamboo rockets skyward to prod the heavens for rain — raucous, boozy, and wonderfully local." },
    { name: "Boat Racing Festival", when: "Sep – Oct", months: [9, 10], kind: "go", description: "Longboat crews race on the Mekong to mark the end of Buddhist Lent; riverbanks in Luang Prabang and Vientiane turn into a party." },
    { name: "That Luang Festival", when: "November (full moon)", months: [11], kind: "go", description: "Laos's biggest religious festival, centred on Vientiane's golden stupa — candlelit processions, alms, and a huge fair." },
  ],

  places: [
    { name: "Luang Prabang", category: "history", coords: [19.8867, 102.135], region: "north-central Laos", description: "A UNESCO town of gilded wats and French villas where saffron-robed monks collect alms at dawn — the soul of Laos." },
    { name: "Kuang Si Falls", category: "nature", coords: [19.749, 101.991], region: "near Luang Prabang", description: "Tiers of turquoise pools cascading through the forest; swim in the lower ones and visit the bear rescue on the way in." },
    { name: "Kong Lor Cave", category: "offbeat", coords: [18.29, 104.82], region: "Khammouane", description: "A 7 km river cave you travel through by longtail boat, headlamp piercing the dark of a limestone mountain." },
    { name: "Plain of Jars", category: "history", coords: [19.42, 103.15], region: "Xieng Khouang", description: "Fields scattered with thousands of ancient stone jars of unknown purpose, amid a landscape still scarred by wartime bombing." },
    { name: "4,000 Islands (Si Phan Don)", category: "nature", coords: [14.0, 105.93], region: "far south", description: "Where the Mekong braids into countless islets — hammocks, Irrawaddy dolphins, and river life at its slowest." },
    { name: "Nam Ha Protected Area", category: "nature", coords: [20.95, 101.4], region: "Luang Namtha", description: "Trek and homestay through dense forest and hill-tribe villages in the far northern highlands." },
    { name: "Vat Phou", category: "history", coords: [14.848, 105.822], region: "Champasak", description: "A ruined Khmer temple predating Angkor, climbing a hillside above the Mekong plain." },
  ],
};
