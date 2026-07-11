// Country ID card — schema reference lives in data/index.js
export default {
  code: "id",
  name: "Indonesia",
  flag: "🇮🇩",
  region: "Southeast Asia / Oceania",
  tagline: "Seventeen thousand islands of volcanoes, temples and dragons — the world's greatest archipelago.",
  tags: ["nature", "temples", "diving", "beach", "history", "slow travel"],

  languages: {
    name: "Indonesian (Bahasa Indonesia)",
    note: "A standardised form of Malay, deliberately simple and neutral, adopted to unite a nation of 700+ local languages. No tones, Latin script, and forgiving grammar make it one of the most rewarding languages to attempt — a few words open doors everywhere, though on Bali and Java people also speak their own tongues.",
    phrases: [
      { en: "Hello / Good day", local: "Selamat siang", pron: "se-LA-mat SEE-ang" },
      { en: "Thank you", local: "Terima kasih", pron: "te-REE-ma KA-see" },
      { en: "You're welcome", local: "Sama-sama", pron: "SA-ma SA-ma" },
      { en: "Yes / No", local: "Ya / Tidak", pron: "ya / TEE-dak" },
      { en: "Excuse me / Sorry", local: "Permisi / Maaf", pron: "per-MEE-see / ma-AF" },
      { en: "How much?", local: "Berapa harga?", pron: "be-RA-pa HAR-ga?" },
      { en: "Where is…?", local: "Di mana…?", pron: "dee MA-na?" },
      { en: "Delicious!", local: "Enak!", pron: "e-NAK!" },
      { en: "Water", local: "Air", pron: "a-YER" },
      { en: "No spice, please", local: "Tidak pedas", pron: "TEE-dak pe-DAS" },
      { en: "Goodbye", local: "Selamat tinggal", pron: "se-LA-mat TING-gal" },
    ],
  },

  history: {
    summary:
      "Indonesia is less a country than an archipelago civilisation — over 17,000 islands strung along the equator, long a crossroads of the spice trade. Powerful maritime empires rose here: the Buddhist Srivijaya of Sumatra and the Hindu-Buddhist Majapahit of Java, which built the colossal monuments of Borobudur and Prambanan before Islam spread through the islands from the 13th century. The lucrative spice trade drew the Dutch, whose East India Company and later colonial state controlled the 'Dutch East Indies' for some 350 years. After Japanese wartime occupation, Sukarno declared independence in 1945; a hard four-year struggle secured it in 1949. Since then this vast, diverse nation — hundreds of ethnic groups and languages, held together by one shared language and the motto 'unity in diversity' — has become the world's fourth-most-populous country and its largest Muslim-majority democracy.",
    timeline: [
      { era: "c. 800 (Borobudur & Prambanan)", text: "Java's Buddhist and Hindu dynasties raise two of the greatest temple complexes in Asia." },
      { era: "13th–15th c. (Majapahit)", text: "A great Hindu-Buddhist maritime empire dominates the archipelago before Islam spreads through the islands." },
      { era: "17th–19th c. (Dutch East Indies)", text: "The spice trade draws the Dutch, who colonise the archipelago for around three and a half centuries." },
      { era: "1945 (Independence declared)", text: "Sukarno proclaims independence days after Japan's surrender; a four-year revolution follows." },
      { era: "1949 (Sovereignty)", text: "The Netherlands recognises Indonesian independence, and the modern republic takes shape." },
    ],
  },

  books: [
    { title: "This Earth of Mankind", author: "Pramoedya Ananta Toer", year: "1980", note: "The first of the 'Buru Quartet', written in a prison camp — the great novel of colonial Java and awakening nationalism." },
    { title: "The Year of Living Dangerously", author: "Christopher Koch", year: "1978", note: "A vivid novel of foreign correspondents in the feverish Jakarta of 1965." },
    { title: "Krakatoa: The Day the World Exploded", author: "Simon Winchester", year: "2003", note: "A gripping account of the 1883 eruption and the archipelago's volcanic soul." },
    { title: "A Brief History of Indonesia", author: "Tim Hannigan", year: "2015", note: "A lively, readable introduction to a sprawling national story." },
    { title: "Indonesia, Etc.", author: "Elizabeth Pisani", year: "2014", note: "A wry, affectionate island-hopping portrait of the improbable nation, off the beaten track." },
  ],

  meals: [
    { name: "Nasi goreng & mie goreng", description: "Indonesia's ubiquitous fried rice and fried noodles, wok-tossed with kecap manis (sweet soy), chilli and often a fried egg on top — comfort food day or night.", tip: "Add sambal to taste and squeeze in lime; a good warung version is worlds better than any hotel one." },
    { name: "Rendang", description: "Sumatra's slow-cooked dry beef curry, simmered for hours in coconut and spices until dark and intensely fragrant — often voted the world's tastiest dish." },
    { name: "Satay (sate)", description: "Charcoal-grilled skewers — chicken, goat or lamb — with rich peanut sauce; sate ayam and Balinese sate lilit are the classics." },
    { name: "Nasi campur & Padang food", description: "A plate of rice with a spread of small dishes; at a Padang restaurant, a dozen bowls arrive and you pay for what you eat — the ultimate sampler." },
    { name: "Gado-gado & tempeh", description: "Blanched vegetables in peanut sauce, and Indonesia's gift to the world — tempeh, the nutty fermented soybean cake, fried crisp or in curry." },
    { name: "Babi guling (Bali)", description: "Balinese spit-roast suckling pig stuffed with turmeric and spices — a Hindu-island speciality found at legendary warungs around Ubud." },
  ],

  climate: {
    unit: "°C",
    note: "Equatorial and warm year-round; figures are for Bali/Java. Two seasons: dry (roughly Apr–Oct, the best time) and wet (Nov–Mar, with heavy afternoon downpours). It varies island to island — the Maluku and Papua clocks differ — and the highlands (Bromo, the Dieng plateau, Papua's peaks) are much cooler, even cold at altitude.",
    coords: [-8.65, 115.22], // Bali (Denpasar) — representative point for the fetch script
    key: "id",
    best: [5, 6, 7, 8, 9],
    avoid: [1, 2, 12],
    months: [
      { mean: 27, rain: 288 }, { mean: 27, rain: 255 }, { mean: 27, rain: 210 },
      { mean: 27, rain: 90 }, { mean: 27, rain: 75 }, { mean: 26, rain: 62 },
      { mean: 26, rain: 47 }, { mean: 26, rain: 33 }, { mean: 27, rain: 55 },
      { mean: 27, rain: 78 }, { mean: 27, rain: 145 }, { mean: 27, rain: 230 },
    ],
  },

  events: [
    { name: "Dry season", when: "April – October", months: [4, 5, 6, 7, 8, 9, 10], kind: "go", description: "The prime window across most of the archipelago: clearer skies, calmer seas for diving and island-hopping, and the best trekking on the volcanoes." },
    { name: "Nyepi (Balinese Day of Silence)", when: "March (varies)", months: [3], kind: "note", description: "Bali's Hindu new year: a full 24 hours of total silence and stillness — no lights, no travel, airport closed. Fascinating to witness, but plan around it as everything, including your hotel, goes dark." },
    { name: "Idul Fitri (Lebaran)", when: "End of Ramadan (shifts yearly)", months: [], kind: "note", description: "The huge homecoming holiday at the end of the Muslim fasting month; transport is packed nationwide and many businesses close for the mudik exodus." },
    { name: "Wet season", when: "November – March", months: [11, 12, 1, 2, 3], kind: "avoid", description: "Heavy afternoon rains, rough seas that disrupt boats and diving, and clouded-in volcanoes. Lush and cheap, but harder for outdoor plans and island-hopping." },
  ],

  places: [
    {
      name: "Borobudur", category: "history", coords: [-7.6079, 110.2038], region: "Central Java",
      description: "The world's largest Buddhist monument — a colossal 9th-century stone mandala best seen at dawn.",
      wiki: "Borobudur",
      long:
        "Rising from the Kedu plain of central Java in the shadow of volcanoes, Borobudur is the largest Buddhist temple on earth and one of the great monuments of humankind. Built around 800 AD and later abandoned and buried under ash and jungle, this vast stone mandala is a three-dimensional Buddhist cosmology: pilgrims climb clockwise through nine stacked terraces, past more than 2,600 relief panels and 500 Buddha statues, from the world of desire to the enlightenment of the summit, crowned by bell-shaped stupas and a central dome.\n\nSeen at dawn, when mist pools in the plain and the sun rises over the volcanoes behind the silhouetted stupas, it is unforgettable. Together with the slender Hindu spires of nearby Prambanan, it makes central Java — reached from the sultan's city of Yogyakarta — one of Asia's essential cultural destinations. Access to the upper terraces is now limited to protect the stone, so book ahead.",
      practical: [
        { label: "Getting there", value: "~1–1.5 hrs from Yogyakarta ('Jogja') by car; Jogja is the natural base, reachable by train or flight from Jakarta/Bali." },
        { label: "Tickets", value: "Entry plus a separate, limited timed ticket (with a guide and provided sandals) to climb to the upper terraces — book ahead in high season." },
        { label: "When to go", value: "First entry / dawn for mist, soft light and cool air; the stone bakes and the crowds build by mid-morning." },
        { label: "Pair with", value: "The Hindu temple complex of Prambanan (~1 hr away) — do one at sunrise and one at sunset." },
      ],
      stay:
        "Base in Yogyakarta for its own kraton (sultan's palace), batik workshops, food and easy transport to both temples; or stay at a quieter guesthouse in the countryside near Borobudur itself to reach the monument first thing and cycle the surrounding villages and rice fields.",
      tips: [
        "Book the timed upper-terrace ticket in advance — numbers are strictly capped to protect the reliefs.",
        "Give Yogyakarta a day of its own for the kraton, Taman Sari water castle, and Malioboro street food.",
      ],
    },
    {
      name: "Ubud & the Bali rice terraces", category: "nature", coords: [-8.5069, 115.2625], region: "Bali",
      description: "The cultural heart of Bali — temples, dance and art amid emerald rice terraces and river gorges.",
      wiki: "Ubud",
      long:
        "Inland and uphill from Bali's beaches, Ubud is the island's cultural soul: a town of Hindu temples, palace courtyards, gamelan music and nightly dance, wrapped in a landscape of emerald rice terraces and jungly river valleys. Despite its fame it still rewards the curious — the trick is to rise early and get out of the centre, walking the Campuhan Ridge at dawn, cycling among the villages, or losing the crowds in the sculpted Tegallalang terraces before the tour buses arrive.\n\nUbud is also the base for Bali's Hindu heart: the water temple of Tirta Empul where pilgrims purify themselves, the cliffside Gunung Kawi rock-cut shrines, and the artisan villages of woodcarvers, silversmiths and painters around it. Eat babi guling at a legendary warung, catch a Legong dance in a temple courtyard, and let the island's rhythm of offerings and ceremony draw you in.",
      practical: [
        { label: "Getting there", value: "~1–1.5 hrs by car from Bali's airport (Denpasar); no trains — hire a driver or use ride apps." },
        { label: "Beat the crowds", value: "Walk the Campuhan Ridge or the Tegallalang / Jatiluwih rice terraces at dawn; Ubud's honeypots are lovely early and mobbed by 10am." },
        { label: "Culture", value: "See a Legong or Kecak dance in the evening, and visit the water temple of Tirta Empul and the Gunung Kawi shrines nearby (temple sarong required)." },
        { label: "When", value: "Dry season (Apr–Oct) for clearest skies; the terraces are greenest just before harvest." },
      ],
      stay:
        "Stay in a guesthouse or small resort among the rice fields on the fringes of Ubud (Penestanan, Nyuh Kuning or up toward Tegallalang) rather than the busy centre — waking to paddies and birdsong, walkable to town but a world quieter.",
      tips: [
        "Rent a scooter or hire a driver to reach the quieter northern terraces (Jatiluwih) and the water temples.",
        "Dress respectfully at temples — a sarong and sash are required, and usually available to borrow or rent.",
      ],
    },
    {
      name: "Mount Bromo & the Tengger caldera", category: "nature", coords: [-7.9425, 112.9530], region: "East Java",
      description: "A smoking cinder cone in a vast sand-sea caldera, unforgettable at sunrise from the crater rim.",
      wiki: "Mount Bromo",
      long:
        "In the highlands of East Java, Mount Bromo is one of the most spectacular volcanic landscapes on earth: a smoking cinder cone rising from the 'Sea of Sand', a flat grey caldera floor ringed by cliffs, with the perfect cone of Semeru — Java's highest peak — venting behind it. The classic experience is the pre-dawn journey to a viewpoint on the caldera rim, where the sun rises over the whole surreal scene, the volcanoes floating above the morning mist.\n\nAfterwards you cross the sand-sea on foot or horseback and climb the stairway to the smoking, sulphurous crater rim of Bromo itself. This is the homeland of the Hindu Tengger people, who make offerings to the mountain at the Yadnya Kasada festival. High and cold at dawn — pack warm layers — it's a highlight of any Java trip and utterly different from the tropical lowlands.",
      practical: [
        { label: "Getting there", value: "Base in the rim village of Cemoro Lawang, reached from Probolinggo (trains from Yogyakarta/Surabaya) or by tour from Malang/Yogyakarta." },
        { label: "Sunrise", value: "Pre-dawn jeep or a steep walk to a viewpoint (Penanjakan/King Kong Hill); then cross the sand-sea and climb the crater stairs. National park fee applies (higher at weekends)." },
        { label: "When to go", value: "Dry season (Apr–Oct) for clear sunrises; it clouds in during the wet months. It is genuinely cold before dawn at ~2,200 m." },
        { label: "Combine", value: "Many pair Bromo with the acid-blue crater lake and 'blue fire' of Ijen further east, en route to Bali." },
      ],
      stay:
        "Sleep in a simple guesthouse in Cemoro Lawang right on the caldera rim, so you can reach the viewpoint before dawn and, better still, walk down to Bromo's crater after the sunrise crowds have left. Nights are cold — bring or borrow warm layers.",
      tips: [
        "Walk to the crater and across the sand-sea after sunrise, when most tours have gone and you'll have it nearly to yourself.",
        "Bring a hat, gloves and a warm jacket — the pre-dawn rim is freezing even in the tropics.",
      ],
    },
    {
      name: "Komodo National Park", category: "nature", coords: [-8.5586, 119.4890], region: "East Nusa Tenggara (Flores)",
      description: "Wild Komodo dragons, pink-sand beaches and some of the richest reefs on earth, reached by island-hopping boat.",
      wiki: "Komodo National Park",
      long:
        "A cluster of rugged, savannah-covered islands between Sumbawa and Flores, Komodo National Park is home to the Komodo dragon — the world's largest lizard, a three-metre monitor found nowhere else — which you track on foot with a ranger across the dry hills of Komodo and Rinca islands. But the park is as much about the sea as the dragons: the waters here are among the most biodiverse on the planet, with world-class diving and snorkelling over coral gardens, manta rays and turtles.\n\nThe classic way to visit is a multi-day boat trip from the frontier port of Labuan Bajo on Flores, island-hopping between dragon walks, the famous Pink Beach, the viewpoint island of Padar with its three-bay panorama, and snorkel stops. The scenery — bare golden hills tumbling into impossibly blue water — is some of the most beautiful in Indonesia.",
      practical: [
        { label: "Getting there", value: "Fly to Labuan Bajo (LBJ) on Flores (from Bali), the gateway port; boat trips and day tours depart from there." },
        { label: "Seeing dragons", value: "Guided ranger walks on Rinca (quieter) or Komodo island; park and ranger fees apply. Keep your distance and follow the ranger — the dragons are genuinely dangerous." },
        { label: "On the water", value: "Snorkel/dive Manta Point, Pink Beach and the reefs; climb Padar Island at sunrise for its famous three-bay view. Multi-day liveaboards go furthest." },
        { label: "When to go", value: "Dry season (Apr–Oct) for calm seas and clear water; the islands are green briefly after the rains but seas can be rough Nov–Mar." },
      ],
      stay:
        "Base in Labuan Bajo — now well-supplied with hotels and hilltop sunset bars — and take day or overnight boat trips into the park; or sleep aboard a traditional phinisi boat on a 2–4 day liveaboard for the fullest experience and the best light on the islands.",
      tips: [
        "A 2-day/1-night boat trip beats a rushed day tour — you'll catch Padar at dawn and empty snorkel sites.",
        "Choose a reputable, well-maintained boat operator; safety standards vary and the crossings are open water.",
      ],
    },
    {
      name: "Prambanan", category: "architecture", coords: [-7.7520, 110.4915], region: "Central Java",
      description: "A soaring cluster of 9th-century Hindu temple spires, the finest in Indonesia, near Yogyakarta.",
      wiki: "Prambanan",
      long:
        "Built in the 9th century as a rival to Buddhist Borobudur nearby, Prambanan is the largest Hindu temple complex in Indonesia and one of the most beautiful in Southeast Asia — a cluster of tall, slender, intricately carved stone spires soaring up to 47 metres, dedicated to the trinity of Shiva, Vishnu and Brahma. The three great central shrines are wrapped in narrative reliefs of the Ramayana, which you can follow around the galleries; the whole ensemble is starkly vertical where Borobudur is horizontal.\n\nToppled by earthquakes and painstakingly reconstructed, the temples stand on a broad plain with lesser shrines scattered around, and are ringed by yet more Buddhist and Hindu candi (temples) worth exploring. Come for sunset, when the spires glow against the sky, or catch an open-air performance of the Ramayana ballet staged with the lit temples as a backdrop. With Borobudur, it makes central Java a temple-lover's paradise.",
      practical: [
        { label: "Getting there", value: "~30 min from Yogyakarta by car or the local KRL commuter train to Prambanan station, then a short walk." },
        { label: "Tickets", value: "Combined Prambanan/Borobudur tickets exist; entry includes a sarong to enter the shrines. Go late afternoon for the light and cooler air." },
        { label: "Ramayana ballet", value: "Open-air (dry season) or indoor performances stage the Ramayana with the illuminated temples behind — a memorable evening; book ahead." },
        { label: "Nearby", value: "The lesser candi around Prambanan (Sewu, Plaosan) are quieter and lovely; combine on a bicycle or by car." },
      ],
      stay:
        "Yogyakarta is the base for both Prambanan and Borobudur — stay near the kraton or the artsy Prawirotaman area. To catch Prambanan at opening and the quiet outlying temples, a countryside guesthouse near the site works well too.",
      tips: [
        "Do Prambanan at sunset and Borobudur at sunrise to see each in its best light and avoid the midday heat.",
        "Time a visit for the Ramayana ballet if you can — the lit temples as a stage set are magical.",
      ],
    },
    {
      name: "Lake Toba", category: "nature", coords: [2.6845, 98.8756], region: "North Sumatra",
      description: "A vast volcanic lake with an island the size of Singapore at its heart — cool, calm, and Batak country.",
      wiki: "Lake Toba",
      long:
        "The largest volcanic lake in the world, Lake Toba fills the caldera of a super-eruption that shook the planet 74,000 years ago — a serene expanse of deep blue water 100 kilometres long, ringed by pine-clad cliffs and cooled by its 900-metre altitude. At its centre lies Samosir, an island nearly the size of Singapore and the homeland of the Batak people, whose distinctive boat-shaped houses with soaring saddle roofs, ancient stone chairs and animist-Christian traditions make this one of Sumatra's most fascinating cultures.\n\nSamosir is the place to slow right down: base in the lakeside village of Tuk Tuk, swim in the warm, still water, cycle or motorbike between Batak villages and old royal tombs, and soak in the calm. Cool, green and gloriously unhurried, far from Bali's crowds, Toba is one of the great relaxing destinations of Indonesia — the reward for the effort of reaching Sumatra.",
      practical: [
        { label: "Getting there", value: "Fly to Medan or the lakeside Silangit airport (SIQ); road to the port of Parapat (~4 hrs from Medan), then a ferry to Tuk Tuk on Samosir island." },
        { label: "Getting around", value: "Rent a bicycle or motorbike on Samosir to reach Batak villages, stone tombs (Ambarita, Tomok) and hot springs; the island is big and quiet." },
        { label: "When to go", value: "Cool year-round at altitude; the drier months (roughly Apr–Oct) are best for lake swimming and clear views." },
        { label: "Culture", value: "See traditional Batak houses and tombs and, if timed right, a sigale-gale puppet or Batak music performance." },
      ],
      stay:
        "Base on the Tuk Tuk peninsula on Samosir island — laid-back lakeside guesthouses with gardens running down to the water, where you can swim off the jetty, rent a bike, and let a few days drift by in the cool mountain air.",
      tips: [
        "Give it several days — Toba's whole appeal is the deep calm and the Batak villages, not ticking off sights.",
        "Rent a motorbike to explore Samosir's far side and highland viewpoints away from Tuk Tuk.",
      ],
    },
    {
      name: "Tana Toraja", category: "offbeat", coords: [-2.9700, 119.8900], region: "South Sulawesi",
      description: "A highland culture of soaring boat-shaped houses, cliff graves and extraordinary funeral rites.",
      wiki: "Tana Toraja",
      long:
        "High in the mountains of South Sulawesi, Tana Toraja is one of the most culturally extraordinary places in Indonesia — the homeland of the Torajan people, whose entire society revolves around elaborate death rituals. Villages are dominated by tongkonan, magnificent ancestral houses with dramatically upswept, boat-shaped roofs and carved, painted facades, arranged facing rice barns across a green upland of terraces and bamboo.\n\nThe Torajan funeral is the centre of life: multi-day ceremonies with buffalo sacrifices that can draw hundreds of guests, after which the dead are laid to rest in graves carved into cliff faces, in hanging coffins, or in caves guarded by carved wooden effigies (tau tau). Visitors may, respectfully and with a guide, attend a funeral. Green, cool and utterly unlike anywhere else, Toraja rewards travellers willing to go deep into Sulawesi for a genuinely different world.",
      practical: [
        { label: "Getting there", value: "Fly to Makassar, then ~8 hrs by bus/car up to Rantepao, the main town (or a short flight to the small local airport). A guide is well worth it here." },
        { label: "What to see", value: "Cliff and cave graves with tau tau effigies (Lemo, Londa, Kete Kesu), traditional tongkonan villages, and — if timed right — a funeral ceremony." },
        { label: "Funerals", value: "Held mainly in the dry season (peak around Jul–Sep). Attending is possible with a guide and an invitation; bring a small gift, dress respectfully, and be prepared for buffalo sacrifice." },
        { label: "When to go", value: "Cool highland climate; the dry season (Apr–Oct) is best for trekking the rice terraces and coincides with funeral season." },
      ],
      stay:
        "Base in Rantepao and take day trips, or stay in a village guesthouse among the tongkonan and rice terraces to walk between hamlets and grave sites on foot. A knowledgeable local guide transforms the visit — the meaning is in the ritual, not just the sights.",
      tips: [
        "Hire a good local guide — the cliff graves and funeral customs make little sense without one, and etiquette matters.",
        "If invited to a funeral, bring a modest gift (cigarettes, sugar) and follow your guide's lead on protocol.",
      ],
    },
    {
      name: "Raja Ampat", category: "nature", coords: [-0.5000, 130.5000], region: "West Papua",
      description: "The most biodiverse marine realm on earth — karst islets, empty lagoons, and reefs beyond compare.",
      wiki: "Raja Ampat",
      long:
        "Off the far northwestern tip of Papua, Raja Ampat ('the Four Kings') is the crown jewel of the Coral Triangle and, by fish and coral count, the most biodiverse marine environment on the planet. Hundreds of jungle-topped karst islets rise from turquoise lagoons, and beneath the surface lies an underwater wonderland — walls and reefs blazing with soft corals, schooling fish, reef sharks, manta rays and the rare wobbegong, in water of astonishing clarity.\n\nRemote and hard-won, Raja Ampat rewards the effort with a sense of true wilderness: near-empty beaches, viewpoints over a maze of islands (the iconic Piaynemo and Wayag panoramas), birds of paradise displaying in the forest, and Papuan villages far from any crowd. Visited by liveaboard dive boat or from simple homestays and eco-resorts, it is a bucket-list destination for divers and snorkellers — and a reminder of how rich a coral sea can be.",
      practical: [
        { label: "Getting there", value: "Fly to Sorong (via Makassar/Jakarta), then a ferry or speedboat to Waisai (Waigeo) or on to the homestays/resorts. It's a long, multi-leg journey — plan it in." },
        { label: "Fees & timing", value: "A marine park entry permit is required. Best in the drier, calmer season (roughly Oct–Apr here differs from Java) — check current conditions, as seas govern access." },
        { label: "How to visit", value: "Village homestays on Kri/Gam for budget divers and snorkellers, eco-resorts for comfort, or a liveaboard to reach far-flung Wayag and Misool." },
        { label: "Above water", value: "The Piaynemo and Wayag karst viewpoints, birdwatching for birds of paradise, and paddling the still lagoons." },
      ],
      stay:
        "Choose a Papuan-run homestay on Kri or Gam island for simple over-water bungalows and house reefs you can snorkel straight off the deck, or a comfortable eco-resort. Serious divers often opt for a liveaboard to reach the remote reefs of Misool and Wayag.",
      tips: [
        "Even non-divers are rewarded — the snorkelling straight off many homestay jetties is world-class.",
        "Bring enough cash and any special gear; the islands are remote with few shops or ATMs.",
      ],
    },
  ],
};
