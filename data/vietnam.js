// Country ID card — schema reference lives in data/index.js
export default {
  code: "vn",
  name: "Viêt Nam",
  flag: "🇻🇳",
  region: "Asie du Sud-Est",
  tagline: "Baies de calcaire, rizières en terrasses et la meilleure cuisine de rue du monde.",
  tags: ["nature", "food", "history", "trek", "beach"],

  languages: {
    name: "Vietnamien",
    note: "Langue tonale à six tons, écrite dans un alphabet latin chargé de diacritiques qui marquent ces tons. Les accents du nord et du sud diffèrent. Les Vietnamiens sont indulgents — un « cảm ơn » souriant ouvre bien des portes.",
    phrases: [
      { fr: "Bonjour", local: "Xin chào", pron: "sinn tchao" },
      { fr: "Merci", local: "Cảm ơn", pron: "gam eun" },
      { fr: "De rien", local: "Không có gì", pron: "khom go zi" },
      { fr: "S’il vous plaît", local: "Làm ơn", pron: "lam eun" },
      { fr: "Excusez-moi / Pardon", local: "Xin lỗi", pron: "sinn loï" },
      { fr: "Oui / Non", local: "Vâng / Không", pron: "veung / khom" },
      { fr: "C’est combien ?", local: "Bao nhiêu tiền?", pron: "bao gnieou tienn ?" },
      { fr: "Où est… ?", local: "…ở đâu?", pron: "… eu daou ?" },
      { fr: "Délicieux !", local: "Ngon quá!", pron: "ngonn koua !" },
      { fr: "Santé !", local: "Một hai ba, dô!", pron: "mot haï ba, yo !" },
      { fr: "Au revoir", local: "Tạm biệt", pron: "tam biet" },
    ],
  },

  history: {
    summary:
      "Le Viêt Nam a passé mille ans sous domination chinoise avant de conquérir son indépendance au Xe siècle, puis de la défendre farouchement — repoussant les flottes mongoles et fondant des dynasties qui ont repoussé peu à peu les frontières du pays vers le sud, le long de la côte. La colonisation française au XIXe siècle apporta le café, la baguette et le chemin de fer en même temps que l’exploitation. Le XXe siècle fut celui des luttes : l’indépendance proclamée en 1945, la longue guerre qui sépara le Nord du Sud, et la réunification en 1975. Depuis les réformes du Đổi Mới en 1986, le Viêt Nam s’est ouvert et a connu un essor spectaculaire, l’une des économies d’Asie qui changent le plus vite, tout en restant profondément attaché à la famille, aux ancêtres et au rythme des récoltes de riz.",
    timeline: [
      { era: "111 av. J.-C.–938 apr. J.-C.", text: "Un millénaire de domination chinoise laisse une empreinte durable sur la langue et la cuisine." },
      { era: "938 (bataille de Bạch Đằng)", text: "Ngô Quyền défait la flotte chinoise et conquiert l’indépendance." },
      { era: "1802–1945 (dynastie Nguyễn)", text: "La dernière dynastie impériale règne depuis la citadelle de Huế." },
      { era: "1945–1975", text: "L’indépendance est proclamée ; des décennies de guerre s’achèvent par la réunification." },
      { era: "1986 (Đổi Mới)", text: "Des réformes de marché ouvrent l’économie et transforment la vie quotidienne." },
    ],
  },

  books: [
    { title: "Le Sympathisant", author: "Viet Thanh Nguyen", year: "2015", note: "Le règlement de comptes, d’un humour noir, d’un agent double avec la guerre et l’exil — prix Pulitzer." },
    { title: "Un Américain bien tranquille", author: "Graham Greene", year: "1955", note: "Amour et politique dans le Saïgon des années 1950, alors que le colonialisme français se délite." },
    { title: "Le Chagrin de la guerre", author: "Bảo Ninh", year: "1990", note: "La mémoire hantée d’un soldat nord-vietnamien — la guerre vue de l’autre côté." },
    { title: "Vietnam: A New History", author: "Christopher Goscha", year: "2016", note: "Une grande histoire, très lisible, qui va bien au-delà des années de guerre." },
  ],

  meals: [
    { name: "Phở", description: "La soupe nationale — nouilles de riz dans un bouillon clair de bœuf ou de poulet mijoté des heures, avec herbes, citron vert et piment ajoutés selon les goûts.", tip: "Mangez-le au petit-déjeuner à un stand de rue animé ; le bouillon est meilleur tôt, avant d’avoir attendu." },
    { name: "Bánh mì", description: "Une baguette héritée de l’époque coloniale française, garnie de pâté, de légumes marinés, de piment et de coriandre — le meilleur sandwich du monde, âprement débattu." },
    { name: "Bún chả", description: "Galettes de porc grillées dans un bouillon aigre-doux, avec vermicelles de riz et herbes — la spécialité de Hanoï." },
    { name: "Gỏi cuốn", description: "Rouleaux de printemps frais aux crevettes, herbes et nouilles enveloppés dans une galette de riz translucide, trempés dans une sauce cacahuète." },
    { name: "Cà phê sữa đá", description: "Un café filtre corsé sur du lait concentré sucré et des glaçons — un héritage colonial devenu obsession nationale." },
  ],

  climate: {
    unit: "°C",
    note: "Les chiffres sont ceux de Hanoï et du nord, qui connaît un hiver frais. Le centre (Huế, Đà Nẵng) subit des inondations de septembre à novembre, et le sud (Saïgon, Mékong) est chaud toute l’année, avec une saison des pluies de mai à octobre.",
    coords: [21.03, 105.85], // Hanoi — representative point for the fetch script
    key: "vn",
    best: [3, 4, 10, 11],
    avoid: [5, 6, 7, 8, 9],
    months: [
      { mean: 16, rain: 41 }, { mean: 18, rain: 28 }, { mean: 21, rain: 58 },
      { mean: 25, rain: 102 }, { mean: 27, rain: 230 }, { mean: 29, rain: 228 },
      { mean: 29, rain: 267 }, { mean: 28, rain: 320 }, { mean: 27, rain: 242 },
      { mean: 24, rain: 121 }, { mean: 21, rain: 57 }, { mean: 17, rain: 35 },
    ],
  },

  events: [
    { name: "Tết (Nouvel An lunaire)", when: "Fin janv. – mi-févr.", months: [1, 2], kind: "avoid", description: "La fête la plus importante de l’année — tout le pays rentre au village et s’arrête pratiquement une semaine : les transports sont saturés et beaucoup de restaurants, de boutiques et de sites ferment." },
    { name: "Fête des lanternes de Hội An", when: "Chaque pleine lune", months: [], kind: "go", description: "Le 14e soir de chaque mois lunaire, la vieille ville éteint ses lumières électriques et fait dériver sur la rivière des lanternes éclairées à la bougie — la plus belle soirée du Viêt Nam." },
    { name: "Fête de la mi-automne", when: "Septembre", months: [9], kind: "go", description: "Danses du lion, gâteaux de lune et défilés de lanternes des enfants envahissent les rues à la nuit tombée — particulièrement charmant à Hội An et dans le vieux quartier de Hanoï." },
    { name: "Jour de la Réunification et fête du Travail", when: "30 avril – 1er mai", months: [4, 5], kind: "note", description: "Ces jours fériés consécutifs envoient les Vietnamiens sur la côte ; stations balnéaires et vols sont complets et les prix grimpent — réservez à l’avance ou évitez." },
  ],

  places: [
    {
      name: "Baie d’Hạ Long", category: "nature", coords: [20.9101, 107.1839], region: "Quảng Ninh (nord)",
      description: "Des milliers d’îles calcaires surgissant d’une eau émeraude ; dormez à bord d’une jonque et glissez vers la baie plus calme de Bái Tử Long pour éviter la foule.",
      wiki: "Hạ Long Bay",
      long:
        "Près de 2 000 pitons et îlots calcaires surgissent à pic du golfe du Tonkin vert jade, un paysage englouti de tours, d’arches et de lagons cachés sculpté par la mer depuis des millions d’années. C’est la vue emblématique du Viêt Nam, inscrite au patrimoine mondial de l’UNESCO — et, forcément, la plus visitée : où et comment vous y allez compte donc plus que d’y aller.\n\nLe bon choix est une croisière d’une nuit sur une jonque en bois, pour vous réveiller dans la brume entre les pitons avant l’arrivée des bateaux de jour, avec un opérateur qui pousse jusqu’aux baies voisines de Bái Tử Long ou de Lan Hạ, où l’on retrouve les mêmes paysages sans la flottille. Pagayez en kayak dans des grottes marines, baignez-vous depuis le bateau, et visitez un village de pêcheurs flottant pour voir comment on vit encore sur cette eau.",
      practical: [
        { label: "Y aller", value: "~2 h 30 depuis Hanoï par l’autoroute jusqu’aux ports de croisière ; la plupart des croisières incluent le transfert." },
        { label: "Coût", value: "Les croisières d’une nuit en jonque coûtent ~120–300 $ et plus par personne, permis de la baie et repas compris." },
        { label: "Temps à prévoir", value: "2 jours / 1 nuit minimum — pour atteindre les eaux plus calmes et se réveiller dans la brume." },
        { label: "Où naviguer", value: "Choisissez un opérateur qui navigue dans Bái Tử Long ou la baie de Lan Hạ, pas sur l’itinéraire central bondé." },
      ],
      stay:
        "Ici, l’hébergement, c’est le bateau — dormez à bord d’une jonque en bois pour avoir les pitons pour vous à l’aube et au crépuscule. Pour une base à terre avec les mêmes paysages et beaucoup moins de bateaux, l’île de Cát Bà et la baie de Lan Hạ (voir cette fiche) permettent d’aller plus lentement et plus librement.",
      tips: [
        "Une croisière d’une nuit vaut mieux qu’une excursion à la journée : les bateaux de jour repartent tous en fin d’après-midi.",
        "Choisissez un petit bateau et un itinéraire Lan Hạ / Bái Tử Long pour échapper à la flottille.",
      ],
    },
    {
      name: "Vieille ville de Hội An", category: "history", coords: [15.8801, 108.338], region: "côte du centre",
      description: "Un ancien port marchand éclairé de lanternes, fait d’ateliers de tailleurs et de maisons de marchands jaunes, sans voitures et lumineux à la nuit tombée.",
      wiki: "Hội An Ancient Town",
      long:
        "Pendant trois siècles, Hội An fut l’un des grands ports marchands d’Asie du Sud-Est, où marchands japonais, chinois, hollandais et portugais se croisaient et laissaient leur empreinte. Le port s’est ensablé et le commerce est parti ailleurs — c’est précisément pourquoi la ville a survécu : un vieux quartier remarquablement complet de maisons-tubes, de salles de congrégation et du petit pont couvert japonais en bois, le tout baigné d’un ocre passé et fermé aux voitures.\n\nVenez au crépuscule, quand les enseignes électriques cèdent la place à des milliers de lanternes de soie et que les quais s’illuminent des lumières de papier qui dérivent sur l’eau. Entre deux visites, c’est une ville de tailleurs (un costume confectionné en une nuit), de nouilles cao lầu introuvables ailleurs, et de balades à vélo à travers les rizières jusqu’à la plage.",
      practical: [
        { label: "Y aller", value: "~45 min depuis l’aéroport/la gare de Đà Nẵng en taxi ou Grab ; sur place, tout se fait à pied ou à vélo." },
        { label: "Billet de la vieille ville", value: "~120 000 VND (~5 $) — donne accès à cinq maisons et salles patrimoniales, et finance la conservation." },
        { label: "Temps à prévoir", value: "2–3 nuits, pour profiter à la fois des tailleurs en journée et des soirées aux lanternes." },
        { label: "Quand", value: "Les lanternes s’allument chaque soir ; la fête des lanternes de la pleine lune éteint complètement l’éclairage électrique." },
      ],
      stay:
        "Dormez dans une maison de marchand restaurée de la vieille ville ou chez l’habitant dans un jardin juste à côté, où les hôtes prêtent des vélos pour la balade à travers les rizières jusqu’à la plage d’An Bàng. Passer la nuit, c’est être là à l’heure magique, une fois les visiteurs d’un jour partis.",
      tips: [
        "Commandez un costume ou une robe sur mesure dès votre arrivée pour qu’il soit prêt avant votre départ.",
        "Allez à vélo jusqu’à la plage d’An Bàng ou au village maraîcher de Trà Quế pour une demi-journée plus lente.",
      ],
    },
    {
      name: "Boucle de Hà Giang", category: "offbeat", coords: [22.8268, 104.9784], region: "extrême nord",
      description: "Trois jours à moto à travers les montagnes les plus spectaculaires du pays, ses vallées en terrasses et ses marchés des minorités ethniques.",
      wiki: "Hà Giang province",
      long:
        "La frontière nord du Viêt Nam avec la Chine est son coin le plus sauvage et le plus beau : un plateau karstique de flèches calcaires, de cols en épingle et de vallées en terrasses où les communautés hmong, dao, tày et lô lô gardent leurs costumes, leurs marchés et leurs langues. La façon classique de le découvrir est une boucle de trois à quatre jours à moto depuis la ville de Hà Giang — en conduisant soi-même si l’on est à l’aise, ou à l’arrière de la moto d’un guide « easy rider » sinon.\n\nLa route grimpe jusqu’au col de Mã Pì Lèng, sans doute le plus beau point de vue du pays, d’où l’on voit la rivière Nho Quế, vert émeraude, serpenter au fond d’un canyon. Les nuits se passent chez l’habitant dans les villages, autour d’alcool de riz et de repas partagés. Venez pour les paysages et les rencontres ; c’est à peu près ce qu’il y a de plus éloigné d’un voyage organisé au Viêt Nam.",
      practical: [
        { label: "Y aller", value: "Bus-couchettes de nuit ou minibus « limousine » depuis Hanoï jusqu’à la ville de Hà Giang (~6–7 h), où commence la boucle." },
        { label: "Le trajet", value: "3–4 jours, ~350 km. Conduisez vous-même seulement si vous êtes expérimenté ; sinon, montez à l’arrière avec un guide « easy rider »." },
        { label: "Permis", value: "Un permis de zone frontalière bon marché est obligatoire — généralement obtenu par votre guesthouse ou votre agence (~10 €)." },
        { label: "Temps fort", value: "Le col de Mã Pì Lèng au-dessus du canyon émeraude de la Nho Quế — sans doute le plus beau point de vue du pays." },
      ],
      stay:
        "C’est le pays du séjour chez l’habitant : les nuits se passent dans des maisons sur pilotis de villages hmong, dao et tày, autour de repas communs et d’alcool de riz. Si vous n’êtes pas un pilote vraiment sûr de vous, réservez un « easy rider » ou un circuit en petit groupe — c’est bien plus sûr dans les cols, et l’argent profite aux villages où vous dormez.",
      tips: [
        "Ne conduisez pas vous-même à moins de vraiment savoir le faire — les cols ne pardonnent pas ; monter derrière un guide est populaire pour de bonnes raisons.",
        "Venez pour les rencontres et les paysages, sans vous presser : trois nuits valent mieux que deux.",
      ],
    },
    {
      name: "Cité impériale de Huế", category: "history", coords: [16.4698, 107.5796], region: "centre du Viêt Nam",
      description: "Le palais entouré de douves des empereurs Nguyễn, sur la rivière des Parfums — en partie en ruine, profondément évocateur.",
      wiki: "Imperial City, Huế",
      long:
        "Huế fut le siège de la dynastie Nguyễn, les derniers empereurs du Viêt Nam, de 1802 à 1945, et sa Cité impériale fortifiée est un reflet à échelle réduite de la Cité interdite de Pékin, posée sur la rivière des Parfums. Derrière de larges douves et des portes monumentales s’étendent salles du trône, temples et cours — beaucoup meurtris par les guerres du XXe siècle, ce qui confère à l’ensemble une grandeur mélancolique et à demi ruinée que la restauration en cours n’a pas effacée.\n\nAccordez-lui une demi-journée dans l’enceinte, puis partez en bateau ou à vélo vers les tombeaux royaux disséminés dans les collines couvertes de pins, chacun étant la retraite paysagère privée d’un empereur. Huế est aussi une ville gastronomique à part — le bún bò Huế incendiaire et une tradition de plats « impériaux » délicats récompensent ceux qui s’attardent.",
      practical: [
        { label: "Y aller", value: "Huế est sur la grande ligne ferroviaire nord–sud ; la citadelle est à quelques minutes à pied ou en cyclo-pousse de l’autre côté de la rivière des Parfums." },
        { label: "Entrée", value: "Cité impériale ~200 000 VND (~8 $) ; des billets combinés ajoutent les tombeaux royaux." },
        { label: "Temps à prévoir", value: "Une demi-journée dans l’enceinte ; une journée complète avec une sortie en bateau ou à vélo vers les tombeaux." },
        { label: "Aussi", value: "Une promenade en bateau-dragon sur la rivière des Parfums relie la pagode Thiên Mụ et les tombeaux des empereurs à flanc de colline." },
      ],
      stay:
        "Installez-vous près de la rivière ou dans les ruelles verdoyantes d’An Cựu, et accordez plus d’une nuit à Huế — c’est une ville gastronomique discrètement élégante à part entière. Louez un vélo pour rejoindre à votre rythme les mélancoliques tombeaux royaux disséminés dans les collines de pins.",
      tips: [
        "Associez la citadelle à une paisible sortie en bateau pour voir deux ou trois tombeaux royaux.",
        "Venez le ventre vide : la cuisine impériale et de rue de Huế justifie à elle seule de s’attarder.",
      ],
    },
    {
      name: "Grottes de Phong Nha", category: "nature", coords: [17.59, 106.283], region: "Quảng Bình",
      description: "Patrie de Sơn Đoòng, la plus grande grotte du monde ; même les cavernes accessibles ont ici des proportions de cathédrale.",
      wiki: "Phong Nha-Kẻ Bàng National Park",
      long:
        "Le parc national de Phong Nha-Kẻ Bàng cache l’une des plus grandes concentrations de grottes de la planète, creusées dans un ancien massif calcaire près de la frontière laotienne. Il est célèbre pour abriter Sơn Đoòng, la plus grande galerie souterraine du monde — assez vaste pour contenir un pâté de maisons, avec sa propre jungle et ses propres nuages —, accessible seulement lors d’une expédition coûteuse et soumise à des permis limités.\n\nHeureusement, pas besoin de Sơn Đoòng pour être émerveillé. La grotte du Paradis est une cathédrale de stalactites dans laquelle on s’enfonce sur une passerelle ; la grotte de Phong Nha d’origine se visite en bateau le long d’une rivière souterraine ; et la grotte Sombre ajoute une tyrolienne, un bain de boue et une baignade. La campagne alentour, faite de karsts, de rivières et de villages tranquilles, est devenue une base paisible à part entière.",
      practical: [
        { label: "Y aller", value: "Train ou bus jusqu’à Đồng Hới, puis ~45 min jusqu’au village de Phong Nha ; des bus directs partent de Huế et de Hanoï." },
        { label: "Entrée des grottes", value: "Grotte du Paradis ~270 000 VND ; grotte de Phong Nha ~150 000 VND + bateau (~550 000 VND par bateau). Sơn Đoòng est une expédition de plusieurs jours, coûteuse et limitée par permis." },
        { label: "Temps à prévoir", value: "2–3 nuits pour associer les grottes et la campagne." },
        { label: "Option trek", value: "Des treks guidés grottes et jungle (Tú Làn, Hang Én) vont d’une journée à plusieurs jours." },
      ],
      stay:
        "Phong Nha est devenue l’une des étapes les plus reposantes du centre du Viêt Nam — fermes familiales et guesthouses au bord de la rivière éparpillées entre karsts et rizières. Louez un vélo ou un scooter pour la boucle de la vallée de Bong Lai, avec ses bars de ferme et ses trous d’eau pour se baigner, entre les grandes grottes.",
      tips: [
        "Pas besoin de Sơn Đoòng — les grottes du Paradis et de Phong Nha sont stupéfiantes et abordables.",
        "Parcourez à vélo la paisible vallée de Bong Lai pour le côté lent et rural de Phong Nha.",
      ],
    },
    {
      name: "Delta du Mékong", category: "slow-travel", coords: [10.0452, 105.7469], region: "le sud",
      description: "Un labyrinthe aquatique de marchés flottants, de vergers et de maisons sur pilotis — à explorer en bateau depuis Cần Thơ, à l’aube.",
      wiki: "Mekong Delta",
      long:
        "Là où le Mékong atteint enfin la mer, il se ramifie en un vaste treillis fertile de chenaux, de rizières, de vergers et de mangroves — le grenier à riz et la corbeille à fruits du Viêt Nam, et tout un mode de vie sur l’eau et au bord de l’eau. Ici, les journées suivent le rythme du fleuve : sampans glissant sur des canaux bordés de cocotiers, ateliers produisant galettes de riz et bonbons à la noix de coco, et maisons sur pilotis au bord de l’eau.\n\nL’expérience classique est la visite à l’aube d’un marché flottant comme celui de Cái Răng près de Cần Thơ, où les grossistes vendent leurs produits de bateau à bateau, un échantillon hissé au bout d’une perche. Évitez l’excursion express d’une journée depuis Saïgon au profit d’une ou deux nuits ici, idéalement chez l’habitant, pour ressentir le rythme paisible du delta.",
      practical: [
        { label: "Y aller", value: "Cần Thơ est à ~3 h 30 de Saïgon en bus ; restez une ou deux nuits plutôt que de faire une excursion express à la journée." },
        { label: "Marché flottant", value: "Cái Răng, près de Cần Thơ, est le plus animé à l’aube (~5 h 30–7 h) ; louez un petit bateau (~15–25 $)." },
        { label: "Temps à prévoir", value: "2 jours / 1 nuit minimum, chez l’habitant au bord de l’eau." },
        { label: "Se déplacer", value: "Les petits sampans qui empruntent les canaux étroits en révèlent bien plus que les gros bateaux d’excursion." },
      ],
      stay:
        "Le delta récompense ceux qui ralentissent : un séjour chez une famille, dans une maison sur pilotis au bord d’un canal — où l’on aide à cuisiner, où l’on pédale dans les chemins des vergers et où l’on se lève tôt pour le marché flottant —, vaut toutes les excursions depuis Saïgon. Bến Tre et les chemins autour de Cần Thơ et de Vĩnh Long en regorgent.",
      tips: [
        "Arrivez au marché flottant à l’aube — en milieu de matinée, il est en grande partie terminé.",
        "Préférez le séjour chez l’habitant à l’hôtel ; le delta, c’est la vie au fil de l’eau, pas des sites à visiter.",
      ],
    },
    {
      name: "Rizières en terrasses de Sa Pa", category: "trek", coords: [22.3364, 103.8438], region: "Lào Cai",
      description: "Des vallées en escaliers de rizières vertes et dorées, cultivées par les communautés hmong et dao ; trek de village en village.",
      wiki: "Sa Pa",
      long:
        "Dans les montagnes près de la frontière chinoise, la vallée de Muong Hoa dégringole en immenses escaliers de rizières en terrasses, sculptées au fil des générations et cultivées par les Hmong noirs, les Dao rouges et d’autres communautés qui portent encore leurs costumes caractéristiques d’indigo et de broderies. La ville de Sa Pa elle-même est devenue tapageuse et surconstruite : tout l’intérêt est d’en sortir, en descendant à pied de village en village à travers les rizières.\n\nLes terrasses sont les plus photogéniques quand elles sont inondées et brillent comme des miroirs vers mai–juin, ou lourdes et dorées juste avant la récolte d’automne. Un trek guidé avec une femme de la région, avec une nuit chez l’habitant dans un village, est à la fois la façon la plus enrichissante de voir la vallée et celle qui fait profiter l’argent à ceux qui la cultivent.",
      practical: [
        { label: "Y aller", value: "Train de nuit ou bus-couchettes de Hanoï jusqu’à Lào Cai, puis montée jusqu’à Sa Pa (~5–6 h au total)." },
        { label: "Trek", value: "Des marches guidées d’une demi-journée ou de plusieurs jours descendent de village en village dans la vallée de Muong Hoa." },
        { label: "Guides", value: "Engagez directement un guide local hmong ou dao — le moyen le plus sûr que l’argent profite à la communauté." },
        { label: "Quand", value: "Les terrasses sont inondées et brillent comme des miroirs vers mai–juin ; lourdes et dorées juste avant la récolte de septembre." },
      ],
      stay:
        "Évitez la ville surconstruite et logez chez l’habitant dans un village de la vallée — Ta Van, Ta Phin ou Lao Chải, rejoints à pied — avec ses textiles d’indigo, un dîner partagé et les terrasses devant la porte. Arriver à pied avec une guide de la région et dormir dans son village, c’est à la fois le meilleur de Sa Pa et la façon la plus équitable de le découvrir.",
      tips: [
        "Installez-vous dans un village, pas en ville, pour la vraie vallée et le vrai calme.",
        "Engagez directement un guide local issu d’une minorité ethnique plutôt que de passer par une grosse agence.",
      ],
    },
    {
      name: "Vieux quartier de Hanoï", category: "food", coords: [21.0333, 105.8500], region: "Hanoï",
      description: "Un enchevêtrement millénaire de rues de corporations et de stands de cuisine de rue — le cœur battant de la capitale, envahi de scooters.",
      wiki: "Old Quarter, Hanoi",
      long:
        "Le vieux quartier de Hanoï est un dédale commerçant dense depuis mille ans, ses ruelles portant encore le nom des corporations qui les occupaient autrefois — Hàng Bạc (l’argent), Hàng Gai (la soie), Hàng Thiếc (l’étain). C’est aujourd’hui une glorieuse saturation des sens : étroites « maisons-tubes », volets coloniaux décrépits, enchevêtrements de fils électriques et un flot incessant de motos que l’on apprend à traverser en avançant lentement et régulièrement.\n\nC’est surtout l’une des grandes capitales mondiales de la cuisine de rue. C’est ici le pays du phở et du bún chả — porc grillé et nouilles que Barack Obama et Anthony Bourdain ont partagés tout près, dans un repas resté célèbre —, du café à l’œuf, de la bia hơi (bière pression fraîche) sur des tabourets en plastique, et d’une centaine de spécialistes d’un seul plat. Venez le ventre vide, mangez là où il y a du monde, et laissez-vous perdre.",
      practical: [
        { label: "Y aller", value: "Centre de Hanoï ; tout se fait à pied, même si traverser la marée de scooters est un art — avancez lentement et régulièrement." },
        { label: "Que manger", value: "Phở, bún chả, bánh cuốn, café à l’œuf et bia hơi sur des tabourets en plastique — allez là où les habitants font la queue." },
        { label: "Temps à prévoir", value: "2–3 nuits, idéalement avec une balade gourmande le matin." },
        { label: "Aux alentours", value: "Le lac Hoàn Kiếm, le marché de nuit du week-end et le théâtre de marionnettes sur l’eau sont tous à quelques pas." },
      ],
      stay:
        "Logez dans le vieux quartier ou juste à côté pour sortir manger un phở à l’aube et boire une bia hơi au crépuscule. C’est bruyant et chaotique — c’est tout l’intérêt — alors choisissez une chambre à l’écart des grandes ruelles pour le calme, et faites de ce centre piéton une base tranquille entre deux longs trajets.",
      tips: [
        "Prenez votre phở du petit-déjeuner tôt, à un stand animé, avant que le bouillon n’ait attendu.",
        "Traversez la rue à un rythme lent et régulier et laissez les scooters vous contourner — ne vous arrêtez jamais brusquement.",
      ],
    },
    {
      name: "Temple de la Littérature", category: "history", coords: [21.0293, 105.8355], region: "Hanoï",
      description: "La première université du Viêt Nam, un serein temple confucéen de cours closes et de stèles posées sur des tortues de pierre.",
      wiki: "Temple of Literature, Hanoi",
      long:
        "Fondé en 1070 et siège de la première université nationale du Viêt Nam, le temple de la Littérature est un rare vestige de l’architecture confucéenne classique et le lieu le plus calme du centre de Hanoï. On traverse une succession de cinq cours closes et de portes ornementales, chacune plus contemplative que la précédente, autour d’étangs de lotus et de pavillons.\n\nSes trésors sont 82 stèles de pierre posées sur le dos de tortues de pierre, gravées des noms des lauréats du doctorat depuis le XVe siècle — les étudiants viennent encore les toucher pour se porter chance avant les examens. Une visite courte et enrichissante, qui met sous vos yeux le profond respect du pays pour le savoir, et un contraste élégant avec le chaos du vieux quartier tout proche.",
      practical: [
        { label: "Y aller", value: "Centre de Hanoï, ~2 km à l’ouest du lac Hoàn Kiếm ; à pied, en cyclo-pousse ou en Grab." },
        { label: "Entrée", value: "~70 000 VND (~2,80 $)." },
        { label: "Temps à prévoir", value: "Environ une heure pour parcourir les cinq cours closes." },
        { label: "Tenue", value: "Une tenue correcte est appréciée dans ce temple confucéen." },
      ],
      stay:
        "Une courte visite dans le centre de Hanoï — logez dans le vieux quartier (voir ce guide). Intégrez-la à une matinée tranquille : les cours sont au plus calme tôt le matin, un élégant antidote au bruit de la ville avant de replonger dans l’animation pour le déjeuner.",
      tips: [
        "Venez tôt pour avoir les cours contemplatives pour vous seul.",
        "Les stèles sur les tortues de pierre honorent des lauréats du XVe siècle — les étudiants les touchent encore pour se porter chance.",
      ],
    },
    {
      name: "Tràng An et Ninh Bình", category: "nature", coords: [20.2506, 105.8990], region: "Ninh Bình",
      description: "Des pitons karstiques au-dessus de rizières inondées — la « baie d’Hạ Long terrestre », à découvrir en sampan à rames.",
      wiki: "Tràng An",
      long:
        "À deux heures au sud de Hanoï, la province de Ninh Bình offre le spectacle de la baie d’Hạ Long sans la mer : les mêmes tours calcaires, qui surgissent ici de rizières inondées et de lentes rivières vertes. Dans le complexe paysager de Tràng An, site UNESCO, des femmes du coin vous emmènent en sampan à fond plat à travers une série de grottes inondées et devant des temples cachés, en ramant souvent avec les pieds.\n\nTout près, Tam Cốc propose une balade fluviale similaire à travers « trois grottes », plus belle quand les rizières se dorent à la fin du printemps ; Hoa Lư conserve les temples de la première capitale du Viêt Nam au Xe siècle ; et une rude montée des marches de la grotte de Múa offre le panorama classique sur toute la vallée. Une échappée facile et très gratifiante depuis la capitale.",
      practical: [
        { label: "Y aller", value: "~2 h au sud de Hanoï en train ou en bus jusqu’à Ninh Bình, puis vélo ou Grab jusqu’aux embarcadères." },
        { label: "Balade en bateau", value: "Sortie en sampan à Tràng An ~250 000 VND (~10 $) pour un itinéraire d’~3 h à travers les grottes inondées ; Tam Cốc est similaire." },
        { label: "Temps à prévoir", value: "1–2 nuits pour combiner la balade en bateau, le point de vue de la grotte de Múa et les temples de Hoa Lư." },
        { label: "Grotte de Múa", value: "~100 000 VND ; ~500 marches jusqu’au panorama classique sur la vallée." },
      ],
      stay:
        "Passez une nuit au milieu des karsts chez l’habitant à Tam Cốc ou Ninh Bình, avec vue sur les rizières, et pédalez entre les embarcadères, les marches de la grotte de Múa et l’ancienne capitale de Hoa Lư. Une nuit sur place transforme une excursion pressée en une pause vraiment lente et magnifique.",
      tips: [
        "Prenez l’itinéraire de Tràng An pour les temples et les grottes ; Tam Cốc pour les rizières dorées (fin mai–juin).",
        "Montez à la grotte de Múa au lever du soleil ou en fin d’après-midi pour éviter à la fois la chaleur et la foule.",
      ],
    },
    {
      name: "Sanctuaire de Mỹ Sơn", category: "history", coords: [15.7639, 108.1244], region: "près de Hội An",
      description: "Les tours-temples hindoues en brique du royaume disparu du Champa, se délitant dans une vallée de jungle.",
      wiki: "Mỹ Sơn",
      long:
        "Bien avant la poussée des Vietnamiens vers le sud, le centre du Viêt Nam était le domaine des Chams, un royaume maritime hindou et malais dont Mỹ Sơn était le cœur spirituel. Dans un cirque de collines luxuriantes, ils ont élevé entre le IVe et le XIIIe siècle des groupes de tours de brique rouge dédiées à Shiva, liées par une résine végétale dont la recette n’est toujours pas entièrement comprise.\n\nLes bombardements américains pendant la guerre ont détruit le plus grand groupe, et le temps et les racines ont eu raison d’une bonne partie du reste, mais ce qui subsiste — linteaux de grès sculptés, figures dansantes, lingams patinés — est profondément évocateur, surtout tôt le matin, avant les cars. Visité en demi-journée depuis Hội An, c’est une fenêtre sur une culture raffinée dont la plupart des voyageurs ignoraient l’existence.",
      practical: [
        { label: "Y aller", value: "~1 h depuis Hội An en excursion, en Grab ou en scooter ; une courte navette puis une marche de l’entrée jusqu’aux tours." },
        { label: "Entrée", value: "~150 000 VND (~6 $), navette et spectacle de danse cham compris." },
        { label: "Temps à prévoir", value: "Une demi-journée ; visez l’ouverture vers 7 h, avant les cars et la chaleur." },
        { label: "Meilleur moment", value: "Tôt le matin — plus frais, lumière plus douce et beaucoup moins de monde." },
      ],
      stay:
        "Visité en demi-journée depuis Hội An, alors logez là-bas (voir ce guide). Allez-y à l’ouverture en scooter ou en voiture privée, avant l’arrivée des groupes, et vous aurez souvent les tours moussues et envahies de racines presque pour vous seul.",
      tips: [
        "Arrivez à l’ouverture vers 7 h — Mỹ Sơn est petit et devient vite bondé et chaud.",
        "Certaines excursions rentrent à Hội An en bateau sur la rivière Thu Bồn — une option lente et agréable.",
      ],
    },
    {
      name: "Cát Bà et baie de Lan Hạ", category: "offbeat", coords: [20.7280, 107.0490], region: "Hải Phòng",
      description: "La voisine plus sauvage et plus calme d’Hạ Long — une île boisée frangée d’une baie plus jolie encore.",
      wiki: "Cát Bà Island",
      long:
        "Cát Bà est la plus grande île au large de la côte nord du Viêt Nam, et la baie de Lan Hạ qui la jouxte est, aux yeux de beaucoup, plus belle qu’Hạ Long elle-même — le même paysage marin karstique, parsemé de plages tranquilles et de fermes perlières flottantes, mais avec une fraction des bateaux. Une grande partie de l’île est protégée en parc national, refuge du langur à tête dorée, en danger critique d’extinction.\n\nFaites-en une base active et autonome plutôt qu’une escale de croisière : randonnez ou pédalez dans l’intérieur boisé, pagayez en kayak entre les îlots de Lan Hạ, grimpez sur le calcaire grâce à un nombre croissant de voies, et baignez-vous dans des criques désertes. La ville principale est sans charme particulier, mais vous êtes là pour l’eau et les collines, et elles tiennent leurs promesses.",
      practical: [
        { label: "Y aller", value: "Combinés bus + ferry depuis Hanoï (~3 h 30), ou hors-bord/croisière depuis Hạ Long ou Tuần Châu." },
        { label: "Sur l’eau", value: "Kayak et sorties en bateau dans la baie de Lan Hạ dès ~20 $ ; les croisières à la journée visitent plages tranquilles et fermes perlières." },
        { label: "Temps à prévoir", value: "2–3 nuits pour mêler la baie, le parc national et un peu d’escalade." },
        { label: "Activités", value: "Randonnées dans le parc national de Cát Bà, vélo dans l’intérieur boisé, et escalade en solo au-dessus de l’eau (deep-water solo) sur le karst." },
      ],
      stay:
        "Faites de Cát Bà une base autonome et active plutôt qu’une escale d’une nuit en croisière : les guesthouses de la ville portuaire, ou des éco-bungalows plus calmes près de Lan Hạ, vous placent à côté du kayak, de l’escalade et des criques désertes — les paysages d’Hạ Long à un rythme plus lent et moins cher.",
      tips: [
        "La baie de Lan Hạ est sans doute plus jolie qu’Hạ Long et bien plus calme — donnez-lui la priorité.",
        "Louez un kayak ou un petit bateau pour rejoindre les plages que les croisières d’un jour ignorent.",
      ],
    },
    {
      name: "Đà Lạt", category: "cities", coords: [11.9404, 108.4583], region: "hauts plateaux du centre",
      description: "Une ville d’altitude au climat frais, faite de villas françaises, de forêts de pins, de fermes florales et d’architecture excentrique.",
      wiki: "Da Lat",
      long:
        "Bâtie par les Français comme refuge d’altitude loin de la chaleur côtière, Đà Lạt se niche entre forêts de pins et lacs à 1 500 mètres, et son climat doux la définit toujours. Il en reste un paysage urbain de villas Art déco pastel, une tour radio façon tour Eiffel et un ancien palais d’été, le tout baigné d’un léger air alpin incongru — mais aussi une veine excentrique, un peu hippie, incarnée par la surréaliste « Crazy House » à la Gaudí.\n\nLes hauteurs fraîches font de la région le jardin du Viêt Nam : fermes de fraises, thé d’artichaut, serres de fleurs et — de plus en plus — un très bon café cultivé sur les pentes alentour. Autour de la ville se trouvent cascades, parcours de canyoning et les hautes terres de Lang Biang : un changement de rythme et de température rafraîchissant par rapport au reste du pays.",
      practical: [
        { label: "Y aller", value: "Vol court depuis Saïgon/Hanoï, ou bus pittoresque et sinueux depuis la côte à Nha Trang." },
        { label: "Temps à prévoir", value: "2–3 nuits pour la ville, les plantations de café et les cascades alentour." },
        { label: "Se déplacer", value: "Assez frais pour marcher ; prenez un scooter ou un Grab pour les fermes florales, le lac et la Crazy House." },
        { label: "À ne pas manquer", value: "Le café de spécialité à la source, la surréaliste « Crazy House », et le canyoning ou les chutes de Datanla." },
      ],
      stay:
        "L’air doux et les forêts de pins de Đà Lạt se prêtent à quelques jours tranquilles : des guesthouses dans des villas pastel et des séjours chez l’habitant dans les plantations de café en bordure de ville permettent de déguster le café de spécialité vietnamien là où il pousse, et de se réchauffer au coin du feu le soir — un vrai changement de température et de rythme par rapport aux plaines.",
      tips: [
        "Prenez une veste légère — les soirées sont vraiment fraîches ici.",
        "Cherchez les torréfacteurs de nouvelle génération ; les collines alentour produisent certains des meilleurs grains du Viêt Nam.",
      ],
    },
    {
      name: "Montagnes de Marbre", category: "history", coords: [16.0036, 108.2620], region: "Đà Nẵng",
      description: "Cinq collines de marbre et de calcaire criblées de grottes, de sanctuaires et de grottes bouddhistes au-dessus de la côte.",
      wiki: "Marble Mountains (Vietnam)",
      long:
        "Surgissant brusquement de la plaine côtière entre Đà Nẵng et Hội An, les cinq montagnes de Marbre portent le nom des cinq éléments et sont criblées de grottes transformées au fil des siècles en sanctuaires bouddhistes et hindous. On gravit des escaliers de pierre en passant devant des pagodes jusqu’à des grottes-temples où des rais de lumière tombent sur les autels ; certaines ont abrité des combattants viêt-cong et un hôpital de campagne pendant la guerre.\n\nDepuis le sommet de Thủy Sơn, la plus grande, la vue embrasse China Beach et revient vers la ville. Les villages de tailleurs de pierre au pied des collines transforment encore le marbre local en tout ce qui se peut, des Bouddhas aux bracelets. Une demi-journée facile et pleine d’atmosphère entre les deux villes, qui vaut bien l’effort des marches.",
      practical: [
        { label: "Y aller", value: "Entre Đà Nẵng et Hội An ; ~20 min de l’une ou l’autre en Grab ou en scooter." },
        { label: "Entrée", value: "~40 000 VND (~1,60 $) ; un ascenseur pour monter à Thủy Sơn coûte ~15 000 VND de plus, sinon prenez les marches." },
        { label: "Temps à prévoir", value: "Une demi-journée pour les grottes, les sanctuaires et les vues du sommet." },
        { label: "À prévoir", value: "De bonnes chaussures et de l’eau — il y a beaucoup de marches de pierre irrégulières." },
      ],
      stay:
        "Une demi-journée facile entre Đà Nẵng et Hội An — installez-vous dans l’une ou l’autre (voir le guide de Hội An pour l’option la plus lente). Associez-la à une baignade aux plages voisines de My Khe ou d’An Bàng pour une journée tranquille entre côte et grottes.",
      tips: [
        "Montez en ascenseur et redescendez à pied pour garder vos jambes pour les grottes-temples.",
        "Combinez avec un après-midi plage à My Khe ou An Bàng, tout près.",
      ],
    },
    {
      name: "Îles Côn Đảo", category: "offbeat", coords: [8.6833, 106.6000], region: "au large de la côte sud",
      description: "Un archipel reculé et d’une beauté poignante, au passé carcéral sombre, avec des récifs intacts et des tortues.",
      wiki: "Côn Đảo",
      long:
        "Loin dans la mer de Chine méridionale, l’archipel de Côn Đảo associe une beauté de carte postale à un passé sombre. Sous les Français, puis sous le régime sud-vietnamien, ses tristement célèbres prisons — dont les infâmes « cages à tigres » — ont détenu et tué des dizaines de milliers de prisonniers politiques ; les sites sont aujourd’hui des mémoriaux émouvants, et la tombe de l’héroïne révolutionnaire Võ Thị Sáu attire des pèlerins toute la nuit.\n\nAu-delà de cette histoire, les îles comptent parmi les plus préservées du Viêt Nam : collines boisées plongeant vers des plages blanches désertes, un parc marin protégé aux coraux en bonne santé, et des tortues marines qui viennent pondre en saison. Accessible par un vol court ou un long ferry, Côn Đảo reste merveilleusement calme — un endroit pour plonger, marcher et réfléchir plutôt que pour faire la fête.",
      practical: [
        { label: "Y aller", value: "Vol court depuis Saïgon ou Cần Thơ, ou long ferry depuis Sóc Trăng / Vũng Tàu." },
        { label: "Mémoriaux des prisons", value: "Petits droits d’entrée ; un audioguide ou un guide local apporte un contexte indispensable." },
        { label: "Temps à prévoir", value: "3–4 nuits — c’est isolé et fait pour vraiment ralentir." },
        { label: "Nature", value: "Plongée et snorkeling sur des récifs en bonne santé ; ponte des tortues marines sur l’île de Bảy Cạnh (juin–sept., en excursion)." },
      ],
      stay:
        "Côn Đảo reste merveilleusement calme — de petites guesthouses et quelques écolodges dans la ville de Côn Sơn donnent sur des plages désertes. C’est un endroit pour parcourir la route côtière à vélo, plonger ou marcher, visiter les émouvants sites des prisons, et rejoindre les habitants lors de la veillée de minuit sur la tombe de Võ Thị Sáu. Venez pour réfléchir et vous ressourcer, pas pour faire la fête.",
      tips: [
        "Louez un scooter ou un vélo — la route côtière et les plages de l’île sont le temps fort.",
        "Pour la saison de ponte des tortues (juin–sept.), réservez à l’avance une sortie de nuit avec les rangers sur l’île de Bảy Cạnh.",
      ],
    },
    {
      name: "Vallée de Mai Châu", category: "nature", coords: [20.6600, 105.1000], region: "Hòa Bình",
      description: "Une douce vallée de villages de maisons sur pilotis et de rizières, une échappée rurale facile depuis Hanoï.",
      wiki: "Mai Châu",
      long:
        "À quelques heures seulement à l’ouest de Hanoï mais à mille lieues par l’ambiance, Mai Châu est une large vallée à fond plat de rizières lumineuses cernée de collines basses et boisées, cultivée par des communautés thaïes blanches qui vivent dans des maisons traditionnelles en bois sur pilotis. Elle offre l’expérience des terrasses du nord sous une forme plus douce et plus accessible — idéale si la boucle de Hà Giang est plus que ce que vous cherchez.\n\nLes journées se passent à pédaler sur les chemins de terre entre les villages, à marcher jusqu’à des points de vue sur le patchwork des champs, et à acheter les textiles tissés à la main qui font la réputation des Thaïs. Les nuits se passent chez l’habitant sous une maison sur pilotis, autour de poisson grillé et d’alcool de riz. Discret, accueillant, et l’une des façons les plus simples de troquer la ville contre la campagne.",
      practical: [
        { label: "Y aller", value: "~4 h à l’ouest de Hanoï en bus ou en voiture privée, par le col de Thung Khe." },
        { label: "Temps à prévoir", value: "1–2 nuits de vélo et de marche tranquilles." },
        { label: "Se déplacer", value: "Louez un vélo et faites le tour des villages et des rizières — la vallée est plate et facile." },
        { label: "Par rapport à Hà Giang", value: "Bien plus doux et plus accessible si la boucle à moto du nord est plus que ce que vous voulez." },
      ],
      stay:
        "Mai Châu, c’est le séjour chez l’habitant en maison sur pilotis rendu facile : dormez sous la maison en bois d’une famille thaïe blanche, sur un matelas sous une moustiquaire, autour de poisson grillé et d’alcool de riz, et passez la journée à pédaler de village en village et à acheter leurs textiles tissés à la main — l’une des façons les plus chaleureuses et les plus simples de troquer la ville contre la campagne.",
      tips: [
        "Préférez un séjour chez l’habitant dans un village à un hôtel-resort pour vivre la vraie vallée.",
        "Un vélo suffit — toute la vallée est plate et tranquille.",
      ],
    },
  ],
};
