// Liste des recettes sous forme d'objets respectant l'interface Ramen
var Ramens = [
    {
        nom: "Ramen solo de la demi flemme",
        createur: "Kumquat",
        ingredients: [
            "un pak choi",
            "des champi séchés",
            "2 oeufs",
            "des oignons grillés tout prêt",
            "du miso",
            "de la sauce soja",
            "du tahini",
            "de la déco, le sesame",
            "nouilles de ton choix"
        ],
        consignes: [
            "Chauffer 1L d'eau à la bouilloire et mettre 800ml dans une casserole avec les nouilles et le pak choi coupé.",
            "Verser les 200ml restant d'eau bouillante sur les champignons dans un bol.",
            "Mélanger miso, tahini, sauce soja dans un récipient.",
            "Faire bouillir 1L d'eau, verser 800ml dans la casserole et garder les 200ml restant au chaud.",
            "Casser les œufs un à un dans un ramequin, faire un tourbillon dans l'eau frémissante, et y ajouter les œufs.",
            "Plonger les œufs dans l'eau froide après 3 min.",
            "Égoutter les nouilles et le pak choi.",
            "Verser l'eau des champignons dans le mélange miso tahini et fouetter.",
            "Dresser le ramen avec les œufs, les oignons frits et la déco."
        ],
        temps_preparation: "15 min"
    },
    {
        nom: "Ramen de la full flemme",
        createur: "Kumquat",
        ingredients: [
            "Champignons (1 gros ou 3 petits)",
            "Une gousse d'ail",
            "Légumes (navet, carotte)",
            "Sauce soja",
            "Sriracha",
            "Bouillon de légumes",
            "Nouille instant",
            "1 œuf",
            "Tahini (optionnel)"
        ],
        consignes: [
            "Faire revenir les champignons, l'ail et les légumes dans l'huile neutre avec sauce soja et sriracha.",
            "Couvrir avec le bouillon de légumes et ajouter les nouilles instant.",
            "Ajouter l'œuf pour le pocher.",
            "Optionnel : Ajouter du tahini pour rendre le bouillon crémeux.",
            "Laisser cuire 2 minutes et servir."
        ],
        temps_preparation: "15 min"
    },
    {
        nom: "Ramen Penta",
        createur: "Penta",
        ingredients: [
            "2 carottes",
            "1 oignon",
            "Pak choi ou chou chinois",
            "2 pattes de poulet",
            "Gingembre",
            "Champignons shijemi ou champignons de Paris",
            "Cive",
            "Coriandre",
            "Miso",
            "Sauce huitre",
            "Sauce soja sucrée",
            "Ail",
            "Huile de sésame",
            "Bâton de citronnelle",
            "Nouilles chinoises"
        ],
        consignes: [
            "Couper les légumes et les pattes de poulet.",
            "Faire cuire dans une marmite avec miso et porter à ébullition.",
            "Cuire le poulet avec de l'ail, de l'huile de sésame et de la sauce huitre.",
            "Faire revenir les champignons avec de l'huile de sésame et de la sauce soja sucrée.",
            "Faire cuire les nouilles à part.",
            "Dresser avec le bouillon, les légumes, le poulet et les champignons."
        ],
        temps_preparation: "1h"
    },
    {
        nom: "Ramen végé",
        createur: "Kumquat",
        ingredients: [
            "2 pak choi",
            "2 carottes",
            "300g de haricots mungo",
            "200g de tofu ferme",
            "2 cuillères à soupe de miso rouge",
            "2 cuillères à soupe de tahini",
            "200g de nouilles soba",
            "1 cuillère à soupe de gochujang",
            "10 cl de vinaigre de riz",
            "Huile de sésame",
            "Oignons frits",
            "1 cuillère à café de sel",
            "Sauce soja",
            "Huile de tournesol"
        ],
        consignes: [
            "Couper les carottes en julienne et les mariner dans du vinaigre de riz et du sel.",
            "Couper les pak choi et les immerger dans l'eau chaude.",
            "Rincer les haricots mungo et les faire griller dans une poêle avec de l'huile.",
            "Couper le tofu en petits rectangles, les enduire de gochujang et les poêler.",
            "Faire chauffer l'eau avec le tahini et le miso pour le bouillon.",
            "Cuire les nouilles dans de l'eau bouillante.",
            "Égoutter les légumes, mixer le bouillon pour le rendre crémeux et assembler les bols."
        ],
        temps_preparation: "30 min"
    },
    {
        nom: "Ramen Mallou",
        createur: "Mallou",
        ingredients: [
            "Algues konbu",
            "Flocons de bonite séchée",
            "Carcasse de poulet",
            "1 oignon",
            "4 cm de gingembre",
            "Sauce soja",
            "Dashi",
            "Champignons bruns",
            "Œufs",
            "Mirin",
            "Saké",
            "Huile de sésame",
            "Cébette",
            "Algues nori",
            "Nouilles à ramen"
        ],
        consignes: [
            "Préparer le bouillon avec les algues, la bonite, l'oignon, l'ail et le gingembre.",
            "Ajouter du dashi, mijoter pendant 30-40 minutes.",
            "Filtrer le bouillon, ajouter les champignons, l'œuf mariné et les garnitures.",
            "Dresser les bols avec des nouilles, du bouillon, et les garnitures."
        ],
        temps_preparation: "1h"
    },
    {
        nom: "Ramen évolutions",
        createur: "Kumquat",
        ingredients: [
            "Sauce soja",
            "Œufs mollets marinés",
            "Champignons grillés",
            "Bouillon de légumes",
            "Nouilles",
            "Tahini",
            "Oignons cebette"
        ],
        consignes: [
            "Préparer un ramen classique avec sauce soja, œufs, champignons, bouillon et nouilles.",
            "Optionnel : Ajouter du tahini pour un bouillon crémeux."
        ],
        temps_preparation: "15 min"
    },
    {
        nom: "Ramen Kumquat",
        createur: "Kumquat",
        ingredients: [
            "Tomates grillées",
            "Carottes en pickle express",
            "Pois chiches vapeur",
            "Shiitake séchés réhydratés",
            "Nouilles de riz noir et de patate douce",
            "Bouillon de légumes",
            "Œufs mollets",
            "Graines de sésame",
            "Brisures d'oignons frits",
            "Huile de sésame grillée"
        ],
        consignes: [
            "Griller les tomates, préparer les carottes en pickle express.",
            "Faire cuire les shiitakes et les nouilles.",
            "Mélanger le bouillon avec le tahini et le miso, assembler les bols."
        ],
        temps_preparation: "30 min"
    }
];
var Tartinade = [
    {
        nom: "Tuto, comment arriver à quasiment 2kg de houmous",
        createur: "Ekairos",
        ingredients: [
            "1kg de pois chiches",
            "Purée de sésame",
            "500g de pois chiches supplémentaires",
        ],
        consignes: [
            "Aimer beaucoup le houmous (condition indispensable).",
            "Partir avec une base de 1kg de pois chiches.",
            "Se faire avoir avec une purée de sésame trop forte.",
            "Rajouter 500g de pois chiches pour compenser.",
            "Constater que ça sent encore beaucoup le sésame.",
            "???",
            "S'empiffrer.",
        ],
        temps_preparation: "Variable selon le niveau d'empiffrage.",
    },
    {
        nom: "Pesto de fane de radis",
        createur: "Camille",
        ingredients: [
            "Une botte de radis",
            "60g d'amandes grillées hachées finement",
            "40g de parmesan râpé",
            "90ml d'huile d'olive",
            "Épices au choix",
            "Une gousse d'ail hachée finement",
            "Sel",
        ],
        consignes: [
            "Rincer les fanes, les hacher.",
            "Mettre dans un pot avec les amandes grillées, le parmesan, l'huile d'olive, les épices, l'ail et le sel.",
            "Mélanger.",
            "Déguster puis laisser au frigo pour reprendre plus tard.",
        ],
        temps_preparation: "15-20 minutes",
    },
    {
        nom: "TAPENADE de BETTERAVES",
        createur: "zA",
        ingredients: [
            "500g de betteraves",
            "1 cuillère à soupe d'huile d'olive",
            "1 cuillère à café de miel",
            "1 cuillère à soupe de vinaigre de vin ou balsamique",
            "1 gousse d'ail moyenne",
            "Sel",
            "3 cuillères à café de crème fraîche épaisse",
        ],
        consignes: [
            "Couper les betteraves en dés ou lamelles.",
            "Faire chauffer l'huile dans une sauteuse.",
            "Ajouter les betteraves, mélanger, et cuire à feu moyen-faible.",
            "Ajouter le miel, mélanger et couvrir.",
            "Quand les betteraves sont tendres, déglacer au vinaigre.",
            "Mixer les betteraves avec l'ail écrasé jusqu'à obtenir une texture lisse.",
            "Ajouter la crème fraîche progressivement et ajuster selon le goût.",
            "Laisser refroidir au frigo pendant au moins 2 heures avant de déguster.",
        ],
        temps_preparation: "2 heures (avec temps de repos)",
    },
    {
        nom: "Pâte de haricots",
        createur: "Heatz",
        ingredients: [
            "Haricots secs (trempés 12h)",
            "Eau bouillante et sel (ou sucre pour sucré)",
            "Optionnel : miel, sucre roux, fécule, agar-agar",
        ],
        consignes: [
            "Tremper les haricots secs pendant au moins 12h.",
            "Cuire à ébullition environ 1h jusqu'à ce qu'ils soient moelleux.",
            "Égoutter en gardant l'eau de cuisson décantée.",
            "Écraser ou mixer les haricots pour obtenir une purée.",
            "Ajouter de l'eau de cuisson pour ajuster la consistance.",
            "Option : ajouter du sucre, du miel ou des épices pour une version sucrée.",
        ],
        temps_preparation: "13 heures (incluant le trempage)",
    },
    {
        nom: "Tartinade haricots blancs",
        createur: "Apo",
        ingredients: [
            "1 boîte de haricots blancs (ou haricots cuits)",
            "1 feuille de laurier",
            "60mL de bouillon",
            "Ail (en grande quantité)",
            "Sel",
            "Huile d'olive",
        ],
        consignes: [
            "Faire chauffer l'huile à feu doux.",
            "Ajouter les gousses d'ail tranchées finement et cuire jusqu'à ce qu'elles soient parfumées (sans dorer).",
            "Ajouter les haricots, la feuille de laurier et le sel.",
            "Faire cuire à feu moyen-fort en remuant.",
            "Ajouter le bouillon et cuire jusqu'à ce qu'il soit réduit de moitié.",
            "Retirer la feuille de laurier et écraser le mélange jusqu'à obtenir une texture crémeuse.",
        ],
        temps_preparation: "20 minutes",
    },
];
// Dictionnaire des recettes
var Soupe = [
    {
        nom: "Velouté d'été",
        createur: "Camille",
        ingredients: [
            "1 demi concombre",
            "40 à 50 feuilles de basilic",
            "1 petit brocoli cuit à la vapeur",
            "1 bol de pois chiches cuits avec de l'ail",
            "quelques glaçons",
            "sel",
            "poivre",
            "huile d'olive"
        ],
        consignes: [
            "Mixer tous les ingrédients jusqu'à obtention d'une texture lisse.",
            "Servir frais."
        ],
        temps_preparation: "10 minutes"
    },
    {
        nom: "Soupe de petits pois pimpée",
        createur: "Kumquat",
        ingredients: [
            "500g de petits pois (surgelés)",
            "300ml d'eau",
            "1 cube de bouillon (Kubor)",
            "125g de lardons",
            "3 tranches de pain"
        ],
        consignes: [
            "Cuire les petits pois dans l'eau avec le cube de bouillon pendant 25 minutes.",
            "Faire griller les lardons dans une poêle.",
            "Mixer les petits pois dans leur bouillon pendant au moins 3 minutes.",
            "Griller le pain et le couper en cubes.",
            "Servir la soupe dans des bols et garnir avec les lardons et les cubes de pain."
        ],
        temps_preparation: "35 minutes"
    },
    {
        nom: "Gaspacho andalou",
        createur: "Hibou",
        ingredients: [
            "1 beau concombre",
            "600 à 800g de tomates bien mûres",
            "2 ou 3 poivrons rouges",
            "2 ou 3 gousses d'ail",
            "2 cuillères à soupe de vinaigre de vin rouge",
            "2 cuillères à soupe d'huile d'olive",
            "1 litre d'eau fraîche",
            "sel"
        ],
        consignes: [
            "Éplucher le concombre et l'ail, laver et couper les légumes.",
            "Mixer les légumes avec la moitié de l'eau jusqu'à obtention d'un mélange lisse.",
            "Filtrer le coulis à l'aide d'un chinois ou d'une étamine pour retirer les fibres et graines.",
            "Ajouter le reste de l'eau, l'huile, le sel et le vinaigre.",
            "Laisser reposer au frais plusieurs heures avant de servir."
        ],
        temps_preparation: "20 minutes (+ quelques heures au frais)"
    },
    {
        nom: "Soupe butternut noix de cajou",
        createur: "Anonyme",
        ingredients: [
            "800g de butternut coupée en cubes",
            "1 oignon",
            "1 échalote",
            "2 gousses d'ail",
            "400ml de bouillon de légumes",
            "2 carottes coupées en morceaux",
            "le jus d'une orange",
            "200g de noix de cajou",
            "10ml de crème de coco",
            "sel",
            "poivre",
            "curcuma ou curry"
        ],
        consignes: [
            "Faire revenir l'oignon, l'échalote et l'ail.",
            "Ajouter les cubes de butternut et laisser cuire 3 minutes.",
            "Ajouter les carottes, le bouillon, le jus d'orange, les noix de cajou, le sel, le poivre et le curcuma/curry.",
            "Cuire sous pression et laisser redescendre la pression.",
            "Ajouter la crème de coco, mixer, et servir."
        ],
        temps_preparation: "30 minutes"
    }
];
// Dictionnaire des recettes
var Tarte = [
    {
        nom: "Tarte tomate",
        createur: "Camille Doggo",
        ingredients: [
            "2 œufs",
            "1 grosse cuillère à soupe de moutarde à l'ancienne",
            "3-4 grosses cuillères de crème",
            "de la sauce tomate",
            "1 pâte à tarte",
            "rondelles de tomates",
            "rondelles de chèvre (optionnel)"
        ],
        consignes: [
            "Mélanger les œufs, la moutarde, la crème et la sauce tomate.",
            "Étaler la pâte, verser le mélange, puis disposer les rondelles de tomates et de chèvre.",
            "Cuire au four 20-30 minutes à 180-200°C."
        ],
        temps_preparation: "10 minutes (+ 20-30 minutes de cuisson)"
    },
    {
        nom: "Quiche kumquatienne",
        createur: "Kumquat",
        ingredients: [
            "10g de beurre",
            "10g de farine",
            "250ml de lait",
            "1/2 c. à café de muscade",
            "1/2 c. à café de sel",
            "une pincée de poivre",
            "200g de farine",
            "15g d'huile d'olive",
            "90ml d'eau",
            "1 œuf",
            "20cl de crème liquide",
            "100g d'épinards frais",
            "200g de ricotta",
            "50g de scamorza ou mozzarella faible en hydratation"
        ],
        consignes: [
            "Préparer une béchamel et la laisser refroidir.",
            "Mélanger les ingrédients pour la pâte et l'étaler dans un moule.",
            "Battre l'œuf avec la crème et ajouter la béchamel et la ricotta.",
            "Disposer les épinards et la ricotta sur la pâte, verser le mélange, et ajouter la scamorza.",
            "Cuire 35-45 minutes à 180°C."
        ],
        temps_preparation: "20 minutes (+ 35-45 minutes de cuisson)"
    },
    {
        nom: "Tarte tatin aux oignons",
        createur: "Kumquat",
        ingredients: [
            "oignons doux des Cévennes ou rouges",
            "caramel balsamique",
            "200g de farine",
            "20g d'huile",
            "100ml d'eau",
            "une pincée de sel",
            "épices au choix (romarin ou basilic séché)"
        ],
        consignes: [
            "Précuire les oignons à la poêle (10 minutes de chaque côté).",
            "Augmenter la quantité de caramel balsamique et préparer une pâte brisée avec les épices.",
            "Disposer les oignons et la pâte dans un moule, puis cuire au four."
        ],
        temps_preparation: "20 minutes (+ 20 minutes de cuisson)"
    },
    {
        nom: "Quiche bacon, noix, roquefort, champignons",
        createur: "Kumquat",
        ingredients: [
            "1 pâte brisée",
            "50g de noix",
            "200g de champignons",
            "1 tranche de poitrine fumée",
            "100g de roquefort",
            "2 œufs",
            "20cl de crème liquide",
            "1 c. à café de muscade",
            "sel",
            "poivre"
        ],
        consignes: [
            "Torréfier les noix, griller le bacon, et faire revenir les champignons.",
            "Disposer les noix, bacon, champignons, et roquefort sur la pâte.",
            "Mélanger les œufs, crème, muscade, sel et poivre, puis verser sur la pâte.",
            "Cuire 30 minutes à 180°C."
        ],
        temps_preparation: "20 minutes (+ 30 minutes de cuisson)"
    },
    {
        nom: "Quiche poireaux boostée",
        createur: "Camille",
        ingredients: [
            "5 poireaux",
            "5 œufs",
            "munster",
            "comté",
            "crème",
            "1 pâte à tarte"
        ],
        consignes: [
            "Couper et cuire les poireaux.",
            "Disposer les poireaux sur la pâte.",
            "Mélanger les œufs, le munster, le comté et la crème.",
            "Verser le mélange sur les poireaux.",
            "Cuire au four jusqu'à ce que ce soit doré."
        ],
        temps_preparation: "15 minutes (+ 30 minutes de cuisson)"
    },
    {
        nom: "Tarte tomate",
        createur: "Camille Doggo",
        ingredients: [
            "2 œufs",
            "1 grosse cuillère à soupe de moutarde à l'ancienne",
            "3-4 grosses cuillères de crème",
            "de la sauce tomate",
            "1 pâte à tarte",
            "rondelles de tomates",
            "rondelles de chèvre (optionnel)"
        ],
        consignes: [
            "Mélanger les œufs, la moutarde, la crème et la sauce tomate.",
            "Étaler la pâte, verser le mélange, puis disposer les rondelles de tomates et de chèvre.",
            "Cuire au four 20-30 minutes à 180-200°C."
        ],
        temps_preparation: "10 minutes (+ 20-30 minutes de cuisson)"
    },
    {
        nom: "Quiche kumquatienne",
        createur: "Kumquat",
        ingredients: [
            "10g de beurre",
            "10g de farine",
            "250ml de lait",
            "1/2 c. à café de muscade",
            "1/2 c. à café de sel",
            "une pincée de poivre",
            "200g de farine",
            "15g d'huile d'olive",
            "90ml d'eau",
            "1 œuf",
            "20cl de crème liquide",
            "100g d'épinards frais",
            "200g de ricotta",
            "50g de scamorza ou mozzarella faible en hydratation"
        ],
        consignes: [
            "Préparer une béchamel et la laisser refroidir.",
            "Mélanger les ingrédients pour la pâte et l'étaler dans un moule.",
            "Battre l'œuf avec la crème et ajouter la béchamel et la ricotta.",
            "Disposer les épinards et la ricotta sur la pâte, verser le mélange, et ajouter la scamorza.",
            "Cuire 35-45 minutes à 180°C."
        ],
        temps_preparation: "20 minutes (+ 35-45 minutes de cuisson)"
    },
    {
        nom: "Tarte tatin aux oignons",
        createur: "Kumquat",
        ingredients: [
            "oignons doux des Cévennes ou rouges",
            "caramel balsamique",
            "200g de farine",
            "20g d'huile",
            "100ml d'eau",
            "une pincée de sel",
            "épices au choix (romarin ou basilic séché)"
        ],
        consignes: [
            "Précuire les oignons à la poêle (10 minutes de chaque côté).",
            "Augmenter la quantité de caramel balsamique et préparer une pâte brisée avec les épices.",
            "Disposer les oignons et la pâte dans un moule, puis cuire au four."
        ],
        temps_preparation: "20 minutes (+ 20 minutes de cuisson)"
    },
    {
        nom: "Quiche bacon, noix, roquefort, champignons",
        createur: "Kumquat",
        ingredients: [
            "1 pâte brisée",
            "50g de noix",
            "200g de champignons",
            "1 tranche de poitrine fumée",
            "100g de roquefort",
            "2 œufs",
            "20cl de crème liquide",
            "1 c. à café de muscade",
            "sel",
            "poivre"
        ],
        consignes: [
            "Torréfier les noix, griller le bacon, et faire revenir les champignons.",
            "Disposer les noix, bacon, champignons, et roquefort sur la pâte.",
            "Mélanger les œufs, crème, muscade, sel et poivre, puis verser sur la pâte.",
            "Cuire 30 minutes à 180°C."
        ],
        temps_preparation: "20 minutes (+ 30 minutes de cuisson)"
    },
    {
        nom: "Quiche poireaux boostée",
        createur: "Camille",
        ingredients: [
            "5 poireaux",
            "5 œufs",
            "munster",
            "comté",
            "crème",
            "1 pâte à tarte"
        ],
        consignes: [
            "Couper et cuire les poireaux.",
            "Disposer les poireaux sur la pâte.",
            "Mélanger les œufs, le munster, le comté et la crème.",
            "Verser le mélange sur les poireaux.",
            "Cuire au four jusqu'à ce que ce soit doré."
        ],
        temps_preparation: "15 minutes (+ 30 minutes de cuisson)"
    },
    {
        nom: "Gaufres façon falafels",
        createur: "Théa",
        ingredients: [
            "1 boîte de pois chiches",
            "1/2 oignon",
            "1 grosse gousse d'ail",
            "1/2 botte de persil",
            "1 cs d'huile d'olive",
            "Cumin au goût",
            "1 CS de farine",
            "2 pincées de levure chimique",
            "1 œuf (ou eau des pois chiches)",
            "Sel et poivre"
        ],
        consignes: [
            "Mixez une première fois de façon grossière.",
            "Ajoutez la farine, la levure chimique, l'œuf (ou l'eau des pois chiches), le sel et le poivre, puis mixez à nouveau.",
            "Faites cuire la pâte au gaufrier.",
            "Pour la sauce blanche : mixez le tofu soyeux, l'huile d'olive, le vinaigre de cidre, le sel, le poivre, les herbes aromatiques et l'ail."
        ],
        temps_preparation: "15 minutes + cuisson au gaufrier"
    },
    {
        nom: "Idée salade végétarienne",
        createur: "Carol-An",
        ingredients: [
            "Riz/céréales",
            "Maïs",
            "Cœur de palmier",
            "Tomate",
            "Avocat",
            "Salade verte",
            "Pousse d'épinard",
            "Mozzarella bille",
            "Chèvre chaud pané",
            "1 œuf dur"
        ],
        consignes: [
            "Mélanger tous les ingrédients selon votre goût."
        ],
        temps_preparation: "15 minutes"
    },
    {
        nom: "Zestibulle",
        createur: "Zestibulle",
        ingredients: [
            "12g de gros sel",
            "450g d'eau",
            "750g de farine (mélange de grands épeautres, blé T110 et blé T65)",
            "225g de levain"
        ],
        consignes: [
            "Pétrir la pâte 5 minutes à faible vitesse puis 5 minutes à vitesse plus élevée.",
            "Laisser pousser la pâte à température ambiante pendant 2 heures, puis la mettre au frigo pour une nuit.",
            "Façonner la pâte et la laisser reposer à température ambiante.",
            "Cuire dans un moule à pain ou une cocotte, 20 minutes à 260°C puis 50 minutes à 230°C."
        ],
        temps_preparation: "Temps de pousse + 1h30 de cuisson"
    },
    {
        nom: "Spaetzle de grand-mère alsacienne",
        createur: "Camille D",
        ingredients: [
            "170ml de lait",
            "270g de farine",
            "3 œufs",
            "15g de semoule de blé dur"
        ],
        consignes: [
            "Battre les œufs avec le lait, puis ajouter la farine pour former une pâte.",
            "Faire chauffer de l'eau salée et ajouter la semoule à la pâte.",
            "Passer la pâte à travers une passoire et cuire dans l'eau bouillante jusqu'à ce que les spaetzle remontent à la surface."
        ],
        temps_preparation: "30 minutes"
    },
    {
        nom: "Olio e Aglio",
        createur: "Gecko",
        ingredients: [
            "250g de spaghettis",
            "3 grosses gousses d'ail",
            "3 cuillères à soupe d'huile d'olive",
            "Sel",
            "Petits piments séchés"
        ],
        consignes: [
            "Faire bouillir l'eau pour les pâtes, chauffer l'huile d'olive dans une poêle.",
            "Faire dorer l'ail et ajouter les pâtes dans la poêle lorsque celles-ci sont presque cuites.",
            "Mélanger avec l'eau de cuisson des pâtes et cuire jusqu'à l'évaporation de l'eau."
        ],
        temps_preparation: "15 minutes"
    },
    {
        nom: "Crumble aux légumes",
        createur: "Camille",
        ingredients: [
            "100g de beurre",
            "200g de farine",
            "1cc de sel",
            "Butternut ou carottes"
        ],
        consignes: [
            "Préparer la pâte à crumble en mélangeant le beurre, la farine et le sel.",
            "Cuire le butternut ou les carottes dans de l'eau frémissante.",
            "Recouvrir le légume de pâte à crumble et cuire au four à 180°C pendant 40 minutes."
        ],
        temps_preparation: "1h15"
    },
    {
        nom: "Riz",
        createur: "Hibou",
        ingredients: [
            "250g de riz thaï blanc ou demi-complet",
            "1 oignon",
            "60cl d'eau",
            "1 cuillère à soupe d'huile d'olive",
            "1 cuillère à café de sel"
        ],
        consignes: [
            "Faire tremper le riz pendant 15-20 minutes.",
            "Faire revenir l'oignon dans l'huile d'olive puis ajouter le riz.",
            "Ajouter l'eau et le sel, cuire à feu doux pendant 10 minutes."
        ],
        temps_preparation: "30 minutes"
    },
    {
        nom: "Dhal lentilles blondes, poireaux et potimarron",
        createur: "Kumquat",
        ingredients: [
            "1 petit poireau",
            "1/2 potimarron",
            "180g de lentilles blondes",
            "200ml de lait de coco",
            "200ml de crème de coco",
            "Epices curry (balti, garam masala)",
            "1 cuillère à café de sel",
            "Huile neutre",
            "Eau"
        ],
        consignes: [
            "Faire revenir les légumes dans une cocotte avec de l'huile.",
            "Ajouter les lentilles, le lait de coco, la crème de coco et l'eau.",
            "Laisser mijoter pendant 20 minutes, puis vérifier la cuisson des lentilles et ajouter de l'eau si nécessaire."
        ],
        temps_preparation: "45 minutes"
    },
    {
        nom: "Préparation des olives",
        createur: "zA",
        ingredients: [
            "56g de gros sel",
            "Eau minérale non gazeuse"
        ],
        consignes: [
            "Mettre le sel dans un bocal et ajouter l'eau bouillie à 60°.",
            "Stocker les olives pendant 1 an."
        ],
        temps_preparation: "1 an"
    },
    {
        nom: "Tomates farcies",
        createur: "Apo",
        ingredients: [
            "1 grosse tomate par personne",
            "1 petite patate",
            "2 champignons de Paris bruns",
            "1/4 d'oignon frais",
            "Huile de noix",
            "Sauce soja",
            "Fromage de chèvre ou bleu"
        ],
        consignes: [
            "Préparer la farce avec la pomme de terre, les champignons et l'oignon, puis ajouter le fromage.",
            "Cuire les tomates farcies à 200°C pendant 1h15."
        ],
        temps_preparation: "1h30"
    },
    {
        nom: "Chou rouge aux pommes",
        createur: "zA",
        ingredients: [
            "1 chou rouge",
            "4 oignons",
            "4 à 6 pommes",
            "1 verre de vin rouge ou vinaigre de vin",
            "2 verres d'eau",
            "1,5 cuillère de gros sel"
        ],
        consignes: [
            "Couper le chou en lanières, faire revenir les oignons, puis ajouter le chou et les autres ingrédients.",
            "Cuire en cocotte pendant 45 minutes, puis ajouter les pommes et finir la cuisson."
        ],
        temps_preparation: "1h"
    },
    {
        nom: "Bretzel",
        createur: "Hibou",
        ingredients: [
            "500g de farine T65",
            "5g de levure sèche",
            "40g de sucre",
            "75g de beurre fondu",
            "8g de sel",
            "125ml de lait tiède",
            "125ml d'eau chaude",
            "Sésame, pavot, fleur de sel pour garnir",
            "Bicarbonate et sel pour le bain de pochage"
        ],
        consignes: [
            "Mélanger les ingrédients et pétrir la pâte pendant 10 minutes.",
            "Laisser lever la pâte puis former les bretzels.",
            "Faire bouillir les bretzels dans de l'eau avec du bicarbonate, les garnir et les cuire au four."
        ],
        temps_preparation: "2 heures"
    }
];

var chaosNVRecipes = [
    {
        nom: "Les coquillettes daronne",
        createur: "Gecko",
        ingredients: [
            "Une tranche de talon de jambon cru émincée",
            "Une demie-gousse d'ail",
            "5cl à 10 cl de lait entier",
            "Une cuillère à soupe de crème fraîche",
            "Du gruyère",
            "150g de coquillettes",
            "Sel",
            "Poivre"
        ],
        consignes: [
            "Porte 30cl d'eau salée à ébullition, mets tes coquillettes dedans.",
            "Fais revenir ton jambon cru dans ta poêle, laisse-le cracher un peu de gras puis fais revenir ton ail haché dedans.",
            "Une fois l'ail un peu blondi, donne deux-trois tours de moulin à poivre pour que les gros grains soient légèrement saisis, puis verse ton lait dessus.",
            "Une fois tes coquillettes al dente, sors-les de la casserole sans les rincer, prends une louchée d'eau de cuisson et mets le tout dans la poêle, ton lait doit avoir un peu réduit et créé une consistance crémeuse.",
            "Rajoute ta crème fraîche.",
            "Laisse le tout réduire, tes coquillettes vont terminer de cuire dans ta sauce.",
            "Avant de servir, répartis ton gruyère sur tes coquillettes, mélange bien, laisse quelques secondes dans la poêle et sers !"
        ],
        temps_preparation: "20 minutes (+ 30 minutes de cuisson)"
    },
    {
        nom: "Chili",
        createur: "Gecko",
        ingredients: [
            "4 oignons",
            "2 poivrons de chaque couleur",
            "1 grosse carotte",
            "De l'épaule de porc",
            "1 kg de riz",
            "200ml de sauce tomate",
            "500g de haricots rouges (une fois gonflés)",
            "Piment sec, piment moulu, piment cru, piment du c-",
            "Cumin",
            "Coriandre (FRAÎCHE, J'INSISTE.)",
            "Origan",
            "Une cuillère à soupe de miel",
            "Du SEL",
            "De l'ail"
        ],
        consignes: [
            "Préparer les légumes et l'épaule de porc.",
            "Ajouter les épices et les haricots dans une grande casserole.",
            "Faire mijoter pendant 45 minutes.",
            "Ajouter la viande et laisser cuire 20 minutes supplémentaires.",
            "Servir avec du riz."
        ],
        temps_preparation: "1h 15min"
    },
    {
        nom: "Échine de porc mariné",
        createur: "Iria",
        ingredients: [
            "80cl de marinade",
            "4 oranges",
            "1 flacon de Ketchup (37 cl)",
            "1 cuillère à café de 4 épices",
            "1 cuillère à café bombée d’épices à Chili",
            "2 cuillères à soupe de miel",
            "1 cuillère à soupe de sauce Worcestershire",
            "Sel",
            "Une échine de porc de 800-900g avec os"
        ],
        consignes: [
            "Mélange tous les ingrédients de la marinade.",
            "Mettre la moitié de la marinade avec la viande au frigo et conserver l'autre moitié.",
            "Laisser mariner une journée et cuire à 200°C pendant 30 min.",
            "Baisser à 160°C pour 2h30.",
            "Faire chauffer le reste de la marinade et verser sur la viande 10 min avant la fin de cuisson."
        ],
        temps_preparation: "1 journée de marinade + 3h de cuisson"
    },
    {
        nom: "Cookiflettes",
        createur: "Telendar",
        ingredients: [
            "1 patate (environ 300g)",
            "150g de farine",
            "100g de beurre",
            "2 œufs",
            "1/2 càc de sel",
            "1 reblochon de 250g",
            "Une petite boîte de lardons"
        ],
        consignes: [
            "Cuire la patate pour en faire de la purée.",
            "Faire revenir les lardons.",
            "Faire fondre le beurre et mélanger avec les œufs.",
            "Couper le reblochon en petits dés.",
            "Mélanger tous les ingrédients sauf le reblochon et former des boules.",
            "Faire cuire entre 15 et 25 minutes à 180°C."
        ],
        temps_preparation: "30-45 minutes"
    }
];
var Gateaux = [
    {
        nom: "Manala",
        createur: "Camille dog wishperer",
        ingredients: [
            "550-600g de farine",
            "1 paquet de levure boulangère sèche",
            "1/2 cuillère à café de sel",
            "75g de sucre",
            "2 œufs",
            "25 cL de lait",
            "175g de beurre",
            "raisins secs"
        ],
        consignes: [
            "Mélanger la farine, levure, sel et le sucre.",
            "Mettre en fontaine pour y casser les œufs puis ajouter le lait tiède.",
            "Battre pendant environ 10min jusqu’à ce que la pâte se détache des parois et bulle.",
            "Ajouter le beurre ramolli (non fondu) par petites quantités en continuant de battre.",
            "La pâte doit être souple et élastique. Laisser lever en couvrant dans un endroit chaud pendant 1h.",
            "Détailler en 8 pâtons. Allonger chaque pâton sur un plan de travail fariné.",
            "Marquer un étranglement au tiers de la taille pour former la tête.",
            "Entailler de part et d’autre du corps pour marquer les bras et fendre le bas pour marquer les jambes.",
            "Placer les yeux et la bouche avec des raisins secs trempés dans l’eau.",
            "Mettre sur une tôle beurrée et laisser lever une seconde fois.",
            "Dorer au jaune d’œuf mélangé de lait.",
            "Faire cuire au four à 180-200° pendant 15min."
        ],
        temps_preparation: "1h 30 minutes"
    },
    {
        nom: "Tiramisu pêche-framboise",
        createur: "Ilwa",
        ingredients: [
            "500gr Mascarpone",
            "4 oeufs",
            "140gr sucre",
            "1 sachet de sucre vanillé",
            "Pêches (J'en ai mis 3, mais ça mérite peut-être plus)",
            "Framboises fraiches ou décongelées (environ 1 bol, au goût)",
            "Sirop (pêche, framboise ou grenadine)",
            "Biscuit à la cuillère"
        ],
        consignes: [
            "Séparer les blancs des jaunes d'œufs.",
            "Blanchir les jaunes avec le sucre et sucre vanillé et ajouter la mascarpone.",
            "Monter les blancs en neige avec une pincée de sel puis les incorporer au mélange œuf/sucre/mascarpone.",
            "Peler les pêches et mixer avec les framboises.",
            "Imbiber les biscuits dans un peu de sirop à l'eau.",
            "Tapisser le fond d'un plat avec la purée de fruits.",
            "Ajouter les biscuits, puis recouvrir avec le mélange de mascarpone.",
            "Répéter les opérations et ajouter des petites framboises pour décorer."
        ],
        temps_preparation: "30 minutes"
    },
    {
        nom: "Carrot cake",
        createur: "Pha",
        ingredients: [
            "200g de farine",
            "150g de sucre",
            "70g de beurre salé",
            "1 cuillère à café de bicarbonate",
            "2 cuillères à café de levure",
            "12cl de lait",
            "100g de carottes râpées crues",
            "30g de noix/noisettes grillées et hachées",
            "1 cuillère à café de cannelle",
            "1/2 cuillère à café de muscade",
            "1 cuillère à café de fève tonka",
            "1 cuillère à café de rhum vanillé"
        ],
        consignes: [
            "Mélanger le sucre, le beurre fondu et le lait jusqu'à faire fondre le sucre.",
            "Ajouter les carottes.",
            "Mélanger farine, épices, levure et bicarbonate, puis tamiser ce mélange dans les liquides.",
            "Arrêter de touiller dès que possible pour que la pâte reste légère.",
            "Verser dans un moule plat à gâteaux et cuire à 180°C pendant 25 minutes."
        ],
        temps_preparation: "45 minutes"
    },
    {
        nom: "Gâteau de Noot noot",
        createur: "Non spécifié",
        ingredients: [
            "230g de chocolat",
            "270g de farine",
            "45g de cacao non sucré",
            "1 1/2cc de bicarbonate de soude",
            "225g de beurre mou",
            "160g de cassonade",
            "75g de sucre",
            "1cc de fleur de sel",
            "1cc d’extrait de vanille liquide"
        ],
        consignes: [
            "Coupez le chocolat en pépites.",
            "Tamisez la farine, le cacao et le bicarbonate dans un grand saladier.",
            "Ajoutez les sucres, le sel, la vanille et le beurre, puis mélangez avec les pépites de chocolat.",
            "Formez plusieurs boudins de 4 cm de diamètre et laissez reposer au frais pendant 1h.",
            "Coupez des tranches d’1 cm d’épaisseur et façonnez-les à la main.",
            "Disposez-les sur une plaque et faites cuire 12 min à 170°C."
        ],
        temps_preparation: "1h 30 minutes"
    },
    {
        nom: "Cookies Ephemere",
        createur: "Anonyme",
        ingredients: [
            "115g de beurre mou",
            "177g de sucre",
            "1 œuf",
            "220g de farine",
            "1/2 sachet de levure",
            "1 pincée de sel",
            "200 à 300g de chocolat"
        ],
        consignes: [
            "Tu fais des petites boulettes, tu les aplatis et tu les déposes BIEN ESPACÉS (ils vont s'étaler en cours de cuisson).",
            "Cuisson : 150°C pendant 15 minutes.",
            "Tu laisses refroidir ta plaque hors du four avant d'essayer de détacher les cookies."
        ],
        temps_preparation: "15 minutes (+ 15 minutes de cuisson)"
    },
    {
        nom: "Banana Bread Marcounet",
        createur: "Marcounet",
        ingredients: [
            "250g de farine",
            "160g de sucre",
            "85g de beurre fondu",
            "2 œufs",
            "2 bananes bien mûres",
            "3 cuillères à soupe de lait",
            "1 cuillère à soupe de rhum",
            "1 sachet de levure chimique"
        ],
        consignes: [
            "Mélange les ingrédients 'secs' dans un saladier.",
            "Passe les ingrédients 'humides' au blender.",
            "Combine les deux et mélange le tout au fouet.",
            "Verse dans un moule à cake beurré et fariné.",
            "Décore avec une banane splitée sur le dessus.",
            "Enfourne 165°C pendant 1h10.",
            "Laisse refroidir sur grille et démoule 20 minutes après la sortie du four."
        ],
        temps_preparation: "20 minutes (+ 1h10 de cuisson)"
    },
    {
        nom: "Banana Bread Kumquat",
        createur: "Kumquat",
        ingredients: [
            "2 à 3 bananes bien mûres",
            "1 œuf",
            "205g de farine",
            "50g de sucre",
            "1/2 sachet de levure chimique",
            "1 pincée de sel",
            "75g de beurre",
            "un peu d'arôme vanille si souhaité"
        ],
        consignes: [
            "Mélange les bananes écrasées, l'œuf, l'arôme vanille, le sucre, le sel, et le beurre fondu.",
            "Ajoute la farine et la levure.",
            "Mets le tout dans un moule beurré et enfourne 45 min à 180°C en chaleur tournante."
        ],
        temps_preparation: "10 minutes (+ 45 minutes de cuisson)"
    },
    {
        nom: "Gâteau chocolat patate",
        createur: "Camille",
        ingredients: [
            "Chocolat",
            "Beurre",
            "Jaunes d'œufs",
            "Sucre",
            "Blancs d'œufs",
            "Purée de patates",
            "Farine"
        ],
        consignes: [
            "Fonds le chocolat et le beurre.",
            "Bats les jaunes d'œufs et le sucre, puis ajoute le chocolat fondu.",
            "Montez les blancs en neige.",
            "Ajoute la purée de patates et un peu de farine.",
            "Incorpore les blancs d'œufs."
        ],
        temps_preparation: "20 minutes (+ 30 minutes de cuisson)"
    },
    {
        nom: "Banana muffins végétaliens",
        createur: "zA",
        ingredients: [
            "2 bananes mûres",
            "160g de farine T80",
            "1 cuillère à thé de bicarbonate",
            "80g de sucre blond",
            "60g de matière grasse (huile d'olive)",
            "40-50g de chocolat noir 72%"
        ],
        consignes: [
            "Préchauffer le four à 180°C.",
            "Écrase les bananes, puis ajoute le sucre, la farine, et le bicarbonate.",
            "Incorpore l'huile et les pépites de chocolat.",
            "Faire cuire dans des moules à muffin pendant 15-20 minutes."
        ],
        temps_preparation: "15 minutes (+ 20 minutes de cuisson)"
    },
    {
        nom: "Pancake vegan",
        createur: "CamilleD (plagieur de Camille)",
        ingredients: [
            "640g de farine",
            "80g de maïzena",
            "200g de sucre",
            "1 cc de sel",
            "2 sachets de levure chimique",
            "20cl d'huile neutre",
            "1l de lait végétal",
            "2cs d'arôme vanille"
        ],
        consignes: [
            "Mélange tous les ingrédients secs.",
            "Incorpore l'huile, le lait et l'arôme vanille.",
            "Cuire comme des pancakes classiques."
        ],
        temps_preparation: "10 minutes (+ 10 minutes de cuisson)"
    },
    {
        nom: "Cake végétal au café et à la crème de café",
        createur: "zA et Hibou",
        ingredients: [
            "200g de farine d’épeautre ou de blé",
            "60g de poudre d’amandes",
            "60g de sucre de canne blond",
            "60g de sucre muscovado",
            "150g de compote de pommes",
            "60g d’huile de coco",
            "120ml de lait végétal",
            "1 cuillère à café de cannelle",
            "2 cuilères de café soluble",
            "1 cuilère à café de vanille",
            "1 cuilère à soupe de vinaigre de cidre",
            "1/2 cuilère de bicarbonate de soude",
            "1 pincée de sel"
        ],
        consignes: [
            "Préchauffe le four à 180°C.",
            "Mélange les ingrédients secs, puis incorpore les ingrédients humides.",
            "Verse dans un moule à cake beurré et enfourne pour 45-50 minutes.",
            "Prépare le glaçage avec du sucre glace et de l'huile de coco.",
            "Recouvre le cake de glaçage après cuisson."
        ],
        temps_preparation: "20 minutes (+ 45-50 minutes de cuisson)"
    }
];
var Boissons = [
    {
        nom: "Cocktail d'Oldu",
        createur: "Inconnu",
        ingredients: [
            "Rhum blanc",
            "Sirop Tesseire Mojito",
            "Framboise",
            "Citron",
            "Menthe",
            "Eau pétillante",
            "Glaçons"
        ],
        consignes: [
            "Mélanger les ingrédients au pif.",
            "Ajouter des glaçons et l'eau pétillante selon les préférences."
        ],
        temps_preparation: "5 minutes"
    },
    {
        nom: "Thé noir glacé à la pêche blanche et citron",
        createur: "Kumquat",
        ingredients: [
            "3 sachets de thé noir",
            "Le zeste et le jus d'un citron",
            "2 pêches mûres écrabouillées à la fourchette"
        ],
        consignes: [
            "Infuser les sachets de thé pendant 10 minutes.",
            "Refroidir le thé, soit avec des glaçons, soit en le mettant au réfrigérateur.",
            "Mélanger la pulpe de pêche, le zeste et le jus de citron dans une bouteille.",
            "Ajouter le thé refroidi et compléter avec de l'eau.",
            "Sucrer selon les préférences."
        ],
        temps_preparation: "20 minutes"
    },
    {
        nom: "Lait de riz",
        createur: "Pha",
        ingredients: [
            "3 à 4 cuillères à soupe de riz lavé et cuit",
            "1 cuillère à soupe de sucre",
            "Une pincée de sel",
            "1 litre d'eau"
        ],
        consignes: [
            "Cuire le riz (déjà cuit) avec 600g d'eau pendant 20 minutes à couvert.",
            "Transvaser le riz dans un blender avec le reste de l'eau et mixer.",
            "Conserver dans une bouteille stérilisée au réfrigérateur."
        ],
        temps_preparation: "40 minutes"
    },
    {
        nom: "Recette du sirop de pumpkin spice",
        createur: "Marcounet",
        ingredients: [
            "200g de sucre",
            "La moitié d'eau par rapport au sucre (en volume)",
            "Mélange d'épices (1 c.à.c. de cannelle, 1/2 c.à.c. de gingembre, 1/4 c.à.c. de muscade, 1/4 c.à.c de clous de girofle)"
        ],
        consignes: [
            "Mélanger les épices dans un petit ramequin et réserver.",
            "Faire bouillir l'eau dans une petite casserole.",
            "Verser le sucre dans l'eau bouillante et mélanger jusqu'à dissolution.",
            "Ajouter les épices et mélanger jusqu'à incorporation.",
            "Laisser bouillir légèrement puis retirer du feu.",
            "Conserver dans un bocal et réfrigérer."
        ],
        temps_preparation: "30 minutes"
    },
    {
        nom: "Milkshake Banane-Beurre de cacahuète",
        createur: "Penta",
        ingredients: [
            "1 banane",
            "1 cuillère à soupe de beurre de cacahuète",
            "Lait d'avoine",
            "1 à 2 cuillères à soupe de flocons d'avoine"
        ],
        consignes: [
            "Mélanger tous les ingrédients dans un blender jusqu'à consistance lisse.",
            "Servir frais."
        ],
        temps_preparation: "5 minutes"
    },
    {
        nom: "Compote Pomme-Crème de Marron",
        createur: "Penta",
        ingredients: [
            "3/4 de pomme",
            "1/4 de crème de marron"
        ],
        consignes: [
            "Cuire les pommes à feu doux.",
            "Ajouter la crème de marron et mélanger.",
            "Conserver au réfrigérateur."
        ],
        temps_preparation: "30 minutes"
    }
];
