// Country ID card — schema reference lives in data/index.js
export default {
  code: "tr",
  name: "Turkey",
  flag: "🇹🇷",
  region: "Anatolia & the Eastern Mediterranean",
  tagline: "Where Europe meets Asia — Byzantine domes, Ottoman bazaars, and lunar valleys.",
  tags: ["history", "architecture", "food", "nature", "ruins", "bazaars", "slow travel"],

  languages: {
    name: "Turkish",
    note: "A Turkic language written in a Latin alphabet since Atatürk's 1928 reform, phonetic and consistent once you learn a few extra letters (ş = 'sh', ç = 'ch', ğ is silent, ı is a throaty 'uh'). Warm, formal courtesies matter; a little Turkish is met with real delight.",
    phrases: [
      { en: "Hello", local: "Merhaba", pron: "MER-ha-ba" },
      { en: "Thank you", local: "Teşekkür ederim", pron: "te-shek-KOOR e-de-rim" },
      { en: "Please / You're welcome", local: "Lütfen / Rica ederim", pron: "LOOT-fen / ri-JA e-de-rim" },
      { en: "Yes / No", local: "Evet / Hayır", pron: "e-VET / ha-YUHR" },
      { en: "Excuse me / Sorry", local: "Pardon / Özür dilerim", pron: "par-DON / oh-ZOOR di-le-rim" },
      { en: "How much is it?", local: "Ne kadar?", pron: "neh ka-DAR?" },
      { en: "Where is…?", local: "… nerede?", pron: "… NE-re-de?" },
      { en: "Delicious!", local: "Çok lezzetli!", pron: "chok lez-zet-LEE!" },
      { en: "Water / Tea", local: "Su / Çay", pron: "soo / chai" },
      { en: "Cheers!", local: "Şerefe!", pron: "she-re-FE!" },
      { en: "Goodbye", local: "Hoşça kal / Güle güle", pron: "HOSH-cha kal / gu-LE gu-LE" },
    ],
  },

  history: {
    summary:
      "Few lands have witnessed as much history as Anatolia. It cradled the world's first monumental religious site at Göbekli Tepe, the Hittite empire, Troy, and the Greek and Roman cities of the Aegean coast. As Byzantium, Constantinople became the glittering capital of the Eastern Roman Empire for over a thousand years, until the Ottomans took the city in 1453 and built an empire spanning three continents. The modern Republic of Turkey was forged from the empire's collapse in 1923 by Mustafa Kemal Atatürk, who moved the capital to Ankara and remade the state as secular and Western-facing. Straddling two continents, the country layers Hittite, Greek, Roman, Byzantine, Seljuk and Ottoman worlds one atop another — a palimpsest you can read in almost any old city.",
    timeline: [
      { era: "c. 9500 BC (Göbekli Tepe)", text: "Hunter-gatherers raise the world's oldest known temple in the southeast — older than farming or the wheel." },
      { era: "1600–1180 BC (Hittites)", text: "A great Bronze Age empire rules central Anatolia from Hattusa, rivalling Egypt." },
      { era: "330 AD (Constantinople)", text: "Constantine refounds Byzantium as the capital of the Roman east; it becomes the heart of Byzantium for a millennium." },
      { era: "1453 (Ottoman conquest)", text: "Mehmed II takes Constantinople, ending the Byzantine Empire and launching Ottoman ascendancy." },
      { era: "1923 (Republic)", text: "Atatürk proclaims the secular Republic of Turkey from the ashes of the Ottoman Empire." },
    ],
  },

  books: [
    { title: "Istanbul: Memories and the City", author: "Orhan Pamuk", year: "2003", note: "The Nobel laureate's melancholy, luminous memoir of his home city — read it before you go." },
    { title: "Birds Without Wings", author: "Louis de Bernières", year: "2004", note: "A sweeping novel of a mixed Anatolian village torn apart by the empire's fall." },
    { title: "The Museum of Innocence", author: "Orhan Pamuk", year: "2008", note: "An obsessive love story mapped onto 1970s Istanbul; there's a real museum to match it." },
    { title: "Constantinople: The Last Great Siege, 1453", author: "Roger Crowley", year: "2005", note: "A gripping, novelistic account of the fall of the city." },
    { title: "A Fez of the Heart", author: "Jeremy Seal", year: "1995", note: "A wry travelogue that chases the hat through modern Turkey's identity." },
  ],

  meals: [
    { name: "Kebap (kebab)", description: "Far more than one dish — from Adana's fiery minced-lamb skewers to the pistachio-crusted kebabs of Gaziantep and the slow İskender doused in tomato and butter.", tip: "Kebabs are a regional art; eat Adana in Adana, İskender in Bursa, and lahmacun anywhere with a good wood oven." },
    { name: "Meze", description: "A spread of small cold and hot dishes — smoky aubergine, stuffed vine leaves, haydari, fava — grazed slowly over rakı at a meyhane." },
    { name: "Pide & lahmacun", description: "Turkey's answer to pizza: boat-shaped pide loaded with cheese or minced meat, and paper-thin lahmacun to squeeze with lemon and roll." },
    { name: "Simit & Turkish breakfast", description: "The sesame ring sold from every street cart, and the vast kahvaltı spread of cheeses, olives, honey, eggs and endless tea that anchors the morning." },
    { name: "Baklava & künefe", description: "Gaziantep's pistachio baklava is world-class; künefe is a hot, cheese-filled shredded-pastry dessert soaked in syrup, best eaten molten." },
    { name: "Çay & Turkish coffee", description: "Tulip glasses of black tea punctuate the whole day; thick unfiltered coffee is UNESCO-listed and traditionally read in the grounds afterwards." },
  ],

  climate: {
    unit: "°C",
    note: "Turkey is huge and varied. These figures are for Istanbul; the Aegean and Mediterranean coasts are hotter and drier in summer, Cappadocia and the central plateau are high and continental (cold winters, warm days), and the eastern mountains get real snow. Spring (Apr–Jun) and autumn (Sep–Oct) are ideal almost everywhere.",
    coords: [41.01, 28.98], // Istanbul — representative point for the fetch script
    key: "tr",
    best: [4, 5, 6, 9, 10],
    avoid: [7, 8, 1],
    months: [
      { mean: 6, rain: 105 }, { mean: 6, rain: 78 }, { mean: 8, rain: 71 },
      { mean: 12, rain: 46 }, { mean: 17, rain: 34 }, { mean: 22, rain: 34 },
      { mean: 24, rain: 34 }, { mean: 24, rain: 39 }, { mean: 20, rain: 58 },
      { mean: 16, rain: 81 }, { mean: 12, rain: 103 }, { mean: 8, rain: 119 },
    ],
  },

  events: [
    { name: "Spring wildflowers & mild coast", when: "April – June", months: [4, 5, 6], kind: "go", description: "The Aegean ruins are green and poppy-strewn, the coast is warm but not scorching, and Cappadocia is at its loveliest — the sweet spot for touring." },
    { name: "Ramadan (Ramazan)", when: "Shifts ~11 days earlier each year", months: [], kind: "note", description: "Daytime fasting; some restaurants close by day in conservative areas, but cities stay lively and the sunset iftar is a wonderful, festive time to be out." },
    { name: "Peak summer heat", when: "July – August", months: [7, 8], kind: "avoid", description: "The coasts are packed and the interior bakes; inland cities and ruins are brutal by midday. Beautiful on the water, punishing on the archaeology." },
    { name: "Autumn harvest & clear skies", when: "September – October", months: [9, 10], kind: "go", description: "Warm seas, thinning crowds, grape and pomegranate harvests, and reliably clear mornings for Cappadocia's balloons." },
  ],

  places: [
    {
      name: "Hagia Sophia & Sultanahmet", category: "architecture", coords: [41.0086, 28.9802], region: "Istanbul",
      description: "Byzantine dome, Ottoman minarets, and the great mosques of the old city crowded onto one peninsula.",
      wiki: "Hagia Sophia",
      long:
        "For nearly a thousand years Hagia Sophia was the largest cathedral in the world, its vast dome seeming to float on a ring of windows — an engineering marvel of 6th-century Byzantium that stunned everyone who entered. Converted to a mosque in 1453, made a museum by Atatürk, and returned to worship as a mosque in 2020, it embodies the whole layered story of the city, with golden mosaics of Christ surviving above Islamic calligraphy.\n\nIt anchors Sultanahmet, the old imperial core, where the cascading domes of the Blue Mosque face it across a garden, the sunken Basilica Cistern glows underground, and Topkapı Palace spreads over the point where the Bosphorus meets the Golden Horn. It's touristy and unmissable both at once — go early, look up, and let the sheer age of the place land.",
      practical: [
        { label: "Getting there", value: "Sultanahmet tram stop (T1). The main sights are all within a 15-minute walk of each other." },
        { label: "Entrance", value: "Hagia Sophia's upper gallery ~€25 for tourists; the Blue Mosque is free; Topkapı Palace ~€40 including the Harem." },
        { label: "Dress & timing", value: "It's a working mosque — cover shoulders/knees, women a headscarf; avoid prayer times, and arrive at opening to beat the crowds and cruise groups." },
        { label: "Time to allow", value: "A full day for Hagia Sophia, the Blue Mosque, the Cistern and Topkapı; two if you add the Archaeology Museum." },
      ],
      stay:
        "Sleep in a small hotel in Sultanahmet or, for more life in the evenings, across the Golden Horn in Karaköy or Beyoğlu, walkable to Galata and the ferries. A rooftop terrace with a view of the domes and the Bosphorus is worth paying for here.",
      tips: [
        "Buy a rechargeable İstanbulkart for trams, ferries and funiculars — far cheaper than single tickets.",
        "Cross to the Asian side on a cheap public ferry at sunset; the crossing is the best 'cruise' in the city.",
      ],
    },
    {
      name: "Cappadocia (Göreme)", category: "nature", coords: [38.6431, 34.8289], region: "Central Anatolia",
      description: "A lunar valley of fairy-chimney rock cones, cave churches and dawn balloons rising over the tuff.",
      wiki: "Göreme",
      long:
        "Millennia of eruptions laid down soft volcanic tuff, and wind and water carved it into a dreamscape of pinnacles, cones and ripples — the 'fairy chimneys' of Cappadocia. Early Christians tunnelled homes, monasteries and entire underground cities into the rock, and painted Byzantine frescoes onto the walls of cave churches you can still crawl into at the Göreme Open-Air Museum.\n\nThe iconic image is dawn, when scores of hot-air balloons drift over the valleys in the pink early light — touristy, yes, but genuinely magical. Skip the crowds by hiking the Rose, Red and Love valleys on foot at golden hour, exploring the vast underground refuge of Derinkuyu, and sleeping in a cave hotel carved into the cliffs. It's the one place in Turkey that looks like nowhere else on earth.",
      practical: [
        { label: "Getting there", value: "Fly to Kayseri (KYA) or Nevşehir (NAV) from Istanbul (~1.5 hrs); Göreme is ~1 hr transfer. Long overnight buses also run." },
        { label: "Balloon ride", value: "~€200–300 pp, weather-permitting at dawn; book a reputable operator. Or watch dozens rise for free from a valley viewpoint." },
        { label: "Walking", value: "The Rose/Red, Love and Pigeon valleys link on foot — free, and the best way to feel the landscape. Bring water and sun cover." },
        { label: "Underground cities", value: "Derinkuyu or Kaymaklı, ~€3–5; go down many levels through the carved refuge — skip if strongly claustrophobic." },
      ],
      stay:
        "Sleep in a cave hotel cut into the tuff at Göreme or, quieter and prettier, the villages of Uçhisar or Çavuşin — stone-and-cave rooms with terraces facing the valleys and the morning balloons. Ortahisar is the most local-feeling base of all.",
      tips: [
        "Balloons fly at dawn and cancel in wind — build in a spare morning so a weather day doesn't cost you the flight.",
        "Hike the valleys at sunrise or sunset for the warmest colour and the fewest people.",
      ],
    },
    {
      name: "Ephesus", category: "history", coords: [37.9411, 27.3419], region: "Aegean coast",
      description: "One of the great Roman cities of the Mediterranean — marble streets, a vast theatre, and the Library of Celsus.",
      wiki: "Ephesus",
      long:
        "Once the second city of the Roman Empire in the east and a port of a quarter-million people, Ephesus is among the best-preserved classical cities anywhere. You walk its marble main streets past public latrines, baths, and the grooved ruts of chariot wheels, up to the beautifully reconstructed two-storey facade of the Library of Celsus and the enormous theatre where, tradition holds, St Paul preached.\n\nThe optional Terrace Houses — a covered excavation of frescoed, mosaic-floored Roman townhouses — are the highlight for many and worth the extra ticket. Nearby lie the last column of the vanished Temple of Artemis (one of the Seven Wonders), the hill town of Şirince, and the Ephesus Museum in Selçuk. Go at opening or late afternoon: there's little shade and the site bakes.",
      practical: [
        { label: "Getting there", value: "Base in Selçuk (train and bus hub) or the coastal town of Kuşadası; the site is ~3 km from Selçuk by dolmuş, taxi or a flat walk." },
        { label: "Entrance", value: "Main site ~€40; the Terrace Houses are a separate ~€15 ticket and well worth it. A Museum Pass covers multiple sites." },
        { label: "When to go", value: "First thing (08:00) or after 16:00 — midday is fiercely hot and jammed with cruise groups off the Kuşadası ships." },
        { label: "Time to allow", value: "2–3 hours, more with the Terrace Houses and the museum in Selçuk." },
      ],
      stay:
        "Base in low-key Selçuk, walkable to the İsa Bey Mosque, the basilica of St John and good local restaurants — far more characterful than the resort strip. Better still, climb up to the old Greek hill village of Şirince for stone houses, fruit wine and quiet.",
      tips: [
        "Buy the Terrace Houses ticket — the frescoes and mosaics are the least-crowded, best-preserved part of the site.",
        "Pair Ephesus with Şirince and the Selçuk museum for a full, unhurried day.",
      ],
    },
    {
      name: "Pamukkale & Hierapolis", category: "nature", coords: [37.9203, 29.1206], region: "Aegean interior",
      description: "Blinding-white travertine terraces of warm mineral water, crowned by a Roman spa city and its ruins.",
      wiki: "Pamukkale",
      long:
        "Pamukkale — 'cotton castle' — is a hillside of dazzling white travertine terraces, formed over millennia as warm, calcium-rich spring water spills down the slope and hardens into scalloped basins and frozen cascades. You walk up the terraces barefoot through shallow, tepid pools, an otherworldly and genuinely strange landscape.\n\nCrowning the plateau are the extensive ruins of Hierapolis, a Greco-Roman spa town that grew up around the sacred springs, with a grand theatre, a vast necropolis, and the 'Antique Pool' where you can swim among toppled marble columns in warm mineral water. It draws crowds and tour buses, so time it for early morning or late afternoon light, when the white terraces glow and the day-trippers thin out.",
      practical: [
        { label: "Getting there", value: "Base in Denizli (train/bus hub, ~20 min away) or the village of Pamukkale at the foot of the terraces." },
        { label: "Entrance", value: "Combined Pamukkale/Hierapolis ticket ~€30; the Antique (Cleopatra's) Pool is a separate swim fee." },
        { label: "When to go", value: "Enter from the top (south) gate early, or come for the golden hour — the white is blinding at midday and the terraces get busy." },
        { label: "Bring", value: "Shoes are removed on the travertines; bring a bag for them, plus a swimsuit for the pools." },
      ],
      stay:
        "Pamukkale village at the base has simple, friendly family pensions with pools and terrace views up to the white cliffs — stay the night to walk the terraces at opening or sunset, long after the coach tours have left.",
      tips: [
        "Walk the terraces at sunset for pink-gold light, then come back for the near-empty morning.",
        "Swim in the Antique Pool among sunken Roman columns — a genuinely odd, lovely soak.",
      ],
    },
    {
      name: "Lycian coast & the Kaş–Kekova shore", category: "nature", coords: [36.2021, 29.6386], region: "Mediterranean coast",
      description: "Turquoise water over sunken cities, cliff-hung tombs, and the long Lycian Way coastal trek.",
      wiki: "Kaş",
      long:
        "The southwest Mediterranean — the ancient land of Lycia — is Turkey's most beautiful coastline: pine-clad mountains dropping into impossibly clear turquoise water, dotted with the rock-cut tombs and ruined cities of a proud, independent classical people. The likeable little town of Kaş, with its old lanes and harbour, makes the ideal base, better than the bigger resorts.\n\nFrom here you can kayak over the 'sunken city' of Kekova, where earthquake-drowned Lycian ruins lie just under the surface; hike sections of the 540-km Lycian Way, one of the world's great coastal treks; and reach quieter beaches and gorges. Further west lie Butterfly Valley, the ghost town of Kayaköy, and the lagoon at Ölüdeniz — spectacular, if busier. This is the coast for slow days on the water and clifftop walks.",
      practical: [
        { label: "Getting there", value: "Fly to Dalaman (DLM) or Antalya (AYT), then bus/transfer along the coast to Kaş, Kalkan or Fethiye (2–3 hrs)." },
        { label: "Kekova", value: "Sea-kayak tours over the sunken city from Kaş/Üçağız (~€35–50); the ruins are protected — no swimming directly over them." },
        { label: "Lycian Way", value: "Well-marked long-distance trail; do day sections in spring or autumn (summer is too hot). Butterfly Valley and Kayaköy are highlights." },
        { label: "When to go", value: "May–June and September–October for warm seas without peak-summer crowds and heat." },
      ],
      stay:
        "Base in Kaş — a small pension or boutique hotel in the old town, walkable to the harbour and the little Hellenistic theatre above the sea. For total quiet, stay at Üçağız/Kekova on the water, or in the stone ruins-village atmosphere near Kayaköy.",
      tips: [
        "Kayak Kekova in the morning before the wind and the day boats arrive.",
        "Rent a small boat or join a modest gület day-trip rather than the big party boats — the coves are the whole point.",
      ],
    },
    {
      name: "Gaziantep", category: "food", coords: [37.0662, 37.3833], region: "Southeastern Anatolia",
      description: "Turkey's greatest food city — pistachio baklava, copper bazaars, and superb Roman mosaics.",
      wiki: "Gaziantep",
      long:
        "Ask a Turk where to eat and they will send you to Gaziantep. This ancient southeastern city, a UNESCO City of Gastronomy, is the undisputed capital of Turkish cuisine — home to the world's finest pistachio baklava, dozens of styles of kebab, spice-laden stews, and a copper-hammering bazaar that has run for centuries beneath its stone-vaulted hans.\n\nBeyond the table, the Zeugma Mosaic Museum houses one of the greatest collections of Roman mosaics in the world, rescued from a city flooded by a dam — the famous 'Gypsy Girl' among them. There's a castle, old stone mansions, and pistachio and copper workshops to wander. Off most tourist itineraries and all the richer for it, Antep rewards travellers who come to eat, seriously and joyfully.",
      practical: [
        { label: "Getting there", value: "Fly to Gaziantep (GZT) from Istanbul (~2 hrs), or take the long train/bus. It's an easy hub for the wider southeast." },
        { label: "Eat", value: "Baklava at a legendary house like İmam Çağdaş; beyran soup for breakfast; katmer (pistachio-clotted-cream pastry) mid-morning." },
        { label: "Zeugma Museum", value: "~€10; allow 1.5–2 hrs for the mosaics — the 'Gypsy Girl' is the star. One of the country's best museums." },
        { label: "Bazaar", value: "The old copper and spice bazaar around the castle is a working market — buy pistachios, spices, and hand-hammered copper." },
      ],
      stay:
        "Stay in a restored stone mansion (konak) hotel in the old town near the castle and the bazaar — thick-walled, courtyard-cool, and walkable to the baklava houses and the copper market.",
      tips: [
        "Come hungry and eat in small doses all day — this is a grazing city, not a two-big-meals one.",
        "Pistachios (Antep fıstığı) and baklava make the best edible souvenirs anywhere in Turkey.",
      ],
    },
    {
      name: "Mardin & the Tur Abdin", category: "architecture", coords: [37.3126, 40.7351], region: "Southeastern Anatolia",
      description: "A honey-stone city cascading down a hill above the Mesopotamian plain, with ancient Syriac monasteries nearby.",
      wiki: "Mardin",
      long:
        "Spilling down a steep hillside above the vast Mesopotamian plain, Mardin is one of Turkey's most beautiful and least-visited old cities — a tumble of honey-coloured limestone houses, carved mansions, mosques and madrasas, layered by Arab, Syriac, Kurdish and Armenian hands over a thousand years. From the rooftops the flat brown plain stretches south toward Syria, shimmering in the heat.\n\nThe surrounding Tur Abdin plateau is a heartland of Syriac Orthodox Christianity, dotted with ancient stone monasteries — Deyrulzafaran ('Saffron Monastery') just outside the city, and the great fortress-monastery of Mor Gabriel, founded in 397 AD, still home to monks and nuns. With its labyrinthine bazaar, terrace cafés, and deep multicultural past, Mardin feels like a frontier between worlds.",
      practical: [
        { label: "Getting there", value: "Fly to Mardin (MQM) from Istanbul, or via Diyarbakır. The old town is stepped and pedestrian — expect stairs and lanes." },
        { label: "Don't miss", value: "The Zinciriye Medrese and the terrace views, the covered bazaar, and Deyrulzafaran Monastery ~5 km out (small donation/fee)." },
        { label: "Nearby", value: "The Roman/early-Christian site of Dara with its rock-cut cisterns and necropolis, ~30 km; Mor Gabriel monastery further east." },
        { label: "When to go", value: "Spring or autumn — the plain is a furnace in high summer." },
      ],
      stay:
        "Sleep in a restored stone mansion hotel in the old town, with a vaulted room and a terrace looking out over the Mesopotamian plain — the sunset from up here, with the call to prayer rising off the city, is unforgettable.",
      tips: [
        "Wander the parallel lanes and stairways that link the one main street — the carved doorways are half the pleasure.",
        "Combine Mardin with the mosaics of Gaziantep and, if time allows, the strange summit tombs of Nemrut Dağı.",
      ],
    },
    {
      name: "Mount Nemrut (Nemrut Dağı)", category: "history", coords: [37.9809, 38.7411], region: "Southeastern Anatolia",
      description: "Giant stone heads of gods and a king toppled at a mountaintop tomb, best at sunrise 2,100 m up.",
      wiki: "Mount Nemrut",
      long:
        "On a remote 2,100-metre summit in the southeast, a megalomaniac 1st-century-BC king of the small Commagene kingdom, Antiochus I, built his own tomb-sanctuary: colossal seated statues of himself and a syncretic pantheon of Greek and Persian gods, guarded by eagles and lions. Earthquakes have since toppled the enormous heads, which now sit scattered on the terraces beside their bodies, staring out over the mountains — an eerie, unforgettable sight.\n\nThe classic pilgrimage is to arrive for sunrise or sunset, when low light rakes across the stone faces and the tumulus of crushed rock heaped over the (still undiscovered) royal tomb. It takes real effort to reach — a pre-dawn drive and a short cold climb — which keeps it uncrowded and adds to the sense of standing somewhere at the edge of the ancient world.",
      practical: [
        { label: "Getting there", value: "Base in Kahta or Adıyaman; tours run pre-dawn for sunrise, or late afternoon for sunset. A high, winding mountain drive plus a 20–30 min walk to the terraces." },
        { label: "Entrance", value: "National park fee ~€6. The final approach is on foot over loose stone — wear proper shoes." },
        { label: "When to go", value: "Late spring to early autumn only; the summit is snowbound and closed in winter. Nights are cold even in summer — bring a warm layer." },
        { label: "Time to allow", value: "A long half-day from Kahta; combine with the Cendere Roman bridge and Arsameia on the way." },
      ],
      stay:
        "Simple hotels and pensions in Kahta or Karadut village (closer to the summit) cater to the sunrise run. Karadut puts you nearest for the pre-dawn start and a shorter drive up the mountain.",
      tips: [
        "Sunrise is colder and clearer; sunset is warmer and easier — either way pack a jacket and a torch.",
        "The heads are fragile and protected — admire, don't climb on them.",
      ],
    },
    {
      name: "Safranbolu", category: "architecture", coords: [41.2500, 32.6944], region: "Black Sea hinterland",
      description: "A perfectly preserved Ottoman town of timber-framed mansions, cobbled lanes and a caravanserai.",
      wiki: "Safranbolu",
      long:
        "A prosperous stop on the old east–west caravan route, Safranbolu grew rich on trade and the saffron that gives it its name, and its wealthy merchants built hundreds of fine timber-framed konak mansions with jettied upper floors, latticed windows and cool inner courtyards. UNESCO-listed and remarkably intact, the old town is a living museum of Ottoman domestic architecture, its cobbled lanes winding between red-tiled roofs down to an old bazaar and a 17th-century caravanserai.\n\nUnlike grander destinations, Safranbolu is a modest, workaday place where you can watch coppersmiths and cobblers at their trades, sample Turkish delight and saffron sweets, and sleep inside one of the restored mansions. It makes a peaceful, atmospheric stop between Istanbul and the Black Sea coast or Cappadocia — the everyday Ottoman world rather than the imperial one.",
      practical: [
        { label: "Getting there", value: "~5–6 hrs by bus from Istanbul or Ankara to Karabük, then a short local ride to the old town (Çarşı)." },
        { label: "What to do", value: "Wander the Çarşı old quarter, tour a restored konak (e.g. Kaymakamlar House), climb to the Hıdırlık hill viewpoint at sunset." },
        { label: "Buy", value: "Saffron, lokum (Turkish delight), and hand-forged copper from the workshops in the old bazaar." },
        { label: "Time to allow", value: "One night is enough to feel it; two if you want to slow right down." },
      ],
      stay:
        "Stay inside a restored Ottoman konak in the Çarşı district — creaking wooden floors, cushioned window seats and a courtyard breakfast. It's the whole reason to come, and far nicer than the modern hotels up the hill.",
      tips: [
        "Go up to the Hıdırlık viewpoint for sunset over the rooftops.",
        "It's an easy, characterful overnight to break the long haul between Istanbul, Ankara and the coast.",
      ],
    },
  ],
};
