// Country ID card — schema reference lives in data/index.js
export default {
  code: "ru",
  name: "Russia",
  flag: "🇷🇺",
  region: "Eurasia",
  tagline: "Onion domes, birch forests, and a continent's worth of railway.",

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
    note: "Figures are for Moscow / European Russia. Siberia runs far colder in winter, while the Black Sea coast around Sochi is mild year-round.",
    best: [5, 6, 7, 8, 9],
    months: [
      { min: -9, max: -4, mean: -6 },
      { min: -10, max: -4, mean: -7 },
      { min: -4, max: 2, mean: -1 },
      { min: 2, max: 11, mean: 6 },
      { min: 8, max: 19, mean: 13 },
      { min: 12, max: 22, mean: 17 },
      { min: 14, max: 24, mean: 19 },
      { min: 12, max: 22, mean: 17 },
      { min: 7, max: 15, mean: 11 },
      { min: 2, max: 8, mean: 5 },
      { min: -3, max: 1, mean: -1 },
      { min: -8, max: -3, mean: -5 },
    ],
  },

  events: [
    { name: "Maslenitsa (Butter Week)", when: "Late Feb – early Mar", months: [2, 3], kind: "go", description: "A week of blini, sledding, and bonfires to see off winter before Lent — folk festivals in every city and open-air museum." },
    { name: "White Nights", when: "Jun – early Jul", months: [6, 7], kind: "go", description: "In St. Petersburg the sun barely sets; the city stays out all night for ballet, concerts, and the Scarlet Sails fireworks." },
    { name: "Victory Day", when: "May 9", months: [5], kind: "note", description: "Huge military parades and crowds; central Moscow around Red Square is closed off and hotels fill — plan around the lockdown." },
    { name: "New Year & Orthodox Christmas", when: "Dec 31 – Jan 8", months: [12, 1], kind: "note", description: "The biggest holiday of the year: beautiful lights and markets, but offices, banks, and many services shut for the first week-plus of January." },
  ],

  places: [
    { name: "Red Square & St. Basil's", category: "architecture", coords: [55.7525, 37.6231], region: "Moscow", description: "The swirling candy-colored domes of St. Basil's over the vast square at the heart of the capital — go at night when it's floodlit." },
    { name: "Hermitage Museum", category: "architecture", coords: [59.9398, 30.3146], region: "St. Petersburg", description: "Catherine the Great's Winter Palace, now one of the world's greatest art museums; give it a full day and still miss most of it." },
    { name: "Lake Baikal", category: "nature", coords: [53.5587, 108.165], region: "Siberia", description: "The world's deepest and oldest lake — in winter it freezes into transparent turquoise ice you can walk on." },
    { name: "Trans-Siberian Railway", category: "offbeat", coords: [56.009, 92.8526], region: "Moscow to Vladivostok", description: "Six days and 9,000 km across the continent; the dining car and platform babushkas selling smoked fish are the real journey." },
    { name: "Kamchatka", category: "nature", coords: [53.25, 158.83], region: "Russian Far East", description: "A remote peninsula of live volcanoes, geysers, and brown bears — reachable only by air, and worth every ruble." },
    { name: "Kizhi Pogost", category: "history", coords: [62.0678, 35.2242], region: "Lake Onega, Karelia", description: "A wooden church of 22 domes built without a single nail, on an island in the northern lakes." },
    { name: "Suzdal", category: "history", coords: [56.4194, 40.4533], region: "Golden Ring", description: "A tiny town of white monasteries and wooden houses that feels like pre-revolutionary Russia frozen in place." },
  ],
};
