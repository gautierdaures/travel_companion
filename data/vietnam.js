// Country ID card — schema reference lives in data/index.js
export default {
  code: "vn",
  name: "Vietnam",
  flag: "🇻🇳",
  region: "Southeast Asia",
  tagline: "Limestone bays, terraced rice, and the best street food on earth.",
  tags: ["nature", "food", "history", "trek", "beach", "motorbiking"],

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
      { mean: 16, rain: 41 }, { mean: 18, rain: 28 }, { mean: 21, rain: 58 },
      { mean: 25, rain: 102 }, { mean: 27, rain: 230 }, { mean: 29, rain: 228 },
      { mean: 29, rain: 267 }, { mean: 28, rain: 320 }, { mean: 27, rain: 242 },
      { mean: 24, rain: 121 }, { mean: 21, rain: 57 }, { mean: 17, rain: 35 },
    ],
  },

  events: [
    { name: "Tết (Lunar New Year)", when: "Late Jan – mid Feb", months: [1, 2], kind: "avoid", description: "The most important holiday of the year — the whole country travels home and effectively shuts for a week: transport is jammed and many restaurants, shops, and sights close." },
    { name: "Hội An Lantern Festival", when: "Every full moon", months: [], kind: "go", description: "On the 14th night of each lunar month the old town cuts its electric lights and floats candlelit lanterns down the river — the loveliest evening in Vietnam." },
    { name: "Mid-Autumn Festival", when: "September", months: [9], kind: "go", description: "Lion dances, mooncakes, and children's lantern parades fill the streets after dark — especially charming in Hội An and Hanoi's Old Quarter." },
    { name: "Reunification Day & Labour Day", when: "Apr 30 – May 1", months: [4, 5], kind: "note", description: "Back-to-back public holidays send locals to the coast; beach towns and flights fill up and prices climb — book ahead or steer clear." },
  ],

  places: [
    {
      name: "Hạ Long Bay", category: "nature", coords: [20.9101, 107.1839], region: "Quảng Ninh (north)",
      description: "Thousands of limestone islands rising from emerald water; sleep aboard a junk and slip into quieter Bái Tử Long to dodge crowds.",
      wiki: "Hạ Long Bay",
      long:
        "Nearly 2,000 limestone karsts and islets rise sheer from the jade-green Gulf of Tonkin, a drowned landscape of towers, arches, and hidden lagoons that has been carved by the sea for millions of years. It is Vietnam's signature view and a UNESCO World Heritage Site — and, inevitably, its most visited, so where and how you go matters more than whether you go.\n\nThe rewarding move is an overnight cruise on a wooden junk, waking to mist between the peaks before the day boats arrive, and choosing an operator that pushes into neighbouring Bái Tử Long or Lan Hạ Bay, where the same scenery comes without the flotilla. Kayak into sea caves, swim off the boat, and visit a floating fishing village to see how people still live on this water.",
      practical: [
        { label: "Getting there", value: "~2.5 hrs from Hanoi by expressway to the cruise ports; most cruises include the transfer." },
        { label: "Cost", value: "Overnight junk cruises run ~$120–300+/person, with bay permits and meals bundled in." },
        { label: "Time to allow", value: "2 days / 1 night minimum — to reach the quieter water and wake to the mist." },
        { label: "Where to sail", value: "Pick an operator that cruises Bái Tử Long or Lan Hạ Bay, not the crowded central route." },
      ],
      stay:
        "Here the stay is the boat — sleep aboard a wooden junk to have the karsts to yourself at dawn and dusk. For a land base with the same scenery and a fraction of the boats, Cát Bà Island and Lan Hạ Bay (see that entry) let you go slower and more independently.",
      tips: [
        "An overnight cruise beats a day trip: the day boats all clear out by late afternoon.",
        "Choose a smaller boat and a Lan Hạ / Bái Tử Long route to escape the flotilla.",
      ],
    },
    {
      name: "Hội An Old Town", category: "history", coords: [15.8801, 108.338], region: "central coast",
      description: "A lantern-lit former trading port of tailor shops and yellow merchant houses, car-free and glowing after dark.",
      wiki: "Hội An Ancient Town",
      long:
        "For three centuries Hội An was one of Southeast Asia's great trading ports, where Japanese, Chinese, Dutch and Portuguese merchants met and left their mark. The town silted up and the trade moved on — which is exactly why it survives, a remarkably complete old quarter of tube houses, assembly halls, and the little wooden Japanese Covered Bridge, all washed in fading ochre and closed to cars.\n\nCome at dusk, when the electric signs give way to thousands of silk lanterns and the riverfront fills with the glow of paper lights set adrift on the water. Between the sightseeing, this is a town for tailors (a suit run up overnight), for cао lầu noodles found nowhere else, and for cycling out through rice paddies to the beach.",
      practical: [
        { label: "Getting there", value: "~45 min from Đà Nẵng airport/station by taxi or Grab; walkable and cycle-friendly once there." },
        { label: "Old Town ticket", value: "~120,000 VND (~$5) — covers entry to five heritage houses and halls, and funds conservation." },
        { label: "Time to allow", value: "2–3 nights, to catch both the daytime tailors and the lantern-lit evenings." },
        { label: "When", value: "Lanterns are lit nightly; the full-moon Lantern Festival cuts the electric lights entirely." },
      ],
      stay:
        "Sleep in a restored merchant house in the old town or a garden homestay just outside it, where family hosts lend bicycles for the ride through the rice paddies to An Bàng beach. Staying overnight means you're there for the magic hour once the day-trippers have gone.",
      tips: [
        "Order a tailored suit or dress on arrival so it's ready before you leave.",
        "Cycle to An Bàng beach or the Trà Quế herb village for a slower half-day.",
      ],
    },
    {
      name: "Hà Giang Loop", category: "offbeat", coords: [22.8268, 104.9784], region: "far north",
      description: "A three-day motorbike ride through the country's most dramatic mountains, terraced valleys, and ethnic-minority markets.",
      wiki: "Hà Giang province",
      long:
        "Vietnam's far northern frontier with China is its wildest and most beautiful corner: a karst plateau of limestone spires, hairpin passes, and terraced valleys where Hmong, Dao, Tày and Lô Lô communities keep their own dress, markets, and languages. The classic way to see it is a three-to-four-day loop by motorbike from Hà Giang town — self-ridden if you're confident, or on the back of an 'easy rider' guide's bike if you're not.\n\nThe road climbs to the Mã Pì Lèng Pass, arguably the country's greatest viewpoint, where the emerald Nho Quế river threads a canyon far below. Nights are spent in village homestays over rice wine and shared meals. Go for the scenery and the encounters; this is about as far from a package tour as Vietnam gets.",
      practical: [
        { label: "Getting there", value: "Overnight sleeper bus or limousine from Hanoi to Hà Giang town (~6–7 hrs), where the loop begins." },
        { label: "The ride", value: "3–4 days, ~350 km. Self-ride only if experienced; otherwise ride pillion with an 'easy rider' guide." },
        { label: "Permit", value: "A cheap border-area permit is required — usually arranged by your guesthouse or tour (~€10)." },
        { label: "Highlight", value: "The Mã Pì Lèng Pass above the emerald Nho Quế river canyon — arguably the country's greatest viewpoint." },
      ],
      stay:
        "This is homestay country: nights are spent in stilt-house homestays in Hmong, Dao and Tày villages, over communal meals and rice wine. If you're not a genuinely confident rider, book an 'easy rider' or small-group tour — it's far safer on the passes, and the money reaches the villages you sleep in.",
      tips: [
        "Don't ride yourself unless you truly know how — the passes are unforgiving; pillion with a guide is popular for good reason.",
        "Go for the encounters and scenery, not to rush: three nights beats two.",
      ],
    },
    {
      name: "Imperial Citadel of Huế", category: "history", coords: [16.4698, 107.5796], region: "central Vietnam",
      description: "The moated palace complex of the Nguyễn emperors on the Perfume River — partly ruined, deeply atmospheric.",
      wiki: "Imperial City, Huế",
      long:
        "Huế was the seat of the Nguyễn dynasty, Vietnam's last emperors, from 1802 to 1945, and its walled Imperial City is a scaled reflection of Beijing's Forbidden City set on the Perfume River. Behind a wide moat and monumental gates lie throne halls, temples, and courtyards — many battered by the wars of the 20th century, which lends the whole place a melancholy, half-ruined grandeur that ongoing restoration hasn't erased.\n\nGive it half a day inside the walls, then take a boat or bicycle out to the royal tombs scattered in the pine-clad hills, each an emperor's private landscaped retreat. Huế is also a distinct food city — the fiery bún bò Huế and a tradition of delicate 'imperial' dishes reward lingering.",
      practical: [
        { label: "Getting there", value: "Huế sits on the main north–south railway; the citadel is a short walk or cyclo across the Perfume River." },
        { label: "Entrance", value: "Imperial City ~200,000 VND (~$8); combined tickets add the royal tombs." },
        { label: "Time to allow", value: "Half a day inside the walls; a full day with a boat or bike out to the tombs." },
        { label: "Also", value: "A dragon-boat trip on the Perfume River links Thien Mu Pagoda and the emperors' hillside tombs." },
      ],
      stay:
        "Base near the river or in the leafy An Cựu lanes and give Huế more than a night — it's a quietly elegant food city in its own right. Rent a bicycle to reach the melancholy royal tombs scattered through the pine hills at your own unhurried pace.",
      tips: [
        "Pair the citadel with a lazy boat trip taking in two or three royal tombs.",
        "Come hungry: Huế's imperial and street food is a reason to linger by itself.",
      ],
    },
    {
      name: "Phong Nha caves", category: "nature", coords: [17.59, 106.283], region: "Quảng Bình",
      description: "Home to Sơn Đoòng, the world's largest cave; even the accessible caverns here are cathedral-scaled.",
      wiki: "Phong Nha-Kẻ Bàng National Park",
      long:
        "The Phong Nha-Kẻ Bàng National Park hides one of the planet's great concentrations of caves, dissolved out of an ancient limestone massif near the Laos border. It is famous as the home of Sơn Đoòng, the largest cave passage on Earth — big enough to hold a city block and its own jungle and clouds — reachable only on a costly, permit-limited expedition.\n\nHappily, you don't need Sơn Đoòng to be awed. Paradise Cave is a cathedral of stalactites you walk deep into on a boardwalk; the original Phong Nha Cave is entered by boat along an underground river; and Dark Cave adds a zip-line, a mud bath, and a swim. The surrounding countryside of karst, rivers and quiet villages has become a laid-back base in its own right.",
      practical: [
        { label: "Getting there", value: "Train or bus to Đồng Hới, then ~45 min to Phong Nha village; direct buses run from Huế and Hanoi." },
        { label: "Cave entry", value: "Paradise Cave ~270,000 VND; Phong Nha Cave ~150,000 VND + boat (~550,000/boat). Sơn Đoòng is a costly, permit-limited multi-day expedition." },
        { label: "Time to allow", value: "2–3 nights to combine the caves with the countryside." },
        { label: "Trek option", value: "Guided cave-and-jungle treks (Tú Làn, Hang Én) range from a day to several days." },
      ],
      stay:
        "Phong Nha has grown into one of central Vietnam's most relaxing overnights — family farmstays and riverside guesthouses scattered among the karst and rice fields. Rent a bicycle or scooter for the Bong Lai valley loop of farm bars and swimming holes between the big caves.",
      tips: [
        "You don't need Sơn Đoòng — Paradise and Phong Nha caves are astonishing and affordable.",
        "Cycle the quiet Bong Lai valley for the slow, rural side of Phong Nha.",
      ],
    },
    {
      name: "Mekong Delta", category: "nature", coords: [10.0452, 105.7469], region: "the south",
      description: "A watery maze of floating markets, fruit orchards, and stilt houses — explore by boat from Cần Thơ at dawn.",
      wiki: "Mekong Delta",
      long:
        "Where the Mekong finally reaches the sea it splinters into a vast, fertile lattice of channels, rice paddies, orchards and mangrove — the rice bowl and fruit basket of Vietnam, and a whole way of life lived on and beside the water. Days here run to the river's rhythm: sampans slipping down coconut-lined canals, workshops turning out rice paper and coconut candy, and homes on stilts at the water's edge.\n\nThe classic experience is a dawn visit to a floating market such as Cái Răng near Cần Thơ, where wholesalers hawk produce boat-to-boat with samples hoisted on a pole. Skip a rushed day trip from Saigon in favour of a night or two out here, ideally in a homestay, to feel the delta's unhurried pace.",
      practical: [
        { label: "Getting there", value: "Cần Thơ is ~3.5 hrs from Saigon by bus; stay a night or two rather than taking a rushed day tour." },
        { label: "Floating market", value: "Cái Răng near Cần Thơ is busiest at dawn (~5:30–7am); hire a small boat (~$15–25)." },
        { label: "Time to allow", value: "2 days / 1 night minimum, in a homestay by the water." },
        { label: "Getting around", value: "Small sampans down the narrow canals reveal far more than the big tour boats." },
      ],
      stay:
        "The delta rewards slowing down: a family homestay on stilts beside a canal — where you help cook, cycle the orchard lanes, and wake early for the floating market — beats any day trip from Saigon. Bến Tre and the lanes around Cần Thơ and Vĩnh Long are full of them.",
      tips: [
        "Reach the floating market at dawn — by mid-morning it has largely wound down.",
        "Choose a homestay over a hotel; the delta is about river life, not sights.",
      ],
    },
    {
      name: "Sa Pa rice terraces", category: "nature", coords: [22.3364, 103.8438], region: "Lào Cai",
      description: "Staircase valleys of green-and-gold paddies farmed by Hmong and Dao communities; trek village-to-village.",
      wiki: "Sa Pa",
      long:
        "In the mountains near the Chinese border, the Muong Hoa valley falls away in immense staircases of rice terrace, sculpted over generations and farmed by Black Hmong, Red Dao and other communities who still wear their distinctive indigo and embroidery. The town of Sa Pa itself has grown brash and over-built, so the point is to walk out of it, descending on foot between villages through the paddies.\n\nThe terraces are at their most photogenic when flooded and mirror-bright around May–June, or heavy and gold just before the autumn harvest. A guided trek with a local woman, staying overnight in a village homestay, is both the most rewarding way to see the valley and the way the money reaches the people who farm it.",
      practical: [
        { label: "Getting there", value: "Overnight train or sleeper bus from Hanoi to Lào Cai, then up to Sa Pa (~5–6 hrs total)." },
        { label: "Trek", value: "Half- or multi-day guided walks descend village-to-village through the Muong Hoa valley." },
        { label: "Guides", value: "Hire a local Hmong or Dao guide directly — the surest way the money reaches the community." },
        { label: "When", value: "Terraces are mirror-bright and flooded around May–June; heavy and gold just before the September harvest." },
      ],
      stay:
        "Skip the over-built town and stay in a valley village homestay — Ta Van, Ta Phin or Lao Chải, reached on foot — with indigo textiles, a shared dinner, and the terraces outside the door. Walking in with a local woman guide and sleeping in her village is both the best of Sa Pa and the fairest way to see it.",
      tips: [
        "Base in a village, not Sa Pa town, for the real valley and the real quiet.",
        "Engage a local ethnic-minority guide directly rather than through a big agency.",
      ],
    },
    {
      name: "Hanoi Old Quarter", category: "food", coords: [21.0333, 105.8500], region: "Hanoi",
      description: "A thousand-year tangle of guild streets and street-food stalls — the beating, scooter-swarmed heart of the capital.",
      wiki: "Old Quarter, Hanoi",
      long:
        "Hanoi's Old Quarter has been a dense commercial warren for a thousand years, its lanes still named for the guilds that once filled them — Hàng Bạc (silver), Hàng Gai (silk), Hàng Thiếc (tin). Today it's a glorious sensory overload: narrow 'tube houses', crumbling colonial shutters, tangles of overhead wire, and a ceaseless river of motorbikes you learn to cross by walking slowly and steadily into it.\n\nAbove all it is one of the world's great street-food cities. This is the home of phở and of bún chả — grilled pork and noodles that Obama and Anthony Bourdain famously shared nearby — plus egg coffee, bia hơi (fresh draught beer) on plastic stools, and a hundred one-dish specialists. Come hungry, eat where the crowds are, and let yourself get lost.",
      practical: [
        { label: "Getting there", value: "Central Hanoi; walkable, though crossing the scooter tide is an art — walk slowly and steadily." },
        { label: "What to eat", value: "Phở, bún chả, bánh cuốn, egg coffee, and bia hơi on plastic stools — go where the locals queue." },
        { label: "Time to allow", value: "2–3 nights, ideally with a morning street-food walk." },
        { label: "Nearby", value: "Hoàn Kiếm Lake, the weekend night market, and the water-puppet theatre are all a short stroll." },
      ],
      stay:
        "Stay in or beside the Old Quarter so you can wander out for phở at dawn and bia hơi at dusk. It's noisy and chaotic — that's the point — so pick a room off the main lanes for quiet, and use the walkable centre as a slow base between longer journeys.",
      tips: [
        "Eat breakfast phở at a busy stall early, before the broth has been sitting.",
        "Cross the road at a slow, steady pace and let the scooters flow around you — never stop suddenly.",
      ],
    },
    {
      name: "Temple of Literature", category: "architecture", coords: [21.0293, 105.8355], region: "Hanoi",
      description: "Vietnam's first university, a serene Confucian temple of walled courtyards and stelae on stone tortoises.",
      wiki: "Temple of Literature, Hanoi",
      long:
        "Founded in 1070 and home to Vietnam's first national university, the Temple of Literature is a rare survival of classical Confucian architecture and the calmest spot in central Hanoi. You pass through a sequence of five walled courtyards and ornamental gates, each more contemplative than the last, around lotus ponds and pavilions.\n\nIts treasures are 82 stone stelae, mounted on the backs of stone tortoises, engraved with the names of doctoral graduates going back to the 15th century — students still come to touch them for luck before exams. It's a short, rewarding visit that puts the country's deep reverence for scholarship in front of you, and a graceful contrast to the chaos of the Old Quarter nearby.",
      practical: [
        { label: "Getting there", value: "Central Hanoi, ~2 km west of Hoàn Kiếm Lake; walk, cyclo, or Grab." },
        { label: "Entrance", value: "~70,000 VND (~$2.80)." },
        { label: "Time to allow", value: "About an hour through the five walled courtyards." },
        { label: "Dress", value: "Modest dress is appreciated at this Confucian temple." },
      ],
      stay:
        "A short visit in central Hanoi — stay in the Old Quarter (see that guide). Fold it into a slow morning: the courtyards are calmest early, a graceful antidote to the city's noise before you dive back in for lunch.",
      tips: [
        "Come early to have the contemplative courtyards to yourself.",
        "The stelae on stone tortoises record 15th-century graduates — students still touch them for luck.",
      ],
    },
    {
      name: "Tràng An & Ninh Bình", category: "nature", coords: [20.2506, 105.8990], region: "Ninh Bình",
      description: "Karst towers over flooded rice fields — the 'Hạ Long Bay on land', best seen from a rowed sampan.",
      wiki: "Tràng An",
      long:
        "A two-hour hop south of Hanoi, the province of Ninh Bình offers the drama of Hạ Long Bay without the sea: the same limestone towers, here rising straight out of flooded rice paddies and slow green rivers. In the Tràng An landscape complex, a UNESCO site, local women row you in flat sampans through a chain of water-filled caves and past hidden temples, often propelling the oars with their feet.\n\nNearby Tam Cốc offers a similar river trip through 'three caves', best when the paddies turn gold in late spring; Hoa Lư preserves the temples of Vietnam's 10th-century first capital; and a hard climb up the steps of Múa Cave delivers the classic panorama over the whole valley. It's an easy, richly rewarding escape from the capital.",
      practical: [
        { label: "Getting there", value: "~2 hrs south of Hanoi by train or bus to Ninh Bình, then bicycle or Grab to the boat piers." },
        { label: "Boat trip", value: "Tràng An sampan tour ~250,000 VND (~$10) for a ~3 hr route through the water caves; Tam Cốc is similar." },
        { label: "Time to allow", value: "1–2 nights to combine the boat trip, the Múa Cave viewpoint, and the Hoa Lư temples." },
        { label: "Múa Cave", value: "~100,000 VND; ~500 steps up to the classic panorama over the valley." },
      ],
      stay:
        "Stay a night among the karst at a Tam Cốc or Ninh Bình homestay with paddy views, and cycle between the boat piers, the Múa Cave steps, and the old capital at Hoa Lư. An overnight turns a rushed day trip into a genuinely slow, beautiful pause.",
      tips: [
        "Take the Tràng An route for temples and caves; Tam Cốc for the golden paddies (late May–June).",
        "Climb Múa Cave at sunrise or late afternoon to beat both the heat and the crowds.",
      ],
    },
    {
      name: "Mỹ Sơn Sanctuary", category: "history", coords: [15.7639, 108.1244], region: "near Hội An",
      description: "Brick Hindu temple-towers of the vanished Chăm kingdom, mouldering in a jungle valley.",
      wiki: "Mỹ Sơn",
      long:
        "Long before the Vietnamese pushed south, central Vietnam was the domain of the Chăm, a Hindu-Malay seafaring kingdom whose spiritual heart was Mỹ Sơn. In a lush ring of hills, they raised clusters of red-brick towers to Shiva between the 4th and 13th centuries, bonded with a vegetable resin whose recipe is still not fully understood.\n\nAmerican bombing during the war destroyed the largest group, and time and roots have claimed much of the rest, but what remains — carved sandstone lintels, dancing figures, weathered lingams — is deeply atmospheric, especially early before the tour buses. Visited as a half-day trip from Hội An, it's a window onto a sophisticated culture most travellers never knew existed.",
      practical: [
        { label: "Getting there", value: "~1 hr from Hội An by tour, Grab, or scooter; a short shuttle-and-walk from the gate to the towers." },
        { label: "Entrance", value: "~150,000 VND (~$6), including the shuttle buggy and a Chăm dance performance." },
        { label: "Time to allow", value: "Half a day; aim for the ~7am opening, before the buses and the heat." },
        { label: "Best time", value: "Early morning — cooler, softer light, and far fewer people." },
      ],
      stay:
        "Visited as a half-day from Hội An, so stay there (see that guide). Go at opening on a scooter or by private car, before the tour groups roll in, and you'll often have the mossy, root-tangled towers almost to yourself.",
      tips: [
        "Arrive at ~7am opening — Mỹ Sơn is small and gets crowded and hot fast.",
        "Some tours return to Hội An by boat down the Thu Bồn river — a pleasant slow option.",
      ],
    },
    {
      name: "Cát Bà & Lan Hạ Bay", category: "offbeat", coords: [20.7280, 107.0490], region: "Hải Phòng",
      description: "The wilder, quieter neighbour to Hạ Long — a forested island fringed by an even prettier bay.",
      wiki: "Cát Bà Island",
      long:
        "Cát Bà is the largest island off Vietnam's north coast, and its adjoining Lan Hạ Bay is, to many eyes, lovelier than Hạ Long proper — the same karst seascape, studded with quiet beaches and floating pearl farms, but with a fraction of the boats. Much of the island is protected as a national park, home to the critically endangered golden-headed langur.\n\nUse it as an active, independent base rather than a cruise stop: hike or cycle through the forested interior, kayak among the islets of Lan Hạ, climb the limestone on a growing number of routes, and swim off empty coves. The main town is workaday, but you're here for the water and the hills, both of which deliver.",
      practical: [
        { label: "Getting there", value: "Bus-and-ferry combos from Hanoi (~3.5 hrs), or a speedboat/cruise across from Hạ Long or Tuần Châu." },
        { label: "On the water", value: "Kayaking and boat trips into Lan Hạ Bay from ~$20; day cruises visit quiet beaches and pearl farms." },
        { label: "Time to allow", value: "2–3 nights to mix the bay, the national park, and some rock climbing." },
        { label: "Active options", value: "Cát Bà National Park hikes, cycling the forested interior, and deep-water-solo climbing on the karst." },
      ],
      stay:
        "Use Cát Bà as an independent, active base rather than a one-night cruise stop: guesthouses in the workaday harbour town, or quieter eco-bungalows near Lan Hạ, put you next to kayaking, climbing, and empty coves — Hạ Long's scenery at a slower, cheaper pace.",
      tips: [
        "Lan Hạ Bay is arguably prettier than Hạ Long and far quieter — prioritise it.",
        "Rent a kayak or a small boat to reach the beaches the day cruises skip.",
      ],
    },
    {
      name: "Đà Lạt", category: "architecture", coords: [11.9404, 108.4583], region: "central highlands",
      description: "A cool-climate hill town of French villas, pine forest, flower farms, and eccentric architecture.",
      wiki: "Da Lat",
      long:
        "Built by the French as a highland retreat from the coastal heat, Đà Lạt sits among pine forests and lakes at 1,500 metres, and the mild climate still defines it. The legacy is a townscape of pastel Art Deco villas, a mock-Eiffel radio tower, and a former summer palace, all wrapped in a faint, incongruous alpine air — but there's an eccentric, hippie-ish streak too, epitomised by the surreal, Gaudí-esque 'Crazy House'.\n\nThe cool uplands make this Vietnam's garden: strawberry farms, artichoke tea, greenhouses of flowers, and — increasingly — very good coffee grown on the surrounding slopes. Around the town lie waterfalls, canyoning routes, and the Lang Biang highlands, making it a refreshing change of pace and temperature from anywhere else in the country.",
      practical: [
        { label: "Getting there", value: "Short flight from Saigon/Hanoi, or a scenic, winding bus up from the coast at Nha Trang." },
        { label: "Time to allow", value: "2–3 nights for the town, the coffee farms, and the surrounding waterfalls." },
        { label: "Getting around", value: "Cool enough to walk; use a scooter or Grab for the flower farms, the lake, and the Crazy House." },
        { label: "Don't miss", value: "Specialty coffee at source, the surreal 'Crazy House', and canyoning or the Datanla falls." },
      ],
      stay:
        "Đà Lạt's mild air and pine forests suit a slow few days: pastel villa guesthouses and coffee-farm homestays on the edge of town let you sip Vietnamese specialty coffee where it's grown and warm up by a fire at night — a real change of temperature and pace from the lowlands.",
      tips: [
        "Pack a light jacket — evenings up here are genuinely cool.",
        "Seek out the third-wave roasters; the surrounding hills grow some of Vietnam's best beans.",
      ],
    },
    {
      name: "Marble Mountains", category: "history", coords: [16.0036, 108.2620], region: "Đà Nẵng",
      description: "Five marble-and-limestone hills honeycombed with caves, shrines, and Buddhist grottoes above the coast.",
      wiki: "Marble Mountains (Vietnam)",
      long:
        "Rising abruptly from the coastal plain between Đà Nẵng and Hội An, the five Marble Mountains are named for the five elements and riddled with caves that have been turned into Buddhist and Hindu shrines over centuries. You climb stone staircases past pagodas to cave-temples where shafts of light fall on altars, some of which sheltered Việt Cộng fighters and a field hospital during the war.\n\nFrom the summit of Thủy Sơn, the largest, the view sweeps along China Beach and back to the city. The stone-carving villages at the base still turn the local marble into everything from Buddhas to bracelets. It's an easy, atmospheric half-day between the two cities, well worth the leg-work up the steps.",
      practical: [
        { label: "Getting there", value: "Between Đà Nẵng and Hội An; ~20 min from either by Grab or scooter." },
        { label: "Entrance", value: "~40,000 VND (~$1.60); a lift up Thủy Sơn is ~15,000 VND extra, or climb the steps." },
        { label: "Time to allow", value: "Half a day for the caves, shrines, and summit views." },
        { label: "Bring", value: "Sturdy shoes and water — it's a lot of uneven stone steps." },
      ],
      stay:
        "An easy half-day between Đà Nẵng and Hội An — base in either (see the Hội An guide for the slower option). Pair it with a swim at My Khe or An Bàng beach nearby for a relaxed coast-and-caves day.",
      tips: [
        "Take the lift up and walk down to save your legs for the cave-temples.",
        "Combine it with a beach afternoon at nearby My Khe or An Bàng.",
      ],
    },
    {
      name: "Côn Đảo Islands", category: "offbeat", coords: [8.6833, 106.6000], region: "off the south coast",
      description: "A remote, achingly beautiful archipelago with a dark prison history and pristine reefs and turtles.",
      wiki: "Côn Đảo",
      long:
        "Far out in the South China Sea, the Côn Đảo archipelago pairs postcard beauty with a sombre past. Under the French and then the South Vietnamese regime, its notorious prisons — including the infamous 'tiger cages' — held and killed tens of thousands of political prisoners; the sites are now moving memorials, and the grave of the revolutionary heroine Võ Thị Sáu draws pilgrims through the night.\n\nBeyond that history the islands are among Vietnam's most pristine: forested hills dropping to empty white beaches, a protected marine park with healthy coral, and nesting sea turtles in season. Reached by a short flight or a long ferry, Côn Đảo stays blissfully quiet — a place to dive, walk, and reflect rather than party.",
      practical: [
        { label: "Getting there", value: "Short flight from Saigon or Can Tho, or a long ferry from Sóc Trăng / Vũng Tàu." },
        { label: "Prison memorials", value: "Small entry fees; an audioguide or local guide gives essential context to the sites." },
        { label: "Time to allow", value: "3–4 nights — it's remote and made for slowing right down." },
        { label: "Nature", value: "Diving and snorkelling on healthy reefs; sea-turtle nesting on Bảy Cạnh island (Jun–Sep, by tour)." },
      ],
      stay:
        "Côn Đảo stays blissfully quiet — small guesthouses and a few eco-resorts in Côn Sơn town look onto empty beaches. It's a place to cycle the coast road, dive or walk, visit the moving prison sites, and join locals at the midnight vigil at Võ Thị Sáu's grave. Come to reflect and unwind, not to party.",
      tips: [
        "Rent a scooter or bicycle — the island's coast road and beaches are the highlight.",
        "For turtle-nesting season (Jun–Sep), book an overnight ranger tour to Bảy Cạnh island ahead.",
      ],
    },
    {
      name: "Mai Châu Valley", category: "nature", coords: [20.6600, 105.1000], region: "Hòa Bình",
      description: "A gentle valley of stilt-house villages and paddy fields, an easy rural escape from Hanoi.",
      wiki: "Mai Châu",
      long:
        "Only a few hours west of Hanoi but a world away in feel, Mai Châu is a broad, flat-bottomed valley of luminous rice paddies ringed by low forested hills, farmed by White Thai communities who live in traditional wooden stilt houses. It offers the terraced-north experience in gentler, more accessible form — ideal if the Hà Giang loop is more than you're after.\n\nDays are for cycling the dirt paths between villages, walking to viewpoints over the patchwork of fields, and buying the hand-woven textiles the Thai are known for. Nights are spent in a homestay beneath a stilt house, over grilled fish and rice wine. It's low-key, welcoming, and one of the simplest ways to swap the city for the countryside.",
      practical: [
        { label: "Getting there", value: "~4 hrs west of Hanoi by bus or private car, over the Thung Khe pass." },
        { label: "Time to allow", value: "1–2 nights of gentle cycling and walking." },
        { label: "Getting around", value: "Rent a bicycle and loop the villages and paddies — the valley is flat and easy." },
        { label: "Vs. Hà Giang", value: "Far gentler and more accessible if the northern motorbike loop is more than you want." },
      ],
      stay:
        "Mai Châu is stilt-house homestay country made easy: sleep beneath a White Thai family's wooden house on a mattress and mosquito net, over grilled fish and rice wine, and spend the day cycling between villages and buying their hand-woven textiles — one of the friendliest, simplest ways to swap the city for the countryside.",
      tips: [
        "Choose a village homestay over a resort for the real valley experience.",
        "A bicycle is all you need — the whole valley is flat and quiet.",
      ],
    },
  ],
};
