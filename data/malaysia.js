// Country ID card — schema reference lives in data/index.js
export default {
  code: "my",
  name: "Malaysia",
  flag: "🇲🇾",
  region: "Southeast Asia",
  tagline: "Three cuisines on one plate, rainforest older than the Amazon, and time-warp trading towns.",
  tags: ["food", "nature", "history", "architecture", "diving", "slow travel"],

  languages: {
    name: "Malay (Bahasa Malaysia)",
    note: "The national language, written in the Latin alphabet and one of the easiest in Asia to pick up — no tones, simple grammar. Malaysia is deeply multilingual: Malay, Chinese dialects, Tamil and excellent English mix freely, so you'll rarely be stuck.",
    phrases: [
      { en: "Hello / Welcome", local: "Selamat datang", pron: "se-LA-mat DA-tang" },
      { en: "Thank you", local: "Terima kasih", pron: "te-REE-ma KA-seh" },
      { en: "You're welcome", local: "Sama-sama", pron: "SA-ma SA-ma" },
      { en: "Yes / No", local: "Ya / Tidak", pron: "ya / TEE-dak" },
      { en: "Excuse me / Sorry", local: "Maaf", pron: "ma-AAF" },
      { en: "How much?", local: "Berapa harga?", pron: "be-RA-pa HAR-ga?" },
      { en: "Where is…?", local: "Di mana…?", pron: "dee MA-na?" },
      { en: "Delicious!", local: "Sedap!", pron: "se-DAP!" },
      { en: "Water", local: "Air", pron: "a-YER" },
      { en: "Let's eat!", local: "Jom makan!", pron: "jom MA-kan!" },
      { en: "Goodbye", local: "Selamat tinggal", pron: "se-LA-mat TING-gal" },
    ],
  },

  history: {
    summary:
      "Malaysia's story is one of trade, straits and the mingling of peoples. From the 15th century the Malacca Sultanate commanded the vital strait between the Indian Ocean and the South China Sea, drawing Chinese, Indian, Arab and later Portuguese, Dutch and British traders — a crossroads that made the peninsula one of the most cosmopolitan corners of Asia. Waves of Chinese and Indian migration under British rule, drawn by tin and rubber, built the plural society of today. Peninsular Malaya won independence in 1957, and in 1963 joined with Singapore (which left in 1965), Sabah and Sarawak on Borneo to form modern Malaysia. The result is a genuinely multicultural federation of Malay, Chinese and Indian communities, plus dozens of indigenous peoples in Borneo — a diversity you taste, most of all, in the food.",
    timeline: [
      { era: "c. 1400 (Malacca founded)", text: "The Malacca Sultanate rises to control the strait and the spice trade, spreading Islam through the archipelago." },
      { era: "1511 (Portuguese)", text: "Portugal seizes Malacca, followed later by the Dutch (1641) and the British — leaving layered colonial towns." },
      { era: "19th century (British Malaya)", text: "Tin and rubber booms draw huge Chinese and Indian migration, forging today's plural society." },
      { era: "1957 (Merdeka)", text: "Malaya wins independence from Britain — 'Merdeka!' proclaimed in Kuala Lumpur." },
      { era: "1963 (Malaysia formed)", text: "Malaya federates with Sabah and Sarawak on Borneo (and briefly Singapore) to create modern Malaysia." },
    ],
  },

  books: [
    { title: "The Garden of Evening Mists", author: "Tan Twan Eng", year: "2012", note: "A luminous, prize-winning novel of memory and a Japanese garden in the Cameron Highlands after the war." },
    { title: "The Gift of Rain", author: "Tan Twan Eng", year: "2007", note: "Penang on the eve of WWII, seen through a half-Chinese, half-English boy — evocative of the island's soul." },
    { title: "The Malay Archipelago", author: "Alfred Russel Wallace", year: "1869", note: "The great naturalist's classic account of the region's wildlife and peoples; still a joy." },
    { title: "The Consul's File", author: "Paul Theroux", year: "1977", note: "Linked stories of expatriate life in a small up-country Malaysian town." },
    { title: "A History of Malaysia", author: "Barbara & Leonard Andaya", year: "1982", note: "The standard readable overview of the country's layered past." },
  ],

  meals: [
    { name: "Nasi lemak", description: "The unofficial national dish — coconut rice with sambal, fried anchovies, peanuts, egg and cucumber, wrapped in banana leaf for breakfast.", tip: "Eat it at a roadside stall in the morning; the balance of the fiery sambal against the rich rice is the whole art." },
    { name: "Laksa", description: "A family of noodle soups that changes by region: the sour, fishy tamarind assam laksa of Penang versus rich, coconut-curry laksa lemak elsewhere." },
    { name: "Char kway teow", description: "Flat rice noodles stir-fried hard over flame with prawns, egg, cockles and bean sprouts — the prized 'wok hei' char is everything." },
    { name: "Roti canai & Indian-Muslim food", description: "Flaky griddled flatbread torn and dipped in dhal or curry at a mamak stall — the round-the-clock heart of Malaysian street eating." },
    { name: "Nyonya (Peranakan) cuisine", description: "The Chinese-Malay fusion of Malacca and Penang — dishes like ayam pongteh and kuih, tangy, herbal and unlike anything else." },
    { name: "Satay & hawker centres", description: "Grilled skewers with peanut sauce, and the glorious institution of the hawker centre, where a dozen stalls of different heritages share your table." },
  ],

  climate: {
    unit: "°C",
    note: "Equatorial and warm-humid all year; figures are for Kuala Lumpur. There's no real dry season, just wetter spells: the east coast of the peninsula and the Perhentian/Tioman islands are wettest Nov–Feb (many resorts close), while the west coast (Penang, Langkawi) is best then. Borneo is wettest roughly Nov–Feb too. Highlands like the Camerons are cool year-round.",
    coords: [3.14, 101.69], // Kuala Lumpur — representative point for the fetch script
    key: "my",
    best: [1, 2, 6, 7, 8],
    avoid: [11],
    months: [
      { mean: 27, rain: 168 }, { mean: 28, rain: 168 }, { mean: 28, rain: 235 },
      { mean: 28, rain: 277 }, { mean: 28, rain: 210 }, { mean: 28, rain: 133 },
      { mean: 28, rain: 141 }, { mean: 28, rain: 160 }, { mean: 27, rain: 209 },
      { mean: 27, rain: 289 }, { mean: 27, rain: 322 }, { mean: 27, rain: 240 },
    ],
  },

  events: [
    { name: "Chinese New Year", when: "Jan / Feb (varies)", months: [1, 2], kind: "go", description: "Lion dances, open houses and lantern-lit temples, biggest in Penang and KL's Chinatown — festive, but book ahead as many Chinese-run businesses close for a few days." },
    { name: "Hari Raya Aidilfitri", when: "End of Ramadan (shifts ~11 days/yr)", months: [], kind: "note", description: "The joyful end of the Muslim fasting month — a huge homecoming holiday of feasting and 'open houses'; transport is jammed and towns empty for the balik kampung exodus." },
    { name: "Thaipusam", when: "Jan / Feb (full moon)", months: [1, 2], kind: "go", description: "The dramatic Hindu festival at Batu Caves near KL, when devotees carry ornate kavadi in a colourful, intense procession up the temple steps." },
    { name: "East-coast monsoon", when: "November – February", months: [11, 12, 1, 2], kind: "avoid", description: "Heavy rain and rough seas shut many island resorts on the peninsula's east coast (Perhentians, Tioman). Head to the west coast and highlands instead in these months." },
  ],

  places: [
    {
      name: "George Town, Penang", category: "food", coords: [5.4141, 100.3288], region: "Penang (west coast)",
      description: "A UNESCO trading town of shophouses, clan temples and street art — and the best street food in Malaysia.",
      wiki: "George Town, Penang",
      long:
        "George Town is Malaysia at its most gloriously mixed: a UNESCO-listed grid of pastel Chinese shophouses, ornate clan temples (kongsi), mosques, Hindu shrines and British colonial buildings, all crammed into a walkable old quarter humming with trishaws and café culture. Its Peranakan mansions, jetties built on stilts by Chinese clans, and famous wall murals reward hours of aimless wandering.\n\nAbove all, George Town is a food pilgrimage — routinely rated among the best street-food cities on earth. Char kway teow, assam laksa, cendol, Hokkien mee and Nyonya kuih are eaten at hawker stalls and coffee shops that have honed single dishes over generations. Come to walk the shophouse lanes by morning light and to eat, seriously, from breakfast to supper. It's the most rewarding city in the country.",
      practical: [
        { label: "Getting there", value: "Fly to Penang (PEN), or take the train to Butterworth and the ferry across. The old town is compact and best explored on foot." },
        { label: "Eat", value: "Follow the queues at hawker centres like New Lane and Chulia Street; assam laksa, char kway teow and cendol are essentials. Many stalls close on their own rest days." },
        { label: "Wander", value: "The clan jetties, Khoo Kongsi clan temple, Cheong Fatt Tze (Blue) Mansion, and the Armenian Street murals." },
        { label: "When", value: "Nov–Feb (dry on this west coast) is pleasant; heat and humidity are constant year-round." },
      ],
      stay:
        "Sleep in a restored shophouse or a Peranakan heritage hotel in the core UNESCO zone (around Armenian and Love Lanes), so you can walk to the temples, murals and hawker stalls and wander the lanes early before the heat.",
      tips: [
        "Eat where the locals queue, and go early — the best stall dishes sell out by mid-afternoon.",
        "Escape the heat up Penang Hill by the funicular, and visit the tranquil Kek Lok Si temple.",
      ],
    },
    {
      name: "Malacca (Melaka)", category: "history", coords: [2.1896, 102.2501], region: "Malacca (west coast)",
      description: "A layered old port of Dutch-red buildings, Chinese temples and Peranakan townhouses on a lazy river.",
      wiki: "Malacca City",
      long:
        "Malacca was the great trading emporium that gave the strait its name, and 500 years of Malay, Portuguese, Dutch, British, Chinese and Indian rule and settlement have left a small city layered like nowhere else. The Dutch-red square of the Stadthuys, the ruined Portuguese hilltop church of St Paul's, the antique-crammed lanes of Jonker Street, and the ornate Chinese and Hindu temples of Harmony Street all sit within a short stroll.\n\nMalacca is also a heartland of Peranakan (Baba-Nyonya) culture — the Chinese-Malay fusion born of centuries of intermarriage, seen in its lavish townhouse museums and tasted in its distinctive Nyonya cuisine. A UNESCO city best savoured slowly: potter along the river, eat chicken-rice balls and cendol, and time your visit for the weekend Jonker Street night market.",
      practical: [
        { label: "Getting there", value: "~2 hrs by bus from Kuala Lumpur; an easy overnight or long day trip. The old town is compact and walkable." },
        { label: "See", value: "The Stadthuys and St Paul's Hill, Jonker Street, the Baba & Nyonya Heritage Museum, and the temples of Harmony Street." },
        { label: "Eat", value: "Nyonya laksa, chicken-rice balls, satay celup, and cendol — Malacca's food is a highlight in its own right." },
        { label: "When", value: "Come Fri–Sun for the Jonker Street night market, but expect crowds; midweek is quieter for the museums and lanes." },
      ],
      stay:
        "Stay in a restored Peranakan shophouse guesthouse along or just off Jonker Street, so you're in the heart of the old town for the early-morning river walk and the night market. Riverside boutique hotels are lovely too.",
      tips: [
        "Wander the residential Peranakan lanes (Jalan Tun Tan Cheng Lock) for the finest townhouse facades.",
        "Take the short river cruise at dusk when the old shophouses light up.",
      ],
    },
    {
      name: "Bornean rainforest: Danum Valley & Kinabatangan", category: "nature", coords: [5.4030, 118.0330], region: "Sabah (Borneo)",
      description: "Primary jungle and a wildlife-thronged river — orangutans, pygmy elephants and hornbills in the wild.",
      wiki: "Danum Valley Conservation Area",
      long:
        "Borneo holds some of the oldest rainforest on earth — 130 million years, far older than the Amazon — and Malaysian Sabah is the place to walk into it. The Danum Valley is a vast tract of untouched primary lowland forest, where guided trails and canopy walkways bring you into a soaring, dripping world of dipterocarp giants, gibbon calls at dawn, and the chance of wild orangutans, unhabituated and truly free.\n\nAn easier wildlife hit is the Kinabatangan River, whose forested banks concentrate animals along the water: boat safaris at dawn and dusk deliver proboscis monkeys, macaques, hornbills, crocodiles and, with luck, the endangered pygmy elephants. Combine the two — a river lodge and a jungle field centre — for the finest wildlife experience in Southeast Asia. Come for the animals; stay for the primeval hush of the forest.",
      practical: [
        { label: "Getting there", value: "Fly to Lahad Datu (for Danum) or Sandakan (for the Kinabatangan), both via Kota Kinabalu; lodges arrange onward transfers." },
        { label: "Danum Valley", value: "Access is via lodges/field centres only (Borneo Rainforest Lodge or the research centre); book ahead — it's remote, guided and not cheap, but unforgettable." },
        { label: "Kinabatangan", value: "River lodges around Sukau/Bilit run dawn and dusk boat safaris; 2–3 nights gives the best wildlife odds. More affordable than Danum." },
        { label: "Ethical wildlife", value: "See orangutans wild here, or at the Sepilok rehabilitation centre near Sandakan — avoid any 'hold the animal' attractions." },
      ],
      stay:
        "In Danum, the choice is a rainforest lodge or the simpler research field centre — either puts you inside primary jungle with guided night walks and canopy walkways. On the Kinabatangan, a riverside jungle lodge at Sukau or Bilit is the base for the boat safaris; go for two nights minimum.",
      tips: [
        "Dawn is prime for wildlife on both the river and the forest trails — take the early boat/walk.",
        "Bring leech socks, a good insect repellent, a torch and a dry bag; the forest is wet and alive.",
      ],
    },
    {
      name: "Mount Kinabalu", category: "nature", coords: [6.0753, 116.5586], region: "Sabah (Borneo)",
      description: "Southeast Asia's iconic granite peak — a two-day climb to a jagged 4,095 m summit above the clouds.",
      wiki: "Mount Kinabalu",
      long:
        "Rising abruptly to 4,095 metres, Mount Kinabalu is the highest peak between the Himalayas and New Guinea and the centrepiece of a UNESCO World Heritage park of extraordinary biodiversity — its slopes climbing through oak and rhododendron forest to bare granite, home to carnivorous pitcher plants and orchids found nowhere else. The mountain is sacred to the local Kadazan-Dusun people, who regard it as the resting place of the dead.\n\nThe classic ascent is a strenuous but non-technical two-day climb: up through the forest to a mountain hut, then a pre-dawn scramble across the bare granite dome to reach the summit, Low's Peak, for sunrise above a sea of cloud. Permits are limited and must be booked well ahead. Even without climbing, the park's cool montane trails and the nearby Poring hot springs and canopy walk make a fine highland break.",
      practical: [
        { label: "Getting there", value: "~2 hrs by road from Kota Kinabalu to the park HQ (~1,560 m)." },
        { label: "The climb", value: "2 days / 1 night, sleeping at Laban Rata; a compulsory guide and a scarce climbing permit are required — book months ahead through a licensed operator." },
        { label: "Fitness", value: "Non-technical but hard: ~8 km and 2,200 m of ascent, a 2am summit push, and altitude. Warm, waterproof layers and a headtorch are essential." },
        { label: "Not climbing?", value: "The park's forest trails, the botanical garden, and Poring's hot springs and canopy walkway make a rewarding cooler-climate day." },
      ],
      stay:
        "Climbers overnight in the mountain huts at Laban Rata (booked as part of the permit package). At the base, park-HQ lodges and guesthouses in nearby Kundasang let you acclimatise and enjoy the cool highland air, with valley views toward the peak.",
      tips: [
        "Book the permit and mountain hut months in advance — daily numbers are strictly capped.",
        "Go slow and hydrate to beat altitude; the summit sunrise above the clouds is the reward.",
      ],
    },
    {
      name: "Cameron Highlands", category: "nature", coords: [4.4710, 101.3771], region: "Pahang (peninsula interior)",
      description: "Cool, misty hills of tea plantations, jungle trails and strawberry farms — a colonial hill-station escape.",
      wiki: "Cameron Highlands",
      long:
        "Up in the misty mountains of the peninsula's spine, the Cameron Highlands are a cool-climate world apart — rolling green tea plantations combed across the hillsides, mossy montane forest, and a lingering colonial hill-station air of Tudor guesthouses and afternoon scones. The British developed them as an escape from the lowland heat, and at 1,500 metres the days are spring-fresh and the nights need a blanket.\n\nBeyond the famous tea estates, where you can walk the rows and take a cup on a terrace overlooking the valley, there are jungle trails (including the eerie, dripping 'Mossy Forest'), strawberry and honey farms, and cameras of butterflies. It's an easy, mellow break from the tropical lowlands — best enjoyed slowly, with a walk between the tea bushes and a long look at the view.",
      practical: [
        { label: "Getting there", value: "~3–4 hrs by bus or car from Kuala Lumpur or Penang, up a long winding road. Base in Tanah Rata (the main town) or quieter Brinchang." },
        { label: "Do", value: "Tour the BOH tea plantation and walk the rows, hike the numbered jungle trails, and visit the Mossy Forest boardwalk (guide required)." },
        { label: "When", value: "Cool year-round (15–25 °C); afternoons often cloud over and rain, so do outdoor plans in the morning." },
        { label: "Eat", value: "Steamboat (hotpot) dinners suit the cool nights; the strawberries and highland vegetables are a local speciality." },
      ],
      stay:
        "Base in Tanah Rata for restaurants and trailheads, or in a quieter guesthouse or old colonial-style lodge up toward Brinchang among the tea. A room with a valley view and a cool night's sleep is the appeal after the lowland heat.",
      tips: [
        "Walk one of the marked jungle trails in the morning before the afternoon mist and rain roll in.",
        "Visit the tea plantation early or late to beat the tour-bus crowds on the terraces.",
      ],
    },
    {
      name: "Perhentian Islands", category: "nature", coords: [5.9130, 102.7440], region: "Terengganu (east coast)",
      description: "Clear turquoise water, coral reefs and turtles off two small, car-free jungle islands.",
      wiki: "Perhentian Islands",
      long:
        "Off the peninsula's northeast coast, the two Perhentian Islands are the picture of a laid-back tropical escape: white-sand bays, warm turquoise water, coral reefs teeming with fish and turtles, and jungle interiors crossed only by footpaths — there are no cars, and often no roads at all. Kecil ('small') is the more backpacker-ish and sociable; Besar ('big') is quieter and a touch more comfortable.\n\nThe draw is the water: superb, cheap snorkelling and diving straight off the beach or on short boat trips, with green and hawksbill turtles, reef sharks and clouds of tropical fish. Days here dissolve into swimming, reading and beach-hopping on foot over jungle trails. Because they face the South China Sea, the islands run on the east-coast monsoon and largely shut down from November to February — come between March and October.",
      practical: [
        { label: "Getting there", value: "Speedboat (~30–40 min) from Kuala Besut jetty, reached by bus/flight to Kota Bharu or the long haul from KL. Bring cash — ATMs are scarce on the islands." },
        { label: "When to go", value: "March–October only; the northeast monsoon closes most resorts and boats roughly Nov–Feb with rough seas." },
        { label: "Do", value: "Snorkel or dive the house reefs and turtle spots; walk the jungle trails between bays; kayak the calm coves." },
        { label: "Note", value: "Facilities are simple and power can be limited; it's a swim-and-relax destination, not a nightlife one." },
      ],
      stay:
        "Choose Besar for a quieter, mellower stay or Kecil's Long Beach for more of a scene. Simple beach chalets and dive-lodge bungalows are the norm — pick a quieter bay, snorkel off the sand, and let the days go slow.",
      tips: [
        "Bring enough cash for your whole stay — card payment and ATMs are unreliable.",
        "Snorkel gear is cheap to rent; the best reefs are a short boat-hop or an easy swim from shore.",
      ],
    },
    {
      name: "Kuala Lumpur: Kampung Baru, Batu Caves & the old core", category: "architecture", coords: [3.1478, 101.6953], region: "Kuala Lumpur",
      description: "Colonial and Islamic architecture, a hilltop cave temple, and old wooden Malay houses under the towers.",
      wiki: "Kuala Lumpur",
      long:
        "Malaysia's capital is more than the twin Petronas Towers on the postcards. Its old colonial core around Merdeka Square mixes British-Moorish domes (the Sultan Abdul Samad Building), the elegant Jamek Mosque at the river confluence that gave the city its name, and the lively lanes of Chinatown and Little India nearby. The exquisite blue-domed National Mosque and the Islamic Arts Museum show the city's Muslim heart.\n\nThe most atmospheric surprise is Kampung Baru, an enclave of old wooden Malay stilt houses and Ramadan food stalls surviving in the shadow of the skyscrapers. Just north of the centre, the Batu Caves — a vast limestone cavern temple reached by 272 rainbow-painted steps beneath a giant golden statue of Murugan — are a spectacular Hindu pilgrimage site and the setting for the Thaipusam festival. KL rewards those who look past the malls.",
      practical: [
        { label: "Getting there", value: "KLIA airport is linked to the centre by fast train; the city has an easy, cheap LRT/MRT metro and monorail network." },
        { label: "Batu Caves", value: "~13 km north, reached by KTM Komuter train; free to enter, modest dress. Go early to beat heat and crowds; watch your bags around the monkeys." },
        { label: "Wander", value: "Merdeka Square and the colonial quarter, the Jamek Mosque, Central Market, Chinatown (Petaling Street), and Kampung Baru for Malay food." },
        { label: "Don't miss", value: "The Islamic Arts Museum near the National Mosque — one of the finest of its kind in Asia." },
      ],
      stay:
        "Stay near the old core (around Chinatown or the river) for heritage and transport links, rather than the mall-heavy KLCC district. Chinatown's restored shophouse hotels put you walking distance from the colonial buildings, temples and food streets.",
      tips: [
        "Ride the free GOKL city bus and the metro to skip KL's heavy road traffic.",
        "Eat at Kampung Baru or Jalan Alor's hawker street in the evening for the city's best street food.",
      ],
    },
    {
      name: "Sarawak: Kuching & Bako", category: "offbeat", coords: [1.5535, 110.3593], region: "Sarawak (Borneo)",
      description: "The most charming city in Borneo — riverside old town, longhouse culture, and proboscis monkeys next door.",
      wiki: "Kuching",
      long:
        "Kuching, capital of Sarawak on Borneo, is the most likeable city in Malaysian Borneo — a relaxed riverfront town with an atmospheric old core of Chinese shophouses, colonial forts and the quirky legacy of the 'White Rajahs', the Brooke family who ruled Sarawak for a century. Its excellent museums, cat statues (kucing means cat), and superb, distinctive Sarawak food — laksa and kolo mee — make it a joy to wander, especially along the newly landscaped riverfront at dusk.\n\nKuching is also the gateway to a wealth of nature and culture: Bako National Park, a short boat ride away, offers rainforest trails, sculpted sea cliffs and near-guaranteed sightings of the bizarre, big-nosed proboscis monkey; while up-country you can visit Iban longhouse communities and the Semenggoh orangutan centre. It's Borneo made accessible, and it charms almost everyone who comes.",
      practical: [
        { label: "Getting there", value: "Fly to Kuching (KCH) from KL, Singapore or Kota Kinabalu. The compact old town and waterfront are walkable." },
        { label: "Bako National Park", value: "~45 min by road to Bako village, then a short boat (tide-dependent); walk the trails for proboscis monkeys, bearded pigs and sea stacks. Day trip or park hostel overnight." },
        { label: "Nearby", value: "Semenggoh for semi-wild orangutans at feeding time, and Iban longhouse visits/homestays up-river for a night." },
        { label: "Eat", value: "Sarawak laksa for breakfast and kolo mee — the local noodle dishes are unmissable and unlike peninsular food." },
      ],
      stay:
        "Base in a riverfront or old-town hotel in Kuching, walkable to the museums, shophouses and evening waterfront. To go deeper, overnight in the simple park lodge at Bako to catch the wildlife at dawn and dusk, or arrange an Iban longhouse homestay up-country.",
      tips: [
        "Do Bako as an overnight, not just a day trip, to walk the trails when the monkeys are most active.",
        "Sarawak laksa for breakfast is a local ritual — find a busy coffee shop and join in.",
      ],
    },
  ],
};
