// Country ID card — schema reference lives in data/index.js
export default {
  code: "nz",
  name: "Nouvelle-Zélande",
  flag: "🇳🇿",
  region: "Océanie / Pacifique Sud",
  tagline: "Aotearoa — montagnes sculptées par les glaciers, côtes sauvages et grandes randonnées du sud.",
  tags: ["nature", "trek", "history", "slow-travel", "cities"],

  languages: {
    name: "Anglais et te reo māori",
    note: "L’anglais est universel, mais le te reo māori est une langue officielle, tissée dans la vie quotidienne — noms de lieux, salutations, panneaux. Apprendre quelques mots māori est chaleureusement accueilli ; les voyelles sont pures et régulières, et se disent presque comme en français (u se dit « ou », e se dit « é »), tandis que wh se prononce souvent comme un « f » doux.",
    phrases: [
      { fr: "Bonjour (à une personne)", local: "Kia ora", pron: "ki-a O-ra" },
      { fr: "Bienvenue", local: "Haere mai", pron: "HAÏ-ré maï" },
      { fr: "Merci", local: "Ngā mihi / Kia ora", pron: "nga MI-hi" },
      { fr: "Comment allez-vous ?", local: "Kei te pēhea koe?", pron: "kéï té PÉ-hé-a koué ?" },
      { fr: "Bien / ça va", local: "Kei te pai", pron: "kéï té PAÏ" },
      { fr: "Famille / proches", local: "Whānau", pron: "FAA-nô" },
      { fr: "Nourriture / repas", local: "Kai", pron: "kaï" },
      { fr: "La terre", local: "Whenua", pron: "FÉ-nou-a" },
      { fr: "Montagne", local: "Maunga", pron: "MAOU-nga" },
      { fr: "Au revoir (portez-vous bien)", local: "Haere rā / Ka kite", pron: "HAÏ-ré raa / ka KI-té" },
      { fr: "Super / merci", local: "Ka pai", pron: "ka PAÏ" },
    ],
  },

  history: {
    summary:
      "La Nouvelle-Zélande fut la dernière grande terre de la planète à être peuplée par l’homme. Des navigateurs polynésiens y arrivèrent en pirogue de haute mer vers 1300 apr. J.-C. et devinrent les Māori, développant une riche culture organisée autour des iwi (tribus), de la terre et du mana (prestige). Le contact avec les Européens vint avec Abel Tasman en 1642 et James Cook en 1769 ; chasseurs de phoques, baleiniers, marchands et missionnaires suivirent. En 1840, la Couronne britannique et de nombreux chefs māori signèrent le traité de Waitangi, document fondateur du pays — et toujours contesté —, dont les versions anglaise et māori divergentes nourrissent encore aujourd’hui les débats sur la souveraineté et la terre. Colonisation, guerres néo-zélandaises et spoliation des terres suivirent, mais la culture māori a perduré et connaît une puissante renaissance. Aujourd’hui, Aotearoa Nouvelle-Zélande est une nation du Pacifique biculturelle (et de plus en plus multiculturelle), connue dans le monde entier pour ses paysages, son esprit progressiste et son mode de vie tourné vers le plein air.",
    timeline: [
      { era: "v. 1300 (peuplement māori)", text: "Des navigateurs polynésiens atteignent Aotearoa en pirogue — la dernière grande terre de la planète à être peuplée." },
      { era: "1642 et 1769 (contact européen)", text: "Abel Tasman aperçoit la côte ; James Cook cartographie les îles, les ouvrant aux marchands et baleiniers européens." },
      { era: "1840 (traité de Waitangi)", text: "La Couronne et des chefs māori signent le traité fondateur — ses deux versions divergentes restent au cœur de la nation." },
      { era: "Années 1860–70 (guerres néo-zélandaises)", text: "Conflits et confiscations de terres remodèlent le pays à mesure que la colonisation européenne s’étend." },
      { era: "1893 et l’ère moderne", text: "La Nouvelle-Zélande devient le premier pays à accorder le droit de vote aux femmes ; une renaissance culturelle māori redessine plus tard l’identité nationale." },
    ],
  },

  books: [
    { title: "The Bone People", author: "Keri Hulme", year: "1984", note: "Le roman lauréat du Booker, totalement original, où les mondes māori et pākehā se rencontrent sur la sauvage côte ouest." },
    { title: "Les Luminaires", author: "Eleanor Catton", year: "2013", note: "Un lauréat du Booker éblouissant et foisonnant, situé dans la ville champignon de la ruée vers l’or, à Hokitika dans les années 1860." },
    { title: "Whale Rider", author: "Witi Ihimaera", year: "1987", note: "Un roman court et magnifique sur la tradition māori et une fille destinée à guider les siens — à l’origine du film (Paï en français)." },
    { title: "Mister Pip", author: "Lloyd Jones", year: "2006", note: "Ne se déroule pas en Nouvelle-Zélande mais signé par l’un de ses meilleurs écrivains ; essayez aussi son « Hand Me Down World »." },
    { title: "The Penguin History of New Zealand", author: "Michael King", year: "2003", note: "L’histoire de référence du pays, humaine et très appréciée." },
  ],

  meals: [
    { name: "Hāngī", description: "Le festin māori traditionnel — viande et légumes-racines cuits lentement à l’étouffée pendant des heures dans un four creusé dans la terre, sur des pierres chaudes ; fumé et fondant.", tip: "À vivre de préférence lors d’une soirée culturelle māori (par ex. autour de Rotorua), où le repas s’accompagne de l’histoire et de l’accueil." },
    { name: "Moules aux lèvres vertes et langoustes", description: "Des produits de la mer superbes — moules charnues de Marlborough, huîtres de Bluff en saison, et langoustes vendues au bord de la route sur la côte de Kaikōura." },
    { name: "La tourte et le fish and chips", description: "Le grand en-cas kiwi : une vraie tourte viande hachée-fromage ou steak de boulangerie, et un fish and chips frais mangé sur la plage." },
    { name: "Agneau et cerf", description: "L’agneau nourri à l’herbe, réputé dans le monde entier, et le cerf d’élevage (cervena) — la base d’un rôti ou d’un barbecue néo-zélandais classique." },
    { name: "Pavlova et hokey pokey", description: "Le dessert meringué couvert de crème et de kiwis ou de fruits rouges (dont l’origine est âprement disputée à l’Australie), et la glace hokey pokey aux éclats de caramel alvéolé." },
    { name: "Flat white et artisanat en tout genre", description: "La Nouvelle-Zélande prend son café (le flat white est une invention locale) aussi au sérieux que ses bières artisanales en plein essor et ses vins de climat frais — pinot de Central Otago, sauvignon blanc de Marlborough." },
  ],

  climate: {
    unit: "°C",
    note: "Tempéré et changeant — « quatre saisons en une journée » n’est pas une légende. Les saisons sont inversées (été de décembre à février, hiver de juin à août). Les chiffres ci-dessous distinguent l’île du Nord, plus chaude et plus sèche (Auckland), de l’île du Sud, plus fraîche et plus alpine (Queenstown), qui connaît de vrais hivers et une saison de ski. L’été est la haute saison des randonnées ; les intersaisons (mars–avril, novembre) sont plus calmes et charmantes.",
    regions: [
      {
        name: "Île du Nord (Auckland)", coords: [-36.85, 174.76], key: "nz-north",
        note: "Doux, humide et subtropical dans l’extrême nord ; étés chauds, hivers cléments.",
        best: [11, 12, 1, 2, 3], avoid: [],
        months: [
          { mean: 20, rain: 74 }, { mean: 20, rain: 79 }, { mean: 19, rain: 83 },
          { mean: 16, rain: 96 }, { mean: 14, rain: 118 }, { mean: 12, rain: 138 },
          { mean: 11, rain: 142 }, { mean: 11, rain: 125 }, { mean: 13, rain: 106 },
          { mean: 15, rain: 101 }, { mean: 16, rain: 88 }, { mean: 18, rain: 87 },
        ],
      },
      {
        name: "Île du Sud (Queenstown)", coords: [-45.03, 168.66], key: "nz-south",
        note: "Alpin et continental — journées d’été chaudes, hivers froids et givrés, et saison de ski de juin à septembre.",
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
    { name: "Été et saison des Great Walks", when: "Décembre – mars", months: [12, 1, 2, 3], kind: "go", description: "Le temps le plus chaud et le plus sec, de longues journées, et la meilleure période pour les Great Walks et la randonnée alpine. C’est aussi la plus chargée et la plus chère — réservez refuges et camping-cars bien à l’avance." },
    { name: "Waitangi Day", when: "6 février", months: [2], kind: "note", description: "La fête nationale qui commémore le traité de 1840, avec des cérémonies sur le site du traité à Waitangi, dans la Bay of Islands — un bon moment pour s’intéresser à l’histoire fondatrice du pays." },
    { name: "Couleurs d’automne et intersaison calme", when: "Mars – avril", months: [3, 4], kind: "go", description: "Le Central Otago (Arrowtown, Wānaka) se pare d’or, la foule s’éclaircit et les prix baissent — sans doute la période la plus belle et la plus avantageuse pour parcourir l’île du Sud." },
    { name: "Hiver et saison de ski", when: "Juin – août", months: [6, 7, 8], kind: "note", description: "Neige sur les Alpes du Sud et ski autour de Queenstown/Wānaka ; certains cols d’altitude et Great Walks ferment, et les journées sont courtes — idéal pour la montagne, plus calme ailleurs." },
  ],

  places: [
    {
      name: "Fiordland : Milford Sound et Doubtful Sound", category: "nature", coords: [-44.6710, 167.9256], region: "Fiordland, île du Sud",
      description: "Des fjords abrupts sculptés par les glaciers, des cascades vertigineuses et la forêt pluviale — la grandeur la plus sauvage et la plus arrosée du pays.",
      wiki: "Milford Sound",
      long:
        "Dans le sud-ouest reculé de l’île du Sud, le parc national de Fiordland est une immense étendue sauvage classée au patrimoine mondial, faite de fjords sculptés par les glaciers où des falaises sombres s’élèvent à plus d’un kilomètre au-dessus de la mer, striées d’innombrables cascades et drapées d’une forêt pluviale tempérée ruisselante. Milford Sound (Piopiotahi) est le plus célèbre — le Mitre Peak se reflétant dans l’eau noire, à découvrir en bateau ou en kayak, et plus beau que jamais quand la pluie fait dévaler mille cascades le long des parois.\n\nLa route d’accès depuis Te Anau, la Milford Road, est un temps fort en soi, entre lacs miroirs et vallées alpines. Pour plus de solitude, le Doubtful Sound, plus vaste et moins visité, ne s’atteint qu’en bateau et en bus, en traversant un lac et un col. Le Fiordland est aussi le pays des grandes randonnées de plusieurs jours — Milford, Kepler et Routeburn Tracks — et des rares takahē et kākāpō, oiseaux incapables de voler. Prévoyez de quoi affronter la pluie : c’est l’un des endroits les plus pluvieux de la planète, et il n’en est que plus magnifique.",
      practical: [
        { label: "Y aller", value: "Installez-vous à Te Anau ; Milford Sound est à ~2 h d’une route spectaculaire (ou en car) par la Milford Road. Doubtful Sound se fait en une journée complète de bateau et de bus depuis Manapouri." },
        { label: "Croisières et kayak", value: "Des croisières nature et des sorties en kayak de mer sont proposées sur les deux fjords ; les croisières de nuit permettent de se réveiller dans le fjord. Réservez à l’avance en été." },
        { label: "Randonnée", value: "Milford, Kepler et Routeburn sont des Great Walks sur réservation (les refuges sont complets des mois à l’avance pour l’été) ; la Milford Road offre aussi de superbes courtes balades et le Chasm." },
        { label: "Quand", value: "Saisissant par tous les temps — la pluie, c’est plus de cascades. Les sandflies (petites mouches piqueuses) sont féroces : prévoyez un répulsif puissant." },
      ],
      stay:
        "Installez-vous dans la ville lacustre de Te Anau, porte d’entrée du Fiordland, pour l’hébergement, le ravitaillement et les départs d’excursions. Pour un moment exceptionnel, faites une croisière de nuit sur Milford ou Doubtful Sound et dormez dans le fjord, ou logez dans un refuge de montagne sur l’une des Great Walks.",
      tips: [
        "Allez-y un jour de pluie pour le spectacle complet des cascades — Milford n’est jamais aussi grandiose que sous l’averse.",
        "Prenez un répulsif sérieux contre les sandflies ; ces mouches piqueuses sont légendaires le long des fjords.",
      ],
    },
    {
      name: "Aoraki / mont Cook et les Alpes du Sud", category: "trek", coords: [-43.7340, 170.0960], region: "Canterbury, île du Sud",
      description: "Le plus haut sommet de Nouvelle-Zélande, au-dessus d’une vallée glaciaire aux lacs turquoise et aux nuits constellées d’étoiles.",
      wiki: "Aoraki / Mount Cook",
      long:
        "Aoraki / mont Cook, qui culmine à 3 724 mètres, est la plus haute montagne de Nouvelle-Zélande et domine un parc national de glaciers, de moraines et de lacs alpins, au fond du lac Pukaki turquoise. Le fond de la vallée donne un accès facile à des paysages vraiment alpins : le Hooker Valley Track, l’une des plus belles courtes balades du pays, mène par des passerelles suspendues jusqu’à un lac glaciaire parsemé d’icebergs, juste sous le sommet.\n\nC’est un pays d’alpinistes — Sir Edmund Hillary s’y est entraîné avant l’Everest — mais la plupart des visiteurs viennent pour marcher, survoler les glaciers et lever les yeux : le bassin de Mackenzie voisin est une Réserve internationale de ciel étoilé, parmi les meilleurs endroits au monde pour observer les étoiles, la petite église du lac Tekapo servant souvent de premier plan à la Voie lactée. Un haut pays vaste et pur, fait de lacs bleu laiteux et de touffes d’herbe dorée : le cœur des Alpes du Sud.",
      practical: [
        { label: "Y aller", value: "~3 h de route depuis Queenstown ou Christchurch jusqu’au village d’Aoraki/Mount Cook, le long du lac Pukaki turquoise." },
        { label: "Balades", value: "Le Hooker Valley Track (~3 h aller-retour, presque plat) est incontournable ; le point de vue du glacier Tasman et les Sealy Tarns (« l’escalier vers le ciel ») sont d’autres options." },
        { label: "Observation des étoiles", value: "Le Mackenzie est une réserve de ciel étoilé — rejoignez une sortie nocturne à Tekapo ou levez simplement les yeux ; l’église du Bon Pasteur est le spot classique." },
        { label: "Quand", value: "Les journées claires d’été et d’automne pour marcher et profiter des vues ; l’hiver apporte neige et froid. La météo change vite — prenez des couches." },
      ],
      stay:
        "Logez au village d’Aoraki/Mount Cook, au pied du sommet (peu de lits — réservez), ou au bord des lacs Tekapo ou Pukaki pour la vue sur l’eau turquoise et les nuits étoilées. Le village met le Hooker Valley à votre porte pour un départ à l’aube ou au crépuscule.",
      tips: [
        "Parcourez la Hooker Valley tôt ou tard pour une lumière douce sur le sommet et moins de monde.",
        "Prévoyez de quoi affronter un vrai froid la nuit même en été, et consultez la météo alpine avant toute longue marche.",
      ],
    },
    {
      name: "Rotorua et la culture māori", category: "history", coords: [-38.1368, 176.2497], region: "Bay of Plenty, île du Nord",
      description: "Des merveilles géothermiques bouillonnantes et le cœur vivant de la culture māori — hāngī, haka et marae.",
      wiki: "Rotorua",
      long:
        "Posée au bord d’un lac au cœur volcanique de l’île du Nord, Rotorua est l’endroit où la terre respire — geysers en éruption, mares de boue qui glougloutent, terrasses de silice fumantes et odeur de soufre dans l’air. Des parcs géothermiques comme Wai-O-Tapu (avec son éclatante Champagne Pool) et Te Puia (où jaillit le geyser Pōhutu) exposent la puissance brute de la terre, et l’on peut se baigner dans des sources chaudes naturelles presque partout.\n\nRotorua est tout autant le centre de la culture māori vivante. Le peuple Te Arawa y accueille les visiteurs depuis plus d’un siècle, et une soirée culturelle ou un séjour sur un marae — avec l’accueil du pōwhiri, un spectacle de kapa haka et un festin de hāngī cuit dans la terre — est l’une des expériences les plus marquantes du pays. Visitez le village historique d’Ōhinemutu au bord du lac, où une église māori et une maison de réunion se dressent au milieu des vapeurs. C’est le meilleur endroit pour découvrir, avec respect, te ao Māori — le monde māori.",
      practical: [
        { label: "Y aller", value: "~3 h de route depuis Auckland, ou un vol court. Une base facile au centre de l’île du Nord." },
        { label: "Géothermie", value: "Wai-O-Tapu (Champagne Pool, geyser Lady Knox), Te Puia (geyser Pōhutu + arts māori), et Waimangu ou Waikite pour des cadres plus naturels et plus calmes. Les tarifs d’entrée varient." },
        { label: "Culture māori", value: "Choisissez une soirée ou une journée culturelle réputée (Te Puia, Tamaki, village vivant de Whakarewarewa) pour le pōwhiri, le kapa haka et un hāngī. Le village d’Ōhinemutu se visite librement (avec respect)." },
        { label: "Aux alentours", value: "Les balades dans la forêt de séquoias (Redwoods) et les pistes de VTT de Whakarewarewa, ainsi que les lacs bleus et verts de Tarawera." },
      ],
      stay:
        "Logez au bord du lac, à Rotorua même — beaucoup d’hébergements ont leurs propres bassins géothermiques. Pour une expérience à part, une nuit sur un marae ou un séjour accueilli par des Māori va bien plus loin qu’un spectacle : on partage repas, protocole et récits.",
      tips: [
        "Réservez une expérience culturelle māori avec hāngī — c’est ce que vous ferez de plus enrichissant ici.",
        "Plusieurs lieux gratuits ou bon marché (bassins chauds, Kuirau Park, Ōhinemutu) permettent de ressentir la géothermie sans gros billet.",
      ],
    },
    {
      name: "Tongariro Alpine Crossing", category: "trek", coords: [-39.1333, 175.6500], region: "Plateau central, île du Nord",
      description: "Une traversée d’une journée dans un paysage volcanique actif de cratères, de lave et de lacs émeraude — la plus belle randonnée à la journée du pays.",
      wiki: "Tongariro Alpine Crossing",
      long:
        "Souvent considérée comme la meilleure randonnée à la journée de Nouvelle-Zélande, la Tongariro Alpine Crossing traverse un paysage volcanique austère et irréel dans le parc national de Tongariro, doublement inscrit au patrimoine mondial — un lieu sacré pour les Māori locaux, qui l’ont offert à la nation. Sur environ 19 kilomètres, on grimpe entre anciennes coulées de lave et fumerolles jusqu’au rebord du Red Crater, puis on redescend le long des Emerald Lakes aux couleurs éclatantes, avec le cône parfait du mont Ngāuruhoe (la « Montagne du Destin » du Mordor au cinéma) qui se dresse à côté.\n\nC’est une randonnée exigeante d’une journée entière — montées raides, terrain alpin exposé et météo capable de passer du soleil à la neige en une heure —, mais non technique et inoubliable par bonnes conditions. Les sommets du parc sont des volcans actifs, et toute la traversée donne l’impression de marcher sur les os à vif et fumants de la terre. Réservez votre transport, partez tôt et vérifiez la météo : cette randonnée exige le respect.",
      practical: [
        { label: "Y aller", value: "Installez-vous au village de National Park, à Whakapapa ou à Tūrangi/Taupō ; une navette vous dépose au départ de Mangatepopo et vous récupère à Ketetahi (c’est un itinéraire à sens unique, d’un point à un autre)." },
        { label: "La randonnée", value: "~19–20 km, 6–8 h, avec une grosse montée jusqu’au Red Crater (~1 886 m). Non technique mais éprouvante et totalement exposée — bonnes chaussures, couches, eau et nourriture indispensables." },
        { label: "Météo et sécurité", value: "Alpine et instable ; consultez les prévisions du DOC/MetService et ne partez pas par vent fort, tempête ou mauvaise visibilité. Réservez la navette à l’avance en été." },
        { label: "Quand", value: "Idéalement de novembre à avril ; en hiver, elle devient un itinéraire d’alpinisme exigeant piolet, crampons et guide." },
      ],
      stay:
        "Logez au village de National Park ou à Whakapapa pour prendre la première navette, ou à Tūrangi/Taupō au bord du lac. Les nuits avant et après dans un lodge simple ou un camping permettent de partir frais à l’aube et de devancer à la fois la foule et la météo de l’après-midi.",
      tips: [
        "Partez tôt pour finir avant que le vent et les nuages de l’après-midi ne se lèvent, et avoir les Emerald Lakes pour vous.",
        "Emportez toutes vos couches alpines même par un matin ensoleillé — en altitude, la météo change vite et peut être dangereuse.",
      ],
    },
    {
      name: "Abel Tasman et les Marlborough Sounds", category: "beach", coords: [-40.9970, 173.0000], region: "Nord de l’île du Sud",
      description: "Plages dorées, eau limpide et sentiers côtiers boisés — le coin le plus ensoleillé et le plus doux du pays.",
      wiki: "Abel Tasman National Park",
      long:
        "À la pointe nord, gorgée de soleil, de l’île du Sud, le parc national Abel Tasman offre un visage plus doux et plus chaud de la Nouvelle-Zélande : des criques de sable doré baignées d’une eau turquoise limpide, adossées à des caps de granit boisés. L’Abel Tasman Coast Track — l’une des Great Walks, étonnamment facile et douce — relie un chapelet de plages magnifiques ; on peut en parcourir une partie à pied, pagayer en kayak d’une baie à l’autre, ou prendre des bateaux-taxis pour sauter de crique en crique, en campant ou en logeant en chemin.\n\nJuste à l’est s’étendent les labyrinthiques Marlborough Sounds, un dédale de vallées fluviales noyées et de criques boisées riches en oiseaux, cadre du Queen Charlotte Track, ainsi que les vignobles de Marlborough — patrie du sauvignon blanc mondialement connu. Toute cette pointe nord, autour de la ville artiste de Nelson, est la région la plus ensoleillée du pays et la plus détendue : un lieu de balades sur la plage, de kayak de mer, de fruits de mer et de vin.",
      practical: [
        { label: "Y aller", value: "Installez-vous à Nelson ou Motueka pour l’Abel Tasman ; à Picton (port du ferry depuis Wellington) pour les Marlborough Sounds et le Queen Charlotte Track." },
        { label: "Abel Tasman", value: "Parcourez des tronçons du Coast Track à la journée avec dépose en bateau-taxi, ou faites les criques en kayak ; la Great Walk complète (3–5 jours) dispose de refuges/campings — réservez à l’avance en été." },
        { label: "Au-delà", value: "Le Queen Charlotte Track dans les Sounds (à pied ou à vélo, avec bateau d’assistance), les domaines viticoles de Marlborough autour de Blenheim, et les sorties phoques/dauphins." },
        { label: "Quand", value: "Chaud, ensoleillé et fréquenté en été (déc.–févr.) ; charmant et plus calme en intersaison. C’est la région la plus ensoleillée de Nouvelle-Zélande." },
      ],
      stay:
        "Installez-vous à Nelson (artiste, ensoleillée, bonne table) ou à Motueka pour l’Abel Tasman, ou en bord de plage à Kaiteriteri/Mārahau, à l’entrée du parc. Dans les parcs, dormez dans un refuge de Great Walk, un camping ou un lodge de plage accessible en bateau-taxi — se réveiller face à une crique dorée et déserte, c’est tout l’intérêt.",
      tips: [
        "Combinez bateau-taxi et marche ou kayak à sens unique pour couvrir la plus belle côte sans porter votre matériel tout du long.",
        "Réservez à l’avance en été les déjeuners dans les domaines de Marlborough et la traversée en ferry.",
      ],
    },
    {
      name: "Queenstown, Glenorchy et Central Otago", category: "nature", coords: [-45.0312, 168.6626], region: "Otago, île du Sud",
      description: "Capitale de l’aventure au bord d’un lac cerné de pics déchiquetés — avec villages de la ruée vers l’or et pays du pinot tout proches.",
      wiki: "Queenstown, New Zealand",
      long:
        "Lovée au bord du lac Wakatipu, au pied de la chaîne bien nommée des Remarkables, Queenstown est la capitale néo-zélandaise de l’aventure — berceau du saut à l’élastique et haut lieu du jet-boat, du ski, du parapente, du VTT et de toutes les activités à sensations imaginables. Mais nul besoin de sauter dans le vide : le cadre à lui seul, lac d’un bleu profond et sommets dentelés, est spectaculaire, et la ville est une base animée et pittoresque pour toute la région des lacs du sud.\n\nLes vraies récompenses se trouvent juste au-delà de l’agitation. Prenez la superbe route jusqu’au petit Glenorchy, au fond du lac, porte d’entrée du Routeburn Track et des vallées qui ont servi de Terre du Milieu au cinéma. Visitez Arrowtown, village de la ruée vers l’or magnifiquement préservé, doré de couleurs d’automne. Dégustez un pinot noir de classe mondiale dans la vallée de Gibbston, et faites un détour par le paisible lac Wānaka en franchissant la chaîne alpine de Crown Range. Le concentré des temps forts de l’île du Sud.",
      practical: [
        { label: "Y aller", value: "Queenstown a son propre aéroport avec des vols directs ; c’est à ~3–4 h d’une route pittoresque depuis Milford, le mont Cook ou Wānaka." },
        { label: "À faire", value: "Saut à l’élastique et jet-boat si vous osez ; sinon la route de Glenorchy, les randonnées de Ben Lomond ou de Queenstown Hill, et la télécabine/luge pour la vue sur le lac." },
        { label: "Aux alentours", value: "L’historique Arrowtown (plus belle à l’automne), les domaines viticoles de la vallée de Gibbston, et Wānaka par la Crown Range — plus calme et tout aussi belle." },
        { label: "Quand", value: "L’été pour les randonnées et les journées au lac, l’automne pour les couleurs dorées et les bons prix, l’hiver pour le ski (Coronet Peak, The Remarkables)." },
      ],
      stay:
        "Queenstown même est centrale mais animée et chère ; pour une base plus calme, pensez à la décontractée Wānaka, au minuscule Glenorchy au fond du lac, ou à l’historique Arrowtown. Les chambres au bord du lac avec vue sur la montagne valent la dépense ici — mais les villes plus calmes offrent les mêmes paysages sans la foule.",
      tips: [
        "Faites la route de Glenorchy même si vous ne faites rien d’autre — c’est l’une des plus belles du pays.",
        "Installez-vous à Wānaka ou Arrowtown pour profiter de la région sans les prix ni l’agitation de Queenstown.",
      ],
    },
    {
      name: "Wellington", category: "cities", coords: [-41.2865, 174.7762], region: "Sud de l’île du Nord",
      description: "La capitale compacte et créative — un superbe musée national, une culture des cafés et un port battu par les vents.",
      wiki: "Wellington",
      long:
        "La capitale néo-zélandaise est une petite ville à la personnalité démesurée : enroulée autour d’un port spectaculaire et grimpant sur des collines abruptes couvertes de maisons, « Windy Welly » concentre plus de cafés, de bars, de librairies et de galeries par habitant que n’importe quelle autre ville du pays, plus une scène cinéma et bière artisanale florissante. Son centre à parcourir à pied, sa promenade en front de mer et son funiculaire historique jusqu’au jardin botanique en font une ville vraiment agréable où flâner un jour ou deux.\n\nL’attrait incontournable est Te Papa Tongarewa, le musée national — gratuit, brillant et inventif, qui raconte l’histoire de la terre, du traité et de la Nouvelle-Zélande māori et pākehā, avec un célèbre calmar colossal et une maison où l’on ressent un séisme. Ajoutez l’héritage littéraire et cinématographique (Weta Workshop est tout près), la côte sud peuplée de phoques et le ferry qui traverse le détroit de Cook vers l’île du Sud : Wellington est la charnière culturelle du pays — à savourer un rare jour calme et ensoleillé.",
      practical: [
        { label: "Y aller", value: "Aéroport de Wellington, ou le ferry pittoresque Interislander/Bluebridge depuis Picton à travers le détroit de Cook (un temps fort en soi)." },
        { label: "Te Papa", value: "Le musée national sur le front de mer — entrée gratuite (certaines expositions temporaires payantes) ; prévoyez une demi-journée. L’un des meilleurs musées de l’hémisphère sud." },
        { label: "À faire", value: "Prendre le funiculaire jusqu’au jardin botanique et redescendre à pied, flâner dans les cafés et bars de Cuba Street, et suivre la route du port et de la côte sud jusqu’à Red Rocks et ses phoques." },
        { label: "Quand", value: "Toute l’année, mais le vent peut être vraiment fort — prévoyez une couche. L’été et le début de l’automne offrent les journées les plus calmes et les plus ensoleillées." },
      ],
      stay:
        "Logez dans le centre, près du front de mer et de Cuba Street, pour rejoindre à pied Te Papa, les cafés et le funiculaire. Les guesthouses à flanc de colline offrent une vue sur le port et un aperçu des quartiers pentus et pleins de caractère de la ville.",
      tips: [
        "Accordez une vraie demi-journée à Te Papa — c’est la meilleure introduction à l’histoire du pays.",
        "Prenez le ferry du détroit de Cook de jour ; la traversée des Marlborough Sounds est spectaculaire.",
      ],
    },
    {
      name: "Franz Josef, Fox et la côte ouest", category: "nature", coords: [-43.4667, 170.1833], region: "Côte ouest, île du Sud",
      description: "Des glaciers qui se déversent dans la forêt pluviale, des plages de surf sauvages et l’histoire de la ruée vers l’or sur une côte rude.",
      wiki: "West Coast, New Zealand",
      long:
        "La côte ouest de l’île du Sud — « the Coast » — est la Nouvelle-Zélande dans ce qu’elle a de plus sauvage et de plus battu par les éléments : une longue bande peu peuplée, coincée entre les Alpes du Sud et la mer de Tasman, arrosée de pluies qui nourrissent une dense forêt pluviale tempérée, des rivières tonitruantes et, chose remarquable, des glaciers qui descendent presque jusqu’au niveau de la mer à travers la forêt. Les glaciers Franz Josef et Fox comptent parmi les plus accessibles au monde ; on peut marcher jusqu’aux points de vue sur leur front ou monter en hélicoptère sur la glace.\n\nAu-delà des glaciers, la côte récompense ceux qui prennent leur temps : le lac Matheson et son reflet d’Aoraki, les « pancake rocks » feuilletés et les souffleurs de Punakaiki, l’héritage de l’or et de la pierre verte de Hokitika, et de longues plages de surf jonchées de bois flotté où le soleil se couche sur la mer de Tasman. Sombre, couverte de forêt pluviale et merveilleusement déserte, c’est la côte des voyageurs qui aiment les paysages bruts et les routes vides.",
      practical: [
        { label: "Y aller", value: "La côte se parcourt en voiture : depuis Wānaka par le col de Haast, ou depuis Christchurch par Arthur’s Pass (ou le pittoresque train TranzAlpine jusqu’à Greymouth)." },
        { label: "Glaciers", value: "Marchez jusqu’aux points de vue des glaciers Franz Josef et Fox (gratuit, selon la météo), ou faites une héli-randonnée sur la glace (guidée, si la météo le permet)." },
        { label: "À ne pas manquer", value: "Les reflets du lac Matheson à l’aube, les Pancake Rocks et les souffleurs de Punakaiki à marée haute, et les ateliers de pierre verte (pounamu) et la gorge de Hokitika." },
        { label: "Quand", value: "Il pleut beaucoup ici toute l’année — gardez de la souplesse. Les éclaircies récompensent par les plus beaux reflets et les plus belles vues sur les glaciers." },
      ],
      stay:
        "Posez-vous une nuit ou deux dans les villages des glaciers, Franz Josef ou Fox, puis une autre près de Hokitika ou Punakaiki pour couper la longue côte. Les lodges en forêt pluviale ou en bord de plage permettent de voir le lac Matheson à l’aube ou un coucher de soleil sur la mer de Tasman quand le temps se dégage.",
      tips: [
        "Faites le lac Matheson aux premières lueurs, par un matin sans vent, pour le reflet en miroir des sommets.",
        "Gardez un itinéraire souple face à la météo — survols des glaciers et vues en dépendent entièrement.",
      ],
    },
  ],
};
