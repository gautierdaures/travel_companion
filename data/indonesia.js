// Country ID card — schema reference lives in data/index.js
export default {
  code: "id",
  name: "Indonésie",
  flag: "🇮🇩",
  region: "Asie du Sud-Est / Océanie",
  tagline: "Dix-sept mille îles de volcans, de temples et de dragons — le plus grand archipel du monde.",
  tags: ["nature", "history", "diving", "beach", "slow-travel"],

  languages: {
    name: "Indonésien (bahasa Indonesia)",
    note: "Une forme standardisée du malais, volontairement simple et neutre, adoptée pour unir une nation de plus de 700 langues locales. Pas de tons, alphabet latin et grammaire indulgente : l’une des langues les plus gratifiantes à essayer — quelques mots ouvrent des portes partout, même si à Bali et à Java on parle aussi ses propres langues.",
    phrases: [
      { fr: "Bonjour (la journée)", local: "Selamat siang", pron: "seu-LA-mat SI-ang" },
      { fr: "Merci", local: "Terima kasih", pron: "teu-RI-ma KA-si" },
      { fr: "De rien", local: "Sama-sama", pron: "SA-ma SA-ma" },
      { fr: "Oui / Non", local: "Ya / Tidak", pron: "ya / TI-dak" },
      { fr: "Excusez-moi / Pardon", local: "Permisi / Maaf", pron: "peur-MI-si / ma-AF" },
      { fr: "Combien ?", local: "Berapa harga?", pron: "beu-RA-pa HAR-ga ?" },
      { fr: "Où est… ?", local: "Di mana…?", pron: "di MA-na… ?" },
      { fr: "Délicieux !", local: "Enak!", pron: "é-NAK !" },
      { fr: "Eau", local: "Air", pron: "a-YEUR" },
      { fr: "Pas épicé, s’il vous plaît", local: "Tidak pedas", pron: "TI-dak peu-DAS" },
      { fr: "Au revoir", local: "Selamat tinggal", pron: "seu-LA-mat TING-gal" },
    ],
  },

  history: {
    summary:
      "L’Indonésie est moins un pays qu’une civilisation d’archipel — plus de 17 000 îles égrenées le long de l’équateur, longtemps carrefour du commerce des épices. De puissants empires maritimes y ont vu le jour : le Srivijaya bouddhiste de Sumatra et le Majapahit hindou-bouddhiste de Java, qui ont bâti les monuments colossaux de Borobudur et de Prambanan avant que l’islam ne se diffuse dans les îles à partir du XIIIe siècle. Le lucratif commerce des épices attira les Hollandais, dont la Compagnie des Indes orientales puis l’État colonial contrôlèrent les « Indes néerlandaises » pendant quelque 350 ans. Après l’occupation japonaise pendant la guerre, Soekarno proclama l’indépendance en 1945 ; une dure lutte de quatre ans la garantit en 1949. Depuis, cette nation immense et diverse — des centaines d’ethnies et de langues, unies par une langue commune et la devise « l’unité dans la diversité » — est devenue le quatrième pays le plus peuplé du monde et sa plus grande démocratie à majorité musulmane.",
    timeline: [
      { era: "v. 800 (Borobudur et Prambanan)", text: "Les dynasties bouddhiste et hindoue de Java élèvent deux des plus grands complexes de temples d’Asie." },
      { era: "XIIIe–XVe s. (Majapahit)", text: "Un grand empire maritime hindou-bouddhiste domine l’archipel avant que l’islam ne se répande dans les îles." },
      { era: "XVIIe–XIXe s. (Indes néerlandaises)", text: "Le commerce des épices attire les Hollandais, qui colonisent l’archipel pendant environ trois siècles et demi." },
      { era: "1945 (proclamation de l’indépendance)", text: "Soekarno proclame l’indépendance quelques jours après la capitulation du Japon ; une révolution de quatre ans s’ensuit." },
      { era: "1949 (souveraineté)", text: "Les Pays-Bas reconnaissent l’indépendance indonésienne, et la république moderne prend forme." },
    ],
  },

  books: [
    { title: "Le Monde des hommes", author: "Pramoedya Ananta Toer", year: "1980", note: "Le premier volume du « Quatuor de Buru », écrit dans un camp de prisonniers — le grand roman de la Java coloniale et de l’éveil nationaliste." },
    { title: "L’Année de tous les dangers", author: "Christopher Koch", year: "1978", note: "Un roman saisissant sur les correspondants étrangers dans la Jakarta fiévreuse de 1965." },
    { title: "Krakatoa: The Day the World Exploded", author: "Simon Winchester", year: "2003", note: "Un récit captivant de l’éruption de 1883 et de l’âme volcanique de l’archipel." },
    { title: "A Brief History of Indonesia", author: "Tim Hannigan", year: "2015", note: "Une introduction vivante et lisible à une histoire nationale foisonnante." },
    { title: "Indonesia, Etc.", author: "Elizabeth Pisani", year: "2014", note: "Un portrait ironique et affectueux de cette nation improbable, d’île en île, hors des sentiers battus." },
  ],

  meals: [
    { name: "Nasi goreng et mie goreng", description: "Le riz frit et les nouilles frites omniprésents en Indonésie, sautés au wok avec du kecap manis (soja sucré), du piment et souvent un œuf au plat dessus — le réconfort, de jour comme de nuit.", tip: "Ajoutez du sambal selon votre goût et pressez un citron vert ; une bonne version de warung vaut mille fois celle d’un hôtel." },
    { name: "Rendang", description: "Le curry de bœuf sec mijoté de Sumatra, cuit des heures dans le lait de coco et les épices jusqu’à devenir sombre et intensément parfumé — souvent élu plat le plus savoureux du monde." },
    { name: "Satay (sate)", description: "Brochettes grillées au charbon de bois — poulet, chèvre ou agneau — avec une riche sauce cacahuète ; le sate ayam et le sate lilit balinais sont les classiques." },
    { name: "Nasi campur et cuisine padang", description: "Une assiette de riz avec un assortiment de petits plats ; dans un restaurant padang, une douzaine de bols arrivent et vous payez ce que vous mangez — la dégustation ultime." },
    { name: "Gado-gado et tempeh", description: "Légumes blanchis à la sauce cacahuète, et le cadeau de l’Indonésie au monde — le tempeh, galette de soja fermenté au goût de noisette, frit croustillant ou en curry." },
    { name: "Babi guling (Bali)", description: "Cochon de lait balinais rôti à la broche, farci au curcuma et aux épices — une spécialité de l’île hindoue, servie dans des warungs légendaires autour d’Ubud." },
  ],

  climate: {
    unit: "°C",
    note: "Équatorial et chaud toute l’année ; les chiffres sont ceux de Bali/Java. Deux saisons : sèche (environ avril–oct., la meilleure période) et humide (nov.–mars, avec de fortes averses l’après-midi). Cela varie d’une île à l’autre — les Moluques et la Papouasie suivent un autre calendrier — et les hautes terres (Bromo, plateau de Dieng, sommets de Papouasie) sont bien plus fraîches, voire froides en altitude.",
    coords: [-8.65, 115.22], // Bali (Denpasar) — representative point for the fetch script
    key: "id",
    best: [5, 6, 7, 8, 9],
    avoid: [1, 2, 12],
    months: [
      { mean: 27, rain: 288 }, { mean: 27, rain: 255 }, { mean: 27, rain: 210 },
      { mean: 27, rain: 90 }, { mean: 27, rain: 75 }, { mean: 26, rain: 62 },
      { mean: 26, rain: 47 }, { mean: 26, rain: 33 }, { mean: 27, rain: 55 },
      { mean: 27, rain: 78 }, { mean: 27, rain: 145 }, { mean: 27, rain: 230 },
    ],
  },

  events: [
    { name: "Saison sèche", when: "Avril – octobre", months: [4, 5, 6, 7, 8, 9, 10], kind: "go", description: "La meilleure période dans la majeure partie de l’archipel : ciel plus dégagé, mer plus calme pour la plongée et les sauts d’île en île, et les meilleures conditions pour randonner sur les volcans." },
    { name: "Nyepi (jour du Silence balinais)", when: "Mars (variable)", months: [3], kind: "note", description: "Le Nouvel An hindou de Bali : 24 heures de silence et d’immobilité totale — pas de lumière, pas de déplacements, aéroport fermé. Fascinant à vivre, mais organisez-vous en conséquence, car tout, y compris votre hôtel, s’éteint." },
    { name: "Idul Fitri (Lebaran)", when: "Fin du ramadan (change chaque année)", months: [], kind: "note", description: "Les grandes vacances de retour au pays à la fin du mois de jeûne musulman ; les transports sont bondés dans tout le pays et beaucoup de commerces ferment pour l’exode du mudik." },
    { name: "Saison des pluies", when: "Novembre – mars", months: [11, 12, 1, 2, 3], kind: "avoid", description: "De fortes pluies l’après-midi, une mer agitée qui perturbe bateaux et plongée, et des volcans dans les nuages. Luxuriant et bon marché, mais plus compliqué pour les activités en plein air et les sauts d’île en île." },
  ],

  places: [
    {
      name: "Borobudur", category: "history", coords: [-7.6079, 110.2038], region: "Java central",
      description: "Le plus grand monument bouddhiste du monde — un colossal mandala de pierre du IXe siècle, à voir à l’aube.",
      wiki: "Borobudur",
      long:
        "Surgissant de la plaine de Kedu, au centre de Java, à l’ombre des volcans, Borobudur est le plus grand temple bouddhiste de la planète et l’un des grands monuments de l’humanité. Bâti vers 800 apr. J.-C., puis abandonné et enseveli sous la cendre et la jungle, ce vaste mandala de pierre est une cosmologie bouddhiste en trois dimensions : les pèlerins gravissent dans le sens des aiguilles d’une montre neuf terrasses superposées, passant devant plus de 2 600 panneaux sculptés et 500 statues du Bouddha, du monde du désir jusqu’à l’éveil du sommet, couronné de stupas en forme de cloche et d’un dôme central.\n\nÀ l’aube, quand la brume s’étale dans la plaine et que le soleil se lève sur les volcans derrière la silhouette des stupas, le spectacle est inoubliable. Avec les fines flèches hindoues de Prambanan toute proche, il fait du centre de Java — accessible depuis Yogyakarta, la ville du sultan — l’une des destinations culturelles essentielles d’Asie. L’accès aux terrasses supérieures est désormais limité pour protéger la pierre : réservez à l’avance.",
      practical: [
        { label: "Y aller", value: "~1 h–1 h 30 en voiture depuis Yogyakarta (« Jogja ») ; Jogja est la base naturelle, accessible en train ou en avion depuis Jakarta/Bali." },
        { label: "Billets", value: "Entrée plus un billet horodaté séparé et limité (avec guide et sandales fournies) pour monter aux terrasses supérieures — réservez à l’avance en haute saison." },
        { label: "Quand y aller", value: "À la première entrée / à l’aube pour la brume, la lumière douce et la fraîcheur ; la pierre chauffe et la foule grossit dès le milieu de matinée." },
        { label: "À associer à", value: "Le complexe de temples hindous de Prambanan (~1 h) — faites l’un au lever du soleil et l’autre au coucher." },
      ],
      stay:
        "Installez-vous à Yogyakarta pour son propre kraton (palais du sultan), ses ateliers de batik, sa cuisine et ses transports faciles vers les deux temples ; ou logez dans une guesthouse plus calme à la campagne près de Borobudur pour atteindre le monument dès l’ouverture et parcourir à vélo les villages et rizières alentour.",
      tips: [
        "Réservez à l’avance le billet horodaté pour les terrasses supérieures — les entrées sont strictement limitées pour protéger les bas-reliefs.",
        "Accordez une journée entière à Yogyakarta pour le kraton, le château d’eau de Taman Sari et la street food de Malioboro.",
      ],
    },
    {
      name: "Ubud et les rizières en terrasses de Bali", category: "nature", coords: [-8.5069, 115.2625], region: "Bali",
      description: "Le cœur culturel de Bali — temples, danse et art au milieu de rizières émeraude et de gorges de rivière.",
      wiki: "Ubud",
      long:
        "À l’intérieur des terres, en hauteur par rapport aux plages de Bali, Ubud est l’âme culturelle de l’île : une ville de temples hindous, de cours de palais, de musique gamelan et de danses chaque soir, enveloppée d’un paysage de rizières en terrasses émeraude et de vallées de rivière à la végétation de jungle. Malgré sa célébrité, elle récompense toujours les curieux — l’astuce est de se lever tôt et de quitter le centre : marcher sur la crête de Campuhan à l’aube, pédaler entre les villages, ou semer la foule dans les terrasses sculptées de Tegallalang avant l’arrivée des cars.\n\nUbud est aussi la base pour explorer le cœur hindou de Bali : le temple d’eau de Tirta Empul où les pèlerins se purifient, les sanctuaires taillés dans la falaise de Gunung Kawi, et les villages d’artisans — sculpteurs sur bois, orfèvres, peintres — tout autour. Mangez un babi guling dans un warung légendaire, assistez à une danse legong dans la cour d’un temple, et laissez-vous gagner par le rythme des offrandes et des cérémonies de l’île.",
      practical: [
        { label: "Y aller", value: "~1 h–1 h 30 en voiture depuis l’aéroport de Bali (Denpasar) ; pas de train — prenez un chauffeur ou une appli de VTC." },
        { label: "Éviter la foule", value: "Parcourez la crête de Campuhan ou les rizières de Tegallalang / Jatiluwih à l’aube ; les sites phares d’Ubud sont superbes tôt et pris d’assaut dès 10 h." },
        { label: "Culture", value: "Assistez le soir à une danse legong ou kecak, et visitez le temple d’eau de Tirta Empul et les sanctuaires de Gunung Kawi tout proches (sarong obligatoire au temple)." },
        { label: "Quand", value: "Saison sèche (avril–oct.) pour le ciel le plus dégagé ; les rizières sont au plus vert juste avant la récolte." },
      ],
      stay:
        "Logez dans une guesthouse ou un petit hôtel au milieu des rizières, en lisière d’Ubud (Penestanan, Nyuh Kuning ou vers Tegallalang), plutôt que dans le centre animé — réveil face aux rizières et au chant des oiseaux, à distance de marche de la ville mais dans un tout autre calme.",
      tips: [
        "Louez un scooter ou prenez un chauffeur pour rejoindre les rizières plus calmes du nord (Jatiluwih) et les temples d’eau.",
        "Habillez-vous avec respect dans les temples — sarong et ceinture sont obligatoires, et généralement prêtés ou loués sur place.",
      ],
    },
    {
      name: "Mont Bromo et la caldeira du Tengger", category: "trek", coords: [-7.9425, 112.9530], region: "Java oriental",
      description: "Un cône de cendres fumant dans une vaste caldeira de sable, inoubliable au lever du soleil depuis le rebord du cratère.",
      wiki: "Mount Bromo",
      long:
        "Sur les hauteurs de Java oriental, le mont Bromo est l’un des paysages volcaniques les plus spectaculaires de la planète : un cône de cendres fumant qui s’élève de la « mer de Sable », fond de caldeira plat et gris cerné de falaises, avec derrière lui le cône parfait du Semeru — le plus haut sommet de Java — qui crache sa fumée. L’expérience classique est le trajet avant l’aube jusqu’à un point de vue sur le rebord de la caldeira, où le soleil se lève sur toute cette scène surréaliste, les volcans flottant au-dessus de la brume matinale.\n\nEnsuite, on traverse la mer de Sable à pied ou à cheval et on gravit l’escalier jusqu’au rebord fumant et soufré du cratère du Bromo. C’est le pays des Tengger hindous, qui font des offrandes à la montagne lors de la fête de Yadnya Kasada. En altitude et froid à l’aube — prévoyez des couches chaudes —, c’est un temps fort de tout voyage à Java, et un monde à part par rapport aux plaines tropicales.",
      practical: [
        { label: "Y aller", value: "Logez au village de Cemoro Lawang, sur le rebord, accessible depuis Probolinggo (trains depuis Yogyakarta/Surabaya) ou en excursion depuis Malang/Yogyakarta." },
        { label: "Lever du soleil", value: "Jeep avant l’aube ou marche raide jusqu’à un point de vue (Penanjakan/King Kong Hill) ; puis traversée de la mer de Sable et montée des marches du cratère. Droit d’entrée du parc national (plus cher le week-end)." },
        { label: "Quand y aller", value: "Saison sèche (avril–oct.) pour des levers de soleil dégagés ; les nuages s’installent pendant les mois humides. Il fait vraiment froid avant l’aube à ~2 200 m." },
        { label: "À combiner", value: "Beaucoup associent le Bromo au lac de cratère bleu acide et au « feu bleu » de l’Ijen, plus à l’est, sur la route de Bali." },
      ],
      stay:
        "Dormez dans une guesthouse simple à Cemoro Lawang, juste sur le rebord de la caldeira, pour atteindre le point de vue avant l’aube et, mieux encore, descendre au cratère du Bromo une fois la foule du lever du soleil partie. Les nuits sont froides — apportez ou empruntez des couches chaudes.",
      tips: [
        "Marchez jusqu’au cratère et à travers la mer de Sable après le lever du soleil, quand la plupart des excursions sont reparties : vous l’aurez presque pour vous seul.",
        "Prenez bonnet, gants et veste chaude — le rebord avant l’aube est glacial, même sous les tropiques.",
      ],
    },
    {
      name: "Parc national de Komodo", category: "nature", coords: [-8.5586, 119.4890], region: "Petites îles de la Sonde orientales (Florès)",
      description: "Des dragons de Komodo sauvages, des plages de sable rose et parmi les récifs les plus riches du monde, à découvrir en bateau d’île en île.",
      wiki: "Komodo National Park",
      long:
        "Groupe d’îles accidentées couvertes de savane entre Sumbawa et Florès, le parc national de Komodo abrite le dragon de Komodo — le plus grand lézard du monde, un varan de trois mètres qu’on ne trouve nulle part ailleurs — que l’on piste à pied avec un ranger à travers les collines sèches des îles de Komodo et de Rinca. Mais le parc est autant une affaire de mer que de dragons : ses eaux sont parmi les plus riches en biodiversité de la planète, avec une plongée et un snorkeling de classe mondiale au-dessus de jardins de corail, de raies manta et de tortues.\n\nLa façon classique de le visiter est une croisière de plusieurs jours depuis Labuan Bajo, port aux allures de bout du monde sur Florès, d’île en île entre balades à la rencontre des dragons, la célèbre plage Rose, l’île belvédère de Padar et son panorama sur trois baies, et des arrêts snorkeling. Les paysages — collines dorées et nues dévalant vers une eau d’un bleu invraisemblable — comptent parmi les plus beaux d’Indonésie.",
      practical: [
        { label: "Y aller", value: "Vol jusqu’à Labuan Bajo (LBJ) sur Florès (depuis Bali), le port d’accès ; croisières et excursions à la journée partent de là." },
        { label: "Voir les dragons", value: "Balades guidées avec un ranger sur Rinca (plus calme) ou Komodo ; droits du parc et des rangers à prévoir. Gardez vos distances et suivez le ranger — les dragons sont réellement dangereux." },
        { label: "Sur l’eau", value: "Snorkeling/plongée à Manta Point, à la plage Rose et sur les récifs ; montez sur l’île de Padar au lever du soleil pour sa célèbre vue sur trois baies. Les croisières plongée de plusieurs jours vont le plus loin." },
        { label: "Quand y aller", value: "Saison sèche (avril–oct.) pour une mer calme et une eau claire ; les îles verdissent brièvement après les pluies, mais la mer peut être agitée de novembre à mars." },
      ],
      stay:
        "Installez-vous à Labuan Bajo — désormais bien pourvue en hôtels et en bars perchés pour le coucher du soleil — et faites des sorties en bateau à la journée ou sur une nuit dans le parc ; ou dormez à bord d’un phinisi traditionnel lors d’une croisière de 2 à 4 jours pour l’expérience la plus complète et la plus belle lumière sur les îles.",
      tips: [
        "Une croisière de 2 jours / 1 nuit vaut mieux qu’une excursion à la journée trop pressée — vous verrez Padar à l’aube et des spots de snorkeling déserts.",
        "Choisissez un opérateur réputé, au bateau bien entretenu ; les normes de sécurité varient et les traversées se font en pleine mer.",
      ],
    },
    {
      name: "Prambanan", category: "history", coords: [-7.7520, 110.4915], region: "Java central",
      description: "Un élancé ensemble de flèches de temples hindous du IXe siècle, le plus beau d’Indonésie, près de Yogyakarta.",
      wiki: "Prambanan",
      long:
        "Bâti au IXe siècle pour rivaliser avec le Borobudur bouddhiste voisin, Prambanan est le plus grand complexe de temples hindous d’Indonésie et l’un des plus beaux d’Asie du Sud-Est — un ensemble de hautes flèches de pierre élancées et finement sculptées, culminant à 47 mètres, dédiées à la trinité de Shiva, Vishnou et Brahma. Les trois grands sanctuaires centraux sont enveloppés de bas-reliefs narratifs du Ramayana, que l’on suit le long des galeries ; l’ensemble est résolument vertical là où Borobudur est horizontal.\n\nAbattus par des séismes et minutieusement reconstruits, les temples se dressent sur une large plaine parsemée de sanctuaires secondaires, et sont entourés d’autres candi (temples) bouddhistes et hindous qui méritent l’exploration. Venez au coucher du soleil, quand les flèches rougeoient contre le ciel, ou assistez à une représentation en plein air du ballet du Ramayana avec les temples illuminés en toile de fond. Avec Borobudur, il fait du centre de Java un paradis pour les amateurs de temples.",
      practical: [
        { label: "Y aller", value: "~30 min depuis Yogyakarta en voiture ou en train de banlieue KRL jusqu’à la gare de Prambanan, puis une courte marche." },
        { label: "Billets", value: "Il existe des billets combinés Prambanan/Borobudur ; l’entrée inclut un sarong pour pénétrer dans les sanctuaires. Allez-y en fin d’après-midi pour la lumière et la fraîcheur." },
        { label: "Ballet du Ramayana", value: "Des représentations en plein air (saison sèche) ou en salle mettent en scène le Ramayana devant les temples illuminés — une soirée mémorable ; réservez à l’avance." },
        { label: "Aux alentours", value: "Les candi secondaires autour de Prambanan (Sewu, Plaosan) sont plus calmes et charmants ; à combiner à vélo ou en voiture." },
      ],
      stay:
        "Yogyakarta est la base pour Prambanan comme pour Borobudur — logez près du kraton ou dans le quartier artiste de Prawirotaman. Pour voir Prambanan à l’ouverture et les temples isolés au calme, une guesthouse à la campagne près du site convient aussi très bien.",
      tips: [
        "Faites Prambanan au coucher du soleil et Borobudur au lever pour voir chacun dans sa meilleure lumière et éviter la chaleur de midi.",
        "Calez si possible votre visite sur le ballet du Ramayana — les temples illuminés en guise de décor, c’est magique.",
      ],
    },
    {
      name: "Lac Toba", category: "nature", coords: [2.6845, 98.8756], region: "Sumatra du Nord",
      description: "Un vaste lac volcanique avec, en son cœur, une île grande comme Singapour — frais, paisible, en pays batak.",
      wiki: "Lake Toba",
      long:
        "Plus grand lac volcanique du monde, le lac Toba remplit la caldeira d’une super-éruption qui a secoué la planète il y a 74 000 ans — une étendue sereine d’eau d’un bleu profond, longue de 100 kilomètres, cernée de falaises couvertes de pins et rafraîchie par ses 900 mètres d’altitude. En son centre se trouve Samosir, une île presque aussi grande que Singapour et le pays des Bataks, dont les maisons si caractéristiques en forme de bateau, aux toits en selle élancés, les chaises de pierre anciennes et les traditions mêlant animisme et christianisme font l’une des cultures les plus fascinantes de Sumatra.\n\nSamosir est l’endroit pour vraiment ralentir : installez-vous au village lacustre de Tuk Tuk, nagez dans l’eau tiède et immobile, pédalez ou roulez à moto entre villages bataks et anciens tombeaux royaux, et imprégnez-vous du calme. Frais, vert et merveilleusement paisible, loin des foules de Bali, Toba est l’une des grandes destinations de détente d’Indonésie — la récompense de l’effort pour rejoindre Sumatra.",
      practical: [
        { label: "Y aller", value: "Vol jusqu’à Medan ou l’aéroport de Silangit (SIQ), au bord du lac ; route jusqu’au port de Parapat (~4 h depuis Medan), puis ferry jusqu’à Tuk Tuk sur l’île de Samosir." },
        { label: "Se déplacer", value: "Louez un vélo ou une moto sur Samosir pour rejoindre villages bataks, tombeaux de pierre (Ambarita, Tomok) et sources chaudes ; l’île est grande et tranquille." },
        { label: "Quand y aller", value: "Frais toute l’année grâce à l’altitude ; les mois plus secs (environ avril–oct.) sont les meilleurs pour la baignade et les vues dégagées." },
        { label: "Culture", value: "Voyez les maisons et tombeaux bataks traditionnels et, si vous tombez au bon moment, un spectacle de marionnette sigale-gale ou de musique batak." },
      ],
      stay:
        "Installez-vous sur la presqu’île de Tuk Tuk, sur Samosir — des guesthouses décontractées au bord du lac, avec jardins descendant jusqu’à l’eau, où l’on nage depuis le ponton, loue un vélo et laisse filer quelques jours dans l’air frais de la montagne.",
      tips: [
        "Accordez-lui plusieurs jours — tout l’attrait de Toba est son calme profond et ses villages bataks, pas une liste de sites à cocher.",
        "Louez une moto pour explorer l’autre côté de Samosir et ses points de vue d’altitude, loin de Tuk Tuk.",
      ],
    },
    {
      name: "Tana Toraja", category: "offbeat", coords: [-2.9700, 119.8900], region: "Sulawesi du Sud",
      description: "Une culture des hautes terres aux maisons élancées en forme de bateau, aux tombes creusées dans la falaise et aux rites funéraires extraordinaires.",
      wiki: "Tana Toraja",
      long:
        "Haut dans les montagnes du sud de Sulawesi, le Tana Toraja est l’un des endroits culturellement les plus extraordinaires d’Indonésie — le pays des Torajas, dont toute la société tourne autour de rituels funéraires élaborés. Les villages sont dominés par les tongkonan, magnifiques maisons ancestrales aux toits spectaculairement relevés en forme de bateau, aux façades sculptées et peintes, alignées face aux greniers à riz au milieu de hautes terres verdoyantes de terrasses et de bambous.\n\nLes funérailles torajas sont au centre de la vie : des cérémonies de plusieurs jours avec sacrifices de buffles, qui peuvent réunir des centaines d’invités, après lesquelles les défunts reposent dans des tombes taillées dans la falaise, des cercueils suspendus ou des grottes gardées par des effigies de bois sculpté (tau tau). Les visiteurs peuvent, avec respect et accompagnés d’un guide, assister à des funérailles. Vert, frais et sans équivalent, le pays toraja récompense les voyageurs prêts à s’enfoncer dans Sulawesi pour découvrir un monde vraiment différent.",
      practical: [
        { label: "Y aller", value: "Vol jusqu’à Makassar, puis ~8 h en bus/voiture jusqu’à Rantepao, la ville principale (ou un court vol jusqu’au petit aéroport local). Un guide en vaut vraiment la peine ici." },
        { label: "À voir", value: "Les tombes dans la falaise et les grottes avec leurs effigies tau tau (Lemo, Londa, Kete Kesu), les villages de tongkonan traditionnels et — au bon moment — une cérémonie funéraire." },
        { label: "Funérailles", value: "Elles ont lieu surtout pendant la saison sèche (pic vers juillet–sept.). On peut y assister avec un guide et une invitation ; apportez un petit cadeau, habillez-vous avec respect et préparez-vous aux sacrifices de buffles." },
        { label: "Quand y aller", value: "Climat frais des hautes terres ; la saison sèche (avril–oct.) est la meilleure pour randonner dans les rizières et coïncide avec la saison des funérailles." },
      ],
      stay:
        "Installez-vous à Rantepao et rayonnez à la journée, ou logez dans une guesthouse de village entre tongkonan et rizières pour aller à pied de hameau en sites funéraires. Un guide local compétent transforme la visite — le sens est dans le rituel, pas seulement dans ce que l’on voit.",
      tips: [
        "Prenez un bon guide local — les tombes dans la falaise et les coutumes funéraires n’ont guère de sens sans lui, et le savoir-vivre compte.",
        "Si vous êtes invité à des funérailles, apportez un cadeau modeste (cigarettes, sucre) et suivez votre guide pour le protocole.",
      ],
    },
    {
      name: "Raja Ampat", category: "diving", coords: [-0.5000, 130.5000], region: "Papouasie occidentale",
      description: "Le royaume marin le plus riche en biodiversité de la planète — îlots karstiques, lagons déserts et récifs incomparables.",
      wiki: "Raja Ampat",
      long:
        "Au large de la pointe nord-ouest de la Papouasie, Raja Ampat (« les Quatre Rois ») est le joyau du Triangle de corail et, par le nombre d’espèces de poissons et de coraux, l’environnement marin le plus riche en biodiversité de la planète. Des centaines d’îlots karstiques coiffés de jungle surgissent de lagons turquoise, et sous la surface s’étend un monde merveilleux — tombants et récifs flamboyants de coraux mous, bancs de poissons, requins de récif, raies manta et le rare requin-tapis, dans une eau d’une clarté stupéfiante.\n\nIsolé et difficile d’accès, Raja Ampat récompense l’effort par un vrai sentiment de nature sauvage : plages presque désertes, points de vue sur un labyrinthe d’îles (les panoramas emblématiques de Piaynemo et Wayag), oiseaux de paradis paradant dans la forêt et villages papous loin de toute foule. Visité en croisière plongée ou depuis de simples logements chez l’habitant et des écolodges, c’est une destination rêvée pour plongeurs et amateurs de snorkeling — et un rappel de la richesse que peut avoir une mer de corail.",
      practical: [
        { label: "Y aller", value: "Vol jusqu’à Sorong (via Makassar/Jakarta), puis ferry ou hors-bord jusqu’à Waisai (Waigeo) ou directement vers les logements chez l’habitant/écolodges. C’est un long voyage en plusieurs étapes — prévoyez-le." },
        { label: "Droits et période", value: "Un permis d’entrée au parc marin est obligatoire. Meilleure période pendant la saison plus sèche et plus calme (environ oct.–avril, différente de Java) — vérifiez les conditions du moment, car la mer conditionne l’accès." },
        { label: "Comment visiter", value: "Logements chez l’habitant dans les villages de Kri/Gam pour plongeurs et snorkeleurs à petit budget, écolodges pour le confort, ou croisière plongée pour atteindre les lointains Wayag et Misool." },
        { label: "Hors de l’eau", value: "Les points de vue karstiques de Piaynemo et Wayag, l’observation des oiseaux de paradis, et la pagaie dans les lagons immobiles." },
      ],
      stay:
        "Choisissez un logement chez l’habitant tenu par des Papous sur l’île de Kri ou de Gam, pour de simples bungalows sur pilotis et des récifs à explorer directement depuis la terrasse, ou un écolodge confortable. Les plongeurs aguerris optent souvent pour une croisière plongée afin d’atteindre les récifs isolés de Misool et Wayag.",
      tips: [
        "Même les non-plongeurs sont comblés — le snorkeling directement depuis de nombreux pontons est de classe mondiale.",
        "Apportez assez de liquide et tout équipement spécifique ; les îles sont isolées, avec peu de boutiques et de distributeurs.",
      ],
    },
  ],
};
