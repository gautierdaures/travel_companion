// Country ID card — schema reference lives in data/index.js
export default {
  code: "ru",
  name: "Russie",
  flag: "🇷🇺",
  region: "Eurasie",
  tagline: "Bulbes dorés, forêts de bouleaux et un continent entier de voies ferrées.",
  tags: ["history", "cities", "trek", "nature", "slow-travel"],

  languages: {
    name: "Russe",
    note: "Il s’écrit en cyrillique — apprenez d’abord l’alphabet, et lire les panneaux devient bien plus facile. L’accent tonique est imprévisible et change le sens des mots : écoutez avant de parler. Quelques mots de russe sont accueillis chaleureusement.",
    phrases: [
      { fr: "Bonjour", local: "Здравствуйте", pron: "ZDRAST-vouï-tié" },
      { fr: "Salut (familier)", local: "Привет", pron: "pri-VIET" },
      { fr: "Merci", local: "Спасибо", pron: "spa-SI-ba" },
      { fr: "S’il vous plaît / De rien", local: "Пожалуйста", pron: "pa-JAL-sta" },
      { fr: "Excusez-moi / Pardon", local: "Извините", pron: "iz-vi-NI-tié" },
      { fr: "Oui / Non", local: "Да / Нет", pron: "da / niet" },
      { fr: "C’est combien ?", local: "Сколько стоит?", pron: "SKOL-ka STO-it ?" },
      { fr: "Où est… ?", local: "Где…?", pron: "gdié… ?" },
      { fr: "Délicieux !", local: "Вкусно!", pron: "VKOUS-na !" },
      { fr: "Santé !", local: "За здоровье!", pron: "za zda-RO-vié !" },
      { fr: "Au revoir", local: "До свидания", pron: "da svi-DA-ni-ia" },
    ],
  },

  history: {
    summary:
      "La Russie est née de la Rus’ de Kiev, fédération marchande médiévale, pour devenir le plus grand pays du monde, s’étendant sur onze fuseaux horaires de la Baltique au Pacifique. Des siècles de règne tsariste — d’Ivan le Terrible à Pierre le Grand, qui tira le pays vers l’Occident et bâtit Saint-Pétersbourg sur un marais — prirent fin avec la révolution de 1917 et sept décennies de communisme soviétique. L’URSS s’industrialisa brutalement, subit les plus lourdes pertes de la Seconde Guerre mondiale et disputa aux États-Unis la course à l’espace avant de s’effondrer en 1991. Il en reste une culture aux réalisations littéraires, musicales et scientifiques vertigineuses, posée sur une dure histoire impériale.",
    timeline: [
      { era: "882–1240 (Rus’ de Kiev)", text: "Une fédération de commerce fluvial adopte le christianisme orthodoxe venu de Byzance." },
      { era: "1547–1584 (Ivan IV)", text: "Le premier tsar centralise le pouvoir et lance la poussée vers l’est, en Sibérie." },
      { era: "1703 (fondation de Saint-Pétersbourg)", text: "Pierre le Grand bâtit une « fenêtre sur l’Europe » sur les marais de la Baltique." },
      { era: "1917 (révolution)", text: "Le tsar tombe ; les bolcheviks fondent le premier État communiste du monde." },
      { era: "1991 (effondrement soviétique)", text: "L’URSS se dissout en quinze républiques indépendantes." },
    ],
  },

  books: [
    { title: "Guerre et Paix", author: "Léon Tolstoï", year: "1869", note: "L’invasion napoléonienne vue à travers cinq familles aristocratiques — la grande épopée russe." },
    { title: "Crime et Châtiment", author: "Fiodor Dostoïevski", year: "1866", note: "Un Saint-Pétersbourg fiévreux de misère, de culpabilité et de rédemption." },
    { title: "A Journey Into Russia", author: "Jens Mühling", year: "2012", note: "Un journaliste allemand s’éloigne de Moscou pour aller à la rencontre des Russes ordinaires." },
    { title: "Le Maître et Marguerite", author: "Mikhaïl Boulgakov", year: "1967", note: "Le diable en visite dans le Moscou soviétique — surréaliste, drôle et discrètement subversif." },
  ],

  meals: [
    { name: "Bortsch", description: "Soupe de betterave d’un rouge rubis, servie avec une cuillerée de smetana (crème aigre) ; chaude en hiver, parfois froide en été.", tip: "Commandez-la avec une tranche de pain de seigle noir et de l’ail cru à côté." },
    { name: "Pelmeni", description: "Petits raviolis de viande hachée, bouillis et nappés de beurre, de vinaigre ou de crème aigre — le réconfort sibérien." },
    { name: "Blinis", description: "Fines crêpes roulées autour de tout ce qu’on veut, de la crème aigre au caviar en passant par la confiture ; toute une fête (la Maslenitsa) leur est consacrée." },
    { name: "Bœuf Stroganoff", description: "Bœuf sauté dans une sauce à la moutarde et à la crème aigre, né dans les cuisines de Saint-Pétersbourg au XIXe siècle." },
    { name: "Chtchi", description: "La soupe au chou qui nourrit la Russie depuis mille ans — « le chtchi et la kacha, voilà notre nourriture », dit le proverbe." },
  ],

  climate: {
    unit: "°C",
    note: "La Russie est immense — les hivers varient énormément, de la douce côte de la mer Noire à la Sibérie.",
    regions: [
      {
        name: "Moscou et Russie européenne",
        coords: [55.75, 37.62], // Moscow
        key: "ru-moscow",
        note: "Hivers froids et enneigés, étés chauds et animés. Les semaines des nuits blanches de juin sont le temps fort.",
        best: [5, 6, 7, 8, 9],
        avoid: [12, 1, 2],
        months: [
          { mean: -7, rain: 36 }, { mean: -7, rain: 32 }, { mean: -3, rain: 33 },
          { mean: 5, rain: 36 }, { mean: 13, rain: 58 }, { mean: 17, rain: 71 },
          { mean: 19, rain: 76 }, { mean: 18, rain: 66 }, { mean: 12, rain: 57 },
          { mean: 6, rain: 58 }, { mean: -1, rain: 44 }, { mean: -5, rain: 38 },
        ],
      },
      {
        name: "Sibérie · Novossibirsk et Irkoutsk",
        coords: [55.03, 82.92], // Novosibirsk
        key: "ru-siberia",
        note: "D’un froid brutal la moitié de l’année ; un été court et chaud est la seule fenêtre confortable.",
        best: [6, 7, 8],
        avoid: [11, 12, 1, 2, 3],
        months: [
          { mean: -17, rain: 27 }, { mean: -14, rain: 20 }, { mean: -7, rain: 26 },
          { mean: 3, rain: 31 }, { mean: 11, rain: 42 }, { mean: 17, rain: 55 },
          { mean: 19, rain: 70 }, { mean: 17, rain: 55 }, { mean: 10, rain: 49 },
          { mean: 3, rain: 49 }, { mean: -7, rain: 46 }, { mean: -14, rain: 41 },
        ],
      },
      {
        name: "Côte de la mer Noire · Sotchi",
        coords: [43.60, 39.73], // Sochi
        key: "ru-sochi",
        note: "Subtropical humide et doux toute l’année ; l’été est la haute saison balnéaire, et il gèle rarement en hiver.",
        best: [6, 7, 8, 9],
        avoid: [],
        months: [
          { mean: 5, rain: 148 }, { mean: 5, rain: 111 }, { mean: 7, rain: 114 },
          { mean: 12, rain: 89 }, { mean: 17, rain: 89 }, { mean: 21, rain: 81 },
          { mean: 23, rain: 84 }, { mean: 24, rain: 70 }, { mean: 20, rain: 111 },
          { mean: 16, rain: 138 }, { mean: 11, rain: 132 }, { mean: 7, rain: 148 },
        ],
      },
    ],
  },

  events: [
    { name: "Maslenitsa (semaine du beurre)", when: "Fin févr. – début mars", months: [2, 3], kind: "go", description: "Une semaine de blinis, de luge et de feux de joie pour dire adieu à l’hiver avant le carême — fêtes populaires dans chaque ville et chaque musée en plein air." },
    { name: "Nuits blanches", when: "Juin – début juillet", months: [6, 7], kind: "go", description: "À Saint-Pétersbourg, le soleil se couche à peine ; la ville vit toute la nuit au rythme des ballets, des concerts et du feu d’artifice des Voiles écarlates." },
    { name: "Jour de la Victoire", when: "9 mai", months: [5], kind: "note", description: "Immenses défilés militaires et foules ; le centre de Moscou autour de la place Rouge est bouclé et les hôtels sont pleins — organisez-vous en conséquence." },
    { name: "Nouvel An et Noël orthodoxe", when: "31 déc. – 8 janv.", months: [12, 1], kind: "note", description: "La plus grande fête de l’année : de belles illuminations et des marchés, mais bureaux, banques et nombre de services ferment pendant plus d’une semaine début janvier." },
  ],

  places: [
    {
      name: "Place Rouge et cathédrale Saint-Basile", category: "history", coords: [55.7525, 37.6231], region: "Moscou",
      description: "Les bulbes tourbillonnants aux couleurs de bonbon de Saint-Basile au-dessus de la vaste place, au cœur de la capitale — venez la nuit, quand tout est illuminé.",
      wiki: "Saint Basil's Cathedral",
      long:
        "La place Rouge est le centre symbolique de la Russie, une vaste étendue pavée bordée par le mur crénelé du Kremlin, le grand magasin GUM richement orné, le mausolée de granit de Lénine et — son inimitable point d’exclamation — la cathédrale Saint-Basile-le-Bienheureux. Commandée par Ivan le Terrible dans les années 1550, Saint-Basile est une explosion de neuf chapelles coiffées de bulbes tourbillonnants rayés comme des sucres d’orge, tous différents, sans équivalent au monde.\n\nL’intérieur est une surprise : non pas une grande nef, mais un dédale d’étroites chapelles et d’escaliers couverts de fresques. Venez la nuit, quand les bulbes et la place sont illuminés et que la foule s’éclaircit, pour la vue qui grave Moscou dans la mémoire. Le Kremlin voisin — cathédrales, palais des Armures et siège du pouvoir — mérite sa propre demi-journée.",
      practical: [
        { label: "Y aller", value: "Centre de Moscou ; métro Okhotny Riad ou Plochtchad Revolioutsii. La place elle-même est gratuite et ouverte." },
        { label: "Saint-Basile", value: "~1 000 ₽, jusqu’à ~2 000 ₽ pour les visiteurs étrangers, pour l’intérieur de la cathédrale ; le Kremlin est un billet séparé." },
        { label: "Temps à prévoir", value: "Une heure pour la place ; une demi-journée en ajoutant les cathédrales du Kremlin et le palais des Armures." },
        { label: "Quand", value: "Venez après la tombée de la nuit, quand les bulbes et la place sont illuminés et que la foule s’éclaircit." },
      ],
      stay:
        "Installez-vous dans le centre historique (Kitaï-Gorod ou Tverskaïa) pour rejoindre à pied la place Rouge, le Kremlin et les somptueuses stations de métro. Gardez une soirée pour arpenter la place illuminée et les bords de la Moskova — Moscou n’est jamais aussi magique qu’après la tombée de la nuit.",
      tips: [
        "Les cartes bancaires étrangères risquent de ne pas fonctionner — ayez du liquide (des roubles) et attendez-vous à payer ainsi.",
        "Prenez le métro comme une visite à part entière : les stations de la ligne circulaire sont des palais souterrains.",
      ],
    },
    {
      name: "Musée de l’Ermitage", category: "history", coords: [59.9398, 30.3146], region: "Saint-Pétersbourg",
      description: "Le palais d’Hiver de Catherine la Grande, devenu l’un des plus grands musées d’art du monde ; une journée entière ne suffit pas à en voir l’essentiel.",
      wiki: "Hermitage Museum",
      long:
        "L’Ermitage est à la fois l’un des plus grands musées d’art du monde et l’un de ses édifices les plus somptueux — le palais d’Hiver des tsars, pièce montée baroque vert et blanc sur les quais de la Neva, commencée pour l’impératrice Élisabeth et agrandie par Catherine la Grande, qui fonda la collection. Ses millions d’objets vont des antiquités égyptiennes et de l’or scythe à Rembrandt, Léonard de Vinci et un incomparable trésor de toiles impressionnistes et de Matisse.\n\nLes salles elles-mêmes sont l’autre moitié du spectacle : l’escalier du Jourdain doré, la salle de malachite, les parquets et les enfilades de salons à lustres. Personne ne voit tout — choisissez deux ou trois ailes, et prenez le temps de rester simplement dans les salles d’apparat où les Romanov tenaient leur cour jusqu’en 1917.",
      practical: [
        { label: "Y aller", value: "Sur la place du Palais, centre de Saint-Pétersbourg ; métro Admiralteïskaïa." },
        { label: "Billets", value: "~500 ₽ (~6 $) ; réservez en ligne à l’avance pour éviter la file." },
        { label: "Temps à prévoir", value: "Une journée complète, et vous en manquerez encore l’essentiel — choisissez deux ou trois ailes." },
        { label: "Quand", value: "Fermé le lundi ; venez à l’ouverture pour atteindre les Rembrandt et les salles d’apparat avant les groupes." },
      ],
      stay:
        "Logez dans le centre historique, facile à parcourir à pied, près de la perspective Nevski ou du canal Griboïedov, pour que l’Ermitage, l’église du Sauveur-sur-le-Sang-Versé et les quais soient à deux pas. Pendant les nuits blanches de juin, une base centrale permet de flâner sur les ponts et le long des canaux dans un crépuscule sans fin.",
      tips: [
        "Réservez en ligne pour éviter la longue file aux caisses, puis filez d’abord vers l’aile qui vous intéresse.",
        "N’essayez pas de tout voir — choisissez deux ou trois ailes et attardez-vous dans les salles d’apparat.",
      ],
    },
    {
      name: "Lac Baïkal", category: "nature", coords: [53.5587, 108.165], region: "Sibérie",
      description: "Le lac le plus profond et le plus ancien du monde — en hiver, il gèle en une glace turquoise transparente sur laquelle on peut marcher.",
      wiki: "Lake Baikal",
      long:
        "Le Baïkal est superlatif à tous égards : le lac le plus profond du monde, le plus ancien avec quelque 25 millions d’années, et le dépositaire d’un cinquième de toute l’eau douce non gelée de la planète — une eau si abondante et si limpide qu’on voit à 40 mètres de profondeur. Cerné de taïga et de montagnes dans le sud de la Sibérie, il grouille d’espèces introuvables ailleurs, dont le nerpa, le seul phoque d’eau douce au monde.\n\nL’été apporte randonnées et sorties en bateau depuis les villages en bois de l’île d’Olkhon, le cœur chamanique du lac. Mais la magie du Baïkal culmine à la fin de l’hiver, quand il gèle en un mètre de glace turquoise d’une transparence stupéfiante, veinée de fissures blanches et hérissée d’éclats empilés, sur laquelle on peut marcher, patiner ou rouler. Le Transsibérien longe sa rive sud par la pittoresque ligne Circum-Baïkal.",
      practical: [
        { label: "Y aller", value: "Avion ou Transsibérien jusqu’à Irkoutsk ; puis ~4–6 h jusqu’à l’île d’Olkhon ou ~1 h jusqu’à Listvianka." },
        { label: "Temps à prévoir", value: "3–4 jours minimum à Olkhon ; davantage pour les sentiers du rivage." },
        { label: "Randonnée", value: "Le Grand sentier du Baïkal longe la rive ; des randonnées faciles à la journée partent de Listvianka et d’Olkhon." },
        { label: "Quand y aller", value: "L’été pour randonner et naviguer ; fin février–mars pour l’étonnante glace transparente." },
      ],
      stay:
        "Installez-vous sur l’île d’Olkhon, le cœur chamanique du lac, dans une guesthouse en bois du village de Khoujir — banya, cuisine maison et rivage à quelques pas. C’est un endroit où se poser plusieurs jours : randonner sur les caps, prendre un bateau et se caler sur le rythme du lac plutôt que de venir à la journée depuis Irkoutsk.",
      tips: [
        "Pour la célèbre glace turquoise, venez fin février ou en mars, pas au plus fort du gel hivernal.",
        "Les routes vers Olkhon sont mauvaises et comprennent un ferry — comptez presque une journée dans chaque sens.",
      ],
    },
    {
      name: "Transsibérien", category: "slow-travel", coords: [56.009, 92.8526], region: "De Moscou à Vladivostok",
      description: "Six jours et 9 000 km à travers le continent ; le wagon-restaurant et les babouchkas qui vendent du poisson fumé sur les quais sont le vrai voyage.",
      wiki: "Trans-Siberian Railway",
      long:
        "Le Transsibérien est le plus grand voyage en train du monde : 9 289 kilomètres et sept fuseaux horaires de Moscou au Pacifique à Vladivostok, ou une bifurcation vers le sud par le Transmongolien jusqu’à Pékin. Le parcourir d’une traite prend presque une semaine, bouleaux et taïga défilant derrière la vitre, rythmés par le samovar d’eau chaude au bout de chaque voiture et par les babouchkas qui vendent omouls fumés et raviolis sur les quais.\n\nC’est le voyage, pas la destination, qui compte — et la meilleure façon de le faire est par étapes, en s’arrêtant dans des villes comme Kazan, Iekaterinbourg (où les Romanov trouvèrent la mort), Irkoutsk et le lac Baïkal. Dans les compartiments, le thé, les repas et les conversations à moitié traduites partagés avec les autres voyageurs deviennent la vraie Russie.",
      practical: [
        { label: "L’itinéraire", value: "Moscou–Vladivostok, c’est ~9 289 km / 6–7 jours sans arrêt ; les couchettes se réservent auprès des Chemins de fer russes (RZD)." },
        { label: "Comment faire", value: "Découpez le voyage en étapes — Kazan, Iekaterinbourg, Irkoutsk/Baïkal — plutôt que de le faire d’une traite." },
        { label: "Classes", value: "La 2e classe (koupé, 4 couchettes) est le meilleur compromis, conviviale ; la 3e (platskart) est ouverte et encore plus locale." },
        { label: "Temps à prévoir", value: "2–3 semaines pour lui rendre justice avec de belles étapes." },
      ],
      stay:
        "Le train est la moitié de votre hébergement — une couchette dans un koupé de 4 personnes, avec un samovar d’eau chaude au bout de la voiture. Entre deux tronçons, logez dans des guesthouses du centre-ville à chaque étape ; le thé, les repas et les conversations à moitié traduites partagés avec les autres passagers, c’est ici la vraie Russie.",
      tips: [
        "Faites le plein de nouilles instantanées, de thé et d’en-cas — et achetez omouls fumés et raviolis aux babouchkas des quais.",
        "Réservez les couchettes en koupé à l’avance en été ; les couchettes basses et les compartiments en bout de voiture sont les plus confortables.",
      ],
    },
    {
      name: "Kamtchatka", category: "nature", coords: [53.25, 158.83], region: "Extrême-Orient russe",
      description: "Une péninsule reculée de volcans actifs, de geysers et d’ours bruns — accessible seulement par avion, et qui vaut chaque rouble.",
      wiki: "Kamchatka Peninsula",
      long:
        "Le Kamtchatka est l’une des dernières grandes contrées sauvages : une péninsule volcanique de l’Extrême-Orient russe, plus proche de l’Alaska que de Moscou et totalement fermée aux étrangers à l’époque soviétique. Plus de 300 volcans, dont une trentaine actifs, jalonnent son épine dorsale ; entre eux s’étendent vallées de geysers, sources chaudes, toundra et rivières si riches en saumons qui fraient qu’elles nourrissent l’une des plus fortes densités d’ours bruns au monde.\n\nIl n’y a presque pas de routes : on se déplace en hélicoptère, en bateau ou en véhicule tout-terrain, et les voyages sont coûteux et dépendent de la météo — mais la récompense, ce sont des paysages que peu de gens voient jamais : cratères fumants, vallée des Geysers, ours pêchant à faible distance. C’est une destination d’expédition sérieuse pour randonneurs, grimpeurs de volcans et amateurs de faune, pas une étape improvisée.",
      practical: [
        { label: "Y aller", value: "Vol jusqu’à Petropavlovsk-Kamtchatski (~9 h depuis Moscou) ; aucune route ne le relie au reste de la Russie." },
        { label: "Se déplacer", value: "Presque pas de routes — on se déplace en hélicoptère, en camion à 6 roues ou en bateau, lors de voyages organisés." },
        { label: "Coût", value: "Cher et dépendant de la météo ; une journée en hélicoptère vers la vallée des Geysers se chiffre en centaines de dollars." },
        { label: "Temps à prévoir", value: "Une semaine ou plus, organisée autour d’une expédition guidée." },
      ],
      stay:
        "C’est un territoire d’expédition : voyages guidés de plusieurs jours avec camps en pleine nature, refuges de montagne et lodges près des volcans et des sources chaudes. Installez-vous à Petropavlovsk entre les excursions, mais l’essentiel est de partir — ours pêchant le saumon, cratères fumants, vallée des Geysers — avec un opérateur qui gère la logistique.",
      tips: [
        "Réservez bien à l’avance auprès d’un opérateur réputé ; voyager en autonomie ici n’est guère réaliste.",
        "Prévoyez des jours de marge — hélicoptères et bateaux sont régulièrement cloués au sol par la météo.",
      ],
    },
    {
      name: "Enclos paroissial de Kiji", category: "history", coords: [62.0678, 35.2242], region: "Lac Onega, Carélie",
      description: "Une église en bois à 22 bulbes construite sans un seul clou, sur une île des lacs du Nord.",
      wiki: "Kizhi Pogost",
      long:
        "Sur une île basse du lac Onega, au pays des lacs de Carélie, se dresse l’un des chefs-d’œuvre de la charpenterie russe : l’église de la Transfiguration, une église en bois du XVIIIe siècle coiffée de 22 bulbes couverts de bardeaux de tremble argentés, empilés en étages et — selon la tradition — élevés sans un seul clou de fer. À côté se trouvent une église d’hiver plus petite et un clocher, l’ensemble enclos par une palissade de rondins.\n\nL’île est devenue un musée en plein air, avec de vieilles maisons paysannes, des chapelles et des moulins à vent rapportés de toute la région pour montrer comment la campagne du nord de la Russie vivait et bâtissait autrefois en bois. Accessible en hydroglisseur depuis Petrozavodsk, de l’autre côté du lac, c’est une journée mémorable dans une Russie plus ancienne que la pierre et l’empire.",
      practical: [
        { label: "Y aller", value: "Hydroglisseur depuis Petrozavodsk à travers le lac Onega (~1 h 15) ; Petrozavodsk est à une nuit de train de Moscou / Saint-Pétersbourg." },
        { label: "Entrée", value: "Musée de l’île ~800 ₽ (~9 $) ; l’hydroglisseur est un billet à part, dépendant de la météo." },
        { label: "Temps à prévoir", value: "Une excursion d’une journée complète ; les hydroglisseurs circulent pendant la saison sans glace (environ fin mai–sept.)." },
        { label: "Saison", value: "Bateaux en été seulement ; en hiver, l’accès se fait en motoneige ou en aéroglisseur lors de sorties organisées." },
      ],
      stay:
        "La plupart viennent pour la journée depuis Petrozavodsk, agréable base au bord du lac avec des hôtels et guesthouses simples. Pour prendre son temps, le pays des lacs de Carélie — le canyon de marbre de Rouskeala, les villages en bois — récompense quelques jours tranquilles en voiture.",
      tips: [
        "Les hydroglisseurs dépendent de la météo — prévoyez un jour de réserve en cas d’annulation.",
        "Associez la visite au parc de montagne de Rouskeala et aux autres sites d’architecture en bois de Carélie.",
      ],
    },
    {
      name: "Souzdal", category: "history", coords: [56.4194, 40.4533], region: "Anneau d’or",
      description: "Une toute petite ville de monastères blancs et de maisons en bois, comme une Russie d’avant la révolution figée dans le temps.",
      wiki: "Suzdal",
      long:
        "Souzdal est le joyau de l’Anneau d’or, ce chapelet de villes anciennes au nord-est de Moscou qui furent le berceau de l’État russe. Presque épargnée par l’industrie et les immeubles, c’est une idylle basse faite de monastères aux murs blancs, d’églises blanchies à la chaux aux coupoles bleues constellées d’étoiles, de maisonnettes en bois aux encadrements de fenêtres sculptés, et de prairies où le bétail paît encore le long de la rivière.\n\nÀ distance de marche, on trouve le monastère fortifié du Sauveur-Saint-Euthyme, le kremlin et sa cathédrale de la Nativité, et un musée en plein air d’architecture en bois. Souzdal est délibérément, profondément d’un autre temps — célèbre pour son hydromel (medovoukha), ses cornichons et sa quiétude —, et une nuit ici, surtout sous la neige, est ce qui vous rapprochera le plus de la Russie provinciale d’avant la révolution.",
      practical: [
        { label: "Y aller", value: "~3 h 30–4 h depuis Moscou : train jusqu’à Vladimir, puis ~45 min de bus ou de taxi jusqu’à Souzdal (qui n’a pas de gare)." },
        { label: "Entrée", value: "Chaque site ~150–400 ₽ ; un billet combiné couvre le kremlin et les monastères." },
        { label: "Temps à prévoir", value: "Une nuit — Souzdal, c’est une atmosphère, surtout à l’aube et au crépuscule." },
        { label: "À ne pas manquer", value: "Le musée d’architecture en bois, le monastère du Sauveur-Saint-Euthyme et la medovoukha (hydromel) locale." },
      ],
      stay:
        "Passez la nuit dans une guesthouse en bois ou un petit hôtel de campagne entre prairies et bulbes — une nuit ici, surtout sous la neige, est ce qui vous rapprochera le plus de la Russie provinciale d’avant la révolution. Goûtez l’hydromel et les cornichons qui font la réputation de la ville, et réveillez-vous face à un kremlin presque désert.",
      tips: [
        "Associez Souzdal à Vladimir lors du même voyage pour une boucle classique de l’Anneau d’or.",
        "Passez la nuit pour avoir les monastères et les prairies au bord de la rivière pour vous aux premières lueurs.",
      ],
    },
    {
      name: "Église du Sauveur-sur-le-Sang-Versé", category: "history", coords: [59.9400, 30.3289], region: "Saint-Pétersbourg",
      description: "Une explosion de mosaïques et de bulbes, bâtie à l’endroit même où le tsar Alexandre II fut assassiné.",
      wiki: "Church of the Savior on Blood",
      long:
        "Dressée en contraste délibéré et coloré avec le néoclassicisme sobre de Saint-Pétersbourg, l’église du Sauveur-sur-le-Sang-Versé a été bâtie à l’endroit exact où le tsar Alexandre II — le « tsar libérateur » qui affranchit les serfs — fut tué par une bombe en 1881. Ses bulbes multicolores groupés font sciemment écho à Saint-Basile à Moscou, une réponse néo-russe à la ville italianisante qui l’entoure.\n\nL’intérieur est une révélation : plus de 7 000 mètres carrés de mosaïques couvrant chaque mur, pilier et voûte de scènes bibliques aux couleurs chatoyantes, l’une des plus grandes collections d’art de la mosaïque au monde. Un reliquaire à baldaquin conserve à l’intérieur les pavés mêmes sur lesquels le tsar est tombé. Compacte et éblouissante, elle se visite au mieux avec une balade le long du canal Griboïedov voisin.",
      practical: [
        { label: "Y aller", value: "Juste à côté de la perspective Nevski, le long du canal Griboïedov, centre de Saint-Pétersbourg ; métro Nevski Prospekt." },
        { label: "Entrée", value: "~550 ₽ (~6 $) ; les billets du soir en été sont plus calmes, avec un superbe éclairage." },
        { label: "Temps à prévoir", value: "45 min–1 heure pour l’intérieur en mosaïques." },
        { label: "Quand", value: "Fermé le mercredi ; les matinées sont les plus calmes pour l’intérieur." },
      ],
      stay:
        "En plein cœur piéton de Saint-Pétersbourg — voyez le guide de l’Ermitage pour vous installer près de la perspective Nevski et des canaux. Cette église, l’Ermitage, le Musée russe et les quais sont tous à une courte et belle promenade les uns des autres.",
      tips: [
        "Prenez un billet du soir en été pour moins de monde sous les mosaïques éclairées.",
        "Longez le canal Griboïedov voisin — l’un des plus jolis tronçons de la ville.",
      ],
    },
    {
      name: "Peterhof", category: "history", coords: [59.8833, 29.9000], region: "près de Saint-Pétersbourg",
      description: "Le palais en bord de mer de Pierre le Grand et sa Grande Cascade de fontaines dorées alimentées par gravité — « le Versailles russe ».",
      wiki: "Peterhof Palace",
      long:
        "Pierre le Grand bâtit Peterhof sur le golfe de Finlande en réponse à Versailles, un manifeste de palais et de jardins proclamant l’entrée de la Russie parmi les puissances européennes. Sa gloire est la Grande Cascade : un escalier monumental de statues dorées et de 64 fontaines dévalant vers un canal qui file tout droit jusqu’à la mer, l’ensemble étant alimenté uniquement par gravité depuis des sources situées sur les hauteurs, sans une seule pompe.\n\nAu-delà de la cascade s’étendent les Jardins bas à la française, parsemés de fontaines-farces qui arrosent les imprudents, de pavillons, et de la modeste villa de Pierre au bord de la mer, Monplaisir. Dévasté pendant la Seconde Guerre mondiale, il a été minutieusement restauré. Venez en hydroglisseur à travers le golfe depuis le centre-ville — l’arrivée par la mer est celle pour laquelle il a été conçu. Les fontaines ne fonctionnent qu’en été.",
      practical: [
        { label: "Y aller", value: "Hydroglisseur depuis le centre de Saint-Pétersbourg à travers le golfe (~30 min) — l’arrivée prévue par les bâtisseurs ; ou en bus/train." },
        { label: "Entrée", value: "Jardins bas (les fontaines) ~1 500 ₽ pour les étrangers ; l’intérieur du Grand Palais est un billet séparé, plus cher." },
        { label: "Saison", value: "Les fontaines fonctionnent environ de fin avril/mai à mi-octobre seulement — vérifiez avant une visite en hiver." },
        { label: "Temps à prévoir", value: "Une demi-journée pour la cascade et les jardins ; davantage avec le palais." },
      ],
      stay:
        "Visité en demi-journée depuis Saint-Pétersbourg, alors logez en ville (voir le guide de l’Ermitage). Prenez l’hydroglisseur à travers le golfe — en arrivant par la mer, comme il se doit — et calez-vous sur la mise en route des fontaines en milieu de matinée.",
      tips: [
        "Venez en hydroglisseur pour l’arrivée par la mer autour de laquelle le palais a été conçu.",
        "Vérifiez la saison des fontaines — elles sont coupées pendant la moitié hivernale de l’année.",
      ],
    },
    {
      name: "Kremlin de Kazan", category: "history", coords: [55.7989, 49.1064], region: "Kazan, Tatarstan",
      description: "Une citadelle aux murs blancs où une cathédrale orthodoxe et une grande mosquée se dressent côte à côte.",
      wiki: "Kazan Kremlin",
      long:
        "Kazan, capitale de la république tatare sur la Volga, est l’endroit où la Russie orthodoxe et le monde tatar musulman se rencontrent, et nulle part ce n’est plus évident que dans son kremlin aux murs blancs. Dans la même citadelle se dressent la tour penchée de Söyembikä, la cathédrale orthodoxe de l’Annonciation et la vaste mosquée Qol-Şärif aux coupoles bleues, reconstruite en hommage à la mosquée détruite lors de la prise de la ville par Ivan le Terrible en 1552.\n\nLe résultat est un monument réellement multiculturel, et la ville qui l’entoure est l’une des plus attachantes de Russie — un endroit animé et prospère, avec sa propre langue tatare, sa cuisine (goûtez les chaussons echpochmak et les plats de viande de cheval) et ses rues piétonnes. Étape du Transsibérien ou escapade d’un week-end depuis Moscou, Kazan offre un tout autre visage du pays.",
      practical: [
        { label: "Y aller", value: "Kazan est une étape du Transsibérien, à un vol court ou ~3 h 30 de train à grande vitesse de Moscou." },
        { label: "Entrée", value: "L’enceinte du kremlin est gratuite ; la mosquée Qol-Şärif et les musées demandent de petits droits d’entrée." },
        { label: "Temps à prévoir", value: "Une demi-journée pour le kremlin ; une journée complète pour la ville et sa cuisine tatare." },
        { label: "À ne pas manquer", value: "La mosquée aux coupoles bleues, la tour penchée de Söyembikä et la rue piétonne Baumana." },
      ],
      stay:
        "Installez-vous près de la rue piétonne Baumana, dans le centre facile à parcourir à pied, à portée du kremlin comme du vieux quartier tatar (Staro-Tatarskaïa Sloboda) au bord du lac. Accordez à Kazan une nuit ou deux pour goûter sa cuisine tatare si particulière et découvrir un visage de la Russie très différent, musulman et orthodoxe.",
      tips: [
        "Goûtez les spécialités tatares — echpochmak, tchak-tchak et kazylyk — dans le vieux quartier tatar.",
        "C’est une étape facile et enrichissante sur le Transsibérien au départ de Moscou.",
      ],
    },
    {
      name: "Veliki Novgorod", category: "history", coords: [58.5220, 31.2700], region: "nord-ouest de la Russie",
      description: "La république marchande médiévale où la Russie est née — un kremlin, des églises anciennes et une démocratie précoce.",
      wiki: "Veliky Novgorod",
      long:
        "Avant l’essor de Moscou, Novgorod « la Grande » était le cœur battant des terres russes : une riche république marchande médiévale reliée au réseau de la Hanse, gouvernée non par un prince seul mais par une assemblée de citoyens, le vétché. Épargnée par le sac mongol, elle conserve certains des plus anciens édifices de Russie, dont la cathédrale Sainte-Sophie du XIe siècle, dans son kremlin au bord de la rivière.\n\nDispersées dans la ville et la campagne alentour se trouvent des églises du XIIe au XIVe siècle, certaines portant encore des fragments de fresques médiévales, et le monument du Millénaire de la Russie résume l’histoire nationale dans le bronze. Calme, facile à parcourir à pied et imprégnée d’histoire, Novgorod est une excursion facile et enrichissante depuis Saint-Pétersbourg pour qui s’intéresse aux origines de la Russie.",
      practical: [
        { label: "Y aller", value: "~3 h depuis Saint-Pétersbourg en bus ou en train rapide Lastotchka — une bonne excursion d’une journée ou d’une nuit." },
        { label: "Entrée", value: "L’enceinte du kremlin et la cathédrale Sainte-Sophie sont en accès libre ; les musées demandent de petits droits d’entrée." },
        { label: "Temps à prévoir", value: "Une journée complète, ou une nuit pour ajouter les églises des alentours et le musée en plein air." },
        { label: "À ne pas manquer", value: "Sainte-Sophie (XIe siècle), le monument du Millénaire de la Russie et le musée d’architecture en bois de Vitoslavlitsy." },
      ],
      stay:
        "Une excursion facile à la journée depuis Saint-Pétersbourg, mais une nuit dans le centre calme et piéton permet d’ajouter les églises médiévales de l’autre rive, ainsi que le monastère Saint-Georges (Iouriev) et le musée d’architecture en bois juste à la sortie de la ville — une pause douce et profondément historique.",
      tips: [
        "Le train rapide Lastotchka depuis Saint-Pétersbourg en fait une sortie facile à la journée.",
        "Traversez la rivière pour les églises de la cour de Iaroslav et le musée en plein air de Vitoslavlitsy.",
      ],
    },
    {
      name: "Îles Solovki", category: "history", coords: [65.0250, 35.7100], region: "Mer Blanche",
      description: "Un monastère-forteresse isolé aux portes de l’Arctique — lieu saint devenu le premier camp de travail soviétique.",
      wiki: "Solovetsky Monastery",
      long:
        "Loin au nord, dans la mer Blanche, l’archipel des Solovki abrite l’un des lieux les plus forts et les plus douloureux de Russie. Un grand monastère orthodoxe fortifié, fondé par des moines au XVe siècle et ceint de murailles massives de blocs de pierre, devint un grand centre spirituel et un lieu de pèlerinage — puis, après la révolution, le prototype du goulag soviétique, le premier et l’un des plus cruels des camps de travail.\n\nLe visiter, c’est porter ces deux histoires à la fois : le monastère restauré et ses églises, le paysage subarctique de lacs et de canaux aménagés par les moines, le jardin botanique qui pousse contre toute attente à cette latitude, et les mémoriaux à ceux qui sont morts dans le camp. Accessible en bateau ou en petit avion pendant le court été, c’est un endroit isolé, émouvant et inoubliable.",
      practical: [
        { label: "Y aller", value: "Vol vers les îles depuis Arkhangelsk, ou bateau depuis Kem/Rabotcheostrovsk (~2 h) en été." },
        { label: "Saison", value: "L’été seulement (environ juin–août) ; la mer Blanche et l’accès sont pris par les glaces en hiver." },
        { label: "Temps à prévoir", value: "2–3 jours pour le monastère, les canaux bâtis par les moines et les îles extérieures." },
        { label: "Se déplacer", value: "À vélo et en bateau pour rejoindre les ermitages, le jardin botanique et les labyrinthes de pierre." },
      ],
      stay:
        "L’unique village compte de modestes guesthouses et un hôtel — restez 2–3 nuits, car la météo et les bateaux rendent la précipitation peu judicieuse. C’est un lieu où porter deux histoires à la fois : le monastère restauré et les mémoriaux du goulag. Entre les deux, parcourez à vélo les canaux bâtis par les moines et rejoignez les ermitages subarctiques.",
      tips: [
        "Organisez-vous autour de la courte saison estivale et prévoyez des jours de marge pour la météo.",
        "Louez un vélo pour rejoindre le jardin botanique, les canaux et les skites isolés.",
      ],
    },
    {
      name: "Isthme de Courlande", category: "beach", coords: [55.2800, 20.9600], region: "Kaliningrad, côte balte",
      description: "Un mince ruban de hautes dunes de sable et de forêt de pins entre lagune et mer Baltique.",
      wiki: "Curonian Spit",
      long:
        "L’isthme de Courlande est un étroit doigt de sable de 98 kilomètres séparant une lagune calme de la Baltique ouverte, partagé entre l’enclave russe de Kaliningrad et la Lituanie. Jamais large de plus de quelques kilomètres, c’est un paysage mouvant fait de certaines des plus hautes dunes « errantes » d’Europe, de forêts de pins plantées pour fixer le sable, de villages de pêcheurs tranquilles et d’immenses vols d’oiseaux migrateurs canalisés le long de la côte chaque printemps et chaque automne.\n\nOn vient ici marcher sur les crêtes des dunes avec la mer d’un côté et la lagune de l’autre, pédaler sur les chemins forestiers et ralentir dans les villages qui faisaient commerce de l’ambre. Site UNESCO apprécié autant pour les siècles d’efforts humains déployés pour empêcher le sable d’engloutir les villages que pour sa beauté naturelle, c’est un coin de Baltique paisible et hors du monde.",
      practical: [
        { label: "Y aller", value: "Depuis Kaliningrad, ~1 h 30 en bus ou en voiture jusqu’à Zelenogradsk, puis le long de l’isthme ; un droit d’entrée au parc s’applique aux véhicules." },
        { label: "Temps à prévoir", value: "Une excursion à la journée, ou une nuit dans un village de l’isthme pour l’aube sur les dunes." },
        { label: "Balades", value: "Des sentiers sur caillebotis montent sur la dune d’Efa ; l’observation des oiseaux culmine pendant les migrations de printemps et d’automne." },
        { label: "À noter", value: "Kaliningrad est une enclave séparée — vérifiez les règles d’entrée et de visa en vigueur avant de planifier." },
      ],
      stay:
        "Logez dans l’un des paisibles villages de pêcheurs et d’ambre de l’isthme (Rybatchi, Morskoïe) plutôt que d’y venir à la journée, pour marcher sur les crêtes des dunes à l’aube avec la Baltique d’un côté et la lagune de l’autre. Un coin lent et hors du monde, fait pour pédaler sur les chemins forestiers et ne presque rien faire.",
      tips: [
        "Parcourez les caillebotis des dunes tôt ou tard ; c’est à midi que le sable est le plus fréquenté et le plus chaud.",
        "Kaliningrad est une enclave à part — vérifiez bien à l’avance les conditions d’entrée en vigueur.",
      ],
    },
    {
      name: "Monts Altaï", category: "trek", coords: [50.7000, 86.2000], region: "sud de la Sibérie",
      description: "Rivières turquoise, sommets glaciaires et vallées nomades, là où la Russie rencontre la Mongolie et le Kazakhstan.",
      wiki: "Altai Mountains",
      long:
        "Là où se rejoignent la Russie, le Kazakhstan, la Mongolie et la Chine, l’Altaï s’élève en un monde intact de sommets glaciaires — couronné par la Béloukha, point culminant sacré du massif —, de rivières glaciaires turquoise, de forêts de mélèzes et de hautes steppes où paissent chevaux et troupeaux. Peu touché par l’industrie, il est vénéré par les traditions spirituelles locales et riche en archéologie, des kourganes scythes à la tombe gelée de la « princesse des glaces » découverte sur le plateau d’Oukok.\n\nL’Altaï russe est un terrain idéal pour les treks de plusieurs jours, l’équitation et le rafting, au départ des villages le long de la route de la Tchouïa — elle-même considérée comme l’une des plus belles routes du monde. Isolé et peu visité, il récompense les voyageurs prêts à camper, chevaucher et marcher dans certains des arrière-pays les plus beaux et les moins fréquentés de Sibérie.",
      practical: [
        { label: "Y aller", value: "Vol jusqu’à Gorno-Altaïsk, puis la route de la Tchouïa — un grand voyage en soi — plus loin dans le massif." },
        { label: "Temps à prévoir", value: "Une semaine ou plus pour le trek, l’équitation ou le rafting." },
        { label: "Randonnée", value: "Treks de plusieurs jours vers la Béloukha, équitation et rafting sur la Katoun, au départ des villages de la route." },
        { label: "À noter", value: "Isolé et peu desservi ; un guide ou un voyage organisé est prudent pour l’arrière-pays." },
      ],
      stay:
        "Installez-vous dans les villages et les turbazas (camps d’hôtes rustiques) le long de la route de la Tchouïa, et campez ou utilisez les refuges de randonneurs sur les itinéraires de plusieurs jours vers la Béloukha. C’est le cœur de la Sibérie de plein air — isolé, peu visité, et idéal pour les voyageurs heureux de chevaucher, marcher et dormir au plus près de la nature.",
      tips: [
        "La route de la Tchouïa est elle-même considérée comme l’une des plus belles routes du monde — prenez votre temps.",
        "Partez avec un guide pour les itinéraires d’altitude ; l’arrière-pays est isolé et exposé aux intempéries.",
      ],
    },
    {
      name: "Mont Elbrouz", category: "trek", coords: [43.3550, 42.4392], region: "Caucase",
      description: "Le plus haut sommet d’Europe, un volcan endormi à deux cônes qui domine le Caucase.",
      wiki: "Mount Elbrus",
      long:
        "Culminant à 5 642 mètres, le mont Elbrouz, à deux sommets et couvert de neiges éternelles, est la plus haute montagne du Caucase et, selon le décompte habituel, de toute l’Europe — l’un des « Sept Sommets ». Volcan endormi, ses cônes glaciaires dominent le massif à la frontière sud de la Russie, et un téléphérique et des télésièges montent étonnamment haut sur son flanc sud, vers les refuges d’où les alpinistes partent à l’assaut du sommet avant l’aube.\n\nAtteindre le sommet est une entreprise sérieuse, soumise aux effets de l’altitude, à mener avec un guide et une bonne acclimatation, mais la vallée de la Baksan en contrebas récompense aussi les non-alpinistes avec ses randonnées, ses sources chaudes et ses paysages sauvages du Caucase. Elle offre une Russie complètement différente des forêts de bouleaux du nord — haute, spectaculaire et méridionale.",
      practical: [
        { label: "Y aller", value: "Vol jusqu’à Mineralnye Vody, puis ~3 h jusqu’à la vallée de la Baksan et la station du téléphérique d’Azaou." },
        { label: "Téléphérique", value: "Les remontées grimpent sur le flanc sud jusqu’à ~3 800 m pour les non-alpinistes en quête de vues d’altitude." },
        { label: "Ascension", value: "Atteindre le sommet (5 642 m) est une entreprise sérieuse, guidée, soumise à l’altitude et exigeant une acclimatation." },
        { label: "Temps à prévoir", value: "Une journée pour le téléphérique et la vallée ; plus d’une semaine pour une tentative de sommet guidée." },
      ],
      stay:
        "Les non-alpinistes s’installent dans les villages de la vallée de la Baksan (Terskol, Azaou), entre sentiers de randonnée et sources chaudes, et montent en téléphérique pour la vue. Les alpinistes logent dans les refuges de montagne — les « Tonneaux » ou plus haut — pour s’acclimater avant de partir vers le sommet avant l’aube, toujours avec un guide.",
      tips: [
        "On peut monter très haut sur l’Elbrouz en téléphérique sans faire d’alpinisme — une superbe demi-journée pour la vue.",
        "Pour le sommet, prévoyez plusieurs jours d’acclimatation et partez avec un guide certifié.",
      ],
    },
    {
      name: "Serguiev Possad", category: "history", coords: [56.3000, 38.1300], region: "Anneau d’or",
      description: "Le cœur spirituel de l’orthodoxie russe — un monastère en activité aux coupoles bleu et or près de Moscou.",
      wiki: "Sergiev Posad",
      long:
        "Excursion facile au nord de Moscou, Serguiev Possad s’est développée autour de la laure de la Trinité-Saint-Serge, le monastère le plus important de Russie et le centre spirituel de l’Église orthodoxe. Fondée au XIVe siècle par saint Serge de Radonège, vénéré comme unificateur des terres russes, c’est un ensemble fortifié de cathédrales, de chapelles et de clochers — les coupoles bleues étoilées d’or de la cathédrale de la Dormition comptant parmi les plus photographiées du pays.\n\nToujours monastère et séminaire en activité, elle bourdonne de moines en robe noire et de pèlerins faisant la queue pour vénérer les reliques de saint Serge ou puiser de l’eau bénite. Ville de l’Anneau d’or la plus proche de Moscou, c’est la façon la plus simple de goûter à la vieille Russie religieuse sans quitter l’orbite de la capitale plus d’une journée.",
      practical: [
        { label: "Y aller", value: "~1 h 30 depuis Moscou : train de banlieue (elektritchka) depuis la gare de Iaroslavl, ou le train express." },
        { label: "Entrée", value: "L’enceinte de la laure de la Trinité est en accès libre ; certaines cathédrales et le musée demandent de petits droits d’entrée." },
        { label: "Temps à prévoir", value: "Une excursion d’une demi-journée." },
        { label: "À ne pas manquer", value: "Les coupoles bleues étoilées d’or de la cathédrale de la Dormition et les pèlerins vénérant saint Serge." },
      ],
      stay:
        "C’est la ville de l’Anneau d’or la plus proche de Moscou et une demi-journée facile, alors la plupart logent dans la capitale. Pour ralentir, associez-la à une boucle d’une nuit passant par Pereslavl-Zalesski ou Rostov Veliki — d’autres vieilles villes ciselées comme des bijoux sur la route du nord.",
      tips: [
        "Habillez-vous sobrement — c’est un monastère en activité ; les femmes se couvrent la tête dans les églises.",
        "Venez un matin de semaine pour éviter à la fois les files de pèlerins et les cars de touristes.",
      ],
    },
    {
      name: "Vladimir", category: "history", coords: [56.1290, 40.4070], region: "Anneau d’or",
      description: "Une ancienne capitale médiévale aux cathédrales de pierre blanche du XIIe siècle et à la Porte d’or triomphale.",
      wiki: "Vladimir, Russia",
      long:
        "Pendant deux siècles au Moyen Âge, avant d’être éclipsée par Moscou, Vladimir fut de fait la capitale de la Russie, et elle conserve la plus belle architecture de cette époque. Ses églises de pierre blanche du XIIe siècle — la cathédrale de la Dormition, dont les fresques comprennent des œuvres du grand peintre d’icônes Andreï Roublev, et la cathédrale Saint-Dimitri aux sculptures exquises — sont des chefs-d’œuvre de la Rus’ prémongole inscrits à l’UNESCO.\n\nLa Porte d’or de la ville, porte triomphale de la même époque, enjambe toujours la rue principale. Juste à la sortie de la ville, la minuscule église de l’Intercession-sur-la-Nerl se dresse seule dans une prairie inondable, l’un des édifices les plus aimés et les mieux proportionnés de toute la Russie. Vladimir s’associe naturellement à Souzdal, toute proche, pour une boucle de l’Anneau d’or.",
      practical: [
        { label: "Y aller", value: "~1 h 45 depuis Moscou en train rapide Strij/Lastotchka — une excursion facile à la journée ou la porte d’entrée vers Souzdal." },
        { label: "Entrée", value: "La Porte d’or et les cathédrales demandent de petits droits d’entrée ; la cathédrale de la Dormition abrite des fresques de Roublev." },
        { label: "Temps à prévoir", value: "Une demi-journée pour Vladimir ; à combiner avec Souzdal pour une boucle d’une nuit." },
        { label: "À ne pas manquer", value: "La solitaire église de l’Intercession-sur-la-Nerl, dans sa prairie inondable juste à la sortie de la ville." },
      ],
      stay:
        "La plupart associent Vladimir à Souzdal (à 45 min) et dorment dans les guesthouses en bois de cette dernière — voir cette fiche. Si vous passez la nuit à Vladimir même, installez-vous près de la Porte d’or et marchez au crépuscule jusqu’à l’église de l’Intercession-sur-la-Nerl, aux proportions parfaites, dans sa prairie.",
      tips: [
        "Associez la ville à Souzdal pour la boucle classique de l’Anneau d’or sur deux villes et une nuit.",
        "Marchez jusqu’à l’église de l’Intercession-sur-la-Nerl — 20 min à travers la prairie, et cela en vaut la peine.",
      ],
    },
  ],
};
