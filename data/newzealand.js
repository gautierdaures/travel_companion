// Country ID card — schema reference lives in data/index.js
export default {
  code: "nz",
  name: "New Zealand",
  flag: "🇳🇿",
  region: "Oceania / South Pacific",
  tagline: "Aotearoa — glacier-carved mountains, wild coasts, and the great walks of the south.",
  tags: ["nature", "trek", "history", "wildlife", "slow travel", "cities"],

  languages: {
    name: "English & te reo Māori",
    note: "English is universal, but te reo Māori is an official language and woven through daily life — place names, greetings and signage. Learning a few Māori words is warmly received; the vowels are pure and consistent (a as in 'car', e as in 'egg', wh is often a soft 'f').",
    phrases: [
      { en: "Hello (to one person)", local: "Kia ora", pron: "kee-a OR-a" },
      { en: "Welcome", local: "Haere mai", pron: "HIGH-reh my" },
      { en: "Thank you", local: "Ngā mihi / Kia ora", pron: "nga MEE-hee" },
      { en: "How are you?", local: "Kei te pēhea koe?", pron: "kay teh PEH-heh-a kweh?" },
      { en: "Good / well", local: "Kei te pai", pron: "kay teh PIE" },
      { en: "Family / people", local: "Whānau", pron: "FAH-no" },
      { en: "Food / meal", local: "Kai", pron: "kai" },
      { en: "The land", local: "Whenua", pron: "FEH-noo-a" },
      { en: "Mountain", local: "Maunga", pron: "MOW-nga" },
      { en: "Goodbye (stay well)", local: "Haere rā / Ka kite", pron: "HIGH-reh rah / ka KEE-teh" },
      { en: "Cheers / thanks", local: "Ka pai", pron: "ka PIE" },
    ],
  },

  history: {
    summary:
      "New Zealand was the last major landmass on earth to be settled by humans. Polynesian voyagers arrived by ocean-going canoe around 1300 AD and became the Māori, developing a rich culture organised around iwi (tribes), the land, and mana (prestige). European contact came with Abel Tasman in 1642 and James Cook in 1769; sealers, whalers, traders and missionaries followed. In 1840 the British Crown and many Māori chiefs signed the Treaty of Waitangi, the country's founding — and still contested — document, whose differing English and Māori texts shape debates over sovereignty and land to this day. Colonisation, the New Zealand Wars and land loss followed, but Māori culture endured and has undergone a powerful renaissance. Today Aotearoa New Zealand is a bicultural (and increasingly multicultural) Pacific nation, world-known for its landscapes, its progressive streak, and its outdoors-loving way of life.",
    timeline: [
      { era: "c. 1300 (Māori settlement)", text: "Polynesian voyagers reach Aotearoa by canoe — the last large landmass on earth to be settled." },
      { era: "1642 & 1769 (European contact)", text: "Abel Tasman sights the coast; James Cook charts the islands, opening them to European traders and whalers." },
      { era: "1840 (Treaty of Waitangi)", text: "The Crown and Māori chiefs sign the founding treaty — its two differing texts still central to the nation." },
      { era: "1860s–70s (New Zealand Wars)", text: "Conflict and confiscation over land reshape the country as European settlement expands." },
      { era: "1893 & the modern era", text: "New Zealand becomes the first country to grant women the vote; a Māori cultural renaissance later reshapes national identity." },
    ],
  },

  books: [
    { title: "The Bone People", author: "Keri Hulme", year: "1984", note: "The Booker-winning, wholly original novel of Māori and Pākehā worlds meeting on the wild West Coast." },
    { title: "The Luminaries", author: "Eleanor Catton", year: "2013", note: "A dazzling, intricate Booker winner set in the gold-rush boomtown of 1860s Hokitika." },
    { title: "Whale Rider", author: "Witi Ihimaera", year: "1987", note: "A short, beautiful novel of Māori tradition and a girl who would lead — the basis for the film." },
    { title: "Mister Pip", author: "Lloyd Jones", year: "2006", note: "Not set in NZ but by one of its finest writers; try his 'Hand Me Down World' for range." },
    { title: "The Penguin History of New Zealand", author: "Michael King", year: "2003", note: "The beloved, humane standard history of the country." },
  ],

  meals: [
    { name: "Hāngī", description: "The traditional Māori feast — meat and root vegetables slow-steamed for hours in an earth oven over hot stones, smoky and tender.", tip: "Best experienced at a Māori cultural evening (e.g. around Rotorua), where the food comes with the story and the welcome." },
    { name: "Green-lipped mussels & crayfish", description: "Superb seafood — plump Marlborough mussels, Bluff oysters in season, and roadside crayfish (rock lobster) on the Kaikōura coast." },
    { name: "The pie & fish and chips", description: "The great Kiwi hand-food: a proper mince-and-cheese or steak pie from a bakery, and fresh fish and chips eaten on the beach." },
    { name: "Lamb & venison", description: "World-renowned grass-fed lamb, and farmed venison (cervena) — the backbone of a classic New Zealand roast or barbecue." },
    { name: "Pavlova & hokey pokey", description: "The meringue dessert piled with cream and kiwifruit or berries (fiercely claimed against Australia), and hokey-pokey honeycomb ice cream." },
    { name: "Flat white & craft everything", description: "New Zealand takes its coffee (the flat white is a local invention) as seriously as its booming craft beer and cool-climate wines — Central Otago pinot, Marlborough sauvignon blanc." },
  ],

  climate: {
    unit: "°C",
    note: "Temperate and changeable — 'four seasons in one day' is a real thing. Seasons are reversed (summer Dec–Feb, winter Jun–Aug). The figures below split the warmer, drier North Island (Auckland) from the cooler, more alpine South Island (Queenstown), which has real winters and a ski season. Summer is peak for tramping; the shoulders (Mar–Apr, Nov) are quieter and lovely.",
    regions: [
      {
        name: "North Island (Auckland)", coords: [-36.85, 174.76], key: "nz-north",
        note: "Mild, humid and subtropical in the far north; warm summers, gentle winters.",
        best: [11, 12, 1, 2, 3], avoid: [],
        months: [
          { mean: 20, rain: 74 }, { mean: 20, rain: 79 }, { mean: 19, rain: 83 },
          { mean: 16, rain: 96 }, { mean: 14, rain: 118 }, { mean: 12, rain: 138 },
          { mean: 11, rain: 142 }, { mean: 11, rain: 125 }, { mean: 13, rain: 106 },
          { mean: 15, rain: 101 }, { mean: 16, rain: 88 }, { mean: 18, rain: 87 },
        ],
      },
      {
        name: "South Island (Queenstown)", coords: [-45.03, 168.66], key: "nz-south",
        note: "Alpine and continental — hot summer days, cold frosty winters, and a Jun–Sep ski season.",
        best: [12, 1, 2, 3], avoid: [6, 7],
        months: [
          { mean: 16, rain: 68 }, { mean: 16, rain: 57 }, { mean: 13, rain: 68 },
          { mean: 10, rain: 66 }, { mean: 6, rain: 71 }, { mean: 3, rain: 63 },
          { mean: 2, rain: 55 }, { mean: 4, rain: 62 }, { mean: 7, rain: 66 },
          { mean: 10, rain: 79 }, { mean: 12, rain: 76 }, { mean: 14, rain: 77 },
        ],
      },
    ],
  },

  events: [
    { name: "Summer & great-walk season", when: "December – March", months: [12, 1, 2, 3], kind: "go", description: "Warmest, driest weather, long daylight, and the peak window for the Great Walks and alpine tramping. Also the busiest and priciest — book huts and campervans well ahead." },
    { name: "Waitangi Day", when: "6 February", months: [2], kind: "note", description: "The national day marking the 1840 treaty, commemorated with events at the Waitangi Treaty Grounds in the Bay of Islands — a good moment to engage with the country's founding story." },
    { name: "Autumn colour & quiet shoulders", when: "March – April", months: [3, 4], kind: "go", description: "Central Otago (Arrowtown, Wānaka) turns gold, crowds thin, and prices ease — arguably the loveliest and best-value time to tour the South Island." },
    { name: "Winter & ski season", when: "June – August", months: [6, 7, 8], kind: "note", description: "Snow on the Southern Alps and skiing around Queenstown/Wānaka; some high passes and Great Walks close, and days are short — great for the mountains, quieter elsewhere." },
  ],

  places: [
    {
      name: "Fiordland: Milford & Doubtful Sound", category: "nature", coords: [-44.6710, 167.9256], region: "Fiordland, South Island",
      description: "Sheer glacier-carved fiords, plunging waterfalls and rainforest — the country's wildest, wettest grandeur.",
      wiki: "Milford Sound",
      long:
        "In the remote southwest of the South Island, Fiordland National Park is a vast World Heritage wilderness of glacier-carved fiords, where dark cliffs rise more than a kilometre straight out of the sea, threaded by countless waterfalls and cloaked in dripping temperate rainforest. Milford Sound (Piopiotahi) is the famous one — Mitre Peak reflected in black water, cruised by boat or paddled by kayak, best of all when rain sends a thousand cascades down the walls.\n\nThe drive in from Te Anau along the Milford Road is a highlight in itself, past mirror lakes and alpine valleys. For deeper solitude, the larger, less-visited Doubtful Sound is reached only by boat and bus across a lake and pass. Fiordland is also the home of the great multi-day tramps — the Milford, Kepler and Routeburn tracks — and of the rare, flightless takahē and kākāpō. Bring wet-weather gear: this is one of the rainiest places on earth, and it's all the more magnificent for it.",
      practical: [
        { label: "Getting there", value: "Base in Te Anau; Milford Sound is ~2 hrs' spectacular drive (or a coach) up the Milford Road. Doubtful Sound is a full-day boat-and-bus trip from Manapouri." },
        { label: "Cruises & kayaking", value: "Nature cruises and sea-kayak trips run on both sounds; overnight cruises let you wake in the fiord. Book ahead in summer." },
        { label: "Tramping", value: "The Milford, Kepler and Routeburn are booked Great Walks (huts fill months ahead for summer); the Milford Road also has superb short walks and the Chasm." },
        { label: "When", value: "Stunning in any weather — rain means more waterfalls. Sandflies are fierce, so bring strong repellent." },
      ],
      stay:
        "Base in the lakeside town of Te Anau, the gateway to Fiordland, for accommodation, supplies and trip departures. For something special, take an overnight cruise on Milford or Doubtful Sound and sleep out in the fiord, or stay in a backcountry hut on one of the Great Walks.",
      tips: [
        "Go on a rainy day for the full waterfall spectacle — Milford is at its most dramatic in the wet.",
        "Bring serious sandfly repellent; the biting flies are legendary along the fiords.",
      ],
    },
    {
      name: "Aoraki / Mount Cook & the Southern Alps", category: "nature", coords: [-43.7340, 170.0960], region: "Canterbury, South Island",
      description: "New Zealand's highest peak above a glacial valley of turquoise lakes and star-filled night skies.",
      wiki: "Aoraki / Mount Cook",
      long:
        "Aoraki / Mount Cook, at 3,724 metres the highest mountain in New Zealand, presides over a national park of glaciers, moraine and alpine tarns at the head of the turquoise Lake Pukaki. The valley floor gives easy access to genuinely alpine scenery: the Hooker Valley Track, one of the country's finest short walks, leads on swing bridges up to a glacial lake dotted with icebergs directly beneath the peak.\n\nThis is climbing country — Sir Edmund Hillary trained here before Everest — but most visitors come to walk, to fly over the glaciers, and to look up: the surrounding Mackenzie Basin is an International Dark Sky Reserve, among the best stargazing on earth, with the little church at Lake Tekapo a favourite foreground for the Milky Way. Big, clean, high country of milky-blue lakes and golden tussock, it's the heart of the Southern Alps.",
      practical: [
        { label: "Getting there", value: "~3 hrs' drive from Queenstown or Christchurch to Aoraki/Mount Cook Village, along the shore of turquoise Lake Pukaki." },
        { label: "Walks", value: "The Hooker Valley Track (~3 hrs return, mostly flat) is the must-do; the Tasman Glacier viewpoint and Sealy Tarns ('the stairway to heaven') are others." },
        { label: "Stargazing", value: "The Mackenzie is a Dark Sky Reserve — join a night tour at Tekapo or simply look up; the Church of the Good Shepherd is the classic spot." },
        { label: "When", value: "Clear summer and autumn days for walking and views; winter brings snow and cold. Weather changes fast — carry layers." },
      ],
      stay:
        "Stay in Aoraki/Mount Cook Village at the foot of the peak (limited beds — book ahead), or on the shores of Lake Tekapo or Lake Pukaki for turquoise-water views and dark-sky nights. The village puts the Hooker Valley walk on your doorstep for a dawn or dusk start.",
      tips: [
        "Walk the Hooker Valley early or late for soft light on the peak and fewer people.",
        "Pack for real cold at night even in summer, and check the alpine forecast before any longer walk.",
      ],
    },
    {
      name: "Rotorua & Māori culture", category: "history", coords: [-38.1368, 176.2497], region: "Bay of Plenty, North Island",
      description: "Bubbling geothermal wonders and the living heart of Māori culture — hāngī, haka and marae.",
      wiki: "Rotorua",
      long:
        "Set on a lake in the volcanic heart of the North Island, Rotorua is where the earth breathes — geysers erupting, mud pools plopping, silica terraces steaming, and the tang of sulphur in the air. Geothermal parks like Wai-O-Tapu (with its vivid Champagne Pool) and Te Puia (home of the Pōhutu geyser) put the raw power of the land on display, and you can soak in natural hot springs almost everywhere.\n\nRotorua is equally the centre of living Māori culture. The Te Arawa people have welcomed visitors here for over a century, and a marae or cultural evening — with a pōwhiri welcome, kapa haka performance, and a hāngī feast steamed in the earth — is one of the most meaningful experiences in the country. Visit the historic village of Ōhinemutu on the lakeshore, where a Māori church and meeting house sit among the steam. It's the best place to engage, respectfully, with te ao Māori — the Māori world.",
      practical: [
        { label: "Getting there", value: "~3 hrs' drive from Auckland, or a short flight. An easy, central North Island base." },
        { label: "Geothermal", value: "Wai-O-Tapu (Champagne Pool, Lady Knox geyser), Te Puia (Pōhutu geyser + Māori arts), and Waimangu or Waikite for quieter, natural settings. Entry fees vary." },
        { label: "Māori culture", value: "Choose a reputable cultural evening or day experience (Te Puia, Tamaki, Whakarewarewa living village) for pōwhiri, kapa haka and a hāngī. Ōhinemutu village is free to walk (respectfully)." },
        { label: "Nearby", value: "The Redwoods forest walks and Whakarewarewa mountain-bike trails, and the blue-and-green Tarawera lakes." },
      ],
      stay:
        "Stay by the lake in Rotorua town, many places with their own geothermal hot pools to soak in. For something special, an overnight marae stay or a Māori-hosted experience goes far deeper than a show — you share food, protocol and stories.",
      tips: [
        "Book a Māori cultural experience with a hāngī — it's the most rewarding thing you'll do here.",
        "Several free or cheap spots (hot pools, Kuirau Park, Ōhinemutu) let you feel the geothermal without a big ticket.",
      ],
    },
    {
      name: "Tongariro Alpine Crossing", category: "nature", coords: [-39.1333, 175.6500], region: "Central Plateau, North Island",
      description: "A one-day trek across a live volcanic landscape of craters, lava and emerald lakes — the country's finest day walk.",
      wiki: "Tongariro Alpine Crossing",
      long:
        "Often rated the best one-day walk in New Zealand, the Tongariro Alpine Crossing traverses a stark, otherworldly volcanic landscape in the dual World Heritage Tongariro National Park — a place sacred to the local Māori and gifted to the nation by them. Over roughly 19 kilometres you climb past old lava flows and steaming vents, up to the rim of the Red Crater, then down past the vividly coloured Emerald Lakes, with the perfect cone of Mount Ngāuruhoe (Mordor's 'Mount Doom' on film) looming alongside.\n\nIt's a demanding full-day tramp — steep climbs, exposed alpine terrain, and weather that can turn from sun to snow in an hour — but non-technical and unforgettable in good conditions. The park's peaks are active volcanoes, and the whole crossing feels like walking across the raw, smoking bones of the earth. Book transport, start early, and check the forecast: this is a walk that demands respect.",
      practical: [
        { label: "Getting there", value: "Base in National Park village, Whakapapa or Tūrangi/Taupō; a shuttle drops you at the Mangatepopo start and collects you at Ketetahi (it's a one-way, point-to-point walk)." },
        { label: "The walk", value: "~19–20 km, 6–8 hrs, with a big climb to the Red Crater (~1,886 m). Non-technical but strenuous and fully exposed — proper boots, layers, water and food essential." },
        { label: "Weather & safety", value: "Alpine and volatile; check the DOC/MetService forecast and don't start in high wind, storm or on a bad-visibility day. Book the shuttle in advance in summer." },
        { label: "When", value: "Best Nov–Apr; in winter it becomes a mountaineering route needing ice axe, crampons and a guide." },
      ],
      stay:
        "Base in National Park village or Whakapapa for the earliest shuttle start, or in Tūrangi/Taupō on the lake. Nights before and after in a simple lodge or holiday park let you start fresh at dawn and beat both the crowds and the afternoon weather.",
      tips: [
        "Start early to finish before the afternoon wind and cloud build, and to have the Emerald Lakes to yourself.",
        "Carry full alpine layers even on a sunny morning — the weather up top changes fast and can be dangerous.",
      ],
    },
    {
      name: "Abel Tasman & the Marlborough Sounds", category: "nature", coords: [-40.9970, 173.0000], region: "Top of the South Island",
      description: "Golden beaches, clear water and forested coastal trails — the sunniest, gentlest corner of the country.",
      wiki: "Abel Tasman National Park",
      long:
        "At the sun-drenched top of the South Island, Abel Tasman National Park offers a softer, warmer face of New Zealand: golden-sand coves lapped by clear turquoise water, backed by forested granite headlands. The Abel Tasman Coast Track — one of the Great Walks, and unusually easy and mild — links a string of beautiful beaches, and you can walk part of it, kayak between the bays, or use water taxis to hop from cove to cove, camping or lodging along the way.\n\nJust east lie the labyrinthine Marlborough Sounds, a maze of drowned river valleys and forested inlets rich with birdlife and the setting for the Queen Charlotte Track, and the vineyards of Marlborough — home of the world-famous sauvignon blanc. This whole northern tip, around the arty town of Nelson, is the country's sunniest region and its most relaxed: a place for beach walks, sea-kayaking, seafood and wine.",
      practical: [
        { label: "Getting there", value: "Base in Nelson or Motueka for Abel Tasman; Picton (the ferry port from Wellington) for the Marlborough Sounds and Queen Charlotte Track." },
        { label: "Abel Tasman", value: "Walk day sections of the Coast Track with water-taxi drop-offs, or kayak the coves; the full Great Walk (3–5 days) has huts/campsites — book ahead in summer." },
        { label: "Beyond", value: "The Queen Charlotte Track in the Sounds (walk or bike, with boat support), Marlborough wineries around Blenheim, and seal/dolphin trips." },
        { label: "When", value: "Warm, sunny and busy in summer (Dec–Feb); lovely and quieter in the shoulder months. This is NZ's sunniest region." },
      ],
      stay:
        "Base in Nelson (arty, sunny, good food) or Motueka for Abel Tasman, or beachside at Kaiteriteri/Mārahau at the park gateway. Within the parks, sleep in a Great Walk hut, a campsite or a beach lodge reached by water taxi — waking to an empty golden cove is the whole idea.",
      tips: [
        "Combine a water taxi with a one-way walk or kayak so you cover the best coast without carrying gear the whole way.",
        "Book Marlborough winery lunches and the ferry crossing ahead in summer.",
      ],
    },
    {
      name: "Queenstown, Glenorchy & Central Otago", category: "nature", coords: [-45.0312, 168.6626], region: "Otago, South Island",
      description: "Adventure hub on a lake ringed by jagged peaks — with gold-rush villages and pinot country close by.",
      wiki: "Queenstown, New Zealand",
      long:
        "Cradled on the shore of Lake Wakatipu beneath the aptly named Remarkables range, Queenstown is New Zealand's adventure capital — the birthplace of the bungy jump, and a hub for jet-boating, skiing, paragliding, mountain-biking and every adrenaline pursuit going. But you don't have to leap off anything: the setting alone, of deep blue lake and serrated peaks, is spectacular, and the town is a lively, scenic base for the whole southern lakes.\n\nThe real rewards lie just beyond the buzz. Drive the stunning road to little Glenorchy at the head of the lake, gateway to the Routeburn Track and the valleys used as Middle-earth in the films. Visit the beautifully preserved gold-rush village of Arrowtown, golden with autumn colour. Sip world-class pinot noir in the Gibbston valley, and detour to serene Lake Wānaka over the alpine Crown Range. It's the concentrated highlight reel of the South Island.",
      practical: [
        { label: "Getting there", value: "Queenstown has its own airport with direct flights; it's a scenic ~3–4 hr drive from Milford, Mount Cook or Wānaka." },
        { label: "Do", value: "Bungy and jet-boat if you dare; otherwise the Glenorchy road, the Ben Lomond or Queenstown Hill walks, and the gondola/luge for the lake view." },
        { label: "Nearby", value: "Historic Arrowtown (best in autumn), Gibbston valley wineries, and Wānaka over the Crown Range — quieter and just as beautiful." },
        { label: "When", value: "Summer for tramping and lake days, autumn for golden colour and value, winter for skiing (Coronet Peak, The Remarkables)." },
      ],
      stay:
        "Queenstown itself is central but busy and pricey; for a calmer base consider laid-back Wānaka, tiny Glenorchy at the lake head, or historic Arrowtown. Lakeside rooms with a mountain view are worth it here — but the quieter towns give you the same scenery without the crowds.",
      tips: [
        "Drive the Glenorchy road even if you do nothing else — it's one of the country's most beautiful.",
        "Base in Wānaka or Arrowtown to enjoy the region without Queenstown's prices and bustle.",
      ],
    },
    {
      name: "Wellington", category: "architecture", coords: [-41.2865, 174.7762], region: "Lower North Island",
      description: "The compact, creative capital — a superb national museum, café culture, and a windswept harbour setting.",
      wiki: "Wellington",
      long:
        "New Zealand's capital is a small city with an outsized personality: wrapped around a dramatic harbour and climbing into steep, house-clad hills, 'Windy Welly' packs in more cafés, bars, bookshops and galleries per head than anywhere else in the country, plus a thriving film and craft-beer scene. Its walkable centre, waterfront promenade, and the historic cable car up to the Botanic Garden make it a genuinely lovely city to potter around for a day or two.\n\nThe unmissable draw is Te Papa Tongarewa, the national museum — free, brilliant and imaginative, telling the story of the land, the Treaty and Māori and Pākehā New Zealand, with a famous colossal squid and a hands-on earthquake house. Add the writers' and film heritage (Weta Workshop is nearby), the seal-dotted south coast, and the ferry across Cook Strait to the South Island, and Wellington is the cultural hinge of the country — best enjoyed on a rare still, sunny day.",
      practical: [
        { label: "Getting there", value: "Wellington airport, or the scenic Interislander/Bluebridge ferry across Cook Strait from Picton (a highlight in itself)." },
        { label: "Te Papa", value: "The national museum on the waterfront — free entry (some special exhibits charged); allow half a day. One of the best museums in the southern hemisphere." },
        { label: "Do", value: "Ride the cable car to the Botanic Garden and walk down, wander Cuba Street's cafés and bars, and take the harbour and south-coast drive to Red Rocks and the seals." },
        { label: "When", value: "Any time, but it can be genuinely windy — pack a layer. Summer and early autumn give the calmest, sunniest days." },
      ],
      stay:
        "Stay central near the waterfront and Cuba Street so you can walk to Te Papa, the cafés and the cable car. Hillside guesthouses give harbour views and a feel for the city's steep, characterful neighbourhoods.",
      tips: [
        "Give Te Papa a proper half-day — it's the best single introduction to the country's story.",
        "Time the Cook Strait ferry for daylight; the run through the Marlborough Sounds is spectacular.",
      ],
    },
    {
      name: "Franz Josef, Fox & the West Coast", category: "nature", coords: [-43.4667, 170.1833], region: "West Coast, South Island",
      description: "Glaciers spilling into rainforest, wild surf beaches and gold-rush history on the rugged wild coast.",
      wiki: "West Coast, New Zealand",
      long:
        "The West Coast of the South Island — 'the Coast' — is New Zealand at its wildest and most weather-beaten: a long, thinly peopled strip pinned between the Southern Alps and the Tasman Sea, drenched by rain that feeds dense temperate rainforest, thundering rivers and, remarkably, glaciers that flow almost to sea level through the forest. The Franz Josef and Fox glaciers are among the most accessible in the world; you can walk to their terminal viewpoints or take a helicopter up onto the ice.\n\nBeyond the glaciers, the Coast rewards slow exploration: the reflective Lake Matheson mirroring Aoraki, the layered 'pancake rocks' and blowholes at Punakaiki, the gold-and-greenstone heritage of Hokitika, and long, driftwood-strewn surf beaches where the sun sets into the Tasman. Moody, rain-forested and gloriously uncrowded, it's the coast for travellers who like their scenery raw and their roads empty.",
      practical: [
        { label: "Getting there", value: "The Coast is a driving route: from Wānaka over the Haast Pass, or from Christchurch via Arthur's Pass (or the scenic TranzAlpine train to Greymouth)." },
        { label: "Glaciers", value: "Walk to the Franz Josef and Fox glacier viewpoints (free, weather-dependent), or take a heli-hike onto the ice (guided, weather-permitting)." },
        { label: "Don't miss", value: "Lake Matheson's mirror reflections at dawn, the Punakaiki Pancake Rocks and blowholes at high tide, and Hokitika's greenstone (pounamu) workshops and gorge." },
        { label: "When", value: "It rains a lot here year-round — build in flexibility. Clear spells reward with the finest reflections and glacier views." },
      ],
      stay:
        "Base a night or two in the glacier towns of Franz Josef or Fox, and another near Hokitika or Punakaiki to break the long coast. Rainforest and beachside lodges let you catch Lake Matheson at dawn or a Tasman sunset when the weather clears.",
      tips: [
        "Do Lake Matheson at first light on a still morning for the mirror reflection of the peaks.",
        "Keep your itinerary flexible for weather — glacier flights and views depend entirely on it.",
      ],
    },
  ],
};
