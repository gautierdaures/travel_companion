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
    {
      name: "Angkor Wat", category: "history", coords: [13.4125, 103.867], region: "Siem Reap",
      description: "The vast 12th-century temple-mountain, still the world's largest religious monument — arrive before dawn for the reflection at sunrise.",
      wiki: "Angkor Wat",
      long:
        "Angkor Wat is the largest religious monument ever built and the symbol of Cambodia, its five lotus-bud towers stamped on the national flag. Raised in the early 12th century by King Suryavarman II as a Hindu temple to Vishnu — and a model of the cosmos, with its moat as the ocean and its central tower as Mount Meru — it was later adapted for Buddhist worship and has never been abandoned.\n\nBeyond its sheer scale, the wonder is in the detail: nearly a kilometre of exquisite bas-reliefs wrapping the outer gallery, depicting Hindu epics and the famous Churning of the Sea of Milk, and rank upon rank of carved apsara dancers. The classic move is to arrive before dawn to watch the towers reflected in the northern pond as the sky pinks behind them — then explore the cooler galleries once the sunrise crowds disperse.",
    },
    {
      name: "Ta Prohm", category: "history", coords: [13.4348, 103.889], region: "Angkor Archaeological Park",
      description: "The 'jungle temple' left half-swallowed by strangler-fig roots, atmospheric and otherworldly.",
      wiki: "Ta Prohm",
      long:
        "Ta Prohm is the temple the jungle took back. Deliberately left much as 19th-century explorers found it, its corridors and courtyards are gripped and prised apart by the pale, muscular roots of giant strangler figs and silk-cotton trees, stone and timber locked in a slow-motion embrace. The effect — famous from the 'Tomb Raider' film — is uniquely romantic and a little melancholy.\n\nBuilt as a Buddhist monastery and university in the late 12th century, it once housed thousands of attendants and a fortune in gold and gems, according to its own foundation stele. Today it's beloved for atmosphere over grandeur; go early or late to catch the light filtering through the canopy without the crush, and take time to find the smaller, root-wrapped corners away from the main photo spot.",
    },
    {
      name: "Bayon", category: "architecture", coords: [13.4413, 103.859], region: "Angkor Thom",
      description: "A temple of over 200 giant serene stone faces gazing in every direction from its towers.",
      wiki: "Bayon",
      long:
        "At the exact centre of the walled royal city of Angkor Thom stands the Bayon, the state temple of Cambodia's most prolific builder-king, Jayavarman VII. From a distance it reads as a chaotic mountain of stone; up close it resolves into a forest of towers, each carved on every side with a huge, serenely smiling face — more than 200 in all — thought to blend the features of a bodhisattva with those of the king himself.\n\nWander the upper terrace and the faces seem to watch and follow you from every direction, an unforgettable effect in the changing light. Lower down, the outer galleries carry lively bas-reliefs of everyday Angkorian life and great battles with the Cham. The Bayon anchors a whole day inside Angkor Thom, alongside the Terrace of the Elephants and the Baphuon nearby.",
    },
    {
      name: "Tuol Sleng & Killing Fields", category: "history", coords: [11.549, 104.917], region: "Phnom Penh",
      description: "A former school turned prison and the memorial fields nearby — sobering but vital to understanding modern Cambodia.",
      wiki: "Tuol Sleng Genocide Museum",
      long:
        "To understand modern Cambodia you have to confront its darkest chapter, and these two sites in and around Phnom Penh make it unforgettable. Tuol Sleng (S-21) was an ordinary high school that the Khmer Rouge turned into a secret prison and torture centre, where some 12,000–20,000 people were held, photographed, and sent to their deaths; the classrooms, cells, and walls of victims' portraits are preserved as they were.\n\nA short drive away, the Killing Fields of Choeung Ek is where most of those prisoners were murdered and buried in mass graves; today a memorial stupa filled with skulls stands over the site, and an audio guide walks you through it with restraint. It is harrowing rather than enjoyable — but visited respectfully, it honours the victims and is essential context for everything else in the country.",
    },
    {
      name: "Koh Rong Samloem", category: "nature", coords: [10.606, 103.302], region: "Gulf of Thailand",
      description: "A quiet island of white sand and bioluminescent plankton after dark — the mellow antidote to the temples.",
      wiki: "Koh Rong Sanloem",
      long:
        "The quieter, calmer sister of party-prone Koh Rong, Koh Rong Sanloem is the Cambodian island idyll: powder-white bays backed by jungle, water in every shade of blue, and no roads or hectic nightlife to speak of — just simple bungalows, hammocks, and a scattering of dive shops. Saracen Bay is the main arc of sand; Lazy and Sunset beaches offer even more seclusion.\n\nAfter dark, the water offers its own light show: bioluminescent plankton that glows electric blue when you swim through it on a moonless night. Days are for snorkelling, kayaking, or walking the jungle trails between beaches. Reached by a short ferry from Sihanoukville, it's the perfect place to decompress for a few days after the intensity of the temples and the capital.",
    },
    {
      name: "Battambang", category: "offbeat", coords: [13.0957, 103.2022], region: "northwest Cambodia",
      description: "A riverside town of French shophouses, the improvised bamboo train, and some of the country's best countryside cycling.",
      wiki: "Battambang",
      long:
        "Cambodia's second city wears its size lightly: Battambang is a laid-back riverside town with the country's best-preserved streets of French colonial and Chinese shophouse architecture, a lively arts and circus scene, and a slow, likeable rhythm that makes travellers linger longer than they planned. It's a place to cycle, eat, and watch small-town life rather than to tick off big sights.\n\nThe surrounding countryside is the real draw: rice paddies and palm-sugar farms threaded by quiet lanes ideal for cycling, the improvised bamboo 'norry' train, and Phnom Sampeau with its sobering killing caves and a nightly exodus of millions of bats streaming from a cliff at dusk. The Phare Ponleu Selpak circus, which trains young performers from tough backgrounds, puts on a show not to be missed.",
    },
    {
      name: "Kampot", category: "food", coords: [10.6100, 104.1810], region: "south coast",
      description: "A dreamy riverside town of faded shophouses, famous pepper farms, and sunset boat trips.",
      wiki: "Kampot",
      long:
        "Set on a broad river beneath the brooding Bokor mountain, Kampot is one of Cambodia's most relaxing towns — a grid of faded, pastel French shophouses, riverside bars, and a pace that invites doing very little. It has become a haven for independent travellers and a small creative community, without losing its sleepy, sun-bleached charm.\n\nAbove all it is a food-and-flavour destination: the surrounding farms grow Kampot pepper, a protected-origin spice prized by chefs worldwide, and a plantation tour with a tasting is a highlight. Add in fields of sea salt, durian orchards, sunset river cruises to watch the fireflies, and easy day trips into the countryside, and Kampot rewards a genuinely slow few days.",
    },
    {
      name: "Kep", category: "food", coords: [10.4833, 104.3167], region: "south coast",
      description: "A faded seaside resort famous for its crab market — pepper crab eaten by the sea — and a jungle national park.",
      wiki: "Kep National Park",
      long:
        "Once the glamorous seaside retreat of Cambodia's mid-century elite, Kep is now a hauntingly beautiful place of overgrown, war-ruined modernist villas scattered through the greenery, with a small-town calm and a famous appetite. It's an easy hop from Kampot and pairs naturally with it.\n\nThe reason to come is the crab: at Kep's waterfront crab market you pick your catch fresh from the sea and have it wok-tossed with the region's celebrated green Kampot peppercorns — one of the great meals in the country, eaten at a plastic table over the water. Walk it off on the loop trail through the little Kep National Park behind town, with its viewpoints over the sea, or take a boat to sleepy, car-free Rabbit Island offshore.",
    },
    {
      name: "Banteay Srei", category: "architecture", coords: [13.5990, 103.9630], region: "near Angkor",
      description: "A miniature 10th-century temple in rose-pink sandstone, covered in the finest carving at Angkor.",
      wiki: "Banteay Srei",
      long:
        "Small, jewel-like and set apart from the main Angkor cluster, Banteay Srei — the 'Citadel of the Women' — is widely held to contain the most exquisite carving anywhere in Khmer art. Built in the 10th century and, unusually, not by a king but by a Brahmin courtier, it is worked in a fine rose-pink sandstone that takes astonishingly deep, crisp detail.\n\nEvery pediment and lintel is a dense, three-dimensional tableau of Hindu mythology, framed by intricate floral scrollwork so delicate it looks carved in wood rather than stone. Because it's a half-hour drive from the central temples, it's often combined with the river carvings of Kbal Spean nearby, and rewards an early start before the light turns harsh and the crowds arrive at this compact, unmissable masterpiece.",
    },
    {
      name: "Angkor Thom", category: "history", coords: [13.4460, 103.8590], region: "Angkor Archaeological Park",
      description: "The last great walled capital of the Khmer, entered through monumental face-topped gates.",
      wiki: "Angkor Thom",
      long:
        "Angkor Thom — 'the Great City' — was the fortified last capital of the Khmer Empire, laid out by Jayavarman VII in the late 12th century on a scale to match his ambition: a perfect square nine square kilometres in area, enclosed by an eight-metre wall and a wide moat, and once home to perhaps a million people. You enter through one of five monumental gates, each crowned with the same serene four-faced tower and approached by a causeway lined with gods and demons hauling on a giant serpent.\n\nInside lie some of Angkor's greatest monuments beyond the Bayon at its centre: the pyramid of Baphuon, the royal palace enclosure, and the long carved parapets of the Terrace of the Elephants and the Terrace of the Leper King, from which the god-kings once reviewed their armies. It's a full and rewarding day within the walls.",
    },
    {
      name: "Preah Vihear Temple", category: "history", coords: [14.3900, 104.6800], region: "Dângrêk Mountains",
      description: "A dramatic clifftop Khmer temple strung along a mountain ridge on the Thai border.",
      wiki: "Preah Vihear Temple",
      long:
        "Perched on the edge of a 525-metre cliff in the Dângrêk Mountains, right on the disputed Thai border, Preah Vihear is the most spectacularly sited of all Khmer temples. Rather than a single stacked pyramid, it stretches for some 800 metres along a spur, a sequence of sanctuaries, courtyards and monumental stairways climbing the ridge to a shrine that looks out over the plains of Cambodia far below.\n\nBuilt over two centuries and dedicated to Shiva, it's a UNESCO World Heritage Site whose ownership was long fought over — and occasionally shelled — by Cambodia and Thailand, so it's worth checking the border situation before visiting. Remote and hard-won, reached by a hair-raising ride up the escarpment, it rewards the effort with grandeur, history, and a view like no other temple in the country.",
    },
    {
      name: "Koh Ker", category: "offbeat", coords: [13.7840, 104.5400], region: "Preah Vihear province",
      description: "A briefly-imperial jungle capital crowned by a seven-tiered pyramid temple.",
      wiki: "Koh Ker",
      long:
        "For a couple of decades in the 10th century, a rival king moved the Khmer capital far to the north-east of Angkor, to Koh Ker, and built furiously before it was abandoned again to the forest. Long remote and heavily land-mined (now cleared along the visitor routes), it has stayed refreshingly uncrowded, and was inscribed as a UNESCO site only recently.\n\nThe centrepiece is Prasat Thom, a startling seven-tiered sandstone pyramid rising 36 metres straight out of the jungle, more Maya than Khmer in silhouette, which you can climb for a view over the treetops. Scattered temples and shrines dot the surrounding forest, many still half-wild. Combined with the temple-town of Beng Mealea en route, it makes a rewarding day for those wanting Angkor-era grandeur without the crowds.",
    },
    {
      name: "Sambor Prei Kuk", category: "history", coords: [12.9720, 105.0470], region: "Kampong Thom",
      description: "Pre-Angkorian brick towers in a peaceful forest — the temples that came before Angkor.",
      wiki: "Sambor Prei Kuk",
      long:
        "Centuries before Angkor rose, the Chenla kingdom ruled this land, and its capital of Ishanapura stood here at Sambor Prei Kuk. Dating largely from the early 7th century, its scattered brick temple-towers — many octagonal, a form found almost nowhere else — represent the roots from which classic Khmer architecture would later grow.\n\nSet in a quiet, shady forest of tall trees, some of the towers are wrapped in strangler-fig roots much like Ta Prohm but with a fraction of the visitors, and their brick walls still carry finely carved 'flying palaces' and medallions. UNESCO-listed and easily reached from the workaday town of Kampong Thom (a natural halfway stop between Phnom Penh and Siem Reap), it's a tranquil, atmospheric window onto Cambodia's deep past.",
    },
    {
      name: "Royal Palace & Silver Pagoda", category: "architecture", coords: [11.5640, 104.9310], region: "Phnom Penh",
      description: "The gilded, still-royal heart of the capital, with a temple floored in solid silver tiles.",
      wiki: "Royal Palace, Phnom Penh",
      long:
        "Still the residence of Cambodia's king, the Royal Palace is the ceremonial heart of Phnom Penh: a walled compound of golden-roofed pavilions in classic Khmer style, built from the 1860s when the capital moved here. The showpiece is the Throne Hall, with its spired roof and long, mural-lined interior, used for coronations and state occasions.\n\nWithin the grounds stands the Silver Pagoda, named for the more than 5,000 solid silver tiles that pave its floor, and home to treasures including a life-size gold Buddha studded with thousands of diamonds and a revered emerald Buddha. Its walls are wrapped in a faded but sweeping mural of the Reamker, the Khmer version of the Ramayana. Dress modestly, and pair it with the excellent National Museum next door for the finest Angkorian sculpture.",
    },
    {
      name: "Bokor Hill Station", category: "offbeat", coords: [10.6300, 104.0500], region: "near Kampot",
      description: "A misty, abandoned French mountain resort of eerie ruins and cool cloud-forest views.",
      wiki: "Bokor Hill Station",
      long:
        "High above Kampot, wreathed in mist for much of the year, Bokor was a mountain resort the French built in the 1920s as a cool retreat from the lowland heat — a casino, hotel, church and villas, raised at terrible cost in labourers' lives. Abandoned during Cambodia's decades of war and left to the elements, its blackened, fog-shrouded ruins became famously eerie, standing empty in the cloud forest.\n\nThe old casino and church still brood on the plateau, though the mountain is now a national park with a paved road up and some modern (and controversial) redevelopment alongside the ruins. Come for the ghostly atmosphere when the cloud rolls in, the cool air, the jungle walks and waterfalls, and the long views back down to the coast when the mist briefly lifts.",
    },
    {
      name: "Kbal Spean", category: "offbeat", coords: [13.7500, 104.0300], region: "near Angkor",
      description: "The 'River of a Thousand Lingas' — Hindu carvings in a jungle streambed, reached by a forest hike.",
      wiki: "Kbal Spean",
      long:
        "Deep in the forest of the Kulen hills, above the main Angkor group, a mountain stream flows over a riverbed the Khmer carved directly into the living rock — countless lingas, images of Vishnu reclining, and other Hindu deities, so that the water itself would be sanctified as it flowed down toward the temples and rice fields of Angkor below. It's known as the 'River of a Thousand Lingas'.\n\nReaching it means a roughly 45-minute uphill walk through pretty jungle, which keeps the crowds thin and adds to the sense of discovery; a small waterfall near the top makes a fine reward. Often combined with the exquisite temple of Banteay Srei nearby, it's a lovely change of pace from temple-touring — carving, forest, and running water together.",
    },
    {
      name: "Kratié & the Mekong dolphins", category: "nature", coords: [12.4880, 106.0190], region: "north-east Cambodia",
      description: "A sleepy Mekong town and the pools where rare Irrawaddy dolphins still surface.",
      wiki: "Irrawaddy dolphin",
      long:
        "The riverside town of Kratié is the place to see one of the Mekong's rarest creatures: the Irrawaddy dolphin, a snub-nosed, freshwater dolphin now down to a tiny, critically endangered population in the deep pools upstream at Kampi. A quiet boat trip out at dawn or dusk gives you a good chance of watching them surface and roll — a moving encounter with a species clinging on.\n\nKratié itself is an unhurried town of faded colonial buildings and one of the best Mekong sunsets in the country, and just offshore the island of Koh Trong offers a gentle cycle through rice fields, pomelo orchards, and stilt-house villages. Off the main tourist trail, it's a rewarding stop for travellers heading overland toward Laos or north-east Cambodia.",
    },
    {
      name: "Phnom Kulen", category: "nature", coords: [13.5760, 104.0300], region: "near Siem Reap",
      description: "The sacred birthplace of the Khmer Empire — a holy mountain of waterfalls, carvings, and a reclining Buddha.",
      wiki: "Phnom Kulen",
      long:
        "Phnom Kulen is the holy mountain of Cambodia, revered as the birthplace of the Khmer Empire — it was here in 802 that Jayavarman II had himself declared universal 'god-king', founding the state that would build Angkor. Pilgrims still climb it, especially to the giant reclining Buddha carved from a boulder at the summit temple.\n\nThe plateau rewards a day trip from Siem Reap with a mix of the sacred and the refreshing: riverbed carvings of lingas and deities like those at Kbal Spean, ancient shrines, and a popular waterfall where Cambodian families picnic and swim in the cool pools — a welcome change from the heat of the plains. It's a national park, so a separate fee applies, and the rough access road makes a guided or arranged trip easiest.",
    },
  ],
};
