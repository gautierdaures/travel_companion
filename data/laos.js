// Country ID card — schema reference lives in data/index.js
export default {
  code: "la",
  name: "Laos",
  flag: "🇱🇦",
  region: "Southeast Asia",
  tagline: "The Mekong's unhurried heart — gilded temples and jungle-clad mountains.",
  tags: ["nature", "trek", "history", "river life", "temples", "slow travel"],

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
    coords: [17.97, 102.63], // Vientiane — representative point for the fetch script
    key: "la",
    best: [11, 12, 1, 2],
    avoid: [4, 5, 6, 7, 8, 9, 10],
    months: [
      { mean: 22, rain: 10 }, { mean: 24, rain: 14 }, { mean: 27, rain: 34 },
      { mean: 29, rain: 68 }, { mean: 28, rain: 242 }, { mean: 27, rain: 310 },
      { mean: 27, rain: 377 }, { mean: 26, rain: 415 }, { mean: 26, rain: 303 },
      { mean: 26, rain: 93 }, { mean: 24, rain: 19 }, { mean: 22, rain: 8 },
    ],
  },

  events: [
    { name: "Pi Mai (Lao New Year)", when: "Mid-April", months: [4], kind: "go", description: "A three-day nationwide water fight and temple festival — joyous and drenching, but it's also the hottest, dustiest time of year and many businesses close." },
    { name: "Boun Bang Fai (Rocket Festival)", when: "May", months: [5], kind: "go", description: "Villages launch home-made bamboo rockets skyward to prod the heavens for rain — raucous, boozy, and wonderfully local." },
    { name: "Boat Racing Festival", when: "Sep – Oct", months: [9, 10], kind: "go", description: "Longboat crews race on the Mekong to mark the end of Buddhist Lent; riverbanks in Luang Prabang and Vientiane turn into a party." },
    { name: "That Luang Festival", when: "November (full moon)", months: [11], kind: "go", description: "Laos's biggest religious festival, centred on Vientiane's golden stupa — candlelit processions, alms, and a huge fair." },
  ],

  places: [
    {
      name: "Luang Prabang", category: "history", coords: [19.8867, 102.135], region: "north-central Laos",
      description: "A UNESCO town of gilded wats and French villas where saffron-robed monks collect alms at dawn — the soul of Laos.",
      wiki: "Luang Prabang",
      long:
        "The former royal capital of Laos, cradled in the mountains at the meeting of the Mekong and the Nam Khan, Luang Prabang is one of the most beguiling towns in Asia and the country's spiritual heart. A UNESCO peninsula of gilded Buddhist temples, teak monasteries, and mustard-yellow French colonial villas, it moves at a hush — bicycles, riverside cafés, and the toll of temple bells.\n\nThe defining ritual is the dawn alms round, when hundreds of barefoot, saffron-robed monks file silently through the streets to receive sticky rice from kneeling townsfolk (observe respectfully, from a distance). Climb Mount Phousi at dusk for the view over the rivers, browse the night market's Hmong textiles, and let the town's gentle rhythm reset your clock. It's the natural base for the waterfalls and caves nearby.",
      practical: [
        { label: "Getting there", value: "Slow boat down the Mekong from Huay Xai (2 days) is the romantic way in; also the fast train from Vientiane/Vang Vieng (~1–2 hrs) or flights." },
        { label: "Time to allow", value: "3–4 nights — the whole point is to downshift, not tick off sights." },
        { label: "Entrance", value: "Most wats ~20,000 kip (~$1); Royal Palace Museum ~30,000 kip; Mount Phousi sunset climb ~20,000 kip (328 steps)." },
        { label: "Alms giving", value: "Tak bat at dawn (~05:30). Watch silently from across the street — don't buy rice to join in unless truly invited." },
      ],
      stay:
        "Sleep on the peninsula in a restored teak-and-stucco guesthouse — many are old French villas or former monks' quarters, walkable to every temple and café. For an even slower pace, cross the bamboo bridge over the Nam Khan and base yourself among the gardens on the far bank, or spend a night at a riverside weaving village like Ban Xang Khong upstream.",
      tips: [
        "Bring cash — ATMs are few and cap withdrawals, and many guesthouses are cash-only.",
        "Rent a bicycle: the peninsula is flat, walkable, and blessedly car-light.",
        "The night market on Sisavangvong Road is the place for Hmong textiles — haggle gently.",
      ],
    },
    {
      name: "Kuang Si Falls", category: "nature", coords: [19.749, 101.991], region: "near Luang Prabang",
      description: "Tiers of turquoise pools cascading through the forest; swim in the lower ones and visit the bear rescue on the way in.",
      wiki: "Kuang Si Falls",
      long:
        "A short drive into the hills from Luang Prabang, the Kuang Si falls tumble down a series of limestone terraces into pools of an almost luminous milky-turquoise, coloured by the dissolved minerals in the water. A shaded forest path climbs alongside the cascades to the main drop, and several of the lower pools are open for swimming beneath the falls.\n\nAt the entrance, the Free the Bears sanctuary cares for Asiatic black bears ('moon bears') rescued from poachers and the bile trade — an easy and worthwhile stop on the way in. Go early or late to beat the tour crowds and the midday heat, and consider the quieter Tad Sae falls as an alternative in the wet season when they're at their fullest.",
      practical: [
        { label: "Getting there", value: "~30 km / 45 min from Luang Prabang: shared tuk-tuk (~50,000 kip return), minivan, or a hired scooter." },
        { label: "Entrance", value: "~65,000 kip (~$3); includes the shuttle and the Free the Bears sanctuary just inside the gate." },
        { label: "Time to allow", value: "Half a day. A shaded path climbs beside the cascades to the top (~20 min each way)." },
        { label: "Swimming", value: "The lower turquoise pools are open for a dip — bring a swimsuit; the minerals are cold and gorgeous." },
      ],
      stay:
        "Most people come as a half-day from Luang Prabang, but a few small eco-guesthouses and homestays near the falls at Ban Thapene let you stay until the tour buses leave and have the pools almost to yourself at opening or closing time.",
      tips: [
        "Go at opening (~8am) or after 3pm for empty pools and soft forest light.",
        "Wet season (Jun–Oct) makes the falls thunderous, but the water turns cloudier and less blue.",
      ],
    },
    {
      name: "Kong Lor Cave", category: "offbeat", coords: [18.29, 104.82], region: "Khammouane",
      description: "A 7 km river cave you travel through by longtail boat, headlamp piercing the dark of a limestone mountain.",
      wiki: "Tham Kong Lo",
      long:
        "In the limestone country of central Laos, the Nam Hin Boun river disappears straight into a mountain — and you can follow it. A longtail boatman takes you 7.5 kilometres through the pitch-black belly of Kong Lor Cave, headlamps picking out a cathedral-sized void of stalactites and, at one point, a lit chamber of glittering formations, before emerging into daylight and jungle at the far end.\n\nThe journey there, through the tranquil, karst-ringed valley of Ban Kong Lor, is half the appeal, and the village at the mouth of the cave makes a peaceful overnight base. Remote and a little effort to reach, it stays gloriously off the mainstream trail — one of the most memorable and least-visited experiences in the country.",
      practical: [
        { label: "Getting there", value: "Remote central Laos: minivan to Ban Kong Lor via Thakhek or Vieng Kham. The Thakhek 'Loop' by motorbike passes through." },
        { label: "Through the cave", value: "~110,000–150,000 kip per longtail (up to 3 people), round trip through the 7.5 km cave." },
        { label: "Time to allow", value: "Overnight — the karst valley is half the reward; the boat trip itself is ~1.5–2 hrs." },
        { label: "Bring", value: "A head-torch, a dry bag, and shoes you don't mind getting wet." },
      ],
      stay:
        "The village of Ban Kong Lor at the cave mouth has a cluster of friendly, family-run guesthouses and homestays set among the rice fields — exactly the sort of quiet, karst-ringed overnight that rewards the effort of getting here. Arrive the afternoon before, cycle the valley, and take the boat early.",
      tips: [
        "Best in the dry season; high water after heavy rain can close the boats.",
        "String it into the 3–4 day Thakhek Loop for one of Laos's great slow road trips.",
      ],
    },
    {
      name: "Plain of Jars", category: "history", coords: [19.42, 103.15], region: "Xieng Khouang",
      description: "Fields scattered with thousands of ancient stone jars of unknown purpose, amid a landscape still scarred by wartime bombing.",
      wiki: "Plain of Jars",
      long:
        "Across the uplands of Xieng Khouang, thousands of massive carved stone jars — some over two metres tall — lie scattered in clusters across the hills, the relics of an Iron Age culture that flourished here some 2,000 years ago. Their purpose is still debated; the leading theory is that they were used in funerary practices. Grouped at several accessible sites, they make a genuinely mysterious, atmospheric landscape.\n\nThe plain carries a darker modern history too: this was among the most heavily bombed areas on earth during the CIA's 'Secret War', and unexploded ordnance still litters the ground — visitors keep strictly to the cleared, marked paths. Now UNESCO-listed, the jars and the sobering nearby reminders of the bombing make for a thought-provoking day out from Phonsavan.",
      practical: [
        { label: "Getting there", value: "Fly or bus to Phonsavan (Xieng Khouang); the main jar sites are 10–30 min out by tuk-tuk or hired driver." },
        { label: "Entrance", value: "~15,000 kip per outer site; Site 1 — the largest and closest — is ~35,000 kip including its shuttle." },
        { label: "Time to allow", value: "A full day to link 2–3 sites plus a UXO/MAG visitor centre." },
        { label: "Safety", value: "Stay strictly on the white-marked cleared paths — unexploded ordnance still lies in the ground here." },
      ],
      stay:
        "Phonsavan is a workaday highland town rather than a beauty, but its simple guesthouses put you beside both the jars and the sobering war-history exhibits. For something slower, ask about Hmong or Tai Dam village homestays nearby, or the hot springs out at Muang Kham.",
      tips: [
        "Visit the MAG or QLA information centre first — it frames both the jars and the bombing.",
        "Nights are cool up here (1,000 m+); pack a warm layer.",
      ],
    },
    {
      name: "4,000 Islands (Si Phan Don)", category: "nature", coords: [14.0, 105.93], region: "far south",
      description: "Where the Mekong braids into countless islets — hammocks, Irrawaddy dolphins, and river life at its slowest.",
      wiki: "Don Det",
      long:
        "At its southern extreme, just before the Cambodian border, the Mekong sprawls to 14 kilometres wide and shatters into a maze of channels and countless islands — Si Phan Don, the 'Four Thousand Islands'. Life here runs at the pace of the river: fishermen setting bamboo traps, rice paddies, and travellers strung out in hammocks on the laid-back islands of Don Det and Don Khon.\n\nBetween the two islands, the remains of a French colonial railway — the only one Laos ever had, built to portage boats around the rapids — can still be walked or cycled. Downstream thunder the Khone Phapheng Falls, the largest by volume in Southeast Asia, and in the pools near the border you may glimpse some of the last critically endangered Irrawaddy dolphins. It is the country's ultimate place to do very little.",
      practical: [
        { label: "Getting there", value: "Bus to Nakasang, then a short longtail ferry (~25,000 kip) across to Don Det or Don Khon." },
        { label: "Time to allow", value: "2–4 unhurried nights — this is peak do-nothing Laos." },
        { label: "Getting around", value: "Rent a bicycle (~10,000–20,000 kip/day) and pedal between the two islands over the old French railway bridge." },
        { label: "Excursions", value: "Khone Phapheng Falls ~55,000 kip; dawn boat trips to spot Irrawaddy dolphins from ~60,000 kip/person." },
      ],
      stay:
        "This is the Mekong at its slowest, and a riverside bamboo-and-timber bungalow with a hammock and a west-facing sunset is the whole idea. Don Det's northern tip is more sociable; Don Khon and the southern shores are quieter and more local — pick your pace and simply stay put.",
      tips: [
        "Power and wifi are patchy by design — bring a book and enough cash.",
        "Sunset from a hammock is the day's main event; plan nothing around it.",
      ],
    },
    {
      name: "Nam Ha Protected Area", category: "nature", coords: [20.95, 101.4], region: "Luang Namtha",
      description: "Trek and homestay through dense forest and hill-tribe villages in the far northern highlands.",
      wiki: "Nam Ha National Protected Area",
      long:
        "In the far northern highlands near the Chinese and Myanmar borders, the Nam Ha National Protected Area is one of Laos's largest and most biodiverse reserves — a swathe of dense tropical forest, rivers and mountains that is home to gibbons, clouded leopards, and a patchwork of Akha, Hmong and Khmu communities in the valleys.\n\nOut of the town of Luang Namtha, community-based ecotourism here was a pioneer in Laos: multi-day guided treks that walk village-to-village and overnight in homestays, along with kayaking and cycling, with fees supporting both conservation and the villages. It's the place to swap temples for trails, meet the region's ethnic minorities on their own ground, and spend a night deep in the forest.",
      practical: [
        { label: "Getting there", value: "Base in Luang Namtha (flights from Vientiane, or bus); guided treks depart from town." },
        { label: "Trek", value: "1–3 day village-to-village treks with homestays, plus kayaking and cycling, booked through the town's licensed ecotourism operators." },
        { label: "Cost", value: "Roughly $30–60/day per person depending on group size; fees fund both the villages and the reserve." },
        { label: "Guides", value: "Compulsory — and worth it: they arrange permits, homestays, and translation with Akha and Khmu hosts." },
      ],
      stay:
        "The magic here is the overnight deep in the forest — a simple village homestay on Akha or Khmu ground, reached on foot, with a shared meal and rice wine by the fire. Base in Luang Namtha before and after, and choose a genuinely community-based operator so your money reaches the people you walk among.",
      tips: [
        "Book through a certified operator (the provincial ecotourism office can point you) — not every 'trek' benefits the villages.",
        "The larger the group, the cheaper per head; solo travellers can join a scheduled departure.",
      ],
    },
    {
      name: "Vat Phou", category: "history", coords: [14.848, 105.822], region: "Champasak",
      description: "A ruined Khmer temple predating Angkor, climbing a hillside above the Mekong plain.",
      wiki: "Vat Phou",
      long:
        "Long before Laos existed, this corner of the Mekong plain was part of the Khmer world, and Vat Phou is its great monument — a Hindu temple complex begun as early as the 5th century and largely built between the 11th and 13th, predating and partly inspiring Angkor. Aligned to a mountain the Khmer held sacred (its summit resembling a lingam) and to a natural spring, it steps up the hillside on a monumental axis of causeways, terraces and sanctuaries.\n\nWeathered, root-tangled and far quieter than Angkor, it rewards the climb with beautifully carved lintels and a sweeping view back over the palm-dotted plain to the river. UNESCO-listed and reached from the sleepy riverside town of Champasak, it's the highlight of southern Laos and an evocative introduction to Khmer temple architecture.",
      practical: [
        { label: "Getting there", value: "From Pakse, ~1 hr to Champasak by bus or tuk-tuk; the temple is ~8 km beyond the sleepy riverside town." },
        { label: "Entrance", value: "~50,000 kip (~$2.50); includes a shuttle buggy up to the lower terraces." },
        { label: "Time to allow", value: "2–3 hours; go early or late, as there's little shade on the climb to the sanctuary." },
        { label: "Best light", value: "Early morning or the golden hour, for the sweeping view back over the palm-dotted plain." },
      ],
      stay:
        "Stay in Champasak itself — a one-street river town of faded colonial guesthouses where almost nothing happens, which is precisely the appeal. A night here lets you reach the temple at opening, before the heat and the day-trippers from Pakse arrive.",
      tips: [
        "Bring water and a hat; the upper sanctuary is a steep, exposed climb.",
        "Pair it with a slow bicycle ride or boat along the Mekong at Champasak.",
      ],
    },
    {
      name: "Pak Ou Caves", category: "history", coords: [20.0500, 102.2170], region: "near Luang Prabang",
      description: "Two riverside caves crammed with thousands of old Buddha statues, reached by boat up the Mekong.",
      wiki: "Pak Ou Caves",
      long:
        "Where the Nam Ou river joins the Mekong, an hour or two upstream from Luang Prabang, two caves in a limestone cliff have for centuries served as a repository for unwanted or worn-out Buddha images. Over time villagers and pilgrims have left thousands of them — from tiny figures to metre-high statues, in wood, bronze and gilt — until the ledges and alcoves of the caves brim with the accumulated devotion of generations.\n\nThe lower cave opens directly onto the river; the upper one is darker and reached by a stairway, best explored with a torch. Half the pleasure is the slow boat journey itself, gliding past riverside villages and karst scenery, often combined with a stop at a whisky-and-weaving village along the way. It's an easy, atmospheric half-day from the old capital.",
      practical: [
        { label: "Getting there", value: "~2 hrs upriver from Luang Prabang by slow boat (the lovely way), or ~1 hr by road then a short river crossing." },
        { label: "Entrance", value: "~20,000 kip (~$1); shared boat hire from Luang Prabang from ~150,000 kip." },
        { label: "Time to allow", value: "Half a day, usually combined with a whisky-and-weaving village stop en route." },
        { label: "Bring", value: "A torch for the darker, higher of the two caves." },
      ],
      stay:
        "This is a half-day from Luang Prabang, so stay there (see its guide). To stretch it into slow travel, take the public slow boat and break the journey at riverside villages such as Ban Xang Hai, known for its rice whisky, and Ban Xang Khong for saa-paper and weaving.",
      tips: [
        "Take the slow boat up, not the fast option — the river journey is half the pleasure.",
        "Morning light is best on the lower, river-level cave.",
      ],
    },
    {
      name: "Bolaven Plateau", category: "food", coords: [15.1500, 106.4000], region: "southern Laos",
      description: "Cool highlands of coffee farms and thundering waterfalls — Laos's caffeine heartland, best on a bike loop.",
      wiki: "Bolaven Plateau",
      long:
        "Rising above the southern Mekong plain, the Bolaven Plateau is a cool, fertile upland that the French recognised as ideal for coffee — and it remains the heart of Lao coffee production, its rich volcanic soil growing both robusta and prized arabica on smallholder farms you can tour and taste at. The elevation makes it a refreshing escape from the lowland heat.\n\nThe plateau is laced with spectacular waterfalls — Tad Fane's twin plumes plunging into a gorge, the broad curtain of Tad Yuang — and dotted with villages of the region's ethnic minorities. The classic way to take it in is a two-or-three-day motorbike loop from Pakse, linking coffee stops, waterfalls and homestays: one of Southeast Asia's great, low-key road trips.",
      practical: [
        { label: "Getting there", value: "Rent a motorbike in Pakse; the classic loop is 2–3 days, ~200–300 km on mostly decent roads." },
        { label: "The loop", value: "A 'small' or 'big' loop links coffee farms, the Tad Fane and Tad Yuang waterfalls, and minority villages." },
        { label: "Coffee & falls", value: "Farm tours and tastings are often free or a few dollars; small entry fees (~10,000–20,000 kip) at the main waterfalls." },
        { label: "When", value: "Cooler than the lowlands year-round; waterfalls are fullest at the end of the wet season." },
      ],
      stay:
        "The loop is built for slow travel: homestays and coffee-farm guesthouses around Tad Lo and Paksong let you break the ride, sip at the source, and wake to cool highland mornings. Laid-back Tad Lo, with its waterfall and travellers' cafés, is well worth an extra night.",
      tips: [
        "Bring a jacket — the plateau is genuinely chilly on the bike.",
        "Reputable Pakse shops rent bikes and store your bags; check the brakes before you set off.",
      ],
    },
    {
      name: "Pha That Luang", category: "architecture", coords: [17.9757, 102.6330], region: "Vientiane",
      description: "The great golden stupa that is the national symbol of Laos, glowing above the capital.",
      wiki: "Pha That Luang",
      long:
        "The golden stupa of Pha That Luang is the most important national monument in Laos and a symbol of both Buddhism and Lao sovereignty — its image appears on the national seal and the currency. A three-tiered, gilded spire enclosed within a walled cloister, it is believed to enshrine a relic of the Buddha and to stand over the remains of an earlier Khmer temple.\n\nRebuilt after being sacked and later restored, today's structure gleams above Vientiane and forms the focus of the country's largest religious festival, the November That Luang celebration, when thousands of monks and pilgrims converge for candlelit processions and alms-giving. It's the centrepiece of a relaxed day exploring the low-key capital, alongside the nearby Patuxai victory arch and riverside.",
      practical: [
        { label: "Getting there", value: "~4 km from central Vientiane; an easy tuk-tuk or bicycle ride." },
        { label: "Entrance", value: "~10,000 kip (~$0.50). Modest dress required — shoulders and knees covered." },
        { label: "Time to allow", value: "About an hour, easily combined with the Patuxai arch nearby." },
        { label: "When", value: "Glows best in late-afternoon light; the huge That Luang festival falls on the November full moon." },
      ],
      stay:
        "Vientiane is a famously low-key capital of riverside guesthouses and cafés — a gentle first or last stop on a Laos trip. Base yourself near the Mekong waterfront for sunset strolls, the night market, and easy cycling out to the stupa and Patuxai.",
      tips: [
        "Cover shoulders and knees, and remove shoes where signed.",
        "Time your visit for the November That Luang festival if the dates line up.",
      ],
    },
    {
      name: "Wat Xieng Thong", category: "architecture", coords: [19.8950, 102.1400], region: "Luang Prabang",
      description: "The most beautiful temple in Luang Prabang — sweeping roofs and a glittering 'tree of life' mosaic.",
      wiki: "Wat Xieng Thong",
      long:
        "At the tip of the Luang Prabang peninsula, where the Nam Khan meets the Mekong, Wat Xieng Thong is the finest and most revered of the old royal city's temples, built in 1560 and spared the destruction that befell others. Its main hall is the classic expression of Luang Prabang style: low, sweeping, multi-tiered roofs curving almost to the ground, gilded and stencilled walls, and serene proportions.\n\nThe back wall is famous for a shimmering 'tree of life' mosaic set in coloured glass on a red ground, and the grounds hold smaller chapels — including one sheltering a rare reclining Buddha — and the ornate royal funerary carriage house. As the spiritual crown of the peninsula and once the site of royal coronations, it's the single temple not to miss.",
      practical: [
        { label: "Getting there", value: "At the tip of the Luang Prabang peninsula — walkable from anywhere in the old town." },
        { label: "Entrance", value: "~20,000 kip (~$1)." },
        { label: "Time to allow", value: "45 min–1 hour; loveliest in early or late light." },
        { label: "Dress", value: "Cover shoulders and knees; remove shoes before entering the halls." },
      ],
      stay:
        "You're in Luang Prabang, so see that guide for where to sleep. The temple sits at the quiet, atmospheric north end of the peninsula — a lovely first stop on an early-morning walk before the day warms up.",
      tips: [
        "Arrive at opening for low, warm light on the glass 'tree of life' mosaic.",
        "Combine it with the dawn alms round that passes nearby.",
      ],
    },
    {
      name: "Nong Khiaw", category: "nature", coords: [20.5670, 102.6170], region: "Nam Ou valley",
      description: "A riverside village hemmed by soaring karst cliffs — viewpoint hikes, caves, and slow-boat journeys.",
      wiki: "Nong Khiaw",
      long:
        "Strung along the Nam Ou river beneath towering, jagged limestone cliffs, Nong Khiaw is the scenic gateway to northern Laos and an increasingly beloved base for travellers who want mountains over temples. A bridge links the two halves of the village, and simple bungalows look straight onto the karst walls and the river mist that pools between them each morning.\n\nThe headline activity is the steep, sweaty climb to the Pha Daeng or Nong Khiaw viewpoints, which reward you with a jaw-dropping panorama over the river snaking through the peaks. Beyond that lie caves that sheltered villagers during the war, walks to nearby villages, and the lovely slow boat further upriver to even sleepier Muang Ngoi. It's the outdoorsy, unhurried counterpoint to Luang Prabang.",
      practical: [
        { label: "Getting there", value: "~3–4 hrs by minivan from Luang Prabang, or a scenic slow boat up the Nam Ou." },
        { label: "Viewpoint trek", value: "The Pha Daeng / Nong Khiaw viewpoint is a steep ~1.5–2 hr climb; small trail fee (~20,000 kip)." },
        { label: "Time to allow", value: "2–3 nights, more if you carry on to car-free Muang Ngoi upriver (~1 hr by boat)." },
        { label: "Also", value: "War caves that sheltered villagers, kayaking, and walks to nearby farming villages." },
      ],
      stay:
        "Simple riverside bungalows look straight onto the karst walls and the morning mist — this is a balcony-and-coffee kind of place, made for watching the river. For deeper quiet still, take the boat to tiny, road-free Muang Ngoi and stay a couple of nights beneath the cliffs.",
      tips: [
        "Start the viewpoint climb early — it's hot, steep, and unshaded higher up.",
        "Bring cash; ATMs are unreliable this far up the valley.",
      ],
    },
    {
      name: "Buddha Park (Xieng Khuan)", category: "offbeat", coords: [17.9130, 102.7770], region: "near Vientiane",
      description: "A surreal riverside meadow of giant, eccentric Hindu and Buddhist concrete sculptures.",
      wiki: "Buddha Park",
      long:
        "On the bank of the Mekong just outside Vientiane, Buddha Park (Xieng Khuan) is one of Laos's strangest and most photogenic sights: a riverside meadow crowded with more than 200 outsized, eccentric concrete sculptures of Hindu and Buddhist deities, demons and animals, created from the late 1950s by an idiosyncratic priest-shaman who fused the two religions in his own cosmology.\n\nThe showpieces are a colossal reclining Buddha and a great domed structure you enter through the mouth of a demon and climb, level by level, to a rooftop view over the whole surreal garden. It's kitsch, mysterious and a little eerie all at once — an easy, offbeat half-day trip from the capital that makes a change from the country's more solemn temples.",
      practical: [
        { label: "Getting there", value: "~25 km from Vientiane along the Mekong; local bus 14, a hired tuk-tuk, or scooter (~40 min)." },
        { label: "Entrance", value: "~60,000 kip (~$2.75) for foreign visitors." },
        { label: "Time to allow", value: "1–2 hours; often paired with the nearby Friendship Bridge or a riverside lunch." },
        { label: "Don't miss", value: "Climbing inside the giant 'pumpkin' dome through the demon's mouth to the rooftop view over the sculptures." },
      ],
      stay:
        "This is an easy half-day from Vientiane, so stay in the capital (see the Pha That Luang guide). Slow it down by cycling out along the river or lingering for sunset over the Mekong on the way back.",
      tips: [
        "Morning is cooler and quieter for wandering the open, shadeless meadow of statues.",
        "Combine it with a look at the Thai border bridge and a riverside meal.",
      ],
    },
  ],
};
