// Country ID card — schema reference lives in data/index.js
export default {
  code: "kg",
  name: "Kirghizistan",
  flag: "🇰🇬",
  region: "Asie centrale",
  tagline: "La Suisse de l’Asie centrale — lacs alpins, camps de yourtes estivaux et chevaux sur les hauts pâturages.",
  tags: ["nature", "trek", "history", "slow-travel"],

  languages: {
    name: "Kirghiz et russe",
    note: "Le kirghiz, langue turcique écrite en cyrillique, est la langue officielle et le cœur d’une fière culture orale de poésie épique ; le russe est largement parlé et utile partout, surtout à Bichkek et dans le nord. En montagne, un sourire, quelques mots et l’envie de boire le thé ouvrent toutes les portes.",
    phrases: [
      { fr: "Bonjour", local: "Салам", pron: "sa-LAM" },
      { fr: "Comment allez-vous ?", local: "Кандайсыз?", pron: "kann-DAÏ-seuz ?" },
      { fr: "Merci", local: "Рахмат", pron: "rakh-MAT" },
      { fr: "Oui / Non", local: "Ооба / Жок", pron: "Ô-ba / jok" },
      { fr: "Excusez-moi / Pardon", local: "Кечиресиз", pron: "ké-tchi-ré-SIZ" },
      { fr: "Combien ?", local: "Канча?", pron: "kann-TCHA ?" },
      { fr: "Où est… ?", local: "…кайда?", pron: "… kaï-DA ?" },
      { fr: "Délicieux !", local: "Даамдуу!", pron: "daam-DOU !" },
      { fr: "Eau / Thé", local: "Суу / Чай", pron: "sou / tchaï" },
      { fr: "Bienvenue", local: "Кош келиңиз", pron: "koch ké-li-NIZ" },
      { fr: "Au revoir", local: "Жакшы калыңыз", pron: "jak-CHEU ka-leu-NIZ" },
    ],
  },

  history: {
    summary:
      "Le Kirghizistan est une nation de montagnes et de nomades. Son peuple fait remonter son identité aux éleveurs turciques de l’Ienisseï, descendus au fil des siècles dans le Tian Shan, où ils ont développé une culture cavalière et une épopée orale colossale, le Manas — l’un des plus longs poèmes du monde — récité par des bardes spécialisés. La route de la Soie traversait le pays par la vallée de Ferghana et longeait le lac Issyk-Koul, laissant caravansérails et tour de Burana. Absorbé par l’Empire russe au XIXe siècle, puis république soviétique, le Kirghizistan a vu ses nomades contraints de se sédentariser ; pourtant le cheval, la yourte et les hauts pâturages d’été (jaïloo) sont restés au centre de la vie. Indépendant depuis 1991, c’est le pays politiquement le plus ouvert d’Asie centrale — surnommé « l’île de la démocratie », au fil de plusieurs révolutions agitées — et il a misé sur le tourisme communautaire, ouvrant aux voyageurs ses montagnes spectaculaires et sa chaleureuse hospitalité nomade.",
    timeline: [
      { era: "Antiquité (route de la Soie)", text: "Les caravanes franchissent le Tian Shan ; la tour de Burana s’élève près de Balasagun, cité de la route de la Soie." },
      { era: "Épopée orale (le Manas)", text: "L’immense épopée kirghize du héros Manas se transmet par les bardes — l’âme de l’identité nationale." },
      { era: "1876 (domination russe)", text: "L’Empire russe annexe les terres kirghizes, ce qui déclenchera plus tard la tragique révolte d’Ürkün et l’exode de 1916." },
      { era: "1936 (république soviétique)", text: "Le Kirghizistan devient une république socialiste soviétique ; les nomades sont forcés de s’installer dans des fermes collectives." },
      { era: "1991 (indépendance)", text: "Le Kirghizistan devient indépendant — souvent qualifié depuis d’État le plus démocratique et ouvert de la région." },
    ],
  },

  books: [
    { title: "Djamilia", author: "Tchinguiz Aïtmatov", year: "1958", note: "La tendre histoire d’amour en temps de guerre qu’Aragon, son traducteur, qualifia de « plus belle histoire d’amour du monde » — par l’écrivain chéri du Kirghizistan." },
    { title: "Une journée plus longue qu’un siècle", author: "Tchinguiz Aïtmatov", year: "1980", note: "Un roman magnifique qui tresse légendes de la steppe, cosmodrome et réalité soviétique — le point de départ idéal pour l’Asie centrale." },
    { title: "Manas", author: "Épopée orale kirghize", year: "traditionnel", note: "L’épopée nationale du héros Manas — cherchez-en une traduction ou, mieux, écoutez un barde manastchi la déclamer." },
    { title: "Kyrgyz Republic (Odyssey Guide)", author: "Rowan Stewart et Susie Weldon", year: "2004", note: "Un guide culturel et historique riche, qui va bien au-delà des aspects pratiques." },
    { title: "The Devil’s Dance", author: "Hamid Ismailov", year: "2018", note: "Un roman d’Asie centrale à tiroirs ; il ne se déroule pas au Kirghizistan mais évoque l’âme littéraire de la région." },
  ],

  meals: [
    { name: "Beshbarmak", description: "Le plat national partagé dans toute la steppe — mouton ou cheval bouilli sur de larges pâtes plates dans un bouillon, mangé avec les mains dans un plat commun.", tip: "Un plat d’hospitalité et de fête ; le partager avec une famille d’éleveurs sous la yourte est un temps fort de tout voyage." },
    { name: "Lagman", description: "Nouilles étirées à la main dans une sauce ou une soupe riche et épicée de viande et de légumes — le classique d’Asie centrale d’influence ouïghoure, infiniment réconfortant." },
    { name: "Plov (osh)", description: "Pilaf de riz parfumé à l’agneau, à la carotte et au cumin, cuit dans un grand kazan — la pièce maîtresse de tout festin, surtout dans le sud." },
    { name: "Manti et samsa", description: "Raviolis vapeur à l’agneau et à l’oignon, et chaussons feuilletés cuits au four tandyr — les en-cas classiques des bazars et des bords de route." },
    { name: "Kymyz et maksym", description: "Le lait de jument fermenté (kymyz), fierté acidulée des pâturages d’été, et des boissons de céréales comme le maksym — le vrai rafraîchissement nomade." },
    { name: "Boorsok et confiture", description: "Pâte frite et gonflée servie avec thé, miel, crème épaisse (kaïmak) et confiture — l’accueil chaleureux dressé sur la table de chaque yourte." },
  ],

  climate: {
    unit: "°C",
    note: "Montagneux et continental — les chiffres sont ceux de Bichkek, dans les plaines du nord. Les hautes vallées, les pâturages et les cols sont bien plus froids et ne s’ouvrent vraiment qu’au cœur de l’été (environ juin–sept., la saison des treks et des nuits en yourte). Le lac Issyk-Koul, réchauffé par sa profondeur et son sel, ne gèle jamais et sert de station balnéaire l’été. Les hivers sont froids et enneigés ; certaines routes d’altitude ferment.",
    coords: [42.87, 74.59], // Bishkek — representative point for the fetch script
    key: "kg",
    best: [6, 7, 8, 9],
    avoid: [11, 12, 1, 2],
    months: [
      { mean: -2, rain: 27 }, { mean: 0, rain: 33 }, { mean: 6, rain: 48 },
      { mean: 12, rain: 79 }, { mean: 17, rain: 65 }, { mean: 22, rain: 36 },
      { mean: 25, rain: 24 }, { mean: 24, rain: 15 }, { mean: 18, rain: 22 },
      { mean: 11, rain: 43 }, { mean: 5, rain: 42 }, { mean: 0, rain: 30 },
    ],
  },

  events: [
    { name: "Saison du jaïloo (pâturages d’été)", when: "Juin – septembre", months: [6, 7, 8, 9], kind: "go", description: "La seule période où les hautes montagnes, les cols et les camps de yourtes sont ouverts et verdoyants — les éleveurs montent au jaïloo, et c’est le meilleur moment pour les treks et les randonnées à cheval." },
    { name: "Nooruz (Norouz)", when: "21 mars", months: [3], kind: "go", description: "Le Nouvel An de l’équinoxe de printemps, célébré dans toute l’Asie centrale avec festins, jeux équestres et musique — festif, même s’il fait encore froid et que ce n’est pas la saison des treks." },
    { name: "Jeux équestres nationaux", when: "Été", months: [7, 8], kind: "note", description: "Le kok-boru (un polo féroce joué avec une carcasse de chèvre), les courses de chevaux et la chasse à l’aigle sont présentés lors des fêtes de village et des Jeux mondiaux nomades, organisés périodiquement — renseignez-vous sur place." },
    { name: "Hiver (montagnes fermées)", when: "Novembre – mars", months: [11, 12, 1, 2, 3], kind: "avoid", description: "Les hauts cols et les camps de yourtes ferment sous la neige et le froid ; on se limite à Bichkek, aux rives d’Issyk-Koul et au ski de randonnée à Karakol. Gardez la montagne pour l’été." },
  ],

  places: [
    {
      name: "Song-Köl", category: "slow-travel", coords: [41.8333, 75.1333], region: "Tian Shan central",
      description: "Un vaste lac alpin sans arbres, cerné de pâturages d’été et de camps de yourtes — l’essence du Kirghizistan nomade.",
      wiki: "Song Kol",
      long:
        "Perché sur un plateau à 3 000 mètres, Song-Köl est l’âme du Kirghizistan : un immense lac alpin, lisse comme un miroir, entouré de prairies ouvertes et sans arbres où, chaque été, les familles d’éleveurs montent leurs bêtes au jaïloo et dressent leurs yourtes. Pas de villes, presque pas de routes, aucune lumière hormis les étoiles — seulement des chevaux, des moutons et l’étendue des pâturages sous un ciel immense, exactement comme depuis des siècles.\n\nLa façon classique de le vivre est de loger dans un camp de yourtes familial au bord du lac, en partageant repas et kymyz avec vos hôtes, en chevauchant à travers les pâturages et en regardant la lumière et les nuages filer sur le lac. Pour y arriver, il faut franchir un col élevé en 4×4 ou, mieux, marcher ou chevaucher plusieurs jours depuis les villages en contrebas. Simple, élémentaire et inoubliable, Song-Köl est le voyage dont la plupart des voyageurs se souviennent le plus longtemps.",
      practical: [
        { label: "Y aller", value: "Accessible par des cols élevés en 4×4 depuis Kochkor ou du côté de Naryn (~3–4 h de piste), ou par un trek à pied ou à cheval de 2–3 jours — le trek est la vraie récompense." },
        { label: "Hébergement", value: "Des camps de yourtes familiaux bordent le lac en été (à réserver via le CBT, tourisme communautaire, à Kochkor) ; lit, repas et location de chevaux compris. Prévoyez du liquide." },
        { label: "Quand", value: "Accessible seulement de mi-juin à mi-septembre environ ; le reste de l’année, les cols sont enneigés et les camps démontés. Les nuits sont froides même en été — prévoyez des couches chaudes." },
        { label: "À faire", value: "Chevaucher à travers les pâturages, observer les éleveurs, et profiter des nuits stupéfiantes, constellées d’étoiles, loin de toute lumière." },
      ],
      stay:
        "Dormez dans la yourte d’une famille de bergers au bord du lac — parois de feutre, poêle à bois, repas partagés de pain frais et de kymyz, et chevaux devant la porte. C’est rudimentaire (toilettes sèches dehors, pas d’électricité) et absolument magique ; réservez via le bureau du tourisme communautaire (CBT) de Kochkor, qui reverse les revenus aux familles.",
      tips: [
        "Arrivez à cheval ou à pied par les cols plutôt qu’en voiture — le voyage de plusieurs jours à travers les pâturages est le temps fort.",
        "Réservez via le CBT de Kochkor pour que votre argent aille directement aux familles d’éleveurs, et prévoyez assez de liquide et de vêtements chauds.",
      ],
    },
    {
      name: "Karakol et le trek d’Ala-Köl", category: "trek", coords: [42.4900, 78.3900], region: "est d’Issyk-Koul",
      description: "Un camp de base de trekking au pied de sommets glaciaires — sources chaudes, mosquée en bois et randonnée classique entre col et lac.",
      wiki: "Karakol",
      long:
        "À l’extrémité est du lac Issyk-Koul, la sympathique ville de Karakol est la capitale kirghize de l’alpinisme et du trekking, adossée aux sommets glaciaires du Tian Shan central. La ville elle-même séduit avec ses maisonnettes russes en pain d’épice, une magnifique mosquée doungane entièrement en bois construite sans clous (dans le style chinois) et une cathédrale orthodoxe en bois — héritage de son passé mêlé, russe, doungane et kirghize — ainsi qu’un marché aux bestiaux animé le dimanche.\n\nMais l’essentiel, ce sont les montagnes. La vallée de Karakol mène au trek emblématique de la région, sur plusieurs jours, par le col d’Ala-Köl (~3 900 m) jusqu’à un superbe lac glaciaire turquoise, puis aux sources chaudes d’Altyn-Arashan — l’une des grandes randonnées d’Asie centrale. En hiver, Karakol devient une station de ski tranquille. Avec ses prestataires, ses maisons d’hôtes et son tourisme communautaire, c’est la base naturelle pour le Tian Shan oriental.",
      practical: [
        { label: "Y aller", value: "~6–7 h de route depuis Bichkek par la rive nord d’Issyk-Koul (marchroutka ou taxi collectif) ; Karakol se parcourt à pied et compte de bonnes maisons d’hôtes." },
        { label: "Trek d’Ala-Köl", value: "La boucle classique de 2–3 jours remonte la vallée de Karakol, franchit le col d’Ala-Köl jusqu’au lac turquoise et redescend vers les sources chaudes d’Altyn-Arashan. Exigeant et en altitude — partez avec un guide/porteur ou au moins un bon équipement." },
        { label: "En ville", value: "La mosquée doungane en bois et la cathédrale de la Sainte-Trinité, le marché aux bestiaux du dimanche (tôt le matin) et la copieuse cuisine doungane." },
        { label: "Quand", value: "Trekking de juillet à septembre (la neige s’attarde sur le col jusqu’en été) ; Karakol a aussi une station de ski en hiver." },
      ],
      stay:
        "Posez-vous dans l’une des accueillantes maisons d’hôtes de Karakol pour organiser vos treks et reposer vos jambes, et passez les nuits du trek sous tente ou dans les refuges rustiques et maisons d’hôtes thermales d’Altyn-Arashan — se plonger dans un bassin chaud au pied des sommets après le col d’Ala-Köl n’a pas d’égal.",
      tips: [
        "Acclimatez-vous avant le col d’Ala-Köl (~3 900 m) et renseignez-vous sur les conditions — la neige peut persister et la météo tourne vite.",
        "Calez votre visite sur le marché aux bestiaux du dimanche matin à Karakol, une vraie tranche de vie locale.",
      ],
    },
    {
      name: "Lac Issyk-Koul et canyons de Jeti-Ögüz", category: "nature", coords: [42.4500, 77.1500], region: "Tian Shan nord",
      description: "Le deuxième plus grand lac alpin du monde — chaud, salé et jamais gelé — avec des canyons de roche rouge en arrière-plan.",
      wiki: "Issyk-Kul",
      long:
        "Niché entre deux chaînes enneigées du Tian Shan, Issyk-Koul est le joyau au centre du Kirghizistan — le deuxième plus grand lac alpin du monde, si profond et légèrement salé qu’il ne gèle jamais (son nom signifie « lac chaud »). Cerné de montagnes mais assez chaud pour s’y baigner tout l’été, il est depuis longtemps un lieu de villégiature, et ses rives mêlent sanatoriums d’époque soviétique, plages tranquilles et points de départ vers la montagne.\n\nDerrière la rive sud, les contreforts dressent de spectaculaires formations de roche rouge : les « Sept Taureaux » côtelés (Jeti-Ögüz) et les falaises du « Cœur brisé », d’un rouge flamboyant au-dessus de vallées vertes et de sources chaudes, avec pâturages et cascades dans les canyons au-delà. Tout près, le canyon de Skazka (« Conte de fées ») offre des roches érodées aux couleurs d’arc-en-ciel. Le lac fait une base facile et pittoresque — baignade et détente sur la rive, chevauchées dans les canyons rouges, et porte d’entrée vers Karakol et Song-Köl.",
      practical: [
        { label: "Y aller", value: "Le lac est à ~3–7 h de Bichkek selon la rive ; des marchroutkas en font le tour. La rive sud, plus calme (Kaji-Saï, Tamga, Bokonbaïevo), est plus belle que la rive nord, très touristique." },
        { label: "Jeti-Ögüz", value: "Les falaises rouges des « Sept Taureaux » et du « Cœur brisé » sont près de Karakol ; une route de vallée monte entre les pâturages jusqu’à une cascade — une demi-journée facile, idéale dans la lumière du matin ou du soir." },
        { label: "Aussi", value: "Se baigner dans le lac chaud en été, visiter le canyon érodé de Skazka et les pétroglyphes de Tcholpon-Ata, et assister à une démonstration de chasse à l’aigle près de Bokonbaïevo." },
        { label: "Quand", value: "Juin–sept. pour la baignade et la chaleur ; hors saison, la rive est calme et froide." },
      ],
      stay:
        "Préférez la paisible rive sud — une maison d’hôtes ou un camp de yourtes près de Tamga, Kaji-Saï ou Bokonbaïevo — pour les plages, les canyons rouges et le tourisme communautaire, plutôt que les stations plus animées du nord. Beaucoup d’hôtes organisent des sorties à cheval vers Jeti-Ögüz et des visites de chasseurs à l’aigle.",
      tips: [
        "Privilégiez la rive sud pour les paysages et l’authenticité ; le nord est plus bâti, à l’ambiance de station soviétique.",
        "Remontez la vallée de Jeti-Ögüz à cheval, au pied des falaises rouges, jusqu’aux pâturages et à la cascade : une belle demi-journée.",
      ],
    },
    {
      name: "Tour de Burana", category: "history", coords: [42.7461, 75.2497], region: "vallée de la Tchouï (près de Bichkek)",
      description: "Un minaret solitaire de la route de la Soie au milieu de la steppe, avec un champ d’anciennes statues de guerriers « balbals ».",
      wiki: "Burana Tower",
      long:
        "Facile à visiter à la journée depuis Bichkek, la tour de Burana se dresse seule au milieu de la vallée herbeuse de la Tchouï — un minaret de brique trapu et patiné, dernier vestige debout de Balasagun, grande cité de la route de la Soie et capitale de la dynastie karakhanide vers les Xe–XIe siècles. Jadis bien plus haute avant que des séismes n’en abattent le sommet, on peut encore la gravir par un escalier intérieur sombre et raide pour une vue sur la plaine jusqu’aux montagnes.\n\nCe qui rend le site mémorable, c’est l’histoire éparpillée à ciel ouvert tout autour : un champ évocateur de balbals — statues de pierre d’anciens guerriers turciques, les mains sur le ventre, qui marquaient autrefois les tombes — rassemblées de toute la steppe, avec des pétroglyphes et des stèles funéraires. Modeste mais plein d’atmosphère, Burana est la fenêtre la plus accessible sur le passé du Kirghizistan, celui de la route de la Soie et des Turcs préislamiques, sur un décor classique d’Asie centrale fait de steppe et de sommets enneigés.",
      practical: [
        { label: "Y aller", value: "~80 km à l’est de Bichkek près de Tokmok (~1 h 30) ; en taxi collectif/marchroutka jusqu’à Tokmok puis taxi, ou en excursion d’une demi-journée." },
        { label: "Sur place", value: "Gravir l’escalier intérieur raide de la tour (une lampe est utile), parcourir le champ de balbals (guerriers de pierre), voir le petit musée et les pétroglyphes. Petit droit d’entrée." },
        { label: "Quand", value: "Toute l’année ; le printemps et le début de l’été sont les plus verts, avec encore de la neige sur les sommets en toile de fond." },
        { label: "À combiner avec", value: "La vallée de la Tchouï en allant à Issyk-Koul ou en revenant, ou une demi-journée depuis Bichkek." },
      ],
      stay:
        "Burana est à une demi-journée de Bichkek, alors logez dans la capitale — une ville soviétique planifiée et verdoyante, faite de parcs et de bazars, avec les meilleurs hôtels, restaurants et ressources pour préparer un trek dans le pays. Profitez-en pour organiser la suite de vos aventures en montagne.",
      tips: [
        "Prenez une lampe pour la montée dans le noir complet par l’étroit escalier intérieur de la tour.",
        "Associez Burana à la route vers Issyk-Koul pour faire d’une pierre deux coups.",
      ],
    },
    {
      name: "Och et la vallée de Ferghana", category: "history", coords: [40.5283, 72.7985], region: "sud du Kirghizistan",
      description: "L’une des plus anciennes villes d’Asie centrale, étalée au pied d’une montagne sacrée, avec un bazar mythique de la route de la Soie.",
      wiki: "Osh",
      long:
        "Dans la vallée de Ferghana, fertile et densément peuplée, au sud du pays, Och est l’une des plus vieilles villes d’Asie centrale — plus de 3 000 ans, dit-on — et semble à mille lieues de Bichkek : plus ouzbèke, plus musulmane, plus chaude et plus ancienne. Son cœur est le bazar Jayma, un immense marché séculaire de la route de la Soie étiré le long de la rivière, où l’on peut se perdre des heures entre épices, couteaux, chapeaux, fruits et le tourbillon de la vie du sud.\n\nEn plein centre-ville se dresse le Soulaïman-Too, le « Trône de Salomon » — une montagne calcaire sacrée et déchiquetée qui attire les pèlerins depuis des millénaires et constitue le seul site culturel du pays inscrit au patrimoine mondial de l’UNESCO, criblé de sanctuaires, de grottes et d’un musée troglodyte, avec de vastes vues sur la ville depuis ses crêtes. Pôle du sud et carrefour vers l’Ouzbékistan, le Tadjikistan et la route du Pamir, Och est la porte d’entrée d’une Asie centrale plus profonde et plus ancienne.",
      practical: [
        { label: "Y aller", value: "Vol depuis Bichkek (~40 min — bien plus simple que la longue route de montagne), ou la spectaculaire mais éreintante route Bichkek–Och par les cols." },
        { label: "À voir", value: "La montagne sacrée de Soulaïman-Too (montez pour la vue et le musée troglodyte), le vaste bazar Jayma le long de la rivière et la vie de rue mêlée, kirghize et ouzbèke." },
        { label: "Porte d’entrée", value: "Och est le point de départ de la route du Pamir vers le Tadjikistan et des itinéraires vers les villes ouzbèkes de la Ferghana — un carrefour régional essentiel." },
        { label: "Quand", value: "Le printemps et l’automne sont agréables ; l’été dans la Ferghana est très chaud. Respectez le caractère conservateur et religieux du sud." },
      ],
      stay:
        "Logez près du bazar et du Soulaïman-Too pour gravir la montagne sacrée à l’aube ou au crépuscule et plonger tôt dans le marché. Och compte des maisons d’hôtes et des hôtels tournés vers les voyageurs de la route du Pamir ; c’est l’endroit naturel pour se reposer et se ravitailler avant ou après la montagne.",
      tips: [
        "Gravissez le Soulaïman-Too tôt le matin ou à l’heure dorée pour la lumière et les pèlerins, et entrez dans le musée troglodyte creusé dans la roche.",
        "Habillez-vous sobrement ici — le sud est plus conservateur et religieux que le nord.",
      ],
    },
    {
      name: "Réserve de biosphère de Sary-Tchelek", category: "nature", coords: [41.8500, 71.9667], region: "Djalal-Abad (sud-ouest)",
      description: "Un profond lac de montagne vert émeraude dans des collines couvertes de noyers — une biosphère UNESCO reculée et sans route.",
      wiki: "Sary-Chelek",
      long:
        "Nichée dans le Tian Shan occidental, au sud-ouest du pays, la réserve de biosphère de Sary-Tchelek protège l’un des paysages les plus beaux et les moins visités du Kirghizistan : un lac profond, vert émeraude (« Sary-Tchelek » signifie « bol jaune »), enserré de crêtes abruptes et boisées, au sein d’une mosaïque classée par l’UNESCO de sept lacs, de prairies alpines et de rares forêts reliques de noyers et d’arbres fruitiers — vestiges des forêts sauvages qui ont donné au monde la noix et la pomme.\n\nIsolée et difficile d’accès, sans foule et avec peu d’équipements, elle récompense ceux qui font le voyage par de paisibles balades en bateau sur le lac principal, des marches dans les forêts de noyers et des nuits chez l’habitant dans les villages alentour. Tout près, Arslanbob, la plus grande forêt naturelle de noyers au monde, ajoute à l’attrait de la région, avec ses cascades et l’accueil chaleureux de ses villages ouzbeks. C’est le Kirghizistan lent et hors des cartes — nature et vie villageoise aux confins tranquilles de l’ouest du pays.",
      practical: [
        { label: "Y aller", value: "Isolé : depuis Djalal-Abad ou via Arslanbob en transport collectif, puis voiture avec chauffeur sur des routes cahoteuses ; un guide ou une organisation via le CBT aide beaucoup." },
        { label: "Dans la réserve", value: "Petit droit d’entrée ; prenez un bateau sur le lac principal, parcourez les sentiers forestiers et visitez le chapelet de lacs plus petits. Équipements minimaux — venez préparé." },
        { label: "À combiner avec", value: "Arslanbob, la plus grande forêt de noyers du monde, avec ses cascades, ses lieux saints et ses familles ouzbèkes qui accueillent chez l’habitant — un duo enrichissant dans le sud-ouest." },
        { label: "Quand", value: "De la fin du printemps à l’automne ; la récolte des noix à l’automne est un moment collectif et particulier à Arslanbob." },
      ],
      stay:
        "Logez chez l’habitant dans un village près de la réserve ou à Arslanbob (via le tourisme communautaire), où des familles ouzbèkes proposent repas faits maison, balades dans les forêts de noyers et un accueil sincèrement chaleureux. C’est simple, isolé, et aussi loin des sentiers battus qu’on puisse aller au Kirghizistan.",
      tips: [
        "Organisez transport et hébergement chez l’habitant via le CBT d’Arslanbob ou de Djalal-Abad — l’accès en autonomie est difficile.",
        "Venez en automne pour voir (et partager) la récolte collective des noix dans les forêts autour d’Arslanbob.",
      ],
    },
  ],
};
