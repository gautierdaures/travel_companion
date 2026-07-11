// Country ID card — schema reference lives in data/index.js
export default {
  code: "cn",
  name: "China",
  flag: "🇨🇳",
  region: "East Asia",
  tagline: "Five thousand years of empire, from terracotta armies to neon megacities.",
  tags: ["history", "architecture", "trek", "nature", "food", "cities"],

  languages: {
    name: "Mandarin Chinese",
    note: "Tonal — the same syllable means different things at four different pitches, so 'mā/má/mǎ/mà' are four words. Pinyin (romanization) helps, but pointing and a translation app go a long way. Regional languages like Cantonese differ hugely.",
    phrases: [
      { en: "Hello", local: "你好", pron: "nǐ hǎo" },
      { en: "Thank you", local: "谢谢", pron: "xiè xie" },
      { en: "You're welcome", local: "不客气", pron: "bú kè qi" },
      { en: "Please", local: "请", pron: "qǐng" },
      { en: "Excuse me / Sorry", local: "对不起", pron: "duì bu qǐ" },
      { en: "Yes / No", local: "是 / 不是", pron: "shì / bú shì" },
      { en: "How much is it?", local: "多少钱？", pron: "duō shǎo qián?" },
      { en: "Where is…?", local: "…在哪里？", pron: "… zài nǎ lǐ?" },
      { en: "Delicious!", local: "好吃！", pron: "hǎo chī!" },
      { en: "Cheers!", local: "干杯！", pron: "gān bēi!" },
      { en: "Goodbye", local: "再见", pron: "zài jiàn" },
    ],
  },

  history: {
    summary:
      "China is the world's oldest continuous civilization, unified under its first emperor in 221 BCE and ruled by a succession of dynasties — Han, Tang, Song, Ming, Qing — each leaving philosophy, poetry, porcelain, and engineering on a monumental scale. The Great Wall, the Grand Canal, gunpowder, paper, and the compass all trace back here. The last emperor fell in 1912; decades of upheaval, civil war, and the founding of the People's Republic in 1949 followed. Since the reforms of the late 1970s, China has transformed from a rural society into an economic superpower at breathtaking speed, while ancient temples and tea houses persist beside the skyscrapers.",
    timeline: [
      { era: "221 BCE (Qin unification)", text: "The first emperor unites the warring states and standardizes writing and roads." },
      { era: "618–907 (Tang dynasty)", text: "A cosmopolitan golden age of poetry, Silk Road trade, and Buddhist flowering." },
      { era: "1368–1644 (Ming dynasty)", text: "The Forbidden City is built and the Great Wall reaches its familiar form." },
      { era: "1912 (End of empire)", text: "The Qing dynasty falls; two thousand years of imperial rule end." },
      { era: "1978–present", text: "Economic reforms open the country and drive decades of explosive growth." },
    ],
  },

  books: [
    { title: "Wild Swans", author: "Jung Chang", year: "1991", note: "Three generations of women through a century of Chinese upheaval — the modern classic." },
    { title: "River Town", author: "Peter Hessler", year: "2001", note: "A Peace Corps teacher on the Yangtze captures China on the cusp of change." },
    { title: "Journey to the West", author: "Wu Cheng'en", year: "c. 1592", note: "The Monkey King's pilgrimage — China's beloved mythic adventure." },
    { title: "The Three-Body Problem", author: "Liu Cixin", year: "2008", note: "Cultural Revolution history spirals into cosmic sci-fi; a global phenomenon." },
  ],

  meals: [
    { name: "Peking duck", description: "Lacquered, crisp-skinned duck carved tableside and rolled into thin pancakes with scallion and hoisin.", tip: "In Beijing, book ahead at a specialist roast-duck house — the whole meal is built around one bird." },
    { name: "Dim sum", description: "A Cantonese parade of small steamed and fried dishes — dumplings, buns, rolls — pushed around on carts for late-morning yum cha." },
    { name: "Hot pot", description: "A simmering communal cauldron you cook your own meat and vegetables in; Sichuan's version is numbingly spicy." },
    { name: "Xiaolongbao", description: "Shanghai soup dumplings — bite a hole, sip the broth inside, then eat; scaldingly good." },
    { name: "Hand-pulled noodles (lamian)", description: "Dough stretched to strands before your eyes, from the Muslim northwest — often in a clear beef broth." },
  ],

  climate: {
    unit: "°C",
    note: "China spans several climate zones — choose the chart nearest your route.",
    regions: [
      {
        name: "Beijing & the north",
        coords: [39.90, 116.41], // Beijing
        key: "cn-north",
        note: "Continental: freezing, dry winters and hot summers. Spring and autumn are short and pleasant.",
        best: [4, 5, 9, 10],
        avoid: [1, 2, 12],
        months: [
          { mean: -4, rain: 3 }, { mean: 0, rain: 5 }, { mean: 6, rain: 9 },
          { mean: 14, rain: 19 }, { mean: 21, rain: 35 }, { mean: 26, rain: 76 },
          { mean: 27, rain: 166 }, { mean: 25, rain: 125 }, { mean: 21, rain: 56 },
          { mean: 13, rain: 33 }, { mean: 4, rain: 15 }, { mean: -2, rain: 3 },
        ],
      },
      {
        name: "The south · Guangzhou & Hong Kong",
        coords: [23.13, 113.26], // Guangzhou
        key: "cn-south",
        note: "Subtropical and humid. Summers are hot, wet and prone to typhoons; winters stay mild.",
        best: [10, 11, 12],
        avoid: [4, 5, 6, 7, 8, 9],
        months: [
          { mean: 14, rain: 48 }, { mean: 16, rain: 64 }, { mean: 19, rain: 140 },
          { mean: 23, rain: 230 }, { mean: 26, rain: 332 }, { mean: 27, rain: 388 },
          { mean: 28, rain: 260 }, { mean: 28, rain: 295 }, { mean: 27, rain: 178 },
          { mean: 24, rain: 61 }, { mean: 20, rain: 39 }, { mean: 15, rain: 40 },
        ],
      },
      {
        name: "Tibet & the far west · Lhasa",
        coords: [29.65, 91.14], // Lhasa
        key: "cn-tibet",
        note: "High and dry: brilliant sunny days but cold nights and thin air. Deep winter is harsh.",
        best: [5, 6, 9, 10],
        avoid: [12, 1, 2],
        months: [
          { mean: -5, rain: 4 }, { mean: -1, rain: 4 }, { mean: 2, rain: 11 },
          { mean: 6, rain: 22 }, { mean: 11, rain: 41 }, { mean: 15, rain: 68 },
          { mean: 15, rain: 124 }, { mean: 14, rain: 117 }, { mean: 12, rain: 56 },
          { mean: 7, rain: 25 }, { mean: -1, rain: 6 }, { mean: -3, rain: 3 },
        ],
      },
    ],
  },

  events: [
    { name: "Spring Festival (Chinese New Year)", when: "Late Jan – mid Feb", months: [1, 2], kind: "avoid", description: "Spectacular, but the world's largest human migration: hundreds of millions travel home, trains and flights book out weeks ahead, and many shops and sights close for days." },
    { name: "Lantern Festival", when: "15th day after New Year (Feb)", months: [2], kind: "go", description: "Closes the New Year period with glowing lantern displays, riddles, and tangyuan dumplings — lovely once the travel crush has eased." },
    { name: "Mid-Autumn Festival", when: "Sep – early Oct", months: [9, 10], kind: "go", description: "Families gather under the full moon to share mooncakes and light lanterns; parks and lakesides come alive at dusk." },
    { name: "National Day / Golden Week", when: "Oct 1 – 7", months: [10], kind: "avoid", description: "A week-long national holiday when domestic tourists mob every major site; expect packed trains and hours-long queues at the Great Wall and Forbidden City." },
  ],

  places: [
    {
      name: "The Great Wall (Jinshanling)", category: "history", coords: [40.677, 117.244], region: "near Beijing",
      description: "Skip the crowded stretches for this partly wild, partly restored section — hike between watchtowers with the wall to yourself.",
      wiki: "Jinshanling",
      long:
        "The Great Wall is not one wall but many, built and rebuilt over two thousand years and running for thousands of kilometres along China's northern frontier. The mistake most visitors make is to see it only at Badaling, the restored, cable-car-served section nearest Beijing that fills with crowds. Jinshanling, a couple of hours further out, is the antidote.\n\nHere a stretch of Ming-era wall marches along a knife-edge ridge, part solidly restored and part crumbling and overgrown, its watchtowers spaced along the skyline. The classic walk east toward Simatai gives hours of ridge-top wall largely to yourself, with the stonework snaking away over the hills in both directions — the Great Wall as it lodges in the imagination.",
      practical: [
        { label: "Getting there", value: "~2.5 hrs from Beijing; a morning tourist bus runs from Wangjing West, or hire a driver for the day." },
        { label: "Entrance", value: "~65 RMB (~$9); the cable car up is ~40 RMB each way." },
        { label: "Trek", value: "The ridge walk east toward Simatai is a 3–4 hr classic over restored and wild sections." },
        { label: "Time to allow", value: "A full day from Beijing; start early to beat the heat and the buses." },
      ],
      stay:
        "Most people come on a long day from Beijing, but a night at a simple guesthouse in Jinshanling or Gubeikou village lets you walk onto a near-empty wall at first light. For a wilder, unrestored experience, the crumbling Gubeikou and Jiankou sections nearby draw hikers who overnight in local courtyard homestays.",
      tips: [
        "Come to Jinshanling or Gubeikou, never Badaling, if you want the wall to yourself.",
        "Wear proper shoes — the wild sections are steep, broken, and unrailed.",
      ],
    },
    {
      name: "Forbidden City", category: "architecture", coords: [39.9163, 116.3972], region: "Beijing",
      description: "The vast imperial palace of the Ming and Qing emperors — 900 buildings behind vermilion walls at the city's heart.",
      wiki: "Forbidden City",
      long:
        "For almost five centuries, from the Ming dynasty to the fall of the Qing in 1912, the Forbidden City was the ceremonial and political centre of China and the home of the emperor — a walled city-within-a-city that ordinary people could not enter on pain of death. Behind a moat and vermilion walls lie some 980 surviving buildings along a strict north–south axis, a masterpiece of Chinese palatial planning.\n\nYou enter from the vast Tiananmen Square through a sequence of gates and courtyards, past the great throne halls with their golden roofs, into the more intimate residential quarters and gardens where the imperial family actually lived. It is enormous — allow at least half a day — and the Palace Museum's collections of imperial treasures reward slowing down amid the crowds.",
      practical: [
        { label: "Getting there", value: "Enter from Tiananmen (south) via metro line 1; exit at the north Gate of Divine Prowess." },
        { label: "Tickets", value: "~60 RMB peak / 40 off-peak. Book online days ahead with your passport — walk-ups aren't sold." },
        { label: "Time to allow", value: "Half a day minimum; the Treasure and Clock galleries cost a little extra." },
        { label: "When", value: "Closed Mondays. Go at 8:30 opening to beat the groups; avoid Golden Week (Oct 1–7)." },
      ],
      stay:
        "Stay in a restored courtyard (siheyuan) hotel in the surrounding hutong lanes — around Dongsi or Nanluoguxiang — so you can walk to the palace at opening and dive into the old-city alleys, teahouses and food afterwards, rather than commuting in from a highrise district.",
      tips: [
        "Reserve tickets online several days ahead — it sells out, and needs your passport.",
        "Walk it south-to-north, then climb Jingshan Park hill behind it for the classic rooftop view.",
      ],
    },
    {
      name: "Terracotta Army", category: "history", coords: [34.3841, 109.2785], region: "Xi'an",
      description: "Thousands of life-size clay soldiers buried to guard the first emperor, each face individually modeled.",
      wiki: "Terracotta Army",
      long:
        "In 1974 farmers digging a well near Xi'an broke into one of the archaeological finds of the century: a buried army of thousands of life-size terracotta soldiers, arrayed in battle formation to guard the tomb of Qin Shi Huang, the first emperor of a unified China, who died in 210 BCE. Every figure is individually modelled — different faces, hairstyles, ranks and armour — and they were once brightly painted and armed with real weapons.\n\nThree excavated pits are roofed by hangar-like halls; Pit 1, with its massed ranks of infantry receding into the distance, is the unforgettable one. Much of the emperor's mausoleum complex remains unexcavated, including the tomb mound itself. Xi'an rewards a longer stay too, for its intact Ming city wall and the food of its Muslim Quarter.",
      practical: [
        { label: "Getting there", value: "~1 hr from Xi'an; tourist bus 5 (306) from the train station, or a hired car." },
        { label: "Entrance", value: "~150 RMB peak / 120 off-peak (~$17–21); includes all three pits and the museum." },
        { label: "Time to allow", value: "Half a day — take a guide or audioguide, as the pits mean little unexplained." },
        { label: "Tip", value: "See Pit 1 last, so its massed ranks are the climax." },
      ],
      stay:
        "Base inside Xi'an's intact Ming city wall and give the city a couple of nights — the Muslim Quarter's food streets, the Great Mosque, and a bicycle loop atop the wall are as memorable as the warriors. A courtyard guesthouse near the Bell Tower keeps it all walkable.",
      tips: [
        "Take a guide or audioguide; the excavated pits are baffling without the story.",
        "Combine with the Muslim Quarter for Xi'an's famous lamb, flatbread, and hand-pulled noodles.",
      ],
    },
    {
      name: "Zhangjiajie", category: "nature", coords: [29.317, 110.479], region: "Hunan",
      description: "Thousands of sheer sandstone pillars rising from the mist — the landscape that inspired the floating mountains of 'Avatar'.",
      wiki: "Zhangjiajie National Forest Park",
      long:
        "The forest park at Zhangjiajie protects a landscape that looks invented: thousands of quartz-sandstone pillars, some over 200 metres tall, rising vertically out of subtropical forest and drifting in and out of the mist. It's widely credited as an inspiration for the floating Hallelujah Mountains of the film 'Avatar', and in person the scale and strangeness live up to the billing.\n\nA network of trails, lifts and shuttle buses threads the park — the glass Bailong elevator rides the outside of a cliff, and a glass-bottomed bridge spans a nearby canyon for those with the nerve. Rise early and pick quieter trails to escape the domestic tour groups, and give the misty mornings, when the peaks seem to hover, priority over blue-sky afternoons.",
      practical: [
        { label: "Getting there", value: "Fly or take high-speed rail to Zhangjiajie; the forest park is ~40 min from the city." },
        { label: "Entrance", value: "~240 RMB peak 4-day pass (~$34) covering the park shuttles; the Bailong glass elevator is extra." },
        { label: "Time to allow", value: "2 days, to hike the quieter trails and catch a misty morning." },
        { label: "Best conditions", value: "Misty mornings, when the pillars float, beat clear afternoons." },
      ],
      stay:
        "Sleep inside the park at Yangjiajie, or in tranquil Wulingyuan village, rather than in Zhangjiajie city — that way you're on the trails at dawn before the tour groups arrive. Simple guesthouses run by local Tujia families put the misty pillars on your doorstep.",
      tips: [
        "Rise early and pick lesser-known trails to escape the domestic tour groups.",
        "Prioritise a misty morning over a blue-sky afternoon — the fog is the magic.",
      ],
    },
    {
      name: "Li River (Guilin to Yangshuo)", category: "nature", coords: [24.9, 110.49], region: "Guangxi",
      description: "Drift past the karst peaks and water buffalo painted on every scroll of classical China — best by bamboo raft.",
      wiki: "Li River",
      long:
        "The stretch of the Li River between Guilin and Yangshuo is the archetypal landscape of Chinese painting: conical karst peaks rising from the water and the paddies, fishermen on bamboo rafts, water buffalo in the shallows, all softened by river mist. The view is famous enough to appear on the back of the 20-yuan note.\n\nThe river cruise is the classic way to see it, but the quieter pleasures lie at either end: renting a bicycle or scooter around Yangshuo to ride through the peaks, drifting a bamboo raft on the smaller Yulong River, or hiking the riverside path near Xingping. Yangshuo town has grown touristy, so aim to sleep out among the villages and paddies where the scenery is the whole point.",
      practical: [
        { label: "Getting there", value: "High-speed rail to Guilin or Yangshuo; the classic cruise runs Guilin–Yangshuo (~4 hrs)." },
        { label: "Cruise / raft", value: "River boats ~250–450 RMB; or a shorter bamboo raft on the quieter Yulong River from Yangshuo." },
        { label: "Time to allow", value: "2–3 nights based out in the countryside around Yangshuo." },
        { label: "Best stretch", value: "Xingping, near the 20-yuan-note view, for a riverside walk and raft." },
      ],
      stay:
        "Stay out among the karst and paddies rather than in touristy Yangshuo town — a guesthouse in Xingping or a village along the Yulong River lets you cycle the peaks, drift a bamboo raft at dawn, and watch cormorant fishermen without the crowds. This is scenery to slow right down in.",
      tips: [
        "Rent a bicycle or scooter around Yangshuo — the countryside is the real draw.",
        "Xingping's riverside is quieter and prettier than the main Yangshuo drag.",
      ],
    },
    {
      name: "Bund & French Concession", category: "architecture", coords: [31.2304, 121.4737], region: "Shanghai",
      description: "Colonial-era waterfront facing a futurist skyline, and leafy plane-tree streets behind — old and new Shanghai in one walk.",
      wiki: "The Bund",
      long:
        "No single view captures modern China better than the Bund at dusk: a curving parade of grand 1920s banks and trading houses in stone — Shanghai's colonial-era 'Wall Street of the East' — facing across the Huangpu River to the neon-lit spires of Pudong, a skyline that barely existed thirty years ago. Walk the promenade as the lights come on and the contrast does the work.\n\nInland lies the former French Concession, the loveliest part of the city to wander: plane-tree-shaded streets of Art Deco apartments and shikumen lane houses, now full of cafés, boutiques and quiet gardens. Together the two make a walkable portrait of Shanghai's layered past and headlong present — best explored slowly, on foot, with time for a lane-house meal.",
      practical: [
        { label: "Getting there", value: "Central Shanghai; the metro reaches both, and the two are a long, pleasant walk apart." },
        { label: "Cost", value: "Free to wander; the Bund is best at dusk when Pudong lights up across the river." },
        { label: "Time to allow", value: "A full day on foot, plus an evening on the promenade." },
        { label: "Also", value: "Cross to Pudong by metro or ferry, or up a tower, for the skyline from the other side." },
      ],
      stay:
        "Stay in a converted lane-house (lilong/shikumen) boutique hotel in the former French Concession — plane-tree streets, cafés and boutiques on your doorstep, and an easy walk or metro hop to the Bund. It's the most atmospheric, walkable slice of the city to call home.",
      tips: [
        "Walk the Bund promenade at dusk as Pudong's towers light up — the contrast is the whole show.",
        "Lose an afternoon in the French Concession's side streets, gardens and lane-house cafés.",
      ],
    },
    {
      name: "Jiuzhaigou", category: "offbeat", coords: [33.2603, 103.918], region: "Sichuan",
      description: "A high valley of impossibly turquoise lakes and waterfalls fed by snowmelt, ringed by Tibetan villages.",
      wiki: "Jiuzhaigou",
      long:
        "High on the eastern edge of the Tibetan plateau, the valley of Jiuzhaigou — 'nine village valley', for the Tibetan settlements within it — holds a chain of lakes so intensely coloured they look tinted: turquoise, emerald and cobalt, the clarity a product of mineral-rich water and calcium terraces, threaded by waterfalls and travertine shoals. Boardwalks and shuttle buses lead through the forest from pool to pool.\n\nSacred to the local Tibetans and framed by snow peaks, it is at its most spectacular in autumn, when the surrounding forest turns and doubles itself in the still water. A 2017 earthquake closed the park for a time and visitor numbers are now capped, so book ahead — and consider pairing it with the calcite terraces of nearby Huanglong.",
      practical: [
        { label: "Getting there", value: "Fly to Jiuzhai Huanglong airport, or a long scenic drive from Chengdu (~8–10 hrs)." },
        { label: "Entrance", value: "~190 RMB peak entrance + ~90 RMB shuttle (prices have changed repeatedly — confirm); daily numbers are capped, so book ahead." },
        { label: "Time to allow", value: "1–2 full days on the park's boardwalks and shuttle network." },
        { label: "When", value: "Autumn (Oct) is peak colour and peak crowds; the high altitude keeps days cool." },
      ],
      stay:
        "Base in a Tibetan-run guesthouse in the villages just outside the park gate, where you can eat local food, acclimatise to the altitude, and be first through the gate. Pair the valley with the calcite terraces of nearby Huanglong for a couple of high, luminous days.",
      tips: [
        "Book tickets ahead — daily numbers have been capped since the 2017 earthquake.",
        "It sits above 2,000 m; take the first day's exertion gently.",
      ],
    },
    {
      name: "Mogao Caves", category: "history", coords: [40.0417, 94.8096], region: "Dunhuang, Gansu",
      description: "A thousand years of Buddhist cave-painting on the Silk Road — the 'Caves of the Thousand Buddhas'.",
      wiki: "Mogao Caves",
      long:
        "At the oasis town of Dunhuang, where the Silk Road split to skirt the Taklamakan Desert, monks and merchants cut and decorated hundreds of Buddhist grottoes into a cliff over the course of a thousand years, from the 4th century on. Nearly 500 survive, their walls and ceilings covered with murals — flying apsaras, jataka tales, portraits of donors — and filled with painted clay statues, together forming one of the world's greatest treasuries of Buddhist art.\n\nIt was here, too, that a sealed 'library cave' yielded tens of thousands of medieval manuscripts, including the printed Diamond Sutra, much of it later carried off to foreign museums. Visits are tightly managed to protect the fragile pigments — timed, guided, and rotating through a selection of caves — but the encounter with such age and artistry, out on the desert's edge, is profound.",
      practical: [
        { label: "Getting there", value: "~25 min from Dunhuang, itself reachable by high-speed rail or flight from Xi'an / Lanzhou." },
        { label: "Tickets", value: "~238 RMB peak (~$34); book online well ahead — daily numbers are strictly capped." },
        { label: "Visit format", value: "Timed, guided, small-group entry to a rotating set of caves; no photography inside." },
        { label: "Time to allow", value: "Half a day, including the two intro films at the visitor centre." },
      ],
      stay:
        "Stay in Dunhuang oasis town, an appealing Silk Road base, and give it two nights: ride a camel at the Crescent Lake and Singing Sand Dunes at sunset, then visit the caves the next morning. Small guesthouses near the night market keep you close to the food and the desert.",
      tips: [
        "Reserve tickets online days in advance — walk-up spots are very limited.",
        "Bring a small torch — the caves are deliberately unlit to protect the pigments (but no photos).",
      ],
    },
    {
      name: "Potala Palace", category: "architecture", coords: [29.6558, 91.1170], region: "Lhasa, Tibet",
      description: "The towering winter palace of the Dalai Lamas, rising white and red above Lhasa on its sacred hill.",
      wiki: "Potala Palace",
      long:
        "Climbing thirteen storeys up the Red Hill above Lhasa, the Potala Palace is the great symbol of Tibet: a fortress-monastery of whitewashed walls and a crimson central block, home to the Dalai Lamas from the 17th century until the 14th fled into exile in 1959. Inside are hundreds of rooms — chapels, meditation halls, and the jewelled golden tombs of past Dalai Lamas — reached through a dim maze of steep stairs and butter-lamp-lit passages.\n\nAt 3,700 metres the altitude is real, so acclimatise before you tackle the climb, and note that visits are timed and permits for Tibet must be arranged in advance through a tour. Below, the pilgrim circuit of the old town and the Jokhang temple, thick with prostrating worshippers, is every bit as memorable as the palace above.",
      practical: [
        { label: "Getting there", value: "In Lhasa; Tibet requires a permit and a booked tour, arranged well in advance for foreign visitors." },
        { label: "Tickets", value: "~200 RMB peak; entry is by timed slot booked a day ahead, with a strict 1-hour limit inside." },
        { label: "Time to allow", value: "Half a day with the climb; more for the old town and the Jokhang." },
        { label: "Altitude", value: "Lhasa is ~3,700 m — acclimatise for a couple of days before the climb." },
      ],
      stay:
        "Stay in the old Tibetan quarter around the Barkhor and Jokhang, not the Chinese new town — you'll wake among pilgrims, prayer wheels and butter-lamp temples, within walking distance of everything. A courtyard guesthouse here is the atmospheric, acclimatising base for the palace above.",
      tips: [
        "Spend two days acclimatising to the altitude before tackling the palace stairs.",
        "The Jokhang temple and the Barkhor pilgrim circuit are as unforgettable as the Potala itself.",
      ],
    },
    {
      name: "Pingyao", category: "architecture", coords: [37.1917, 112.1750], region: "Shanxi",
      description: "A completely walled Ming-and-Qing city of grey-brick courtyard houses, banks, and temples — old China intact.",
      wiki: "Pingyao",
      long:
        "Pingyao is the best-preserved old walled city in China: an entire Ming and Qing town still enclosed by its 14th-century ramparts, with the grid of streets, grey-brick courtyard houses, temples and shopfronts largely intact. In the 19th century it was an unlikely financial capital — China's first draft banks, forerunners of the modern cheque, were founded here — and their fortified premises can still be visited.\n\nStaying overnight, once the day-trippers leave, is the trick: sleep in a converted courtyard inn, walk the top of the city walls, and let the lantern-lit streets take you back. Shanxi province around it adds the hanging monastery and grottoes further afield, but Pingyao itself is the rare place where you can simply live inside old China for a day or two.",
      practical: [
        { label: "Getting there", value: "High-speed rail to Pingyao Ancient City station, then a short ride to the walls." },
        { label: "Entrance", value: "~125 RMB combined ticket (~$18), valid a few days, covering the walls and ~20 sights." },
        { label: "Time to allow", value: "1–2 nights — the trick is to stay after the day-trippers leave." },
        { label: "Getting around", value: "The walled town is car-light; explore on foot or by bicycle." },
      ],
      stay:
        "Sleep inside the walls in a converted Qing-dynasty courtyard inn — kang beds, timber halls, red lanterns — so you can walk the ramparts at dawn and have the lantern-lit lanes to yourself at night. Staying overnight is the whole point of Pingyao: it's where you get to simply live inside old China.",
      tips: [
        "Stay the night — the town transforms once the tour buses depart.",
        "The combined ticket covers the old draft banks and temples; walk a full lap of the city walls at sunset.",
      ],
    },
    {
      name: "Longji Rice Terraces", category: "nature", coords: [25.9500, 110.1300], region: "Guangxi",
      description: "The 'Dragon's Backbone' — mountainsides sculpted into curving terraces by Zhuang and Yao communities.",
      wiki: "Longsheng Rice Terraces",
      long:
        "In the hills north of Guilin, generations of Zhuang and Yao farmers have carved entire mountainsides into stacked, curving rice terraces that follow every contour of the slopes — the 'Dragon's Backbone', Longji. Wooden villages cling to the ridges among them, and paths link viewpoints where the terraces fan out below like contour lines made solid.\n\nThe terraces shift with the seasons: mirror-bright with water in spring, deep green in summer, and burnished gold before the autumn harvest. Walking between villages such as Ping'an and Dazhai, staying in a timber guesthouse, and — if you're lucky — catching a local market are the rewards. The Red Yao women here are famous for hair kept uncut for a lifetime.",
      practical: [
        { label: "Getting there", value: "~2 hrs by bus from Guilin to Longsheng; a shuttle climbs to the Ping'an and Dazhai trailheads." },
        { label: "Entrance", value: "~100 RMB peak / 80 off (~$11–14); small cable cars serve the higher viewpoints above Dazhai." },
        { label: "Trek", value: "Walk village-to-village between Ping'an and Dazhai (~4–5 hrs) for the best of the terraces." },
        { label: "When", value: "Flooded and mirror-bright in spring; deep green in summer; gold before the autumn harvest." },
      ],
      stay:
        "Stay overnight in a timber guesthouse in a ridge village — easier Ping'an or the quieter Dazhai — to catch the terraces at dawn and dusk once the day-trippers have gone. Zhuang and Yao families run most of them, and a home-cooked bamboo-tube rice dinner is part of the deal.",
      tips: [
        "Overnight in a village to see the terraces in the soft light the day tours miss.",
        "Pack light — reaching the ridge guesthouses often means a walk or a porter up steps.",
      ],
    },
    {
      name: "Hongcun", category: "architecture", coords: [29.9800, 117.9800], region: "Anhui",
      description: "A postcard Huizhou village of white walls and black tiles mirrored in a lotus-fringed pond.",
      wiki: "Hongcun",
      long:
        "At the foot of the Huangshan mountains, Hongcun is the quintessential village of the old Huizhou merchant culture: whitewashed walls and black-tiled roofs, upturned eaves and carved wooden halls, laid out — so tradition says — in the shape of an ox, with a network of channels bringing water to every door. The still Moon Pond and the lake at the village edge give the classic mirror-image reflections.\n\nThe wealth of Huizhou salt merchants paid for the exquisite wood, brick and stone carving inside the ancestral halls and courtyard homes. Hongcun and neighbouring Xidi are UNESCO-listed and understandably popular with painters and photographers, so come early or stay the night to have the lanes to yourself, and pair the visit with a climb up Huangshan next door.",
      practical: [
        { label: "Getting there", value: "~1 hr by bus from Huangshan City (Tunxi); often paired with a Huangshan climb." },
        { label: "Entrance", value: "~104 RMB (~$15), valid a few days." },
        { label: "Time to allow", value: "Half a day, or stay overnight to have the lanes to yourself." },
        { label: "Nearby", value: "Sister village Xidi and the Huangshan mountain are both close by." },
      ],
      stay:
        "Stay the night in a restored Huizhou courtyard guesthouse inside Hongcun, so you can wander the water-lane village at dawn and dusk — reflections on the Moon Pond, painters at their easels — after the coach parties have gone. It pairs perfectly with a Huangshan sunrise the next day.",
      tips: [
        "Come early or stay overnight; midday brings tour groups and student painting classes.",
        "Combine with neighbouring Xidi and a Huangshan climb for a Huizhou two or three days.",
      ],
    },
    {
      name: "Huangshan (Yellow Mountain)", category: "nature", coords: [30.1333, 118.1667], region: "Anhui",
      description: "Granite peaks, twisted pines, and seas of cloud — the mountain that shaped Chinese landscape painting.",
      wiki: "Huangshan",
      long:
        "Few places have influenced Chinese art as deeply as Huangshan, the 'Yellow Mountain', whose granite peaks, gnarled pines clinging to bare rock, and rolling seas of cloud have been painted and written about for centuries. The classic experience is to climb (or take a cable car) up into this world of stone staircases and vertiginous viewpoints, and to stay overnight on the summit to catch the sunrise breaking over a sea of cloud.\n\nThe peaks have names and legends, the pines are individually celebrated, and hot springs bubble at the base. It can be busy and, in cloud, briefly viewless — but when the mist parts to reveal pinnacles floating above the white, you understand instantly why generations of painters kept coming back. Combine it with the Huizhou villages of Hongcun and Xidi below.",
      practical: [
        { label: "Getting there", value: "High-speed rail to Huangshan North, then a bus to the cable-car base at Tangkou." },
        { label: "Entrance", value: "~190 RMB peak (~$27) + cable car ~80–90 RMB each way; or climb the stone stairs (several hours)." },
        { label: "Time to allow", value: "2 days / 1 night on the summit to catch sunrise over the cloud sea." },
        { label: "Warning", value: "Summit hotels are pricey and basic — book well ahead, especially for weekends and holidays." },
      ],
      stay:
        "The magic here is sleeping on the mountain: book a (spartan, costly) summit hotel months ahead so you're on top for sunrise over the sea of cloud, then descend at leisure. Base in Tangkou or the Huizhou villages below before and after for cheaper, comfier rooms.",
      tips: [
        "Stay overnight on the summit for the sunrise cloud sea — it's the reason to come.",
        "Pack warm layers and a poncho; the peaks are cold, wet, and often in cloud.",
      ],
    },
    {
      name: "Fenghuang Ancient Town", category: "offbeat", coords: [27.9481, 109.5990], region: "Hunan",
      description: "Stilt houses leaning over the Tuo River in a riverside town of the Miao and Tujia peoples.",
      wiki: "Fenghuang County",
      long:
        "Set on the Tuo River in the hills of western Hunan, Fenghuang — 'Phoenix' — is an unusually pretty old town of wooden stilt houses (diaojiaolou) leaning out over the water, arched stone bridges, and lantern-hung lanes, in a region historically home to the Miao and Tujia minorities. Ferrymen pole flat boats beneath the bridges, and at night the reflected lights turn the river into a ribbon of colour.\n\nThe writer Shen Congwen, whose stories put the town on the map, is buried here, and his former home is among the sights. Fenghuang has grown lively and commercial along the waterfront, so wander the back lanes and the surrounding Miao villages for quieter corners — and consider it a natural stop between Zhangjiajie's pillars and the wider south-west.",
      practical: [
        { label: "Getting there", value: "~1 hr by bus from Jishou (high-speed rail), or ~4 hrs from Zhangjiajie." },
        { label: "Cost", value: "The town is free to enter; a combined attractions ticket (~128–148 RMB) covers the museums and the boat trip." },
        { label: "Time to allow", value: "1–2 nights — it's loveliest lit up after dark and quiet in the early morning." },
        { label: "Also", value: "Long boats pole under the bridges; the Miao villages nearby reward a day trip." },
      ],
      stay:
        "Stay in a riverside stilt-house guesthouse over the Tuo River, so you wake to ferrymen and mist and see the town before the day crowds and after the neon-lit night crowds. Wander the back lanes and out to the surrounding Miao villages for the quieter, more authentic corners.",
      tips: [
        "Base by the river but explore the back lanes — the waterfront is the busy, commercial strip.",
        "The reflected lights after dark are the signature sight; stay the night for them.",
      ],
    },
    {
      name: "Leshan Giant Buddha", category: "history", coords: [29.5450, 103.7717], region: "Sichuan",
      description: "A 71-metre Buddha carved into a river cliff in the 8th century — the largest stone Buddha on Earth.",
      wiki: "Leshan Giant Buddha",
      long:
        "Where three rivers meet near the Sichuan town of Leshan, a Tang-dynasty monk began carving a colossal Buddha into the red sandstone cliff in 713, hoping the works — and the merit — would calm the turbulent, boat-wrecking waters below. Completed ninety years later, the seated Maitreya is 71 metres tall, its ears alone longer than a person, making it the largest pre-modern stone Buddha in the world.\n\nYou can view it from a river boat that takes in the whole serene figure at once, or descend a steep staircase cut into the cliff beside it for a vertiginous close-up of its feet and toes. An ingenious hidden drainage system has kept the statue standing for over a thousand years. Nearby Mount Emei, a sacred Buddhist peak, makes a natural pairing.",
      practical: [
        { label: "Getting there", value: "~1 hr by high-speed rail from Chengdu to Leshan, then a bus to the park." },
        { label: "Entrance", value: "~80 RMB (~$11); a river boat for the full-figure view is extra (~70 RMB)." },
        { label: "Time to allow", value: "Half a day; the cliff staircase beside the Buddha has long queues at peak times." },
        { label: "View options", value: "Boat for the whole serene figure at once, or the vertiginous stairs for a close-up." },
      ],
      stay:
        "Most visit as a day trip from Chengdu, but a night in Leshan lets you beat the staircase queues at opening and pair the Buddha with sacred Mount Emei next door — a cool, temple-dotted peak worth an overnight of its own in a monastery guesthouse.",
      tips: [
        "Arrive at opening — the single-file cliff staircase backs up badly by mid-morning.",
        "Take the river boat too, for the whole figure in one view; then combine with Mount Emei.",
      ],
    },
    {
      name: "Yungang Grottoes", category: "history", coords: [40.1100, 113.1330], region: "Datong, Shanxi",
      description: "51,000 Buddhist statues carved into sandstone cliffs in the 5th century, from towering to tiny.",
      wiki: "Yungang Grottoes",
      long:
        "Just outside Datong, the Yungang Grottoes are one of China's earliest and greatest ensembles of Buddhist cave sculpture, cut into a sandstone ridge in the 5th century under the Northern Wei dynasty. Some 45 major caves hold over 50,000 statues, from a serene seated Buddha 17 metres high to countless miniature figures covering the walls, blending Indian, Central Asian and Chinese styles at a moment when Buddhism was taking root in China.\n\nMuch original pigment survives in the sheltered interiors, and the sheer density of carving — every surface worked — is overwhelming. Datong itself, once a Wei capital, adds a rebuilt old town and, an hour away, the gravity-defying Hanging Temple pinned to a cliff face, making the sooty coal city a surprisingly rich base.",
      practical: [
        { label: "Getting there", value: "~20 min west of Datong by bus or taxi; Datong is on the high-speed rail network." },
        { label: "Entrance", value: "~120 RMB (~$17); an electric cart runs from the gate to the caves." },
        { label: "Time to allow", value: "Half a day for the grottoes; a full day with Datong's other sights." },
        { label: "Nearby", value: "The gravity-defying Hanging Temple is ~1.5 hrs away and pairs naturally." },
      ],
      stay:
        "Base in Datong, once a Wei capital, whose rebuilt old town has courtyard guesthouses within the walls. Give it a night or two to combine Yungang with the cliff-clinging Hanging Temple and the ancient wooden pagoda at Yingxian — a surprisingly rich, under-visited corner of Shanxi.",
      tips: [
        "Go early for the best light in the sheltered, still-painted cave interiors.",
        "Pair Datong with the Hanging Temple and Yingxian's wooden pagoda for a full itinerary.",
      ],
    },
    {
      name: "West Lake", category: "nature", coords: [30.2500, 120.1500], region: "Hangzhou, Zhejiang",
      description: "The lake of causeways, willows, and misty pavilions that has defined Chinese ideas of beauty for a millennium.",
      wiki: "West Lake",
      long:
        "For over a thousand years the West Lake at Hangzhou has been the very model of cultivated Chinese scenery, endlessly celebrated by poets and painters and imitated in gardens across East Asia. Willow-lined causeways built by the poet-governors Bai Juyi and Su Dongpo cross the water, arched bridges and lakeside pavilions frame the views, and pagodas rise on the surrounding hills.\n\nThe pleasure is gentle and civilised: stroll or cycle the causeways, take a boat to the island pavilions, and seek out the 'ten scenes' — each a named, seasonal mood, from lotus in summer to moonlight over the water. Hangzhou is also China's tea capital, so climb into the terraced Longjing (Dragon Well) plantations in the hills behind the lake for a cup at the source.",
      practical: [
        { label: "Getting there", value: "Hangzhou is ~1 hr by high-speed rail from Shanghai; the lake is walkable from the centre." },
        { label: "Cost", value: "The lakeshore and causeways are free; boats to the islands run ~55–70 RMB." },
        { label: "Time to allow", value: "A full, gentle day to stroll or cycle the causeways and seek the 'ten scenes'." },
        { label: "Also", value: "Walk up into the Longjing (Dragon Well) tea terraces in the hills behind the lake." },
      ],
      stay:
        "Stay near the lake or up in the tea hills of Longjing, where garden guesthouses sit among the terraces. Hangzhou rewards a slow couple of days — cycle the causeways, take a boat to the island pavilions, and climb into the plantations for tea at the source, away from the lakeside crowds.",
      tips: [
        "Cycle or walk the Bai and Su causeways early, before the day's crowds build.",
        "Head into the Longjing tea villages for a pot of green tea where it's grown.",
      ],
    },
    {
      name: "Zhangye Danxia", category: "nature", coords: [38.9600, 100.1300], region: "Gansu",
      description: "Rainbow-striped hills of banded red, orange, and gold sandstone in the arid northwest.",
      wiki: "Zhangye National Geopark",
      long:
        "In arid Gansu, on the old Silk Road corridor, millions of years of layered sandstone and mineral deposits have been folded, tilted and eroded into a range of low hills striped in improbable bands of rust-red, orange, cream and green — the 'rainbow mountains' of Zhangye Danxia. Boardwalks and viewing platforms lead to the best vantages across the ribboned ridges.\n\nThe colours come alive in low, warm light — early morning or, best of all, the hour before sunset, and especially just after rain when the hues deepen. It's an easy, photogenic detour on a journey along the Hexi Corridor between Xi'an and Dunhuang, and pairs naturally with the Silk Road art of the Mogao Caves further west.",
      practical: [
        { label: "Getting there", value: "~40 min from Zhangye, on the Lanzhou–Dunhuang high-speed rail corridor." },
        { label: "Entrance", value: "~54 RMB + ~20 RMB shuttle (~$11) between the four viewing platforms." },
        { label: "Time to allow", value: "2–3 hours, timed for late afternoon." },
        { label: "Best light", value: "Early morning or the hour before sunset — and just after rain, when the colours deepen." },
      ],
      stay:
        "An easy stop on the Silk Road between Xi'an and Dunhuang: base in Zhangye town for a night (comfortable guesthouses near the rail station), hit the rainbow hills at sunset, and carry on west to the Mogao Caves. It slots neatly into a slow Hexi Corridor rail journey.",
      tips: [
        "Go for the last light before sunset — the bands of colour come alive in low sun.",
        "Just after rain is best of all; harsh midday sun flattens the hues.",
      ],
    },
  ],
};
