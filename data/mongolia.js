// Country ID card — schema reference lives in data/index.js
export default {
  code: "mn",
  name: "Mongolia",
  flag: "🇲🇳",
  region: "Central / East Asia",
  tagline: "The land of blue sky and Genghis Khan — endless steppe, the Gobi, and the world's last great nomads.",
  tags: ["nature", "nomads", "history", "trek", "wildlife", "slow travel"],

  languages: {
    name: "Mongolian",
    note: "A Mongolic language written in Cyrillic (the vertical traditional script survives in art and Inner Mongolia). Throaty and rolling, it's spoken across vast distances by few people. A handful of words earns broad smiles; hospitality to travellers is a deep, near-sacred tradition on the steppe.",
    phrases: [
      { en: "Hello", local: "Сайн байна уу", pron: "sain bai-NOO" },
      { en: "Thank you", local: "Баярлалаа", pron: "ba-yar-la-LAA" },
      { en: "Yes / No", local: "Тийм / Үгүй", pron: "teem / oo-GOOY" },
      { en: "Excuse me / Sorry", local: "Уучлаарай", pron: "ooch-la-RAI" },
      { en: "How much?", local: "Ямар үнэтэй вэ?", pron: "ya-mar OO-ne-tei ve?" },
      { en: "Where is…?", local: "…хаана байдаг вэ?", pron: "… HAA-na bai-dag ve?" },
      { en: "Delicious!", local: "Амттай!", pron: "AMT-tai!" },
      { en: "Water / Tea", local: "Ус / Цай", pron: "oos / tsai" },
      { en: "Good / fine", local: "Сайн", pron: "sain" },
      { en: "Cheers!", local: "Эрүүл мэндийн төлөө", pron: "e-ROOL men-DEEN tu-LUH" },
      { en: "Goodbye", local: "Баяртай", pron: "ba-yar-TAI" },
    ],
  },

  history: {
    summary:
      "Mongolia's history is written across the world's largest land empire. Nomadic horse cultures ruled the steppe for millennia — Xiongnu, Turks, Uyghurs — until, in 1206, Temüjin united the warring tribes and took the title Genghis Khan. Within decades he and his heirs forged the largest contiguous empire in history, stretching from Korea to Hungary, ruling from the fabled capital of Karakorum and reshaping trade, war and the map of Eurasia. The empire fragmented, and Mongolia later came under Manchu (Qing) Chinese rule for two centuries, then briefly independent, then a Soviet satellite from the 1920s — the second communist country in the world — through decades that repressed Buddhism and the memory of the Khan. Since a peaceful democratic revolution in 1990, Mongolia has rediscovered both, reviving Buddhism and celebrating Genghis Khan as national father. Vast, landlocked and among the least densely populated countries on earth, it remains one of the last places where a large share of people still live as herders under the eternal blue sky.",
    timeline: [
      { era: "1206 (Genghis Khan)", text: "Temüjin unites the Mongol tribes and is proclaimed Genghis Khan, founding the empire." },
      { era: "13th c. (World empire)", text: "The Mongols build the largest contiguous land empire in history, ruling from Karakorum." },
      { era: "16th c. (Buddhism)", text: "Tibetan Buddhism takes deep root; great monasteries like Erdene Zuu rise on the steppe." },
      { era: "1921 (Revolution)", text: "Backed by Soviet Russia, Mongolia becomes the world's second communist state; monasteries are later purged." },
      { era: "1990 (Democracy)", text: "A peaceful revolution ends one-party rule; Buddhism and Genghis Khan's legacy are revived." },
    ],
  },

  books: [
    { title: "Genghis Khan and the Making of the Modern World", author: "Jack Weatherford", year: "2004", note: "The bestselling reappraisal of Genghis Khan — essential and genuinely gripping background." },
    { title: "The Secret History of the Mongols", author: "anonymous, 13th c.", year: "c. 1240", note: "The oldest surviving Mongolian literary work — the epic, myth-laced court chronicle of Genghis Khan's rise." },
    { title: "Wild East: Travels in the New Mongolia", author: "Jill Lawless", year: "2000", note: "A witty, affectionate portrait of Ulaanbaatar and the country in the raw post-Soviet 1990s." },
    { title: "The Blue Sky", author: "Galsan Tschinag", year: "1994", note: "A lyrical novel of a Tuvan shepherd boy in the Altai — the nomadic childhood from the inside." },
    { title: "Eagle Dreams", author: "Stephen Bodio", year: "2003", note: "A falconer's quest to the far west to witness the Kazakh eagle hunters — a lovely, obsessive read." },
  ],

  meals: [
    { name: "Khorkhog", description: "A herder's feast — mutton cooked in a sealed churn with fire-heated stones and a little water, the hot stones passed hand to hand for luck and warmth.", tip: "Made for guests and special occasions; being handed a greasy hot stone to hold is a gesture of welcome — take it." },
    { name: "Buuz", description: "Steamed mutton dumplings, the everyday favourite and the centrepiece of the Tsagaan Sar (lunar new year) feast, eaten by the dozen." },
    { name: "Khuushuur", description: "Deep-fried meat pastries — flat, crisp and juicy — sold everywhere and devoured especially during the Naadam festival." },
    { name: "Tsuivan", description: "Hand-cut steamed noodles fried with mutton and a few vegetables — the reliable, hearty staple of any steppe kitchen." },
    { name: "Airag & dairy (tsagaan idээ)", description: "Fermented mare's milk (airag), mildly alcoholic and central to summer, plus dried curds (aaruul), clotted cream (öröm) and other 'white foods'." },
    { name: "Suutei tsai", description: "Milk tea with a pinch of salt — the constant offering in every ger, drunk all day against the cold and the distances." },
  ],

  climate: {
    unit: "°C",
    note: "Extreme, dry and continental — figures are for Ulaanbaatar, the world's coldest capital. Short, warm summers (Jun–Aug) and long, ferociously cold winters (down to -30 °C and below). The vast majority of travel happens in summer and early autumn; the Gobi is hot by day and cold at night, and the far Altai is alpine. Come for the brief green window.",
    coords: [47.92, 106.92], // Ulaanbaatar — representative point for the fetch script
    key: "mn",
    best: [6, 7, 8, 9],
    avoid: [11, 12, 1, 2, 3],
    months: [
      { mean: -22, rain: 2 }, { mean: -17, rain: 3 }, { mean: -7, rain: 5 },
      { mean: 2, rain: 12 }, { mean: 10, rain: 24 }, { mean: 16, rain: 61 },
      { mean: 18, rain: 76 }, { mean: 16, rain: 71 }, { mean: 9, rain: 30 },
      { mean: 1, rain: 10 }, { mean: -11, rain: 5 }, { mean: -19, rain: 3 },
    ],
  },

  events: [
    { name: "Naadam Festival", when: "11–13 July", months: [7], kind: "go", description: "The great national festival of the 'three manly games' — wrestling, horse racing and archery — held nationwide, biggest in Ulaanbaatar. Smaller countryside naadams are more intimate and authentic. The must-time event of the year." },
    { name: "Summer green season", when: "June – September", months: [6, 7, 8, 9], kind: "go", description: "The steppe is green, the passes open, and the gers are up. This is the window for overland trips, ger stays and trekking; September brings golden colour and thinning crowds." },
    { name: "Golden Eagle Festival", when: "Early October", months: [10], kind: "go", description: "In the far-western Altai, Kazakh hunters gather to compete with their trained golden eagles — a spectacular, remote celebration of an ancient tradition. Cold and far, but unforgettable." },
    { name: "Deep winter & the dzud", when: "November – March", months: [11, 12, 1, 2, 3], kind: "avoid", description: "Savage cold locks the country down; most travel stops. Only the hardiest come for the Tsagaan Sar new year or ice festivals — otherwise wait for summer." },
  ],

  places: [
    {
      name: "Gorkhi-Terelj National Park", category: "nature", coords: [47.9167, 107.4167], region: "near Ulaanbaatar",
      description: "Alpine meadows, granite rock formations and easy ger stays — the accessible face of the Mongolian wild.",
      wiki: "Gorkhi-Terelj National Park",
      long:
        "Just a couple of hours from Ulaanbaatar, Gorkhi-Terelj is the easiest place to taste the Mongolian wilderness without a long overland expedition. Green alpine valleys ringed by pine-forested hills are strewn with dramatic granite formations — the much-photographed Turtle Rock, the meditation temple of Aryabal perched on a hillside — and dotted with the white gers of herder families and tourist camps.\n\nHere you can ride horses across the meadows, hike among the boulders, sleep in a ger heated by a dung stove, and share salty milk tea with a nomad family, all within striking distance of the capital. On the way, most visitors stop at the colossal, gleaming stainless-steel statue of Genghis Khan on horseback, which you can climb inside for a steppe view from the horse's head. It's the perfect two-or-three-day introduction to steppe life and nomadic hospitality.",
      practical: [
        { label: "Getting there", value: "~60–70 km / ~2 hrs from Ulaanbaatar by road; easiest as part of a tour or with a hired driver, as public transport is limited." },
        { label: "Do", value: "Horse-riding and hiking among the rock formations, the Aryabal meditation temple, Turtle Rock, and a ger stay with a herder family or camp." },
        { label: "En route", value: "The 40 m stainless-steel Genghis Khan equestrian statue at Tsonjin Boldog — climb up inside for the view." },
        { label: "When", value: "Jun–Sep for green meadows and comfortable ger nights; bitterly cold and largely shut in winter." },
      ],
      stay:
        "Sleep in a ger — either a family homestay for the real thing (dung-stove warmth, shared meals, horses at hand) or a comfortable tourist ger camp with beds and hot showers. A night or two here is the gentlest, most accessible introduction to nomadic Mongolia.",
      tips: [
        "Do at least one night in a ger — the point of Mongolia is the life on the steppe, not just the scenery.",
        "Combine with the Genghis Khan statue on the drive out to make a full, easy first trip from the capital.",
      ],
    },
    {
      name: "The Gobi Desert: Khongoryn Els & Yolyn Am", category: "nature", coords: [43.7833, 102.2500], region: "South Gobi (Ömnögovi)",
      description: "Singing dunes, a permanent ice-filled gorge, and the flaming cliffs where dinosaur eggs were found.",
      wiki: "Gobi Desert",
      long:
        "The Gobi is not the endless sand sea of the imagination but a vast, varied desert of gravel plains, grass steppe, canyons and scattered dunes — and it holds some of Mongolia's most extraordinary sights. At Khongoryn Els, the 'Singing Dunes', a great wall of golden sand rises up to 300 metres and hums as it shifts; climbing to the crest for sunset, then riding a Bactrian camel along their base, is a Gobi highlight.\n\nElsewhere the desert surprises: Yolyn Am ('Eagle Valley') is a narrow, shaded gorge in the Gurvan Saikhan mountains that holds a thick sheet of ice deep into summer, and the Bayanzag 'Flaming Cliffs' — glowing red at sunset — are where explorer Roy Chapman Andrews unearthed the first dinosaur eggs known to science in the 1920s. Reached by long, memorable overland drives and strings of ger camps, the Gobi is remote, elemental and one of the great desert journeys.",
      practical: [
        { label: "Getting there", value: "Fly to Dalanzadgad in the South Gobi and tour from there, or make the multi-day overland trip by 4WD from Ulaanbaatar — the long drive is part of the experience." },
        { label: "Highlights", value: "Khongoryn Els singing dunes (sunset climb + camel ride), the ice-filled Yolyn Am gorge, and the fossil-famous Bayanzag Flaming Cliffs at sunset." },
        { label: "Getting around", value: "Distances are huge and roads mostly unpaved — travel with a driver/guide and ger-camp stops; carry water and plan fuel." },
        { label: "When", value: "Jun–Sep; hot days and cold nights year-round in the desert. Pack for both extremes." },
      ],
      stay:
        "Overnight in ger camps strung across the desert — some are herder homestays, others simple tourist camps — moving on each day. Sleeping in a felt ger under the huge Gobi sky, far from any light, is the essence of the trip.",
      tips: [
        "Climb the singing dunes for sunset (it's a hard slog in soft sand) and ride the camels at the cooler base.",
        "The Gobi is a series of long drives between sights — embrace the journey rather than rushing it.",
      ],
    },
    {
      name: "Kharkhorin & Erdene Zuu Monastery", category: "history", coords: [47.2028, 102.8419], region: "Övörkhangai (central)",
      description: "The site of Genghis Khan's imperial capital, now marked by Mongolia's oldest surviving Buddhist monastery.",
      wiki: "Erdene Zuu Monastery",
      long:
        "In the Orkhon valley, the cradle of steppe empires, lies Kharkhorin — the modern town beside the site of Karakorum, the legendary capital founded by Genghis Khan and built up by his son Ögedei to rule the largest empire in history. The city was later razed, and today little stands above ground, but its stones were used to build Erdene Zuu, founded in 1585 — the oldest surviving Buddhist monastery in Mongolia.\n\nEnclosed by a striking wall lined with 108 stupas, Erdene Zuu once held dozens of temples and thousands of monks before the Stalinist purges of the 1930s devastated it; the surviving temples, now partly a working monastery again, hold fine Buddhist art and a powerful sense of endurance. The wider Orkhon valley — a UNESCO cultural landscape of pastures, ancient monuments and the Orkhon waterfall — makes this the historic heart of the country and a natural hub of any central-Mongolia loop.",
      practical: [
        { label: "Getting there", value: "~360 km / 5–6 hrs from Ulaanbaatar by road; usually visited as part of a central Mongolia overland loop with a driver/guide." },
        { label: "See", value: "Erdene Zuu monastery within its 108-stupa wall, the Kharkhorin museum on Karakorum, and the surviving 'turtle rock' markers of the old city." },
        { label: "Nearby", value: "The Orkhon valley's ancient monuments, the Orkhon (Ulaan Tsutgalan) waterfall, and hot springs — a scenic extension over a few days." },
        { label: "When", value: "Jun–Sep; the valley is green and the monastery grounds are pleasant. Cold and quiet in winter." },
      ],
      stay:
        "Stay in a ger camp or guesthouse near Kharkhorin, or push on into the Orkhon valley to camp near the waterfall and herder families. Basing here lets you see the monastery in the calm of early morning before tour groups arrive.",
      tips: [
        "See Erdene Zuu early or late for soft light on the stupa wall and fewer visitors.",
        "Extend into the Orkhon valley for waterfalls, hot springs and some of central Mongolia's finest steppe scenery.",
      ],
    },
    {
      name: "Lake Khövsgöl", category: "nature", coords: [51.0333, 100.5000], region: "Northern Mongolia",
      description: "A vast, pristine deep-blue lake fringed by taiga forest and reindeer-herding Tsaatan people.",
      wiki: "Lake Khövsgöl",
      long:
        "In the far north near the Siberian border, Lake Khövsgöl is Mongolia's 'blue pearl' — a huge, deep and astonishingly clear freshwater lake (holding a large share of the country's fresh water) cradled by forested mountains and larch taiga. Cooler, greener and wetter than the steppe and desert further south, its shores are a place of pine forest, wildflower meadows and grazing yak, with horse-riding, hiking, kayaking and, in the frozen depths of winter, an ice festival with dog sleds and horse races on the ice.\n\nThe region is also the homeland of the Tsaatan (Dukha), one of the world's last reindeer-herding peoples, who live in teepee-like tents high in the taiga and can be visited on demanding multi-day horse treks with respectful, community-minded operators. Remote and unspoiled, Khövsgöl is the destination for travellers seeking Mongolia's forests, its clearest waters and a glimpse of a vanishing way of life.",
      practical: [
        { label: "Getting there", value: "Fly to Mörön (from Ulaanbaatar), then ~2–3 hrs by road to the lakeshore village of Khatgal; or a long overland trip. Most visit as part of a northern tour." },
        { label: "Do", value: "Horse-riding, hiking and kayaking along the shore, ger/lodge stays, and — for the committed — a multi-day horse trek to visit Tsaatan reindeer herders in the taiga." },
        { label: "Tsaatan visits", value: "Reaching the reindeer herders is a hard, remote trek; go with a responsible operator that has the community's consent and shares income fairly." },
        { label: "When", value: "Jun–Sep for green shores and boating; the winter ice festival (around Feb–Mar) is a spectacular but extreme alternative." },
      ],
      stay:
        "Base at a lakeside ger camp or lodge near Khatgal for horse-riding and boat trips, waking to the still, clear water and forested hills. Deeper trips overnight in tents or with herder families in the taiga — simple, remote and unforgettable.",
      tips: [
        "Only attempt a Tsaatan reindeer-herder visit through a community-respecting operator — it's a hard trek, and their consent and fair pay matter.",
        "The northern climate is wetter and cooler than the rest of Mongolia — pack rain gear and warm layers.",
      ],
    },
    {
      name: "Altai Tavan Bogd & the Kazakh eagle hunters", category: "offbeat", coords: [49.1000, 87.8500], region: "Bayan-Ölgii (far west)",
      description: "Glaciated 4,000 m peaks, glacial lakes, and the Kazakh eagle-hunting culture of Mongolia's far west.",
      wiki: "Altai Tavan Bogd National Park",
      long:
        "In the remote far-western corner of Mongolia, where the country meets Russia, China and Kazakhstan, the Altai Tavan Bogd ('Five Saints') National Park holds the country's highest, most alpine landscapes: glaciated peaks over 4,300 metres, the vast Potanin Glacier, turquoise glacial lakes, and valleys of ancient Turkic petroglyphs and burial stones. It's a demanding, spectacular trekking and mountaineering destination, far from anywhere and gloriously wild.\n\nThe surrounding province of Bayan-Ölgii is ethnically Kazakh and Muslim — a distinct world within Mongolia — and famous as the home of the golden-eagle hunters, horsemen who hunt foxes and hares in winter with trained eagles. Each October the Golden Eagle Festival gathers them to compete in a riot of embroidered coats, fur hats and soaring birds. Reached by a long flight or drive to Ölgii and then rugged tracks, this is Mongolia at its most far-flung — high mountains and a living nomadic tradition unlike any other.",
      practical: [
        { label: "Getting there", value: "Fly from Ulaanbaatar to Ölgii (the provincial capital), then hire a 4WD and guide for the rough tracks to the park and eagle-hunter families." },
        { label: "Trekking", value: "Multi-day treks to the Tavan Bogd base camp, Potanin Glacier and the Khoton/Khurgan lakes — high, cold and remote; go equipped with a guide and permits." },
        { label: "Eagle hunters", value: "Visit a Kazakh eagle-hunter family, or time your trip for the Golden Eagle Festival in early October (a smaller spring festival also runs). Book far ahead." },
        { label: "When", value: "Jul–Sep for trekking; early October for the eagle festival. Always cold at altitude — pack seriously warm gear." },
      ],
      stay:
        "Stay with Kazakh families in their gers (here often larger and more richly decorated than Mongolian ones), and camp on the high treks. A homestay with an eagle-hunting family, sharing food and their world, is the region's most rewarding experience.",
      tips: [
        "Book flights and festival logistics well ahead — Ölgii is remote and October fills up fast.",
        "This is high, cold, far country — come properly equipped and allow extra days for weather and rough roads.",
      ],
    },
    {
      name: "Ulaanbaatar: Gandan Monastery & the National Museum", category: "history", coords: [47.9210, 106.8967], region: "Ulaanbaatar",
      description: "The chaotic capital where Genghis Khan, Soviet legacy and revived Buddhism collide — the country's one big city.",
      wiki: "Ulaanbaatar",
      long:
        "Home to roughly half of Mongolia's people, Ulaanbaatar is the improbable, fast-changing hub through which almost every visitor passes — a sprawl of Soviet apartment blocks, glass towers and ger districts ringed by hills, gridlocked and grey in places but full of energy and the best window onto modern Mongolia. It's the place to get your bearings before heading to the steppe, and to understand where the country has been.\n\nThe essentials cluster centrally: the vast central Sükhbaatar Square, dominated by a seated statue of Genghis Khan; the excellent National Museum of Mongolia, tracing the story from the Stone Age through the empire to democracy; and Gandantegchinlen ('Gandan') Monastery, the country's most important, where crimson-robed monks chant beneath a towering golden statue of Migjid Janraisig, rebuilt after the communist purges. Add the dramatic Zaisan hill war memorial and a growing café and craft scene, and a day or two here frames everything the wilderness will show you.",
      practical: [
        { label: "Getting there", value: "Chinggis Khaan International Airport connects the capital to Asia and beyond; the city is the start point for essentially all countryside trips." },
        { label: "See", value: "The National Museum of Mongolia (start here for context), Gandan Monastery, Sükhbaatar Square, the Choijin Lama Temple museum, and the Zaisan Memorial for city views." },
        { label: "Getting around", value: "Traffic is heavy — allow time. Use it to buy supplies, arrange tours and permits, and try modern Mongolian food before heading out." },
        { label: "When", value: "Summer for onward travel; the Naadam festival (11–13 July) fills the city with wrestling, racing and archery." },
      ],
      stay:
        "Stay centrally near Sükhbaatar Square so you can walk to the museum, monastery and restaurants and organise your onward trip easily. UB is a practical base rather than a beauty — a night or two to acclimatise and prepare before the steppe.",
      tips: [
        "Visit the National Museum first — it makes everything you'll see in the countryside more meaningful.",
        "If your dates allow, plan around Naadam (mid-July) for the country's greatest festival.",
      ],
    },
  ],
};
