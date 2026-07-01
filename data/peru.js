export default {
  code: "pe",
  name: "Peru",
  flag: "🇵🇪",
  region: "South America (Andes)",
  tagline: "Andean peaks, lost cities, and the world's great biodiversity larder.",

  languages: {
    name: "Spanish (plus Quechua & Aymara)",
    note: "Peruvian Spanish is clear and fairly slow. In the highlands many people also speak Quechua — a few words go a long way in villages.",
    phrases: [
      { en: "Hello", local: "Hola", pron: "OH-lah" },
      { en: "Good morning", local: "Buenos días", pron: "BWEH-nos DEE-as" },
      { en: "Thank you", local: "Gracias", pron: "GRAH-see-as" },
      { en: "Thank you (Quechua)", local: "Sulpayki", pron: "sool-PIE-kee" },
      { en: "Please", local: "Por favor", pron: "por fah-VOR" },
      { en: "Excuse me / Sorry", local: "Disculpe", pron: "dees-KOOL-peh" },
      { en: "Yes / No", local: "Sí / No", pron: "see / noh" },
      { en: "How much is it?", local: "¿Cuánto cuesta?", pron: "KWAN-toh KWES-tah?" },
      { en: "Where is…?", local: "¿Dónde está…?", pron: "DON-deh es-TAH?" },
      { en: "Delicious!", local: "¡Qué rico!", pron: "keh REE-koh" },
      { en: "Cheers!", local: "¡Salud!", pron: "sah-LOOD" },
    ],
  },

  history: {
    summary:
      "Long before the Inca, Peru's coast and highlands hosted some of the Americas' oldest civilizations — Caral, a city as old as Egypt's pyramids, plus the Nazca, Moche, and Chimú. The Inca were latecomers who, in barely a century, welded the whole Andes into the largest empire in the pre-Columbian Americas, run without money or the wheel but with astonishing roads and stonework. Spanish conquistadors toppled it in the 1530s, and three centuries of colonial rule built the silver-funded cities of the highlands. Independence came in 1821; modern Peru still braids together Indigenous, Spanish, African, and Asian threads — visible on every plate.",
    timeline: [
      { era: "c. 3000 BCE", text: "Caral — one of the oldest cities in the Americas — rises on the coast." },
      { era: "c. 100–800 CE", text: "Nazca lines and Moche pyramids; sophisticated coastal cultures." },
      { era: "c. 1438–1533", text: "The Inca build their empire from Cusco across the Andes." },
      { era: "1532", text: "Pizarro's conquest; Spanish colonial rule begins." },
      { era: "1821", text: "Independence declared by San Martín." },
    ],
  },

  books: [
    { title: "The Motorcycle Diaries", author: "Ernesto 'Che' Guevara", year: "1993", note: "A young traveler's road journal across 1950s South America, Peru at its heart." },
    { title: "Death in the Andes", author: "Mario Vargas Llosa", year: "1993", note: "Nobel laureate's eerie novel of the highlands during the Shining Path years." },
    { title: "The Last Days of the Incas", author: "Kim MacQuarrie", year: "2007", note: "Gripping narrative history of the conquest and the search for Vilcabamba." },
    { title: "Turn Right at Machu Picchu", author: "Mark Adams", year: "2011", note: "Funny, well-researched retracing of Hiram Bingham's expeditions." },
  ],

  meals: [
    { name: "Ceviche", description: "Raw fish 'cooked' in lime with chili and red onion — eaten at lunch, never dinner.", tip: "Order at a 'cevichería' near the coast; ask for a shot of 'leche de tigre'." },
    { name: "Lomo saltado", description: "Stir-fried beef with onion, tomato, and fries over rice — the Chinese-Peruvian 'chifa' influence." },
    { name: "Ají de gallina", description: "Creamy, gently spicy shredded-chicken stew thickened with bread and walnuts." },
    { name: "Cuy", description: "Roast guinea pig — an Andean festival dish, especially around Cusco." },
    { name: "Anticuchos", description: "Grilled marinated beef-heart skewers from street carts at dusk." },
  ],

  places: [
    { name: "Choquequirao", category: "history", region: "Cusco region", description: "Machu Picchu's remote 'sister' city — reached only by a hard two-day hike, so you may have the ruins to yourself." },
    { name: "Cordillera Huayhuash", category: "nature", region: "Áncash", description: "A brutal, beautiful high-Andes trekking circuit of glacial lakes and 6,000m peaks — for serious hikers." },
    { name: "Arequipa & Colca Canyon", category: "architecture", region: "South", description: "White-volcanic-stone colonial city; nearby, a canyon twice as deep as the Grand where condors ride the thermals." },
    { name: "Kuélap", category: "history", region: "Amazonas (north)", description: "Cloud-forest fortress of the Chachapoya, older than the Inca, ringed by a 20m stone wall — few visitors." },
    { name: "Mercado San Pedro", category: "food", region: "Cusco", description: "Fruit stalls, cheese, and cheap 'menú' lunches among the locals — try an exotic juice blend." },
    { name: "Barranco", category: "offbeat", region: "Lima", description: "Bohemian seaside district of murals, old mansions, and cevicherías — Lima's creative heart." },
    { name: "Huacachina & Paracas", category: "nature", region: "Ica (coast)", description: "Desert oasis and dunes beside a marine reserve teeming with sea lions and birds." },
  ],
};
