// Country ID card — schema reference lives in data/index.js
export default {
  code: "kz",
  name: "Kazakhstan",
  flag: "🇰🇿",
  region: "Central Asia",
  tagline: "The great steppe — golden grasslands, marble cities, and canyons on the edge of nowhere.",
  tags: ["nature", "history", "trek", "cities", "nomads", "slow travel"],

  languages: {
    name: "Kazakh & Russian",
    note: "Kazakh, a Turkic language, is the state language and increasingly written in a Latin alphabet after decades of Cyrillic; Russian remains widely spoken as the everyday lingua franca, especially in cities and the north. A few words of either are warmly welcomed in a country used to guests.",
    phrases: [
      { en: "Hello", local: "Сәлеметсіз бе", pron: "sah-le-met-SIZ be" },
      { en: "Thank you", local: "Рахмет", pron: "rah-MET" },
      { en: "Yes / No", local: "Иә / Жоқ", pron: "ee-YA / zhok" },
      { en: "Please", local: "Өтінемін", pron: "uh-tee-neh-MIN" },
      { en: "Excuse me / Sorry", local: "Кешіріңіз", pron: "keh-shee-ree-NIZ" },
      { en: "How much?", local: "Қанша?", pron: "kan-SHA?" },
      { en: "Where is…?", local: "…қайда?", pron: "… kai-DA?" },
      { en: "Delicious!", local: "Дәмді!", pron: "dahm-DEE!" },
      { en: "Water / Tea", local: "Су / Шай", pron: "soo / shai" },
      { en: "Welcome / come in", local: "Қош келдіңіз", pron: "kosh kel-dee-NIZ" },
      { en: "Goodbye", local: "Сау болыңыз", pron: "sow bo-lih-NIZ" },
    ],
  },

  history: {
    summary:
      "Kazakhstan is the heartland of the great Eurasian steppe, and its history is the history of the horse and the nomad. This was where humans may first have domesticated the horse (the Botai culture, ~3500 BC), and for millennia it was the domain of Scythian and Saka horse-lords — whose 'Golden Man', a warrior buried in gold, is now a national symbol — and later of the Turkic khanates and the Mongol hordes of Genghis Khan. The Silk Road threaded through its southern oasis cities like Turkestan and Otrar. In the 18th–19th centuries the Kazakh khanates were absorbed by the Russian Empire, and under the Soviet Union the steppe endured forced settlement, famine, the Gulag, nuclear testing at Semipalatinsk, and the launch of the Space Age from Baikonur. Independent since 1991, this vast, oil-rich and thinly populated country — the ninth-largest on earth — built a brand-new capital, now called Astana, out of the northern steppe, and is finding a confident modern identity rooted in its nomadic past.",
    timeline: [
      { era: "c. 3500 BC (Botai)", text: "Steppe peoples here are among the first anywhere to tame and ride the horse." },
      { era: "1st millennium BC (Saka/Scythians)", text: "Nomadic horse-warriors rule the steppe; the gold-clad 'Golden Man' is later found near Almaty." },
      { era: "13th c. (Mongol conquest)", text: "Genghis Khan's empire sweeps the steppe; the region becomes part of the Golden Horde." },
      { era: "18th–19th c. (Russian rule)", text: "The Kazakh khanates are gradually absorbed into the Russian Empire." },
      { era: "1991 (Independence)", text: "Kazakhstan becomes independent as the USSR collapses; a new capital rises on the northern steppe." },
    ],
  },

  books: [
    { title: "The Silent Steppe", author: "Mukhamet Shayakhmetov", year: "2006", note: "A rare firsthand memoir of a nomad boyhood destroyed by Soviet collectivisation and famine." },
    { title: "Apples Are from Kazakhstan", author: "Christopher Robbins", year: "2008", note: "A warm, curious traveller's portrait of the country (whose wild apple forests gave the world the apple)." },
    { title: "The Day Lasts More Than a Hundred Years", author: "Chingiz Aitmatov", year: "1980", note: "A Central Asian classic weaving steppe legend, the space programme and Soviet life together." },
    { title: "Nomads", author: "Ilyas Yesenberlin", year: "1976", note: "The epic historical novel of the Kazakh khanates, beloved as a national saga." },
    { title: "In Search of Kazakhstan", author: "Christopher Robbins", year: "2008", note: "Alternative title/edition of Robbins' affectionate journey across the country." },
  ],

  meals: [
    { name: "Beshbarmak", description: "The national dish — boiled horse or lamb served over wide flat noodles with onion broth, eaten communally with the hands ('five fingers').", tip: "Served at celebrations from a shared platter; the honoured guest may be offered the sheep's head. Accept graciously." },
    { name: "Kazy & horse meat", description: "Horse is prized here — kazy (horsemeat sausage) and shuzhuk are festive delicacies, rich and savoury." },
    { name: "Baursak", description: "Puffy squares of deep-fried dough, piled high and served with tea, jam and butter at any gathering — the taste of Kazakh hospitality." },
    { name: "Plov (palov)", description: "The Central Asian rice pilaf with lamb, carrot and cumin — shared across the region and a staple of southern Kazakhstan." },
    { name: "Kumis & shubat", description: "Fermented mare's milk (kumis) and camel's milk (shubat) — tangy, mildly alcoholic nomad drinks, an acquired but authentic taste." },
    { name: "Manti & samsa", description: "Steamed lamb dumplings (manti) and flaky baked meat pastries (samsa) from the tandyr oven — Silk Road comfort food." },
  ],

  climate: {
    unit: "°C",
    note: "Vast and sharply continental — figures are for Almaty in the mountainous southeast. Summers are hot, winters bitterly cold and snowy, and the northern steppe (and the capital, Astana — one of the world's coldest capitals) is even more extreme. Late spring (May–Jun) and early autumn (Sep) are the sweet spots for the mountains and steppe.",
    coords: [43.24, 76.89], // Almaty — representative point for the fetch script
    key: "kz",
    best: [5, 6, 9],
    avoid: [11, 12, 1, 2],
    months: [
      { mean: -5, rain: 30 }, { mean: -4, rain: 34 }, { mean: 3, rain: 62 },
      { mean: 11, rain: 96 }, { mean: 16, rain: 103 }, { mean: 21, rain: 61 },
      { mean: 24, rain: 37 }, { mean: 23, rain: 27 }, { mean: 17, rain: 27 },
      { mean: 9, rain: 50 }, { mean: 2, rain: 45 }, { mean: -3, rain: 36 },
    ],
  },

  events: [
    { name: "Nauryz (Persian/steppe New Year)", when: "21–22 March", months: [3], kind: "go", description: "The joyous spring-equinox festival across Central Asia — yurts, horse games, music and the sharing of nauryz-kože. A wonderful, colourful time, though still cold and pre-season for the mountains." },
    { name: "Mountain & steppe summer", when: "May – September", months: [5, 6, 7, 8, 9], kind: "go", description: "The window for the canyons, alpine lakes and steppe: wildflowers in late spring, warm hiking weather in summer, and golden light in September." },
    { name: "Nomad games & eagle hunting", when: "Autumn", months: [9, 10], kind: "note", description: "Traditional horseback games (kokpar) and golden-eagle hunting demonstrations take place in the cooler months — ask locally, or seek out a festival like the World Nomad Games when it's held." },
    { name: "Deep winter", when: "November – February", months: [11, 12, 1, 2], kind: "avoid", description: "Brutally cold across the country; mountain roads and steppe travel are hard. Fine for skiing at Shymbulak above Almaty, but most touring waits for spring." },
  ],

  places: [
    {
      name: "Charyn Canyon", category: "nature", coords: [43.3550, 79.0800], region: "near Almaty (southeast)",
      description: "A red-rock 'Valley of Castles' carved by a river through the steppe — Central Asia's Grand Canyon in miniature.",
      wiki: "Charyn Canyon",
      long:
        "About three hours east of Almaty, the steppe suddenly splits open into the Charyn Canyon, a 150-metre-deep gorge of fantastically eroded red sandstone that the Charyn river has carved over millions of years. Its most famous stretch, the 'Valley of Castles', is a dry side-canyon of towering, sculpted pinnacles and spires that you walk down through to the river at the bottom — glowing especially at sunrise and sunset when the rock burns orange and red.\n\nAt the canyon floor, a surprising ribbon of ash-tree grove (a rare relict forest) lines the fast green river, a lovely spot to camp overnight and watch the light change on the walls. Often combined with the turquoise Kolsai and Kaindy lakes in the mountains beyond, Charyn is the classic day-or-two escape from Almaty and one of the country's signature landscapes.",
      practical: [
        { label: "Getting there", value: "~200 km / ~3 hrs east of Almaty by car or tour; there's no easy public transport, so hire a driver or join a group." },
        { label: "The walk", value: "A ~3 km trail leads down through the Valley of Castles to the river and back — easy but exposed and hot; bring water, sun cover and sturdy shoes." },
        { label: "Combine with", value: "The Kolsai Lakes and the sunken, drowned-forest Lake Kaindy in the mountains nearby — best as a 2–3 day loop with an overnight." },
        { label: "When", value: "May–Sep; go for sunrise or sunset light. Summer midday is fierce and shadeless in the canyon." },
      ],
      stay:
        "Camp or take a simple eco-cabin down by the river at the canyon floor to have the Valley of Castles to yourself at dawn and dusk. Many travellers combine it with a village homestay near the Kolsai Lakes (Saty village) for a mountain night on the same trip.",
      tips: [
        "Stay overnight at the river to walk the empty canyon in golden light before the day tours arrive.",
        "Link Charyn with the Kolsai and Kaindy lakes — the three make a superb 2–3 day trip from Almaty.",
      ],
    },
    {
      name: "Kolsai & Kaindy Lakes", category: "nature", coords: [42.9333, 78.3167], region: "Tian Shan, southeast",
      description: "Turquoise alpine lakes in spruce forest, one with a submerged 'sunken forest' of ghostly tree trunks.",
      wiki: "Kolsai Lakes",
      long:
        "High in the northern Tian Shan mountains southeast of Almaty, the Kolsai Lakes are a chain of three clear, turquoise lakes strung up a forested valley of Tian Shan spruce, each higher and wilder than the last. The lowest is reached easily by road; the trail on to the second and third lakes makes a beautiful day hike (or an overnight) through alpine meadow toward the Kyrgyz border, with the option of continuing over a pass to Lake Issyk-Kul.\n\nNearby, and utterly unique, lies Lake Kaindy — formed when a 1911 earthquake dammed a valley and drowned a spruce forest, leaving the bleached, spear-like trunks of dead trees still standing eerily out of the cold, blue-green water. Together the lakes are the scenic highlight of the region, best based from the mountain village of Saty, where homestays offer horse rides, honey and a warm welcome.",
      practical: [
        { label: "Getting there", value: "~300 km / 4–5 hrs from Almaty via Saty village; a 4WD or tour is needed for the rough final tracks, especially to Kaindy." },
        { label: "Hiking", value: "Lower Kolsai to the second lake is ~4–5 hrs return through the forest; strong walkers reach the third lake or the Kyrgyz-border pass. Horses can be hired in Saty." },
        { label: "Lake Kaindy", value: "A short but very rough drive/hike from Saty leads to the sunken forest — most magical in still morning light with the drowned trunks reflected." },
        { label: "When", value: "Jun–Sep; the higher trails hold snow into early summer, and the lakes can freeze from autumn." },
      ],
      stay:
        "Base in a family homestay in Saty village — simple, warm and generous, with home cooking, horse hire and easy access to both the Kolsai lakes and Kaindy. It's the archetypal Kazakh mountain-village stay and the whole charm of the area.",
      tips: [
        "Visit Kaindy early for still water and the clearest reflection of the sunken trees.",
        "A Saty homestay plus a hired horse or guide is the best way to reach the upper lakes without a car.",
      ],
    },
    {
      name: "Big Almaty Lake & the Tian Shan above Almaty", category: "nature", coords: [43.0500, 76.9833], region: "near Almaty",
      description: "A startling turquoise reservoir cradled by snow peaks, an hour from the city — plus alpine hikes and skiing.",
      wiki: "Big Almaty Lake",
      long:
        "Almaty is one of the few big cities where snow-capped mountains rise straight from the suburbs, and the Tian Shan on its doorstep are a playground of alpine scenery. Just an hour up a mountain road, Big Almaty Lake is a mirror of vivid turquoise glacial meltwater held in a bowl of jagged 4,000-metre peaks — a startling, photogenic sight that feels a world away from the city below.\n\nHigher up sit the Tian Shan Astronomical Observatory and the passes toward the Kyrgyz border, while nearer town the Shymbulak ski resort and the Medeu skating rink (reached by cable car) offer year-round mountain access. In summer the surrounding valleys are laced with hiking trails through spruce forest and flower meadows; in winter this is Central Asia's best-known ski slope. It's the easiest big-mountain fix anywhere in the country.",
      practical: [
        { label: "Getting there", value: "~1 hr by car/taxi from central Almaty up the Big Almaty gorge; there's a checkpoint near the lake (it's a water reservoir — no swimming, and border-zone permits may be needed higher up)." },
        { label: "Do", value: "Photograph the lake, hike the surrounding trails and passes in summer, and take the cable car up to Shymbulak/Medeu for the high views." },
        { label: "Almaty itself", value: "Give the city a day — the Green Bazaar, the wooden Zenkov Cathedral in Panfilov Park, Soviet-era mosaics, and leafy café streets." },
        { label: "When", value: "Summer for hiking; winter for skiing at Shymbulak. Bring warm layers — it's much colder up at the lake than in the city." },
      ],
      stay:
        "Base in Almaty — the country's greenest, most likeable city, with good hotels, bazaars and restaurants — and day-trip up to the mountains. For an early start at the lake or the trails, small guesthouses in the foothill gorges put you closer to the peaks.",
      tips: [
        "Check current access rules for the lake and the border-zone passes above it before setting out.",
        "Pair the lake with a wander round Almaty's Green Bazaar and Panfilov Park for a perfect city-and-mountains day.",
      ],
    },
    {
      name: "Turkestan & the Mausoleum of Khoja Ahmed Yasawi", category: "architecture", coords: [43.2972, 68.2711], region: "South Kazakhstan",
      description: "A soaring, unfinished Timurid masterpiece — Kazakhstan's holiest shrine and greatest medieval building.",
      wiki: "Mausoleum of Khoja Ahmed Yasawi",
      long:
        "In the far south, the ancient Silk Road city of Turkestan holds Kazakhstan's single greatest architectural monument: the Mausoleum of Khoja Ahmed Yasawi, a colossal shrine built around 1400 on the orders of Timur (Tamerlane) over the grave of a revered 12th-century Sufi poet and mystic. Its enormous portal, ribbed turquoise dome and glowing tilework make it a masterpiece of Timurid architecture — a direct cousin of the great monuments of Samarkand — and its scaffolding-marks show it was left unfinished when Timur died.\n\nA UNESCO World Heritage Site and the holiest place in the country, it draws Muslim pilgrims from across Central Asia. The surrounding old town, with its restored bathhouse, bazaar and newly built citadel, and the nearby ruins of the once-great Silk Road city of Otrar (sacked by Genghis Khan), make Turkestan the historic and spiritual counterpoint to Kazakhstan's steppe and mountains.",
      practical: [
        { label: "Getting there", value: "Turkestan has its own airport and fast trains; it's reachable from Shymkent (~2–3 hrs) or by rail from Almaty/Astana. A convenient stop between Central Asian cities." },
        { label: "The mausoleum", value: "Free or a small fee; dress modestly (it's an active pilgrimage shrine — cover shoulders and legs, women a headscarf). Interiors include a giant bronze cauldron cast for Timur." },
        { label: "Nearby", value: "The rebuilt old citadel and caravanserai quarter, and the atmospheric ruins of Otrar and the Arystan-Bab mausoleum on the way." },
        { label: "When", value: "Spring and autumn are most comfortable; the southern summer is very hot." },
      ],
      stay:
        "Stay in Turkestan's growing cluster of hotels near the shrine and the reconstructed old town, so you can see the mausoleum in the soft light of early morning or dusk. Shymkent, a lively southern city, is an alternative base with more choice.",
      tips: [
        "See the shrine at sunset or sunrise, when the turquoise dome and portal glow their warmest.",
        "Combine with the ruins of Otrar and the Arystan-Bab mausoleum for the full Silk Road story.",
      ],
    },
    {
      name: "Astana (Nur-Sultan)", category: "architecture", coords: [51.1694, 71.4491], region: "North-central steppe",
      description: "A futuristic capital of glass, marble and bold architecture raised from the bare northern steppe.",
      wiki: "Astana",
      long:
        "Few cities on earth are as improbable as Astana. In 1997 Kazakhstan moved its capital to a windswept provincial town on the northern steppe and, fuelled by oil wealth, conjured from scratch a gleaming showcase city of futuristic towers, marble ministries and eye-catching landmarks by star architects. Love it or find it surreal, the result is one of the world's most striking planned capitals — a statement of national ambition written in glass and steel.\n\nThe set pieces cluster along a grand axis: the Bayterek tower, a golden orb on a white lattice symbolising a tree-of-life legend; Norman Foster's pyramid 'Palace of Peace'; the vast tented Khan Shatyr mall; and the Nur-Astana mosque. It's a fascinating, slightly unreal place to spend a day reading the story a new nation wanted to tell about itself — best in summer, as this is among the coldest capital cities in the world, with brutal steppe winters.",
      practical: [
        { label: "Getting there", value: "Astana's international airport and rail links connect it across the country and region; the sights cluster along the central boulevard and are walkable or a short taxi apart." },
        { label: "Landmarks", value: "The Bayterek tower (ride up for the view), Foster's Palace of Peace pyramid, Khan Shatyr, the Nur-Astana mosque, and the National Museum for the country's story." },
        { label: "When", value: "Late spring to early autumn — winters here are ferociously cold and windy, though the illuminated architecture is dramatic in the snow." },
        { label: "Note", value: "The city has been renamed more than once (Astana → Nur-Sultan → Astana); locals use both. It's a modern showcase rather than an old town." },
      ],
      stay:
        "Stay near the central axis (around Bayterek and the government district) to walk between the landmarks. Astana is a business capital with plenty of modern hotels; there's little 'old town', so pick location and comfort over character here.",
      tips: [
        "See the architecture lit up after dark — the city is designed to impress at night.",
        "One full day covers the highlights; pair it with the museum for context on the nation's history.",
      ],
    },
    {
      name: "Altyn-Emel National Park & the Singing Dune", category: "nature", coords: [44.1667, 78.6667], region: "Semirechye (southeast)",
      description: "Steppe wilderness of a giant 'singing' sand dune, striped rainbow hills and rare wild horses.",
      wiki: "Altyn-Emel National Park",
      long:
        "Between the Ili river and the mountains east of Almaty spreads Altyn-Emel, a huge, remote national park that packs the drama of the Kazakh wilderness into one protected expanse of desert, steppe and eroded hills. Its signature sight is the Singing Dune (Aygaikum) — a vast, 150-metre-high crescent of sand that, when dry and disturbed, emits a strange, deep, organ-like hum as the grains slide, an eerie natural phenomenon you can trigger by sliding down its flank.\n\nDeeper in the park lie the extraordinary Aktau ('white mountains') — chalky hills banded in white, ochre, pink and green like a layered cake, formed from ancient lake sediments — and the reddish Katutau formations, plus a sacred 700-year-old willow and clusters of ancient burial mounds. Altyn-Emel is also a refuge for wildlife, including the reintroduced Przewalski's horse, the last truly wild horse. Vast, empty and requiring a guide and permit, it rewards those who venture off the standard trail.",
      practical: [
        { label: "Getting there", value: "~250–300 km from Almaty; a park permit and, in practice, a 4WD with driver/guide are needed — distances inside the park are large and roads rough." },
        { label: "See", value: "The Singing Dune (walk up and slide to hear it 'sing'), the rainbow-striped Aktau mountains, the Katutau volcanic rocks, and the ancient Besshatyr burial mounds." },
        { label: "Wildlife", value: "Kulan (wild ass), gazelle and the reintroduced Przewalski's horse roam the steppe — dawn and dusk are best for sightings." },
        { label: "When", value: "Spring and autumn are ideal; summer is very hot and the park is best explored over 2 days with an overnight inside." },
      ],
      stay:
        "The park has basic guesthouses and ranger accommodation near the entrance and inside — an overnight is really needed to reach the far Aktau hills and to catch the dune and wildlife in good light. Arrange it through a tour with permits, transport and food included.",
      tips: [
        "Climb the Singing Dune in dry conditions and slide down to hear it hum — it won't 'sing' when damp.",
        "Go with a guide and plan two days; the park's highlights are far apart on rough tracks.",
      ],
    },
  ],
};
