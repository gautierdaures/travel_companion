// Country ID card — schema reference lives in data/index.js
export default {
  code: "cn",
  name: "Chine",
  flag: "🇨🇳",
  region: "Asie de l’Est",
  tagline: "Cinq mille ans d’empire, de l’armée de terre cuite aux mégapoles de néon.",
  tags: ["history", "cities", "trek", "nature", "food"],

  languages: {
    name: "Chinois mandarin",
    note: "Langue tonale — une même syllabe change de sens selon quatre hauteurs différentes : « mā/má/mǎ/mà » sont quatre mots. Le pinyin (romanisation officielle, avec les tons) aide, mais il ne se lit pas comme du français : la prononciation approchée est donnée entre parenthèses. Montrer du doigt et une appli de traduction vont loin. Les langues régionales comme le cantonais sont très différentes.",
    phrases: [
      { fr: "Bonjour", local: "你好", pron: "nǐ hǎo (ni hao)" },
      { fr: "Merci", local: "谢谢", pron: "xiè xie (sié-sié)" },
      { fr: "De rien", local: "不客气", pron: "bú kè qi (bou keu-tchi)" },
      { fr: "S’il vous plaît", local: "请", pron: "qǐng (tching)" },
      { fr: "Excusez-moi / Pardon", local: "对不起", pron: "duì bu qǐ (doueï bou-tchi)" },
      { fr: "Oui / Non", local: "是 / 不是", pron: "shì / bú shì (che / bou-che)" },
      { fr: "C’est combien ?", local: "多少钱？", pron: "duō shǎo qián ? (douo-chao tchienn)" },
      { fr: "Où est… ?", local: "…在哪里？", pron: "… zài nǎ lǐ ? (dzaï na-li)" },
      { fr: "Délicieux !", local: "好吃！", pron: "hǎo chī ! (hao-tche)" },
      { fr: "Santé !", local: "干杯！", pron: "gān bēi ! (gane-beï)" },
      { fr: "Au revoir", local: "再见", pron: "zài jiàn (dzaï-djienn)" },
    ],
  },

  history: {
    summary:
      "La Chine est la plus ancienne civilisation continue du monde, unifiée sous son premier empereur en 221 av. J.-C. et gouvernée par une succession de dynasties — Han, Tang, Song, Ming, Qing — qui ont chacune laissé philosophie, poésie, porcelaine et ouvrages d’ingénierie à une échelle monumentale. La Grande Muraille, le Grand Canal, la poudre à canon, le papier et la boussole viennent tous d’ici. Le dernier empereur tomba en 1912 ; suivirent des décennies de bouleversements, la guerre civile et la fondation de la République populaire en 1949. Depuis les réformes de la fin des années 1970, la Chine est passée d’une société rurale à une superpuissance économique à une vitesse vertigineuse, tandis que temples anciens et maisons de thé subsistent au pied des gratte-ciel.",
    timeline: [
      { era: "221 av. J.-C. (unification Qin)", text: "Le premier empereur unit les Royaumes combattants et normalise l’écriture et les routes." },
      { era: "618–907 (dynastie Tang)", text: "Un âge d’or cosmopolite de poésie, de commerce sur la route de la Soie et d’essor du bouddhisme." },
      { era: "1368–1644 (dynastie Ming)", text: "La Cité interdite est bâtie et la Grande Muraille prend sa forme familière." },
      { era: "1912 (fin de l’empire)", text: "La dynastie Qing tombe ; deux mille ans de régime impérial prennent fin." },
      { era: "1978 à nos jours", text: "Les réformes économiques ouvrent le pays et entraînent des décennies de croissance explosive." },
    ],
  },

  books: [
    { title: "Les Cygnes sauvages", author: "Jung Chang", year: "1991", note: "Trois générations de femmes à travers un siècle de bouleversements en Chine — le classique moderne." },
    { title: "River Town", author: "Peter Hessler", year: "2001", note: "Un enseignant du Peace Corps sur le Yangzi saisit la Chine au seuil du changement." },
    { title: "La Pérégrination vers l’Ouest", author: "Wu Cheng’en", year: "v. 1592", note: "Le pèlerinage du Roi des singes — la grande aventure mythique chérie des Chinois." },
    { title: "Le Problème à trois corps", author: "Liu Cixin", year: "2008", note: "L’histoire de la Révolution culturelle bascule dans la science-fiction cosmique ; un phénomène mondial." },
  ],

  meals: [
    { name: "Canard laqué de Pékin", description: "Canard laqué à la peau croustillante, découpé à table et roulé dans de fines crêpes avec ciboule et sauce hoisin.", tip: "À Pékin, réservez dans une maison spécialisée dans le canard rôti — tout le repas s’organise autour d’un seul oiseau." },
    { name: "Dim sum", description: "Un défilé cantonais de petits plats vapeur et frits — raviolis, brioches, rouleaux — poussés sur des chariots pour le yum cha de fin de matinée." },
    { name: "Fondue chinoise (hot pot)", description: "Un chaudron commun frémissant dans lequel on cuit soi-même viandes et légumes ; la version du Sichuan est d’un piquant qui engourdit." },
    { name: "Xiaolongbao", description: "Les raviolis-soupe de Shanghai — croquez un petit trou, aspirez le bouillon à l’intérieur, puis mangez ; délicieux et brûlants." },
    { name: "Nouilles étirées à la main (lamian)", description: "Une pâte étirée en fils sous vos yeux, venue du nord-ouest musulman — souvent servie dans un bouillon de bœuf clair." },
  ],

  climate: {
    unit: "°C",
    note: "La Chine couvre plusieurs zones climatiques — choisissez le graphique le plus proche de votre itinéraire.",
    regions: [
      {
        name: "Pékin et le nord",
        coords: [39.90, 116.41], // Beijing
        key: "cn-north",
        note: "Continental : hivers glacials et secs, étés chauds. Le printemps et l’automne sont courts et agréables.",
        best: [4, 5, 9, 10],
        avoid: [1, 2, 12],
        months: [
          { mean: -4, rain: 3 }, { mean: 0, rain: 5 }, { mean: 6, rain: 9 },
          { mean: 14, rain: 19 }, { mean: 21, rain: 35 }, { mean: 26, rain: 76 },
          { mean: 27, rain: 166 }, { mean: 25, rain: 125 }, { mean: 21, rain: 56 },
          { mean: 13, rain: 33 }, { mean: 4, rain: 15 }, { mean: -2, rain: 3 },
        ],
      },
      {
        name: "Le sud · Canton et Hong Kong",
        coords: [23.13, 113.26], // Guangzhou
        key: "cn-south",
        note: "Subtropical et humide. Les étés sont chauds, pluvieux et exposés aux typhons ; les hivers restent doux.",
        best: [10, 11, 12],
        avoid: [4, 5, 6, 7, 8, 9],
        months: [
          { mean: 14, rain: 48 }, { mean: 16, rain: 64 }, { mean: 19, rain: 140 },
          { mean: 23, rain: 230 }, { mean: 26, rain: 332 }, { mean: 27, rain: 388 },
          { mean: 28, rain: 260 }, { mean: 28, rain: 295 }, { mean: 27, rain: 178 },
          { mean: 24, rain: 61 }, { mean: 20, rain: 39 }, { mean: 15, rain: 40 },
        ],
      },
      {
        name: "Tibet et Grand Ouest · Lhassa",
        coords: [29.65, 91.14], // Lhasa
        key: "cn-tibet",
        note: "En altitude et sec : journées très ensoleillées mais nuits froides et air raréfié. Le cœur de l’hiver est rude.",
        best: [5, 6, 9, 10],
        avoid: [12, 1, 2],
        months: [
          { mean: -5, rain: 4 }, { mean: -1, rain: 4 }, { mean: 2, rain: 11 },
          { mean: 6, rain: 22 }, { mean: 11, rain: 41 }, { mean: 15, rain: 68 },
          { mean: 15, rain: 124 }, { mean: 14, rain: 117 }, { mean: 12, rain: 56 },
          { mean: 7, rain: 25 }, { mean: -1, rain: 6 }, { mean: -3, rain: 3 },
        ],
      },
    ],
  },

  events: [
    { name: "Fête du Printemps (Nouvel An chinois)", when: "Fin janv. – mi-févr.", months: [1, 2], kind: "avoid", description: "Spectaculaire, mais c’est la plus grande migration humaine du monde : des centaines de millions de personnes rentrent chez elles, trains et vols sont complets des semaines à l’avance, et beaucoup de boutiques et de sites ferment plusieurs jours." },
    { name: "Fête des Lanternes", when: "15e jour après le Nouvel An (février)", months: [2], kind: "go", description: "Elle clôt la période du Nouvel An avec des installations de lanternes lumineuses, des devinettes et des boulettes tangyuan — charmante une fois la cohue des voyages retombée." },
    { name: "Fête de la mi-automne", when: "Sept. – début oct.", months: [9, 10], kind: "go", description: "Les familles se réunissent sous la pleine lune pour partager des gâteaux de lune et allumer des lanternes ; parcs et bords de lac s’animent au crépuscule." },
    { name: "Fête nationale / Semaine d’or", when: "1er – 7 oct.", months: [10], kind: "avoid", description: "Une semaine de congés nationaux pendant laquelle les touristes chinois envahissent tous les grands sites ; attendez-vous à des trains bondés et à des heures de queue à la Grande Muraille et à la Cité interdite." },
  ],

  places: [
    {
      name: "La Grande Muraille (Jinshanling)", category: "history", coords: [40.677, 117.244], region: "près de Pékin",
      description: "Évitez les tronçons bondés au profit de cette section en partie sauvage, en partie restaurée — randonnez de tour en tour avec la muraille pour vous seul.",
      wiki: "Jinshanling",
      long:
        "La Grande Muraille n’est pas un mur mais plusieurs, construits et reconstruits pendant deux mille ans et courant sur des milliers de kilomètres le long de la frontière nord de la Chine. L’erreur de la plupart des visiteurs est de ne la voir qu’à Badaling, la section restaurée, desservie par téléphérique et la plus proche de Pékin, qui déborde de monde. Jinshanling, à deux heures de route de plus, en est l’antidote.\n\nIci, un tronçon de muraille de l’époque Ming chemine sur une crête en lame de couteau, en partie solidement restauré, en partie en ruine et envahi par la végétation, ses tours de guet espacées sur la ligne d’horizon. La balade classique vers l’est en direction de Simatai offre des heures de muraille sur la crête presque pour vous seul, la maçonnerie serpentant au-dessus des collines dans les deux directions — la Grande Muraille telle qu’elle se grave dans l’imaginaire.",
      practical: [
        { label: "Y aller", value: "~2 h 30 depuis Pékin ; un bus touristique part le matin de Wangjing Ouest, ou engagez un chauffeur pour la journée." },
        { label: "Entrée", value: "~65 RMB (~9 $) ; le téléphérique coûte ~40 RMB par trajet." },
        { label: "Randonnée", value: "La marche sur la crête vers l’est en direction de Simatai est un classique de 3–4 h sur des sections restaurées et sauvages." },
        { label: "Temps à prévoir", value: "Une journée complète depuis Pékin ; partez tôt pour devancer la chaleur et les cars." },
      ],
      stay:
        "La plupart viennent pour une longue journée depuis Pékin, mais une nuit dans une guesthouse simple à Jinshanling ou au village de Gubeikou permet de monter sur une muraille presque déserte aux premières lueurs. Pour une expérience plus sauvage, non restaurée, les sections en ruine de Gubeikou et de Jiankou, toutes proches, attirent des randonneurs qui dorment chez l’habitant dans des maisons à cour.",
      tips: [
        "Allez à Jinshanling ou Gubeikou, jamais à Badaling, si vous voulez la muraille pour vous seul.",
        "Portez de bonnes chaussures — les sections sauvages sont raides, abîmées et sans rambarde.",
      ],
    },
    {
      name: "Cité interdite", category: "history", coords: [39.9163, 116.3972], region: "Pékin",
      description: "L’immense palais impérial des empereurs Ming et Qing — 900 bâtiments derrière des murs vermillon, au cœur de la ville.",
      wiki: "Forbidden City",
      long:
        "Pendant près de cinq siècles, de la dynastie Ming à la chute des Qing en 1912, la Cité interdite fut le centre cérémoniel et politique de la Chine et la demeure de l’empereur — une ville fortifiée dans la ville, où les gens ordinaires ne pouvaient entrer sous peine de mort. Derrière des douves et des murs vermillon s’alignent quelque 980 bâtiments conservés le long d’un strict axe nord–sud, chef-d’œuvre de l’urbanisme palatial chinois.\n\nOn entre depuis l’immense place Tian’anmen par une succession de portes et de cours, en passant devant les grandes salles du trône aux toits dorés, jusqu’aux quartiers résidentiels et jardins plus intimes où vivait réellement la famille impériale. C’est gigantesque — prévoyez au moins une demi-journée — et les collections de trésors impériaux du musée du Palais récompensent ceux qui ralentissent au milieu de la foule.",
      practical: [
        { label: "Y aller", value: "Entrée par Tian’anmen (sud) via la ligne 1 du métro ; sortie par la porte nord, la porte du Génie militaire." },
        { label: "Billets", value: "~60 RMB en haute saison / 40 en basse saison. Réservez en ligne plusieurs jours à l’avance avec votre passeport — pas de vente sur place." },
        { label: "Temps à prévoir", value: "Une demi-journée minimum ; les galeries du Trésor et des Horloges coûtent un petit supplément." },
        { label: "Quand", value: "Fermé le lundi. Venez à l’ouverture à 8 h 30 pour devancer les groupes ; évitez la Semaine d’or (1er–7 oct.)." },
      ],
      stay:
        "Logez dans un hôtel installé dans une maison à cour restaurée (siheyuan), dans les hutongs environnants — autour de Dongsi ou de Nanluoguxiang —, pour rejoindre le palais à pied dès l’ouverture et plonger ensuite dans les ruelles de la vieille ville, ses maisons de thé et sa cuisine, plutôt que de venir d’un quartier de tours.",
      tips: [
        "Réservez vos billets en ligne plusieurs jours à l’avance — c’est souvent complet, et le passeport est exigé.",
        "Parcourez-la du sud au nord, puis grimpez sur la colline du parc Jingshan, juste derrière, pour la vue classique sur les toits.",
      ],
    },
    {
      name: "Armée de terre cuite", category: "history", coords: [34.3841, 109.2785], region: "Xi’an",
      description: "Des milliers de soldats d’argile grandeur nature enterrés pour garder le premier empereur, chaque visage modelé individuellement.",
      wiki: "Terracotta Army",
      long:
        "En 1974, des paysans qui creusaient un puits près de Xi’an tombèrent sur l’une des découvertes archéologiques du siècle : une armée enterrée de milliers de soldats de terre cuite grandeur nature, alignés en ordre de bataille pour garder le tombeau de Qin Shi Huang, premier empereur de la Chine unifiée, mort en 210 av. J.-C. Chaque figure est modelée individuellement — visages, coiffures, grades et armures différents — et elles étaient jadis peintes de couleurs vives et équipées de vraies armes.\n\nTrois fosses fouillées sont couvertes de halls semblables à des hangars ; la fosse 1, avec ses rangs serrés de fantassins qui se perdent au loin, est inoubliable. Une grande partie du complexe funéraire de l’empereur reste à fouiller, y compris le tumulus lui-même. Xi’an mérite aussi un séjour plus long, pour ses remparts Ming intacts et la cuisine de son quartier musulman.",
      practical: [
        { label: "Y aller", value: "~1 h depuis Xi’an ; bus touristique 5 (306) depuis la gare, ou voiture avec chauffeur." },
        { label: "Entrée", value: "~150 RMB en haute saison / 120 en basse saison (~17–21 $) ; comprend les trois fosses et le musée." },
        { label: "Temps à prévoir", value: "Une demi-journée — prenez un guide ou un audioguide, car les fosses disent peu de choses sans explications." },
        { label: "Astuce", value: "Gardez la fosse 1 pour la fin, pour que ses rangs serrés soient le point d’orgue." },
      ],
      stay:
        "Installez-vous à l’intérieur des remparts Ming intacts de Xi’an et accordez quelques nuits à la ville — les rues gourmandes du quartier musulman, la Grande Mosquée et une boucle à vélo au sommet des remparts sont aussi mémorables que les guerriers. Une guesthouse à cour près de la tour de la Cloche permet de tout faire à pied.",
      tips: [
        "Prenez un guide ou un audioguide ; les fosses sont déroutantes sans leur histoire.",
        "Associez la visite au quartier musulman pour l’agneau, les galettes et les nouilles étirées à la main qui font la réputation de Xi’an.",
      ],
    },
    {
      name: "Zhangjiajie", category: "nature", coords: [29.317, 110.479], region: "Hunan",
      description: "Des milliers de piliers de grès abrupts surgissant de la brume — le paysage qui a inspiré les montagnes flottantes d’« Avatar ».",
      wiki: "Zhangjiajie National Forest Park",
      long:
        "Le parc forestier de Zhangjiajie protège un paysage qui semble inventé : des milliers de piliers de grès quartzitique, certains hauts de plus de 200 mètres, jaillissant à la verticale de la forêt subtropicale et apparaissant puis disparaissant dans la brume. On le cite volontiers comme une source d’inspiration des montagnes flottantes Hallelujah du film « Avatar », et sur place, l’échelle et l’étrangeté sont à la hauteur de la réputation.\n\nUn réseau de sentiers, d’ascenseurs et de navettes sillonne le parc — l’ascenseur vitré de Bailong grimpe le long d’une falaise, et un pont à fond de verre enjambe un canyon voisin pour ceux qui ont les nerfs solides. Levez-vous tôt et choisissez des sentiers plus calmes pour échapper aux groupes de touristes chinois, et privilégiez les matins de brume, quand les sommets semblent flotter, aux après-midi de ciel bleu.",
      practical: [
        { label: "Y aller", value: "Avion ou train à grande vitesse jusqu’à Zhangjiajie ; le parc forestier est à ~40 min de la ville." },
        { label: "Entrée", value: "~240 RMB en haute saison pour un pass de 4 jours (~34 $) couvrant les navettes du parc ; l’ascenseur vitré de Bailong est en supplément." },
        { label: "Temps à prévoir", value: "2 jours, pour parcourir les sentiers plus calmes et profiter d’un matin de brume." },
        { label: "Meilleures conditions", value: "Les matins de brume, quand les piliers flottent, valent mieux que les après-midi dégagés." },
      ],
      stay:
        "Dormez dans le parc, à Yangjiajie, ou dans le paisible village de Wulingyuan, plutôt qu’en ville à Zhangjiajie — vous serez ainsi sur les sentiers à l’aube, avant l’arrivée des groupes. De simples guesthouses tenues par des familles tujia locales mettent les piliers brumeux à votre porte.",
      tips: [
        "Levez-vous tôt et choisissez des sentiers moins connus pour échapper aux groupes de touristes chinois.",
        "Privilégiez un matin de brume à un après-midi de ciel bleu — c’est le brouillard qui fait la magie.",
      ],
    },
    {
      name: "Rivière Li (de Guilin à Yangshuo)", category: "nature", coords: [24.9, 110.49], region: "Guangxi",
      description: "Glissez entre les pics karstiques et les buffles d’eau peints sur chaque rouleau de la Chine classique — idéalement en radeau de bambou.",
      wiki: "Li River",
      long:
        "Le tronçon de la rivière Li entre Guilin et Yangshuo est le paysage archétypal de la peinture chinoise : des pics karstiques coniques surgissant de l’eau et des rizières, des pêcheurs sur des radeaux de bambou, des buffles d’eau dans les hauts-fonds, le tout adouci par la brume de la rivière. La vue est si célèbre qu’elle figure au dos du billet de 20 yuans.\n\nLa croisière sur la rivière est la manière classique de la découvrir, mais les plaisirs plus calmes se trouvent aux deux extrémités : louer un vélo ou un scooter autour de Yangshuo pour rouler entre les pics, se laisser dériver en radeau de bambou sur la petite rivière Yulong, ou suivre le sentier au bord de l’eau près de Xingping. La ville de Yangshuo est devenue touristique : visez plutôt une nuit au milieu des villages et des rizières, où le paysage est tout l’intérêt.",
      practical: [
        { label: "Y aller", value: "Train à grande vitesse jusqu’à Guilin ou Yangshuo ; la croisière classique relie Guilin à Yangshuo (~4 h)." },
        { label: "Croisière / radeau", value: "Bateaux sur la rivière ~250–450 RMB ; ou une sortie plus courte en radeau de bambou sur la paisible rivière Yulong depuis Yangshuo." },
        { label: "Temps à prévoir", value: "2–3 nuits dans la campagne autour de Yangshuo." },
        { label: "Plus beau tronçon", value: "Xingping, près de la vue du billet de 20 yuans, pour une balade au bord de l’eau et une sortie en radeau." },
      ],
      stay:
        "Logez au milieu des karsts et des rizières plutôt que dans la touristique Yangshuo — une guesthouse à Xingping ou dans un village le long de la rivière Yulong permet de pédaler entre les pics, de dériver en radeau de bambou à l’aube et d’observer les pêcheurs au cormoran sans la foule. Un paysage où ralentir vraiment.",
      tips: [
        "Louez un vélo ou un scooter autour de Yangshuo — la campagne est la vraie attraction.",
        "Les berges de Xingping sont plus calmes et plus jolies que l’artère principale de Yangshuo.",
      ],
    },
    {
      name: "Le Bund et la Concession française", category: "cities", coords: [31.2304, 121.4737], region: "Shanghai",
      description: "Des quais de l’époque coloniale face à une ligne d’horizon futuriste, et derrière, des rues ombragées de platanes — le vieux et le nouveau Shanghai en une seule balade.",
      wiki: "The Bund",
      long:
        "Aucune vue ne saisit mieux la Chine moderne que le Bund au crépuscule : un défilé incurvé de grandes banques et maisons de commerce en pierre des années 1920 — le « Wall Street de l’Orient » de l’époque coloniale de Shanghai — face, de l’autre côté du Huangpu, aux flèches illuminées de néons de Pudong, une ligne d’horizon qui existait à peine il y a trente ans. Parcourez la promenade quand les lumières s’allument, et le contraste fait le reste.\n\nÀ l’intérieur des terres s’étend l’ancienne Concession française, le plus beau quartier de la ville où flâner : des rues ombragées de platanes, bordées d’immeubles Art déco et de maisons de ruelle shikumen, aujourd’hui remplies de cafés, de boutiques et de jardins tranquilles. Ensemble, ils forment un portrait à parcourir à pied du passé stratifié de Shanghai et de sa course effrénée vers l’avenir — à explorer lentement, avec le temps d’un repas dans une maison de ruelle.",
      practical: [
        { label: "Y aller", value: "Centre de Shanghai ; le métro dessert les deux, séparés par une longue et agréable marche." },
        { label: "Coût", value: "Gratuit ; le Bund est plus beau au crépuscule, quand Pudong s’illumine de l’autre côté du fleuve." },
        { label: "Temps à prévoir", value: "Une journée complète à pied, plus une soirée sur la promenade." },
        { label: "Aussi", value: "Traversez vers Pudong en métro ou en ferry, ou montez dans une tour, pour voir la ligne d’horizon de l’autre côté." },
      ],
      stay:
        "Logez dans un hôtel de charme installé dans une maison de ruelle (lilong/shikumen) de l’ancienne Concession française — rues de platanes, cafés et boutiques à votre porte, et le Bund à une marche ou un saut de métro. C’est la tranche de ville la plus pleine d’atmosphère et la plus agréable à parcourir à pied pour s’y sentir chez soi.",
      tips: [
        "Parcourez la promenade du Bund au crépuscule, quand les tours de Pudong s’illuminent — le contraste, c’est tout le spectacle.",
        "Perdez un après-midi dans les rues secondaires, les jardins et les cafés de maisons de ruelle de la Concession française.",
      ],
    },
    {
      name: "Jiuzhaigou", category: "offbeat", coords: [33.2603, 103.918], region: "Sichuan",
      description: "Une haute vallée de lacs et de cascades d’un turquoise invraisemblable, alimentés par la fonte des neiges et entourés de villages tibétains.",
      wiki: "Jiuzhaigou",
      long:
        "Haut sur le rebord oriental du plateau tibétain, la vallée de Jiuzhaigou — « la vallée des neuf villages », pour les hameaux tibétains qu’elle abrite — renferme un chapelet de lacs aux couleurs si intenses qu’on les croirait teintés : turquoise, émeraude et cobalt, une limpidité due à l’eau riche en minéraux et aux terrasses de calcaire, reliés par des cascades et des hauts-fonds de travertin. Caillebotis et navettes mènent d’un bassin à l’autre à travers la forêt.\n\nSacrée pour les Tibétains locaux et encadrée de sommets enneigés, elle est au sommet de sa splendeur à l’automne, quand la forêt alentour change de couleur et se dédouble dans l’eau immobile. Un séisme en 2017 a fermé le parc pendant un temps et le nombre de visiteurs est désormais limité : réservez à l’avance — et pensez à l’associer aux terrasses de calcite de Huanglong, toutes proches.",
      practical: [
        { label: "Y aller", value: "Vol jusqu’à l’aéroport de Jiuzhai Huanglong, ou une longue et belle route depuis Chengdu (~8–10 h)." },
        { label: "Entrée", value: "~190 RMB en haute saison + ~90 RMB de navette (les prix ont changé à plusieurs reprises — vérifiez) ; le nombre de visiteurs par jour est limité, réservez à l’avance." },
        { label: "Temps à prévoir", value: "1–2 journées complètes sur les caillebotis et le réseau de navettes du parc." },
        { label: "Quand", value: "L’automne (octobre) est le pic des couleurs et de la foule ; l’altitude garde les journées fraîches." },
      ],
      stay:
        "Installez-vous dans une guesthouse tenue par des Tibétains dans les villages juste à l’extérieur de l’entrée du parc, pour goûter la cuisine locale, vous acclimater à l’altitude et passer l’entrée parmi les premiers. Associez la vallée aux terrasses de calcite de Huanglong, toutes proches, pour quelques jours lumineux en altitude.",
      tips: [
        "Réservez vos billets à l’avance — le nombre de visiteurs par jour est limité depuis le séisme de 2017.",
        "Le site est à plus de 2 000 m ; allez-y doucement sur les efforts le premier jour.",
      ],
    },
    {
      name: "Grottes de Mogao", category: "history", coords: [40.0417, 94.8096], region: "Dunhuang, Gansu",
      description: "Mille ans de peinture rupestre bouddhiste sur la route de la Soie — les « grottes des Mille Bouddhas ».",
      wiki: "Mogao Caves",
      long:
        "Dans l’oasis de Dunhuang, là où la route de la Soie se divisait pour contourner le désert du Taklamakan, moines et marchands ont creusé et décoré des centaines de grottes bouddhistes dans une falaise pendant un millénaire, à partir du IVe siècle. Près de 500 subsistent, leurs murs et plafonds couverts de peintures murales — apsaras volantes, contes des jatakas, portraits de donateurs — et remplies de statues d’argile peinte, formant ensemble l’un des plus grands trésors d’art bouddhique au monde.\n\nC’est aussi ici qu’une « grotte-bibliothèque » murée a livré des dizaines de milliers de manuscrits médiévaux, dont le Sūtra du Diamant imprimé, en grande partie emportés plus tard vers des musées étrangers. Les visites sont strictement encadrées pour protéger les pigments fragiles — horodatées, guidées, et tournant sur une sélection de grottes —, mais la rencontre avec un tel âge et un tel art, aux confins du désert, est profonde.",
      practical: [
        { label: "Y aller", value: "~25 min depuis Dunhuang, elle-même accessible en train à grande vitesse ou en avion depuis Xi’an / Lanzhou." },
        { label: "Billets", value: "~238 RMB en haute saison (~34 $) ; réservez en ligne bien à l’avance — le nombre de visiteurs par jour est strictement limité." },
        { label: "Format de visite", value: "Entrée horodatée, guidée, en petit groupe, sur une sélection tournante de grottes ; photos interdites à l’intérieur." },
        { label: "Temps à prévoir", value: "Une demi-journée, y compris les deux films d’introduction au centre d’accueil." },
      ],
      stay:
        "Logez dans l’oasis de Dunhuang, agréable base sur la route de la Soie, et accordez-lui deux nuits : promenade à dos de chameau au lac du Croissant de lune et aux dunes des Sables chantants au coucher du soleil, puis visite des grottes le lendemain matin. De petites guesthouses près du marché de nuit vous gardent près de la cuisine et du désert.",
      tips: [
        "Réservez vos billets en ligne plusieurs jours à l’avance — les places sur place sont très limitées.",
        "Prenez une petite lampe — les grottes sont volontairement non éclairées pour protéger les pigments (mais pas de photos).",
      ],
    },
    {
      name: "Palais du Potala", category: "history", coords: [29.6558, 91.1170], region: "Lhassa, Tibet",
      description: "L’imposant palais d’hiver des dalaï-lamas, blanc et rouge, qui domine Lhassa du haut de sa colline sacrée.",
      wiki: "Potala Palace",
      long:
        "Gravissant treize étages sur la colline Rouge au-dessus de Lhassa, le palais du Potala est le grand symbole du Tibet : un monastère-forteresse aux murs blanchis à la chaux et au corps central pourpre, demeure des dalaï-lamas du XVIIe siècle jusqu’à l’exil du quatorzième en 1959. À l’intérieur, des centaines de pièces — chapelles, salles de méditation et tombeaux dorés et sertis de joyaux des anciens dalaï-lamas —, auxquelles on accède par un sombre labyrinthe d’escaliers raides et de couloirs éclairés à la lampe à beurre.\n\nÀ 3 700 mètres, l’altitude se fait vraiment sentir : acclimatez-vous avant la montée, et sachez que les visites sont horodatées et que les permis pour le Tibet doivent être obtenus à l’avance via un circuit organisé. En contrebas, le circuit des pèlerins de la vieille ville et le temple du Jokhang, noir de fidèles qui se prosternent, sont tout aussi mémorables que le palais.",
      practical: [
        { label: "Y aller", value: "À Lhassa ; le Tibet exige un permis et un circuit réservé, organisés bien à l’avance pour les visiteurs étrangers." },
        { label: "Billets", value: "~200 RMB en haute saison ; entrée par créneau horaire réservé la veille, avec une limite stricte d’une heure à l’intérieur." },
        { label: "Temps à prévoir", value: "Une demi-journée avec la montée ; davantage pour la vieille ville et le Jokhang." },
        { label: "Altitude", value: "Lhassa est à ~3 700 m — acclimatez-vous deux jours avant la montée." },
      ],
      stay:
        "Logez dans le vieux quartier tibétain autour du Barkhor et du Jokhang, pas dans la ville nouvelle chinoise — vous vous réveillerez au milieu des pèlerins, des moulins à prières et des temples éclairés à la lampe à beurre, à distance de marche de tout. Une guesthouse à cour y fait une base pleine d’atmosphère pour vous acclimater avant le palais.",
      tips: [
        "Passez deux jours à vous acclimater à l’altitude avant d’attaquer les escaliers du palais.",
        "Le temple du Jokhang et le circuit des pèlerins du Barkhor sont aussi inoubliables que le Potala lui-même.",
      ],
    },
    {
      name: "Pingyao", category: "history", coords: [37.1917, 112.1750], region: "Shanxi",
      description: "Une ville Ming et Qing entièrement fortifiée, faite de maisons à cour en brique grise, de banques et de temples — la vieille Chine intacte.",
      wiki: "Pingyao",
      long:
        "Pingyao est la vieille ville fortifiée la mieux préservée de Chine : toute une ville Ming et Qing encore enserrée dans ses remparts du XIVe siècle, avec son quadrillage de rues, ses maisons à cour en brique grise, ses temples et ses devantures largement intacts. Au XIXe siècle, elle fut une improbable capitale financière — les premières banques de traites de Chine, ancêtres du chèque moderne, y furent fondées — et leurs locaux fortifiés se visitent encore.\n\nL’astuce est de passer la nuit, une fois les visiteurs d’un jour partis : dormez dans une auberge aménagée dans une maison à cour, marchez au sommet des remparts, et laissez les rues éclairées de lanternes vous ramener dans le passé. La province du Shanxi alentour ajoute le monastère suspendu et des grottes plus loin, mais Pingyao même est ce lieu rare où l’on peut simplement vivre dans la vieille Chine pendant un jour ou deux.",
      practical: [
        { label: "Y aller", value: "Train à grande vitesse jusqu’à la gare de Pingyao Ancient City, puis un court trajet jusqu’aux remparts." },
        { label: "Entrée", value: "~125 RMB pour le billet combiné (~18 $), valable quelques jours, couvrant les remparts et ~20 sites." },
        { label: "Temps à prévoir", value: "1–2 nuits — l’astuce est de rester après le départ des visiteurs d’un jour." },
        { label: "Se déplacer", value: "La ville fortifiée compte peu de voitures ; explorez-la à pied ou à vélo." },
      ],
      stay:
        "Dormez à l’intérieur des remparts dans une auberge installée dans une maison à cour de l’époque Qing — lits-poêles (kang), salles de bois, lanternes rouges —, pour marcher sur les remparts à l’aube et avoir les ruelles éclairées de lanternes pour vous la nuit. Passer la nuit, c’est tout l’intérêt de Pingyao : c’est là qu’on peut simplement vivre dans la vieille Chine.",
      tips: [
        "Restez la nuit — la ville se transforme une fois les cars partis.",
        "Le billet combiné couvre les anciennes banques de traites et les temples ; faites le tour complet des remparts au coucher du soleil.",
      ],
    },
    {
      name: "Rizières en terrasses de Longji", category: "nature", coords: [25.9500, 110.1300], region: "Guangxi",
      description: "L’« échine du Dragon » — des flancs de montagne sculptés en terrasses courbes par les communautés zhuang et yao.",
      wiki: "Longsheng Rice Terraces",
      long:
        "Dans les collines au nord de Guilin, des générations de paysans zhuang et yao ont sculpté des montagnes entières en rizières en terrasses empilées et incurvées, qui épousent chaque courbe des pentes — l’« échine du Dragon », Longji. Des villages de bois s’accrochent aux crêtes au milieu d’elles, et des sentiers relient des points de vue d’où les terrasses se déploient en contrebas comme des courbes de niveau devenues réelles.\n\nLes terrasses changent avec les saisons : brillantes comme des miroirs sous l’eau au printemps, d’un vert profond en été, et d’un or bruni avant la récolte d’automne. Marcher de village en village, comme entre Ping’an et Dazhai, loger dans une guesthouse en bois et — avec de la chance — tomber sur un marché local en sont les récompenses. Les femmes yao rouges d’ici sont célèbres pour leurs cheveux qu’elles ne coupent jamais de leur vie.",
      practical: [
        { label: "Y aller", value: "~2 h de bus depuis Guilin jusqu’à Longsheng ; une navette monte jusqu’aux départs de sentiers de Ping’an et de Dazhai." },
        { label: "Entrée", value: "~100 RMB en haute saison / 80 en basse saison (~11–14 $) ; de petites télécabines desservent les points de vue les plus hauts au-dessus de Dazhai." },
        { label: "Randonnée", value: "Marchez de village en village entre Ping’an et Dazhai (~4–5 h) pour le meilleur des terrasses." },
        { label: "Quand", value: "Inondées et brillantes comme des miroirs au printemps ; d’un vert profond en été ; dorées avant la récolte d’automne." },
      ],
      stay:
        "Passez la nuit dans une guesthouse en bois d’un village de crête — Ping’an, plus facile, ou Dazhai, plus calme — pour voir les terrasses à l’aube et au crépuscule, une fois les visiteurs d’un jour partis. La plupart sont tenues par des familles zhuang et yao, et un dîner maison de riz cuit dans un tube de bambou fait partie de l’expérience.",
      tips: [
        "Passez la nuit dans un village pour voir les terrasses dans la lumière douce que les excursions à la journée manquent.",
        "Voyagez léger — rejoindre les guesthouses des crêtes demande souvent de monter des marches à pied ou avec un porteur.",
      ],
    },
    {
      name: "Hongcun", category: "history", coords: [29.9800, 117.9800], region: "Anhui",
      description: "Un village Huizhou de carte postale, aux murs blancs et aux tuiles noires, qui se reflète dans un étang bordé de lotus.",
      wiki: "Hongcun",
      long:
        "Au pied des monts Huangshan, Hongcun est le village par excellence de l’ancienne culture marchande de Huizhou : murs blanchis à la chaux et toits de tuiles noires, avant-toits relevés et salles de bois sculpté, disposés — selon la tradition — en forme de bœuf, avec un réseau de canaux amenant l’eau à chaque porte. L’étang de la Lune, immobile, et le lac en bordure du village offrent les reflets en miroir classiques.\n\nLa richesse des marchands de sel de Huizhou a payé les sculptures exquises de bois, de brique et de pierre à l’intérieur des salles des ancêtres et des maisons à cour. Hongcun et son voisin Xidi sont inscrits à l’UNESCO et, logiquement, très prisés des peintres et des photographes : venez tôt ou restez la nuit pour avoir les ruelles pour vous, et associez la visite à une ascension du Huangshan voisin.",
      practical: [
        { label: "Y aller", value: "~1 h de bus depuis la ville de Huangshan (Tunxi) ; souvent associé à une ascension du Huangshan." },
        { label: "Entrée", value: "~104 RMB (~15 $), valable quelques jours." },
        { label: "Temps à prévoir", value: "Une demi-journée, ou une nuit sur place pour avoir les ruelles pour vous." },
        { label: "Aux alentours", value: "Le village jumeau de Xidi et le mont Huangshan sont tous deux tout proches." },
      ],
      stay:
        "Passez la nuit dans une guesthouse aménagée dans une maison à cour Huizhou restaurée, à l’intérieur de Hongcun, pour flâner dans le village et ses ruelles d’eau à l’aube et au crépuscule — reflets sur l’étang de la Lune, peintres à leur chevalet — une fois les groupes partis. Il s’associe parfaitement à un lever de soleil sur le Huangshan le lendemain.",
      tips: [
        "Venez tôt ou restez la nuit ; la mi-journée amène groupes de touristes et cours de peinture d’étudiants.",
        "Associez-le au village voisin de Xidi et à une ascension du Huangshan pour deux ou trois jours en pays Huizhou.",
      ],
    },
    {
      name: "Huangshan (Montagne jaune)", category: "trek", coords: [30.1333, 118.1667], region: "Anhui",
      description: "Pics de granit, pins tourmentés et mers de nuages — la montagne qui a façonné la peinture de paysage chinoise.",
      wiki: "Huangshan",
      long:
        "Peu de lieux ont autant influencé l’art chinois que le Huangshan, la « Montagne jaune », dont les pics de granit, les pins noueux accrochés à la roche nue et les mers de nuages ondulantes sont peints et décrits depuis des siècles. L’expérience classique consiste à monter (à pied ou en téléphérique) dans ce monde d’escaliers de pierre et de belvédères vertigineux, et à passer la nuit au sommet pour voir le soleil se lever sur une mer de nuages.\n\nLes pics ont leurs noms et leurs légendes, les pins sont célébrés un à un, et des sources chaudes bouillonnent au pied de la montagne. Il peut y avoir foule et, dans les nuages, aucune vue pendant un temps — mais quand la brume s’écarte pour révéler des pinacles flottant au-dessus du blanc, on comprend aussitôt pourquoi des générations de peintres n’ont cessé d’y revenir. Associez-le aux villages Huizhou de Hongcun et Xidi en contrebas.",
      practical: [
        { label: "Y aller", value: "Train à grande vitesse jusqu’à Huangshan Nord, puis bus jusqu’à la station du téléphérique à Tangkou." },
        { label: "Entrée", value: "~190 RMB en haute saison (~27 $) + téléphérique ~80–90 RMB par trajet ; ou montez par les escaliers de pierre (plusieurs heures)." },
        { label: "Temps à prévoir", value: "2 jours / 1 nuit au sommet pour voir le lever du soleil sur la mer de nuages." },
        { label: "Attention", value: "Les hôtels du sommet sont chers et rudimentaires — réservez bien à l’avance, surtout pour les week-ends et les jours fériés." },
      ],
      stay:
        "La magie ici, c’est de dormir sur la montagne : réservez des mois à l’avance un hôtel du sommet (spartiate et coûteux) pour être là-haut au lever du soleil sur la mer de nuages, puis redescendez tranquillement. Avant et après, installez-vous à Tangkou ou dans les villages Huizhou en contrebas pour des chambres moins chères et plus confortables.",
      tips: [
        "Passez la nuit au sommet pour la mer de nuages au lever du soleil — c’est la raison de venir.",
        "Prévoyez des couches chaudes et un poncho ; les sommets sont froids, humides et souvent dans les nuages.",
      ],
    },
    {
      name: "Vieille ville de Fenghuang", category: "offbeat", coords: [27.9481, 109.5990], region: "Hunan",
      description: "Des maisons sur pilotis penchées au-dessus de la rivière Tuo, dans une ville riveraine des peuples miao et tujia.",
      wiki: "Fenghuang County",
      long:
        "Posée sur la rivière Tuo dans les collines de l’ouest du Hunan, Fenghuang — le « Phénix » — est une vieille ville d’une rare beauté, faite de maisons en bois sur pilotis (diaojiaolou) penchées au-dessus de l’eau, de ponts de pierre en arc et de ruelles ornées de lanternes, dans une région historiquement peuplée par les minorités miao et tujia. Des bateliers poussent à la perche des barques plates sous les ponts, et la nuit, les reflets des lumières font de la rivière un ruban de couleurs.\n\nL’écrivain Shen Congwen, dont les récits ont fait connaître la ville, y est enterré, et sa maison natale fait partie des visites. Fenghuang est devenue animée et commerçante le long des quais : flânez dans les ruelles de l’arrière et dans les villages miao alentour pour des coins plus calmes — et voyez-la comme une étape naturelle entre les piliers de Zhangjiajie et le reste du sud-ouest.",
      practical: [
        { label: "Y aller", value: "~1 h de bus depuis Jishou (train à grande vitesse), ou ~4 h depuis Zhangjiajie." },
        { label: "Coût", value: "L’entrée dans la ville est libre ; un billet combiné (~128–148 RMB) couvre les musées et la balade en bateau." },
        { label: "Temps à prévoir", value: "1–2 nuits — elle est plus belle illuminée la nuit et calme tôt le matin." },
        { label: "Aussi", value: "De longues barques passent sous les ponts à la perche ; les villages miao des environs méritent une excursion." },
      ],
      stay:
        "Logez dans une guesthouse sur pilotis au bord de la rivière Tuo, pour vous réveiller avec les bateliers et la brume, et voir la ville avant la foule de la journée et après celle des nuits illuminées de néons. Flânez dans les ruelles de l’arrière et jusqu’aux villages miao alentour pour les coins plus calmes et plus authentiques.",
      tips: [
        "Installez-vous au bord de la rivière mais explorez les ruelles de l’arrière — les quais sont la bande animée et commerçante.",
        "Les reflets des lumières la nuit sont l’image emblématique ; restez la nuit pour les voir.",
      ],
    },
    {
      name: "Grand Bouddha de Leshan", category: "history", coords: [29.5450, 103.7717], region: "Sichuan",
      description: "Un Bouddha de 71 mètres sculpté dans une falaise au bord du fleuve au VIIIe siècle — le plus grand Bouddha de pierre du monde.",
      wiki: "Leshan Giant Buddha",
      long:
        "Au confluent de trois rivières, près de la ville de Leshan au Sichuan, un moine de l’époque Tang entreprit en 713 de sculpter un Bouddha colossal dans la falaise de grès rouge, espérant que les travaux — et le mérite — apaiseraient les eaux tumultueuses qui faisaient chavirer les bateaux en contrebas. Achevé quatre-vingt-dix ans plus tard, le Maitreya assis mesure 71 mètres, ses oreilles à elles seules plus longues qu’un homme, ce qui en fait le plus grand Bouddha de pierre prémoderne au monde.\n\nOn peut l’admirer depuis un bateau sur le fleuve, qui embrasse d’un coup toute la silhouette sereine, ou descendre un escalier raide taillé dans la falaise à ses côtés pour un gros plan vertigineux sur ses pieds et ses orteils. Un ingénieux système de drainage caché maintient la statue debout depuis plus de mille ans. Le mont Emei voisin, montagne bouddhiste sacrée, s’y associe naturellement.",
      practical: [
        { label: "Y aller", value: "~1 h en train à grande vitesse de Chengdu à Leshan, puis bus jusqu’au parc." },
        { label: "Entrée", value: "~80 RMB (~11 $) ; un bateau pour voir la statue entière est en supplément (~70 RMB)." },
        { label: "Temps à prévoir", value: "Une demi-journée ; l’escalier dans la falaise, à côté du Bouddha, connaît de longues files aux heures de pointe." },
        { label: "Points de vue", value: "Le bateau pour voir d’un coup toute la silhouette sereine, ou l’escalier vertigineux pour un gros plan." },
      ],
      stay:
        "La plupart viennent pour la journée depuis Chengdu, mais une nuit à Leshan permet de devancer les files de l’escalier à l’ouverture et d’associer le Bouddha au mont Emei voisin, montagne sacrée fraîche et parsemée de temples qui mérite à elle seule une nuit dans une guesthouse de monastère.",
      tips: [
        "Arrivez à l’ouverture — l’escalier de la falaise, à file unique, est très encombré dès le milieu de matinée.",
        "Prenez aussi le bateau pour voir la statue entière d’un seul regard ; puis associez la visite au mont Emei.",
      ],
    },
    {
      name: "Grottes de Yungang", category: "history", coords: [40.1100, 113.1330], region: "Datong, Shanxi",
      description: "51 000 statues bouddhistes sculptées dans des falaises de grès au Ve siècle, des plus imposantes aux plus minuscules.",
      wiki: "Yungang Grottoes",
      long:
        "Juste à la sortie de Datong, les grottes de Yungang sont l’un des plus anciens et des plus grands ensembles de sculpture rupestre bouddhiste de Chine, taillés dans une crête de grès au Ve siècle sous la dynastie des Wei du Nord. Quelque 45 grottes principales abritent plus de 50 000 statues, d’un serein Bouddha assis de 17 mètres de haut à d’innombrables figurines miniatures couvrant les parois, mêlant styles indien, d’Asie centrale et chinois à l’époque où le bouddhisme s’enracinait en Chine.\n\nUne grande partie des pigments d’origine subsiste dans les intérieurs abrités, et la densité de la sculpture — chaque surface est travaillée — est saisissante. Datong elle-même, ancienne capitale des Wei, ajoute une vieille ville reconstruite et, à une heure de là, le monastère suspendu qui défie la gravité, accroché à une paroi : cette ville charbonnière et enfumée fait une base étonnamment riche.",
      practical: [
        { label: "Y aller", value: "~20 min à l’ouest de Datong en bus ou en taxi ; Datong est desservie par le réseau à grande vitesse." },
        { label: "Entrée", value: "~120 RMB (~17 $) ; une navette électrique relie l’entrée aux grottes." },
        { label: "Temps à prévoir", value: "Une demi-journée pour les grottes ; une journée complète avec les autres sites de Datong." },
        { label: "Aux alentours", value: "Le monastère suspendu, qui défie la gravité, est à ~1 h 30 et s’y associe naturellement." },
      ],
      stay:
        "Installez-vous à Datong, ancienne capitale des Wei, dont la vieille ville reconstruite compte des guesthouses à cour à l’intérieur des remparts. Accordez-lui une nuit ou deux pour associer Yungang au monastère suspendu accroché à la falaise et à l’ancienne pagode en bois de Yingxian — un coin du Shanxi étonnamment riche et peu visité.",
      tips: [
        "Venez tôt pour la meilleure lumière dans les intérieurs abrités, encore peints, des grottes.",
        "Associez Datong au monastère suspendu et à la pagode en bois de Yingxian pour un itinéraire complet.",
      ],
    },
    {
      name: "Lac de l’Ouest", category: "nature", coords: [30.2500, 120.1500], region: "Hangzhou, Zhejiang",
      description: "Le lac des digues, des saules et des pavillons dans la brume, qui définit l’idée chinoise de la beauté depuis un millénaire.",
      wiki: "West Lake",
      long:
        "Depuis plus de mille ans, le lac de l’Ouest à Hangzhou est le modèle même du paysage chinois raffiné, célébré sans fin par les poètes et les peintres et imité dans les jardins de toute l’Asie de l’Est. Des digues bordées de saules, construites par les poètes-gouverneurs Bai Juyi et Su Dongpo, traversent l’eau ; des ponts en arc et des pavillons au bord du lac encadrent les vues, et des pagodes s’élèvent sur les collines alentour.\n\nLe plaisir est doux et civilisé : flânez ou pédalez sur les digues, prenez un bateau jusqu’aux pavillons des îles, et partez à la recherche des « dix paysages » — chacun une ambiance saisonnière qui porte un nom, des lotus de l’été au clair de lune sur l’eau. Hangzhou est aussi la capitale chinoise du thé : montez dans les plantations en terrasses de Longjing (le « Puits du Dragon »), dans les collines derrière le lac, pour une tasse à la source.",
      practical: [
        { label: "Y aller", value: "Hangzhou est à ~1 h de Shanghai en train à grande vitesse ; le lac est accessible à pied depuis le centre." },
        { label: "Coût", value: "Les rives et les digues sont gratuites ; les bateaux vers les îles coûtent ~55–70 RMB." },
        { label: "Temps à prévoir", value: "Une journée complète et tranquille pour flâner ou pédaler sur les digues et chercher les « dix paysages »." },
        { label: "Aussi", value: "Montez à pied dans les terrasses de thé de Longjing (Puits du Dragon), dans les collines derrière le lac." },
      ],
      stay:
        "Logez près du lac ou dans les collines à thé de Longjing, où des guesthouses avec jardin se nichent au milieu des terrasses. Hangzhou récompense quelques jours lents — pédalez sur les digues, prenez un bateau jusqu’aux pavillons des îles et montez dans les plantations pour un thé à la source, loin de la foule des rives.",
      tips: [
        "Parcourez les digues Bai et Su à vélo ou à pied tôt le matin, avant que la foule ne s’installe.",
        "Montez dans les villages à thé de Longjing pour une théière de thé vert là où il pousse.",
      ],
    },
    {
      name: "Zhangye Danxia", category: "nature", coords: [38.9600, 100.1300], region: "Gansu",
      description: "Des collines rayées comme un arc-en-ciel, en bandes de grès rouge, orange et or, dans le nord-ouest aride.",
      wiki: "Zhangye National Geopark",
      long:
        "Dans le Gansu aride, sur l’ancien corridor de la route de la Soie, des millions d’années de couches de grès et de dépôts minéraux ont été plissées, inclinées et érodées en une chaîne de collines basses rayées de bandes invraisemblables rouge rouille, orange, crème et vertes — les « montagnes arc-en-ciel » de Zhangye Danxia. Caillebotis et plateformes d’observation mènent aux meilleurs points de vue sur les crêtes rubanées.\n\nLes couleurs s’animent dans la lumière basse et chaude — tôt le matin ou, mieux encore, l’heure qui précède le coucher du soleil, et surtout juste après la pluie, quand les teintes s’intensifient. C’est un détour facile et photogénique lors d’un voyage le long du corridor du Hexi entre Xi’an et Dunhuang, qui s’associe naturellement à l’art de la route de la Soie des grottes de Mogao, plus à l’ouest.",
      practical: [
        { label: "Y aller", value: "~40 min depuis Zhangye, sur le corridor ferroviaire à grande vitesse Lanzhou–Dunhuang." },
        { label: "Entrée", value: "~54 RMB + ~20 RMB de navette (~11 $) entre les quatre plateformes d’observation." },
        { label: "Temps à prévoir", value: "2–3 heures, à caler en fin d’après-midi." },
        { label: "Meilleure lumière", value: "Tôt le matin ou l’heure qui précède le coucher du soleil — et juste après la pluie, quand les couleurs s’intensifient." },
      ],
      stay:
        "Une étape facile sur la route de la Soie entre Xi’an et Dunhuang : installez-vous une nuit dans la ville de Zhangye (guesthouses confortables près de la gare), allez voir les collines arc-en-ciel au coucher du soleil, et poursuivez vers l’ouest jusqu’aux grottes de Mogao. Elle s’intègre parfaitement à un voyage lent en train le long du corridor du Hexi.",
      tips: [
        "Visez la dernière lumière avant le coucher du soleil — les bandes de couleur s’animent sous le soleil bas.",
        "Juste après la pluie, c’est encore mieux ; le soleil cru de midi aplatit les teintes.",
      ],
    },
  ],
};
