// Country ID card — schema reference lives in data/index.js
export default {
  code: "my",
  name: "Malaisie",
  flag: "🇲🇾",
  region: "Asie du Sud-Est",
  tagline: "Trois cuisines dans une assiette, une forêt tropicale plus ancienne que l’Amazonie et des comptoirs hors du temps.",
  tags: ["food", "nature", "history", "cities", "diving", "slow-travel"],

  languages: {
    name: "Malais (bahasa Malaysia)",
    note: "La langue nationale, écrite en alphabet latin et l’une des plus faciles d’Asie à apprendre — pas de tons, une grammaire simple. La Malaisie est profondément multilingue : malais, dialectes chinois, tamoul et un excellent anglais se mêlent librement, vous serez donc rarement bloqué.",
    phrases: [
      { fr: "Bonjour / Bienvenue", local: "Selamat datang", pron: "seu-LA-mat DA-tang" },
      { fr: "Merci", local: "Terima kasih", pron: "teu-RI-ma KA-sé" },
      { fr: "De rien", local: "Sama-sama", pron: "SA-ma SA-ma" },
      { fr: "Oui / Non", local: "Ya / Tidak", pron: "ya / TI-dak" },
      { fr: "Excusez-moi / Pardon", local: "Maaf", pron: "ma-AF" },
      { fr: "Combien ?", local: "Berapa harga?", pron: "beu-RA-pa HAR-ga ?" },
      { fr: "Où est… ?", local: "Di mana…?", pron: "di MA-na… ?" },
      { fr: "Délicieux !", local: "Sedap!", pron: "seu-DAP !" },
      { fr: "Eau", local: "Air", pron: "a-YEUR" },
      { fr: "On mange !", local: "Jom makan!", pron: "djom MA-kann !" },
      { fr: "Au revoir", local: "Selamat tinggal", pron: "seu-LA-mat TING-gal" },
    ],
  },

  history: {
    summary:
      "L’histoire de la Malaisie est faite de commerce, de détroits et de brassage des peuples. Dès le XVe siècle, le sultanat de Malacca contrôlait le détroit vital entre l’océan Indien et la mer de Chine méridionale, attirant marchands chinois, indiens, arabes, puis portugais, hollandais et britanniques — un carrefour qui fit de la péninsule l’un des coins les plus cosmopolites d’Asie. Sous la domination britannique, des vagues de migration chinoise et indienne, attirées par l’étain et le caoutchouc, ont façonné la société plurielle d’aujourd’hui. La Malaisie péninsulaire obtint son indépendance en 1957 et s’unit en 1963 à Singapour (qui la quitta en 1965), au Sabah et au Sarawak, sur Bornéo, pour former la Malaisie moderne. Le résultat est une fédération réellement multiculturelle de communautés malaise, chinoise et indienne, plus des dizaines de peuples autochtones à Bornéo — une diversité qui se goûte, surtout, dans l’assiette.",
    timeline: [
      { era: "v. 1400 (fondation de Malacca)", text: "Le sultanat de Malacca prend le contrôle du détroit et du commerce des épices, diffusant l’islam dans l’archipel." },
      { era: "1511 (Portugais)", text: "Le Portugal s’empare de Malacca, suivi des Hollandais (1641) puis des Britanniques — laissant des villes coloniales en strates." },
      { era: "XIXe siècle (Malaisie britannique)", text: "Les booms de l’étain et du caoutchouc attirent une immense migration chinoise et indienne, forgeant la société plurielle actuelle." },
      { era: "1957 (Merdeka)", text: "La Malaisie obtient son indépendance du Royaume-Uni — « Merdeka ! » est proclamé à Kuala Lumpur." },
      { era: "1963 (naissance de la Malaisie)", text: "La Malaisie se fédère avec le Sabah et le Sarawak sur Bornéo (et brièvement Singapour) pour créer la Malaisie moderne." },
    ],
  },

  books: [
    { title: "Le Jardin des brumes du soir", author: "Tan Twan Eng", year: "2012", note: "Un roman lumineux et primé sur la mémoire et un jardin japonais dans les Cameron Highlands après la guerre." },
    { title: "Le Don de la pluie", author: "Tan Twan Eng", year: "2007", note: "Penang à la veille de la Seconde Guerre mondiale, vue par un garçon à moitié chinois, à moitié anglais — évoque l’âme de l’île." },
    { title: "L’Archipel malais", author: "Alfred Russel Wallace", year: "1869", note: "Le récit classique du grand naturaliste sur la faune et les peuples de la région ; toujours un régal." },
    { title: "The Consul’s File", author: "Paul Theroux", year: "1977", note: "Des nouvelles liées sur la vie des expatriés dans une petite ville de l’intérieur de la Malaisie." },
    { title: "A History of Malaysia", author: "Barbara et Leonard Andaya", year: "1982", note: "La synthèse de référence, très lisible, sur le passé en strates du pays." },
  ],

  meals: [
    { name: "Nasi lemak", description: "Le plat national officieux — riz au lait de coco avec sambal, anchois frits, cacahuètes, œuf et concombre, enveloppé dans une feuille de bananier pour le petit-déjeuner.", tip: "Mangez-le le matin à un stand de bord de route ; tout l’art est dans l’équilibre entre le sambal incendiaire et le riz onctueux." },
    { name: "Laksa", description: "Une famille de soupes de nouilles qui change selon la région : l’assam laksa de Penang, acidulé au tamarin et au poisson, face au riche laksa lemak au curry coco ailleurs." },
    { name: "Char kway teow", description: "Nouilles de riz plates sautées à feu vif avec crevettes, œuf, coques et pousses de soja — le fameux « wok hei », goût de grillé du wok, fait tout." },
    { name: "Roti canai et cuisine indo-musulmane", description: "Galette feuilletée cuite sur la plaque, déchirée et trempée dans le dhal ou le curry à un stand mamak — le cœur, ouvert jour et nuit, de la street food malaisienne." },
    { name: "Cuisine nyonya (peranakan)", description: "La fusion sino-malaise de Malacca et Penang — des plats comme l’ayam pongteh et les kuih, acidulés, herbacés et sans équivalent." },
    { name: "Satay et hawker centres", description: "Brochettes grillées sauce cacahuète, et la glorieuse institution des hawker centres, où une douzaine de stands d’héritages différents partagent votre table." },
  ],

  climate: {
    unit: "°C",
    note: "Équatorial, chaud et humide toute l’année ; les chiffres sont ceux de Kuala Lumpur. Pas de vraie saison sèche, seulement des périodes plus humides : la côte est de la péninsule et les îles Perhentian/Tioman sont au plus humide de novembre à février (beaucoup d’hôtels ferment), tandis que la côte ouest (Penang, Langkawi) est alors à son meilleur. Bornéo est aussi au plus humide vers novembre–février. Les hautes terres comme les Cameron restent fraîches toute l’année.",
    coords: [3.14, 101.69], // Kuala Lumpur — representative point for the fetch script
    key: "my",
    best: [1, 2, 6, 7, 8],
    avoid: [11],
    months: [
      { mean: 27, rain: 168 }, { mean: 28, rain: 168 }, { mean: 28, rain: 235 },
      { mean: 28, rain: 277 }, { mean: 28, rain: 210 }, { mean: 28, rain: 133 },
      { mean: 28, rain: 141 }, { mean: 28, rain: 160 }, { mean: 27, rain: 209 },
      { mean: 27, rain: 289 }, { mean: 27, rain: 322 }, { mean: 27, rain: 240 },
    ],
  },

  events: [
    { name: "Nouvel An chinois", when: "Janv. / févr. (variable)", months: [1, 2], kind: "go", description: "Danses du lion, portes ouvertes et temples éclairés de lanternes, en plus grand à Penang et dans le Chinatown de KL — festif, mais réservez à l’avance car beaucoup de commerces tenus par des Chinois ferment quelques jours." },
    { name: "Hari Raya Aidilfitri", when: "Fin du ramadan (recule d’~11 jours par an)", months: [], kind: "note", description: "La joyeuse fin du mois de jeûne musulman — de grandes vacances de retour au pays, de festins et de « portes ouvertes » ; les transports sont saturés et les villes se vident pour l’exode du balik kampung." },
    { name: "Thaipusam", when: "Janv. / févr. (pleine lune)", months: [1, 2], kind: "go", description: "La spectaculaire fête hindoue des grottes de Batu près de KL, où les fidèles portent des kavadi ornés lors d’une procession colorée et intense jusqu’en haut des marches du temple." },
    { name: "Mousson de la côte est", when: "Novembre – février", months: [11, 12, 1, 2], kind: "avoid", description: "De fortes pluies et une mer agitée ferment beaucoup d’hôtels des îles de la côte est de la péninsule (Perhentian, Tioman). Pendant ces mois, privilégiez plutôt la côte ouest et les hautes terres." },
  ],

  places: [
    {
      name: "George Town, Penang", category: "food", coords: [5.4141, 100.3288], region: "Penang (côte ouest)",
      description: "Une ville marchande classée par l’UNESCO, faite de shophouses, de temples claniques et de street art — et la meilleure cuisine de rue de Malaisie.",
      wiki: "George Town, Penang",
      long:
        "George Town, c’est la Malaisie dans son mélange le plus glorieux : un quadrillage classé par l’UNESCO de shophouses chinoises aux couleurs pastel, de temples claniques ornés (kongsi), de mosquées, de sanctuaires hindous et de bâtiments coloniaux britanniques, tous serrés dans un vieux quartier à parcourir à pied, bourdonnant de cyclo-pousses et de cafés. Ses demeures peranakan, ses jetées sur pilotis bâties par les clans chinois et ses célèbres fresques murales récompensent des heures de flânerie sans but.\n\nAvant tout, George Town est un pèlerinage gourmand — régulièrement classée parmi les meilleures villes de street food au monde. Char kway teow, assam laksa, cendol, Hokkien mee et kuih nyonya se dégustent dans des stands et des coffee shops qui perfectionnent un seul plat depuis des générations. Venez arpenter les ruelles de shophouses dans la lumière du matin et manger, sérieusement, du petit-déjeuner au souper. La ville la plus enrichissante du pays.",
      practical: [
        { label: "Y aller", value: "Vol jusqu’à Penang (PEN), ou train jusqu’à Butterworth puis ferry. La vieille ville est compacte et se découvre au mieux à pied." },
        { label: "Manger", value: "Suivez les files d’attente des hawker centres comme New Lane et Chulia Street ; assam laksa, char kway teow et cendol sont incontournables. Beaucoup de stands ferment leur propre jour de repos." },
        { label: "Flâner", value: "Les jetées des clans, le temple clanique Khoo Kongsi, la Cheong Fatt Tze (Maison bleue) et les fresques d’Armenian Street." },
        { label: "Quand", value: "Nov.–févr. (saison sèche sur cette côte ouest) est agréable ; la chaleur et l’humidité sont constantes toute l’année." },
      ],
      stay:
        "Dormez dans une shophouse restaurée ou un hôtel patrimonial peranakan au cœur de la zone UNESCO (autour d’Armenian Street et de Love Lane), pour rejoindre à pied temples, fresques et stands, et flâner dans les ruelles tôt, avant la chaleur.",
      tips: [
        "Mangez là où les habitants font la queue, et allez-y tôt — les meilleurs plats des stands sont épuisés en milieu d’après-midi.",
        "Fuyez la chaleur en montant à Penang Hill en funiculaire, et visitez le paisible temple de Kek Lok Si.",
      ],
    },
    {
      name: "Malacca (Melaka)", category: "history", coords: [2.1896, 102.2501], region: "Malacca (côte ouest)",
      description: "Un vieux port aux strates multiples : bâtiments rouge hollandais, temples chinois et maisons peranakan au bord d’une rivière nonchalante.",
      wiki: "Malacca City",
      long:
        "Malacca fut le grand comptoir qui donna son nom au détroit, et 500 ans de domination et de peuplement malais, portugais, hollandais, britannique, chinois et indien ont laissé une petite ville stratifiée comme nulle part ailleurs. La place rouge hollandaise du Stadthuys, l’église portugaise en ruine de Saint-Paul sur sa colline, les ruelles remplies d’antiquités de Jonker Street et les temples chinois et hindous ornés de Harmony Street se trouvent tous à quelques pas les uns des autres.\n\nMalacca est aussi un berceau de la culture peranakan (baba-nyonya) — la fusion sino-malaise née de siècles de mariages mixtes, visible dans ses somptueuses maisons-musées et savourée dans sa cuisine nyonya si particulière. Une ville UNESCO à savourer lentement : flânez le long de la rivière, goûtez les boulettes de riz au poulet et le cendol, et calez votre visite sur le marché de nuit de Jonker Street le week-end.",
      practical: [
        { label: "Y aller", value: "~2 h en bus depuis Kuala Lumpur ; facile sur une nuit ou une longue journée. La vieille ville est compacte et se visite à pied." },
        { label: "À voir", value: "Le Stadthuys et la colline Saint-Paul, Jonker Street, le musée du patrimoine baba et nyonya, et les temples de Harmony Street." },
        { label: "Manger", value: "Laksa nyonya, boulettes de riz au poulet, satay celup et cendol — la cuisine de Malacca est un temps fort à elle seule." },
        { label: "Quand", value: "Venez du vendredi au dimanche pour le marché de nuit de Jonker Street, mais attendez-vous à la foule ; en semaine, musées et ruelles sont plus calmes." },
      ],
      stay:
        "Logez dans une guesthouse aménagée dans une shophouse peranakan restaurée, sur Jonker Street ou juste à côté, pour être au cœur de la vieille ville lors de la balade matinale le long de la rivière et du marché de nuit. Les hôtels de charme au bord de la rivière sont aussi très agréables.",
      tips: [
        "Promenez-vous dans les ruelles résidentielles peranakan (Jalan Tun Tan Cheng Lock) pour les plus belles façades de maisons.",
        "Faites la courte croisière sur la rivière au crépuscule, quand les vieilles shophouses s’illuminent.",
      ],
    },
    {
      name: "Forêt de Bornéo : Danum Valley et Kinabatangan", category: "nature", coords: [5.4030, 118.0330], region: "Sabah (Bornéo)",
      description: "Une jungle primaire et une rivière grouillante de vie — orangs-outans, éléphants pygmées et calaos à l’état sauvage.",
      wiki: "Danum Valley Conservation Area",
      long:
        "Bornéo abrite certaines des plus anciennes forêts tropicales de la planète — 130 millions d’années, bien plus vieilles que l’Amazonie — et le Sabah malaisien est l’endroit idéal pour y pénétrer. La Danum Valley est une vaste étendue de forêt primaire de plaine intacte, où sentiers guidés et passerelles dans la canopée vous plongent dans un monde vertigineux et ruisselant de géants diptérocarpes, de cris de gibbons à l’aube, avec la chance de croiser des orangs-outans sauvages, non habitués à l’homme et vraiment libres.\n\nPlus facile pour la faune, la rivière Kinabatangan concentre les animaux le long de ses berges boisées : les safaris en bateau à l’aube et au crépuscule offrent nasiques, macaques, calaos, crocodiles et, avec de la chance, les éléphants pygmées menacés. Combinez les deux — un lodge au bord de la rivière et un centre de terrain dans la jungle — pour la plus belle expérience animalière d’Asie du Sud-Est. Venez pour les animaux ; restez pour le silence originel de la forêt.",
      practical: [
        { label: "Y aller", value: "Vol jusqu’à Lahad Datu (pour Danum) ou Sandakan (pour la Kinabatangan), via Kota Kinabalu ; les lodges organisent les transferts." },
        { label: "Danum Valley", value: "Accès uniquement via les lodges/centres de terrain (Borneo Rainforest Lodge ou le centre de recherche) ; réservez à l’avance — c’est isolé, guidé et pas bon marché, mais inoubliable." },
        { label: "Kinabatangan", value: "Les lodges riverains autour de Sukau/Bilit proposent des safaris en bateau à l’aube et au crépuscule ; 2–3 nuits donnent les meilleures chances d’observation. Plus abordable que Danum." },
        { label: "Faune éthique", value: "Voyez les orangs-outans sauvages ici, ou au centre de réhabilitation de Sepilok près de Sandakan — évitez toute attraction où l’on « tient l’animal »." },
      ],
      stay:
        "À Danum, le choix se fait entre un lodge en pleine forêt et le centre de recherche, plus simple — l’un comme l’autre vous placent au cœur de la jungle primaire, avec balades nocturnes guidées et passerelles dans la canopée. Sur la Kinabatangan, un lodge dans la jungle au bord de la rivière, à Sukau ou Bilit, sert de base pour les safaris en bateau ; prévoyez deux nuits minimum.",
      tips: [
        "L’aube est le meilleur moment pour la faune, sur la rivière comme sur les sentiers — prenez le premier bateau ou la première balade.",
        "Apportez des chaussettes anti-sangsues, un bon répulsif, une lampe et un sac étanche ; la forêt est humide et grouillante de vie.",
      ],
    },
    {
      name: "Mont Kinabalu", category: "trek", coords: [6.0753, 116.5586], region: "Sabah (Bornéo)",
      description: "Le sommet de granit emblématique de l’Asie du Sud-Est — deux jours d’ascension vers une cime déchiquetée de 4 095 m au-dessus des nuages.",
      wiki: "Mount Kinabalu",
      long:
        "S’élevant brusquement à 4 095 mètres, le mont Kinabalu est le plus haut sommet entre l’Himalaya et la Nouvelle-Guinée et la pièce maîtresse d’un parc inscrit au patrimoine mondial de l’UNESCO pour son extraordinaire biodiversité — ses pentes passent de forêts de chênes et de rhododendrons au granit nu, et abritent des népenthès carnivores et des orchidées introuvables ailleurs. La montagne est sacrée pour les Kadazan-Dusun locaux, qui y voient la demeure des morts.\n\nL’ascension classique est une montée exigeante mais non technique en deux jours : à travers la forêt jusqu’à un refuge, puis une escalade avant l’aube sur le dôme de granit nu pour atteindre le sommet, le Low’s Peak, au lever du soleil au-dessus d’une mer de nuages. Les permis sont limités et doivent être réservés longtemps à l’avance. Même sans grimper, les sentiers frais du parc, ainsi que les sources chaudes et la passerelle dans la canopée de Poring tout proche, font une belle pause en altitude.",
      practical: [
        { label: "Y aller", value: "~2 h de route depuis Kota Kinabalu jusqu’au QG du parc (~1 560 m)." },
        { label: "L’ascension", value: "2 jours / 1 nuit, en dormant à Laban Rata ; guide obligatoire et permis d’ascension rare — réservez des mois à l’avance via un opérateur agréé." },
        { label: "Condition physique", value: "Non technique mais dur : ~8 km et 2 200 m de dénivelé, départ vers le sommet à 2 h du matin, et l’altitude. Des couches chaudes et imperméables et une frontale sont indispensables." },
        { label: "Sans grimper ?", value: "Les sentiers forestiers du parc, le jardin botanique, et les sources chaudes et la passerelle de canopée de Poring offrent une belle journée au frais." },
      ],
      stay:
        "Les grimpeurs dorment dans les refuges de Laban Rata (réservés avec le permis). Au pied de la montagne, les lodges du QG du parc et les guesthouses de Kundasang, tout proche, permettent de s’acclimater et de profiter de l’air frais des hauteurs, avec vue sur la vallée et le sommet.",
      tips: [
        "Réservez le permis et le refuge des mois à l’avance — le nombre de grimpeurs par jour est strictement limité.",
        "Montez lentement et buvez beaucoup pour contrer l’altitude ; le lever de soleil au-dessus des nuages est la récompense.",
      ],
    },
    {
      name: "Cameron Highlands", category: "nature", coords: [4.4710, 101.3771], region: "Pahang (intérieur de la péninsule)",
      description: "Des collines fraîches et brumeuses de plantations de thé, sentiers de jungle et fermes à fraises — une station d’altitude coloniale.",
      wiki: "Cameron Highlands",
      long:
        "Dans les montagnes brumeuses de l’épine dorsale de la péninsule, les Cameron Highlands forment un monde à part au climat frais — plantations de thé vertes et ondulantes peignant les collines, forêt de montagne moussue, et un air persistant de station coloniale avec ses guesthouses de style Tudor et ses scones à l’heure du thé. Les Britanniques les ont aménagées pour fuir la chaleur des plaines ; à 1 500 mètres, les journées ont la fraîcheur du printemps et les nuits demandent une couverture.\n\nAu-delà des célèbres domaines de thé, où l’on peut marcher entre les rangs et prendre une tasse sur une terrasse dominant la vallée, on trouve des sentiers de jungle (dont l’étrange « forêt moussue », toute ruisselante), des fermes de fraises et de miel, et des nuées de papillons. Une pause facile et douce loin des basses terres tropicales — à savourer lentement, avec une balade entre les théiers et un long regard sur la vue.",
      practical: [
        { label: "Y aller", value: "~3–4 h en bus ou en voiture depuis Kuala Lumpur ou Penang, par une longue route sinueuse. Logez à Tanah Rata (la ville principale) ou à Brinchang, plus calme." },
        { label: "À faire", value: "Visiter la plantation de thé BOH et marcher entre les rangs, randonner sur les sentiers de jungle numérotés, et parcourir la passerelle de la forêt moussue (guide obligatoire)." },
        { label: "Quand", value: "Frais toute l’année (15–25 °C) ; les après-midi se couvrent souvent et il pleut, alors prévoyez les activités en extérieur le matin." },
        { label: "Manger", value: "La fondue asiatique (steamboat) convient aux nuits fraîches ; les fraises et les légumes d’altitude sont une spécialité locale." },
      ],
      stay:
        "Installez-vous à Tanah Rata pour les restaurants et les départs de sentiers, ou dans une guesthouse plus calme ou un vieux lodge de style colonial vers Brinchang, au milieu du thé. Une chambre avec vue sur la vallée et une nuit fraîche, voilà l’attrait après la chaleur des plaines.",
      tips: [
        "Parcourez l’un des sentiers de jungle balisés le matin, avant l’arrivée de la brume et de la pluie de l’après-midi.",
        "Visitez la plantation de thé tôt ou tard pour éviter la foule des cars sur les terrasses.",
      ],
    },
    {
      name: "Îles Perhentian", category: "diving", coords: [5.9130, 102.7440], region: "Terengganu (côte est)",
      description: "Une eau turquoise limpide, des récifs coralliens et des tortues, au large de deux petites îles de jungle sans voitures.",
      wiki: "Perhentian Islands",
      long:
        "Au large de la côte nord-est de la péninsule, les deux îles Perhentian sont l’image même de l’évasion tropicale décontractée : baies de sable blanc, eau turquoise et chaude, récifs coralliens grouillant de poissons et de tortues, et un intérieur de jungle traversé seulement par des sentiers — pas de voitures, et souvent pas de routes du tout. Kecil (« la petite ») est plus routarde et sociable ; Besar (« la grande ») est plus calme et un peu plus confortable.\n\nL’attrait, c’est l’eau : un snorkeling et une plongée superbes et bon marché directement depuis la plage ou lors de courtes sorties en bateau, avec tortues vertes et imbriquées, requins de récif et nuées de poissons tropicaux. Ici, les journées se dissolvent entre baignade, lecture et passage d’une plage à l’autre à pied par les sentiers de jungle. Tournées vers la mer de Chine méridionale, les îles suivent la mousson de la côte est et ferment en grande partie de novembre à février — venez entre mars et octobre.",
      practical: [
        { label: "Y aller", value: "Hors-bord (~30–40 min) depuis la jetée de Kuala Besut, accessible en bus/vol jusqu’à Kota Bharu ou par le long trajet depuis KL. Prévoyez du liquide — les distributeurs sont rares sur les îles." },
        { label: "Quand y aller", value: "De mars à octobre uniquement ; la mousson du nord-est ferme la plupart des hôtels et des bateaux de novembre à février environ, avec une mer agitée." },
        { label: "À faire", value: "Snorkeling ou plongée sur les récifs proches et les spots à tortues ; balades sur les sentiers de jungle entre les baies ; kayak dans les criques calmes." },
        { label: "À noter", value: "Les équipements sont simples et l’électricité peut être limitée ; c’est une destination pour nager et se détendre, pas pour faire la fête." },
      ],
      stay:
        "Choisissez Besar pour un séjour plus calme et plus doux, ou Long Beach sur Kecil pour plus d’animation. De simples chalets de plage et bungalows de centres de plongée sont la norme — choisissez une baie tranquille, faites du snorkeling depuis le sable et laissez les jours filer lentement.",
      tips: [
        "Apportez assez de liquide pour tout votre séjour — paiement par carte et distributeurs ne sont pas fiables.",
        "Le matériel de snorkeling se loue pour peu ; les plus beaux récifs sont à un court saut de bateau ou à une nage facile du rivage.",
      ],
    },
    {
      name: "Kuala Lumpur : Kampung Baru, grottes de Batu et vieux centre", category: "cities", coords: [3.1478, 101.6953], region: "Kuala Lumpur",
      description: "Architecture coloniale et islamique, un temple-grotte perché et de vieilles maisons malaises en bois au pied des tours.",
      wiki: "Kuala Lumpur",
      long:
        "La capitale malaisienne ne se résume pas aux tours jumelles Petronas des cartes postales. Son vieux centre colonial autour de la place Merdeka mêle coupoles britannico-mauresques (le bâtiment du sultan Abdul Samad), l’élégante mosquée Jamek au confluent des rivières qui a donné son nom à la ville, et les ruelles animées de Chinatown et de Little India toutes proches. L’exquise Mosquée nationale à la coupole bleue et le musée des Arts islamiques révèlent le cœur musulman de la ville.\n\nLa surprise la plus pleine d’atmosphère est Kampung Baru, une enclave de vieilles maisons malaises en bois sur pilotis et de stands de cuisine du ramadan, survivant à l’ombre des gratte-ciel. Juste au nord du centre, les grottes de Batu — un immense temple-caverne calcaire auquel on accède par 272 marches peintes aux couleurs de l’arc-en-ciel, sous une statue dorée géante de Murugan — sont un spectaculaire lieu de pèlerinage hindou et le cadre de la fête de Thaipusam. KL récompense ceux qui regardent au-delà des centres commerciaux.",
      practical: [
        { label: "Y aller", value: "L’aéroport KLIA est relié au centre par un train rapide ; la ville dispose d’un réseau de métro LRT/MRT et de monorail simple et bon marché." },
        { label: "Grottes de Batu", value: "~13 km au nord, accessibles par le train KTM Komuter ; entrée gratuite, tenue correcte. Allez-y tôt pour éviter chaleur et foule ; surveillez vos sacs à cause des singes." },
        { label: "Flâner", value: "La place Merdeka et le quartier colonial, la mosquée Jamek, le Central Market, Chinatown (Petaling Street) et Kampung Baru pour la cuisine malaise." },
        { label: "À ne pas manquer", value: "Le musée des Arts islamiques près de la Mosquée nationale — l’un des plus beaux du genre en Asie." },
      ],
      stay:
        "Logez près du vieux centre (autour de Chinatown ou de la rivière) pour le patrimoine et les transports, plutôt que dans le quartier de KLCC, dominé par les centres commerciaux. Les hôtels installés dans des shophouses restaurées de Chinatown vous placent à distance de marche des bâtiments coloniaux, des temples et des rues gourmandes.",
      tips: [
        "Prenez le bus urbain gratuit GOKL et le métro pour éviter la circulation dense de KL.",
        "Le soir, mangez à Kampung Baru ou dans la rue de hawkers de Jalan Alor pour la meilleure street food de la ville.",
      ],
    },
    {
      name: "Sarawak : Kuching et Bako", category: "offbeat", coords: [1.5535, 110.3593], region: "Sarawak (Bornéo)",
      description: "La ville la plus charmante de Bornéo — vieille ville au bord de l’eau, culture des maisons longues et nasiques à deux pas.",
      wiki: "Kuching",
      long:
        "Kuching, capitale du Sarawak à Bornéo, est la ville la plus attachante de la Bornéo malaisienne — une ville détendue au bord du fleuve, avec un vieux centre plein de charme fait de shophouses chinoises, de forts coloniaux et de l’héritage singulier des « rajahs blancs », la famille Brooke qui régna sur le Sarawak pendant un siècle. Ses excellents musées, ses statues de chats (kucing signifie chat) et sa superbe cuisine sarawakienne si particulière — laksa et kolo mee — en font un bonheur à parcourir, surtout le long des quais récemment réaménagés au crépuscule.\n\nKuching est aussi la porte d’entrée d’une profusion de nature et de culture : le parc national de Bako, à une courte traversée en bateau, offre sentiers en forêt tropicale, falaises marines sculptées et observation quasi garantie de l’étonnant nasique au grand nez ; tandis qu’à l’intérieur des terres, on peut visiter des communautés iban vivant en maisons longues et le centre d’orangs-outans de Semenggoh. C’est Bornéo rendue accessible, et elle charme presque tous ceux qui y viennent.",
      practical: [
        { label: "Y aller", value: "Vol jusqu’à Kuching (KCH) depuis KL, Singapour ou Kota Kinabalu. La vieille ville compacte et les quais se parcourent à pied." },
        { label: "Parc national de Bako", value: "~45 min de route jusqu’au village de Bako, puis un court trajet en bateau (selon la marée) ; parcourez les sentiers pour voir nasiques, sangliers barbus et pitons marins. À la journée ou avec une nuit à l’auberge du parc." },
        { label: "Aux alentours", value: "Semenggoh pour voir des orangs-outans semi-sauvages à l’heure du repas, et visites/nuits chez l’habitant dans les maisons longues iban en amont du fleuve." },
        { label: "Manger", value: "Laksa du Sarawak au petit-déjeuner et kolo mee — les nouilles locales sont incontournables et sans rapport avec la cuisine de la péninsule." },
      ],
      stay:
        "Installez-vous dans un hôtel au bord du fleuve ou dans la vieille ville de Kuching, à distance de marche des musées, des shophouses et des quais le soir. Pour aller plus loin, passez une nuit au simple lodge du parc de Bako pour voir la faune à l’aube et au crépuscule, ou organisez une nuit chez l’habitant dans une maison longue iban à l’intérieur des terres.",
      tips: [
        "Faites Bako sur une nuit, pas seulement à la journée, pour parcourir les sentiers quand les singes sont les plus actifs.",
        "La laksa du Sarawak au petit-déjeuner est un rituel local — trouvez un coffee shop animé et joignez-vous à la fête.",
      ],
    },
  ],
};
