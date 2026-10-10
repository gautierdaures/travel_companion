// Country ID card — schema reference lives in data/index.js
export default {
  code: "kh",
  name: "Cambodge",
  flag: "🇰🇭",
  region: "Asie du Sud-Est",
  tagline: "Les temples-montagnes d’Angkor surgissant de la jungle, et une nation qui renaît.",
  tags: ["history", "beach", "nature", "food", "diving"],

  languages: {
    name: "Khmer",
    note: "Langue non tonale (un soulagement après ses voisines), écrite dans un élégant alphabet aux volutes hérité de l’Inde ancienne. C’est l’un des plus grands alphabets du monde. Un « suostei » chaleureux et une légère inclinaison mains jointes (le sampeah) vous mèneront loin.",
    phrases: [
      { fr: "Bonjour", local: "សួស្តី", pron: "souo-sdeï" },
      { fr: "Merci", local: "អរគុណ", pron: "or-koun" },
      { fr: "Merci beaucoup", local: "អរគុណច្រើន", pron: "or-koun tchreun" },
      { fr: "S’il vous plaît", local: "សូម", pron: "soum" },
      { fr: "Excusez-moi / Pardon", local: "សុំទោស", pron: "som-toh" },
      { fr: "Oui / Non", local: "បាទ/ទេ", pron: "baat (homme) / té" },
      { fr: "C’est combien ?", local: "តម្លៃប៉ុន្មាន？", pron: "thlaï pon-maan ?" },
      { fr: "Où est… ?", local: "…នៅឯណា？", pron: "… nov aé naa ?" },
      { fr: "Délicieux !", local: "ឆ្ងាញ់！", pron: "tchnagn !" },
      { fr: "Santé !", local: "លើកកែវ！", pron: "leuk kaéou !" },
      { fr: "Au revoir", local: "លាហើយ", pron: "léa haeï" },
    ],
  },

  history: {
    summary:
      "Le Cambodge fut le cœur de l’Empire khmer qui, du IXe au XVe siècle, régna sur une grande partie de l’Asie du Sud-Est continentale et bâtit Angkor — le plus grand monument religieux du monde — pour capitale. Après le déclin d’Angkor, le royaume se rétrécit, pris en étau entre ses voisins thaï et vietnamien, et devint un protectorat français au XIXe siècle. L’indépendance, en 1953, céda la place à l’un des chapitres les plus sombres du siècle : les Khmers rouges prirent le pouvoir en 1975 et tuèrent environ un quart de la population avant d’être chassés en 1979. Le Cambodge a passé les décennies suivantes à se reconstruire, et aujourd’hui son peuple — d’une chaleur remarquable au vu de cette histoire — accueille les visiteurs dans un pays de temples, de fleuves et de résilience.",
    timeline: [
      { era: "802–1431 (Empire khmer)", text: "Angkor devient la capitale d’un vaste empire et y bâtit ses grands temples." },
      { era: "1113–1150 (Angkor Vat)", text: "Suryavarman II édifie le plus grand monument religieux du monde." },
      { era: "1863–1953 (protectorat français)", text: "Le Cambodge passe sous administration coloniale française, puis conquiert son indépendance." },
      { era: "1975–1979 (Khmers rouges)", text: "Le régime de Pol Pot vide les villes ; un génocide fait quelque deux millions de morts." },
      { era: "1993 à nos jours", text: "Une monarchie soutenue par l’ONU est restaurée, et le pays se reconstruit et s’ouvre à nouveau." },
    ],
  },

  books: [
    { title: "D’abord, ils ont tué mon père", author: "Loung Ung", year: "2000", note: "Une enfant qui survit aux années khmères rouges — bouleversant et essentiel." },
    { title: "Le Portail", author: "François Bizot", year: "2000", note: "Un chercheur français capturé par les Khmers rouges ; un témoignage direct rare et profondément humain." },
    { title: "River of Time", author: "Jon Swain", year: "1995", note: "L’élégie d’un correspondant de guerre pour l’Indochine des années 1970 et le Phnom Penh disparu." },
    { title: "A History of Cambodia", author: "David Chandler", year: "1983", note: "L’histoire de référence, très lisible, d’Angkor à nos jours." },
  ],

  meals: [
    { name: "Amok de poisson", description: "Le plat national — poisson d’eau douce cuit à la vapeur dans un doux curry coco-citronnelle (kroeung) lié à l’œuf, servi dans une coupelle en feuille de bananier.", tip: "Meilleur là où il est cuit à la vapeur à la commande plutôt que servi à la louche depuis un bac chauffant." },
    { name: "Kuy teav", description: "Une soupe claire de porc et de nouilles de riz mangée au petit-déjeuner, assaisonnée à table de citron vert, d’herbes et de piment." },
    { name: "Lok lak", description: "Dés de bœuf mariné sautés, servis sur un lit de laitue et de tomate avec une sauce citron vert-poivre noir." },
    { name: "Nom banh chok", description: "Les « nouilles khmères » — vermicelles de riz sous une sauce verte au poisson et un tas de légumes crus ; un classique des marchés du matin." },
    { name: "Bai sach chrouk", description: "Porc mariné grillé sur du riz brisé, avec pickles et œuf au plat — le petit-déjeuner cambodgien classique." },
  ],

  climate: {
    unit: "°C",
    note: "Les chiffres sont ceux de Phnom Penh / Siem Reap. Tropical et chaud toute l’année : une saison sèche (nov.–avril) et une mousson humide (mai–oct.). Avril marque le pic féroce de la chaleur.",
    coords: [11.56, 104.92], // Phnom Penh — representative point for the fetch script
    key: "kh",
    best: [11, 12, 1, 2],
    avoid: [4, 5, 6, 7, 8, 9, 10],
    months: [
      { mean: 27, rain: 15 }, { mean: 28, rain: 8 }, { mean: 30, rain: 39 },
      { mean: 30, rain: 88 }, { mean: 29, rain: 154 }, { mean: 28, rain: 156 },
      { mean: 28, rain: 156 }, { mean: 28, rain: 179 }, { mean: 27, rain: 248 },
      { mean: 27, rain: 247 }, { mean: 27, rain: 77 }, { mean: 26, rain: 27 },
    ],
  },

  events: [
    { name: "Nouvel An khmer (Choul Chnam Thmey)", when: "Mi-avril", months: [4], kind: "note", description: "Trois jours de joyeux Nouvel An, mais aussi la période la plus chaude de l’année — Angkor se remplit de visiteurs cambodgiens et beaucoup de commerces des villes font une pause pendant que les familles rentrent chez elles." },
    { name: "Angkor Sankranta", when: "Mi-avril", months: [4], kind: "go", description: "Jeux du Nouvel An, danses et festivités traditionnelles organisés au cœur même des temples d’Angkor — une rare occasion de les voir s’animer." },
    { name: "Pchum Ben (fête des Ancêtres)", when: "Sept. – oct.", months: [9, 10], kind: "note", description: "Une fête solennelle de 15 jours en l’honneur des ancêtres ; les Cambodgiens se pressent dans les pagodes et, les jours fériés, bureaux et beaucoup de boutiques ferment." },
    { name: "Fête des Eaux (Bon Om Touk)", when: "Novembre (pleine lune)", months: [11], kind: "go", description: "La plus grande fête du Cambodge : des millions de personnes envahissent les quais de Phnom Penh pour les courses de pirogues qui marquent l’inversion du courant du Tonlé Sap." },
  ],

  places: [
    {
      name: "Angkor Vat", category: "history", coords: [13.4125, 103.867], region: "Siem Reap",
      description: "L’immense temple-montagne du XIIe siècle, toujours le plus grand monument religieux du monde — arrivez avant l’aube pour le reflet au lever du soleil.",
      wiki: "Angkor Wat",
      long:
        "Angkor Vat est le plus grand monument religieux jamais construit et le symbole du Cambodge, ses cinq tours en bouton de lotus figurant sur le drapeau national. Élevé au début du XIIe siècle par le roi Suryavarman II comme temple hindou dédié à Vishnou — et maquette du cosmos, ses douves figurant l’océan et sa tour centrale le mont Meru —, il fut ensuite adapté au culte bouddhiste et n’a jamais été abandonné.\n\nAu-delà de son échelle vertigineuse, la merveille est dans le détail : près d’un kilomètre de bas-reliefs exquis enveloppant la galerie extérieure, qui racontent les épopées hindoues et le célèbre Barattage de la mer de lait, et des rangées entières de danseuses apsaras sculptées. Le grand classique est d’arriver avant l’aube pour voir les tours se refléter dans le bassin nord pendant que le ciel rosit derrière elles — puis d’explorer les galeries plus fraîches une fois la foule du lever du soleil dispersée.",
      practical: [
        { label: "Pass Angkor", value: "Pass du site : 1 jour 37 $, 3 jours 62 $, 7 jours 72 $ — couvre Angkor Vat, le Bayon, Ta Prohm et tout le parc." },
        { label: "Y aller", value: "~6 km depuis Siem Reap en tuk-tuk (~15–20 $/jour avec chauffeur), à vélo ou en vélo électrique." },
        { label: "Temps à prévoir", value: "Un pass de 3 jours pour rendre justice à Angkor ; Angkor Vat seul demande une demi-journée." },
        { label: "Lever du soleil", value: "Arrivez vers 5 h pour le reflet dans le bassin nord, puis explorez une fois la foule dispersée." },
      ],
      stay:
        "Installez-vous à Siem Reap, dont les guesthouses et hôtels de charme vont du très bon marché aux retraites sereines avec jardin — beaucoup dans les quartiers plus calmes de Wat Bo ou de Kandal Village, loin de Pub Street. Un chauffeur de tuk-tuk engagé pour vos journées de temples devient souvent votre guide et homme à tout faire ; gardez un rythme d’un ou deux temples par jour.",
      tips: [
        "Prenez un pass de 3 jours et dosez vos efforts — la fatigue des temples est bien réelle sous la chaleur.",
        "Portez une tenue correcte (épaules et genoux couverts) pour monter au niveau supérieur d’Angkor Vat.",
      ],
    },
    {
      name: "Ta Prohm", category: "history", coords: [13.4348, 103.889], region: "Parc archéologique d’Angkor",
      description: "Le « temple de la jungle », à demi englouti par les racines des figuiers étrangleurs, plein d’atmosphère et hors du monde.",
      wiki: "Ta Prohm",
      long:
        "Ta Prohm est le temple que la jungle a repris. Volontairement laissé presque tel que l’ont trouvé les explorateurs du XIXe siècle, ses couloirs et ses cours sont enserrés et disloqués par les racines pâles et musclées de figuiers étrangleurs et de fromagers géants, pierre et bois enlacés dans une étreinte au ralenti. L’effet — rendu célèbre par le film « Tomb Raider » — est d’un romantisme unique, un peu mélancolique.\n\nBâti comme monastère et université bouddhistes à la fin du XIIe siècle, il abritait jadis des milliers de serviteurs et une fortune en or et en pierres précieuses, selon sa propre stèle de fondation. Aujourd’hui, on l’aime pour son atmosphère plus que pour sa grandeur ; venez tôt ou tard pour voir la lumière filtrer à travers la canopée sans la cohue, et prenez le temps de trouver les recoins plus petits, enlacés de racines, loin du principal spot photo.",
      practical: [
        { label: "Accès", value: "Dans le parc d’Angkor — couvert par le pass Angkor ; ~20 min en tuk-tuk depuis Angkor Vat." },
        { label: "Temps à prévoir", value: "1 h–1 h 30 ; venez à l’ouverture (~7 h 30) ou en fin d’après-midi pour la lumière et moins de monde." },
        { label: "Meilleur moment", value: "Tôt le matin, avant que les groupes n’atteignent les célèbres recoins enlacés de racines." },
      ],
      stay:
        "Vous visitez depuis Siem Reap (voir le guide d’Angkor Vat). Demandez à votre chauffeur de faire le « petit circuit » dans le sens inverse des aiguilles d’une montre, pour arriver tôt à Ta Prohm avant les cars, puis au Bayon et à Angkor Thom.",
      tips: [
        "Venez à l’ouverture pour les ruines enlacées de racines sans la cohue.",
        "Cherchez les formations de racines plus calmes, loin du principal spot photo de « Tomb Raider ».",
      ],
    },
    {
      name: "Bayon", category: "history", coords: [13.4413, 103.859], region: "Angkor Thom",
      description: "Un temple aux plus de 200 visages de pierre géants et sereins, qui regardent dans toutes les directions depuis ses tours.",
      wiki: "Bayon",
      long:
        "Au centre exact de la cité royale fortifiée d’Angkor Thom se dresse le Bayon, temple d’État du plus prolifique des rois bâtisseurs du Cambodge, Jayavarman VII. De loin, on dirait une montagne de pierre chaotique ; de près, elle se résout en une forêt de tours, chacune sculptée sur toutes ses faces d’un immense visage au sourire serein — plus de 200 en tout —, qui mêlerait les traits d’un bodhisattva à ceux du roi lui-même.\n\nParcourez la terrasse supérieure et les visages semblent vous observer et vous suivre de toutes parts, un effet inoubliable dans la lumière changeante. Plus bas, les galeries extérieures portent de vivants bas-reliefs de la vie quotidienne angkorienne et de grandes batailles contre les Chams. Le Bayon est le pivot d’une journée entière à Angkor Thom, avec la terrasse des Éléphants et le Baphuon tout proches.",
      practical: [
        { label: "Accès", value: "Au centre d’Angkor Thom, dans le parc d’Angkor (couvert par le pass)." },
        { label: "Temps à prévoir", value: "1 h–1 h 30 pour les tours à visages et les galeries de bas-reliefs." },
        { label: "Meilleure lumière", value: "En milieu de matinée ou en fin d’après-midi, quand les visages prennent l’ombre et semblent vous regarder." },
      ],
      stay:
        "Visite depuis Siem Reap (voir le guide d’Angkor Vat). Associez le Bayon au reste d’Angkor Thom — la terrasse des Éléphants, le Baphuon — pour une journée complète et enrichissante dans la cité fortifiée.",
      tips: [
        "L’effet des « visages qui vous regardent » est le plus fort en haut, sur la terrasse supérieure — attardez-vous-y.",
        "Faites tout le circuit d’Angkor Thom plutôt que de visiter le Bayon seul.",
      ],
    },
    {
      name: "Tuol Sleng et les champs de la mort", category: "history", coords: [11.549, 104.917], region: "Phnom Penh",
      description: "Une ancienne école transformée en prison et les champs mémoriels voisins — éprouvant mais essentiel pour comprendre le Cambodge moderne.",
      wiki: "Tuol Sleng Genocide Museum",
      long:
        "Pour comprendre le Cambodge moderne, il faut affronter son chapitre le plus sombre, et ces deux sites à Phnom Penh et dans ses environs le rendent inoubliable. Tuol Sleng (S-21) était un lycée ordinaire que les Khmers rouges transformèrent en prison secrète et en centre de torture, où quelque 12 000 à 20 000 personnes furent détenues, photographiées et envoyées à la mort ; les salles de classe, les cellules et les murs de portraits des victimes sont conservés tels quels.\n\nÀ courte distance, le champ de la mort de Choeung Ek est l’endroit où la plupart de ces prisonniers furent assassinés et enterrés dans des fosses communes ; un stupa mémorial rempli de crânes se dresse aujourd’hui sur le site, et un audioguide vous accompagne avec retenue. C’est bouleversant plutôt qu’agréable — mais visité avec respect, cela honore les victimes et donne un contexte essentiel à tout le reste du pays.",
      practical: [
        { label: "Y aller", value: "Les deux sont à Phnom Penh ou à proximité ; un tuk-tuk pour relier les deux coûte ~15–20 $ le trajet." },
        { label: "Entrée", value: "Tuol Sleng ~5 $ (audioguide +3 $) ; Choeung Ek ~6 $ audioguide compris — les deux en valent vraiment la peine." },
        { label: "Temps à prévoir", value: "Une demi-journée complète, émotionnellement lourde, pour les deux ensemble." },
        { label: "À noter", value: "Bouleversant mais essentiel ; visitez avec respect, en tenue correcte et en parlant à voix basse." },
      ],
      stay:
        "Installez-vous à Phnom Penh près des quais ou dans le quartier plus calme de BKK1, pour les cafés et pouvoir tout faire à pied. Équilibrez la lourde matinée sur ces sites par un après-midi au Musée national ou une croisière au coucher du soleil — la capitale mérite un ou deux jours, pas seulement une étape de transit.",
      tips: [
        "Prenez l’audioguide sur les deux sites — sobre, émouvant, il apporte un contexte essentiel.",
        "Venez le matin et prévoyez quelque chose de doux pour la suite ; il y a beaucoup à absorber.",
      ],
    },
    {
      name: "Koh Rong Samloem", category: "beach", coords: [10.606, 103.302], region: "Golfe de Thaïlande",
      description: "Une île tranquille de sable blanc et de plancton bioluminescent la nuit — l’antidote paisible aux temples.",
      wiki: "Koh Rong Sanloem",
      long:
        "Sœur plus calme et plus paisible de Koh Rong, l’île fêtarde, Koh Rong Samloem est l’idylle insulaire cambodgienne : des baies de sable blanc poudreux adossées à la jungle, une eau de toutes les nuances de bleu, et pas de routes ni de vie nocturne trépidante — seulement de simples bungalows, des hamacs et quelques clubs de plongée. Saracen Bay est le grand arc de sable principal ; Lazy Beach et Sunset Beach offrent plus d’isolement encore.\n\nLa nuit, l’eau offre son propre spectacle de lumière : un plancton bioluminescent qui brille d’un bleu électrique quand on nage à travers, par une nuit sans lune. Les journées sont faites de snorkeling, de kayak ou de balades sur les sentiers de jungle entre les plages. Accessible par un court ferry depuis Sihanoukville, c’est l’endroit parfait pour décompresser quelques jours après l’intensité des temples et de la capitale.",
      practical: [
        { label: "Y aller", value: "Ferry rapide depuis Sihanoukville (~45 min, ~20–25 $ aller-retour) jusqu’à Saracen Bay ou aux autres plages." },
        { label: "Temps à prévoir", value: "3–4 nuits pour vraiment décompresser." },
        { label: "Sur l’île", value: "Snorkeling, kayak et sentiers de jungle entre les plages ; pas de voitures et électricité limitée." },
        { label: "Bioluminescence", value: "Nagez par une nuit sans lune pour voir le plancton briller — rejoignez une petite sortie en bateau le soir." },
      ],
      stay:
        "C’est le royaume du bungalow les pieds dans le sable : de simples cabanes en bois et chaume le long de Saracen Bay, ou des coins encore plus calmes à Lazy Beach et Sunset Beach, accessibles à pied. Électricité et wifi sont limités, et c’est voulu — prévoyez du liquide, installez-vous et laissez les jours se confondre. L’antidote paisible aux temples et à la capitale.",
      tips: [
        "Prévoyez assez de liquide — les distributeurs sont rares et beaucoup d’endroits n’acceptent que les espèces.",
        "Pour le plancton bioluminescent, nagez par une nuit sans lune, loin des lumières.",
      ],
    },
    {
      name: "Battambang", category: "offbeat", coords: [13.0957, 103.2022], region: "nord-ouest du Cambodge",
      description: "Une ville au bord de la rivière, avec ses compartiments chinois de l’époque française, son train de bambou bricolé et certaines des plus belles balades à vélo du pays.",
      wiki: "Battambang",
      long:
        "La deuxième ville du Cambodge porte sa taille avec légèreté : Battambang est une ville décontractée au bord de la rivière, avec les rues les mieux préservées du pays en architecture coloniale française et en compartiments chinois, une scène artistique et circassienne animée, et un rythme lent et attachant qui pousse les voyageurs à rester plus longtemps que prévu. C’est un endroit pour pédaler, manger et observer la vie d’une petite ville plutôt que pour cocher de grands sites.\n\nLa vraie attraction, c’est la campagne alentour : rizières et exploitations de sucre de palme sillonnées de petites routes calmes idéales à vélo, le « norry », train de bambou bricolé, et le Phnom Sampeau avec ses poignantes grottes de la mort et l’exode quotidien, au crépuscule, de millions de chauves-souris jaillissant d’une falaise. Le cirque Phare Ponleu Selpak, qui forme de jeunes artistes issus de milieux difficiles, propose un spectacle à ne pas manquer.",
      practical: [
        { label: "Y aller", value: "~3 h de route depuis Siem Reap ou ~5–6 h depuis Phnom Penh ; le bateau depuis Siem Reap est pittoresque mais lent et saisonnier." },
        { label: "Temps à prévoir", value: "2 nuits pour pédaler, manger et voir la campagne." },
        { label: "Se déplacer", value: "Louez un vélo, ou engagez un chauffeur de tuk-tuk pour la boucle dans la campagne et le Phnom Sampeau." },
        { label: "À ne pas manquer", value: "Le cirque Phare Ponleu Selpak (spectacle le soir) et l’exode des chauves-souris au Phnom Sampeau au crépuscule." },
      ],
      stay:
        "Battambang récompense ceux qui s’attardent : logez dans un compartiment chinois restauré ou une guesthouse au bord de la rivière dans le centre, louez un vélo et laissez-vous porter entre cafés artistiques et rues coloniales. La campagne de rizières et d’exploitations de sucre de palme est faite pour le vélo tranquille, et de petits séjours chez l’habitant là-bas approfondissent l’expérience.",
      tips: [
        "Calez la grotte aux chauves-souris du Phnom Sampeau sur le crépuscule — des millions en sortent en un long ruban pour la soirée.",
        "Assistez à un spectacle du cirque Phare Ponleu Selpak — extraordinaire, et il soutient de jeunes artistes.",
      ],
    },
    {
      name: "Kampot", category: "food", coords: [10.6100, 104.1810], region: "côte sud",
      description: "Une ville rêveuse au bord de la rivière, avec ses compartiments défraîchis, ses célèbres poivrières et ses balades en bateau au coucher du soleil.",
      wiki: "Kampot",
      long:
        "Posée sur une large rivière au pied du sombre mont Bokor, Kampot est l’une des villes les plus reposantes du Cambodge — un quadrillage de compartiments français pastel et défraîchis, de bars au bord de l’eau, et un rythme qui invite à ne presque rien faire. Elle est devenue un refuge pour les voyageurs indépendants et une petite communauté créative, sans perdre son charme endormi et délavé par le soleil.\n\nC’est avant tout une destination de saveurs : les plantations alentour cultivent le poivre de Kampot, une épice à indication géographique protégée prisée des chefs du monde entier, et la visite d’une plantation avec dégustation est un temps fort. Ajoutez les marais salants, les vergers de durians, les croisières au coucher du soleil pour voir les lucioles et des excursions faciles dans la campagne, et Kampot récompense quelques jours vraiment lents.",
      practical: [
        { label: "Y aller", value: "~3 h de route depuis Phnom Penh ou ~1 h 30 depuis Kep." },
        { label: "Temps à prévoir", value: "2–3 nuits tranquilles — Kampot est un endroit pour ne presque rien faire." },
        { label: "À ne pas manquer", value: "La visite d’une plantation de poivre de Kampot avec dégustation, et une croisière aux lucioles sur la rivière au coucher du soleil." },
        { label: "Se déplacer", value: "Louez un vélo ou un scooter pour les plantations, les marais salants et la campagne." },
      ],
      stay:
        "Kampot est faite pour le voyage lent : guesthouses et bungalows au bord de la rivière, juste à la sortie de la ville, avec hamacs au-dessus de l’eau et kayaks à disposition, invitent à poser ses valises. Installez-vous au bord de la rivière, visitez une poivrière, partez voir les lucioles au crépuscule, et laissez le rythme endormi et ensoleillé prendre le dessus quelques jours.",
      tips: [
        "Visitez une plantation de poivre et achetez les grains à indication géographique protégée directement à la source.",
        "Faites une croisière sur la rivière en fin d’après-midi pour le coucher du soleil et les lucioles à la nuit tombée.",
      ],
    },
    {
      name: "Kep", category: "food", coords: [10.4833, 104.3167], region: "côte sud",
      description: "Une station balnéaire défraîchie célèbre pour son marché aux crabes — crabe au poivre mangé face à la mer — et un parc national de jungle.",
      wiki: "Kep National Park",
      long:
        "Jadis retraite balnéaire glamour de l’élite cambodgienne du milieu du XXe siècle, Kep est aujourd’hui un lieu d’une beauté obsédante, avec ses villas modernistes en ruine, envahies par la végétation et dévastées par la guerre, éparpillées dans la verdure, un calme de petite ville et un appétit célèbre. Elle est à deux pas de Kampot et s’y associe naturellement.\n\nLa raison de venir, c’est le crabe : au marché aux crabes du front de mer, on choisit sa prise tout juste sortie de l’eau et on la fait sauter au wok avec les célèbres grains de poivre vert de Kampot — l’un des grands repas du pays, dégusté à une table en plastique au-dessus de l’eau. Éliminez-le sur le sentier en boucle du petit parc national de Kep, derrière la ville, avec ses points de vue sur la mer, ou prenez un bateau pour l’île aux Lapins, paisible et sans voitures, au large.",
      practical: [
        { label: "Y aller", value: "~1 h 30 depuis Kampot ou ~3–4 h depuis Phnom Penh ; facile à associer à Kampot." },
        { label: "Le crabe", value: "Au marché aux crabes, choisissez un crabe frais sauté au wok avec du poivre vert de Kampot — le repas emblématique." },
        { label: "Temps à prévoir", value: "1–2 nuits, ou une excursion facile d’une journée depuis Kampot." },
        { label: "Aussi", value: "Le sentier en boucle du parc national de Kep, et un bateau pour l’île aux Lapins (Koh Tonsay), sans voitures." },
      ],
      stay:
        "Kep est petite et rêveuse — bungalows de charme et guesthouses disséminés parmi les villas modernistes envahies par la végétation en font une base reposante, qui s’associe naturellement à Kampot. Mangez du crabe face à la mer, faites la petite boucle du parc national et prenez un bateau pour la paisible île aux Lapins, pour une nuit de vrai calme, hors réseau.",
      tips: [
        "Mangez le crabe au poivre au marché aux crabes — choisissez-le frais et faites-le cuire sur place.",
        "Faites tôt la boucle du parc national de Kep, puis récompensez-vous d’un déjeuner au bord de l’eau.",
      ],
    },
    {
      name: "Banteay Srei", category: "history", coords: [13.5990, 103.9630], region: "près d’Angkor",
      description: "Un temple miniature du Xe siècle en grès rose, couvert des plus fines sculptures d’Angkor.",
      wiki: "Banteay Srei",
      long:
        "Petit, ciselé comme un bijou et à l’écart du groupe principal d’Angkor, Banteay Srei — la « citadelle des femmes » — passe pour abriter les sculptures les plus exquises de tout l’art khmer. Bâti au Xe siècle et, chose inhabituelle, non par un roi mais par un courtisan brahmane, il est taillé dans un fin grès rose qui accepte des détails étonnamment profonds et nets.\n\nChaque fronton et chaque linteau est un tableau dense, en trois dimensions, de la mythologie hindoue, encadré de rinceaux floraux si délicats qu’on les dirait sculptés dans le bois plutôt que dans la pierre. Comme il est à une demi-heure de route des temples centraux, on l’associe souvent aux sculptures fluviales de Kbal Spean, toutes proches, et il récompense un départ matinal, avant que la lumière ne devienne crue et que la foule n’envahisse ce chef-d’œuvre compact et incontournable.",
      practical: [
        { label: "Accès", value: "~30 min au nord du groupe principal d’Angkor ; couvert par le pass Angkor." },
        { label: "Temps à prévoir", value: "1 heure ; venez tôt, avant que la lumière ne devienne crue et que la foule n’arrive." },
        { label: "Souvent associé", value: "Aux sculptures fluviales de Kbal Spean, toutes proches, pour une demi-journée hors des temples centraux." },
        { label: "Meilleur moment", value: "Tôt le matin, quand le grès rose rayonne et qu’il fait le plus frais." },
      ],
      stay:
        "Visite depuis Siem Reap (voir le guide d’Angkor Vat). Comme c’est à une demi-heure de route, convenez à l’avance de la sortie à Banteay Srei avec votre chauffeur de tuk-tuk — beaucoup l’associent à Kbal Spean et au musée des mines antipersonnel pour une matinée enrichissante loin de la foule.",
      tips: [
        "Venez à l’ouverture — les fines sculptures sont plus belles dans la douce lumière du matin, et le petit site se remplit vite.",
        "Associez-le aux sculptures du ruisseau dans la jungle de Kbal Spean, tout près.",
      ],
    },
    {
      name: "Angkor Thom", category: "history", coords: [13.4460, 103.8590], region: "Parc archéologique d’Angkor",
      description: "La dernière grande capitale fortifiée des Khmers, où l’on entre par des portes monumentales couronnées de visages.",
      wiki: "Angkor Thom",
      long:
        "Angkor Thom — « la Grande Ville » — fut la dernière capitale fortifiée de l’Empire khmer, tracée par Jayavarman VII à la fin du XIIe siècle à la mesure de son ambition : un carré parfait de neuf kilomètres carrés, ceint d’un mur de huit mètres et de larges douves, qui abrita peut-être un million de personnes. On y entre par l’une de cinq portes monumentales, chacune couronnée de la même tour sereine à quatre visages et précédée d’une chaussée bordée de dieux et de démons tirant sur un serpent géant.\n\nÀ l’intérieur se trouvent certains des plus grands monuments d’Angkor, au-delà du Bayon en son centre : la pyramide du Baphuon, l’enceinte du palais royal, et les longs parapets sculptés de la terrasse des Éléphants et de la terrasse du Roi lépreux, d’où les rois-dieux passaient jadis leurs armées en revue. Une journée complète et enrichissante dans l’enceinte.",
      practical: [
        { label: "Accès", value: "Dans le parc d’Angkor (couvert par le pass) ; entrez par la monumentale porte Sud." },
        { label: "Temps à prévoir", value: "Une journée complète pour le Bayon, le Baphuon, l’enceinte du palais et les terrasses." },
        { label: "Se déplacer", value: "En tuk-tuk ou à vélo entre les monuments — la cité fortifiée couvre 9 km²." },
        { label: "Meilleur moment", value: "Partez tôt ; la chaussée des dieux et des démons de la porte Sud est photogénique dans la lumière du matin." },
      ],
      stay:
        "Visite depuis Siem Reap (voir le guide d’Angkor Vat). Angkor Thom est une journée à elle seule — demandez à votre chauffeur l’itinéraire qui relie la porte Sud, le Bayon, le Baphuon et les terrasses sans revenir sur vos pas sous la chaleur.",
      tips: [
        "Entrez par la porte Sud pour sa chaussée de dieux et de démons tirant le serpent.",
        "Accordez une journée entière à la cité fortifiée ; n’essayez pas de l’ajouter à Angkor Vat en une seule matinée.",
      ],
    },
    {
      name: "Temple de Preah Vihear", category: "history", coords: [14.3900, 104.6800], region: "Monts Dângrêk",
      description: "Un spectaculaire temple khmer au sommet d’une falaise, étiré le long d’une crête sur la frontière thaïlandaise.",
      wiki: "Preah Vihear Temple",
      long:
        "Perché au bord d’une falaise de 525 mètres dans les monts Dângrêk, en plein sur la frontière contestée avec la Thaïlande, Preah Vihear est le plus spectaculairement situé de tous les temples khmers. Plutôt qu’une pyramide à étages, il s’étire sur quelque 800 mètres le long d’un éperon, enchaînant sanctuaires, cours et escaliers monumentaux qui gravissent la crête jusqu’à un sanctuaire dominant, très loin en contrebas, les plaines du Cambodge.\n\nBâti sur deux siècles et dédié à Shiva, il est inscrit au patrimoine mondial de l’UNESCO, et sa possession a longtemps été disputée — et parfois bombardée — entre le Cambodge et la Thaïlande ; mieux vaut donc vérifier la situation à la frontière avant de s’y rendre. Isolé et difficile d’accès, atteint par une montée vertigineuse sur l’escarpement, il récompense l’effort par sa grandeur, son histoire et une vue sans égale parmi les temples du pays.",
      practical: [
        { label: "Y aller", value: "Isolé, sur la frontière thaïlandaise, à ~3–4 h de Siem Reap ; un 4×4 ou une moto assure la dernière montée raide." },
        { label: "Entrée", value: "~10 $, plus le transfert obligatoire depuis le pied de la montagne (~25 $ en pick-up partagé)." },
        { label: "Temps à prévoir", value: "Une longue excursion à la journée depuis Siem Reap, ou une nuit dans la ville voisine de Sra Em." },
        { label: "À noter", value: "Vérifiez la situation à la frontière avant de partir — la zone a connu des conflits par le passé." },
      ],
      stay:
        "La base la plus proche est la petite ville de Sra Em (~30 min), avec des guesthouses rudimentaires qui permettent d’atteindre le temple tôt, dans la fraîcheur. L’associer à Koh Ker en chemin transforme une longue journée en une belle boucle d’une nuit vers les temples isolés depuis Siem Reap.",
      tips: [
        "Vérifiez la situation frontalière et sécuritaire avant de partir — l’accès peut fermer sans préavis.",
        "Partez tôt : le sanctuaire au bord de la falaise et la vue sur les plaines sont plus beaux avant la brume de midi.",
      ],
    },
    {
      name: "Koh Ker", category: "offbeat", coords: [13.7840, 104.5400], region: "province de Preah Vihear",
      description: "Une capitale impériale éphémère dans la jungle, couronnée d’un temple-pyramide à sept niveaux.",
      wiki: "Koh Ker",
      long:
        "Pendant une vingtaine d’années au Xe siècle, un roi rival déplaça la capitale khmère loin au nord-est d’Angkor, à Koh Ker, et y bâtit frénétiquement avant qu’elle ne soit de nouveau abandonnée à la forêt. Longtemps isolée et lourdement minée (aujourd’hui déminée le long des parcours de visite), elle est restée agréablement peu fréquentée, et n’a été inscrite à l’UNESCO que récemment.\n\nLa pièce maîtresse est le Prasat Thom, une saisissante pyramide de grès à sept niveaux qui surgit de la jungle sur 36 mètres, plus maya que khmère par sa silhouette, et que l’on peut gravir pour une vue sur la cime des arbres. Temples et sanctuaires épars parsèment la forêt alentour, beaucoup encore à demi sauvages. Associée au temple-ville de Beng Mealea en chemin, c’est une belle journée pour qui veut la grandeur de l’ère angkorienne sans la foule.",
      practical: [
        { label: "Y aller", value: "~2 h–2 h 30 de route depuis Siem Reap ; un billet séparé (~15 $, pas le pass Angkor) est exigé." },
        { label: "Temps à prévoir", value: "Une demi-journée, souvent associée à Beng Mealea en chemin." },
        { label: "À ne pas manquer", value: "Gravir le Prasat Thom, la pyramide à sept niveaux de 36 m, pour la vue sur la forêt." },
        { label: "À noter", value: "Restez sur les chemins déminés — la zone était lourdement minée (les parcours de visite sont déminés)." },
      ],
      stay:
        "En général une excursion à la journée depuis Siem Reap (voir le guide d’Angkor Vat). Pour aller plus loin et plus lentement, associez Koh Ker à Preah Vihear dans une boucle d’une nuit à travers le nord isolé, en dormant à Sra Em, pour la grandeur de l’ère angkorienne quasiment sans foule.",
      tips: [
        "Il faut un billet à part — le pass Angkor ne couvre pas Koh Ker.",
        "Associez-le au temple effondré dans la jungle de Beng Mealea à l’aller.",
      ],
    },
    {
      name: "Sambor Prei Kuk", category: "history", coords: [12.9720, 105.0470], region: "Kampong Thom",
      description: "Des tours de brique préangkoriennes dans une forêt paisible — les temples d’avant Angkor.",
      wiki: "Sambor Prei Kuk",
      long:
        "Des siècles avant l’essor d’Angkor, le royaume du Chenla régnait sur cette terre, et sa capitale, Ishanapura, se dressait ici, à Sambor Prei Kuk. Datant pour l’essentiel du début du VIIe siècle, ses tours-temples de brique éparses — beaucoup octogonales, une forme presque introuvable ailleurs — représentent les racines dont l’architecture khmère classique allait plus tard naître.\n\nDans une forêt calme et ombragée de grands arbres, certaines tours sont enlacées par les racines de figuiers étrangleurs, un peu comme Ta Prohm mais avec une fraction des visiteurs, et leurs murs de brique portent encore de fins « palais volants » et médaillons sculptés. Classé par l’UNESCO et facile d’accès depuis la ville laborieuse de Kampong Thom (étape naturelle à mi-chemin entre Phnom Penh et Siem Reap), c’est une fenêtre paisible et pleine d’atmosphère sur le passé lointain du Cambodge.",
      practical: [
        { label: "Y aller", value: "~30 min depuis Kampong Thom, étape naturelle à mi-chemin entre Phnom Penh et Siem Reap." },
        { label: "Entrée", value: "~10 $ ; un guide local peut être organisé sur place." },
        { label: "Temps à prévoir", value: "2–3 heures parmi les tours de brique dans la forêt." },
        { label: "Meilleur moment", value: "Le matin, pour la lumière fraîche et tachetée sous les arbres." },
      ],
      stay:
        "Coupez le trajet Phnom Penh–Siem Reap par une nuit dans la laborieuse Kampong Thom, dont les guesthouses simples vous placent à 30 minutes de ces paisibles tours préangkoriennes. En y allant tôt, vous aurez sans doute les ruines ombragées et enlacées de racines presque pour vous seul.",
      tips: [
        "Profitez-en pour couper la route Phnom Penh–Siem Reap plutôt que d’en faire une excursion à part.",
        "Venez le matin pour la fraîcheur de la lumière en forêt et une quasi-solitude.",
      ],
    },
    {
      name: "Palais royal et pagode d’Argent", category: "history", coords: [11.5640, 104.9310], region: "Phnom Penh",
      description: "Le cœur doré, toujours royal, de la capitale, avec un temple au sol pavé de dalles d’argent massif.",
      wiki: "Royal Palace, Phnom Penh",
      long:
        "Toujours résidence du roi du Cambodge, le Palais royal est le cœur cérémoniel de Phnom Penh : une enceinte de pavillons aux toits dorés de style khmer classique, bâtie à partir des années 1860, quand la capitale fut transférée ici. La pièce maîtresse est la salle du Trône, avec son toit en flèche et son long intérieur orné de fresques, utilisée pour les couronnements et les cérémonies officielles.\n\nDans l’enceinte se dresse la pagode d’Argent, ainsi nommée pour les plus de 5 000 dalles d’argent massif qui pavent son sol, et qui abrite des trésors dont un Bouddha en or grandeur nature serti de milliers de diamants et un Bouddha d’émeraude vénéré. Ses murs sont enveloppés d’une vaste fresque, un peu passée, du Reamker, la version khmère du Ramayana. Habillez-vous correctement, et associez la visite à l’excellent Musée national voisin pour la plus belle sculpture angkorienne.",
      practical: [
        { label: "Y aller", value: "Sur les quais de Phnom Penh ; à pied depuis les hôtels du centre ou en quelques minutes de tuk-tuk." },
        { label: "Entrée", value: "~10 $ ; tenue correcte strictement exigée — épaules et genoux couverts." },
        { label: "Temps à prévoir", value: "1 h 30–2 heures ; venez tôt pour éviter la chaleur et les groupes en car." },
        { label: "Juste à côté", value: "Le Musée national abrite la plus belle sculpture angkorienne — associez les deux." },
      ],
      stay:
        "Installez-vous près des quais de Phnom Penh ou dans le verdoyant BKK1. Le palais, le Musée national, la promenade au bord du fleuve et les marchés se font tous à pied, pour un ou deux jours tranquilles dans la capitale entre temples et côte — à terminer par une croisière au coucher du soleil sur le Tonlé Sap.",
      tips: [
        "Habillez-vous correctement — épaules et genoux couverts sont exigés à l’entrée.",
        "Associez la visite au Musée national voisin pour la plus belle statuaire angkorienne qui soit.",
      ],
    },
    {
      name: "Station d’altitude de Bokor", category: "offbeat", coords: [10.6300, 104.0500], region: "près de Kampot",
      description: "Une station de montagne française abandonnée et brumeuse, aux ruines inquiétantes et aux vues fraîches sur la forêt de nuages.",
      wiki: "Bokor Hill Station",
      long:
        "Haut au-dessus de Kampot, enveloppé de brume une bonne partie de l’année, Bokor fut une station de montagne bâtie par les Français dans les années 1920 pour fuir la chaleur des plaines — casino, hôtel, église et villas, érigés au prix terrible de la vie de nombreux ouvriers. Abandonnée pendant les décennies de guerre au Cambodge et livrée aux éléments, ses ruines noircies et noyées de brouillard sont devenues célèbres pour leur atmosphère inquiétante, vides au milieu de la forêt de nuages.\n\nLe vieux casino et l’église dominent toujours le plateau, mais la montagne est désormais un parc national, avec une route goudronnée et un réaménagement moderne (et controversé) à côté des ruines. Venez pour l’atmosphère fantomatique quand les nuages roulent sur le plateau, pour l’air frais, les balades en forêt et les cascades, et pour les longues vues vers la côte quand la brume se lève un instant.",
      practical: [
        { label: "Y aller", value: "~40 min par une route goudronnée depuis Kampot, en scooter, en tuk-tuk ou en voiture." },
        { label: "Entrée", value: "L’entrée du parc national est gratuite ; venez avec votre propre transport ou engagez un chauffeur." },
        { label: "Temps à prévoir", value: "Une demi-journée depuis Kampot, idéalement quand les nuages traversent le plateau." },
        { label: "Meilleures conditions", value: "Les jours brumeux et couverts donnent au casino et à l’église en ruine leur atmosphère inquiétante." },
      ],
      stay:
        "Visité en demi-journée depuis Kampot, alors logez là-bas (voir le guide de Kampot). Montez en scooter quand les nuages sont là pour l’effet fantomatique complet, puis redescendez pour un coucher de soleil sur la rivière en ville — une journée classique de Kampot au ralenti.",
      tips: [
        "Allez-y par temps brumeux pour l’atmosphère inquiétante ; un jour clair offre plutôt de longues vues sur la côte.",
        "Prenez une couche légère — il fait nettement plus frais et plus humide sur le plateau.",
      ],
    },
    {
      name: "Kbal Spean", category: "offbeat", coords: [13.7500, 104.0300], region: "près d’Angkor",
      description: "La « rivière aux mille lingas » — des sculptures hindoues dans le lit d’un ruisseau de jungle, rejointes par une randonnée en forêt.",
      wiki: "Kbal Spean",
      long:
        "Au cœur de la forêt des monts Kulen, au-dessus du groupe principal d’Angkor, un torrent de montagne coule sur un lit que les Khmers ont sculpté à même la roche — d’innombrables lingas, des images de Vishnou couché et d’autres divinités hindoues, afin que l’eau elle-même soit sanctifiée en descendant vers les temples et les rizières d’Angkor en contrebas. On l’appelle la « rivière aux mille lingas ».\n\nPour y parvenir, il faut une montée d’environ 45 minutes à travers une jolie jungle, ce qui limite la foule et ajoute au sentiment de découverte ; une petite cascade près du sommet est une belle récompense. Souvent associé au temple exquis de Banteay Srei, tout proche, c’est un agréable changement de rythme par rapport à la tournée des temples — sculpture, forêt et eau vive réunies.",
      practical: [
        { label: "Accès", value: "~45 min au-delà de Banteay Srei, au nord du groupe principal d’Angkor ; couvert par le pass Angkor." },
        { label: "Randonnée", value: "Une montée d’~45 min dans la jungle (dans chaque sens) mène au lit sculpté du ruisseau ; une petite cascade se trouve près du sommet." },
        { label: "Temps à prévoir", value: "Une demi-journée, généralement associée à Banteay Srei." },
        { label: "À prévoir", value: "De l’eau, de bonnes chaussures et un répulsif anti-insectes pour la marche en forêt." },
      ],
      stay:
        "Visite depuis Siem Reap (voir le guide d’Angkor Vat). La montée limite la foule, ce qui en fait un agréable changement de rythme par rapport à la tournée des temples — associez-le à Banteay Srei pour une demi-journée de sculpture, de forêt et d’eau vive.",
      tips: [
        "C’est une vraie randonnée (même courte) — portez de bonnes chaussures et emportez de l’eau.",
        "Associez-le à Banteay Srei, tout proche, pour une demi-journée loin des temples principaux.",
      ],
    },
    {
      name: "Kratié et les dauphins du Mékong", category: "nature", coords: [12.4880, 106.0190], region: "nord-est du Cambodge",
      description: "Une ville endormie au bord du Mékong et les fosses où de rares dauphins de l’Irrawaddy font encore surface.",
      wiki: "Irrawaddy dolphin",
      long:
        "La ville fluviale de Kratié est l’endroit pour voir l’une des créatures les plus rares du Mékong : le dauphin de l’Irrawaddy, un dauphin d’eau douce au museau arrondi, dont il ne reste qu’une infime population en danger critique d’extinction dans les fosses profondes en amont, à Kampi. Une paisible sortie en bateau à l’aube ou au crépuscule donne de bonnes chances de les voir faire surface et rouler — une rencontre émouvante avec une espèce qui s’accroche.\n\nKratié elle-même est une ville sans hâte, aux bâtiments coloniaux défraîchis, avec l’un des plus beaux couchers de soleil sur le Mékong du pays ; juste en face, l’île de Koh Trong se prête à une balade à vélo tranquille à travers rizières, vergers de pomelos et villages de maisons sur pilotis. Hors des circuits touristiques, c’est une étape enrichissante pour les voyageurs qui remontent par la route vers le Laos ou le nord-est du Cambodge.",
      practical: [
        { label: "Y aller", value: "~5–6 h en bus depuis Phnom Penh ; une étape courante sur la route vers le Laos ou le nord-est." },
        { label: "Dauphins", value: "Les sorties en bateau vers les fosses de Kampi (~15 min au nord) coûtent ~7–9 $/personne ; idéales à l’aube ou au crépuscule." },
        { label: "Temps à prévoir", value: "1–2 nuits de vie tranquille au bord du fleuve." },
        { label: "Aussi", value: "Faites le tour à vélo de l’île de Koh Trong, sans voitures, de l’autre côté du fleuve — rizières, vergers de pomelos, séjours chez l’habitant." },
      ],
      stay:
        "Kratié est une ville fluviale sans hâte, aux bâtiments coloniaux défraîchis et aux superbes couchers de soleil sur le Mékong. Restez une nuit ou deux, idéalement en ajoutant un séjour chez l’habitant sur l’île de Koh Trong, sans voitures, juste en face, où l’on pédale entre villages sur pilotis et vergers — une pause vraiment lente, hors des sentiers battus, au bord du Mékong.",
      tips: [
        "Allez voir les dauphins à l’aube ou au crépuscule, quand ils font le plus surface et que le fleuve est calme.",
        "Faites du vélo ou dormez chez l’habitant sur l’île de Koh Trong pour le côté le plus lent et le plus local de Kratié.",
      ],
    },
    {
      name: "Phnom Kulen", category: "nature", coords: [13.5760, 104.0300], region: "près de Siem Reap",
      description: "Le berceau sacré de l’Empire khmer — une montagne sainte de cascades, de sculptures et d’un Bouddha couché.",
      wiki: "Phnom Kulen",
      long:
        "Le Phnom Kulen est la montagne sainte du Cambodge, vénérée comme le berceau de l’Empire khmer — c’est ici qu’en 802 Jayavarman II se fit proclamer « roi-dieu » universel, fondant l’État qui allait bâtir Angkor. Les pèlerins la gravissent toujours, notamment pour le Bouddha couché géant sculpté dans un rocher au temple du sommet.\n\nLe plateau récompense une excursion d’une journée depuis Siem Reap par un mélange de sacré et de fraîcheur : sculptures de lingas et de divinités dans le lit de la rivière, comme à Kbal Spean, sanctuaires anciens, et une cascade très fréquentée où les familles cambodgiennes pique-niquent et se baignent dans les bassins frais — un changement bienvenu par rapport à la chaleur des plaines. C’est un parc national, donc un droit d’entrée séparé s’applique, et la route d’accès difficile rend une excursion guidée ou organisée plus simple.",
      practical: [
        { label: "Y aller", value: "~1 h 30–2 h depuis Siem Reap par une route difficile ; une excursion guidée ou organisée est le plus simple." },
        { label: "Entrée", value: "Un droit séparé d’~20 $ (pas le pass Angkor) ; la route d’accès est à sens unique selon l’heure de la journée." },
        { label: "Temps à prévoir", value: "Une excursion d’une journée complète depuis Siem Reap." },
        { label: "À ne pas manquer", value: "Le Bouddha couché au sommet, les sculptures dans le lit de la rivière et la cascade pour se baigner." },
      ],
      stay:
        "Une excursion d’une journée depuis Siem Reap (voir le guide d’Angkor Vat). Prenez un maillot pour les bassins de la cascade où pique-niquent les familles cambodgiennes — un contrepoint frais et rafraîchissant aux temples — et laissez un chauffeur gérer la route difficile et les horaires à sens unique.",
      tips: [
        "Il faut un billet à part d’~20 $, et la route est à sens unique selon l’heure — une excursion organisée évite bien des tracas.",
        "Prenez un maillot pour la cascade ; c’est l’arrêt le plus rafraîchissant du plateau.",
      ],
    },
  ],
};
