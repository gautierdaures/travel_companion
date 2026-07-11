// Country ID card — schema reference lives in data/index.js
export default {
  code: "ru",
  name: "Russia",
  flag: "🇷🇺",
  region: "Eurasia",
  tagline: "Onion domes, birch forests, and a continent's worth of railway.",
  tags: ["history", "architecture", "trek", "nature", "rail", "winter"],

  languages: {
    name: "Russian",
    note: "Written in Cyrillic — learn the alphabet first and reading signs gets far easier. Stress is unpredictable and changes meaning, so listen before you speak. A few words of Russian are warmly received.",
    phrases: [
      { en: "Hello", local: "Здравствуйте", pron: "ZDRAST-vuy-tye" },
      { en: "Hi (informal)", local: "Привет", pron: "pri-VYET" },
      { en: "Thank you", local: "Спасибо", pron: "spa-SEE-ba" },
      { en: "Please / You're welcome", local: "Пожалуйста", pron: "pa-ZHAL-sta" },
      { en: "Excuse me / Sorry", local: "Извините", pron: "iz-vi-NEE-tye" },
      { en: "Yes / No", local: "Да / Нет", pron: "da / nyet" },
      { en: "How much is it?", local: "Сколько стоит?", pron: "SKOL-ka STO-it?" },
      { en: "Where is…?", local: "Где…?", pron: "gdye…?" },
      { en: "Delicious!", local: "Вкусно!", pron: "VKOOS-na!" },
      { en: "Cheers!", local: "За здоровье!", pron: "za zda-RO-vye!" },
      { en: "Goodbye", local: "До свидания", pron: "da svi-DA-ni-ya" },
    ],
  },

  history: {
    summary:
      "Russia grew from the medieval trading city of Kievan Rus' into the largest country on Earth, spanning eleven time zones from the Baltic to the Pacific. Centuries of tsarist rule — from Ivan the Terrible through Peter the Great, who dragged the country westward and built St. Petersburg from a swamp — ended in the 1917 revolution and seven decades of Soviet communism. The USSR industrialized brutally, bore the heaviest losses of WWII, and raced the United States to space before collapsing in 1991. What remains is a culture of staggering literary, musical, and scientific achievement layered over a hard imperial history.",
    timeline: [
      { era: "882–1240 (Kievan Rus')", text: "A river-trade federation adopts Orthodox Christianity from Byzantium." },
      { era: "1547–1584 (Ivan IV)", text: "The first tsar centralizes power and begins the eastward push into Siberia." },
      { era: "1703 (St. Petersburg founded)", text: "Peter the Great builds a 'window to Europe' on the Baltic marshes." },
      { era: "1917 (Revolution)", text: "The tsar falls; Bolsheviks establish the world's first communist state." },
      { era: "1991 (Soviet collapse)", text: "The USSR dissolves into fifteen independent republics." },
    ],
  },

  books: [
    { title: "War and Peace", author: "Leo Tolstoy", year: "1869", note: "Napoleon's invasion through the eyes of five aristocratic families — the great Russian epic." },
    { title: "Crime and Punishment", author: "Fyodor Dostoevsky", year: "1866", note: "A feverish St. Petersburg of poverty, guilt, and redemption." },
    { title: "A Journey Into Russia", author: "Jens Mühling", year: "2012", note: "A German journalist wanders far from Moscow to meet ordinary Russians." },
    { title: "The Master and Margarita", author: "Mikhail Bulgakov", year: "1967", note: "The devil visits Soviet Moscow — surreal, funny, and quietly subversive." },
  ],

  meals: [
    { name: "Borscht", description: "Beetroot soup, ruby-red and served with a spoonful of smetana (sour cream); hot in winter, sometimes cold in summer.", tip: "Order it with a slab of dark rye bread and raw garlic on the side." },
    { name: "Pelmeni", description: "Small dumplings of minced meat, boiled and topped with butter, vinegar, or sour cream — Siberian comfort food." },
    { name: "Blini", description: "Thin crêpes rolled around anything from sour cream and caviar to jam; a whole festival (Maslenitsa) is built around them." },
    { name: "Beef Stroganoff", description: "Sautéed beef in a mustard-and-sour-cream sauce, born in 19th-century St. Petersburg kitchens." },
    { name: "Shchi", description: "Cabbage soup that has fed Russia for a thousand years — 'shchi and kasha are our food,' the saying goes." },
  ],

  climate: {
    unit: "°C",
    note: "Russia is vast — winters vary enormously from the mild Black Sea coast to Siberia.",
    regions: [
      {
        name: "Moscow & European Russia",
        coords: [55.75, 37.62], // Moscow
        key: "ru-moscow",
        note: "Cold, snowy winters and warm, lively summers. The white-nights weeks of June are the highlight.",
        best: [5, 6, 7, 8, 9],
        avoid: [12, 1, 2],
        months: [
          { mean: -7, rain: 36 }, { mean: -7, rain: 32 }, { mean: -3, rain: 33 },
          { mean: 5, rain: 36 }, { mean: 13, rain: 58 }, { mean: 17, rain: 71 },
          { mean: 19, rain: 76 }, { mean: 18, rain: 66 }, { mean: 12, rain: 57 },
          { mean: 6, rain: 58 }, { mean: -1, rain: 44 }, { mean: -5, rain: 38 },
        ],
      },
      {
        name: "Siberia · Novosibirsk & Irkutsk",
        coords: [55.03, 82.92], // Novosibirsk
        key: "ru-siberia",
        note: "Brutally cold for half the year; a short, warm summer is the only comfortable window.",
        best: [6, 7, 8],
        avoid: [11, 12, 1, 2, 3],
        months: [
          { mean: -17, rain: 27 }, { mean: -14, rain: 20 }, { mean: -7, rain: 26 },
          { mean: 3, rain: 31 }, { mean: 11, rain: 42 }, { mean: 17, rain: 55 },
          { mean: 19, rain: 70 }, { mean: 17, rain: 55 }, { mean: 10, rain: 49 },
          { mean: 3, rain: 49 }, { mean: -7, rain: 46 }, { mean: -14, rain: 41 },
        ],
      },
      {
        name: "Black Sea coast · Sochi",
        coords: [43.60, 39.73], // Sochi
        key: "ru-sochi",
        note: "Humid subtropical and mild all year; summer is peak beach season, winters rarely freeze.",
        best: [6, 7, 8, 9],
        avoid: [],
        months: [
          { mean: 5, rain: 148 }, { mean: 5, rain: 111 }, { mean: 7, rain: 114 },
          { mean: 12, rain: 89 }, { mean: 17, rain: 89 }, { mean: 21, rain: 81 },
          { mean: 23, rain: 84 }, { mean: 24, rain: 70 }, { mean: 20, rain: 111 },
          { mean: 16, rain: 138 }, { mean: 11, rain: 132 }, { mean: 7, rain: 148 },
        ],
      },
    ],
  },

  events: [
    { name: "Maslenitsa (Butter Week)", when: "Late Feb – early Mar", months: [2, 3], kind: "go", description: "A week of blini, sledding, and bonfires to see off winter before Lent — folk festivals in every city and open-air museum." },
    { name: "White Nights", when: "Jun – early Jul", months: [6, 7], kind: "go", description: "In St. Petersburg the sun barely sets; the city stays out all night for ballet, concerts, and the Scarlet Sails fireworks." },
    { name: "Victory Day", when: "May 9", months: [5], kind: "note", description: "Huge military parades and crowds; central Moscow around Red Square is closed off and hotels fill — plan around the lockdown." },
    { name: "New Year & Orthodox Christmas", when: "Dec 31 – Jan 8", months: [12, 1], kind: "note", description: "The biggest holiday of the year: beautiful lights and markets, but offices, banks, and many services shut for the first week-plus of January." },
  ],

  places: [
    {
      name: "Red Square & St. Basil's", category: "architecture", coords: [55.7525, 37.6231], region: "Moscow",
      description: "The swirling candy-colored domes of St. Basil's over the vast square at the heart of the capital — go at night when it's floodlit.",
      wiki: "Saint Basil's Cathedral",
      long:
        "Red Square is the symbolic centre of Russia, a vast cobbled space hemmed by the crenellated Kremlin wall, the ornate GUM department store, Lenin's granite mausoleum, and — its unmistakable exclamation mark — St. Basil's Cathedral. Commissioned by Ivan the Terrible in the 1550s, St. Basil's is a riot of nine chapels crowned with swirling, candy-striped onion domes, each one different, unlike anything else on earth.\n\nThe interior is a surprise: not one grand nave but a warren of narrow, frescoed chapels and stairways. Come at night, when the domes and the square are floodlit and the crowds thin, for the view that fixes Moscow in the mind. The adjoining Kremlin — cathedrals, armoury, and seat of power — deserves its own half-day.",
      practical: [
        { label: "Getting there", value: "Central Moscow; metro to Okhotny Ryad or Ploshchad Revolyutsii. The square itself is free and open." },
        { label: "St. Basil's", value: "~800–1,000 ₽ (~$10) for the cathedral interior; the Kremlin is a separate ticket." },
        { label: "Time to allow", value: "An hour for the square; a half-day to add the Kremlin cathedrals and Armoury." },
        { label: "When", value: "Come after dark, when the domes and the square are floodlit and the crowds thin." },
      ],
      stay:
        "Base in the historic centre (Kitay-Gorod or Tverskaya) so Red Square, the Kremlin and the palatial metro stations are all on foot. Give yourself an evening to walk the floodlit square and the riverside — Moscow is at its most magical after dark.",
      tips: [
        "Foreign cards may not work — carry cash (rubles) and expect to pay that way.",
        "Ride the metro as a sight in itself: the central-ring stations are underground palaces.",
      ],
    },
    {
      name: "Hermitage Museum", category: "architecture", coords: [59.9398, 30.3146], region: "St. Petersburg",
      description: "Catherine the Great's Winter Palace, now one of the world's greatest art museums; give it a full day and still miss most of it.",
      wiki: "Hermitage Museum",
      long:
        "The Hermitage is at once one of the world's greatest art museums and one of its most opulent buildings — the Winter Palace of the tsars, a green-and-white Baroque confection on the Neva embankment begun for the Empress Elizabeth and expanded by Catherine the Great, who started the collection. Its millions of objects range from Egyptian antiquities and Scythian gold to Rembrandt, Leonardo, and a peerless hoard of Impressionist and Matisse canvases.\n\nThe rooms themselves are the other half of the show: the gilded Jordan Staircase, the malachite hall, parquet floors and chandeliered enfilades. No one sees it all — pick a couple of wings, and take time simply to stand in the state rooms where the Romanovs held court until 1917.",
      practical: [
        { label: "Getting there", value: "On Palace Square, central St. Petersburg; metro Admiralteyskaya." },
        { label: "Tickets", value: "~500 ₽ (~$6); book online ahead to skip the queue." },
        { label: "Time to allow", value: "A full day, and you'll still miss most of it — pick two or three wings." },
        { label: "When", value: "Closed Mondays; go at opening to reach the Rembrandts and state rooms before the groups." },
      ],
      stay:
        "Stay in the walkable historic core near Nevsky Prospekt or the Griboyedov Canal, so the Hermitage, the Church on Blood, and the river embankments are all a stroll away. In the June white nights, a central base lets you wander the bridges and canals through the endless dusk.",
      tips: [
        "Book online to skip the long ticket line, then go straight to the wing you care about first.",
        "Don't try to see it all — choose a couple of wings and linger in the state rooms.",
      ],
    },
    {
      name: "Lake Baikal", category: "nature", coords: [53.5587, 108.165], region: "Siberia",
      description: "The world's deepest and oldest lake — in winter it freezes into transparent turquoise ice you can walk on.",
      wiki: "Lake Baikal",
      long:
        "Baikal is superlative in every direction: the world's deepest lake, its oldest at some 25 million years, and holder of a fifth of all the unfrozen fresh water on the planet — so much, and so clear, that you can see 40 metres down. Ringed by taiga and mountains in southern Siberia, it teems with species found nowhere else, including the nerpa, the world's only freshwater seal.\n\nSummer brings hiking and boat trips from the wooden villages of Olkhon Island, the lake's shamanic heart. But Baikal's magic peaks in late winter, when it freezes into a metre of astonishingly transparent turquoise ice, laced with white cracks and stacked shards, that you can walk, skate, or drive across. The Trans-Siberian skirts its southern shore on the scenic Circum-Baikal line.",
      practical: [
        { label: "Getting there", value: "Fly or take the Trans-Siberian to Irkutsk; then ~4–6 hrs to Olkhon Island or ~1 hr to Listvyanka." },
        { label: "Time to allow", value: "3–4 days minimum on Olkhon; longer for the shoreline trails." },
        { label: "Trek", value: "The Great Baikal Trail runs along the shore; easy day hikes leave from Listvyanka and Olkhon." },
        { label: "When to go", value: "Summer for hiking and boats; late Feb–Mar for the astonishing transparent ice." },
      ],
      stay:
        "Base on Olkhon Island, the lake's shamanic heart, in a wooden guesthouse in Khuzhir village — banya, home cooking, and the shore a short walk away. It's a place to settle for several days: hike the capes, take a boat, and slow to the lake's rhythm rather than day-tripping from Irkutsk.",
      tips: [
        "For the famous turquoise ice, come in late February or March, not the deep-freeze of midwinter.",
        "Roads to Olkhon are rough and involve a ferry — allow most of a day each way.",
      ],
    },
    {
      name: "Trans-Siberian Railway", category: "offbeat", coords: [56.009, 92.8526], region: "Moscow to Vladivostok",
      description: "Six days and 9,000 km across the continent; the dining car and platform babushkas selling smoked fish are the real journey.",
      wiki: "Trans-Siberian Railway",
      long:
        "The Trans-Siberian is the greatest train journey on earth: 9,289 kilometres and seven time zones from Moscow to the Pacific at Vladivostok, or branching south via the Trans-Mongolian to Beijing. Riding it end to end takes the better part of a week, the birch and taiga unspooling past the window, marked off by the samovar of hot water at the end of every carriage and the babushkas selling smoked omul and dumplings on the platforms.\n\nThe journey, not the destination, is the point — and the best way to do it is in stages, breaking the trip at cities like Kazan, Yekaterinburg (where the Romanovs met their end), Irkutsk and Lake Baikal. In the compartments, shared tea, food and half-translated conversation with fellow travellers become the real Russia.",
      practical: [
        { label: "The route", value: "Moscow–Vladivostok is ~9,289 km / 6–7 days nonstop; berths are booked via Russian Railways (RZD)." },
        { label: "How to do it", value: "Break the journey in stages — Kazan, Yekaterinburg, Irkutsk/Baikal — rather than riding straight through." },
        { label: "Classes", value: "2nd class (kupe, 4-berth) is the sociable sweet spot; 3rd (platskart) is open and even more local." },
        { label: "Time to allow", value: "2–3 weeks to do it justice with worthwhile stops." },
      ],
      stay:
        "The train is half your accommodation — a berth in a 4-person kupe with a samovar of hot water at the carriage end. Between legs, stay in city-centre guesthouses at your stopovers; the shared tea, food and half-translated conversation with fellow passengers is the real Russia here.",
      tips: [
        "Stock up on instant noodles, tea and snacks — and buy smoked omul and dumplings from the platform babushkas.",
        "Book kupe berths ahead in summer; lower berths and end compartments are the most comfortable.",
      ],
    },
    {
      name: "Kamchatka", category: "nature", coords: [53.25, 158.83], region: "Russian Far East",
      description: "A remote peninsula of live volcanoes, geysers, and brown bears — reachable only by air, and worth every ruble.",
      wiki: "Kamchatka Peninsula",
      long:
        "Kamchatka is one of the last great wildernesses: a volcanic peninsula in Russia's far east, closer to Alaska than to Moscow and closed to outsiders entirely in the Soviet era. More than 300 volcanoes, some 30 of them active, line its spine; between them lie geyser valleys, hot springs, tundra, and rivers so thick with spawning salmon that they support one of the world's densest populations of brown bears.\n\nThere are almost no roads, so travel is by helicopter, boat, or all-terrain vehicle, and trips are costly and weather-dependent — but the payoff is landscapes few people ever see: steaming craters, the Valley of the Geysers, bears fishing at close range. It's a serious expedition destination for hikers, volcano-climbers, and wildlife-watchers rather than a casual stop.",
      practical: [
        { label: "Getting there", value: "Fly to Petropavlovsk-Kamchatsky (~9 hrs from Moscow); there's no road in from the rest of Russia." },
        { label: "Getting around", value: "Almost no roads — travel is by helicopter, 6-wheel truck, or boat, on organised trips." },
        { label: "Cost", value: "Expensive and weather-dependent; a helicopter day to the Valley of the Geysers runs into the hundreds of dollars." },
        { label: "Time to allow", value: "A week or more, built around a guided expedition." },
      ],
      stay:
        "This is expedition territory: multi-day guided trips using wilderness camps, mountain huts, and lodges near the volcanoes and hot springs. Base in Petropavlovsk between excursions, but the point is to get out — bears fishing the salmon runs, steaming craters, the geyser valley — with an operator who handles the logistics.",
      tips: [
        "Book a reputable operator well ahead; independent travel here is impractical.",
        "Build in buffer days — helicopter and boat trips are routinely grounded by weather.",
      ],
    },
    {
      name: "Kizhi Pogost", category: "history", coords: [62.0678, 35.2242], region: "Lake Onega, Karelia",
      description: "A wooden church of 22 domes built without a single nail, on an island in the northern lakes.",
      wiki: "Kizhi Pogost",
      long:
        "On a low island in Lake Onega, in the lake country of Karelia, stands one of the masterpieces of Russian carpentry: the Church of the Transfiguration, an 18th-century wooden church topped by 22 silvery aspen-shingled domes, stacked in tiers and — according to tradition — raised without a single iron nail. Beside it sit a smaller winter church and a bell tower, the ensemble enclosed by a log fence.\n\nThe island has become an open-air museum, with old peasant houses, chapels and windmills brought from around the region to show how the northern Russian countryside once lived and built in wood. Reached by hydrofoil from Petrozavodsk across the lake, it makes a memorable day out into a Russia older than stone and empire.",
      practical: [
        { label: "Getting there", value: "Hydrofoil from Petrozavodsk across Lake Onega (~1.25 hrs); Petrozavodsk is an overnight train from Moscow / St. Petersburg." },
        { label: "Entrance", value: "Island museum ~800 ₽ (~$9); the hydrofoil is a separate, weather-dependent fare." },
        { label: "Time to allow", value: "A full day trip; hydrofoils run in the ice-free season (roughly late May–Sep)." },
        { label: "Season", value: "Summer only for the boats; winter access is by snowmobile or hovercraft tour." },
      ],
      stay:
        "Most visit on a day trip from Petrozavodsk, which makes a pleasant lakeside overnight base with simple hotels and guesthouses. To go slower, the wider Karelian lake country — Ruskeala's marble canyon, wooden villages — rewards a few unhurried days by car.",
      tips: [
        "Hydrofoils are weather-dependent — build in a spare day in case of cancellation.",
        "Combine with Ruskeala Mountain Park and Karelia's other wooden-architecture sites.",
      ],
    },
    {
      name: "Suzdal", category: "history", coords: [56.4194, 40.4533], region: "Golden Ring",
      description: "A tiny town of white monasteries and wooden houses that feels like pre-revolutionary Russia frozen in place.",
      wiki: "Suzdal",
      long:
        "Suzdal is the jewel of the Golden Ring, the cluster of ancient towns north-east of Moscow that were the cradle of the Russian state. Almost untouched by industry or high-rise, it is a low-rise idyll of white-walled monasteries, whitewashed churches with blue star-spangled domes, wooden cottages with carved window frames, and meadows where cattle still graze along the river.\n\nWithin walking distance you'll find the fortified Saviour Monastery of St. Euthymius, the Kremlin with its Nativity Cathedral, and an open-air museum of wooden architecture. It is deliberately, deeply old-fashioned — famous for its mead (medovukha), its pickles, and its stillness — and a night here, especially under snow, is the closest you'll come to pre-revolutionary provincial Russia.",
      practical: [
        { label: "Getting there", value: "~3.5–4 hrs from Moscow: train to Vladimir, then a ~45 min bus or taxi to Suzdal (no rail station of its own)." },
        { label: "Entrance", value: "Individual sites ~150–400 ₽; a combined museum ticket covers the kremlin and monasteries." },
        { label: "Time to allow", value: "An overnight — Suzdal is about atmosphere, especially at dawn and dusk." },
        { label: "Don't miss", value: "The wooden-architecture museum, the Saviour Monastery of St. Euthymius, and local medovukha (mead)." },
      ],
      stay:
        "Stay overnight in a wooden guesthouse or small country hotel among the meadows and onion domes — a night here, especially under snow, is the closest you'll come to pre-revolutionary provincial Russia. Sample the mead and pickles the town is known for, and wake to a near-empty kremlin.",
      tips: [
        "Pair Suzdal with Vladimir on the same trip for a classic Golden Ring loop.",
        "Overnight to have the monasteries and river meadows to yourself at first light.",
      ],
    },
    {
      name: "Church of the Savior on Blood", category: "architecture", coords: [59.9400, 30.3289], region: "St. Petersburg",
      description: "A riot of mosaic and onion domes built on the spot where Tsar Alexander II was assassinated.",
      wiki: "Church of the Savior on Blood",
      long:
        "Rising in deliberate, colourful contrast to St. Petersburg's restrained neoclassicism, the Church of the Savior on Spilled Blood was built on the exact spot where Tsar Alexander II — the 'Tsar Liberator' who freed the serfs — was killed by a bomb in 1881. Its clustered, multicoloured onion domes consciously echo St. Basil's in Moscow, a Russian-revival answer to the Italianate city around it.\n\nThe interior is the revelation: over 7,000 square metres of mosaic, covering every wall, pillar and vault with biblical scenes in shimmering colour, one of the largest collections of mosaic art anywhere. A canopied shrine inside preserves the very cobblestones on which the tsar fell. It's compact, dazzling, and best paired with a walk along the adjacent Griboyedov Canal.",
      practical: [
        { label: "Getting there", value: "Off Nevsky Prospekt by the Griboyedov Canal, central St. Petersburg; metro Nevsky Prospekt." },
        { label: "Entrance", value: "~450 ₽ (~$5); evening tickets in summer are quieter and beautifully lit." },
        { label: "Time to allow", value: "45 min–1 hour for the mosaic interior." },
        { label: "When", value: "Closed Wednesdays; mornings are calmest for the interior." },
      ],
      stay:
        "Right in the walkable heart of St. Petersburg — see the Hermitage guide for basing yourself near Nevsky and the canals. This church, the Hermitage, the Russian Museum and the embankments are all within a short, lovely stroll of one another.",
      tips: [
        "Buy an evening ticket in summer for smaller crowds under the lit mosaics.",
        "Walk the adjoining Griboyedov Canal — one of the city's prettiest stretches.",
      ],
    },
    {
      name: "Peterhof", category: "architecture", coords: [59.8833, 29.9000], region: "near St. Petersburg",
      description: "Peter the Great's seaside palace and its Grand Cascade of gilded, gravity-fed fountains — 'the Russian Versailles'.",
      wiki: "Peterhof Palace",
      long:
        "Peter the Great built Peterhof on the Gulf of Finland as his answer to Versailles, a palace-and-garden statement of Russia's arrival among the European powers. Its glory is the Grand Cascade: a monumental staircase of gilded statues and 64 fountains tumbling down to a canal that runs straight to the sea, the whole system fed entirely by gravity from springs on the heights above, without a single pump.\n\nBeyond the cascade spread formal Lower Gardens studded with trick fountains that soak the unwary, pavilions, and Peter's own modest seaside villa, Monplaisir. Devastated in the Second World War, it has been painstakingly restored. Reach it by hydrofoil across the gulf from the city centre — the approach from the water is the way it was meant to be seen. The fountains run summer only.",
      practical: [
        { label: "Getting there", value: "Hydrofoil from central St. Petersburg across the gulf (~30 min) — the intended approach; or by bus/train." },
        { label: "Entrance", value: "Lower Gardens (the fountains) ~600–900 ₽; the Grand Palace interior is a separate, pricier ticket." },
        { label: "Season", value: "The fountains run roughly late April/May to mid-October only — check before a winter visit." },
        { label: "Time to allow", value: "Half a day for the cascade and gardens; more with the palace." },
      ],
      stay:
        "Visited as a half-day from St. Petersburg, so base in the city (see the Hermitage guide). Take the hydrofoil out across the gulf — arriving from the water, as it was meant to be seen — and time it for when the fountains switch on mid-morning.",
      tips: [
        "Come by hydrofoil for the sea approach the palace was designed around.",
        "Check the fountain season — they're switched off through the winter half of the year.",
      ],
    },
    {
      name: "Kazan Kremlin", category: "architecture", coords: [55.7989, 49.1064], region: "Kazan, Tatarstan",
      description: "A white-walled citadel where an Orthodox cathedral and a great mosque stand side by side.",
      wiki: "Kazan Kremlin",
      long:
        "Kazan, capital of the Tatar republic on the Volga, is where Orthodox Russia and the Muslim Tatar world meet, and nowhere is that clearer than inside its white-walled Kremlin. Within the same citadel stand the tilting Söyembikä Tower, the Orthodox Annunciation Cathedral, and the vast blue-domed Qol-Şärif Mosque, rebuilt to honour the mosque destroyed when Ivan the Terrible took the city in 1552.\n\nThe result is a genuinely multicultural monument, and the city around it is one of Russia's most appealing — a lively, prosperous place with its own Tatar language, cuisine (try echpochmak pastries and horse-meat dishes), and pedestrian streets. As a stop on the Trans-Siberian or a weekend from Moscow, Kazan offers a very different face of the country.",
      practical: [
        { label: "Getting there", value: "Kazan is a Trans-Siberian stop and a short flight or ~3.5 hr high-speed train from Moscow." },
        { label: "Entrance", value: "The kremlin grounds are free; the Qol-Şärif Mosque and the museums charge small fees." },
        { label: "Time to allow", value: "Half a day for the kremlin; a full day for the city and its Tatar food." },
        { label: "Don't miss", value: "The blue-domed mosque, the leaning Söyembikä Tower, and pedestrian Bauman Street." },
      ],
      stay:
        "Base near pedestrian Bauman Street in the walkable centre, within reach of both the kremlin and the old Tatar quarter (Staro-Tatarskaya Sloboda) by the lake. Give Kazan a night or two to eat its distinct Tatar food and feel a very different, Muslim-and-Orthodox face of Russia.",
      tips: [
        "Try Tatar specialities — echpochmak, chak-chak, and kazylyk — in the old Tatar quarter.",
        "It's an easy, rewarding break of journey on the Trans-Siberian out of Moscow.",
      ],
    },
    {
      name: "Veliky Novgorod", category: "history", coords: [58.5220, 31.2700], region: "north-west Russia",
      description: "The medieval merchant republic where Russia began — a kremlin, ancient churches, and early democracy.",
      wiki: "Veliky Novgorod",
      long:
        "Before Moscow rose, Novgorod 'the Great' was the beating heart of the Russian lands: a wealthy medieval trading republic plugged into the Hanseatic network, governed not by a prince alone but by a citizens' assembly, the veche. Spared the Mongol sack, it preserves some of the oldest architecture in Russia, including the 11th-century Cathedral of St. Sophia inside its riverside kremlin.\n\nScattered through the town and the countryside beyond are churches from the 12th to 14th centuries, some still bearing fragments of medieval fresco, and the Millennium of Russia monument sums up the national story in bronze. Quiet, walkable and steeped in history, Novgorod is an easy and rewarding trip from St. Petersburg for anyone curious about where Russia came from.",
      practical: [
        { label: "Getting there", value: "~3 hrs from St. Petersburg by bus or the fast Lastochka train — a good day trip or overnight." },
        { label: "Entrance", value: "The kremlin grounds and St. Sophia Cathedral are free to enter; museums charge small fees." },
        { label: "Time to allow", value: "A full day, or an overnight to add the outlying churches and open-air museum." },
        { label: "Don't miss", value: "11th-century St. Sophia, the Millennium of Russia monument, and the Vitoslavlitsy wooden museum." },
      ],
      stay:
        "An easy day trip from St. Petersburg, but an overnight in the quiet, walkable centre lets you add the medieval churches across the river and the Yuriev Monastery and wooden-architecture museum just outside town — a gentle, deeply historic pause.",
      tips: [
        "The fast Lastochka train from St. Petersburg makes it an easy day out.",
        "Cross the river to the Yaroslav's Court churches and the Vitoslavlitsy open-air museum.",
      ],
    },
    {
      name: "Solovetsky Islands", category: "history", coords: [65.0250, 35.7100], region: "White Sea",
      description: "A remote fortress-monastery in the sub-Arctic — holy site turned first Soviet labour camp.",
      wiki: "Solovetsky Monastery",
      long:
        "Far north in the White Sea, the Solovetsky archipelago holds one of Russia's most powerful and painful places. A great fortified Orthodox monastery, founded by monks in the 15th century and girdled with massive boulder walls, became a major spiritual centre and pilgrimage site — and then, after the revolution, the prototype of the Soviet gulag, the first and one of the cruellest of the labour camps.\n\nTo visit is to hold both histories at once: the restored monastery and its churches, the sub-Arctic landscape of lakes and canals the monks engineered, the botanical garden improbably grown at this latitude, and the memorials to those who died in the camp. Reached by boat or a small plane in the short summer, it is remote, moving, and unforgettable.",
      practical: [
        { label: "Getting there", value: "Fly to the islands from Arkhangelsk, or take a boat from Kem/Rabocheostrovsk (~2 hrs) in summer." },
        { label: "Season", value: "Summer only (roughly Jun–Aug); the White Sea and access freeze in winter." },
        { label: "Time to allow", value: "2–3 days for the monastery, the monk-built canals, and the outer islands." },
        { label: "Getting around", value: "Bicycles and boats reach the hermitages, the botanical garden, and the stone labyrinths." },
      ],
      stay:
        "The one village has modest guesthouses and a hotel — stay 2–3 nights, as the weather and boats make rushing unwise. It's a place to hold two histories at once: the restored monastery and the gulag memorials. Cycle the monk-built canals and out to the sub-Arctic hermitages in between.",
      tips: [
        "Plan around the short summer season and build in weather-buffer days.",
        "Rent a bicycle to reach the botanical garden, canals, and outlying sketes.",
      ],
    },
    {
      name: "Curonian Spit", category: "nature", coords: [55.2800, 20.9600], region: "Kaliningrad, Baltic coast",
      description: "A narrow ribbon of towering sand dunes and pine forest between lagoon and Baltic Sea.",
      wiki: "Curonian Spit",
      long:
        "The Curonian Spit is a slender, 98-kilometre finger of sand dividing a calm lagoon from the open Baltic, shared between Russia's Kaliningrad exclave and Lithuania. Never more than a few kilometres wide, it is a shifting landscape of some of Europe's highest 'wandering' dunes, pine forest planted to hold the sand, quiet fishing villages, and huge flocks of migrating birds funnelled along the coast each spring and autumn.\n\nYou come here to walk the dune ridges with the sea on one side and the lagoon on the other, cycle the forest paths, and slow down in the amber-trading villages. It's a UNESCO site prized as much for the centuries of human effort to keep the sand from swallowing the settlements as for its natural beauty — a peaceful, otherworldly corner of the Baltic.",
      practical: [
        { label: "Getting there", value: "From Kaliningrad, ~1.5 hrs by bus or car to Zelenogradsk, then along the spit; a park fee applies to vehicles." },
        { label: "Time to allow", value: "A day trip, or an overnight in a spit village for dawn on the dunes." },
        { label: "Walks", value: "Boardwalk trails climb the Efa dune; birdwatching peaks during the spring and autumn migrations." },
        { label: "Note", value: "Kaliningrad is a detached exclave — check the current entry/visa rules before planning." },
      ],
      stay:
        "Stay in one of the quiet fishing-and-amber villages on the spit (Rybachy, Morskoye) rather than day-tripping, so you can walk the dune ridges at dawn with the Baltic on one side and the lagoon on the other. It's an otherworldly, slow corner made for cycling the forest paths and doing very little.",
      tips: [
        "Walk the dune boardwalks early or late; midday is busiest and hottest on the sand.",
        "Kaliningrad is a separate exclave — confirm the current entry requirements well ahead.",
      ],
    },
    {
      name: "Altai Mountains", category: "nature", coords: [50.7000, 86.2000], region: "southern Siberia",
      description: "Turquoise rivers, glaciated peaks, and nomad valleys where Russia meets Mongolia and Kazakhstan.",
      wiki: "Altai Mountains",
      long:
        "Where Russia, Kazakhstan, Mongolia and China meet, the Altai rises into a pristine world of glaciated peaks — crowned by Belukha, the range's sacred high point — turquoise glacial rivers, larch forest, and high steppe grazed by horses and herders. Little touched by industry, it's revered in local spiritual traditions and rich in archaeology, from Scythian burial mounds to the frozen 'Ice Maiden' tomb found on the Ukok Plateau.\n\nThe Russian Altai is prime territory for multi-day trekking, horse-riding, and rafting, based out of villages along the Chuya Highway — itself rated one of the world's great drives. Remote and lightly visited, it rewards travellers willing to camp, ride, and walk into some of Siberia's most beautiful and least-crowded backcountry.",
      practical: [
        { label: "Getting there", value: "Fly to Gorno-Altaysk, then drive the Chuya Highway — a great journey in itself — deeper into the range." },
        { label: "Time to allow", value: "A week or more for trekking, riding, or rafting." },
        { label: "Trek", value: "Multi-day treks toward Belukha, horse-riding, and Katun-river rafting, based from highway villages." },
        { label: "Note", value: "Remote and lightly served; a guide or organised trip is wise for the backcountry." },
      ],
      stay:
        "Base in villages and turbaza (rustic guest camps) along the Chuya Highway, and camp or use trekkers' huts on the multi-day routes toward Belukha. This is Siberia's outdoor heartland — remote, lightly visited, and best for travellers happy to ride, walk, and sleep close to the land.",
      tips: [
        "The Chuya Highway itself is rated one of the world's great drives — take your time on it.",
        "Go with a guide for the high routes; the backcountry is remote and weather-exposed.",
      ],
    },
    {
      name: "Mount Elbrus", category: "nature", coords: [43.3550, 42.4392], region: "Caucasus",
      description: "The highest peak in Europe, a twin-coned dormant volcano rising above the Caucasus.",
      wiki: "Mount Elbrus",
      long:
        "At 5,642 metres, the twin-summited, permanently snow-capped Mount Elbrus is the highest mountain in the Caucasus and, by the usual reckoning, in all of Europe — one of the 'Seven Summits'. A dormant volcano, its glaciated cones dominate the range on Russia's southern border, and a cable car and chairlifts climb surprisingly high up its southern flank toward the huts from which climbers make their pre-dawn summit bids.\n\nReaching the top is a serious, altitude-affected undertaking best done with a guide and proper acclimatisation, but the Baksan valley below rewards non-climbers too, with hiking, hot springs, and the wild Caucasus scenery. It offers a completely different Russia from the birch forests of the north — high, dramatic, and southern.",
      practical: [
        { label: "Getting there", value: "Fly to Mineralnye Vody, then ~3 hrs to the Baksan valley and the Azau cable-car base." },
        { label: "Cable car", value: "Lifts climb the south flank to ~3,800 m for non-climbers wanting the high views." },
        { label: "Climb", value: "Summiting (5,642 m) is a serious, guided, altitude-affected undertaking needing acclimatisation." },
        { label: "Time to allow", value: "A day for the cable car and valley; a week-plus for a guided summit attempt." },
      ],
      stay:
        "Non-climbers base in the Baksan valley villages (Terskol, Azau) among the hiking trails and hot springs, riding the cable car up for the views. Climbers stay in the mountain huts — the Barrels or higher — to acclimatise before a pre-dawn summit bid, always with a guide.",
      tips: [
        "You can ride the cable car high up Elbrus without climbing — a great half-day for the views.",
        "For the summit, budget several days to acclimatise and go with a certified guide.",
      ],
    },
    {
      name: "Sergiev Posad", category: "history", coords: [56.3000, 38.1300], region: "Golden Ring",
      description: "The spiritual heart of Russian Orthodoxy — a working monastery of blue-and-gold domes near Moscow.",
      wiki: "Sergiev Posad",
      long:
        "An easy day trip north of Moscow, Sergiev Posad grew up around the Trinity Lavra of St. Sergius, the most important monastery in Russia and the spiritual centre of the Orthodox Church. Founded in the 14th century by St. Sergius of Radonezh, revered as a unifier of the Russian lands, it is a walled ensemble of cathedrals, chapels and bell towers — the blue, gold-starred domes of the Cathedral of the Assumption among the most photographed in the country.\n\nStill a living monastery and seminary, it hums with black-robed monks and pilgrims queuing to venerate St. Sergius's relics or to draw holy water. As the closest of the Golden Ring towns, it's the simplest way to sample old religious Russia without leaving Moscow's orbit for more than a day.",
      practical: [
        { label: "Getting there", value: "~1.5 hrs from Moscow: suburban elektrichka train from Yaroslavsky station, or the express." },
        { label: "Entrance", value: "The Trinity Lavra grounds are free; some cathedrals and the museum charge small fees." },
        { label: "Time to allow", value: "A half-day trip." },
        { label: "Don't miss", value: "The blue, gold-starred domes of the Assumption Cathedral and the pilgrims venerating St. Sergius." },
      ],
      stay:
        "The closest Golden Ring town to Moscow and an easy half-day, so most people stay in the capital. To slow down, combine it with an overnight loop taking in Pereslavl-Zalessky or Rostov Veliky — other jewel-like old towns on the road north.",
      tips: [
        "Dress modestly — it's a working monastery; women cover their heads inside the churches.",
        "Go on a weekday morning to dodge both the pilgrim queues and the tour coaches.",
      ],
    },
    {
      name: "Vladimir", category: "history", coords: [56.1290, 40.4070], region: "Golden Ring",
      description: "A former medieval capital with 12th-century white-stone cathedrals and a triumphal Golden Gate.",
      wiki: "Vladimir, Russia",
      long:
        "For a couple of centuries in the Middle Ages, before Moscow eclipsed it, Vladimir was effectively the capital of Russia, and it preserves the finest architecture of that age. Its 12th-century white-stone churches — the Dormition Cathedral, whose frescoes include work by the great icon painter Andrei Rublev, and the exquisitely carved Cathedral of St. Demetrius — are UNESCO-listed masterpieces of pre-Mongol Rus.\n\nThe city's Golden Gate, a surviving triumphal gateway from the same era, still straddles the main street. Just outside town, the tiny Church of the Intercession on the Nerl stands alone in a water meadow, one of the most beloved and perfectly proportioned buildings in all of Russia. Vladimir pairs naturally with nearby Suzdal for a Golden Ring loop.",
      practical: [
        { label: "Getting there", value: "~1.75 hrs from Moscow by fast Strizh/Lastochka train — an easy day trip or the gateway to Suzdal." },
        { label: "Entrance", value: "The Golden Gate and cathedrals charge small fees; the Dormition Cathedral holds Rublev frescoes." },
        { label: "Time to allow", value: "Half a day for Vladimir; combine with Suzdal for an overnight loop." },
        { label: "Don't miss", value: "The lone Church of the Intercession on the Nerl, in its water meadow just outside town." },
      ],
      stay:
        "Most pair Vladimir with Suzdal (45 min away) and sleep in the latter's wooden guesthouses — see that entry. If you overnight in Vladimir itself, base near the Golden Gate and walk out at dusk to the perfectly proportioned Church of the Intercession on the Nerl in its meadow.",
      tips: [
        "Combine with Suzdal for the classic two-town Golden Ring overnight.",
        "Walk out to the Church of the Intercession on the Nerl — 20 min across the meadow, and worth it.",
      ],
    },
  ],
};
