// Country ID card — schema reference lives in data/index.js
export default {
  code: "th",
  name: "Thaïlande",
  flag: "🇹🇭",
  region: "Asie du Sud-Est",
  tagline: "Temples dorés et montagnes vertes, paradis de la cuisine de rue et temps suspendu sur les îles.",
  tags: ["food", "history", "nature", "beach", "slow-travel"],

  languages: {
    name: "Thaï",
    note: "Langue tonale (cinq tons) écrite dans son propre alphabet gracieux, sans espaces entre les mots. La politesse est essentielle : ajoutez « khrap » (si vous êtes un homme) ou « kha » (si vous êtes une femme) pour adoucir presque n’importe quelle phrase, et saluez par le waï, paumes jointes. Un sourire vous mène loin.",
    phrases: [
      { fr: "Bonjour", local: "สวัสดี", pron: "sa-wat-di (khrap/kha)" },
      { fr: "Merci", local: "ขอบคุณ", pron: "khop-khoun (khrap/kha)" },
      { fr: "Oui / Non", local: "ใช่ / ไม่", pron: "tchaï / maï" },
      { fr: "Excusez-moi / Pardon", local: "ขอโทษ", pron: "kho-thôt" },
      { fr: "Combien ?", local: "เท่าไหร่", pron: "thao-raï ?" },
      { fr: "Où est… ?", local: "…อยู่ที่ไหน", pron: "… you thi naï ?" },
      { fr: "Délicieux !", local: "อร่อย", pron: "a-roï !" },
      { fr: "Pas épicé, s’il vous plaît", local: "ไม่เผ็ด", pron: "maï phèt (khrap/kha)" },
      { fr: "Pas de sac plastique", local: "ไม่เอาถุง", pron: "maï ao thoung" },
      { fr: "Eau", local: "น้ำ", pron: "nam" },
      { fr: "Au revoir", local: "ลาก่อน", pron: "laa-kone" },
    ],
  },

  history: {
    summary:
      "La Thaïlande — longtemps appelée Siam — est la seule nation d’Asie du Sud-Est jamais colonisée par une puissance européenne, ce dont elle tire une profonde fierté. Ses racines culturelles plongent dans les royaumes bouddhistes de Sukhothaï (XIIIe–XIVe siècle), qui forgea un art et une écriture typiquement thaïs, et de la puissante Ayutthaya, capitale fluviale cosmopolite qui commerça avec le monde entier jusqu’à son sac par les Birmans en 1767. La dynastie Chakri fonda ensuite Bangkok en 1782, et d’habiles rois du XIXe siècle modernisèrent le pays et jouèrent les puissances européennes les unes contre les autres pour préserver son indépendance. Une révolution en 1932 mit fin à la monarchie absolue ; au fil d’un XXe siècle agité, fait de coups d’État et de développement rapide, la monarchie et le bouddhisme theravada sont restés les deux piliers de l’identité nationale.",
    timeline: [
      { era: "1238–1438 (Sukhothaï)", text: "Le premier grand royaume thaï s’épanouit ; on attribue l’alphabet thaï au roi Ramkhamhaeng." },
      { era: "1351–1767 (Ayutthaya)", text: "Une riche capitale fluviale cosmopolite commerce dans toute l’Asie, jusqu’à sa destruction par une armée birmane." },
      { era: "1782 (fondation de Bangkok)", text: "Le roi Rama Ier fonde la dynastie Chakri et la nouvelle capitale sur la Chao Phraya." },
      { era: "XIXe siècle (indépendance préservée)", text: "Les rois Mongkut et Chulalongkorn modernisent le Siam et en font le seul État jamais colonisé de la région." },
      { era: "1932 (monarchie constitutionnelle)", text: "Une révolution sans effusion de sang met fin au pouvoir royal absolu ; l’État thaï moderne prend forme." },
    ],
  },

  books: [
    { title: "La Plage", author: "Alex Garland", year: "1996", note: "Le roman de l’utopie routarde qui a à la fois mythifié et égratigné le rêve des îles thaïlandaises." },
    { title: "Four Reigns", author: "Kukrit Pramoj", year: "1953", note: "Un roman adoré qui suit une femme à la cour de Bangkok sous quatre rois — une fenêtre sur la vie thaïe." },
    { title: "Sightseeing", author: "Rattawut Lapcharoensap", year: "2005", note: "Des nouvelles vives et drôles sur la Thaïlande contemporaine, par un jeune écrivain thaïlando-américain." },
    { title: "A History of Thailand", author: "Chris Baker et Pasuk Phongpaichit", year: "2005", note: "L’histoire moderne de référence, lucide et claire." },
    { title: "Bangkok 8", author: "John Burdett", year: "2003", note: "Un polar populaire mais plein d’atmosphère, imprégné des contradictions de la ville." },
  ],

  meals: [
    { name: "Pad kra pao", description: "Le vrai fast-food national — porc ou poulet haché sauté au basilic sacré et au piment, sur du riz, couronné d’un œuf au plat croustillant (khai dao).", tip: "Demandez-le « phet » si vous supportez le piquant ; exigez un œuf au plat coulant dessus — c’est tout l’intérêt." },
    { name: "Som tam", description: "Salade de papaye verte incendiaire, pilée avec citron vert, piment, sucre de palme, sauce de poisson et cacahuètes — l’âme de la cuisine de l’Isan (nord-est)." },
    { name: "Khao soi", description: "La gloire du nord de la Thaïlande : une soupe de nouilles au curry dans un bouillon de coco, avec nouilles aux œufs moelleuses et croustillantes et pickles — la meilleure à Chiang Mai." },
    { name: "Currys (gaeng)", description: "Du curry féroce du sud au doux massaman — vert, rouge, khao soi, et le massaman d’influence musulmane aux cacahuètes et pommes de terre." },
    { name: "Riz gluant à la mangue", description: "Mangue mûre sur riz gluant imbibé de lait de coco — le dessert parfait de la saison chaude, idéal pendant la saison des mangues (avril–mai)." },
    { name: "Cuisine de rue et marchés de nuit", description: "Le vrai restaurant thaï, c’est la rue : brochettes grillées, nouilles « boat noodles », roti et fruits frais, sur les charrettes et les marchés de nuit, partout." },
  ],

  climate: {
    unit: "°C",
    note: "Les chiffres sont ceux de Bangkok et des plaines centrales. La Thaïlande a trois saisons — fraîche et sèche (nov.–févr., la meilleure période), chaude (mars–mai, éprouvante) et la mousson humide (juin–oct.). La côte d’Andaman (Phuket, Krabi) et les îles du golfe (Ko Samui) suivent un calendrier de mousson un peu différent — voir les remarques locales ci-dessous.",
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
    { name: "Songkran (Nouvel An thaï)", when: "13–15 avril", months: [4], kind: "go", description: "La grande bataille d’eau nationale — tout le pays descend dans la rue pour s’arroser. Un chaos joyeux, mais réservez à l’avance et attendez-vous à ce que tout ferme pendant les congés." },
    { name: "Saison fraîche et sèche", when: "Novembre – février", months: [11, 12, 1, 2], kind: "go", description: "La meilleure période : journées chaudes, faible humidité, mer calme sur les deux côtes, et nuits agréablement fraîches dans le nord." },
    { name: "Loy Krathong et Yi Peng", when: "Novembre (pleine lune)", months: [11], kind: "go", description: "Des lotus flottants éclairés à la bougie dérivent sur l’eau dans tout le pays, et des milliers de lanternes célestes s’envolent à Chiang Mai — l’une des plus belles fêtes d’Asie." },
    { name: "Pluies de mousson", when: "Environ juin – octobre", months: [6, 7, 8, 9, 10], kind: "note", description: "De fortes averses l’après-midi (rarement toute la journée) et une mer agitée côté Andaman ; les paysages sont au plus vert et les prix au plus bas. La côte du golfe (Ko Samui) est alors au plus sec." },
  ],

  places: [
    {
      name: "Chiang Mai et les temples de la vieille ville", category: "history", coords: [18.7883, 98.9853], region: "Nord de la Thaïlande",
      description: "Une vieille ville ceinte de douves, faite de temples en teck et de ruelles, porte des montagnes du nord et de la meilleure cuisine du pays.",
      wiki: "Chiang Mai",
      long:
        "Ancienne capitale du royaume septentrional du Lanna, Chiang Mai s’inscrit dans des douves carrées et des remparts de brique en ruine ; son quadrillage de ruelles tranquilles abrite plus de 30 temples — dorés, sculptés dans le teck, souvent vieux de plusieurs siècles. Le stupa de brique du Wat Chedi Luang, brisé par un séisme, l’élégant Wat Phra Singh et le Wat Phra That Doi Suthep perché sur la montagne au-dessus de la ville sont incontournables, mais la moitié du plaisir est de tomber sur un petit wihan au détour d’un soi.\n\nPlus fraîche, plus verte et bien plus détendue que Bangkok, Chiang Mai est aussi une capitale gastronomique — khao soi, saucisse du nord et superbes marchés de nuit — et la base naturelle pour la montagne : treks vers les villages des ethnies montagnardes, sanctuaires d’éléphants éthiques et sommets de l’extrême nord. C’est la ville que la plupart des voyageurs finissent par adorer, et où ils s’attardent.",
      practical: [
        { label: "Y aller", value: "1 h de vol depuis Bangkok, ou le pittoresque train de nuit couchettes (~12–13 h) — réservez une couchette basse." },
        { label: "Temples", value: "La plupart des wats de la vieille ville sont gratuits ou coûtent ~30–50 bahts ; tenue correcte (épaules/genoux couverts). Le Doi Suthep, sur la montagne, coûte ~30 bahts plus le transport." },
        { label: "Aux alentours", value: "Sanctuaires d’éléphants éthiques (choisissez ceux sans monte, en observation seulement), cours de cuisine et treks dans les collines alentour." },
        { label: "Quand", value: "Nov.–févr. est frais et dégagé ; évitez la « saison des brûlis » de mars–avril, quand la fumée des feux agricoles peut étouffer la vallée." },
      ],
      stay:
        "Installez-vous dans la vieille ville ou juste à côté des douves, dans une petite guesthouse près des temples et du marché du dimanche (Sunday Walking Street), ou dans le quartier verdoyant et plein de cafés de Nimmanhaemin. Pour voyager lentement, passez quelques nuits dans un village de montagne ou dans la paisible ville de rivière de Mae Rim/Pai plus au nord.",
      tips: [
        "Le marché du dimanche (Sunday Walking Street) est le meilleur du pays pour la cuisine et l’artisanat — venez le ventre vide.",
        "Fuyez les camps où l’on « monte » les éléphants ; choisissez des sanctuaires d’observation sans balade ni spectacle.",
      ],
    },
    {
      name: "Parc historique de Sukhothaï", category: "history", coords: [17.0208, 99.7036], region: "Centre-nord de la Thaïlande",
      description: "Les ruines sereines de brique et de stuc du premier royaume thaï — à explorer à vélo, à l’aube.",
      wiki: "Sukhothai Historical Park",
      long:
        "Sukhothaï — « l’aube du bonheur » — fut le berceau du premier État thaï unifié au XIIIe siècle, et ses ruines sont les plus gracieuses du pays. Dans un parc UNESCO magnifiquement entretenu, chedis de brique, flèches en bouton de lotus et Bouddhas sereins aux formes allongées se dressent entre étangs de lotus et pelouses : le style de Sukhothaï dans ce qu’il a de plus raffiné. L’image du grand Bouddha assis du Wat Si Chum, aperçue à travers une haute fente dans ses murs, est inoubliable.\n\nBien plus calme et contemplatif qu’Ayutthaya, Sukhothaï est fait pour le vélo : louez-en un et glissez d’un monument à l’autre dans la fraîcheur du petit matin ou à l’heure dorée, quand la lumière réchauffe la vieille brique et que la foule est absente. Les ruines satellites de Si Satchanalai, toutes proches, sont plus paisibles encore.",
      practical: [
        { label: "Y aller", value: "Vol jusqu’à Sukhothaï (THS) ou bus depuis Bangkok/Chiang Mai. Logez à Sukhothaï-la-Neuve (~12 km) ou, mieux, près de la vieille ville, à côté du parc." },
        { label: "Entrée", value: "Le parc est divisé en zones ; la zone centrale (la plus belle) coûte ~100 bahts, plus un petit supplément vélo ou véhicule. Si Satchanalai est un site séparé, plus calme." },
        { label: "Se déplacer", value: "Louez un vélo (~30–50 bahts/jour) à l’entrée — le parc, plat et ombragé, s’y prête parfaitement." },
        { label: "Quand y aller", value: "Entrez à l’ouverture (~6 h 30) ou en fin d’après-midi pour la lumière douce, la fraîcheur et un site presque désert." },
      ],
      stay:
        "Logez près de la vieille ville plutôt que dans la ville moderne — quelques guesthouses avec jardin et petits hôtels vous permettent de rejoindre les ruines à vélo pour l’ouverture et le coucher du soleil. Une base de petite ville paisible, avec une bonne cuisine locale.",
      tips: [
        "Parcourez la zone centrale à vélo à l’aube ; poussez jusqu’au Bouddha géant du Wat Si Chum et au Wat Saphan Hin sur sa colline.",
        "Ajoutez les ruines quasi désertes de Si Satchanalai pour une demi-journée plus tranquille encore.",
      ],
    },
    {
      name: "Bangkok : Rattanakosin et le fleuve", category: "history", coords: [13.7500, 100.4914], region: "Centre de la Thaïlande",
      description: "La vieille île royale aux temples étincelants et au Grand Palais, traversée par la Chao Phraya et ses canaux.",
      wiki: "Rattanakosin Island",
      long:
        "Malgré son étalement de néons, le cœur de Bangkok est la vieille île royale de Rattanakosin, lovée dans un méandre de la Chao Phraya et un anneau de canaux. Ici se dressent l’éblouissant Grand Palais et le Wat Phra Kaew, qui abrite le vénéré Bouddha d’émeraude ; l’immense Bouddha couché et l’école de massage traditionnel du Wat Pho ; et, de l’autre côté de l’eau, la flèche en épi de maïs du Wat Arun, à voir au coucher du soleil.\n\nLe fleuve lui-même est la plus vieille artère de la ville — sautez dans les bateaux bon marché du Chao Phraya Express entre les temples, et prenez un long-tail pour gagner les quartiers plus calmes des khlongs (canaux) de Thonburi, où survivent maisons en teck et jardins d’orchidées. Tout près, les vieilles ruelles de Banglamphu et les marchés de Chinatown (Yaowarat) servent parmi les meilleures cuisines de rue du monde. Chaotique, moite et follement vivant.",
      practical: [
        { label: "Y aller", value: "Prenez le bateau Chao Phraya Express jusqu’à Tha Chang (Grand Palais) ou Tha Tien (Wat Pho/Wat Arun) — moins cher et plus rapide que la route." },
        { label: "Grand Palais", value: "~500 bahts et code vestimentaire strict (épaules et genoux entièrement couverts, pour tous) ; allez-y à l’ouverture pour éviter la chaleur et les groupes." },
        { label: "Attention aux arnaques", value: "Ignorez quiconque, à l’extérieur, prétend que le palais est « fermé aujourd’hui » et propose un tour en tuk-tuk — c’est l’arnaque classique de la boutique de pierres précieuses." },
        { label: "Manger", value: "Chinatown (Yaowarat) à la nuit tombée pour la cuisine de rue ; Wang Lang et le marché aux fleurs de Pak Khlong en journée." },
      ],
      stay:
        "Pour l’atmosphère, logez dans le vieux Banglamphu près du fleuve et des temples (les ruelles calmes juste à côté de Khao San), ou dans le pittoresque Chinatown. Les hôtels avec vue sur le fleuve mettent les bateaux Express et les temples à votre porte et vous évitent les embouteillages.",
      tips: [
        "Utilisez le fleuve et le métro aérien BTS / le métro MRT pour échapper à la circulation légendaire de Bangkok.",
        "Traversez jusqu’au Wat Arun pour le coucher du soleil, puis dînez au bord du fleuve face à la flèche illuminée.",
      ],
    },
    {
      name: "Ayutthaya", category: "history", coords: [14.3550, 100.5600], region: "Centre de la Thaïlande",
      description: "L’ancienne capitale insulaire du Siam, en ruine — prangs de brique, Bouddhas décapités et une tête de pierre enlacée par les racines d’un arbre.",
      wiki: "Ayutthaya Historical Park",
      long:
        "Pendant quatre siècles, Ayutthaya fut l’une des villes les plus grandes et les plus riches du monde : une capitale siamoise cosmopolite bâtie sur une île au confluent de trois rivières, commerçant avec la Chine, le Japon, la Perse et l’Europe. En 1767, une armée birmane la rasa ; aujourd’hui, ses ruines classées par l’UNESCO — hauts prangs de brique, rangées de Bouddhas décapités et fondations de monastères — s’étendent à travers la ville moderne en un champ de brique rouge plein d’atmosphère.\n\nL’image la plus célèbre se trouve au Wat Mahathat, où une sereine tête de Bouddha en grès repose, enlacée dans les racines d’un figuier étrangleur. Facile à visiter à la journée ou sur une nuit depuis Bangkok, le parc se découvre au mieux à vélo, en glissant entre les temples en début ou en fin de journée. Un tour de l’île en long-tail au coucher du soleil fait revivre la capitale fluviale disparue.",
      practical: [
        { label: "Y aller", value: "~1 h 30 depuis Bangkok en train (bon marché et pittoresque), en minibus ou en croisière fluviale. Facile à la journée ou sur une nuit tranquille." },
        { label: "Entrée", value: "Chaque temple ~50 bahts, ou un billet combiné (~220 bahts) pour les six principaux. Beaucoup de ruines périphériques sont en accès libre." },
        { label: "Se déplacer", value: "Louez un vélo près de la gare, ou un tuk-tuk à l’heure ; les sites sont dispersés mais le terrain est plat." },
        { label: "Savoir-vivre", value: "Ne grimpez jamais sur une image du Bouddha et ne posez jamais au-dessus ; devant la célèbre tête enlacée de racines, gardez votre propre tête plus basse que celle du Bouddha." },
      ],
      stay:
        "Passer la nuit permet de parcourir les ruines à vélo à l’aube et au crépuscule, bien après le départ des visiteurs venus de Bangkok pour la journée. Quelques guesthouses au bord de l’eau sur l’île proposent vélos et tours de la vieille ville en long-tail au coucher du soleil.",
      tips: [
        "Faites le Wat Mahathat, le Wat Ratchaburana et le Wat Phra Si Sanphet à vélo à l’heure dorée pour la plus belle lumière et le moins de monde.",
        "Un tour de l’île en long-tail au coucher du soleil longe des temples riverains que les cars de touristes ignorent.",
      ],
    },
    {
      name: "Railay et la côte de Krabi", category: "beach", coords: [8.0110, 98.8377], region: "Côte d’Andaman (sud)",
      description: "D’imposants pitons karstiques au-dessus d’une eau turquoise — escalade, lagons cachés et plages accessibles seulement en bateau.",
      wiki: "Railay",
      long:
        "La côte d’Andaman autour de Krabi est l’endroit où les paysages karstiques de carte postale de la Thaïlande atteignent leur sommet : falaises calcaires abruptes et îles coiffées de jungle jaillissant d’une eau vert jade. Railay, une péninsule coupée du continent par ses falaises et accessible uniquement en bateau long-tail, en est le joyau — escalade de classe mondiale sur les parois au-dessus du sable, lagon intérieur caché qu’on atteint au prix d’une grimpette boueuse, et célèbre plage de Phra Nang au pied de sa grotte hérissée de stalactites.\n\nD’ici ou depuis Ao Nang tout proche, on peut sauter d’île en île vers des rivages plus calmes, pagayer en kayak entre mangroves et hongs (lagons nés de grottes effondrées) et fuir les foules fêtardes de Phuket. Pour un rythme plus lent encore, posez-vous à Ko Lanta ou sur la minuscule Ko Jum, plus au sud. C’est l’Andaman dans ce qu’elle a de plus spectaculaire, et aucune route n’y mène.",
      practical: [
        { label: "Y aller", value: "Vol jusqu’à Krabi (KBV) ; bateau long-tail depuis Ao Nang ou la ville de Krabi jusqu’à Railay (~15 min, ~150–200 bahts). Aucune voiture n’accède à la péninsule." },
        { label: "Quand y aller", value: "Nov.–avril pour une mer d’Andaman calme et limpide ; la mousson de mai–oct. apporte une mer agitée et moins de bateaux, mais aussi la verdure, le calme et des prix bas." },
        { label: "À faire", value: "Escalade (cours pour débutants), kayak dans les mangroves et les hongs, et randonnée-grimpette jusqu’au point de vue et au lagon de Railay." },
        { label: "D’île en île", value: "Bateaux à la journée vers Ko Poda, les îles Hong et Chicken Island ; partez tôt pour devancer la foule et le vent." },
      ],
      stay:
        "Railay offre de tout, des hôtels à flanc de falaise aux simples bungalows du côté plus calme de Railay Est, côté mangrove. Pour vraiment prendre votre temps, installez-vous sur la paisible Ko Lanta ou sur Ko Jum, à peine développée, où les plages se vident et le rythme ralentit.",
      tips: [
        "La plage de Phra Nang est la plus belle tôt le matin, avant l’arrivée des bateaux d’excursion.",
        "Réservez l’escalade avec une école réputée ; le calcaire est superbe, mais le soleil et la roche deviennent brûlants dès midi.",
      ],
    },
    {
      name: "Pai et la boucle de Mae Hong Son", category: "nature", coords: [19.3583, 98.4406], region: "Montagnes de l’extrême nord",
      description: "Une paisible vallée de montagne aux sources chaudes, cascades et villages perchés, sur une route en lacets légendaire.",
      wiki: "Pai",
      long:
        "Au nord de Chiang Mai, la route grimpe en tire-bouchon dans les montagnes brumeuses le long de la boucle de Mae Hong Son — un circuit de 600 km aux 1 864 virages en épingle, villages d’ethnies montagnardes, sources chaudes et cascades, l’un des grands road trips à moto d’Asie du Sud-Est. Son étape la plus connue, Pai, est une ville de vallée décontractée, faite de rizières, de bungalows au bord de la rivière et de cafés tranquilles, cernée de collines qui se remplissent de nuages à l’aube.\n\nAu-delà des repaires de routards, de vraies récompenses vous attendent : la grotte de Lod et sa traversée de rivière en long-tail, les villages karens et lisus, les points de vue dans la brume, et la paisible capitale provinciale de Mae Hong Son avec ses temples de style birman. Frais, vert et lent, c’est le contrepoint montagnard des plages — à parcourir sur plusieurs jours sans se presser, à moto ou en voiture.",
      practical: [
        { label: "Y aller", value: "~3–4 h de minibus depuis Chiang Mai par la route réputée sinueuse (les comprimés contre le mal des transports aident), ou faites la boucle vous-même à moto en 3–5 jours." },
        { label: "La boucle", value: "Chiang Mai → Pai → Mae Hong Son → Khun Yuam → retour ; comptez 3–5 jours. Vérifiez les freins et roulez doucement dans les virages." },
        { label: "À faire", value: "Le canyon de Pai au coucher du soleil, les sources chaudes de Tha Pai, la grotte de Lod près de Soppong, et la brume matinale depuis un point de vue à flanc de colline." },
        { label: "Quand", value: "Nov.–févr. est frais et dégagé ; l’extrême nord peut être vraiment froid la nuit — prévoyez une couche chaude." },
      ],
      stay:
        "Dormez dans un bungalow au bord de la rivière ou des rizières, juste à l’extérieur de Pai, pour le chant des oiseaux et la brume du matin plutôt que la rue des bars. Le long de la boucle, de simples guesthouses à Mae Hong Son et des nuits chez l’habitant dans les villages permettent de couper la route et de vraiment ralentir.",
      tips: [
        "Ne louez une moto que si vous savez vraiment en conduire une — la route de montagne fait de nombreuses victimes parmi les voyageurs inexpérimentés.",
        "Les matinées sont pour la brume et les points de vue ; gardez les après-midi libres pour les sources chaudes et les cascades.",
      ],
    },
    {
      name: "Ko Tao et les îles du golfe", category: "diving", coords: [10.0956, 99.8403], region: "Golfe de Thaïlande",
      description: "Une eau claire et chaude et une plongée bon marché de renommée mondiale, sur une petite île décontractée au large de la côte est.",
      wiki: "Ko Tao",
      long:
        "Dans le golfe de Thaïlande, la petite île de Ko Tao (« l’île de la Tortue ») est l’un des endroits les moins chers et les plus prisés au monde pour apprendre la plongée, avec une eau chaude et limpide, des récifs faciles et une école de plongée à chaque coin de rue. Même sans bouteille, le snorkeling dans ses baies et dans la crique aux rochers de granit de Ko Nang Yuan, au large, est superbe, et l’île garde une ambiance plus calme et plus basse que sa voisine Ko Pha-Ngan, célèbre pour ses fêtes.\n\nLes îles du golfe suivent un autre calendrier de mousson que la côte d’Andaman — elles sont souvent au plus sec et au plus calme de juin à septembre environ, quand la côte ouest est sous la pluie, ce qui en fait une bonne alternative en saison chaude. Posez-vous dans une baie tranquille, plongez ou nagez avec masque et tuba la journée, et regardez le coucher du soleil depuis un bar perché sur la colline.",
      practical: [
        { label: "Y aller", value: "Vol jusqu’à Ko Samui ou sur le continent (Chumphon/Surat Thani), puis ferry catamaran jusqu’à Ko Tao (la traversée peut être agitée — prenez un comprimé)." },
        { label: "Plongée", value: "Le brevet Open Water y est réputé abordable (~10 000–12 000 bahts) ; choisissez une école bien notée pour sa sécurité, pas seulement la moins chère." },
        { label: "Quand y aller", value: "Environ juin–sept. et janv.–avril sont les meilleures périodes ; les fortes pluies du golfe et la mer agitée culminent vers oct.–nov." },
        { label: "À ne pas manquer", value: "Un bateau pour Ko Nang Yuan, pour le snorkeling et le point de vue, et les baies calmes de Ko Tao elle-même, comme Tanote et Sai Nuan." },
      ],
      stay:
        "Évitez la bande principale de Sairee Beach et prenez un bungalow dans une crique plus calme — Tanote Bay, Sai Nuan ou le sud — où l’on peut faire du snorkeling depuis la plage et où les nuits sont paisibles. On trouve encore ici de simples bungalows ventilés, à flanc de colline et bon marché.",
      tips: [
        "Louez un kayak ou du matériel de snorkeling plutôt que d’enchaîner les sorties en bateau — les récifs sont proches du rivage.",
        "Les routes escarpées de l’île sont mauvaises ; prenez un long-tail ou marchez plutôt qu’un scooter si vous n’êtes pas sûr de vous.",
      ],
    },
    {
      name: "Isan : Khon Kaen, Ubon et les temples khmers", category: "offbeat", coords: [14.8283, 103.5236], region: "Nord-est de la Thaïlande",
      description: "Le cœur rural et gourmand de la Thaïlande — d’anciens sanctuaires khmers, et presque aucun visage étranger.",
      wiki: "Phanom Rung",
      long:
        "L’Isan, vaste plateau du nord-est bordé par le Laos et le Cambodge, est la Thaïlande que la plupart des touristes zappent complètement — et elle n’en est que plus riche. C’est le cœur culturel du pays : le berceau du som tam, du riz gluant et du poulet grillé, de la musique mor lam et des gens les plus aimables et les plus détendus du pays, où un étranger reste une curiosité et où les prix sont les plus bas de Thaïlande.\n\nSes sites phares sont les temples khmers bâtis quand la région faisait partie de l’empire angkorien — avant tout Phanom Rung, un magnifique sanctuaire de grès rose sur un volcan éteint, aligné de sorte que le soleil traverse ses quinze portes quelques matins par an. Ajoutez les villes du Mékong, les villages de tisserands de soie et la faune de Khao Yai en chemin : l’Isan récompense le voyageur indépendant avec une Thaïlande vraie et brute.",
      practical: [
        { label: "Y aller", value: "Trains et vols desservent Khon Kaen, Ubon Ratchathani, Nakhon Ratchasima (Korat) et Buriram ; une voiture aide pour les temples et les villages." },
        { label: "Phanom Rung", value: "~100 bahts ; le grand sanctuaire khmer sur son volcan est le chef-d’œuvre de la région. Vérifiez les dates d’alignement solaire pour voir le soleil se lever à travers les portes." },
        { label: "Manger", value: "L’Isan est la source de la cuisine de rue la plus aimée de Thaïlande — som tam, gai yang (poulet grillé), larb et riz gluant. Goûtez-les ici, à leur meilleur." },
        { label: "Aussi", value: "Les villes du Mékong, Nong Khai et Chiang Khan, les villages de tisserands de soie, et le parc national de Khao Yai sur la route depuis Bangkok." },
      ],
      stay:
        "Installez-vous dans une ville de province comme Buriram (pour Phanom Rung), Khon Kaen ou Ubon et faites des excursions à la journée, ou logez dans une ville au bord du Mékong comme Chiang Khan ou Nong Khai pour des soirées lentes de petite ville au bord du fleuve. Les nuits chez l’habitant dans les villages de tisserands de soie vont plus loin encore.",
      tips: [
        "Visez une fête de temple ou l’alignement solaire de Phanom Rung si les dates concordent.",
        "Armez-vous de patience pour les transports et de quelques mots de thaï — l’anglais est plus rare par ici, et l’accueil est d’autant plus chaleureux que vous faites l’effort.",
      ],
    },
  ],
};
