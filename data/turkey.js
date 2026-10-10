// Country ID card — schema reference lives in data/index.js
export default {
  code: "tr",
  name: "Turquie",
  flag: "🇹🇷",
  region: "Anatolie et Méditerranée orientale",
  tagline: "Là où l’Europe rencontre l’Asie — coupoles byzantines, bazars ottomans et vallées lunaires.",
  tags: ["history", "cities", "food", "nature", "slow-travel"],

  languages: {
    name: "Turc",
    note: "Une langue turcique écrite en alphabet latin depuis la réforme d’Atatürk de 1928, phonétique et régulière une fois quelques lettres en plus apprises (ş = « ch », ç = « tch », ğ est muet, ı est un « eu » guttural, ü se dit « u » comme en français). Les politesses chaleureuses et formelles comptent ; quelques mots de turc sont accueillis avec un vrai plaisir.",
    phrases: [
      { fr: "Bonjour", local: "Merhaba", pron: "MER-ha-ba" },
      { fr: "Merci", local: "Teşekkür ederim", pron: "té-chek-KUR é-dé-rim" },
      { fr: "S’il vous plaît / De rien", local: "Lütfen / Rica ederim", pron: "LUT-fenn / ri-DJA é-dé-rim" },
      { fr: "Oui / Non", local: "Evet / Hayır", pron: "é-VET / ha-YEUR" },
      { fr: "Excusez-moi / Pardon", local: "Pardon / Özür dilerim", pron: "par-DONN / eu-ZUR di-lé-rim" },
      { fr: "C’est combien ?", local: "Ne kadar?", pron: "né ka-DAR ?" },
      { fr: "Où est… ?", local: "… nerede?", pron: "… NÉ-ré-dé ?" },
      { fr: "Délicieux !", local: "Çok lezzetli!", pron: "tchok lez-zet-LI !" },
      { fr: "Eau / Thé", local: "Su / Çay", pron: "sou / tchaï" },
      { fr: "Santé !", local: "Şerefe!", pron: "ché-ré-FÉ !" },
      { fr: "Au revoir", local: "Hoşça kal / Güle güle", pron: "HOCH-tcha kal / gu-LÉ gu-LÉ" },
    ],
  },

  history: {
    summary:
      "Peu de terres ont connu autant d’histoire que l’Anatolie. Elle a vu naître le premier site religieux monumental du monde à Göbekli Tepe, l’empire hittite, Troie, et les cités grecques et romaines de la côte égéenne. Sous le nom de Byzance, Constantinople fut pendant plus de mille ans la capitale éclatante de l’Empire romain d’Orient, jusqu’à ce que les Ottomans prennent la ville en 1453 et bâtissent un empire sur trois continents. La République de Turquie moderne est née de l’effondrement de l’empire en 1923, sous l’impulsion de Mustafa Kemal Atatürk, qui transféra la capitale à Ankara et refit de l’État une république laïque tournée vers l’Occident. À cheval sur deux continents, le pays superpose les mondes hittite, grec, romain, byzantin, seldjoukide et ottoman — un palimpseste qui se lit dans presque chaque ville ancienne.",
    timeline: [
      { era: "v. 9500 av. J.-C. (Göbekli Tepe)", text: "Des chasseurs-cueilleurs élèvent, dans le sud-est, le plus ancien temple connu au monde — plus vieux que l’agriculture ou la roue." },
      { era: "1600–1180 av. J.-C. (Hittites)", text: "Un grand empire de l’âge du bronze règne sur l’Anatolie centrale depuis Hattusa, rivalisant avec l’Égypte." },
      { era: "330 apr. J.-C. (Constantinople)", text: "Constantin refonde Byzance comme capitale de l’Orient romain ; elle sera le cœur de l’Empire byzantin pendant un millénaire." },
      { era: "1453 (conquête ottomane)", text: "Mehmed II prend Constantinople, mettant fin à l’Empire byzantin et lançant l’essor ottoman." },
      { era: "1923 (république)", text: "Atatürk proclame la République laïque de Turquie sur les cendres de l’Empire ottoman." },
    ],
  },

  books: [
    { title: "Istanbul : souvenirs d’une ville", author: "Orhan Pamuk", year: "2003", note: "Les mémoires mélancoliques et lumineuses du prix Nobel sur sa ville natale — à lire avant de partir." },
    { title: "Des oiseaux sans ailes", author: "Louis de Bernières", year: "2004", note: "Une grande fresque romanesque sur un village anatolien mixte, déchiré par la chute de l’empire." },
    { title: "Le Musée de l’Innocence", author: "Orhan Pamuk", year: "2008", note: "Une histoire d’amour obsessionnelle cartographiée sur l’Istanbul des années 1970 ; un vrai musée l’accompagne." },
    { title: "Constantinople: The Last Great Siege, 1453", author: "Roger Crowley", year: "2005", note: "Un récit captivant, presque romanesque, de la chute de la ville." },
    { title: "A Fez of the Heart", author: "Jeremy Seal", year: "1995", note: "Un récit de voyage ironique qui suit la piste du fez à travers l’identité de la Turquie moderne." },
  ],

  meals: [
    { name: "Kebap (kebab)", description: "Bien plus qu’un seul plat — des brochettes d’agneau haché épicées d’Adana aux kebabs en croûte de pistache de Gaziantep, en passant par le lent İskender nappé de tomate et de beurre.", tip: "Le kebab est un art régional : mangez l’Adana à Adana, l’İskender à Bursa, et le lahmacun partout où il y a un bon four à bois." },
    { name: "Mezze", description: "Un assortiment de petits plats froids et chauds — aubergine fumée, feuilles de vigne farcies, haydari, fava — picorés lentement autour d’un rakı dans une meyhane." },
    { name: "Pide et lahmacun", description: "La réponse turque à la pizza : la pide en forme de barque garnie de fromage ou de viande hachée, et le lahmacun, fin comme du papier, à arroser de citron et à rouler." },
    { name: "Simit et petit-déjeuner turc", description: "L’anneau de pain au sésame vendu à chaque charrette de rue, et l’immense kahvaltı de fromages, olives, miel, œufs et thé à volonté qui ancre la matinée." },
    { name: "Baklava et künefe", description: "Le baklava à la pistache de Gaziantep est de classe mondiale ; le künefe est un dessert chaud de pâte filée fourrée de fromage et imbibée de sirop, à manger encore fondant." },
    { name: "Çay et café turc", description: "Les verres de thé noir en forme de tulipe rythment toute la journée ; le café épais non filtré est inscrit à l’UNESCO, et on lit traditionnellement l’avenir dans le marc." },
  ],

  climate: {
    unit: "°C",
    note: "La Turquie est immense et variée. Ces chiffres sont ceux d’Istanbul ; les côtes égéenne et méditerranéenne sont plus chaudes et plus sèches en été, la Cappadoce et le plateau central sont en altitude et continentaux (hivers froids, journées chaudes), et les montagnes de l’est reçoivent de vraies chutes de neige. Le printemps (avril–juin) et l’automne (sept.–oct.) sont idéaux presque partout.",
    coords: [41.01, 28.98], // Istanbul — representative point for the fetch script
    key: "tr",
    best: [4, 5, 6, 9, 10],
    avoid: [7, 8, 1],
    months: [
      { mean: 6, rain: 105 }, { mean: 6, rain: 78 }, { mean: 8, rain: 71 },
      { mean: 12, rain: 46 }, { mean: 17, rain: 34 }, { mean: 22, rain: 34 },
      { mean: 24, rain: 34 }, { mean: 24, rain: 39 }, { mean: 20, rain: 58 },
      { mean: 16, rain: 81 }, { mean: 12, rain: 103 }, { mean: 8, rain: 119 },
    ],
  },

  events: [
    { name: "Fleurs sauvages et côte douce au printemps", when: "Avril – juin", months: [4, 5, 6], kind: "go", description: "Les ruines égéennes sont vertes et constellées de coquelicots, la côte est chaude sans être brûlante, et la Cappadoce est à son plus beau — le moment idéal pour visiter." },
    { name: "Ramadan (Ramazan)", when: "Avance d’~11 jours chaque année", months: [], kind: "note", description: "Jeûne en journée ; certains restaurants ferment le jour dans les régions conservatrices, mais les villes restent animées et l’iftar du coucher du soleil est un moment merveilleux et festif pour sortir." },
    { name: "Pic de chaleur estival", when: "Juillet – août", months: [7, 8], kind: "avoid", description: "Les côtes sont bondées et l’intérieur cuit ; villes de l’intérieur et sites antiques sont éprouvants à midi. Superbe sur l’eau, impitoyable pour l’archéologie." },
    { name: "Récoltes d’automne et ciel dégagé", when: "Septembre – octobre", months: [9, 10], kind: "go", description: "Mer chaude, foules qui s’éclaircissent, vendanges et récolte des grenades, et matinées régulièrement claires pour les montgolfières de Cappadoce." },
  ],

  places: [
    {
      name: "Sainte-Sophie et Sultanahmet", category: "history", coords: [41.0086, 28.9802], region: "Istanbul",
      description: "Coupole byzantine, minarets ottomans et grandes mosquées de la vieille ville, serrés sur une même péninsule.",
      wiki: "Hagia Sophia",
      long:
        "Pendant près de mille ans, Sainte-Sophie fut la plus grande cathédrale du monde, sa vaste coupole semblant flotter sur une couronne de fenêtres — une prouesse technique de la Byzance du VIe siècle qui stupéfiait tous ceux qui y entraient. Convertie en mosquée en 1453, transformée en musée par Atatürk, puis rendue au culte comme mosquée en 2020, elle incarne toute l’histoire en strates de la ville, avec des mosaïques dorées du Christ qui survivent au-dessus de la calligraphie islamique.\n\nElle est le pivot de Sultanahmet, le vieux cœur impérial, où les coupoles en cascade de la Mosquée bleue lui font face de l’autre côté d’un jardin, où la citerne Basilique brille sous terre, et où le palais de Topkapı s’étend sur la pointe où le Bosphore rencontre la Corne d’Or. C’est à la fois touristique et incontournable — venez tôt, levez les yeux, et laissez l’âge vertigineux du lieu faire son effet.",
      practical: [
        { label: "Y aller", value: "Arrêt de tram Sultanahmet (T1). Les principaux sites sont tous à moins de 15 minutes à pied les uns des autres." },
        { label: "Entrée", value: "La galerie supérieure de Sainte-Sophie ~25 € pour les touristes ; la Mosquée bleue est gratuite ; le palais de Topkapı ~40 € avec le harem." },
        { label: "Tenue et horaires", value: "C’est une mosquée en activité — épaules/genoux couverts, foulard pour les femmes ; évitez les heures de prière et arrivez à l’ouverture pour devancer la foule et les groupes de croisiéristes." },
        { label: "Temps à prévoir", value: "Une journée complète pour Sainte-Sophie, la Mosquée bleue, la Citerne et Topkapı ; deux si vous ajoutez le musée d’Archéologie." },
      ],
      stay:
        "Dormez dans un petit hôtel de Sultanahmet ou, pour plus de vie le soir, de l’autre côté de la Corne d’Or à Karaköy ou Beyoğlu, à distance de marche de Galata et des ferries. Une terrasse sur le toit avec vue sur les coupoles et le Bosphore vaut ici la dépense.",
      tips: [
        "Achetez une İstanbulkart rechargeable pour trams, ferries et funiculaires — bien moins cher que les billets à l’unité.",
        "Traversez vers la rive asiatique en ferry public bon marché au coucher du soleil ; c’est la meilleure « croisière » de la ville.",
      ],
    },
    {
      name: "Cappadoce (Göreme)", category: "nature", coords: [38.6431, 34.8289], region: "Anatolie centrale",
      description: "Une vallée lunaire de cheminées de fée, d’églises troglodytes et de montgolfières s’élevant à l’aube au-dessus du tuf.",
      wiki: "Göreme",
      long:
        "Des millénaires d’éruptions ont déposé un tuf volcanique tendre, que le vent et l’eau ont sculpté en un paysage de rêve fait de pinacles, de cônes et d’ondulations — les « cheminées de fée » de la Cappadoce. Les premiers chrétiens y ont creusé maisons, monastères et villes souterraines entières, et peint des fresques byzantines sur les parois d’églises troglodytes dans lesquelles on peut encore se glisser au musée en plein air de Göreme.\n\nL’image emblématique est celle de l’aube, quand des dizaines de montgolfières dérivent au-dessus des vallées dans la lumière rose du petit matin — touristique, oui, mais vraiment magique. Évitez la foule en parcourant à pied les vallées Rose, Rouge et de l’Amour à l’heure dorée, en explorant l’immense refuge souterrain de Derinkuyu, et en dormant dans un hôtel troglodyte creusé dans la falaise. C’est le seul endroit de Turquie qui ne ressemble à rien d’autre sur terre.",
      practical: [
        { label: "Y aller", value: "Vol jusqu’à Kayseri (KYA) ou Nevşehir (NAV) depuis Istanbul (~1 h 30) ; Göreme est à ~1 h de transfert. Il existe aussi de longs bus de nuit." },
        { label: "Vol en montgolfière", value: "~200–300 € par personne, à l’aube si la météo le permet ; choisissez un opérateur réputé. Ou regardez-en des dizaines s’envoler gratuitement depuis un point de vue sur la vallée." },
        { label: "À pied", value: "Les vallées Rose/Rouge, de l’Amour et des Pigeons se relient à pied — gratuit, et la meilleure façon de ressentir le paysage. Prévoyez de l’eau et une protection solaire." },
        { label: "Villes souterraines", value: "Derinkuyu ou Kaymaklı, ~3–5 € ; on descend de nombreux niveaux à travers le refuge creusé — à éviter si vous êtes très claustrophobe." },
      ],
      stay:
        "Dormez dans un hôtel troglodyte taillé dans le tuf à Göreme ou, plus calmes et plus jolis, dans les villages d’Uçhisar ou de Çavuşin — chambres de pierre et de grotte avec terrasses face aux vallées et aux montgolfières du matin. Ortahisar est la base la plus authentique de toutes.",
      tips: [
        "Les montgolfières volent à l’aube et sont annulées en cas de vent — prévoyez une matinée de réserve pour qu’un jour de mauvais temps ne vous coûte pas le vol.",
        "Randonnez dans les vallées au lever ou au coucher du soleil pour les couleurs les plus chaudes et le moins de monde.",
      ],
    },
    {
      name: "Éphèse", category: "history", coords: [37.9411, 27.3419], region: "Côte égéenne",
      description: "L’une des grandes cités romaines de la Méditerranée — rues de marbre, immense théâtre et bibliothèque de Celsus.",
      wiki: "Ephesus",
      long:
        "Jadis deuxième ville de l’Empire romain d’Orient et port d’un quart de million d’habitants, Éphèse compte parmi les cités antiques les mieux conservées au monde. On parcourt ses grandes rues de marbre en passant devant latrines publiques, thermes et ornières creusées par les roues des chars, jusqu’à la façade à deux étages magnifiquement reconstruite de la bibliothèque de Celsus et à l’immense théâtre où, selon la tradition, saint Paul prêcha.\n\nLes maisons en terrasse, en option — une fouille couverte de maisons romaines aux fresques et aux sols de mosaïque —, sont le temps fort pour beaucoup et valent le billet supplémentaire. Tout près se trouvent la dernière colonne du temple d’Artémis disparu (l’une des Sept Merveilles), le village perché de Şirince et le musée d’Éphèse à Selçuk. Venez à l’ouverture ou en fin d’après-midi : il y a peu d’ombre et le site est une fournaise.",
      practical: [
        { label: "Y aller", value: "Installez-vous à Selçuk (nœud ferroviaire et routier) ou dans la ville côtière de Kuşadası ; le site est à ~3 km de Selçuk en dolmuş, en taxi ou par une marche à plat." },
        { label: "Entrée", value: "Site principal ~40 € ; les maisons en terrasse sont un billet séparé à ~15 € qui vaut vraiment le coup. Un Museum Pass couvre plusieurs sites." },
        { label: "Quand y aller", value: "Dès l’ouverture (8 h) ou après 16 h — à midi, il fait une chaleur écrasante et le site est envahi par les croisiéristes des navires de Kuşadası." },
        { label: "Temps à prévoir", value: "2–3 heures, davantage avec les maisons en terrasse et le musée de Selçuk." },
      ],
      stay:
        "Installez-vous dans la paisible Selçuk, à distance de marche de la mosquée İsa Bey, de la basilique Saint-Jean et de bons restaurants locaux — bien plus de caractère que la bande balnéaire. Mieux encore, montez au vieux village grec perché de Şirince pour ses maisons de pierre, son vin de fruits et son calme.",
      tips: [
        "Prenez le billet des maisons en terrasse — fresques et mosaïques y sont la partie la moins fréquentée et la mieux conservée du site.",
        "Associez Éphèse à Şirince et au musée de Selçuk pour une journée complète et sans hâte.",
      ],
    },
    {
      name: "Pamukkale et Hiérapolis", category: "nature", coords: [37.9203, 29.1206], region: "Intérieur égéen",
      description: "Des terrasses de travertin d’un blanc éclatant, baignées d’eau minérale tiède, couronnées par une ville thermale romaine et ses ruines.",
      wiki: "Pamukkale",
      long:
        "Pamukkale — le « château de coton » — est une colline de terrasses de travertin d’un blanc éblouissant, formées au fil des millénaires par l’eau de source tiède et riche en calcium qui dévale la pente et durcit en bassins festonnés et en cascades figées. On gravit les terrasses pieds nus à travers des bassins peu profonds et tièdes : un paysage d’un autre monde, vraiment étrange.\n\nAu sommet du plateau s’étendent les vastes ruines de Hiérapolis, ville thermale gréco-romaine née autour des sources sacrées, avec un grand théâtre, une immense nécropole et la « piscine antique » où l’on nage parmi des colonnes de marbre effondrées dans une eau minérale tiède. Le site attire foule et cars, alors calez votre visite sur la lumière du petit matin ou de la fin d’après-midi, quand les terrasses blanches rayonnent et que les visiteurs d’un jour se font rares.",
      practical: [
        { label: "Y aller", value: "Installez-vous à Denizli (nœud ferroviaire et routier, à ~20 min) ou au village de Pamukkale au pied des terrasses." },
        { label: "Entrée", value: "Billet combiné Pamukkale/Hiérapolis ~30 € ; la piscine antique (de Cléopâtre) se paie à part pour la baignade." },
        { label: "Quand y aller", value: "Entrez tôt par la porte du haut (sud), ou venez à l’heure dorée — le blanc est aveuglant à midi et les terrasses se remplissent." },
        { label: "À prévoir", value: "On retire ses chaussures sur les travertins ; prévoyez un sac pour les ranger, et un maillot de bain pour les bassins." },
      ],
      stay:
        "Le village de Pamukkale, en contrebas, compte de simples pensions familiales accueillantes avec piscine et vue sur les falaises blanches — restez la nuit pour parcourir les terrasses à l’ouverture ou au coucher du soleil, bien après le départ des cars.",
      tips: [
        "Parcourez les terrasses au coucher du soleil pour la lumière rose et or, puis revenez le matin quand elles sont presque désertes.",
        "Baignez-vous dans la piscine antique parmi les colonnes romaines englouties — une baignade vraiment insolite et délicieuse.",
      ],
    },
    {
      name: "Côte lycienne et rivage de Kaş–Kekova", category: "beach", coords: [36.2021, 29.6386], region: "Côte méditerranéenne",
      description: "Une eau turquoise au-dessus de cités englouties, des tombeaux accrochés aux falaises et le long sentier côtier de la Voie lycienne.",
      wiki: "Kaş",
      long:
        "La Méditerranée du sud-ouest — l’antique Lycie — est le plus beau littoral de Turquie : des montagnes couvertes de pins plongeant dans une eau turquoise d’une clarté invraisemblable, parsemées des tombeaux rupestres et des cités en ruine d’un peuple antique fier et indépendant. La sympathique petite ville de Kaş, avec ses vieilles ruelles et son port, fait la base idéale, meilleure que les grandes stations balnéaires.\n\nD’ici, on peut pagayer en kayak au-dessus de la « cité engloutie » de Kekova, où des ruines lyciennes noyées par un séisme reposent juste sous la surface ; parcourir des tronçons des 540 km de la Voie lycienne, l’un des grands sentiers côtiers du monde ; et rejoindre des plages et des gorges plus tranquilles. Plus à l’ouest se trouvent la vallée des Papillons, le village fantôme de Kayaköy et le lagon d’Ölüdeniz — spectaculaires, mais plus fréquentés. C’est la côte des journées lentes sur l’eau et des balades en haut des falaises.",
      practical: [
        { label: "Y aller", value: "Vol jusqu’à Dalaman (DLM) ou Antalya (AYT), puis bus/transfert le long de la côte jusqu’à Kaş, Kalkan ou Fethiye (2–3 h)." },
        { label: "Kekova", value: "Sorties en kayak de mer au-dessus de la cité engloutie depuis Kaş/Üçağız (~35–50 €) ; les ruines sont protégées — baignade interdite directement au-dessus." },
        { label: "Voie lycienne", value: "Sentier de grande randonnée bien balisé ; faites-en des tronçons à la journée au printemps ou à l’automne (l’été est trop chaud). La vallée des Papillons et Kayaköy sont des temps forts." },
        { label: "Quand y aller", value: "Mai–juin et septembre–octobre pour une mer chaude sans la foule ni la chaleur du plein été." },
      ],
      stay:
        "Installez-vous à Kaş — une petite pension ou un hôtel de charme dans la vieille ville, à distance de marche du port et du petit théâtre hellénistique au-dessus de la mer. Pour un calme absolu, logez à Üçağız/Kekova au bord de l’eau, ou dans l’atmosphère de village de pierre en ruine près de Kayaköy.",
      tips: [
        "Faites Kekova en kayak le matin, avant le vent et l’arrivée des bateaux d’excursion.",
        "Louez un petit bateau ou rejoignez une modeste sortie en goélette (gület) plutôt que les gros bateaux de fête — les criques sont tout l’intérêt.",
      ],
    },
    {
      name: "Gaziantep", category: "food", coords: [37.0662, 37.3833], region: "Anatolie du Sud-Est",
      description: "La plus grande ville gastronomique de Turquie — baklava à la pistache, bazars de cuivre et superbes mosaïques romaines.",
      wiki: "Gaziantep",
      long:
        "Demandez à un Turc où manger, il vous enverra à Gaziantep. Cette ancienne ville du sud-est, Ville créative de la gastronomie de l’UNESCO, est la capitale incontestée de la cuisine turque — patrie du meilleur baklava à la pistache du monde, de dizaines de styles de kebab, de ragoûts chargés d’épices, et d’un bazar de dinandiers qui martèlent le cuivre depuis des siècles sous ses hans voûtés de pierre.\n\nAu-delà de la table, le musée des Mosaïques de Zeugma abrite l’une des plus grandes collections de mosaïques romaines au monde, sauvées d’une ville engloutie par un barrage — dont la célèbre « Jeune Gitane ». Il y a aussi une citadelle, de vieilles demeures de pierre et des ateliers de pistache et de cuivre à parcourir. Hors de la plupart des itinéraires touristiques et d’autant plus riche, Antep récompense les voyageurs venus manger, sérieusement et joyeusement.",
      practical: [
        { label: "Y aller", value: "Vol jusqu’à Gaziantep (GZT) depuis Istanbul (~2 h), ou le long trajet en train/bus. C’est une base pratique pour tout le sud-est." },
        { label: "Manger", value: "Le baklava dans une maison légendaire comme İmam Çağdaş ; la soupe beyran au petit-déjeuner ; le katmer (feuilleté pistache-crème) en milieu de matinée." },
        { label: "Musée de Zeugma", value: "~10 € ; prévoyez 1 h 30–2 h pour les mosaïques — la « Jeune Gitane » en est la star. L’un des meilleurs musées du pays." },
        { label: "Bazar", value: "Le vieux bazar du cuivre et des épices autour de la citadelle est un marché en activité — achetez pistaches, épices et cuivre martelé à la main." },
      ],
      stay:
        "Logez dans un hôtel installé dans une demeure de pierre restaurée (konak) de la vieille ville, près de la citadelle et du bazar — murs épais, fraîcheur de la cour intérieure, et maisons de baklava et marché du cuivre à distance de marche.",
      tips: [
        "Venez le ventre vide et mangez par petites quantités toute la journée — c’est une ville où l’on grignote, pas une ville à deux gros repas.",
        "Les pistaches (Antep fıstığı) et le baklava sont les meilleurs souvenirs gourmands de toute la Turquie.",
      ],
    },
    {
      name: "Mardin et le Tur Abdin", category: "history", coords: [37.3126, 40.7351], region: "Anatolie du Sud-Est",
      description: "Une ville de pierre couleur miel dévalant une colline au-dessus de la plaine mésopotamienne, avec d’anciens monastères syriaques tout proches.",
      wiki: "Mardin",
      long:
        "Dévalant une colline escarpée au-dessus de la vaste plaine mésopotamienne, Mardin est l’une des vieilles villes les plus belles et les moins visitées de Turquie — un enchevêtrement de maisons de calcaire couleur miel, de demeures sculptées, de mosquées et de médersas, façonné au fil d’un millénaire par des mains arabes, syriaques, kurdes et arméniennes. Depuis les toits, la plaine plate et brune s’étire vers le sud en direction de la Syrie, miroitant dans la chaleur.\n\nLe plateau voisin du Tur Abdin est un berceau du christianisme syriaque orthodoxe, parsemé d’anciens monastères de pierre — Deyrulzafaran (le « monastère du Safran ») juste à la sortie de la ville, et le grand monastère-forteresse de Mor Gabriel, fondé en 397 apr. J.-C. et toujours habité par des moines et des religieuses. Avec son bazar labyrinthique, ses cafés en terrasse et son profond passé multiculturel, Mardin ressemble à une frontière entre les mondes.",
      practical: [
        { label: "Y aller", value: "Vol jusqu’à Mardin (MQM) depuis Istanbul, ou via Diyarbakır. La vieille ville est en escaliers et piétonne — attendez-vous à des marches et des ruelles." },
        { label: "À ne pas manquer", value: "La médersa Zinciriye et ses vues depuis la terrasse, le bazar couvert, et le monastère de Deyrulzafaran à ~5 km (petit don/droit d’entrée)." },
        { label: "Aux alentours", value: "Le site romain et paléochrétien de Dara avec ses citernes taillées dans la roche et sa nécropole, à ~30 km ; le monastère de Mor Gabriel plus à l’est." },
        { label: "Quand y aller", value: "Au printemps ou à l’automne — la plaine est une fournaise au cœur de l’été." },
      ],
      stay:
        "Dormez dans un hôtel installé dans une demeure de pierre restaurée de la vieille ville, avec une chambre voûtée et une terrasse donnant sur la plaine mésopotamienne — le coucher du soleil vu d’ici, avec l’appel à la prière qui monte de la ville, est inoubliable.",
      tips: [
        "Flânez dans les ruelles et escaliers parallèles qui relient l’unique grande rue — les portes sculptées font la moitié du plaisir.",
        "Associez Mardin aux mosaïques de Gaziantep et, si le temps le permet, aux étranges tombeaux du sommet du Nemrut Dağı.",
      ],
    },
    {
      name: "Mont Nemrut (Nemrut Dağı)", category: "history", coords: [37.9809, 38.7411], region: "Anatolie du Sud-Est",
      description: "Des têtes de pierre géantes de dieux et d’un roi, renversées au sommet d’une montagne-tombeau, à voir au lever du soleil à 2 100 m.",
      wiki: "Mount Nemrut",
      long:
        "Sur un sommet isolé de 2 100 mètres dans le sud-est, un roi mégalomane du Ier siècle av. J.-C., Antiochos Ier du petit royaume de Commagène, s’est bâti son propre sanctuaire funéraire : des statues assises colossales de lui-même et d’un panthéon syncrétique de dieux grecs et perses, gardées par des aigles et des lions. Des séismes ont depuis renversé les têtes énormes, aujourd’hui éparpillées sur les terrasses à côté de leurs corps, le regard tourné vers les montagnes — une vision étrange et inoubliable.\n\nLe pèlerinage classique consiste à arriver pour le lever ou le coucher du soleil, quand la lumière rasante balaie les visages de pierre et le tumulus de pierres concassées amoncelé au-dessus du tombeau royal (toujours pas découvert). Y parvenir demande un vrai effort — une route avant l’aube et une courte montée dans le froid —, ce qui préserve le site de la foule et ajoute à l’impression de se tenir aux confins du monde antique.",
      practical: [
        { label: "Y aller", value: "Installez-vous à Kahta ou Adıyaman ; des excursions partent avant l’aube pour le lever du soleil, ou en fin d’après-midi pour le coucher. Une route de montagne haute et sinueuse, plus 20–30 min de marche jusqu’aux terrasses." },
        { label: "Entrée", value: "Droit d’entrée du parc national ~6 €. La dernière approche se fait à pied sur des pierres instables — portez de bonnes chaussures." },
        { label: "Quand y aller", value: "De la fin du printemps au début de l’automne seulement ; le sommet est enneigé et fermé en hiver. Les nuits sont froides même en été — prévoyez une couche chaude." },
        { label: "Temps à prévoir", value: "Une longue demi-journée depuis Kahta ; à combiner en chemin avec le pont romain de Cendere et Arsameia." },
      ],
      stay:
        "De simples hôtels et pensions à Kahta ou au village de Karadut (plus près du sommet) accueillent les amateurs de lever de soleil. Karadut vous place au plus près pour le départ avant l’aube et une montée plus courte.",
      tips: [
        "Le lever du soleil est plus froid et plus dégagé ; le coucher plus doux et plus facile — dans les deux cas, prenez une veste et une lampe.",
        "Les têtes sont fragiles et protégées — admirez-les, ne grimpez pas dessus.",
      ],
    },
    {
      name: "Safranbolu", category: "history", coords: [41.2500, 32.6944], region: "Arrière-pays de la mer Noire",
      description: "Une ville ottomane parfaitement préservée de demeures à colombages, de ruelles pavées et d’un caravansérail.",
      wiki: "Safranbolu",
      long:
        "Étape prospère sur l’ancienne route caravanière est–ouest, Safranbolu s’est enrichie grâce au commerce et au safran qui lui a donné son nom, et ses riches marchands ont bâti des centaines de beaux konaks à colombages, avec étages en encorbellement, fenêtres à claustras et fraîches cours intérieures. Classée par l’UNESCO et remarquablement intacte, la vieille ville est un musée vivant de l’architecture domestique ottomane, ses ruelles pavées serpentant entre les toits de tuiles rouges jusqu’à un vieux bazar et un caravansérail du XVIIe siècle.\n\nContrairement à des destinations plus grandioses, Safranbolu est un endroit modeste et laborieux, où l’on regarde dinandiers et cordonniers à l’ouvrage, où l’on goûte loukoums et douceurs au safran, et où l’on dort dans l’une des demeures restaurées. Une étape paisible et pleine d’atmosphère entre Istanbul et la côte de la mer Noire ou la Cappadoce — le monde ottoman du quotidien plutôt que celui de l’empire.",
      practical: [
        { label: "Y aller", value: "~5–6 h en bus depuis Istanbul ou Ankara jusqu’à Karabük, puis un court trajet local jusqu’à la vieille ville (Çarşı)." },
        { label: "À faire", value: "Flâner dans le vieux quartier de Çarşı, visiter un konak restauré (par ex. la maison Kaymakamlar), monter au point de vue de la colline de Hıdırlık au coucher du soleil." },
        { label: "Acheter", value: "Safran, lokum (loukoum) et cuivre forgé à la main dans les ateliers du vieux bazar." },
        { label: "Temps à prévoir", value: "Une nuit suffit pour s’en imprégner ; deux si vous voulez vraiment ralentir." },
      ],
      stay:
        "Logez dans un konak ottoman restauré du quartier de Çarşı — parquets qui craquent, banquettes de fenêtre garnies de coussins et petit-déjeuner dans la cour. C’est toute la raison de venir, et bien plus agréable que les hôtels modernes en haut de la colline.",
      tips: [
        "Montez au point de vue de Hıdırlık pour le coucher du soleil sur les toits.",
        "C’est une étape d’une nuit facile et pleine de caractère pour couper le long trajet entre Istanbul, Ankara et la côte.",
      ],
    },
  ],
};
