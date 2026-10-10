// Country ID card — schema reference lives in data/index.js
export default {
  code: "mn",
  name: "Mongolie",
  flag: "🇲🇳",
  region: "Asie centrale / de l’Est",
  tagline: "Le pays du ciel bleu et de Gengis Khan — steppe infinie, désert de Gobi et derniers grands nomades du monde.",
  tags: ["nature", "history", "trek", "slow-travel"],

  languages: {
    name: "Mongol",
    note: "Une langue mongole écrite en cyrillique (l’écriture traditionnelle verticale survit dans l’art et en Mongolie-Intérieure). Gutturale et roulante, elle est parlée par peu de gens sur d’immenses distances. Quelques mots suffisent à déclencher de grands sourires ; l’hospitalité envers les voyageurs est une tradition profonde, presque sacrée, dans la steppe.",
    phrases: [
      { fr: "Bonjour", local: "Сайн байна уу", pron: "saïn baï-NOU" },
      { fr: "Merci", local: "Баярлалаа", pron: "ba-yar-la-LAA" },
      { fr: "Oui / Non", local: "Тийм / Үгүй", pron: "tiim / ou-GOUÏ" },
      { fr: "Excusez-moi / Pardon", local: "Уучлаарай", pron: "outch-la-RAÏ" },
      { fr: "Combien ?", local: "Ямар үнэтэй вэ?", pron: "ya-mar OU-né-teï vé ?" },
      { fr: "Où est… ?", local: "…хаана байдаг вэ?", pron: "… KHAA-na baï-dag vé ?" },
      { fr: "Délicieux !", local: "Амттай!", pron: "AMT-taï !" },
      { fr: "Eau / Thé", local: "Ус / Цай", pron: "ous / tsaï" },
      { fr: "Bien / ça va", local: "Сайн", pron: "saïn" },
      { fr: "Santé !", local: "Эрүүл мэндийн төлөө", pron: "é-ROUL menn-DIIN teu-LEU" },
      { fr: "Au revoir", local: "Баяртай", pron: "ba-yar-TAÏ" },
    ],
  },

  history: {
    summary:
      "L’histoire de la Mongolie s’écrit à l’échelle du plus grand empire terrestre du monde. Des cultures nomades cavalières ont régné sur la steppe pendant des millénaires — Xiongnu, Turcs, Ouïghours — jusqu’à ce qu’en 1206, Temüjin unifie les tribus rivales et prenne le titre de Gengis Khan. En quelques décennies, lui et ses héritiers forgèrent le plus vaste empire d’un seul tenant de l’histoire, de la Corée à la Hongrie, gouverné depuis la légendaire capitale de Karakorum, et redessinèrent le commerce, la guerre et la carte de l’Eurasie. L’empire se fragmenta ; la Mongolie passa ensuite deux siècles sous domination mandchoue (Qing), connut une brève indépendance, puis devint un satellite soviétique dès les années 1920 — le deuxième pays communiste du monde — durant des décennies qui réprimèrent le bouddhisme et la mémoire du Khan. Depuis une révolution démocratique pacifique en 1990, la Mongolie a redécouvert l’un et l’autre, faisant renaître le bouddhisme et célébrant Gengis Khan comme père de la nation. Immense, enclavée et parmi les pays les moins densément peuplés de la planète, elle reste l’un des derniers endroits où une grande partie de la population vit encore d’élevage sous l’éternel ciel bleu.",
    timeline: [
      { era: "1206 (Gengis Khan)", text: "Temüjin unifie les tribus mongoles et est proclamé Gengis Khan, fondant l’empire." },
      { era: "XIIIe s. (empire mondial)", text: "Les Mongols bâtissent le plus vaste empire terrestre d’un seul tenant de l’histoire, gouverné depuis Karakorum." },
      { era: "XVIe s. (bouddhisme)", text: "Le bouddhisme tibétain s’enracine profondément ; de grands monastères comme Erdene Zuu surgissent dans la steppe." },
      { era: "1921 (révolution)", text: "Soutenue par la Russie soviétique, la Mongolie devient le deuxième État communiste du monde ; les monastères seront ensuite purgés." },
      { era: "1990 (démocratie)", text: "Une révolution pacifique met fin au parti unique ; le bouddhisme et l’héritage de Gengis Khan renaissent." },
    ],
  },

  books: [
    { title: "Genghis Khan and the Making of the Modern World", author: "Jack Weatherford", year: "2004", note: "La réévaluation à succès de Gengis Khan — un arrière-plan essentiel et vraiment captivant." },
    { title: "L’Histoire secrète des Mongols", author: "anonyme, XIIIe s.", year: "v. 1240", note: "La plus ancienne œuvre littéraire mongole conservée — la chronique de cour épique, mêlée de mythes, de l’ascension de Gengis Khan." },
    { title: "Wild East: Travels in the New Mongolia", author: "Jill Lawless", year: "2000", note: "Un portrait drôle et affectueux d’Oulan-Bator et du pays dans les années 1990 post-soviétiques, encore à vif." },
    { title: "Le Ciel bleu", author: "Galsan Tschinag", year: "1994", note: "Un roman lyrique sur un jeune berger touvain dans l’Altaï — l’enfance nomade vue de l’intérieur." },
    { title: "Eagle Dreams", author: "Stephen Bodio", year: "2003", note: "La quête d’un fauconnier jusqu’au Grand Ouest pour voir les chasseurs à l’aigle kazakhs — une lecture belle et obsessionnelle." },
  ],

  meals: [
    { name: "Khorkhog", description: "Un festin d’éleveurs — du mouton cuit dans un bidon scellé avec des pierres chauffées au feu et un peu d’eau ; les pierres brûlantes passent de main en main pour la chance et la chaleur.", tip: "Préparé pour les invités et les grandes occasions ; se voir tendre une pierre chaude et grasse est un geste de bienvenue — prenez-la." },
    { name: "Buuz", description: "Raviolis de mouton à la vapeur, le favori du quotidien et la pièce maîtresse du festin de Tsagaan Sar (Nouvel An lunaire), mangés par dizaines." },
    { name: "Khuushuur", description: "Chaussons de viande frits — plats, croustillants et juteux — vendus partout et dévorés surtout pendant la fête du Naadam." },
    { name: "Tsuivan", description: "Nouilles coupées à la main, cuites à la vapeur puis sautées avec du mouton et quelques légumes — le plat fiable et roboratif de toute cuisine de steppe." },
    { name: "Airag et produits laitiers (tsagaan idee)", description: "Le lait de jument fermenté (airag), légèrement alcoolisé et central en été, plus le caillé séché (aaruul), la crème épaisse (öröm) et les autres « aliments blancs »." },
    { name: "Suutei tsai", description: "Thé au lait avec une pincée de sel — l’offrande constante de chaque yourte, bue toute la journée contre le froid et les distances." },
  ],

  climate: {
    unit: "°C",
    note: "Extrême, sec et continental — les chiffres sont ceux d’Oulan-Bator, la capitale la plus froide du monde. Des étés courts et chauds (juin–août) et de longs hivers d’un froid féroce (jusqu’à -30 °C et moins). L’immense majorité des voyages se fait en été et au début de l’automne ; le Gobi est chaud le jour et froid la nuit, et l’Altaï lointain est alpin. Venez pendant la brève fenêtre verte.",
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
    { name: "Fête du Naadam", when: "11–13 juillet", months: [7], kind: "go", description: "La grande fête nationale des « trois jeux virils » — lutte, courses de chevaux et tir à l’arc — célébrée dans tout le pays, en plus grand à Oulan-Bator. Les petits naadams de campagne sont plus intimes et authentiques. L’événement de l’année sur lequel caler son voyage." },
    { name: "Saison verte estivale", when: "Juin – septembre", months: [6, 7, 8, 9], kind: "go", description: "La steppe est verte, les cols ouverts et les yourtes montées. C’est la période des voyages par la route, des nuits en yourte et des treks ; septembre apporte des couleurs dorées et moins de monde." },
    { name: "Festival de l’Aigle royal", when: "Début octobre", months: [10], kind: "go", description: "Dans l’Altaï, à l’extrême ouest, des chasseurs kazakhs se réunissent pour concourir avec leurs aigles royaux dressés — une célébration spectaculaire et reculée d’une tradition ancestrale. Froid et lointain, mais inoubliable." },
    { name: "Plein hiver et dzud", when: "Novembre – mars", months: [11, 12, 1, 2, 3], kind: "avoid", description: "Un froid sauvage paralyse le pays ; presque tous les voyages s’arrêtent. Seuls les plus endurants viennent pour le Nouvel An de Tsagaan Sar ou les festivals de glace — sinon, attendez l’été." },
  ],

  places: [
    {
      name: "Parc national de Gorkhi-Terelj", category: "nature", coords: [47.9167, 107.4167], region: "près d’Oulan-Bator",
      description: "Prairies alpines, formations de granit et nuits en yourte faciles — le visage accessible de la nature mongole.",
      wiki: "Gorkhi-Terelj National Park",
      long:
        "À seulement deux heures d’Oulan-Bator, Gorkhi-Terelj est l’endroit le plus simple pour goûter à la nature sauvage mongole sans longue expédition par la route. Des vallées alpines verdoyantes cernées de collines couvertes de pins sont parsemées de spectaculaires formations de granit — le très photographié Rocher de la Tortue, le temple de méditation d’Aryabal perché à flanc de colline — et piquetées des yourtes blanches des familles d’éleveurs et des camps touristiques.\n\nOn peut y monter à cheval à travers les prairies, randonner entre les rochers, dormir dans une yourte chauffée par un poêle à bouse et partager le thé au lait salé avec une famille nomade, le tout à deux pas de la capitale. En chemin, la plupart des visiteurs s’arrêtent à la colossale statue équestre de Gengis Khan en acier inoxydable étincelant, que l’on peut gravir de l’intérieur pour une vue sur la steppe depuis la tête du cheval. L’introduction parfaite, en deux ou trois jours, à la vie de la steppe et à l’hospitalité nomade.",
      practical: [
        { label: "Y aller", value: "~60–70 km / ~2 h de route depuis Oulan-Bator ; le plus simple est une excursion ou un chauffeur, les transports publics étant limités." },
        { label: "À faire", value: "Équitation et randonnée parmi les formations rocheuses, le temple de méditation d’Aryabal, le Rocher de la Tortue, et une nuit en yourte dans une famille d’éleveurs ou un camp." },
        { label: "En chemin", value: "La statue équestre de Gengis Khan de 40 m en acier inoxydable à Tsonjin Boldog — montez à l’intérieur pour la vue." },
        { label: "Quand", value: "Juin–sept. pour les prairies vertes et des nuits en yourte agréables ; glacial et en grande partie fermé en hiver." },
      ],
      stay:
        "Dormez en yourte — soit chez une famille pour l’expérience authentique (chaleur du poêle à bouse, repas partagés, chevaux à portée de main), soit dans un camp de yourtes touristique confortable avec lits et douches chaudes. Une ou deux nuits ici sont l’introduction la plus douce et la plus accessible à la Mongolie nomade.",
      tips: [
        "Passez au moins une nuit en yourte — l’intérêt de la Mongolie, c’est la vie dans la steppe, pas seulement les paysages.",
        "Associez la visite à la statue de Gengis Khan sur la route pour un premier voyage complet et facile depuis la capitale.",
      ],
    },
    {
      name: "Le désert de Gobi : Khongoryn Els et Yolyn Am", category: "nature", coords: [43.7833, 102.2500], region: "Gobi du Sud (Ömnögovi)",
      description: "Des dunes chantantes, une gorge où la glace persiste toute l’année, et les falaises flamboyantes où l’on découvrit des œufs de dinosaures.",
      wiki: "Gobi Desert",
      long:
        "Le Gobi n’est pas l’infinie mer de sable que l’on imagine, mais un désert immense et varié de plaines de gravier, de steppe herbeuse, de canyons et de dunes éparses — et il recèle certains des sites les plus extraordinaires de Mongolie. À Khongoryn Els, les « dunes chantantes », une grande muraille de sable doré s’élève jusqu’à 300 mètres et bourdonne en se déplaçant ; grimper jusqu’à la crête pour le coucher du soleil, puis longer leur pied à dos de chameau de Bactriane, est un temps fort du Gobi.\n\nAilleurs, le désert surprend : Yolyn Am (« la vallée de l’Aigle ») est une gorge étroite et ombragée des monts Gurvan Saikhan qui garde une épaisse couche de glace jusqu’au cœur de l’été, et les « falaises flamboyantes » de Bayanzag — rougeoyantes au coucher du soleil — sont l’endroit où l’explorateur Roy Chapman Andrews mit au jour, dans les années 1920, les premiers œufs de dinosaures connus de la science. Accessible par de longues et mémorables traversées en 4×4 jalonnées de camps de yourtes, le Gobi est reculé, élémentaire, et l’un des grands voyages du désert.",
      practical: [
        { label: "Y aller", value: "Prenez l’avion jusqu’à Dalanzadgad dans le Gobi du Sud et partez de là, ou faites le voyage de plusieurs jours en 4×4 depuis Oulan-Bator — la longue route fait partie de l’expérience." },
        { label: "Temps forts", value: "Les dunes chantantes de Khongoryn Els (montée au coucher du soleil + balade à dos de chameau), la gorge glacée de Yolyn Am et les falaises flamboyantes de Bayanzag, célèbres pour leurs fossiles, au coucher du soleil." },
        { label: "Se déplacer", value: "Les distances sont énormes et les routes surtout non goudronnées — voyagez avec un chauffeur/guide et des étapes en camps de yourtes ; emportez de l’eau et prévoyez le carburant." },
        { label: "Quand", value: "Juin–sept. ; journées chaudes et nuits froides toute l’année dans le désert. Prévoyez pour les deux extrêmes." },
      ],
      stay:
        "Passez les nuits dans les camps de yourtes égrenés à travers le désert — certains chez des éleveurs, d’autres simples camps touristiques — en repartant chaque jour. Dormir dans une yourte de feutre sous l’immense ciel du Gobi, loin de toute lumière, est l’essence du voyage.",
      tips: [
        "Gravissez les dunes chantantes pour le coucher du soleil (c’est une montée rude dans le sable mou) et faites la balade à dos de chameau au pied, plus frais.",
        "Le Gobi est une succession de longs trajets entre les sites — savourez le voyage plutôt que de le presser.",
      ],
    },
    {
      name: "Kharkhorin et le monastère d’Erdene Zuu", category: "history", coords: [47.2028, 102.8419], region: "Övörkhangai (centre)",
      description: "Le site de la capitale impériale de Gengis Khan, aujourd’hui marqué par le plus ancien monastère bouddhiste conservé de Mongolie.",
      wiki: "Erdene Zuu Monastery",
      long:
        "Dans la vallée de l’Orkhon, berceau des empires de la steppe, se trouve Kharkhorin — la ville moderne voisine du site de Karakorum, la capitale légendaire fondée par Gengis Khan et développée par son fils Ögedei pour gouverner le plus vaste empire de l’histoire. La cité fut ensuite rasée et il n’en reste presque rien en surface, mais ses pierres servirent à bâtir Erdene Zuu, fondé en 1585 — le plus ancien monastère bouddhiste conservé de Mongolie.\n\nEnclos par un mur saisissant jalonné de 108 stupas, Erdene Zuu abritait jadis des dizaines de temples et des milliers de moines avant que les purges staliniennes des années 1930 ne le dévastent ; les temples survivants, redevenus en partie un monastère actif, conservent un bel art bouddhique et une forte impression de résilience. L’ensemble de la vallée de l’Orkhon — paysage culturel classé par l’UNESCO, fait de pâturages, de monuments anciens et de la cascade de l’Orkhon — en fait le cœur historique du pays et l’étape naturelle de toute boucle en Mongolie centrale.",
      practical: [
        { label: "Y aller", value: "~360 km / 5–6 h de route depuis Oulan-Bator ; généralement visité dans le cadre d’une boucle en Mongolie centrale avec chauffeur/guide." },
        { label: "À voir", value: "Le monastère d’Erdene Zuu dans son enceinte aux 108 stupas, le musée de Kharkhorin consacré à Karakorum et les « pierres-tortues » qui marquaient l’ancienne ville." },
        { label: "Aux alentours", value: "Les monuments anciens de la vallée de l’Orkhon, la cascade de l’Orkhon (Ulaan Tsutgalan) et des sources chaudes — un prolongement pittoresque sur quelques jours." },
        { label: "Quand", value: "Juin–sept. ; la vallée est verte et l’enceinte du monastère agréable. Froid et calme en hiver." },
      ],
      stay:
        "Logez dans un camp de yourtes ou une maison d’hôtes près de Kharkhorin, ou poussez dans la vallée de l’Orkhon pour camper près de la cascade et des familles d’éleveurs. Dormir ici permet de voir le monastère dans le calme du petit matin, avant l’arrivée des groupes.",
      tips: [
        "Visitez Erdene Zuu tôt ou tard pour la lumière douce sur le mur aux stupas et moins de visiteurs.",
        "Prolongez dans la vallée de l’Orkhon pour ses cascades, ses sources chaudes et certains des plus beaux paysages de steppe de Mongolie centrale.",
      ],
    },
    {
      name: "Lac Khövsgöl", category: "nature", coords: [51.0333, 100.5000], region: "Nord de la Mongolie",
      description: "Un vaste lac d’un bleu profond et préservé, bordé de taïga et de Tsaatanes, éleveurs de rennes.",
      wiki: "Lake Khövsgöl",
      long:
        "À l’extrême nord, près de la frontière sibérienne, le lac Khövsgöl est la « perle bleue » de la Mongolie — un immense lac d’eau douce, profond et étonnamment limpide (qui contient une grande part de l’eau douce du pays), entouré de montagnes boisées et de taïga de mélèzes. Plus frais, plus vert et plus humide que la steppe et le désert du sud, ses rives sont faites de forêts de pins, de prairies fleuries et de yacks au pâturage ; on y pratique l’équitation, la randonnée, le kayak et, au plus profond de l’hiver gelé, un festival de glace avec traîneaux à chiens et courses de chevaux sur la glace.\n\nLa région est aussi le pays des Tsaatanes (Dukha), l’un des derniers peuples d’éleveurs de rennes au monde, qui vivent sous des tentes semblables à des tipis, haut dans la taïga ; on peut leur rendre visite lors d’exigeants treks à cheval de plusieurs jours, avec des agences respectueuses et soucieuses de la communauté. Reculé et intact, Khövsgöl est la destination des voyageurs en quête des forêts mongoles, de ses eaux les plus claires et d’un aperçu d’un mode de vie qui disparaît.",
      practical: [
        { label: "Y aller", value: "Vol jusqu’à Mörön (depuis Oulan-Bator), puis ~2–3 h de route jusqu’au village lacustre de Khatgal ; ou un long trajet par la route. La plupart le visitent lors d’un circuit dans le nord." },
        { label: "À faire", value: "Équitation, randonnée et kayak le long de la rive, nuits en yourte ou en lodge, et — pour les plus motivés — un trek à cheval de plusieurs jours pour rendre visite aux éleveurs de rennes tsaatanes dans la taïga." },
        { label: "Visites aux Tsaatanes", value: "Rejoindre les éleveurs de rennes demande un trek difficile et isolé ; partez avec une agence responsable qui a l’accord de la communauté et partage équitablement les revenus." },
        { label: "Quand", value: "Juin–sept. pour les rives vertes et le bateau ; le festival de glace en hiver (vers février–mars) est une alternative spectaculaire mais extrême." },
      ],
      stay:
        "Installez-vous dans un camp de yourtes ou un lodge au bord du lac près de Khatgal pour l’équitation et les sorties en bateau, et réveillez-vous face à l’eau calme et claire et aux collines boisées. Les voyages plus lointains se font avec des nuits sous tente ou chez des éleveurs dans la taïga — simple, isolé et inoubliable.",
      tips: [
        "Ne tentez une visite chez les éleveurs de rennes tsaatanes qu’avec une agence respectueuse de la communauté — c’est un trek difficile, et leur accord comme une juste rémunération comptent.",
        "Le climat du nord est plus humide et plus frais que dans le reste de la Mongolie — prévoyez de quoi vous protéger de la pluie et des couches chaudes.",
      ],
    },
    {
      name: "Altaï Tavan Bogd et les chasseurs à l’aigle kazakhs", category: "offbeat", coords: [49.1000, 87.8500], region: "Bayan-Ölgii (extrême ouest)",
      description: "Des sommets glaciaires de 4 000 m, des lacs glaciaires et la culture kazakhe de la chasse à l’aigle, à l’extrême ouest de la Mongolie.",
      wiki: "Altai Tavan Bogd National Park",
      long:
        "Dans le lointain coin ouest de la Mongolie, là où le pays touche la Russie, la Chine et le Kazakhstan, le parc national de l’Altaï Tavan Bogd (« les Cinq Saints ») abrite les paysages les plus hauts et les plus alpins du pays : des sommets glaciaires de plus de 4 300 mètres, le vaste glacier Potanine, des lacs glaciaires turquoise et des vallées de pétroglyphes et de pierres funéraires turciques anciennes. Une destination de trekking et d’alpinisme exigeante et spectaculaire, loin de tout et magnifiquement sauvage.\n\nLa province voisine de Bayan-Ölgii est kazakhe et musulmane — un monde à part au sein de la Mongolie — et célèbre comme le pays des chasseurs à l’aigle royal, cavaliers qui chassent renards et lièvres en hiver avec des aigles dressés. Chaque octobre, le festival de l’Aigle royal les réunit pour concourir dans un tourbillon de manteaux brodés, de chapkas de fourrure et d’oiseaux en plein vol. Accessible par un long vol ou une longue route jusqu’à Ölgii puis des pistes accidentées, c’est la Mongolie la plus lointaine — hautes montagnes et tradition nomade vivante, sans équivalent.",
      practical: [
        { label: "Y aller", value: "Vol d’Oulan-Bator à Ölgii (la capitale provinciale), puis 4×4 et guide pour les pistes accidentées vers le parc et les familles de chasseurs à l’aigle." },
        { label: "Trekking", value: "Treks de plusieurs jours vers le camp de base du Tavan Bogd, le glacier Potanine et les lacs Khoton/Khurgan — en altitude, froids et isolés ; partez équipé, avec un guide et les permis." },
        { label: "Chasseurs à l’aigle", value: "Rendez visite à une famille kazakhe de chasseurs à l’aigle, ou calez votre voyage sur le festival de l’Aigle royal début octobre (un festival de printemps, plus petit, existe aussi). Réservez très à l’avance." },
        { label: "Quand", value: "Juillet–sept. pour le trekking ; début octobre pour le festival de l’aigle. Toujours froid en altitude — prévoyez un équipement vraiment chaud." },
      ],
      stay:
        "Logez chez des familles kazakhes dans leurs yourtes (souvent plus grandes et plus richement décorées que les yourtes mongoles) et campez lors des treks en altitude. Une nuit chez une famille de chasseurs à l’aigle, à partager leurs repas et leur monde, est l’expérience la plus enrichissante de la région.",
      tips: [
        "Réservez vols et logistique du festival bien à l’avance — Ölgii est isolé et octobre se remplit vite.",
        "C’est un pays haut, froid et lointain — venez bien équipé et prévoyez des jours de marge pour la météo et les mauvaises routes.",
      ],
    },
    {
      name: "Oulan-Bator : monastère de Gandan et Musée national", category: "history", coords: [47.9210, 106.8967], region: "Oulan-Bator",
      description: "La capitale chaotique où se télescopent Gengis Khan, héritage soviétique et bouddhisme renaissant — la seule grande ville du pays.",
      wiki: "Ulaanbaatar",
      long:
        "Abritant environ la moitié de la population mongole, Oulan-Bator est le carrefour improbable et en mutation rapide par lequel passe presque chaque visiteur — un étalement de barres d’immeubles soviétiques, de tours de verre et de quartiers de yourtes cerné de collines, embouteillé et gris par endroits mais plein d’énergie, et la meilleure fenêtre sur la Mongolie moderne. C’est l’endroit pour prendre ses repères avant de partir dans la steppe et comprendre d’où vient le pays.\n\nL’essentiel se concentre au centre : la vaste place Sükhbaatar, dominée par une statue de Gengis Khan assis ; l’excellent Musée national de Mongolie, qui retrace l’histoire de l’âge de pierre à la démocratie en passant par l’empire ; et le monastère de Gandantegchinlen (« Gandan »), le plus important du pays, où des moines en robe pourpre psalmodient sous une immense statue dorée de Migjid Janraisig, reconstruite après les purges communistes. Ajoutez le spectaculaire mémorial de guerre de la colline de Zaisan et une scène de cafés et d’artisanat en plein essor : un jour ou deux ici donnent le cadre de tout ce que la nature sauvage vous montrera.",
      practical: [
        { label: "Y aller", value: "L’aéroport international Gengis-Khan relie la capitale à l’Asie et au-delà ; la ville est le point de départ de quasiment tous les voyages en campagne." },
        { label: "À voir", value: "Le Musée national de Mongolie (commencez par là pour le contexte), le monastère de Gandan, la place Sükhbaatar, le musée-temple de Choijin Lama et le mémorial de Zaisan pour la vue sur la ville." },
        { label: "Se déplacer", value: "La circulation est dense — prévoyez du temps. Profitez-en pour acheter des provisions, organiser circuits et permis, et goûter la cuisine mongole moderne avant de partir." },
        { label: "Quand", value: "L’été pour poursuivre le voyage ; la fête du Naadam (11–13 juillet) remplit la ville de lutte, de courses et de tir à l’arc." },
      ],
      stay:
        "Logez au centre près de la place Sükhbaatar pour rejoindre à pied le musée, le monastère et les restaurants, et organiser facilement la suite. Oulan-Bator est une base pratique plutôt qu’une beauté — une nuit ou deux pour s’acclimater et se préparer avant la steppe.",
      tips: [
        "Visitez d’abord le Musée national — il donne tout son sens à ce que vous verrez ensuite dans la campagne.",
        "Si vos dates le permettent, organisez-vous autour du Naadam (mi-juillet), la plus grande fête du pays.",
      ],
    },
  ],
};
