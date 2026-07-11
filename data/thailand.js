// Country ID card — schema reference lives in data/index.js
export default {
  code: "th",
  name: "Thailand",
  flag: "🇹🇭",
  region: "Southeast Asia",
  tagline: "Golden temples and green mountains, street-food heaven and slow island time.",
  tags: ["food", "temples", "nature", "beach", "history", "slow travel"],

  languages: {
    name: "Thai",
    note: "Tonal (five tones) and written in its own graceful, spaceless script. Politeness is everything: add 'khrap' (male speaker) or 'kha' (female) to soften almost any phrase, and greet with the palms-together wai. A smile carries you a long way.",
    phrases: [
      { en: "Hello", local: "สวัสดี", pron: "sa-wat-dee (khrap/kha)" },
      { en: "Thank you", local: "ขอบคุณ", pron: "khop-khun (khrap/kha)" },
      { en: "Yes / No", local: "ใช่ / ไม่", pron: "chai / mai" },
      { en: "Excuse me / Sorry", local: "ขอโทษ", pron: "kho-thot" },
      { en: "How much?", local: "เท่าไหร่", pron: "thao-rai?" },
      { en: "Where is…?", local: "…อยู่ที่ไหน", pron: "… yoo tee nai?" },
      { en: "Delicious!", local: "อร่อย", pron: "a-roi!" },
      { en: "Not spicy, please", local: "ไม่เผ็ด", pron: "mai phet (khrap/kha)" },
      { en: "No plastic bag", local: "ไม่เอาถุง", pron: "mai ao thung" },
      { en: "Water", local: "น้ำ", pron: "nam" },
      { en: "Goodbye", local: "ลาก่อน", pron: "laa-gon" },
    ],
  },

  history: {
    summary:
      "Thailand — long known as Siam — is the only Southeast Asian nation never colonised by a European power, a fact of deep national pride. Its cultural roots run through the Buddhist kingdoms of Sukhothai (13th–14th century), which forged a distinctly Thai art and script, and mighty Ayutthaya, a cosmopolitan river capital that traded with the world until the Burmese sacked it in 1767. The Chakri dynasty then founded Bangkok in 1782, and shrewd 19th-century kings modernised and played the European powers off against one another to keep independence. A 1932 revolution ended absolute monarchy, and through a turbulent 20th century of coups and rapid development, the monarchy and Theravada Buddhism have remained the twin pillars of national identity.",
    timeline: [
      { era: "1238–1438 (Sukhothai)", text: "The first great Thai kingdom flourishes; King Ramkhamhaeng is credited with the Thai alphabet." },
      { era: "1351–1767 (Ayutthaya)", text: "A wealthy, cosmopolitan river capital trades across Asia until it is destroyed by a Burmese army." },
      { era: "1782 (Bangkok founded)", text: "King Rama I establishes the Chakri dynasty and the new capital on the Chao Phraya." },
      { era: "19th century (Independence kept)", text: "Kings Mongkut and Chulalongkorn modernise Siam and preserve it as the region's only uncolonised state." },
      { era: "1932 (Constitutional monarchy)", text: "A bloodless revolution ends absolute royal rule; the modern Thai state takes shape." },
    ],
  },

  books: [
    { title: "The Beach", author: "Alex Garland", year: "1996", note: "The backpacker-utopia novel that both mythologised and skewered the Thai-island dream." },
    { title: "Four Reigns", author: "Kukrit Pramoj", year: "1953", note: "A beloved novel following one woman through the Bangkok court across four kings — a window into Thai life." },
    { title: "Sightseeing", author: "Rattawut Lapcharoensap", year: "2005", note: "Sharp, funny short stories of contemporary Thailand by a young Thai-American writer." },
    { title: "A History of Thailand", author: "Chris Baker & Pasuk Phongpaichit", year: "2005", note: "The standard clear-eyed modern history." },
    { title: "Bangkok 8", author: "John Burdett", year: "2003", note: "A pulpy but atmospheric crime novel steeped in the city's contradictions." },
  ],

  meals: [
    { name: "Pad kra pao", description: "The true national fast food — minced pork or chicken stir-fried with holy basil and chilli over rice, crowned with a crispy fried egg (khai dao).", tip: "Order it 'phet' if you can take heat; ask for a runny fried egg on top — it's the whole point." },
    { name: "Som tam", description: "Fiery green-papaya salad pounded with lime, chilli, palm sugar, fish sauce and peanuts — the soul of Isaan (northeastern) food." },
    { name: "Khao soi", description: "Northern Thailand's glory: a curry-noodle soup of coconut broth, soft and crispy egg noodles, and pickles, best in Chiang Mai." },
    { name: "Curries (gaeng)", description: "From southern-fierce to gentle massaman — green, red, khao soi, and the Muslim-influenced massaman with peanuts and potato." },
    { name: "Mango sticky rice", description: "Ripe mango over coconut-soaked glutinous rice — the perfect hot-season dessert, best in April–May mango season." },
    { name: "Street food & night markets", description: "The real Thai restaurant is the street: grilled skewers, boat noodles, roti, and fresh fruit from carts and night markets everywhere." },
  ],

  climate: {
    unit: "°C",
    note: "Figures are for Bangkok / the central plains. Thailand has three seasons — cool-dry (Nov–Feb, the best time), hot (Mar–May, brutal), and wet monsoon (Jun–Oct). The Andaman coast (Phuket, Krabi) and the Gulf islands (Ko Samui) run on slightly different monsoon timings — see local notes below.",
    coords: [13.75, 100.52], // Bangkok — representative point for the fetch script
    key: "th",
    best: [11, 12, 1, 2],
    avoid: [4, 5, 9, 10],
    months: [
      { mean: 27, rain: 13 }, { mean: 29, rain: 20 }, { mean: 30, rain: 42 },
      { mean: 31, rain: 74 }, { mean: 30, rain: 216 }, { mean: 29, rain: 156 },
      { mean: 29, rain: 157 }, { mean: 29, rain: 197 }, { mean: 28, rain: 320 },
      { mean: 28, rain: 292 }, { mean: 27, rain: 51 }, { mean: 26, rain: 9 },
    ],
  },

  events: [
    { name: "Songkran (Thai New Year)", when: "13–15 April", months: [4], kind: "go", description: "The nationwide water-fight festival — the whole country takes to the streets to douse each other. Joyous chaos, but book ahead and expect everything to shut for the holiday." },
    { name: "Cool, dry season", when: "November – February", months: [11, 12, 1, 2], kind: "go", description: "The prime window: warm days, low humidity, calm seas on both coasts, and the north pleasantly cool at night." },
    { name: "Loy Krathong & Yi Peng", when: "November (full moon)", months: [11], kind: "go", description: "Candlelit lotus floats set adrift on the water nationwide, with thousands of sky lanterns released in Chiang Mai — one of Asia's loveliest festivals." },
    { name: "Monsoon rains", when: "Roughly June – October", months: [6, 7, 8, 9, 10], kind: "note", description: "Heavy afternoon downpours (rarely all-day) and rough Andaman seas; the landscape is greenest and prices lowest. The Gulf coast (Ko Samui) is driest around this time." },
  ],

  places: [
    {
      name: "Chiang Mai & the old city temples", category: "architecture", coords: [18.7883, 98.9853], region: "Northern Thailand",
      description: "A moated old town of teak temples and lanes, gateway to the northern mountains and the best food in the country.",
      wiki: "Chiang Mai",
      long:
        "The old capital of the northern Lanna kingdom, Chiang Mai sits inside a square moat and crumbling brick walls, its grid of quiet lanes packed with more than 30 temples — gilded, teak-carved, and often centuries old. Wat Chedi Luang's earthquake-broken brick stupa, the elegant Wat Phra Singh, and the hilltop Wat Phra That Doi Suthep above the city are the essentials, but half the pleasure is stumbling on a small wihan down a side soi.\n\nCooler, greener and far more relaxed than Bangkok, Chiang Mai is also a food capital — khao soi, northern sausage, and superb night markets — and the natural base for the mountains: trekking to hill-tribe villages, ethical elephant sanctuaries, and the peaks of the far north. It's the city most travellers end up loving, and lingering in.",
      practical: [
        { label: "Getting there", value: "1-hour flight from Bangkok, or the scenic overnight sleeper train (~12–13 hrs) — book a lower berth." },
        { label: "Temples", value: "Most old-city wats are free or ~30–50 baht; dress modestly (shoulders/knees). Doi Suthep on the mountain is ~30 baht plus transport." },
        { label: "Around", value: "Ethical elephant sanctuaries (choose no-riding, observation-only camps), cooking classes, and treks in the surrounding hills." },
        { label: "When", value: "Nov–Feb is cool and clear; avoid Mar–Apr 'burning season', when crop-fire smoke can choke the valley." },
      ],
      stay:
        "Base inside or just outside the old-city moat in a small guesthouse near the temples and the Sunday Walking Street, or in the leafier, café-filled Nimmanhaemin district. For slow travel, spend a few nights up in a mountain village or the mellow riverside town of Mae Rim/Pai further north.",
      tips: [
        "The Sunday Walking Street market is the best in the country for food and crafts — go hungry.",
        "Skip elephant 'riding' camps; choose observation-only sanctuaries that don't offer rides or shows.",
      ],
    },
    {
      name: "Sukhothai Historical Park", category: "history", coords: [17.0208, 99.7036], region: "North-central Thailand",
      description: "The serene brick-and-stucco ruins of Thailand's first kingdom — best explored by bicycle at dawn.",
      wiki: "Sukhothai Historical Park",
      long:
        "Sukhothai — 'the dawn of happiness' — was the cradle of the first unified Thai state in the 13th century, and its ruins are the most graceful in the country. Across a beautifully maintained UNESCO park, brick chedis, lotus-bud spires and serene, elongated Buddha images sit among lotus ponds and lawns, the distinctive Sukhothai style at its most refined. The image of the great seated Buddha at Wat Si Chum, glimpsed through a tall slot in its walls, is unforgettable.\n\nFar quieter and more contemplative than Ayutthaya, Sukhothai is made for cycling: rent a bike and glide between the monuments in the cool of early morning or the golden hour, when the light warms the old brick and the crowds are absent. The satellite ruins at Si Satchanalai nearby are even more peaceful.",
      practical: [
        { label: "Getting there", value: "Fly to Sukhothai (THS) or bus from Bangkok/Chiang Mai. Stay in New Sukhothai (~12 km) or, better, near the Old City by the park." },
        { label: "Entrance", value: "The park is zoned; the central zone (the best) is ~100 baht, plus a small bicycle or vehicle fee. Si Satchanalai is a separate, quieter site." },
        { label: "Getting around", value: "Rent a bicycle (~30–50 baht/day) at the gate — the flat, shaded park is perfect for it." },
        { label: "When to go", value: "Enter at opening (~06:30) or late afternoon for soft light, cool air and near-empty grounds." },
      ],
      stay:
        "Stay near the Old City rather than the modern town — a handful of garden guesthouses and small resorts let you cycle to the ruins for opening and sunset. It's a peaceful, small-town base with good local food.",
      tips: [
        "Cycle the central zone at dawn; ride out to Wat Si Chum's giant Buddha and the hilltop Wat Saphan Hin.",
        "Add the near-deserted ruins of Si Satchanalai for an even quieter half-day.",
      ],
    },
    {
      name: "Bangkok: Rattanakosin & the river", category: "history", coords: [13.7500, 100.4914], region: "Central Thailand",
      description: "The old royal island of glittering temples and the Grand Palace, threaded by the Chao Phraya and its canals.",
      wiki: "Rattanakosin Island",
      long:
        "For all its neon sprawl, Bangkok's heart is the old royal island of Rattanakosin, cradled by a bend of the Chao Phraya river and a ring of canals. Here stand the dazzling Grand Palace and Wat Phra Kaew, home of the revered Emerald Buddha; the vast reclining Buddha and traditional massage school of Wat Pho; and, across the water, the corn-cob spire of Wat Arun, best at sunset.\n\nThe river itself is the city's oldest highway — hop the cheap Chao Phraya Express boats between the temples, and take a longtail into the quieter khlong (canal) neighbourhoods of Thonburi, where teak houses and orchid gardens survive. Nearby, the old lanes of Banglamphu and the markets of Chinatown (Yaowarat) serve some of the best street food on earth. Chaotic, sweaty and utterly alive.",
      practical: [
        { label: "Getting there", value: "Take the Chao Phraya Express boat to Tha Chang (Grand Palace) or Tha Tien (Wat Pho/Wat Arun) — cheaper and faster than road traffic." },
        { label: "Grand Palace", value: "~500 baht and strict dress code (shoulders and knees fully covered, for all genders); go at opening to beat heat and tour groups." },
        { label: "Watch for scams", value: "Ignore anyone outside saying the palace is 'closed today' and offering a tuk-tuk tour — it's a classic gem-shop scam." },
        { label: "Eat", value: "Chinatown (Yaowarat) after dark for street food; Wang Lang and Pak Khlong flower market by day." },
      ],
      stay:
        "For atmosphere stay in old Banglamphu near the river and temples (quieter lanes just off Khao San), or in characterful Chinatown. River-view hotels put the Express boats and the temples at your doorstep and let you skip the traffic.",
      tips: [
        "Use the river and the BTS Skytrain / MRT metro to dodge Bangkok's legendary road traffic.",
        "Cross to Wat Arun for sunset, then a riverside dinner looking back at the lit-up spire.",
      ],
    },
    {
      name: "Ayutthaya", category: "history", coords: [14.3550, 100.5600], region: "Central Thailand",
      description: "The ruined island capital of old Siam — brick prangs, headless Buddhas, and a stone head wrapped in tree roots.",
      wiki: "Ayutthaya Historical Park",
      long:
        "For four centuries Ayutthaya was one of the largest and richest cities in the world, a cosmopolitan Siamese capital on an island at the meeting of three rivers, trading with China, Japan, Persia and Europe. In 1767 a Burmese army razed it, and today its UNESCO-listed ruins — towering brick prangs, rows of headless Buddha statues, and monastery foundations — spread across the modern town in an atmospheric field of red brick.\n\nThe single most famous image is at Wat Mahathat, where a serene sandstone Buddha head sits cradled in the roots of a strangler fig. An easy day trip or overnight from Bangkok, the park is best explored by bicycle, gliding between the temples at either end of the day. A sunset longtail loop around the island brings the lost river capital to life.",
      practical: [
        { label: "Getting there", value: "~1.5 hrs from Bangkok by train (cheap and scenic), minivan, or a river cruise. Easy as a day trip or a relaxed overnight." },
        { label: "Entrance", value: "Individual temples ~50 baht each, or a combined ticket (~220 baht) for the main six. Many outer ruins are free to wander." },
        { label: "Getting around", value: "Rent a bicycle near the station, or a tuk-tuk by the hour; the sites are spread but flat." },
        { label: "Etiquette", value: "Never climb on or pose above a Buddha image; at the famous root-wrapped head, keep your own head lower than the Buddha's." },
      ],
      stay:
        "Staying overnight lets you cycle the ruins at dawn and dusk, long after the Bangkok day-trippers have gone. A handful of riverside guesthouses on the island offer bikes and sunset longtail trips around the old city.",
      tips: [
        "Cycle Wat Mahathat, Wat Ratchaburana and Wat Phra Si Sanphet at golden hour for the best light and fewest crowds.",
        "A sunset longtail boat around the island passes riverside temples the tour buses miss.",
      ],
    },
    {
      name: "Railay & the Krabi coast", category: "nature", coords: [8.0110, 98.8377], region: "Andaman coast (south)",
      description: "Towering limestone karsts over turquoise water — rock-climbing, hidden lagoons, and boat-only beaches.",
      wiki: "Railay",
      long:
        "The Andaman coast around Krabi is where Thailand's postcard karst scenery reaches its peak: sheer limestone cliffs and jungle-topped islands rising straight out of jade-green water. Railay, a peninsula cut off from the mainland by its cliffs and reachable only by longtail boat, is the jewel — world-class rock-climbing on the walls above the sand, the hidden inland lagoon reached by a muddy scramble, and the famous Phra Nang beach beneath its stalactite-hung cave.\n\nFrom here or nearby Ao Nang you can island-hop to quieter shores, kayak among the mangroves and hongs (collapsed-cave lagoons), and skip the party crowds of Phuket. For an even slower pace, base on Ko Lanta or the tiny Ko Jum to the south. It's the Andaman at its most spectacular, and no roads reach it.",
      practical: [
        { label: "Getting there", value: "Fly to Krabi (KBV); longtail boat from Ao Nang or Krabi town to Railay (~15 min, ~150–200 baht). No cars reach the peninsula." },
        { label: "When to go", value: "Nov–Apr for calm, clear Andaman seas; May–Oct monsoon brings rough water and reduced boats but green quiet and low prices." },
        { label: "Do", value: "Rock-climb (courses for beginners), kayak the mangroves and hongs, and hike/scramble to the Railay viewpoint and lagoon." },
        { label: "Island-hop", value: "Day boats to Ko Poda, the Hong Islands and Chicken Island; go early to beat the crowds and the wind." },
      ],
      stay:
        "Railay has everything from cliffside resorts to simple bungalows on the quieter Railay East mangrove side. For real slow travel, base on laid-back Ko Lanta or the barely-developed Ko Jum, where the beaches empty out and the pace drops.",
      tips: [
        "Phra Nang beach is loveliest early morning before the day-trip boats arrive.",
        "Book climbing with a reputable school; the limestone is superb but the sun and rock get fierce by midday.",
      ],
    },
    {
      name: "Pai & the Mae Hong Son loop", category: "nature", coords: [19.3583, 98.4406], region: "Far northern mountains",
      description: "A mellow mountain valley of hot springs, waterfalls and hill villages on a legendary switchback road trip.",
      wiki: "Pai",
      long:
        "North of Chiang Mai, the road corkscrews up into the misty mountains along the Mae Hong Son loop — a 600-km circuit of 1,864 hairpin bends, hill-tribe villages, hot springs and waterfalls that is one of Southeast Asia's great motorbike road trips. Its best-known stop, Pai, is a laid-back valley town of rice fields, riverside bungalows and a mellow café scene, ringed by hills that fill with cloud at dawn.\n\nBeyond the backpacker hangouts lie genuine rewards: the Lod Cave with its longtail-boat river passage, Karen and Lisu villages, the misty viewpoints, and the sleepy provincial capital of Mae Hong Son with its Burmese-style temples. Cool, green and slow, it's a mountain counterpoint to the beaches — best taken over several unhurried days by bike or car.",
      practical: [
        { label: "Getting there", value: "~3–4 hrs by minivan from Chiang Mai on the famously winding road (motion-sickness pills help), or ride the loop yourself by motorbike over 3–5 days." },
        { label: "The loop", value: "Chiang Mai → Pai → Mae Hong Son → Khun Yuam → back; allow 3–5 days. Check brakes and take it slow on the bends." },
        { label: "Do", value: "Pai Canyon at sunset, Tha Pai hot springs, Lod Cave near Soppong, and the morning mist from a hillside viewpoint." },
        { label: "When", value: "Nov–Feb is cool and clear; the far north can be genuinely cold at night — pack a warm layer." },
      ],
      stay:
        "Sleep in a riverside or rice-field bungalow just outside Pai town for birdsong and morning mist rather than the bar strip. Along the loop, simple guesthouses in Mae Hong Son and village homestays let you break the ride and slow right down.",
      tips: [
        "Only rent a motorbike if you can actually ride one — the mountain road claims plenty of inexperienced travellers.",
        "Mornings are for mist and viewpoints; keep afternoons loose for hot springs and waterfalls.",
      ],
    },
    {
      name: "Ko Tao & the Gulf islands", category: "nature", coords: [10.0956, 99.8403], region: "Gulf of Thailand",
      description: "Clear warm water and cheap, world-famous diving on a small, laid-back island off the eastern coast.",
      wiki: "Ko Tao",
      long:
        "In the Gulf of Thailand, the small island of Ko Tao ('Turtle Island') is one of the cheapest and most popular places in the world to learn to scuba dive, with warm, clear water, easy reef sites, and a dive school on every corner. Even without a tank, the snorkelling off its bays and the granite-boulder cove of the offshore Ko Nang Yuan are superb, and the island keeps a mellower, more low-slung feel than its party-famous neighbour Ko Pha-Ngan.\n\nThe Gulf islands run on a different monsoon clock from the Andaman coast — they're often at their driest and calmest from around June to September, when the west coast is wet, making them a smart hot-season alternative. Base in a quiet bay, dive or snorkel by day, and watch the sunset from a hillside viewpoint bar.",
      practical: [
        { label: "Getting there", value: "Fly to Ko Samui or the mainland (Chumphon/Surat Thani), then a catamaran ferry to Ko Tao (crossings can be rough — take a pill)." },
        { label: "Diving", value: "Open Water certification is famously affordable here (~10,000–12,000 baht); pick a school with good safety reviews, not just the lowest price." },
        { label: "When to go", value: "Roughly Jun–Sep and Jan–Apr are best; heavy Gulf rains and rough seas peak around Oct–Nov." },
        { label: "Don't miss", value: "A boat to Ko Nang Yuan for snorkelling and the viewpoint, and Ko Tao's own quiet bays like Tanote and Sai Nuan." },
      ],
      stay:
        "Skip the main Sairee Beach strip for a bungalow in a quieter cove — Tanote Bay, Sai Nuan or the south — where you can snorkel off the beach and the nights are calm. Simple fan bungalows still exist here, hillside and cheap.",
      tips: [
        "Rent a kayak or snorkel gear rather than joining every boat tour — the reefs are close to shore.",
        "The steep island roads are rough; hire a longtail or walk rather than a scooter if you're unsure.",
      ],
    },
    {
      name: "Isaan: Khon Kaen, Ubon & the Khmer temples", category: "offbeat", coords: [14.8283, 103.5236], region: "Northeastern Thailand",
      description: "Thailand's rural, food-loving heartland — ancient Khmer sanctuaries and barely a foreign face in sight.",
      wiki: "Phanom Rung",
      long:
        "Isaan, the vast northeastern plateau bordering Laos and Cambodia, is the Thailand that most tourists skip entirely — and the richer for it. This is the country's cultural heartland: the home of som tam, sticky rice and grilled chicken, of mor lam music and the friendliest, most laid-back people in the land, where a foreigner is still a novelty and prices are the lowest in the country.\n\nIts headline sights are the Khmer temples built when this was part of the Angkorian empire — above all Phanom Rung, a magnificent pink-sandstone sanctuary on an extinct volcano, aligned so the sun shines through all fifteen doorways on a few mornings a year. Add the Mekong river towns, the silk-weaving villages, and the wildlife of Khao Yai on the way, and Isaan rewards the independent traveller with real, unpolished Thailand.",
      practical: [
        { label: "Getting there", value: "Trains and flights reach Khon Kaen, Ubon Ratchathani, Nakhon Ratchasima (Korat) and Buriram; a car helps for the temples and villages." },
        { label: "Phanom Rung", value: "~100 baht; the great Khmer sanctuary on its volcano is the region's masterpiece. Check the solar-alignment dates for the sunrise-through-the-doorways event." },
        { label: "Eat", value: "Isaan is the source of Thailand's most-loved street food — som tam, gai yang (grilled chicken), larb, and sticky rice. Eat it here at its best." },
        { label: "Also", value: "The Mekong towns of Nong Khai and Chiang Khan, silk-weaving villages, and Khao Yai National Park en route from Bangkok." },
      ],
      stay:
        "Base in a provincial town like Buriram (for Phanom Rung), Khon Kaen or Ubon and take day trips, or stay in a Mekong riverside town such as Chiang Khan or Nong Khai for slow, small-town evenings by the river. Homestays in silk-weaving villages go deeper still.",
      tips: [
        "Go for a temple festival or the solar alignment at Phanom Rung if the dates line up.",
        "Bring patience with transport and a few words of Thai — English is rarer out here, and the welcome is warmer for trying.",
      ],
    },
  ],
};
