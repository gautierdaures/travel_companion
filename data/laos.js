// Country ID card — schema reference lives in data/index.js
export default {
  code: "la",
  name: "Laos",
  flag: "🇱🇦",
  region: "Asie du Sud-Est",
  tagline: "Le cœur paisible du Mékong — temples dorés et montagnes couvertes de jungle.",
  tags: ["nature", "trek", "history", "slow-travel"],

  languages: {
    name: "Lao",
    note: "Langue tonale très proche du thaï, écrite dans son propre alphabet aux formes arrondies. Le parler est doux et posé, à l’image du rythme de vie. « Sabaidee », accompagné d’une légère inclinaison mains jointes (le nop), est la salutation à tout faire.",
    phrases: [
      { fr: "Bonjour", local: "ສະບາຍດີ", pron: "sa-baï-di" },
      { fr: "Merci", local: "ຂອບໃຈ", pron: "khop-tchaï" },
      { fr: "Merci beaucoup", local: "ຂອບໃຈຫຼາຍໆ", pron: "khop-tchaï laï-laï" },
      { fr: "S’il vous plaît", local: "ກະລຸນາ", pron: "ka-lou-na" },
      { fr: "Excusez-moi / Pardon", local: "ຂໍໂທດ", pron: "kho-thôt" },
      { fr: "Oui / Non", local: "ແມ່ນ / ບໍ່", pron: "mèn / bo" },
      { fr: "C’est combien ?", local: "ເທົ່າໃດ？", pron: "thao-daï ?" },
      { fr: "Où est… ?", local: "…ຢູ່ໃສ？", pron: "… you-saï ?" },
      { fr: "Délicieux !", local: "ແຊບ！", pron: "sèp !" },
      { fr: "Santé ! (bonne chance)", local: "ໂຊກດີ！", pron: "sôk-di !" },
      { fr: "Au revoir", local: "ລາກ່ອນ", pron: "la-kone" },
    ],
  },

  history: {
    summary:
      "Le Laos fait remonter son identité au royaume de Lan Xang, au XIVe siècle — « le pays du Million d’éléphants » —, qui régna pendant des siècles sur le moyen Mékong depuis la cité royale de Luang Prabang. Morcelé par la suite et pris en étau entre de puissants voisins, il passa sous domination coloniale française au XIXe siècle, au sein de l’Indochine. Pendant la « guerre secrète » liée à la guerre du Viêt Nam, il devint le pays le plus bombardé par habitant de l’histoire, avant de devenir en 1975 une république socialiste. Enclavé et montagneux, peu peuplé et rythmé par un bouddhisme centré sur le temple et le fleuve, le Laos reste le coin le plus paisible d’Asie du Sud-Est.",
    timeline: [
      { era: "1353 (fondation du Lan Xang)", text: "Fa Ngum unit les principautés lao au sein du « pays du Million d’éléphants »." },
      { era: "XVIe siècle", text: "Le bouddhisme s’épanouit ; Luang Prabang puis Vientiane deviennent capitales royales." },
      { era: "1893–1953 (domination française)", text: "Le Laos devient un protectorat au sein de l’Indochine française." },
      { era: "1964–1973 (guerre secrète)", text: "Des bombardements américains massifs pendant la guerre du Viêt Nam, dont les engins non explosés pèsent encore aujourd’hui." },
      { era: "1975 (république)", text: "La monarchie prend fin et la République démocratique populaire lao est fondée." },
    ],
  },

  books: [
    { title: "Le Déjeuner du coroner", author: "Colin Cotterill", year: "2004", note: "Un polar plein d’humour dans le Vientiane des années 1970 — toute la série du docteur Siri est un régal." },
    { title: "Ant Egg Soup", author: "Natacha Du Pont de Bie", year: "2004", note: "Une balade gastronomique à travers le Laos à la recherche de sa cuisine méconnue." },
    { title: "Stalking the Elephant Kings", author: "Christopher Kremmer", year: "1997", note: "Une enquête sur le sort de la famille royale lao disparue." },
    { title: "A Short History of Laos", author: "Grant Evans", year: "2002", note: "Une introduction claire et concise à ce pays de l’entre-deux." },
  ],

  meals: [
    { name: "Larb", description: "Le plat national — viande ou poisson haché mélangé à du citron vert, du piment, de la sauce de poisson et de la poudre de riz grillé, mangé avec du riz gluant.", tip: "Roulez le riz gluant en boulette avec les doigts et servez-vous-en pour attraper le larb." },
    { name: "Riz gluant (khao niaw)", description: "Riz glutineux cuit à la vapeur, servi dans un panier tressé ; l’aliment de base national, mangé avec les doigts à chaque repas." },
    { name: "Tam mak hoong", description: "Salade de papaye verte pilée au mortier — plus funky et plus piquante que la version thaïe, avec de la sauce de poisson fermenté." },
    { name: "Khao piak sen", description: "Un bol réconfortant de nouilles de riz coupées à la main dans un bouillon de poulet — le petit-déjeuner lao par excellence." },
    { name: "Or lam", description: "Un ragoût de Luang Prabang à la viande de buffle, aux herbes et à l’aubergine, légèrement amer et poivré grâce au mak khaen." },
  ],

  climate: {
    unit: "°C",
    note: "Les chiffres sont ceux de Vientiane et des plaines du Mékong. Trois saisons : fraîche et sèche (nov.–févr.), chaude (mars–mai) et humide (juin–oct.). Les montagnes du nord, comme à Luang Prabang, sont nettement plus fraîches la nuit.",
    coords: [17.97, 102.63], // Vientiane — representative point for the fetch script
    key: "la",
    best: [11, 12, 1, 2],
    avoid: [4, 5, 6, 7, 8, 9, 10],
    months: [
      { mean: 22, rain: 10 }, { mean: 24, rain: 14 }, { mean: 27, rain: 34 },
      { mean: 29, rain: 68 }, { mean: 28, rain: 242 }, { mean: 27, rain: 310 },
      { mean: 27, rain: 377 }, { mean: 26, rain: 415 }, { mean: 26, rain: 303 },
      { mean: 26, rain: 93 }, { mean: 24, rain: 19 }, { mean: 22, rain: 8 },
    ],
  },

  events: [
    { name: "Pi Mai (Nouvel An lao)", when: "Mi-avril", months: [4], kind: "go", description: "Trois jours de bataille d’eau nationale et de fêtes dans les temples — joyeux et trempé, mais c’est aussi la période la plus chaude et la plus poussiéreuse de l’année, et beaucoup de commerces ferment." },
    { name: "Boun Bang Fai (fête des Fusées)", when: "Mai", months: [5], kind: "go", description: "Les villages lancent vers le ciel des fusées artisanales en bambou pour appeler la pluie — bruyant, arrosé et merveilleusement local." },
    { name: "Fête des courses de pirogues", when: "Sept. – oct.", months: [9, 10], kind: "go", description: "Des équipages de longues pirogues s’affrontent sur le Mékong pour marquer la fin du carême bouddhiste ; les berges de Luang Prabang et de Vientiane se transforment en fête." },
    { name: "Fête du That Luang", when: "Novembre (pleine lune)", months: [11], kind: "go", description: "La plus grande fête religieuse du Laos, autour du stupa doré de Vientiane — processions aux chandelles, offrandes et immense foire." },
  ],

  places: [
    {
      name: "Luang Prabang", category: "history", coords: [19.8867, 102.135], region: "centre-nord du Laos",
      description: "Une ville UNESCO de wats dorés et de villas françaises où les moines en robe safran reçoivent l’aumône à l’aube — l’âme du Laos.",
      wiki: "Luang Prabang",
      long:
        "Ancienne capitale royale du Laos, nichée dans les montagnes au confluent du Mékong et de la Nam Khan, Luang Prabang est l’une des villes les plus envoûtantes d’Asie et le cœur spirituel du pays. Presqu’île classée par l’UNESCO, faite de temples bouddhistes dorés, de monastères en teck et de villas coloniales françaises jaune moutarde, elle vit au ralenti — vélos, cafés au bord de l’eau et tintement des cloches des temples.\n\nLe rituel emblématique est la tournée des aumônes à l’aube, quand des centaines de moines pieds nus, en robe safran, défilent en silence dans les rues pour recevoir le riz gluant des habitants agenouillés (à observer avec respect, à distance). Montez au mont Phousi au crépuscule pour la vue sur les rivières, parcourez les textiles hmong du marché de nuit, et laissez le rythme doux de la ville remettre vos pendules à l’heure. C’est la base naturelle pour les cascades et grottes des environs.",
      practical: [
        { label: "Y aller", value: "Le slow boat qui descend le Mékong depuis Huay Xai (2 jours) est l’arrivée la plus romantique ; il y a aussi le train rapide depuis Vientiane/Vang Vieng (~1–2 h) ou l’avion." },
        { label: "Temps à prévoir", value: "3–4 nuits — tout l’intérêt est de ralentir, pas de cocher des sites." },
        { label: "Entrée", value: "La plupart des wats ~20 000 kips (~1 $) ; musée du Palais royal ~30 000 kips ; montée au mont Phousi au coucher du soleil ~20 000 kips (328 marches)." },
        { label: "Aumône", value: "Le tak bat a lieu à l’aube (~5 h 30). Observez en silence depuis l’autre côté de la rue — n’achetez pas de riz pour y participer à moins d’y être vraiment invité." },
      ],
      stay:
        "Dormez sur la presqu’île dans une guesthouse restaurée en teck et stuc — beaucoup sont d’anciennes villas françaises ou d’anciens logements de moines, à distance de marche de tous les temples et cafés. Pour un rythme encore plus lent, traversez le pont de bambou sur la Nam Khan et installez-vous parmi les jardins de l’autre rive, ou passez une nuit dans un village de tisserands au bord du fleuve, comme Ban Xang Khong en amont.",
      tips: [
        "Prévoyez du liquide — les distributeurs sont rares et plafonnent les retraits, et beaucoup de guesthouses n’acceptent que les espèces.",
        "Louez un vélo : la presqu’île est plate, se parcourt facilement à pied et compte, heureusement, peu de voitures.",
        "Le marché de nuit de la rue Sisavangvong est l’endroit pour les textiles hmong — marchandez avec douceur.",
      ],
    },
    {
      name: "Chutes de Kuang Si", category: "nature", coords: [19.749, 101.991], region: "près de Luang Prabang",
      description: "Des bassins turquoise en cascade à travers la forêt ; baignez-vous dans ceux du bas et visitez le refuge pour ours à l’entrée.",
      wiki: "Kuang Si Falls",
      long:
        "À courte distance de Luang Prabang dans les collines, les chutes de Kuang Si dévalent une série de terrasses calcaires jusqu’à des bassins d’un turquoise laiteux presque lumineux, teinté par les minéraux dissous dans l’eau. Un sentier ombragé grimpe le long des cascades jusqu’à la chute principale, et plusieurs bassins inférieurs sont ouverts à la baignade sous les chutes.\n\nÀ l’entrée, le sanctuaire Free the Bears recueille des ours noirs d’Asie (« ours à collier ») sauvés des braconniers et du commerce de la bile — un arrêt facile et utile en chemin. Venez tôt ou tard pour éviter la foule des excursions et la chaleur de midi, et pensez aux chutes plus calmes de Tad Sae, à la saison des pluies, quand elles sont au plus haut.",
      practical: [
        { label: "Y aller", value: "~30 km / 45 min depuis Luang Prabang : tuk-tuk partagé (~50 000 kips aller-retour), minibus ou scooter loué." },
        { label: "Entrée", value: "~65 000 kips (~3 $) ; comprend la navette et le sanctuaire Free the Bears, juste après l’entrée." },
        { label: "Temps à prévoir", value: "Une demi-journée. Un sentier ombragé grimpe le long des cascades jusqu’en haut (~20 min dans chaque sens)." },
        { label: "Baignade", value: "Les bassins turquoise du bas sont ouverts à la baignade — prenez un maillot ; l’eau minérale est fraîche et superbe." },
      ],
      stay:
        "La plupart viennent pour une demi-journée depuis Luang Prabang, mais quelques petites écoguesthouses et logements chez l’habitant près des chutes, à Ban Thapene, permettent de rester après le départ des cars et d’avoir les bassins presque pour soi à l’ouverture ou à la fermeture.",
      tips: [
        "Venez à l’ouverture (~8 h) ou après 15 h pour des bassins déserts et une douce lumière de sous-bois.",
        "À la saison des pluies (juin–oct.), les chutes sont tonitruantes, mais l’eau devient plus trouble et moins bleue.",
      ],
    },
    {
      name: "Grotte de Kong Lor", category: "offbeat", coords: [18.29, 104.82], region: "Khammouane",
      description: "Une grotte-rivière de 7 km que l’on traverse en pirogue à moteur, la lampe frontale perçant l’obscurité d’une montagne calcaire.",
      wiki: "Tham Kong Lo",
      long:
        "Dans le pays calcaire du centre du Laos, la rivière Nam Hin Boun s’enfonce tout droit dans une montagne — et l’on peut la suivre. Un piroguier vous emmène sur 7,5 kilomètres à travers le ventre noir d’encre de la grotte de Kong Lor ; les lampes frontales révèlent une cavité grande comme une cathédrale, hérissée de stalactites et, à un endroit, une salle éclairée aux concrétions scintillantes, avant de ressortir à la lumière et dans la jungle à l’autre bout.\n\nLe trajet pour y arriver, à travers la paisible vallée de Ban Kong Lor cernée de karsts, fait la moitié de l’attrait, et le village à l’entrée de la grotte est une base paisible pour la nuit. Isolée et un peu difficile d’accès, elle reste merveilleusement à l’écart des circuits classiques — l’une des expériences les plus mémorables et les moins fréquentées du pays.",
      practical: [
        { label: "Y aller", value: "Centre du Laos, isolé : minibus jusqu’à Ban Kong Lor via Thakhek ou Vieng Kham. La « boucle » de Thakhek à moto y passe." },
        { label: "Traverser la grotte", value: "~110 000–150 000 kips par pirogue (jusqu’à 3 personnes), aller-retour à travers la grotte de 7,5 km." },
        { label: "Temps à prévoir", value: "Une nuit — la vallée karstique fait la moitié de la récompense ; la sortie en bateau elle-même dure ~1 h 30–2 h." },
        { label: "À prévoir", value: "Une lampe frontale, un sac étanche et des chaussures qui ne craignent pas l’eau." },
      ],
      stay:
        "Le village de Ban Kong Lor, à l’entrée de la grotte, compte quelques guesthouses familiales et logements chez l’habitant accueillants au milieu des rizières — exactement le genre de nuit paisible, cernée de karsts, qui récompense l’effort du voyage. Arrivez l’après-midi précédent, parcourez la vallée à vélo et prenez le bateau tôt.",
      tips: [
        "Idéal en saison sèche ; après de fortes pluies, la crue peut empêcher les bateaux de passer.",
        "Intégrez-la à la boucle de Thakhek, sur 3–4 jours, l’un des grands road trips lents du Laos.",
      ],
    },
    {
      name: "Plaine des Jarres", category: "history", coords: [19.42, 103.15], region: "Xieng Khouang",
      description: "Des champs parsemés de milliers de jarres de pierre antiques à l’usage inconnu, dans un paysage encore marqué par les bombardements.",
      wiki: "Plain of Jars",
      long:
        "Sur les hauteurs du Xieng Khouang, des milliers de jarres de pierre massives — certaines dépassent deux mètres — sont éparpillées en groupes à travers les collines, vestiges d’une culture de l’âge du fer qui s’épanouit ici il y a environ 2 000 ans. Leur usage fait toujours débat ; l’hypothèse principale est qu’elles servaient à des pratiques funéraires. Regroupées sur plusieurs sites accessibles, elles composent un paysage vraiment mystérieux et plein d’atmosphère.\n\nLa plaine porte aussi une histoire moderne plus sombre : ce fut l’une des zones les plus bombardées de la planète pendant la « guerre secrète » de la CIA, et des engins non explosés jonchent encore le sol — les visiteurs restent strictement sur les chemins déminés et balisés. Désormais classées par l’UNESCO, les jarres et les rappels poignants des bombardements alentour font une journée qui donne à réfléchir depuis Phonsavan.",
      practical: [
        { label: "Y aller", value: "Avion ou bus jusqu’à Phonsavan (Xieng Khouang) ; les principaux sites de jarres sont à 10–30 min en tuk-tuk ou avec un chauffeur." },
        { label: "Entrée", value: "~15 000 kips par site secondaire ; le site 1 — le plus grand et le plus proche — coûte ~35 000 kips navette comprise." },
        { label: "Temps à prévoir", value: "Une journée complète pour relier 2–3 sites et un centre d’information sur les engins non explosés (UXO/MAG)." },
        { label: "Sécurité", value: "Restez strictement sur les chemins déminés balisés en blanc — des engins non explosés reposent encore dans le sol ici." },
      ],
      stay:
        "Phonsavan est une ville d’altitude laborieuse plus qu’une beauté, mais ses guesthouses simples vous placent à côté des jarres comme des expositions poignantes sur l’histoire de la guerre. Pour quelque chose de plus lent, renseignez-vous sur les séjours chez l’habitant dans les villages hmong ou taï dam des environs, ou sur les sources chaudes de Muang Kham.",
      tips: [
        "Visitez d’abord le centre d’information MAG ou QLA — il éclaire à la fois les jarres et les bombardements.",
        "Les nuits sont fraîches ici (plus de 1 000 m) ; prévoyez une couche chaude.",
      ],
    },
    {
      name: "Les 4 000 îles (Si Phan Don)", category: "slow-travel", coords: [14.0, 105.93], region: "extrême sud",
      description: "Là où le Mékong se tresse en d’innombrables îlots — hamacs, dauphins de l’Irrawaddy et vie fluviale au ralenti.",
      wiki: "Don Det",
      long:
        "À son extrémité sud, juste avant la frontière cambodgienne, le Mékong s’étale sur 14 kilomètres de large et se fragmente en un dédale de chenaux et d’îles innombrables — Si Phan Don, les « Quatre Mille Îles ». Ici, la vie suit le rythme du fleuve : pêcheurs posant leurs nasses de bambou, rizières, et voyageurs alanguis dans des hamacs sur les îles décontractées de Don Det et Don Khon.\n\nEntre les deux îles, les vestiges d’une voie ferrée coloniale française — la seule qu’ait jamais eue le Laos, construite pour faire contourner les rapides aux bateaux — se parcourent encore à pied ou à vélo. En aval grondent les chutes de Khone Phapheng, les plus importantes d’Asie du Sud-Est en débit, et dans les fosses près de la frontière, on peut apercevoir quelques-uns des derniers dauphins de l’Irrawaddy, en danger critique d’extinction. C’est l’endroit ultime du pays pour ne presque rien faire.",
      practical: [
        { label: "Y aller", value: "Bus jusqu’à Nakasang, puis courte traversée en pirogue (~25 000 kips) vers Don Det ou Don Khon." },
        { label: "Temps à prévoir", value: "2–4 nuits sans hâte — c’est le Laos du farniente par excellence." },
        { label: "Se déplacer", value: "Louez un vélo (~10 000–20 000 kips/jour) et pédalez d’une île à l’autre par le vieux pont ferroviaire français." },
        { label: "Excursions", value: "Chutes de Khone Phapheng ~55 000 kips ; sorties en bateau à l’aube pour voir les dauphins de l’Irrawaddy dès ~60 000 kips/personne." },
      ],
      stay:
        "C’est le Mékong dans toute sa lenteur, et un bungalow de bambou et de bois au bord du fleuve, avec hamac et coucher de soleil plein ouest, c’est tout le programme. La pointe nord de Don Det est plus sociable ; Don Khon et les rives sud sont plus calmes et plus locales — choisissez votre rythme et restez tout simplement sur place.",
      tips: [
        "Électricité et wifi sont aléatoires, et c’est voulu — prenez un livre et assez de liquide.",
        "Le coucher de soleil depuis un hamac est l’événement de la journée ; ne prévoyez rien autour.",
      ],
    },
    {
      name: "Aire protégée de Nam Ha", category: "trek", coords: [20.95, 101.4], region: "Luang Namtha",
      description: "Trek et nuits chez l’habitant à travers une forêt dense et des villages d’ethnies montagnardes, dans les hautes terres de l’extrême nord.",
      wiki: "Nam Ha National Protected Area",
      long:
        "Dans les hautes terres de l’extrême nord, près des frontières chinoise et birmane, l’aire nationale protégée de Nam Ha est l’une des réserves les plus vastes et les plus riches en biodiversité du Laos — une étendue de forêt tropicale dense, de rivières et de montagnes qui abrite gibbons et panthères nébuleuses, ainsi qu’une mosaïque de communautés akha, hmong et khmou dans les vallées.\n\nDepuis la ville de Luang Namtha, l’écotourisme communautaire y a fait figure de pionnier au Laos : des treks guidés de plusieurs jours de village en village avec nuits chez l’habitant, ainsi que du kayak et du vélo, les frais soutenant à la fois la conservation et les villages. C’est l’endroit pour troquer les temples contre les sentiers, rencontrer les minorités ethniques de la région chez elles, et passer une nuit au cœur de la forêt.",
      practical: [
        { label: "Y aller", value: "Installez-vous à Luang Namtha (vols depuis Vientiane, ou bus) ; les treks guidés partent de la ville." },
        { label: "Trek", value: "Treks de 1 à 3 jours de village en village avec nuits chez l’habitant, plus kayak et vélo, à réserver auprès des opérateurs d’écotourisme agréés de la ville." },
        { label: "Coût", value: "Environ 30–60 $/jour par personne selon la taille du groupe ; les frais financent les villages et la réserve." },
        { label: "Guides", value: "Obligatoires — et précieux : ils s’occupent des permis, de l’hébergement chez l’habitant et de la traduction avec les hôtes akha et khmou." },
      ],
      stay:
        "La magie ici, c’est la nuit au cœur de la forêt — un simple séjour chez l’habitant en terre akha ou khmou, rejoint à pied, avec un repas partagé et de l’alcool de riz au coin du feu. Installez-vous à Luang Namtha avant et après, et choisissez un opérateur réellement communautaire pour que votre argent profite aux personnes parmi lesquelles vous marchez.",
      tips: [
        "Réservez auprès d’un opérateur certifié (l’office provincial d’écotourisme peut vous orienter) — tous les « treks » ne profitent pas aux villages.",
        "Plus le groupe est grand, moins c’est cher par personne ; les voyageurs solo peuvent rejoindre un départ programmé.",
      ],
    },
    {
      name: "Vat Phou", category: "history", coords: [14.848, 105.822], region: "Champassak",
      description: "Un temple khmer en ruine, antérieur à Angkor, qui gravit une colline au-dessus de la plaine du Mékong.",
      wiki: "Vat Phou",
      long:
        "Bien avant que le Laos n’existe, ce coin de la plaine du Mékong faisait partie du monde khmer, et Vat Phou en est le grand monument — un complexe de temples hindous commencé dès le Ve siècle et bâti pour l’essentiel entre le XIe et le XIIIe, antérieur à Angkor qu’il a en partie inspiré. Aligné sur une montagne que les Khmers tenaient pour sacrée (son sommet évoquant un lingam) et sur une source naturelle, il gravit la colline le long d’un axe monumental de chaussées, de terrasses et de sanctuaires.\n\nPatiné, envahi de racines et bien plus calme qu’Angkor, il récompense la montée par de beaux linteaux sculptés et une vue panoramique sur la plaine parsemée de palmiers jusqu’au fleuve. Classé par l’UNESCO et accessible depuis la paisible ville riveraine de Champassak, c’est le temps fort du sud du Laos et une introduction évocatrice à l’architecture des temples khmers.",
      practical: [
        { label: "Y aller", value: "Depuis Paksé, ~1 h jusqu’à Champassak en bus ou en tuk-tuk ; le temple est à ~8 km au-delà de cette paisible ville au bord du fleuve." },
        { label: "Entrée", value: "~50 000 kips (~2,50 $) ; comprend une navette jusqu’aux terrasses inférieures." },
        { label: "Temps à prévoir", value: "2–3 heures ; venez tôt ou tard, car il y a peu d’ombre sur la montée vers le sanctuaire." },
        { label: "Meilleure lumière", value: "Tôt le matin ou à l’heure dorée, pour la vue panoramique sur la plaine parsemée de palmiers." },
      ],
      stay:
        "Logez à Champassak même — une ville d’une seule rue au bord du fleuve, aux guesthouses coloniales défraîchies, où il ne se passe presque rien, et c’est justement son charme. Une nuit ici permet d’arriver au temple à l’ouverture, avant la chaleur et les visiteurs venus de Paksé pour la journée.",
      tips: [
        "Prenez de l’eau et un chapeau ; la montée vers le sanctuaire supérieur est raide et exposée.",
        "Associez-le à une balade tranquille à vélo ou en bateau le long du Mékong à Champassak.",
      ],
    },
    {
      name: "Grottes de Pak Ou", category: "history", coords: [20.0500, 102.2170], region: "près de Luang Prabang",
      description: "Deux grottes au bord du fleuve remplies de milliers de vieilles statues du Bouddha, accessibles en bateau en remontant le Mékong.",
      wiki: "Pak Ou Caves",
      long:
        "Là où la Nam Ou rejoint le Mékong, à une heure ou deux en amont de Luang Prabang, deux grottes creusées dans une falaise calcaire servent depuis des siècles de dépôt pour les images du Bouddha dont on ne veut plus ou qui sont usées. Au fil du temps, villageois et pèlerins en ont laissé des milliers — des minuscules figurines aux statues d’un mètre, en bois, en bronze ou dorées — jusqu’à ce que les corniches et les niches des grottes débordent de la dévotion accumulée des générations.\n\nLa grotte inférieure s’ouvre directement sur le fleuve ; la supérieure, plus sombre, s’atteint par un escalier et s’explore au mieux avec une lampe. La moitié du plaisir est le trajet en bateau lent lui-même, glissant devant villages riverains et paysages karstiques, souvent combiné à un arrêt dans un village de whisky et de tissage en chemin. Une demi-journée facile et pleine d’atmosphère depuis l’ancienne capitale.",
      practical: [
        { label: "Y aller", value: "~2 h en amont de Luang Prabang en bateau lent (la belle manière), ou ~1 h de route puis une courte traversée du fleuve." },
        { label: "Entrée", value: "~20 000 kips (~1 $) ; location de bateau partagé depuis Luang Prabang à partir de ~150 000 kips." },
        { label: "Temps à prévoir", value: "Une demi-journée, généralement avec un arrêt en chemin dans un village de whisky et de tissage." },
        { label: "À prévoir", value: "Une lampe pour la plus sombre et la plus haute des deux grottes." },
      ],
      stay:
        "C’est une demi-journée depuis Luang Prabang, alors logez là-bas (voir son guide). Pour en faire un voyage lent, prenez le bateau public et faites étape dans les villages riverains comme Ban Xang Hai, connu pour son alcool de riz, et Ban Xang Khong pour son papier saa et son tissage.",
      tips: [
        "Montez en bateau lent, pas en bateau rapide — le trajet sur le fleuve fait la moitié du plaisir.",
        "La lumière du matin est la plus belle sur la grotte inférieure, au niveau du fleuve.",
      ],
    },
    {
      name: "Plateau des Bolavens", category: "food", coords: [15.1500, 106.4000], region: "sud du Laos",
      description: "Des hautes terres fraîches de plantations de café et de cascades tonitruantes — le cœur caféier du Laos, idéal en boucle à moto.",
      wiki: "Bolaven Plateau",
      long:
        "S’élevant au-dessus de la plaine du Mékong méridional, le plateau des Bolavens est une hauteur fraîche et fertile que les Français ont jugée idéale pour le café — et il reste le cœur de la production de café lao, son riche sol volcanique faisant pousser robusta et arabica prisé dans de petites exploitations que l’on peut visiter et où l’on peut déguster. L’altitude en fait une échappée rafraîchissante loin de la chaleur des plaines.\n\nLe plateau est sillonné de cascades spectaculaires — les deux panaches de Tad Fane plongeant dans une gorge, le large rideau de Tad Yuang — et parsemé de villages des minorités ethniques de la région. La façon classique de le découvrir est une boucle à moto de deux ou trois jours depuis Paksé, reliant pauses café, cascades et nuits chez l’habitant : l’un des grands road trips tranquilles d’Asie du Sud-Est.",
      practical: [
        { label: "Y aller", value: "Louez une moto à Paksé ; la boucle classique prend 2–3 jours, ~200–300 km sur des routes plutôt correctes." },
        { label: "La boucle", value: "Une « petite » ou une « grande » boucle relie plantations de café, chutes de Tad Fane et de Tad Yuang, et villages des minorités." },
        { label: "Café et cascades", value: "Visites et dégustations dans les plantations souvent gratuites ou pour quelques dollars ; petits droits d’entrée (~10 000–20 000 kips) aux principales cascades." },
        { label: "Quand", value: "Plus frais que les plaines toute l’année ; les cascades sont au plus fort à la fin de la saison des pluies." },
      ],
      stay:
        "La boucle est faite pour voyager lentement : logements chez l’habitant et guesthouses dans les plantations autour de Tad Lo et Paksong permettent de couper la route, de déguster le café à la source et de se réveiller dans la fraîcheur des matins d’altitude. La paisible Tad Lo, avec sa cascade et ses cafés de voyageurs, mérite bien une nuit de plus.",
      tips: [
        "Prenez une veste — le plateau est vraiment frais à moto.",
        "Les loueurs sérieux de Paksé gardent aussi vos bagages ; vérifiez les freins avant de partir.",
      ],
    },
    {
      name: "Pha That Luang", category: "history", coords: [17.9757, 102.6330], region: "Vientiane",
      description: "Le grand stupa doré, symbole national du Laos, qui rayonne au-dessus de la capitale.",
      wiki: "Pha That Luang",
      long:
        "Le stupa doré du Pha That Luang est le monument national le plus important du Laos et le symbole à la fois du bouddhisme et de la souveraineté lao — son image figure sur le sceau national et sur les billets. Flèche dorée à trois niveaux enclose dans un cloître fortifié, il est censé abriter une relique du Bouddha et se dresser sur les vestiges d’un temple khmer plus ancien.\n\nReconstruit après avoir été saccagé, puis restauré, l’édifice actuel brille au-dessus de Vientiane et est au centre de la plus grande fête religieuse du pays, la fête du That Luang en novembre, quand des milliers de moines et de pèlerins convergent pour des processions aux chandelles et des offrandes. C’est la pièce maîtresse d’une journée tranquille à découvrir cette capitale sans prétention, avec l’arc de triomphe de Patuxai et les bords du fleuve tout proches.",
      practical: [
        { label: "Y aller", value: "~4 km du centre de Vientiane ; un trajet facile en tuk-tuk ou à vélo." },
        { label: "Entrée", value: "~10 000 kips (~0,50 $). Tenue correcte exigée — épaules et genoux couverts." },
        { label: "Temps à prévoir", value: "Environ une heure, facile à combiner avec l’arc de Patuxai tout proche." },
        { label: "Quand", value: "Plus éclatant dans la lumière de fin d’après-midi ; la grande fête du That Luang a lieu à la pleine lune de novembre." },
      ],
      stay:
        "Vientiane est une capitale réputée pour sa tranquillité, avec ses guesthouses et cafés au bord du fleuve — une première ou dernière étape en douceur au Laos. Installez-vous près des quais du Mékong pour les balades au coucher du soleil, le marché de nuit et des sorties faciles à vélo jusqu’au stupa et à Patuxai.",
      tips: [
        "Couvrez épaules et genoux, et retirez vos chaussures là où c’est indiqué.",
        "Calez votre visite sur la fête du That Luang en novembre si les dates concordent.",
      ],
    },
    {
      name: "Vat Xieng Thong", category: "history", coords: [19.8950, 102.1400], region: "Luang Prabang",
      description: "Le plus beau temple de Luang Prabang — toits en cascade et scintillante mosaïque de « l’arbre de vie ».",
      wiki: "Wat Xieng Thong",
      long:
        "À la pointe de la presqu’île de Luang Prabang, là où la Nam Khan rejoint le Mékong, le Vat Xieng Thong est le plus beau et le plus vénéré des temples de l’ancienne cité royale, bâti en 1560 et épargné par les destructions qui ont frappé les autres. Sa salle principale est l’expression classique du style de Luang Prabang : des toits bas, superposés, qui descendent en courbe presque jusqu’au sol, des murs dorés au pochoir et des proportions sereines.\n\nLe mur arrière est célèbre pour une chatoyante mosaïque de « l’arbre de vie » en verre coloré sur fond rouge, et l’enceinte abrite de petites chapelles — dont l’une protège un rare Bouddha couché — ainsi que l’abri orné du char funéraire royal. Couronne spirituelle de la presqu’île et jadis lieu des couronnements royaux, c’est le temple à ne pas manquer.",
      practical: [
        { label: "Y aller", value: "À la pointe de la presqu’île de Luang Prabang — accessible à pied depuis n’importe où dans la vieille ville." },
        { label: "Entrée", value: "~20 000 kips (~1 $)." },
        { label: "Temps à prévoir", value: "45 min–1 heure ; plus beau dans la lumière du matin ou du soir." },
        { label: "Tenue", value: "Épaules et genoux couverts ; retirez vos chaussures avant d’entrer dans les salles." },
      ],
      stay:
        "Vous êtes à Luang Prabang : voyez son guide pour l’hébergement. Le temple se trouve à l’extrémité nord de la presqu’île, calme et pleine d’atmosphère — une belle première étape lors d’une balade matinale, avant que la journée ne se réchauffe.",
      tips: [
        "Arrivez à l’ouverture pour la lumière basse et chaude sur la mosaïque de verre de « l’arbre de vie ».",
        "Combinez-le avec la tournée des aumônes à l’aube, qui passe tout près.",
      ],
    },
    {
      name: "Nong Khiaw", category: "nature", coords: [20.5670, 102.6170], region: "vallée de la Nam Ou",
      description: "Un village au bord de la rivière enserré de falaises karstiques vertigineuses — randonnées vers des points de vue, grottes et bateaux lents.",
      wiki: "Nong Khiaw",
      long:
        "Égrené le long de la Nam Ou au pied de hautes falaises calcaires déchiquetées, Nong Khiaw est la porte d’entrée pittoresque du nord du Laos et une base de plus en plus prisée des voyageurs qui préfèrent les montagnes aux temples. Un pont relie les deux moitiés du village, et de simples bungalows font face aux parois karstiques et à la brume qui s’accumule entre elles chaque matin.\n\nL’activité phare est la montée raide et suante vers les points de vue de Pha Daeng ou de Nong Khiaw, qui récompense par un panorama époustouflant sur la rivière serpentant entre les pics. Au-delà, il y a les grottes qui ont abrité les villageois pendant la guerre, des balades vers les villages voisins, et le beau trajet en bateau lent plus en amont jusqu’à Muang Ngoi, plus endormi encore. C’est le contrepoint nature et paisible de Luang Prabang.",
      practical: [
        { label: "Y aller", value: "~3–4 h en minibus depuis Luang Prabang, ou un pittoresque bateau lent en remontant la Nam Ou." },
        { label: "Randonnée au point de vue", value: "Le point de vue de Pha Daeng / Nong Khiaw est une montée raide d’~1 h 30–2 h ; petit droit de passage (~20 000 kips)." },
        { label: "Temps à prévoir", value: "2–3 nuits, davantage si vous continuez vers Muang Ngoi, sans voitures, en amont (~1 h de bateau)." },
        { label: "Aussi", value: "Les grottes de guerre qui ont abrité les villageois, le kayak, et des balades vers les villages agricoles voisins." },
      ],
      stay:
        "De simples bungalows au bord de la rivière donnent directement sur les parois karstiques et la brume du matin — c’est un endroit de balcon et de café, fait pour regarder couler la rivière. Pour un calme plus profond encore, prenez le bateau jusqu’au minuscule Muang Ngoi, sans route, et restez-y quelques nuits au pied des falaises.",
      tips: [
        "Commencez tôt la montée au point de vue — il fait chaud, c’est raide et sans ombre en haut.",
        "Prévoyez du liquide ; les distributeurs ne sont pas fiables aussi loin dans la vallée.",
      ],
    },
    {
      name: "Parc du Bouddha (Xieng Khuan)", category: "offbeat", coords: [17.9130, 102.7770], region: "près de Vientiane",
      description: "Une prairie surréaliste au bord du fleuve, peuplée de sculptures de béton géantes et excentriques, hindoues et bouddhistes.",
      wiki: "Buddha Park",
      long:
        "Sur la rive du Mékong, juste à la sortie de Vientiane, le parc du Bouddha (Xieng Khuan) est l’un des sites les plus étranges et les plus photogéniques du Laos : une prairie au bord du fleuve où se pressent plus de 200 sculptures de béton démesurées et excentriques de divinités hindoues et bouddhistes, de démons et d’animaux, créées à partir de la fin des années 1950 par un prêtre-chaman singulier qui fusionnait les deux religions dans sa propre cosmologie.\n\nLes pièces maîtresses sont un colossal Bouddha couché et une grande structure en dôme dans laquelle on entre par la gueule d’un démon, puis que l’on gravit, étage par étage, jusqu’à une vue depuis le toit sur tout ce jardin surréaliste. C’est à la fois kitsch, mystérieux et un peu inquiétant — une demi-journée facile et décalée depuis la capitale, qui change des temples plus solennels du pays.",
      practical: [
        { label: "Y aller", value: "~25 km de Vientiane le long du Mékong ; bus local 14, tuk-tuk loué ou scooter (~40 min)." },
        { label: "Entrée", value: "~60 000 kips (~2,75 $) pour les visiteurs étrangers." },
        { label: "Temps à prévoir", value: "1–2 heures ; souvent associé au pont de l’Amitié tout proche ou à un déjeuner au bord du fleuve." },
        { label: "À ne pas manquer", value: "Grimper à l’intérieur de la « citrouille » géante par la gueule du démon jusqu’à la vue depuis le toit sur les sculptures." },
      ],
      stay:
        "C’est une demi-journée facile depuis Vientiane, alors logez dans la capitale (voir le guide du Pha That Luang). Ralentissez le rythme en y allant à vélo le long du fleuve ou en vous attardant pour le coucher du soleil sur le Mékong au retour.",
      tips: [
        "Le matin est plus frais et plus calme pour parcourir la prairie de statues, ouverte et sans ombre.",
        "Combinez avec un coup d’œil au pont frontalier avec la Thaïlande et un repas au bord du fleuve.",
      ],
    },
  ],
};
