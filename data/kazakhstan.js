// Country ID card — schema reference lives in data/index.js
export default {
  code: "kz",
  name: "Kazakhstan",
  flag: "🇰🇿",
  region: "Asie centrale",
  tagline: "La grande steppe — prairies dorées, villes de marbre et canyons au bout du monde.",
  tags: ["nature", "history", "trek", "cities", "slow-travel"],

  languages: {
    name: "Kazakh et russe",
    note: "Le kazakh, langue turcique, est la langue officielle ; après des décennies de cyrillique, il s’écrit de plus en plus en alphabet latin. Le russe reste très parlé comme langue commune du quotidien, surtout en ville et dans le nord. Quelques mots de l’une ou l’autre sont accueillis chaleureusement dans un pays habitué à recevoir.",
    phrases: [
      { fr: "Bonjour", local: "Сәлеметсіз бе", pron: "sa-lé-met-SIZ bé" },
      { fr: "Merci", local: "Рахмет", pron: "rakh-MET" },
      { fr: "Oui / Non", local: "Иә / Жоқ", pron: "i-YA / jok" },
      { fr: "S’il vous plaît", local: "Өтінемін", pron: "eu-ti-né-MINE" },
      { fr: "Excusez-moi / Pardon", local: "Кешіріңіз", pron: "ké-chi-ri-NIZ" },
      { fr: "Combien ?", local: "Қанша?", pron: "kann-CHA ?" },
      { fr: "Où est… ?", local: "…қайда?", pron: "… kaï-DA ?" },
      { fr: "Délicieux !", local: "Дәмді!", pron: "dèm-DI !" },
      { fr: "Eau / Thé", local: "Су / Шай", pron: "sou / chaï" },
      { fr: "Bienvenue / entrez", local: "Қош келдіңіз", pron: "koch kel-di-NIZ" },
      { fr: "Au revoir", local: "Сау болыңыз", pron: "saou bo-leu-NIZ" },
    ],
  },

  history: {
    summary:
      "Le Kazakhstan est le cœur de la grande steppe eurasienne, et son histoire est celle du cheval et du nomade. C’est peut-être ici que l’homme a domestiqué le cheval pour la première fois (culture de Botaï, vers 3500 av. J.-C.) ; pendant des millénaires, la steppe fut le domaine des cavaliers scythes et saces — dont l’« Homme d’or », un guerrier enterré dans une armure d’or, est aujourd’hui un symbole national — puis des khanats turciques et des hordes mongoles de Gengis Khan. La route de la Soie traversait ses villes-oasis du sud, comme Turkestan et Otrar. Aux XVIIIe et XIXe siècles, les khanats kazakhs furent absorbés par l’Empire russe ; sous l’Union soviétique, la steppe subit la sédentarisation forcée, la famine, le Goulag, les essais nucléaires de Semipalatinsk et le lancement de l’ère spatiale depuis Baïkonour. Indépendant depuis 1991, ce pays immense, riche en pétrole et peu peuplé — le neuvième plus grand du monde — a bâti de toutes pièces une nouvelle capitale, Astana, au milieu de la steppe du nord, et se forge une identité moderne et assurée, enracinée dans son passé nomade.",
    timeline: [
      { era: "v. 3500 av. J.-C. (Botaï)", text: "Les peuples de la steppe sont parmi les tout premiers à dompter et monter le cheval." },
      { era: "Ier millénaire av. J.-C. (Saces et Scythes)", text: "Des guerriers nomades à cheval règnent sur la steppe ; l’« Homme d’or », vêtu d’or, sera plus tard découvert près d’Almaty." },
      { era: "XIIIe s. (conquête mongole)", text: "L’empire de Gengis Khan déferle sur la steppe ; la région intègre la Horde d’or." },
      { era: "XVIIIe–XIXe s. (domination russe)", text: "Les khanats kazakhs sont peu à peu absorbés par l’Empire russe." },
      { era: "1991 (indépendance)", text: "Le Kazakhstan devient indépendant à la chute de l’URSS ; une nouvelle capitale surgit dans la steppe du nord." },
    ],
  },

  books: [
    { title: "The Silent Steppe", author: "Mukhamet Shayakhmetov", year: "2006", note: "Rare témoignage de première main : une enfance nomade brisée par la collectivisation et la famine soviétiques." },
    { title: "Apples Are from Kazakhstan", author: "Christopher Robbins", year: "2008", note: "Un portrait chaleureux et curieux du pays par un voyageur (dont les forêts de pommiers sauvages ont donné la pomme au monde)." },
    { title: "Une journée plus longue qu’un siècle", author: "Tchinguiz Aïtmatov", year: "1980", note: "Un classique d’Asie centrale qui entrelace légendes de la steppe, programme spatial et vie soviétique." },
    { title: "Les Nomades", author: "Ilyas Yesenberlin", year: "1976", note: "La grande fresque historique des khanats kazakhs, chérie comme une saga nationale." },
    { title: "In Search of Kazakhstan", author: "Christopher Robbins", year: "2008", note: "Autre titre/édition du voyage affectueux de Robbins à travers le pays." },
  ],

  meals: [
    { name: "Beshbarmak", description: "Le plat national — cheval ou agneau bouilli servi sur de larges pâtes plates avec un bouillon aux oignons, mangé ensemble avec les mains (« cinq doigts »).", tip: "Servi lors des fêtes sur un plat commun ; l’invité d’honneur peut se voir offrir la tête du mouton. Acceptez avec grâce." },
    { name: "Kazy et viande de cheval", description: "Le cheval est très apprécié ici — le kazy (saucisse de cheval) et le shuzhuk sont des mets de fête, riches et savoureux." },
    { name: "Baursak", description: "Petits carrés de pâte frite et gonflée, empilés et servis avec thé, confiture et beurre à chaque réunion — le goût de l’hospitalité kazakhe." },
    { name: "Plov (palov)", description: "Le pilaf de riz d’Asie centrale à l’agneau, à la carotte et au cumin — partagé dans toute la région et incontournable dans le sud du Kazakhstan." },
    { name: "Koumis et shubat", description: "Lait de jument fermenté (koumis) et lait de chamelle (shubat) — boissons nomades acidulées et légèrement alcoolisées, un goût authentique qui s’apprivoise." },
    { name: "Manti et samsa", description: "Raviolis d’agneau à la vapeur (manti) et chaussons feuilletés à la viande cuits au four tandyr (samsa) — la cuisine réconfortante de la route de la Soie." },
  ],

  climate: {
    unit: "°C",
    note: "Immense et très continental — les chiffres sont ceux d’Almaty, dans le sud-est montagneux. Les étés sont chauds, les hivers glacials et enneigés, et la steppe du nord (avec la capitale, Astana — l’une des capitales les plus froides du monde) est encore plus extrême. La fin du printemps (mai–juin) et le début de l’automne (septembre) sont les meilleurs moments pour la montagne et la steppe.",
    coords: [43.24, 76.89], // Almaty — representative point for the fetch script
    key: "kz",
    best: [5, 6, 9],
    avoid: [11, 12, 1, 2],
    months: [
      { mean: -5, rain: 30 }, { mean: -4, rain: 34 }, { mean: 3, rain: 62 },
      { mean: 11, rain: 96 }, { mean: 16, rain: 103 }, { mean: 21, rain: 61 },
      { mean: 24, rain: 37 }, { mean: 23, rain: 27 }, { mean: 17, rain: 27 },
      { mean: 9, rain: 50 }, { mean: 2, rain: 45 }, { mean: -3, rain: 36 },
    ],
  },

  events: [
    { name: "Nauryz (Nouvel An perse et de la steppe)", when: "21–22 mars", months: [3], kind: "go", description: "La joyeuse fête de l’équinoxe de printemps dans toute l’Asie centrale — yourtes, jeux équestres, musique et partage du nauryz-kozhe. Un moment merveilleux et coloré, même s’il fait encore froid et que la saison n’a pas commencé en montagne." },
    { name: "L’été en montagne et dans la steppe", when: "Mai – septembre", months: [5, 6, 7, 8, 9], kind: "go", description: "La fenêtre idéale pour les canyons, les lacs alpins et la steppe : fleurs sauvages à la fin du printemps, temps doux pour randonner en été et lumière dorée en septembre." },
    { name: "Jeux nomades et chasse à l’aigle", when: "Automne", months: [9, 10], kind: "note", description: "Les jeux équestres traditionnels (kokpar) et les démonstrations de chasse à l’aigle royal ont lieu pendant les mois plus frais — renseignez-vous sur place, ou visez un festival comme les Jeux mondiaux nomades quand ils sont organisés." },
    { name: "Plein hiver", when: "Novembre – février", months: [11, 12, 1, 2], kind: "avoid", description: "Un froid brutal dans tout le pays ; routes de montagne et trajets dans la steppe deviennent difficiles. Parfait pour skier à Shymbulak au-dessus d’Almaty, mais l’essentiel des circuits attend le printemps." },
  ],

  places: [
    {
      name: "Canyon de Charyn", category: "nature", coords: [43.3550, 79.0800], region: "près d’Almaty (sud-est)",
      description: "Une « Vallée des Châteaux » de roche rouge creusée par une rivière dans la steppe — le Grand Canyon de l’Asie centrale en miniature.",
      wiki: "Charyn Canyon",
      long:
        "À environ trois heures à l’est d’Almaty, la steppe s’ouvre soudain sur le canyon de Charyn, une gorge de 150 mètres de profondeur aux grès rouges fantastiquement érodés, creusée par la rivière Charyn au fil de millions d’années. Sa section la plus célèbre, la « Vallée des Châteaux », est un canyon latéral asséché hérissé de pinacles et de flèches sculptés, que l’on descend à pied jusqu’à la rivière — particulièrement flamboyant au lever et au coucher du soleil, quand la roche vire à l’orange et au rouge.\n\nAu fond du canyon, un étonnant ruban de frênaie (une rare forêt relique) borde la rivière verte et rapide : un bel endroit pour camper et regarder la lumière changer sur les parois. Souvent combiné avec les lacs turquoise de Kolsaï et de Kaïndy dans les montagnes voisines, Charyn est l’escapade classique d’un ou deux jours depuis Almaty et l’un des paysages emblématiques du pays.",
      practical: [
        { label: "Y aller", value: "~200 km / ~3 h à l’est d’Almaty en voiture ou en excursion ; pas de transport public pratique, donc louez un chauffeur ou rejoignez un groupe." },
        { label: "La balade", value: "Un sentier de ~3 km descend la Vallée des Châteaux jusqu’à la rivière, aller-retour — facile mais exposé et chaud ; prévoyez de l’eau, une protection solaire et de bonnes chaussures." },
        { label: "À combiner avec", value: "Les lacs de Kolsaï et le lac Kaïndy, avec sa forêt engloutie, dans les montagnes voisines — idéal en boucle de 2–3 jours avec une nuit sur place." },
        { label: "Quand", value: "Mai–sept. ; allez-y pour la lumière du lever ou du coucher du soleil. En plein midi l’été, le canyon est brûlant et sans ombre." },
      ],
      stay:
        "Campez ou prenez un simple écolodge au bord de la rivière, au fond du canyon, pour avoir la Vallée des Châteaux pour vous seul à l’aube et au crépuscule. Beaucoup de voyageurs l’associent à une nuit chez l’habitant près des lacs de Kolsaï (village de Saty) lors du même voyage.",
      tips: [
        "Dormez au bord de la rivière pour parcourir le canyon désert dans la lumière dorée, avant l’arrivée des excursions à la journée.",
        "Associez Charyn aux lacs de Kolsaï et de Kaïndy — les trois forment un superbe voyage de 2–3 jours depuis Almaty.",
      ],
    },
    {
      name: "Lacs de Kolsaï et de Kaïndy", category: "nature", coords: [42.9333, 78.3167], region: "Tian Shan, sud-est",
      description: "Des lacs alpins turquoise dans la forêt d’épicéas, dont l’un abrite une « forêt engloutie » de troncs fantomatiques.",
      wiki: "Kolsai Lakes",
      long:
        "Haut dans le Tian Shan septentrional, au sud-est d’Almaty, les lacs de Kolsaï forment un chapelet de trois lacs limpides et turquoise, étagés dans une vallée boisée d’épicéas du Tian Shan, chacun plus haut et plus sauvage que le précédent. Le premier s’atteint facilement par la route ; le sentier vers le deuxième puis le troisième lac offre une belle randonnée à la journée (ou sur deux jours) à travers les alpages vers la frontière kirghize, avec la possibilité de franchir un col jusqu’au lac Issyk-Koul.\n\nTout près, et absolument unique, se trouve le lac Kaïndy — né en 1911 quand un séisme a barré une vallée et noyé une forêt d’épicéas, laissant les troncs blanchis et effilés des arbres morts dressés, étranges, hors de l’eau froide bleu-vert. Ensemble, ces lacs sont le joyau paysager de la région ; le mieux est de loger au village de montagne de Saty, où les familles d’accueil proposent balades à cheval, miel et accueil chaleureux.",
      practical: [
        { label: "Y aller", value: "~300 km / 4–5 h depuis Almaty via le village de Saty ; un 4×4 ou une excursion est nécessaire pour les dernières pistes cahoteuses, surtout vers Kaïndy." },
        { label: "Randonnée", value: "Du premier au deuxième lac de Kolsaï, comptez ~4–5 h aller-retour à travers la forêt ; les bons marcheurs atteignent le troisième lac ou le col de la frontière kirghize. On peut louer des chevaux à Saty." },
        { label: "Lac Kaïndy", value: "Une piste courte mais très accidentée (en voiture puis à pied) mène de Saty à la forêt engloutie — plus magique encore par un matin calme, quand les troncs noyés se reflètent." },
        { label: "Quand", value: "Juin–sept. ; les sentiers d’altitude restent enneigés jusqu’au début de l’été et les lacs peuvent geler dès l’automne." },
      ],
      stay:
        "Installez-vous chez l’habitant au village de Saty — simple, chaleureux et généreux, avec cuisine maison, location de chevaux et accès facile aux lacs de Kolsaï comme à Kaïndy. C’est le séjour type dans un village de montagne kazakh, et tout le charme de la région.",
      tips: [
        "Allez à Kaïndy tôt le matin pour une eau immobile et le plus beau reflet des arbres engloutis.",
        "Une nuit chez l’habitant à Saty, plus un cheval ou un guide loué, est la meilleure façon d’atteindre les lacs supérieurs sans voiture.",
      ],
    },
    {
      name: "Grand lac d’Almaty et le Tian Shan au-dessus de la ville", category: "nature", coords: [43.0500, 76.9833], region: "près d’Almaty",
      description: "Un étonnant réservoir turquoise niché entre des sommets enneigés, à une heure de la ville — plus des randonnées alpines et du ski.",
      wiki: "Big Almaty Lake",
      long:
        "Almaty est l’une des rares grandes villes où des montagnes enneigées s’élèvent directement depuis la banlieue, et le Tian Shan à sa porte est un terrain de jeu aux paysages alpins. À seulement une heure de route de montagne, le Grand lac d’Almaty est un miroir d’eau de fonte glaciaire d’un turquoise éclatant, enchâssé dans un cirque de pics déchiquetés de 4 000 mètres — un spectacle saisissant et photogénique qui semble à mille lieues de la ville en contrebas.\n\nPlus haut se trouvent l’observatoire astronomique du Tian Shan et les cols vers la frontière kirghize ; plus près de la ville, la station de ski de Shymbulak et la patinoire de Medeu (reliées par téléphérique) donnent accès à la montagne toute l’année. En été, les vallées environnantes sont sillonnées de sentiers à travers forêts d’épicéas et prairies fleuries ; en hiver, c’est la piste de ski la plus connue d’Asie centrale. La façon la plus simple de goûter à la haute montagne dans tout le pays.",
      practical: [
        { label: "Y aller", value: "~1 h en voiture/taxi depuis le centre d’Almaty en remontant la gorge du Grand Almaty ; un poste de contrôle se trouve près du lac (c’est un réservoir d’eau potable — baignade interdite, et des permis de zone frontalière peuvent être exigés plus haut)." },
        { label: "À faire", value: "Photographier le lac, randonner sur les sentiers et cols alentour en été, et prendre le téléphérique vers Shymbulak/Medeu pour les vues d’altitude." },
        { label: "Almaty même", value: "Accordez une journée à la ville — le Bazar vert, la cathédrale en bois de Zenkov dans le parc Panfilov, les mosaïques soviétiques et les rues de cafés ombragées." },
        { label: "Quand", value: "L’été pour randonner ; l’hiver pour skier à Shymbulak. Prévoyez des couches chaudes — il fait bien plus froid au lac qu’en ville." },
      ],
      stay:
        "Logez à Almaty — la ville la plus verte et la plus attachante du pays, avec de bons hôtels, des bazars et des restaurants — et montez en montagne à la journée. Pour partir tôt vers le lac ou les sentiers, de petites maisons d’hôtes dans les gorges des contreforts vous rapprochent des sommets.",
      tips: [
        "Vérifiez les règles d’accès en vigueur pour le lac et les cols de la zone frontalière avant de partir.",
        "Associez le lac à une flânerie au Bazar vert et au parc Panfilov pour une journée parfaite entre ville et montagne.",
      ],
    },
    {
      name: "Turkestan et le mausolée de Khoja Ahmed Yasavi", category: "history", coords: [43.2972, 68.2711], region: "Sud du Kazakhstan",
      description: "Un chef-d’œuvre timouride vertigineux et inachevé — le sanctuaire le plus saint du Kazakhstan et son plus grand édifice médiéval.",
      wiki: "Mausoleum of Khoja Ahmed Yasawi",
      long:
        "Dans l’extrême sud, l’ancienne ville de la route de la Soie de Turkestan abrite le plus grand monument architectural du Kazakhstan : le mausolée de Khoja Ahmed Yasavi, sanctuaire colossal bâti vers 1400 sur ordre de Timour (Tamerlan) au-dessus de la tombe d’un poète et mystique soufi vénéré du XIIe siècle. Son portail gigantesque, son dôme turquoise côtelé et ses céramiques éclatantes en font un chef-d’œuvre de l’architecture timouride — proche cousin des grands monuments de Samarcande — et les traces d’échafaudage montrent qu’il est resté inachevé à la mort de Timour.\n\nInscrit au patrimoine mondial de l’UNESCO et lieu le plus saint du pays, il attire des pèlerins musulmans de toute l’Asie centrale. La vieille ville alentour, avec ses bains restaurés, son bazar et sa citadelle reconstruite, ainsi que les ruines toutes proches d’Otrar, jadis grande cité de la route de la Soie (saccagée par Gengis Khan), font de Turkestan le contrepoint historique et spirituel de la steppe et des montagnes kazakhes.",
      practical: [
        { label: "Y aller", value: "Turkestan a son propre aéroport et des trains rapides ; on l’atteint depuis Chymkent (~2–3 h) ou en train depuis Almaty/Astana. Une étape pratique entre les villes d’Asie centrale." },
        { label: "Le mausolée", value: "Gratuit ou petit droit d’entrée ; tenue correcte exigée (c’est un lieu de pèlerinage actif — épaules et jambes couvertes, foulard pour les femmes). À l’intérieur, un chaudron de bronze géant coulé pour Timour." },
        { label: "Aux alentours", value: "La citadelle reconstruite et le quartier du caravansérail, et, sur la route, les ruines évocatrices d’Otrar et le mausolée d’Arystan-Bab." },
        { label: "Quand", value: "Le printemps et l’automne sont les plus agréables ; l’été du sud est très chaud." },
      ],
      stay:
        "Logez dans l’un des hôtels de plus en plus nombreux près du sanctuaire et de la vieille ville reconstruite, pour voir le mausolée dans la douce lumière du petit matin ou du soir. Chymkent, ville animée du sud, est une base alternative avec davantage de choix.",
      tips: [
        "Voyez le sanctuaire au coucher ou au lever du soleil, quand le dôme turquoise et le portail sont les plus chaleureux.",
        "Combinez avec les ruines d’Otrar et le mausolée d’Arystan-Bab pour toute l’histoire de la route de la Soie.",
      ],
    },
    {
      name: "Astana (Nour-Soultan)", category: "cities", coords: [51.1694, 71.4491], region: "Steppe du centre-nord",
      description: "Une capitale futuriste de verre, de marbre et d’architecture audacieuse, sortie de la steppe nue du nord.",
      wiki: "Astana",
      long:
        "Peu de villes au monde sont aussi improbables qu’Astana. En 1997, le Kazakhstan a transféré sa capitale dans une ville de province battue par les vents de la steppe du nord et, porté par la manne pétrolière, a fait surgir de rien une vitrine étincelante de tours futuristes, de ministères en marbre et de monuments spectaculaires signés par des architectes vedettes. Qu’on l’adore ou qu’on la trouve surréaliste, c’est l’une des capitales planifiées les plus frappantes du monde — une déclaration d’ambition nationale écrite en verre et en acier.\n\nLes monuments phares s’alignent sur un grand axe : la tour Baïterek, un globe doré sur un treillis blanc qui symbolise une légende d’arbre de vie ; la pyramide du « Palais de la Paix » de Norman Foster ; l’immense centre commercial-tente Khan Shatyr ; et la mosquée Nour-Astana. Un endroit fascinant, un peu irréel, où passer une journée à lire l’histoire qu’une jeune nation a voulu raconter sur elle-même — de préférence en été, car c’est l’une des capitales les plus froides du monde, aux hivers de steppe impitoyables.",
      practical: [
        { label: "Y aller", value: "L’aéroport international et les liaisons ferroviaires d’Astana la relient à tout le pays et à la région ; les monuments se concentrent le long du boulevard central, à pied ou à quelques minutes de taxi." },
        { label: "Monuments", value: "La tour Baïterek (montez pour la vue), la pyramide du Palais de la Paix de Foster, Khan Shatyr, la mosquée Nour-Astana et le Musée national pour l’histoire du pays." },
        { label: "Quand", value: "De la fin du printemps au début de l’automne — l’hiver est ici férocement froid et venteux, même si l’architecture illuminée est spectaculaire sous la neige." },
        { label: "À noter", value: "La ville a changé de nom plusieurs fois (Astana → Nour-Soultan → Astana) ; les habitants utilisent les deux. C’est une vitrine moderne plutôt qu’une vieille ville." },
      ],
      stay:
        "Logez près de l’axe central (autour de Baïterek et du quartier gouvernemental) pour aller à pied d’un monument à l’autre. Astana est une capitale d’affaires avec de nombreux hôtels modernes ; il n’y a guère de « vieille ville », alors privilégiez l’emplacement et le confort plutôt que le cachet.",
      tips: [
        "Voyez l’architecture illuminée après la tombée de la nuit — la ville est conçue pour impressionner le soir.",
        "Une journée complète suffit pour l’essentiel ; ajoutez le musée pour comprendre l’histoire du pays.",
      ],
    },
    {
      name: "Parc national d’Altyn-Emel et la dune chantante", category: "nature", coords: [44.1667, 78.6667], region: "Semiretchie (sud-est)",
      description: "Une steppe sauvage avec une dune géante qui « chante », des collines rayées aux couleurs de l’arc-en-ciel et de rares chevaux sauvages.",
      wiki: "Altyn-Emel National Park",
      long:
        "Entre la rivière Ili et les montagnes à l’est d’Almaty s’étend Altyn-Emel, un parc national immense et reculé qui concentre toute la démesure de la nature kazakhe dans un même espace protégé de désert, de steppe et de collines érodées. Son emblème est la dune chantante (Aïgaïkoum) — un vaste croissant de sable de 150 mètres de haut qui, lorsqu’il est sec et qu’on le dérange, émet un étrange bourdonnement grave, comme un orgue, à mesure que les grains glissent : un phénomène naturel troublant que l’on déclenche en se laissant glisser sur son flanc.\n\nPlus loin dans le parc se dressent les extraordinaires Aktaou (« montagnes blanches ») — des collines crayeuses rayées de blanc, d’ocre, de rose et de vert comme un gâteau à étages, formées par d’anciens sédiments lacustres — et les formations rougeâtres de Katoutaou, ainsi qu’un saule sacré de 700 ans et des groupes de tumulus anciens. Altyn-Emel est aussi un refuge pour la faune, dont le cheval de Przewalski réintroduit, le dernier vrai cheval sauvage. Vaste, vide, et accessible seulement avec guide et permis, il récompense ceux qui s’écartent des circuits classiques.",
      practical: [
        { label: "Y aller", value: "~250–300 km depuis Almaty ; un permis du parc et, en pratique, un 4×4 avec chauffeur/guide sont nécessaires — les distances dans le parc sont grandes et les pistes mauvaises." },
        { label: "À voir", value: "La dune chantante (montez puis glissez pour l’entendre « chanter »), les montagnes rayées d’Aktaou, les roches volcaniques de Katoutaou et les anciens tumulus de Besshatyr." },
        { label: "Faune", value: "Koulans (ânes sauvages), gazelles et chevaux de Przewalski réintroduits parcourent la steppe — l’aube et le crépuscule sont les meilleurs moments pour les observer." },
        { label: "Quand", value: "Le printemps et l’automne sont idéaux ; l’été est très chaud, et le parc se découvre au mieux en 2 jours avec une nuit à l’intérieur." },
      ],
      stay:
        "Le parc propose des maisons d’hôtes rudimentaires et des logements de gardes près de l’entrée et à l’intérieur — une nuit sur place est vraiment nécessaire pour atteindre les lointaines collines d’Aktaou et profiter de la dune et de la faune dans une belle lumière. Organisez-le via une excursion incluant permis, transport et repas.",
      tips: [
        "Grimpez la dune chantante par temps sec et laissez-vous glisser pour l’entendre bourdonner — elle ne « chante » pas quand elle est humide.",
        "Partez avec un guide et prévoyez deux jours ; les sites phares du parc sont éloignés les uns des autres sur des pistes difficiles.",
      ],
    },
  ],
};
