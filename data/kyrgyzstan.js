// Country ID card — schema reference lives in data/index.js
export default {
  code: "kg",
  name: "Kyrgyzstan",
  flag: "🇰🇬",
  region: "Central Asia",
  tagline: "The Switzerland of Central Asia — alpine lakes, summer yurt camps, and horses on high pastures.",
  tags: ["nature", "trek", "nomads", "history", "slow travel", "wildlife"],

  languages: {
    name: "Kyrgyz & Russian",
    note: "Kyrgyz, a Turkic language written in Cyrillic, is the state language and the heart of a proud oral culture of epic poetry; Russian is widely spoken and useful everywhere, especially in Bishkek and the north. In the mountains, a smile, a few words and a readiness to drink tea open every door.",
    phrases: [
      { en: "Hello", local: "Салам", pron: "sa-LAM" },
      { en: "How are you?", local: "Кандайсыз?", pron: "kan-DAI-sihz?" },
      { en: "Thank you", local: "Рахмат", pron: "rah-MAT" },
      { en: "Yes / No", local: "Ооба / Жок", pron: "OH-ba / zhok" },
      { en: "Excuse me / Sorry", local: "Кечиресиз", pron: "ke-chee-re-SIZ" },
      { en: "How much?", local: "Канча?", pron: "kan-CHA?" },
      { en: "Where is…?", local: "…кайда?", pron: "… kai-DA?" },
      { en: "Delicious!", local: "Даамдуу!", pron: "daam-DOO!" },
      { en: "Water / Tea", local: "Суу / Чай", pron: "soo / chai" },
      { en: "Welcome", local: "Кош келиңиз", pron: "kosh ke-lee-NIZ" },
      { en: "Goodbye", local: "Жакшы калыңыз", pron: "zhak-SHIH ka-lih-NIZ" },
    ],
  },

  history: {
    summary:
      "Kyrgyzstan is a nation of mountains and nomads. Its people trace their identity to Turkic herders of the Yenisei who migrated south into the Tian Shan over centuries, developing a horseback culture and a colossal oral epic, the Manas — one of the longest poems in the world — recited by specialist bards. The Silk Road crossed the country through the Fergana valley and past Lake Issyk-Kul, leaving caravanserais and the Tower of Burana. Absorbed into the Russian Empire in the 19th century and then a Soviet republic, Kyrgyzstan saw its nomads forced to settle, yet the horse, the yurt and the high summer pastures (jailoo) remained central to life. Independent since 1991, it has been the most politically open country in Central Asia — nicknamed 'the island of democracy', through several turbulent revolutions — and has embraced community-based tourism, opening its spectacular mountains and its warm nomadic hospitality to travellers.",
    timeline: [
      { era: "Antiquity (Silk Road)", text: "Caravans cross the Tian Shan; the Burana Tower rises near the Silk Road city of Balasagun." },
      { era: "Oral epic (the Manas)", text: "The vast Kyrgyz epic of the hero Manas is passed down by bards — the soul of the national identity." },
      { era: "1876 (Russian rule)", text: "The Russian Empire annexes the Kyrgyz lands, later triggering the tragic 1916 Urkun uprising and exodus." },
      { era: "1936 (Soviet republic)", text: "Kyrgyzstan becomes a Soviet Socialist Republic; nomads are forced to settle on collective farms." },
      { era: "1991 (Independence)", text: "Kyrgyzstan becomes independent — since dubbed the most democratic and open state in the region." },
    ],
  },

  books: [
    { title: "Jamilia", author: "Chingiz Aitmatov", year: "1958", note: "The tender wartime love story that Aragon called 'the most beautiful in the world' — by Kyrgyzstan's beloved writer." },
    { title: "The Day Lasts More Than a Hundred Years", author: "Chingiz Aitmatov", year: "1980", note: "A magnificent novel braiding steppe legend, the cosmodrome and Soviet reality — start here for Central Asia." },
    { title: "Manas", author: "Kyrgyz oral epic", year: "traditional", note: "The national epic of the hero Manas — seek a translation or, better, hear a manaschy bard perform it." },
    { title: "Kyrgyz Republic (Odyssey Guide)", author: "Rowan Stewart & Susie Weldon", year: "2004", note: "A rich cultural-historical guide that goes far beyond the practicalities." },
    { title: "The Devil's Dance", author: "Hamid Ismailov", year: "2018", note: "A Central Asian novel-within-a-novel; not Kyrgyz-set but evocative of the region's literary soul." },
  ],

  meals: [
    { name: "Beshbarmak", description: "The national dish shared across the steppe — boiled mutton or horse over wide flat noodles in broth, eaten with the hands from a common platter.", tip: "A dish of hospitality and celebration; sharing it with a herder family in a yurt is a highlight of any trip." },
    { name: "Lagman", description: "Hand-pulled noodles in a rich, spiced meat-and-vegetable sauce or soup — the Uyghur-influenced staple of Central Asia, endlessly satisfying." },
    { name: "Plov (osh)", description: "Fragrant rice pilaf with lamb, carrot and cumin, cooked in a big kazan — the centrepiece of any feast, especially in the south." },
    { name: "Manti & samsa", description: "Steamed lamb-and-onion dumplings, and flaky pastries baked in a tandyr oven — the classic snacks of bazaars and roadsides." },
    { name: "Kymyz & maksym", description: "Fermented mare's milk (kymyz), the tangy pride of the summer pastures, and grain drinks like maksym — real nomad refreshment." },
    { name: "Boorsok & jam", description: "Puffed fried dough served with tea, honey, clotted cream (kaymak) and jam — the warm welcome laid out on every yurt's table." },
  ],

  climate: {
    unit: "°C",
    note: "Mountainous and continental — figures are for Bishkek in the northern lowlands. The high valleys, pastures and passes are far colder and only truly open in high summer (roughly Jun–Sep, the season for trekking and yurt stays). Lake Issyk-Kul, warmed by its depth and salt, never freezes and is the summer resort. Winters are cold and snowy; some high roads close.",
    coords: [42.87, 74.59], // Bishkek — representative point for the fetch script
    key: "kg",
    best: [6, 7, 8, 9],
    avoid: [11, 12, 1, 2],
    months: [
      { mean: -2, rain: 27 }, { mean: 0, rain: 33 }, { mean: 6, rain: 48 },
      { mean: 12, rain: 79 }, { mean: 17, rain: 65 }, { mean: 22, rain: 36 },
      { mean: 25, rain: 24 }, { mean: 24, rain: 15 }, { mean: 18, rain: 22 },
      { mean: 11, rain: 43 }, { mean: 5, rain: 42 }, { mean: 0, rain: 30 },
    ],
  },

  events: [
    { name: "Jailoo (summer pasture) season", when: "June – September", months: [6, 7, 8, 9], kind: "go", description: "The one window when the high mountains, passes and yurt camps are open and green — herders move up to the jailoo, and this is prime time for trekking and horse trips." },
    { name: "Nооруз (Nowruz)", when: "21 March", months: [3], kind: "go", description: "The spring-equinox new year celebrated across Central Asia with feasts, horse games and music — festive, though still cold and out of trekking season." },
    { name: "National horse games", when: "Summer", months: [7, 8], kind: "note", description: "Kok-boru (the fierce goat-carcass polo), horse racing and eagle hunting are shown at village festivals and the periodic World Nomad Games — ask locally about upcoming events." },
    { name: "Winter (mountains closed)", when: "November – March", months: [11, 12, 1, 2, 3], kind: "avoid", description: "High passes and yurt camps close under snow and cold; travel is limited to Bishkek, Issyk-Kul's shores and ski touring at Karakol. Save the mountains for summer." },
  ],

  places: [
    {
      name: "Song-Köl", category: "nature", coords: [41.8333, 75.1333], region: "central Tian Shan",
      description: "A vast, treeless alpine lake ringed by summer pastures and yurt camps — the essence of nomadic Kyrgyzstan.",
      wiki: "Song Kol",
      long:
        "High on a plateau at 3,000 metres, Song-Köl is the soul of Kyrgyzstan: a huge, mirror-still alpine lake surrounded by open, treeless grasslands where, each summer, herding families bring their animals up to the jailoo and pitch their yurts. There are no towns, no roads to speak of, no light but the stars — just horses, sheep and the sweep of the pastures under an immense sky, exactly as it has been for centuries.\n\nThe classic way to experience it is to stay in a family-run yurt camp on the shore, sharing meals and kymyz with your hosts, riding out across the pastures on horseback, and watching the light and weather race over the lake. Reaching it means crossing a high pass by 4WD or, better, trekking or riding in over several days from the villages below. Simple, elemental and unforgettable, Song-Köl is the trip most travellers remember longest.",
      practical: [
        { label: "Getting there", value: "Reached over high passes by 4WD from Kochkor or the Naryn side (~3–4 hrs of rough track), or on a 2–3 day horse/foot trek in — the trek is the real reward." },
        { label: "Staying", value: "Family yurt camps line the shore in summer (arrange through CBT/Community-Based Tourism in Kochkor); a bed, meals and horse hire are included. Bring cash." },
        { label: "When", value: "Only accessible roughly mid-June to mid-September; the passes are snowbound and camps gone the rest of the year. Nights are cold even in summer — pack warm layers." },
        { label: "Do", value: "Horse-riding across the pastures, watching the herders, and the astonishing star-filled nights far from any light." },
      ],
      stay:
        "Sleep in a shepherd family's yurt on the lakeshore — felt walls, a wood stove, shared meals of fresh bread and kymyz, and horses at the door. It's basic (outdoor long-drop, no electricity) and utterly magical; book through the Community-Based Tourism office in Kochkor, which channels income to the families.",
      tips: [
        "Ride or trek in over the passes rather than driving — the multi-day journey through the pastures is the highlight.",
        "Book via CBT in Kochkor so your money reaches the herding families directly, and bring enough cash and warm clothes.",
      ],
    },
    {
      name: "Karakol & the Karakol / Ala-Köl trek", category: "nature", coords: [42.4900, 78.3900], region: "east of Issyk-Kul",
      description: "A trekking hub beneath glaciated peaks — hot springs, a wooden mosque, and a classic pass-and-lake hike.",
      wiki: "Karakol",
      long:
        "At the eastern end of Lake Issyk-Kul, the friendly town of Karakol is Kyrgyzstan's mountaineering and trekking capital, backed by the glaciated peaks of the central Tian Shan. The town itself charms with its Russian gingerbread cottages, a beautiful all-timber Dungan mosque built without nails (in Chinese style), and a wooden Orthodox cathedral — a legacy of its mixed Russian, Dungan and Kyrgyz past — plus a lively Sunday animal market.\n\nBut the mountains are the point. The Karakol valley leads up to the region's signature multi-day trek over the Ala-Köl pass (~3,900 m) to a stunning turquoise glacial lake and down to the Altyn-Arashan hot springs — one of the great hikes in Central Asia. In winter, Karakol becomes a low-key ski resort. With outfitters, guesthouses and community tourism all here, it's the natural base for the eastern Tian Shan.",
      practical: [
        { label: "Getting there", value: "~6–7 hrs by road from Bishkek along the north shore of Issyk-Kul (marshrutka or shared taxi); Karakol is a walkable town with good guesthouses." },
        { label: "Ala-Köl trek", value: "The classic 2–3 day loop climbs the Karakol valley over the Ala-Köl pass to the turquoise lake and down to Altyn-Arashan's hot springs. Strenuous and high — go with a guide/porter or at least proper gear." },
        { label: "In town", value: "The wooden Dungan Mosque and Holy Trinity Cathedral, the Sunday livestock market (early morning), and hearty Dungan food." },
        { label: "When", value: "Trekking Jul–Sep (snow lingers on the pass into summer); Karakol also has a ski base in winter." },
      ],
      stay:
        "Base in one of Karakol's welcoming guesthouses to organise treks and rest sore legs, and overnight on the trail in tents or in the rustic huts and hot-spring guesthouses at Altyn-Arashan — soaking in a hot pool beneath the peaks after the Ala-Köl pass is unbeatable.",
      tips: [
        "Acclimatise before the Ala-Köl pass (~3,900 m) and check conditions — snow can linger and weather turns fast.",
        "Time your visit to catch Karakol's early-Sunday animal market, a genuine slice of local life.",
      ],
    },
    {
      name: "Lake Issyk-Kul & the Jeti-Ögüz canyons", category: "nature", coords: [42.4500, 77.1500], region: "north Tian Shan",
      description: "The world's second-largest alpine lake — warm, salty and never freezing — with red-rock canyons behind.",
      wiki: "Issyk-Kul",
      long:
        "Cradled between two snow-capped ranges of the Tian Shan, Issyk-Kul is the jewel at the centre of Kyrgyzstan — the second-largest alpine lake in the world, so deep and mildly saline that it never freezes (its name means 'warm lake'). Ringed by mountains yet warm enough to swim in through the summer, it has long been a resort, and its shores mix Soviet-era sanatoria, quiet beaches and jumping-off points for the mountains.\n\nBehind the southern shore, the foothills throw up spectacular red-rock formations: the ridged 'Seven Bulls' (Jeti-Ögüz) and the 'Broken Heart' cliffs glowing crimson above green valleys and hot springs, with pastures and waterfalls in the canyons beyond. Fairy-tale Skazka ('Fairy-Tale') Canyon nearby offers eroded rainbow rock. The lake makes an easy, scenic base — swimming and relaxing on the shore, riding into the red canyons, and using it as the gateway to Karakol and Song-Köl.",
      practical: [
        { label: "Getting there", value: "The lake is ~3–7 hrs from Bishkek depending on the shore; marshrutkas ring it. The quieter south shore (Kaji-Say, Tamga, Bokonbayevo) is more scenic than the resort-heavy north." },
        { label: "Jeti-Ögüz", value: "The 'Seven Bulls' and 'Broken Heart' red cliffs are near Karakol; a valley road leads up past pastures to a waterfall — an easy half-day, best in morning or evening light." },
        { label: "Also", value: "Swim in the warm lake in summer, visit the eroded Skazka (Fairy-Tale) Canyon and the petroglyphs at Cholpon-Ata, and try an eagle-hunting demonstration near Bokonbayevo." },
        { label: "When", value: "Jun–Sep for swimming and warm weather; the shore is quiet and cold out of season." },
      ],
      stay:
        "Choose the mellow south shore — a guesthouse or yurt camp near Tamga, Kaji-Say or Bokonbayevo — for beaches, red canyons and community tourism, over the busier northern resorts. Many hosts arrange horse trips into Jeti-Ögüz and eagle-hunting visits.",
      tips: [
        "Favour the south shore for scenery and authenticity; the north is more built-up and Soviet-resort in feel.",
        "Ride up the Jeti-Ögüz valley past the red cliffs to the pastures and waterfall for a lovely half-day.",
      ],
    },
    {
      name: "Burana Tower", category: "history", coords: [42.7461, 75.2497], region: "Chüy valley (near Bishkek)",
      description: "A lonely Silk Road minaret on the grassy steppe, with a field of ancient stone 'balbal' warrior figures.",
      wiki: "Burana Tower",
      long:
        "An easy day trip from Bishkek, the Burana Tower stands alone on the grassy Chüy valley floor — a squat, weathered brick minaret, the last upright remnant of the great Silk Road city of Balasagun, capital of the Karakhanid dynasty around the 10th–11th centuries. Once far taller before earthquakes toppled its top, it can still be climbed by a dark, steep internal stair for a view over the plain to the mountains beyond.\n\nWhat makes the site memorable is the open-air scatter of history around it: an evocative field of balbals — carved stone figures of ancient Turkic warriors, hands on their bellies, that once marked graves — gathered from across the steppe, along with petroglyphs and grave markers. Modest but atmospheric, Burana is the most accessible window onto Kyrgyzstan's Silk Road and pre-Islamic Turkic past, set against a classic Central Asian backdrop of steppe and snow peaks.",
      practical: [
        { label: "Getting there", value: "~80 km east of Bishkek near Tokmok (~1.5 hrs); reachable by shared taxi/marshrutka to Tokmok then a taxi, or on a half-day tour." },
        { label: "On site", value: "Climb the tower's steep internal ladder-stair (torch useful), wander the balbal (stone warrior) field, and see the small museum and petroglyphs. Small entry fee." },
        { label: "When", value: "Any time of year; spring and early summer are greenest, with snow still on the backdrop peaks." },
        { label: "Combine with", value: "The Chüy valley on the way to or from Issyk-Kul, or a half-day out from Bishkek." },
      ],
      stay:
        "Burana is a half-day from Bishkek, so base in the capital — a leafy, Soviet-planned city of parks and bazaars, with the best hotels, restaurants and trek-planning resources in the country. Use it to organise onward mountain trips.",
      tips: [
        "Bring a torch for the pitch-dark climb up the tower's narrow internal stair.",
        "Pair Burana with the drive out to Issyk-Kul so the trip does double duty.",
      ],
    },
    {
      name: "Osh & the Fergana valley", category: "history", coords: [40.5283, 72.7985], region: "southern Kyrgyzstan",
      description: "One of Central Asia's oldest cities, sprawled beneath a sacred mountain, with a fabled Silk Road bazaar.",
      wiki: "Osh",
      long:
        "In the fertile, densely peopled Fergana valley of the south, Osh is one of the oldest cities in Central Asia — reputedly over 3,000 years old — and feels a world away from Bishkek: more Uzbek, more Islamic, hotter and older. Its heart is the Jayma Bazaar, a sprawling, centuries-old Silk Road market strung along the river where you can lose hours among spices, knives, hats, fruit and the swirl of southern life.\n\nRising straight from the city centre is Sulaiman-Too, the 'Solomon's Throne' — a jagged, sacred limestone mountain that has drawn pilgrims for millennia and is the country's only UNESCO World Heritage cultural site, honeycombed with shrines, caves and a cave museum, with sweeping views over the city from its ridges. As the southern hub and a crossroads toward Uzbekistan, Tajikistan and the Pamir Highway, Osh is the gateway to a deeper, more ancient layer of Central Asia.",
      practical: [
        { label: "Getting there", value: "Fly from Bishkek (~40 min — far easier than the long mountain road), or take the spectacular but gruelling Bishkek–Osh highway over the passes." },
        { label: "See", value: "Sulaiman-Too sacred mountain (climb for the view and the cave museum), the vast Jayma Bazaar along the river, and the mixed Kyrgyz-Uzbek street life." },
        { label: "Gateway", value: "Osh is the launch point for the Pamir Highway into Tajikistan and routes toward Uzbekistan's Fergana cities — a key regional crossroads." },
        { label: "When", value: "Spring and autumn are pleasant; the Fergana summer is very hot. Respect the conservative, religious character of the south." },
      ],
      stay:
        "Stay near the bazaar and Sulaiman-Too so you can climb the sacred mountain at dawn or dusk and dive into the market early. Osh has guesthouses and hotels geared to Pamir Highway travellers; it's a natural place to rest and resupply before or after the mountains.",
      tips: [
        "Climb Sulaiman-Too early morning or golden hour for the light and the pilgrims, and duck into the cave museum inside it.",
        "Dress modestly here — the south is more conservative and religious than the north.",
      ],
    },
    {
      name: "Sary-Chelek Biosphere Reserve", category: "nature", coords: [41.8500, 71.9667], region: "Jalal-Abad (southwest)",
      description: "A deep emerald mountain lake in walnut-forested hills — a remote, roadless UNESCO biosphere.",
      wiki: "Sary-Chelek",
      long:
        "Tucked into the western Tian Shan in the country's southwest, the Sary-Chelek Biosphere Reserve protects one of Kyrgyzstan's most beautiful and least-visited landscapes: a deep, emerald-green lake ('Sary-Chelek' means 'yellow bowl') held among steep, forested ridges, part of a UNESCO-listed mosaic of seven lakes, alpine meadow and rare relict walnut-and-fruit forest — remnants of the wild woodlands that gave the world the walnut and the apple.\n\nRemote and hard to reach, with no crowds and few facilities, it rewards those who make the journey with tranquil boat trips on the main lake, walks through the walnut forests, and homestays in the surrounding villages. The nearby Arslanbob, the largest natural walnut forest on earth, adds to the region's appeal, with waterfalls and a warm Uzbek-village welcome. This is slow, off-the-map Kyrgyzstan — nature and village life at the country's quiet western edge.",
      practical: [
        { label: "Getting there", value: "Remote: reached from Jalal-Abad or via Arslanbob by shared transport then a hired car over rough roads; a guide or CBT arrangement helps a lot." },
        { label: "In the reserve", value: "A small entry fee; take a boat on the main lake, walk the forest trails, and visit the string of smaller lakes. Facilities are minimal — come prepared." },
        { label: "Combine with", value: "Arslanbob, the world's largest walnut forest, with its waterfalls, holy sites and Uzbek homestays — a rewarding pairing in the southwest." },
        { label: "When", value: "Late spring to autumn; the walnut harvest in autumn is a special, communal time in Arslanbob." },
      ],
      stay:
        "Base in a village homestay near the reserve or in Arslanbob (through Community-Based Tourism), where Uzbek families offer home-cooked meals, walnut-forest walks and a genuinely warm welcome. It's simple, remote and about as far off the tourist trail as Kyrgyzstan gets.",
      tips: [
        "Arrange transport and a homestay through CBT in Arslanbob or Jalal-Abad — independent access is hard.",
        "Visit in autumn to see (and join) the communal walnut harvest in the forests around Arslanbob.",
      ],
    },
  ],
};
