const mealForm = document.querySelector("#mealForm");
const mealDayInput = document.querySelector("#mealDay");
const mealTypeInput = document.querySelector("#mealType");
const mealNameInput = document.querySelector("#mealName");
const mealIngredientsInput = document.querySelector("#mealIngredients");
const mealCaloriesInput = document.querySelector("#mealCalories");
const mealProteinInput = document.querySelector("#mealProtein");
const mealFatInput = document.querySelector("#mealFat");
const mealCarbsInput = document.querySelector("#mealCarbs");
const planner = document.querySelector("#planner");
const shoppingList = document.querySelector("#shoppingList");
const pantryForm = document.querySelector("#pantryForm");
const pantryIngredientInput = document.querySelector("#pantryIngredient");
const pantryList = document.querySelector("#pantryList");
const suggestionsList = document.querySelector("#suggestionsList");
const mealCount = document.querySelector("#mealCount");
const shoppingCount = document.querySelector("#shoppingCount");
const calorieLimitInput = document.querySelector("#calorieLimit");
const recipeSearchDialog = document.querySelector("#recipeSearchDialog");
const closeRecipeSearchButton = document.querySelector("#closeRecipeSearch");
const recipeSearchForm = document.querySelector("#recipeSearchForm");
const recipeSearchInput = document.querySelector("#recipeSearchInput");
const recipeSearchStatus = document.querySelector("#recipeSearchStatus");
const recipeSearchResults = document.querySelector("#recipeSearchResults");

const STORAGE_KEY = "planer-obroka";
const days = ["Ponedeljak", "Utorak", "Sreda", "Cetvrtak", "Petak", "Subota", "Nedelja"];
const mealTypes = ["Dorucak", "Rucak", "Uzina", "Vecera", "Pice"];
const ingredientAliases = {
  tomato: "paradajz",
  tomatoes: "paradajz",
  onion: "luk",
  onions: "luk",
  garlic: "beli luk",
  potato: "krompir",
  potatoes: "krompir",
  carrot: "sargarepa",
  carrots: "sargarepa",
  pepper: "paprika",
  peppers: "paprika",
  "bell pepper": "paprika",
  chicken: "piletina",
  "chicken breast": "piletina",
  beef: "govedina",
  "minced beef": "mleveno meso",
  pork: "svinjetina",
  fish: "riba",
  tuna: "tuna",
  rice: "pirinac",
  pasta: "testenina",
  spaghetti: "testenina",
  macaroni: "testenina",
  egg: "jaja",
  eggs: "jaja",
  milk: "mleko",
  cheese: "sir",
  yoghurt: "jogurt",
  yogurt: "jogurt",
  bread: "hleb",
  flour: "brasno",
  oil: "ulje",
  "olive oil": "ulje",
  salt: "so",
  "black pepper": "biber",
  sugar: "secer",
  honey: "med",
  banana: "banana",
  bananas: "banana",
  apple: "jabuka",
  apples: "jabuka",
  orange: "pomorandza",
  oranges: "pomorandza",
  pear: "kruska",
  pears: "kruska",
  grapes: "grozdje",
  strawberry: "jagode",
  strawberries: "jagode",
  watermelon: "lubenica",
  lemon: "limun",
  lemons: "limun",
  lettuce: "salata",
  salad: "salata",
  corn: "kukuruz",
  sweetcorn: "kukuruz",
  peas: "grasak",
  beans: "pasulj",
  oats: "ovsene pahuljice",
  oatmeal: "ovsene pahuljice",
  zucchini: "tikvica",
  courgette: "tikvica",
  mushroom: "pecurke",
  mushrooms: "pecurke",
  spinach: "spanac",
  cucumber: "krastavac",
  butter: "puter",
  cream: "pavlaka",
  parsley: "persun",
  lamb: "jagnjetina",
  turkey: "curetina",
  bacon: "slanina",
  ham: "sunka",
  sausage: "kobasica",
  sausages: "kobasica",
  salmon: "losos",
  prawns: "kozice",
  shrimp: "kozice",
  chickpeas: "leblebije",
  lentils: "socivo",
  celery: "celer",
  leek: "praziluk",
  cabbage: "kupus",
  broccoli: "brokoli",
  cauliflower: "karfiol",
  aubergine: "plavi patlidzan",
  eggplant: "plavi patlidzan",
  avocado: "avokado",
  cumin: "kumin",
  coriander: "korijander",
  turmeric: "kurkuma",
  thyme: "timijan",
  rosemary: "ruzmarin",
  oregano: "origano",
  basil: "bosiljak",
  cinnamon: "cimet",
  nutmeg: "muskatni orascic",
  breadcrumbs: "prezle",
  parmesan: "parmezan",
  mozzarella: "mocarela",
  cheddar: "cedar sir",
  "coconut milk": "kokosovo mleko",
  "soy sauce": "soja sos",
  vinegar: "sirce",
  mustard: "senf",
  mayonnaise: "majonez",
  lime: "limeta",
  "lemon juice": "limunov sok",
  "sour cream": "kisela pavlaka",
  "double cream": "pavlaka",
  "heavy cream": "pavlaka",
  chocolate: "cokolada",
  cocoa: "kakao",
  yeast: "kvasac",
  "baking powder": "prasak za pecivo",
  water: "voda",
  "chicken stock": "pileci bujon",
  "beef stock": "govedji bujon",
  "vegetable stock": "povrtni bujon",
  "kidney beans": "crveni pasulj",
  "black beans": "crni pasulj",
  tortilla: "tortilja",
  tortillas: "tortilja",
};
const ingredientAliasRules = [
  { terms: ["chopped tomatoes", "plum tomatoes", "tinned tomatoes"], value: "paradajz" },
  { terms: ["red onion", "white onion"], value: "luk" },
  { terms: ["spring onion", "spring onions"], value: "mladi luk" },
  { terms: ["garlic clove", "garlic cloves"], value: "beli luk" },
  { terms: ["baby potatoes"], value: "krompir" },
  { terms: ["sweet potato", "sweet potatoes"], value: "batat" },
  { terms: ["red pepper", "green pepper", "yellow pepper", "bell peppers"], value: "paprika" },
  { terms: ["chicken thigh", "chicken thighs", "chicken breasts"], value: "piletina" },
  { terms: ["ground beef", "beef mince", "minced meat"], value: "mleveno meso" },
  { terms: ["egg yolk", "egg yolks", "egg white", "egg whites"], value: "jaja" },
  { terms: ["plain flour", "self raising flour", "all purpose flour"], value: "brasno" },
  { terms: ["vegetable oil", "sunflower oil", "extra virgin olive oil"], value: "ulje" },
  { terms: ["caster sugar", "brown sugar", "icing sugar"], value: "secer" },
  { terms: ["red potatoes", "new potatoes"], value: "krompir" },
  { terms: ["button mushrooms", "chestnut mushrooms"], value: "pecurke" },
  { terms: ["greek yogurt", "natural yogurt"], value: "jogurt" },
  { terms: ["sweet corn", "corn kernels"], value: "kukuruz" },
  { terms: ["rolled oats", "porridge oats"], value: "ovsene pahuljice" },
  { terms: ["courgettes", "zucchinis"], value: "tikvica" },
  { terms: ["carrot", "carrots"], value: "sargarepa" },
  { terms: ["cucumber", "cucumbers"], value: "krastavac" },
  { terms: ["mushroom", "mushrooms"], value: "pecurke" },
  { terms: ["tomato", "tomatoes"], value: "paradajz" },
  { terms: ["onion", "onions"], value: "luk" },
  { terms: ["potato", "potatoes"], value: "krompir" },
];
const serbianCyrillicToLatin = {
  "\u0410": "A", "\u0430": "a", "\u0411": "B", "\u0431": "b",
  "\u0412": "V", "\u0432": "v", "\u0413": "G", "\u0433": "g",
  "\u0414": "D", "\u0434": "d", "\u0402": "Dj", "\u0452": "dj",
  "\u0415": "E", "\u0435": "e", "\u0416": "Z", "\u0436": "z",
  "\u0417": "Z", "\u0437": "z", "\u0418": "I", "\u0438": "i",
  "\u0408": "J", "\u0458": "j", "\u041A": "K", "\u043A": "k",
  "\u041B": "L", "\u043B": "l", "\u0409": "Lj", "\u0459": "lj",
  "\u041C": "M", "\u043C": "m", "\u041D": "N", "\u043D": "n",
  "\u040A": "Nj", "\u045A": "nj", "\u041E": "O", "\u043E": "o",
  "\u041F": "P", "\u043F": "p", "\u0420": "R", "\u0440": "r",
  "\u0421": "S", "\u0441": "s", "\u0422": "T", "\u0442": "t",
  "\u040B": "C", "\u045B": "c", "\u0423": "U", "\u0443": "u",
  "\u0424": "F", "\u0444": "f", "\u0425": "H", "\u0445": "h",
  "\u0426": "C", "\u0446": "c", "\u0427": "C", "\u0447": "c",
  "\u040F": "Dz", "\u045F": "dz", "\u0428": "S", "\u0448": "s",
};
const recipeIdeas = [
  {
    name: "Omlet sa povrcem",
    type: "Dorucak",
    ingredients: ["jaja", "paprika", "sir", "paradajz"],
    time: "15 min",
    nutrition: {
      calories: 320,
      protein: 22,
      fat: 21,
      carbs: 9,
    },
    drink: "Jogurt ili blagi caj",
    steps: [
      "Umuti jaja u ciniji.",
      "Iseckaj papriku i paradajz.",
      "Sipaj jaja u tiganj, dodaj povrce i sir.",
      "Peci nekoliko minuta dok se omlet ne stegne.",
    ],
  },
  {
    name: "Pasta sa paradajzom",
    type: "Rucak",
    ingredients: ["testenina", "paradajz", "beli luk", "sir"],
    time: "25 min",
    nutrition: {
      calories: 520,
      protein: 18,
      fat: 14,
      carbs: 82,
    },
    drink: "Limunada bez secera",
    steps: [
      "Skuvaj testeninu prema uputstvu sa pakovanja.",
      "Na malo ulja kratko proprzi beli luk.",
      "Dodaj paradajz i kuvaj sos nekoliko minuta.",
      "Pomesaj testeninu sa sosom i pospi sirom.",
    ],
  },
  {
    name: "Piletina sa pirincem",
    type: "Rucak",
    ingredients: ["piletina", "pirinac", "sargarepa", "luk"],
    time: "40 min",
    nutrition: {
      calories: 610,
      protein: 42,
      fat: 14,
      carbs: 76,
    },
    drink: "Voda sa limunom",
    steps: [
      "Iseckaj luk, sargarepu i piletinu.",
      "Proprzi luk i piletinu dok ne porumene.",
      "Dodaj sargarepu, pirinac i vodu.",
      "Kuvaj dok pirinac ne omeksa.",
    ],
  },
  {
    name: "Sendvic sa sirom",
    type: "Uzina",
    ingredients: ["hleb", "sir", "paradajz", "salata"],
    time: "10 min",
    nutrition: {
      calories: 390,
      protein: 17,
      fat: 16,
      carbs: 45,
    },
    drink: "Jogurt",
    steps: [
      "Iseci hleb i paradajz.",
      "Stavi sir, paradajz i salatu izmedju kriski hleba.",
      "Po zelji kratko tostiraj sendvic.",
    ],
  },
  {
    name: "Tuna salata",
    type: "Vecera",
    ingredients: ["tuna", "salata", "paradajz", "kukuruz"],
    time: "10 min",
    nutrition: {
      calories: 310,
      protein: 31,
      fat: 9,
      carbs: 24,
    },
    drink: "Mineralna voda sa limunom",
    steps: [
      "Operi i iseckaj salatu i paradajz.",
      "Dodaj tunu i kukuruz.",
      "Promesaj sve sastojke i zacini po ukusu.",
    ],
  },
  {
    name: "Palacinke",
    type: "Dorucak",
    ingredients: ["jaja", "mleko", "brasno", "ulje"],
    time: "30 min",
    nutrition: {
      calories: 430,
      protein: 15,
      fat: 16,
      carbs: 56,
    },
    drink: "Mleko ili caj",
    steps: [
      "Umuti jaja, mleko i brasno u glatku smesu.",
      "Dodaj malo ulja i promesaj.",
      "Peci tanke palacinke na zagrejanom tiganju.",
      "Posluzi sa namazom ili vocem.",
    ],
  },
  {
    name: "Krompir iz rerne",
    type: "Vecera",
    ingredients: ["krompir", "ulje", "sir", "luk"],
    time: "45 min",
    nutrition: {
      calories: 470,
      protein: 14,
      fat: 19,
      carbs: 62,
    },
    drink: "Jogurt ili kiselo mleko",
    steps: [
      "Iseci krompir i luk na krupnije komade.",
      "Pomesaj ih sa uljem i zacinima.",
      "Peci u rerni dok krompir ne omeksa.",
      "Pred kraj dodaj sir da se istopi.",
    ],
  },
  {
    name: "Jogurt cinija",
    type: "Dorucak",
    ingredients: ["jogurt", "ovsene pahuljice", "banana", "med"],
    time: "5 min",
    nutrition: {
      calories: 360,
      protein: 16,
      fat: 7,
      carbs: 61,
    },
    drink: "Voda ili biljni caj",
    steps: [
      "Sipaj jogurt u ciniju.",
      "Dodaj ovsene pahuljice i iseckanu bananu.",
      "Prelij sa malo meda.",
    ],
  },
  {
    name: "Supa od povrca",
    type: "Rucak",
    ingredients: ["krompir", "sargarepa", "luk", "grasak"],
    time: "40 min",
    nutrition: { calories: 240, protein: 7, fat: 6, carbs: 39 },
    drink: "Voda",
    steps: [
      "Operi, ocisti i iseckaj povrce.",
      "Stavi povrce u serpu, nalij vodom i zacini.",
      "Kuvaj dok sve povrce ne omeksa.",
    ],
  },
  {
    name: "Musaka od krompira",
    type: "Rucak",
    ingredients: ["krompir", "meso", "luk", "jaja"],
    time: "60 min",
    nutrition: { calories: 590, protein: 32, fat: 28, carbs: 49 },
    drink: "Jogurt",
    steps: [
      "Iseci krompir i pripremi nadev od mesa i luka.",
      "Redjaj krompir i nadev u posudu za pecenje.",
      "Prelij umucenim jajima i peci dok krompir ne omeksa.",
    ],
  },
  {
    name: "Pileca salata",
    type: "Vecera",
    ingredients: ["piletina", "salata", "paradajz", "kukuruz"],
    time: "25 min",
    nutrition: { calories: 380, protein: 38, fat: 13, carbs: 25 },
    drink: "Limunada bez secera",
    steps: [
      "Ispeci piletinu dok ne bude potpuno gotova.",
      "Operi i iseckaj povrce.",
      "Dodaj piletinu i kukuruz, pa sve promesaj.",
    ],
  },
  {
    name: "Rizoto sa povrcem",
    type: "Rucak",
    ingredients: ["pirinac", "sargarepa", "grasak", "luk"],
    time: "35 min",
    nutrition: { calories: 440, protein: 11, fat: 10, carbs: 76 },
    drink: "Mineralna voda",
    steps: [
      "Iseckaj luk i sargarepu, pa ih kratko proprzi.",
      "Dodaj pirinac, grasak i vodu.",
      "Kuvaj uz mesanje dok pirinac ne omeksa.",
    ],
  },
  {
    name: "Tost sa jajima",
    type: "Dorucak",
    ingredients: ["hleb", "jaja", "sir", "paradajz"],
    time: "15 min",
    nutrition: { calories: 410, protein: 24, fat: 20, carbs: 34 },
    drink: "Caj",
    steps: [
      "Tostiraj hleb i ispeci jaja.",
      "Na hleb stavi sir, jaja i paradajz.",
      "Posluzi dok je tost topao.",
    ],
  },
  {
    name: "Ovsena kasa sa bananom",
    type: "Dorucak",
    ingredients: ["ovsene pahuljice", "mleko", "banana", "med"],
    time: "10 min",
    nutrition: { calories: 390, protein: 14, fat: 8, carbs: 68 },
    drink: "Voda ili caj",
    steps: [
      "Kuvaj ovsene pahuljice u mleku nekoliko minuta.",
      "Dodaj iseckanu bananu.",
      "Po zelji prelij sa malo meda.",
    ],
  },
  {
    name: "Punjene paprike",
    type: "Rucak",
    ingredients: ["paprika", "meso", "pirinac", "paradajz"],
    time: "75 min",
    nutrition: { calories: 530, protein: 30, fat: 22, carbs: 52 },
    drink: "Voda sa limunom",
    steps: [
      "Ocisti paprike i pripremi nadev od mesa i pirinca.",
      "Napuni paprike i poredjaj ih u serpu.",
      "Dodaj paradajz i vodu, pa kuvaj dok sve ne bude potpuno gotovo.",
    ],
  },
  {
    name: "Corba od pasulja",
    type: "Rucak",
    ingredients: ["pasulj", "luk", "sargarepa", "paprika"],
    time: "90 min",
    nutrition: { calories: 420, protein: 22, fat: 9, carbs: 64 },
    drink: "Voda",
    steps: [
      "Potopi pasulj unapred i zatim ga isperi.",
      "Dodaj iseckano povrce i nalij vodom.",
      "Kuvaj dok pasulj potpuno ne omeksa.",
    ],
  },
  {
    name: "Grilovano povrce sa sirom",
    type: "Vecera",
    ingredients: ["paprika", "tikvica", "paradajz", "sir"],
    time: "30 min",
    nutrition: { calories: 330, protein: 16, fat: 21, carbs: 20 },
    drink: "Mineralna voda",
    steps: [
      "Operi i iseci povrce.",
      "Ispeci povrce na gril tiganju ili u rerni.",
      "Dodaj sir i posluzi toplo.",
    ],
  },
  {
    name: "Pecena riba sa krompirom",
    type: "Rucak",
    ingredients: ["riba", "krompir", "luk", "limun"],
    time: "50 min",
    nutrition: { calories: 510, protein: 39, fat: 19, carbs: 45 },
    drink: "Voda sa limunom",
    steps: [
      "Iseci krompir i luk, pa ih stavi u posudu za pecenje.",
      "Dodaj zacinjenu ribu i kolutove limuna.",
      "Peci dok riba i krompir ne budu potpuno gotovi.",
    ],
  },
  {
    name: "Makarone sa sirom",
    type: "Rucak",
    ingredients: ["testenina", "sir", "mleko", "jaja"],
    time: "40 min",
    nutrition: { calories: 620, protein: 27, fat: 25, carbs: 71 },
    drink: "Jogurt",
    steps: [
      "Skuvaj testeninu i ocedi je.",
      "Pomesaj je sa sirom, mlekom i umucenim jajima.",
      "Zapeci u rerni dok povrsina ne porumeni.",
    ],
  },
  {
    name: "Vocna salata sa jogurtom",
    type: "Uzina",
    ingredients: ["banana", "jabuka", "jogurt", "med"],
    time: "10 min",
    nutrition: { calories: 280, protein: 9, fat: 5, carbs: 52 },
    drink: "Voda",
    steps: [
      "Operi, oljusti i iseckaj voce.",
      "Dodaj jogurt i promesaj.",
      "Po zelji dodaj malo meda.",
    ],
  },
  {
    name: "Jabuka (1 komad)",
    type: "Uzina",
    ingredients: ["jabuka"],
    time: "2 min",
    nutrition: { calories: 95, protein: 1, fat: 0, carbs: 25 },
    steps: ["Operi jabuku i posluzi je celu ili isecenu."],
  },
  {
    name: "Banana (1 komad)",
    type: "Uzina",
    ingredients: ["banana"],
    time: "1 min",
    nutrition: { calories: 105, protein: 1, fat: 0, carbs: 27 },
    steps: ["Oljusti bananu i posluzi."],
  },
  {
    name: "Pomorandza (1 komad)",
    type: "Uzina",
    ingredients: ["pomorandza"],
    time: "2 min",
    nutrition: { calories: 70, protein: 1, fat: 0, carbs: 18 },
    steps: ["Operi i oljusti pomorandzu, pa je podeli na kriske."],
  },
  {
    name: "Kruska (1 komad)",
    type: "Uzina",
    ingredients: ["kruska"],
    time: "2 min",
    nutrition: { calories: 100, protein: 1, fat: 0, carbs: 27 },
    steps: ["Operi krusku i posluzi je celu ili isecenu."],
  },
  {
    name: "Grozdje (150 g)",
    type: "Uzina",
    ingredients: ["grozdje"],
    time: "2 min",
    nutrition: { calories: 105, protein: 1, fat: 0, carbs: 27 },
    steps: ["Dobro operi grozdje i odmeri porciju od oko 150 g."],
  },
  {
    name: "Jagode (150 g)",
    type: "Uzina",
    ingredients: ["jagode"],
    time: "3 min",
    nutrition: { calories: 50, protein: 1, fat: 0, carbs: 12 },
    steps: ["Operi jagode, ukloni peteljke i posluzi."],
  },
  {
    name: "Lubenica (300 g)",
    type: "Uzina",
    ingredients: ["lubenica"],
    time: "3 min",
    nutrition: { calories: 90, protein: 2, fat: 0, carbs: 23 },
    steps: ["Iseci lubenicu i odmeri porciju od oko 300 g."],
  },
  {
    name: "Mesana vocna cinija",
    type: "Uzina",
    ingredients: ["jabuka", "banana", "pomorandza"],
    time: "8 min",
    nutrition: { calories: 180, protein: 2, fat: 1, carbs: 45 },
    steps: ["Operi i pripremi voce.", "Iseckaj ga u ciniju i lagano promesaj."],
  },
];
const drinkIdeas = [
  {
    name: "Voda",
    type: "Pice",
    ingredients: ["voda"],
    nutrition: { calories: 0, protein: 0, fat: 0, carbs: 0 },
    steps: ["Posluzi rashladjeno ili na sobnoj temperaturi."],
  },
  {
    name: "Mineralna voda",
    type: "Pice",
    ingredients: ["mineralna voda"],
    nutrition: { calories: 0, protein: 0, fat: 0, carbs: 0 },
    steps: ["Posluzi rashladjeno."],
  },
  {
    name: "Kafa bez secera",
    type: "Pice",
    ingredients: ["kafa", "voda"],
    nutrition: { calories: 5, protein: 0, fat: 0, carbs: 1 },
    steps: ["Pripremi kafu bez dodatog secera i mleka."],
  },
  {
    name: "Caj bez secera",
    type: "Pice",
    ingredients: ["caj", "voda"],
    nutrition: { calories: 2, protein: 0, fat: 0, carbs: 0 },
    steps: ["Prelij caj vrucom vodom i posluzi bez secera."],
  },
  {
    name: "Mleko",
    type: "Pice",
    ingredients: ["mleko"],
    nutrition: { calories: 125, protein: 8, fat: 5, carbs: 12 },
    steps: ["Sipaj jednu porciju od oko 250 ml."],
  },
  {
    name: "Sok od pomorandze",
    type: "Pice",
    ingredients: ["pomorandza"],
    nutrition: { calories: 110, protein: 2, fat: 0, carbs: 25 },
    steps: ["Iscedi pomorandzu i posluzi oko 250 ml soka."],
  },
  {
    name: "Domaca limunada",
    type: "Pice",
    ingredients: ["limun", "voda", "secer"],
    nutrition: { calories: 90, protein: 0, fat: 0, carbs: 23 },
    steps: ["Iscedi limun, dodaj vodu i malu kolicinu secera.", "Dobro promesaj i rashladi."],
  },
  {
    name: "Smuti od banane",
    type: "Pice",
    ingredients: ["banana", "mleko", "jogurt"],
    nutrition: { calories: 240, protein: 9, fat: 5, carbs: 42 },
    steps: ["Stavi sve sastojke u blender.", "Miksaj dok napitak ne postane gladak."],
  },
  {
    name: "Pivo (330 ml)",
    type: "Pice",
    ingredients: ["pivo"],
    nutrition: { calories: 140, protein: 1, fat: 0, carbs: 11 },
    steps: ["Jedna standardna porcija je oko 330 ml."],
    alcoholic: true,
  },
  {
    name: "Crno vino (150 ml)",
    type: "Pice",
    ingredients: ["crno vino"],
    nutrition: { calories: 125, protein: 0, fat: 0, carbs: 4 },
    steps: ["Jedna standardna porcija je oko 150 ml."],
    alcoholic: true,
  },
  {
    name: "Belo vino (150 ml)",
    type: "Pice",
    ingredients: ["belo vino"],
    nutrition: { calories: 120, protein: 0, fat: 0, carbs: 4 },
    steps: ["Jedna standardna porcija je oko 150 ml."],
    alcoholic: true,
  },
  {
    name: "Rakija (40 ml)",
    type: "Pice",
    ingredients: ["rakija"],
    nutrition: { calories: 95, protein: 0, fat: 0, carbs: 0 },
    steps: ["Jedna standardna porcija je oko 40 ml."],
    alcoholic: true,
  },
  {
    name: "Viski (40 ml)",
    type: "Pice",
    ingredients: ["viski"],
    nutrition: { calories: 100, protein: 0, fat: 0, carbs: 0 },
    steps: ["Jedna standardna porcija je oko 40 ml."],
    alcoholic: true,
  },
  {
    name: "Dzin-tonik (250 ml)",
    type: "Pice",
    ingredients: ["dzin", "tonik"],
    nutrition: { calories: 170, protein: 0, fat: 0, carbs: 16 },
    steps: ["Sipaj dzin i tonik preko leda. Jedna porcija je oko 250 ml."],
    alcoholic: true,
  },
];

let state = loadState();
calorieLimitInput.value = state.calorieLimit;
let openedRecipeKey = null;
let movingMealId = null;
let choosingSlotKey = null;
let customRecipeTarget = null;
let externalRecipeResults = [];
let externalRequestId = 0;
const translationCache = new Map();

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return {
      meals: [],
      checkedIngredients: [],
      pantry: [],
      calorieLimit: 2000,
      ingredientTranslationVersion: 0,
    };
  }

  const parsedState = JSON.parse(saved);
  return {
    meals: (parsedState.meals || []).map((meal) => ({
      ...meal,
      ingredients: [...new Set((meal.ingredients || []).map(normalizeIngredient))],
    })),
    checkedIngredients: [
      ...new Set((parsedState.checkedIngredients || []).map(normalizeIngredient)),
    ],
    pantry: [...new Set((parsedState.pantry || []).map(normalizeIngredient))],
    calorieLimit: Number.isFinite(Number(parsedState.calorieLimit))
      ? Number(parsedState.calorieLimit)
      : 2000,
    ingredientTranslationVersion: parsedState.ingredientTranslationVersion || 0,
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function createId() {
  return crypto.randomUUID();
}

function splitIngredients(value) {
  return value
    .split(",")
    .map((ingredient) => ingredient.trim())
    .filter(Boolean);
}

function getAllIngredients() {
  const ingredients = state.meals
    .flatMap((meal) => meal.ingredients)
    .map(normalizeIngredient)
    .filter((ingredient) => !state.pantry.includes(ingredient));
  return [...new Set(ingredients)];
}

function normalizeIngredient(value) {
  const normalized = String(value)
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replaceAll("\u0111", "dj")
    .replace(/\s+/g, " ");
  const exactMatch = ingredientAliases[normalized];

  if (exactMatch) {
    return exactMatch;
  }

  const matchingRule = ingredientAliasRules.find((rule) =>
    rule.terms.some(
      (term) =>
        normalized === term ||
        normalized.startsWith(`${term} `) ||
        normalized.endsWith(` ${term}`) ||
        normalized.includes(` ${term} `)
    )
  );

  return matchingRule?.value || normalized;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getMealNutrition(meal) {
  if (meal.nutrition) {
    return meal.nutrition;
  }

  const matchingRecipe = [...recipeIdeas, ...drinkIdeas].find(
    (recipe) => recipe.name === meal.name
  );
  return matchingRecipe?.nutrition || { calories: 0, protein: 0, fat: 0, carbs: 0 };
}

function getDailyNutrition(meals) {
  return meals.reduce(
    (total, meal) => {
      const nutrition = getMealNutrition(meal);
      total.calories += Number(nutrition.calories) || 0;
      total.protein += Number(nutrition.protein) || 0;
      total.fat += Number(nutrition.fat) || 0;
      total.carbs += Number(nutrition.carbs) || 0;
      return total;
    },
    { calories: 0, protein: 0, fat: 0, carbs: 0 }
  );
}

function createPantryRecipe() {
  if (state.pantry.length === 0) {
    return null;
  }

  const latestIngredient = state.pantry[state.pantry.length - 1];
  const companions = state.pantry
    .slice(0, -1)
    .reverse()
    .slice(0, 2);
  const pantryIngredients = [latestIngredient, ...companions];
  const ingredientText = latestIngredient.charAt(0).toUpperCase() + latestIngredient.slice(1);
  const proteinIngredients = ["jaja", "piletina", "tuna", "meso", "riba", "sir"];
  const hasProtein = pantryIngredients.some((ingredient) =>
    proteinIngredients.some((protein) => ingredient.includes(protein))
  );

  let name = `Topli tanjir sa ${ingredientText}`;
  let type = "Rucak";
  let time = "25 min";
  let extraIngredients = ["ulje", "so", "biber"];
  let steps = [
    "Operi, ocisti i iseckaj namirnice koje to zahtevaju.",
    "Zagrej malo ulja i prvo dobro obradi sastojke kojima je potrebno duze kuvanje.",
    "Dodaj preostale namirnice i kuvaj dok sve ne bude spremno za jelo.",
    "Zacini po ukusu i posluzi toplo.",
  ];

  if (pantryIngredients.includes("jaja")) {
    name = `Fritata sa ${ingredientText}`;
    type = "Dorucak";
    time = "20 min";
    extraIngredients = ["ulje", "so"];
    steps = [
      "Umuti jaja i blago ih posoli.",
      "Pripremi ostale namirnice i kratko ih proprzi.",
      "Prelij umucenim jajima i peci dok se fritata potpuno ne stegne.",
    ];
  } else if (pantryIngredients.includes("testenina")) {
    name = `Pasta sa ${ingredientText}`;
    time = "25 min";
    extraIngredients = ["ulje", "so"];
    steps = [
      "Skuvaj testeninu prema uputstvu sa pakovanja.",
      "Pripremi ostale namirnice u tiganju i termicki ih obradi po potrebi.",
      "Dodaj testeninu, promesaj i zacini po ukusu.",
    ];
  } else if (pantryIngredients.includes("pirinac")) {
    name = `Pirinac sa ${ingredientText}`;
    time = "35 min";
    extraIngredients = ["ulje", "so"];
    steps = [
      "Operi pirinac i pripremi ostale namirnice.",
      "Kratko proprzi sastojke, zatim dodaj pirinac i vodu.",
      "Kuvaj dok pirinac ne omeksa i sva tecnost ne bude upijena.",
    ];
  } else if (["jogurt", "ovsene pahuljice", "banana", "med"].includes(latestIngredient)) {
    name = `Jutarnja cinija sa ${ingredientText}`;
    type = "Dorucak";
    time = "10 min";
    extraIngredients = [];
    steps = [
      "Pripremi i po potrebi iseckaj sve namirnice.",
      "Slozi ih u ciniju i dobro promesaj.",
      "Posluzi odmah ili kratko rashladi.",
    ];
  }

  const ingredients = [...new Set([...pantryIngredients, ...extraIngredients])];
  return {
    key: "pantry-generated",
    name,
    type,
    ingredients,
    time,
    nutrition: {
      calories: 280 + ingredients.length * 35,
      protein: 10 + (hasProtein ? 15 : 0),
      fat: 11 + (hasProtein ? 5 : 0),
      carbs: 35 + ingredients.length * 4,
    },
    drink: "Voda sa limunom",
    steps,
    generated: true,
  };
}

function getSuggestedRecipes() {
  if (state.pantry.length === 0) {
    return [];
  }

  const matchedRecipes = recipeIdeas
    .map((recipe) => {
      const available = recipe.ingredients.filter((ingredient) =>
        state.pantry.includes(normalizeIngredient(ingredient))
      );
      const missing = recipe.ingredients.filter(
        (ingredient) => !state.pantry.includes(normalizeIngredient(ingredient))
      );

      return {
        ...recipe,
        key: recipe.name,
        available,
        missing,
        score: available.length / recipe.ingredients.length,
      };
    })
    .sort((first, second) => second.score - first.score || first.missing.length - second.missing.length);

  const topRecipes = matchedRecipes.slice(0, 19);

  const pantryRecipe = createPantryRecipe();
  const generatedSuggestion = {
    ...pantryRecipe,
    available: pantryRecipe.ingredients.filter((ingredient) =>
      state.pantry.includes(normalizeIngredient(ingredient))
    ),
    missing: pantryRecipe.ingredients.filter(
      (ingredient) => !state.pantry.includes(normalizeIngredient(ingredient))
    ),
  };

  return [generatedSuggestion, ...topRecipes];
}

function getRecipeChoices() {
  const suggestedRecipes = state.pantry.length > 0 ? getSuggestedRecipes() : [];
  const suggestedNames = new Set(suggestedRecipes.map((recipe) => recipe.name));
  const remainingRecipes = recipeIdeas
    .filter((recipe) => !suggestedNames.has(recipe.name))
    .map((recipe) => ({ ...recipe, key: recipe.name }));

  return [...suggestedRecipes, ...remainingRecipes];
}

function getDrinkChoices() {
  return drinkIdeas.map((drink) => ({ ...drink, key: drink.name }));
}

function convertExternalMeal(meal) {
  const ingredients = [];
  const ingredientDetails = [];
  const rawIngredients = [];
  const measures = [];

  for (let index = 1; index <= 20; index += 1) {
    const ingredient = meal[`strIngredient${index}`]?.trim();
    const measure = meal[`strMeasure${index}`]?.trim();

    if (ingredient) {
      ingredients.push(normalizeIngredient(ingredient));
      ingredientDetails.push([measure, ingredient].filter(Boolean).join(" "));
      rawIngredients.push(ingredient);
      measures.push(measure || "");
    }
  }

  const steps = (meal.strInstructions || "")
    .split(/\r?\n/)
    .map((step) => step.trim())
    .filter(Boolean);
  const ingredientCount = ingredients.length;

  return {
    name: meal.strMeal,
    ingredients,
    ingredientDetails,
    rawIngredients,
    measures,
    steps: steps.length > 0 ? steps : ["Uputstvo za pripremu nije dostupno."],
    nutrition: {
      calories: 220 + ingredientCount * 35,
      protein: 8 + ingredientCount * 1.5,
      fat: 8 + ingredientCount,
      carbs: 25 + ingredientCount * 3,
    },
  };
}

function decodeTranslatedText(value) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = value;
  return textarea.value;
}

function toSerbianLatin(value) {
  return Array.from(value, (character) => serbianCyrillicToLatin[character] || character).join("");
}

async function translateTextToSerbian(text) {
  if (!text) {
    return "";
  }

  if (translationCache.has(text)) {
    return translationCache.get(text);
  }

  const response = await fetch(
    `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|sr`
  );

  if (!response.ok) {
    throw new Error("Translation failed");
  }

  const data = await response.json();
  const translatedText = toSerbianLatin(
    decodeTranslatedText(data.responseData?.translatedText || text)
  );
  translationCache.set(text, translatedText);
  return translatedText;
}

function splitTranslationChunks(text, maxLength = 450) {
  const words = text.split(/\s+/).filter(Boolean);
  const chunks = [];
  let currentChunk = "";

  words.forEach((word) => {
    const nextChunk = currentChunk ? `${currentChunk} ${word}` : word;
    if (nextChunk.length > maxLength && currentChunk) {
      chunks.push(currentChunk);
      currentChunk = word;
    } else {
      currentChunk = nextChunk;
    }
  });

  if (currentChunk) {
    chunks.push(currentChunk);
  }

  return chunks;
}

async function translateLongText(text) {
  const chunks = splitTranslationChunks(text);
  const translatedChunks = [];

  for (const chunk of chunks) {
    translatedChunks.push(await translateTextToSerbian(chunk));
  }

  return translatedChunks.join(" ");
}

function translateMeasure(measure) {
  return measure
    .replace(/\btbsp\b/gi, "kasika")
    .replace(/\btsp\b/gi, "kasicica")
    .replace(/\bcups?\b/gi, "solja")
    .replace(/\bcloves?\b/gi, "cen")
    .replace(/\bslices?\b/gi, "kriska")
    .replace(/\bpinch\b/gi, "prstohvat")
    .replace(/\bbunch\b/gi, "veza");
}

async function translateExternalRecipe(recipe) {
  const translatedName = await translateTextToSerbian(recipe.name);
  const translatedIngredients = [];

  for (const ingredient of recipe.rawIngredients) {
    const translatedIngredient = await translateTextToSerbian(ingredient);
    translatedIngredients.push(normalizeIngredient(translatedIngredient));
  }

  const translatedSteps = [];
  for (const step of recipe.steps) {
    translatedSteps.push(await translateLongText(step));
  }

  return {
    ...recipe,
    name: translatedName,
    ingredients: [...new Set(translatedIngredients)],
    ingredientDetails: translatedIngredients.map((ingredient, index) =>
      [translateMeasure(recipe.measures[index]), ingredient].filter(Boolean).join(" ")
    ),
    steps: translatedSteps,
  };
}

async function translateSavedIngredientList() {
  if (state.ingredientTranslationVersion >= 1) {
    return;
  }

  const knownSerbianIngredients = new Set([
    ...recipeIdeas.flatMap((recipe) => recipe.ingredients).map(normalizeIngredient),
    ...drinkIdeas.flatMap((drink) => drink.ingredients).map(normalizeIngredient),
    ...Object.values(ingredientAliases).map(normalizeIngredient),
    ...ingredientAliasRules.map((rule) => normalizeIngredient(rule.value)),
  ]);
  const savedIngredients = [
    ...state.meals.flatMap((meal) => meal.ingredients || []),
    ...state.pantry,
    ...state.checkedIngredients,
  ];
  const candidates = [
    ...new Set(
      savedIngredients
        .map(normalizeIngredient)
        .filter((ingredient) => ingredient && !knownSerbianIngredients.has(ingredient))
    ),
  ];
  const translatedIngredients = new Map();
  let translationFailed = false;

  for (const ingredient of candidates) {
    try {
      const translatedIngredient = normalizeIngredient(
        await translateTextToSerbian(ingredient)
      );
      translatedIngredients.set(ingredient, translatedIngredient);
    } catch (error) {
      translationFailed = true;
    }
  }

  const translateIngredient = (ingredient) => {
    const normalized = normalizeIngredient(ingredient);
    return translatedIngredients.get(normalized) || normalized;
  };

  state.meals = state.meals.map((meal) => ({
    ...meal,
    ingredients: [...new Set((meal.ingredients || []).map(translateIngredient))],
  }));
  state.pantry = [...new Set(state.pantry.map(translateIngredient))];
  state.checkedIngredients = [
    ...new Set(state.checkedIngredients.map(translateIngredient)),
  ];

  if (!translationFailed) {
    state.ingredientTranslationVersion = 1;
  }

  render();
}

function renderExternalRecipeResults() {
  recipeSearchResults.innerHTML = "";

  externalRecipeResults.forEach((recipe, index) => {
    const article = document.createElement("article");
    article.className = "search-result";

    const title = document.createElement("h3");
    title.textContent = recipe.name;

    const ingredients = document.createElement("p");
    ingredients.className = "search-result-ingredients";
    ingredients.textContent = `Sastojci: ${recipe.ingredientDetails.join(", ")}`;

    const missingIngredients = recipe.ingredients.filter(
      (ingredient) => !state.pantry.includes(normalizeIngredient(ingredient))
    );
    const availability = document.createElement("div");
    availability.className = "search-result-availability";

    if (missingIngredients.length > 0) {
      const missingTitle = document.createElement("p");
      missingTitle.className = "missing-ingredients-title";
      missingTitle.textContent = "Nedostaje:";
      const missingList = document.createElement("ul");
      missingList.className = "missing-ingredient-list";
      missingIngredients.forEach((ingredient) => {
        const item = document.createElement("li");
        item.textContent = ingredient;
        missingList.appendChild(item);
      });
      availability.append(missingTitle, missingList);
    } else {
      availability.textContent = "Imas sve potrebne namirnice.";
    }

    const details = document.createElement("details");
    const summary = document.createElement("summary");
    summary.textContent = "Prikazi recept";
    const steps = document.createElement("ol");
    recipe.steps.forEach((step) => {
      const item = document.createElement("li");
      item.textContent = step;
      steps.appendChild(item);
    });
    details.append(summary, steps);

    const addButton = document.createElement("button");
    addButton.type = "button";
    addButton.dataset.addExternalRecipe = String(index);
    addButton.textContent = "Prevedi i dodaj u termin";

    article.append(title, ingredients, availability, details, addButton);
    recipeSearchResults.appendChild(article);
  });
}

async function loadExternalSuggestions() {
  const requestId = ++externalRequestId;
  recipeSearchStatus.textContent = "Ucitavam predloge jela...";

  try {
    const requests = Array.from({ length: 10 }, (_, index) =>
      fetch(
        `https://www.themealdb.com/api/json/v1/1/random.php?request=${Date.now()}-${index}`
      ).then((response) => {
        if (!response.ok) {
          throw new Error("Recipe suggestions failed");
        }
        return response.json();
      })
    );
    const responses = await Promise.all(requests);
    const uniqueMeals = new Map();

    responses.forEach((data) => {
      const meal = data.meals?.[0];
      if (meal) {
        uniqueMeals.set(meal.idMeal, meal);
      }
    });

    if (requestId !== externalRequestId) {
      return;
    }

    externalRecipeResults = [...uniqueMeals.values()].map(convertExternalMeal);
    recipeSearchStatus.textContent = `Predlozeno: ${externalRecipeResults.length}`;
    renderExternalRecipeResults();
  } catch (error) {
    if (requestId !== externalRequestId) {
      return;
    }

    recipeSearchStatus.textContent =
      "Predlozi trenutno nisu dostupni. Mozes pretraziti jelo po nazivu.";
  }
}

function renderMealCard(meal) {
  const nutrition = getMealNutrition(meal);
  return `
    <article class="meal">
      <div class="meal-name">${escapeHtml(meal.name)}</div>
      <div class="meal-calories">${Math.round(Number(nutrition.calories) || 0)} kcal</div>
      ${meal.alcoholic ? '<div class="alcohol-label">Alkoholno</div>' : ""}
      ${
        meal.ingredients.length > 0
          ? `<div class="meal-ingredients">${meal.ingredients.map(escapeHtml).join(", ")}</div>`
          : ""
      }
      ${
        meal.steps?.length > 0
          ? `<details class="saved-recipe">
              <summary>Prikazi recept</summary>
              <ol>${meal.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
            </details>`
          : ""
      }
      ${
        movingMealId === meal.id
          ? `<div class="move-meal-form">
              <label>
                Novi dan
                <select data-move-day>
                  ${days
                    .map(
                      (dayOption) =>
                        `<option value="${dayOption}" ${
                          dayOption === meal.day ? "selected" : ""
                        }>${dayOption}</option>`
                    )
                    .join("")}
                </select>
              </label>
              <label>
                Novi termin
                <select data-move-type>
                  ${mealTypes
                    .map(
                      (typeOption) =>
                        `<option value="${typeOption}" ${
                          typeOption === meal.type ? "selected" : ""
                        }>${typeOption}</option>`
                    )
                    .join("")}
                </select>
              </label>
              <div class="move-meal-actions">
                <button type="button" data-confirm-move="${meal.id}">Sacuvaj</button>
                <button class="small-button" type="button" data-cancel-move>Odustani</button>
              </div>
            </div>`
          : `<div class="meal-actions">
              <button class="small-button" type="button" data-start-move="${meal.id}">Premesti</button>
              <button class="small-button danger" type="button" data-remove-meal="${meal.id}">Obrisi</button>
            </div>`
      }
    </article>
  `;
}

function renderPlanner() {
  const foodChoices = getRecipeChoices();
  const dayHeadings = days
    .map((day) => {
      const dailyNutrition = getDailyNutrition(state.meals.filter((meal) => meal.day === day));
      const calorieDifference = dailyNutrition.calories - state.calorieLimit;
      const isOverLimit = state.calorieLimit > 0 && calorieDifference > 0;
      return `
        <div class="planner-day-heading ${isOverLimit ? "over-calorie-limit" : ""}">
          <strong>${day}</strong>
          <div class="daily-nutrition" aria-label="Ukupne nutritivne vrednosti za ${day}">
            <span>${Math.round(dailyNutrition.calories)} kcal</span>
            <span>${Math.round(dailyNutrition.protein * 10) / 10} g P</span>
            <span>${Math.round(dailyNutrition.fat * 10) / 10} g M</span>
            <span>${Math.round(dailyNutrition.carbs * 10) / 10} g UH</span>
          </div>
          ${
            isOverLimit
              ? `<p class="calorie-warning" role="status">Prekoraceno za ${Math.round(
                  calorieDifference
                )} kcal</p>`
              : ""
          }
        </div>
      `;
    })
    .join("");

  const mealRows = mealTypes
    .map(
      (mealType) => `
        <div class="meal-row-label">${mealType}</div>
        ${days
          .map((day) => {
            const meals = state.meals.filter(
              (meal) => meal.day === day && meal.type === mealType
            );
            const slotKey = `${day}|${mealType}`;
            const recipeChoices = mealType === "Pice" ? getDrinkChoices() : foodChoices;
            return `
              <div class="meal-slot ${meals.length === 0 ? "meal-slot-empty" : ""}"
                aria-label="${mealType}, ${day}" data-slot-day="${day}" data-slot-type="${mealType}">
                ${meals.map(renderMealCard).join("")}
                ${
                  meals.length === 0
                    ? choosingSlotKey === slotKey
                      ? `<div class="slot-picker">
                          <label>
                            Jelo
                            <select data-slot-recipe>
                              <option value="">Izaberi jelo</option>
                              ${recipeChoices
                                .map(
                                  (recipe) =>
                                    `<option value="${recipe.key}">${recipe.name}${
                                      mealType === "Pice"
                                        ? ` (${recipe.alcoholic ? "alkoholno, " : ""}${
                                            recipe.nutrition.calories
                                          } kcal)`
                                        : ""
                                    }</option>`
                                )
                                .join("")}
                            </select>
                          </label>
                          <button type="button" data-add-slot-meal>Dodaj</button>
                          ${
                            mealType === "Pice"
                              ? ""
                              : `<button class="small-button" type="button" data-search-custom-meal>
                                  Jelo van liste
                                </button>`
                          }
                          <button class="small-button" type="button" data-cancel-slot>Odustani</button>
                        </div>`
                      : `<button class="empty-slot-button" type="button" data-open-slot="${slotKey}">
                          ${mealType === "Pice" ? "Izaberi pice" : "Izaberi obrok"}
                        </button>`
                    : ""
                }
              </div>
            `;
          })
          .join("")}
      `
    )
    .join("");

  planner.innerHTML = `
    <div class="planner-table">
      <div class="planner-corner">Termin</div>
      ${dayHeadings}
      ${mealRows}
    </div>
  `;
}

function renderShoppingList() {
  const ingredients = getAllIngredients();
  shoppingList.innerHTML = "";

  if (ingredients.length === 0) {
    shoppingList.innerHTML = '<p class="empty">Namirnice ce se pojaviti kada dodas obrok.</p>';
    return;
  }

  ingredients.forEach((ingredient) => {
    const item = document.createElement("label");
    item.className = "shopping-item";
    item.innerHTML = `
      <input type="checkbox" data-ingredient="${ingredient}"
        aria-label="Dodaj ${ingredient} u kucne zalihe" />
      <span>${ingredient}</span>
    `;

    shoppingList.appendChild(item);
  });
}

function renderPantry() {
  pantryList.innerHTML = "";

  if (state.pantry.length === 0) {
    pantryList.innerHTML = '<p class="empty">Dodaj namirnice koje vec imas.</p>';
    return;
  }

  state.pantry.forEach((ingredient) => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.innerHTML = `
      ${ingredient}
      <button type="button" aria-label="Obrisi ${ingredient}" data-remove-pantry="${ingredient}">
        x
      </button>
    `;

    pantryList.appendChild(tag);
  });
}

function renderSuggestions() {
  const suggestions = getSuggestedRecipes();
  suggestionsList.innerHTML = "";

  if (state.pantry.length === 0) {
    suggestionsList.innerHTML =
      '<p class="empty">Kada dodas namirnice koje imas, ovde ce se pojaviti predlozi.</p>';
    return;
  }

  if (suggestions.length === 0) {
    suggestionsList.innerHTML =
      '<p class="empty">Za sada nema predloga. Dodaj jos neku namirnicu.</p>';
    return;
  }

  suggestions.forEach((recipe) => {
    const isOpen = openedRecipeKey === recipe.key;
    const suggestion = document.createElement("article");
    suggestion.className = `suggestion ${isOpen ? "open" : ""}`;
    suggestion.innerHTML = `
      <button class="suggestion-toggle" type="button" data-toggle-recipe="${recipe.key}" aria-expanded="${isOpen}">
        <span>
          <strong class="suggestion-title">${recipe.name}</strong>
          <small>${recipe.generated ? "Nova ideja od vasih namirnica" : recipe.type}</small>
        </span>
        <span class="toggle-label">${isOpen ? "Sakrij" : "Prikazi recept"}</span>
      </button>
      ${
        isOpen
          ? `
        <div class="suggestion-content">
          <span class="suggestion-score">${recipe.type} - imas ${recipe.available.length} od ${
              recipe.ingredients.length
            }</span>
          <p class="suggestion-detail">Imas: ${recipe.available.join(", ")}</p>
          ${
            recipe.missing.length > 0
              ? `<div class="missing-ingredients">
                  <p class="missing-ingredients-title">Fali:</p>
                  <ul class="missing-ingredient-list">
                    ${recipe.missing
                      .map((ingredient) => `<li>${escapeHtml(ingredient)}</li>`)
                      .join("")}
                  </ul>
                </div>`
              : '<p class="suggestion-detail">Imas sve potrebno.</p>'
          }
          <div class="recipe-box">
            <p class="recipe-time">Vreme pripreme: ${recipe.time}</p>
            <div class="nutrition-list" aria-label="Nutritivne vrednosti po porciji">
              <span>${recipe.nutrition.calories} kcal</span>
              <span>${recipe.nutrition.protein} g proteina</span>
              <span>${recipe.nutrition.fat} g masti</span>
              <span>${recipe.nutrition.carbs} g UH</span>
            </div>
            <ol class="recipe-steps">
              ${recipe.steps.map((step) => `<li>${step}</li>`).join("")}
            </ol>
          </div>
          <div class="recipe-placement">
            <label>
              Dan
              <select data-recipe-day>
                ${days.map((day) => `<option value="${day}">${day}</option>`).join("")}
              </select>
            </label>
            <label>
              Obrok
              <select data-recipe-type>
                ${mealTypes
                  .filter((type) => type !== "Pice")
                  .map(
                    (type) =>
                      `<option value="${type}" ${type === recipe.type ? "selected" : ""}>${type}</option>`
                  )
                  .join("")}
              </select>
            </label>
            <button type="button" data-add-recipe="${recipe.key}">
              Dodaj u jelovnik
            </button>
          </div>
        </div>
      `
          : ""
      }
    `;

    suggestionsList.appendChild(suggestion);
  });
}

function renderSummary() {
  const ingredients = getAllIngredients();
  mealCount.textContent = `${state.meals.length} obroka`;
  shoppingCount.textContent = `${ingredients.length} namirnica`;
}

function render() {
  renderPlanner();
  renderShoppingList();
  renderPantry();
  renderSuggestions();
  renderSummary();
  saveState();
}

mealForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const meal = {
    id: createId(),
    day: mealDayInput.value,
    type: mealTypeInput.value,
    name: mealNameInput.value.trim(),
    ingredients: splitIngredients(mealIngredientsInput.value),
    nutrition: {
      calories: Number(mealCaloriesInput.value) || 0,
      protein: Number(mealProteinInput.value) || 0,
      fat: Number(mealFatInput.value) || 0,
      carbs: Number(mealCarbsInput.value) || 0,
    },
  };

  if (!meal.name) {
    return;
  }

  state.meals.push(meal);
  mealNameInput.value = "";
  mealIngredientsInput.value = "";
  mealCaloriesInput.value = "";
  mealProteinInput.value = "";
  mealFatInput.value = "";
  mealCarbsInput.value = "";
  render();
});

planner.addEventListener("click", (event) => {
  const openSlotButton = event.target.closest("[data-open-slot]");

  if (openSlotButton) {
    choosingSlotKey = openSlotButton.dataset.openSlot;
    renderPlanner();
    return;
  }

  if (event.target.closest("[data-cancel-slot]")) {
    choosingSlotKey = null;
    renderPlanner();
    return;
  }

  const searchCustomButton = event.target.closest("[data-search-custom-meal]");

  if (searchCustomButton) {
    const slot = searchCustomButton.closest(".meal-slot");
    customRecipeTarget = {
      day: slot.dataset.slotDay,
      type: slot.dataset.slotType,
    };
    externalRecipeResults = [];
    recipeSearchInput.value = "";
    recipeSearchStatus.textContent = "";
    recipeSearchResults.innerHTML = "";
    recipeSearchDialog.showModal();
    recipeSearchInput.focus();
    loadExternalSuggestions();
    return;
  }

  const addSlotButton = event.target.closest("[data-add-slot-meal]");

  if (addSlotButton) {
    const slot = addSlotButton.closest(".meal-slot");
    const recipeKey = slot.querySelector("[data-slot-recipe]").value;
    const availableChoices =
      slot.dataset.slotType === "Pice" ? getDrinkChoices() : getRecipeChoices();
    const recipe = availableChoices.find((item) => item.key === recipeKey);

    if (recipe) {
      state.meals.push({
        id: createId(),
        day: slot.dataset.slotDay,
        type: slot.dataset.slotType,
        name: recipe.name,
        ingredients: [...recipe.ingredients],
        nutrition: { ...recipe.nutrition },
        steps: [...recipe.steps],
        alcoholic: Boolean(recipe.alcoholic),
      });
      choosingSlotKey = null;
      render();
    }

    return;
  }

  const startMoveButton = event.target.closest("[data-start-move]");

  if (startMoveButton) {
    movingMealId = startMoveButton.dataset.startMove;
    renderPlanner();
    return;
  }

  if (event.target.closest("[data-cancel-move]")) {
    movingMealId = null;
    renderPlanner();
    return;
  }

  const confirmMoveButton = event.target.closest("[data-confirm-move]");

  if (confirmMoveButton) {
    const meal = state.meals.find((item) => item.id === confirmMoveButton.dataset.confirmMove);
    const moveForm = confirmMoveButton.closest(".move-meal-form");

    if (meal && moveForm) {
      meal.day = moveForm.querySelector("[data-move-day]").value;
      meal.type = moveForm.querySelector("[data-move-type]").value;
      movingMealId = null;
      render();
    }

    return;
  }

  const removeButton = event.target.closest("[data-remove-meal]");
  const mealId = removeButton?.dataset.removeMeal;

  if (!mealId) {
    return;
  }

  state.meals = state.meals.filter((meal) => meal.id !== mealId);
  movingMealId = null;
  choosingSlotKey = null;
  state.checkedIngredients = state.checkedIngredients.filter((ingredient) =>
    getAllIngredients().includes(ingredient)
  );
  render();
});

shoppingList.addEventListener("change", (event) => {
  const ingredient = event.target.dataset.ingredient;

  if (!ingredient || !event.target.checked) {
    return;
  }

  const normalizedIngredient = normalizeIngredient(ingredient);
  if (!state.pantry.includes(normalizedIngredient)) {
    state.pantry.push(normalizedIngredient);
  }
  state.checkedIngredients = state.checkedIngredients.filter(
    (item) => normalizeIngredient(item) !== normalizedIngredient
  );

  render();
});

calorieLimitInput.addEventListener("change", () => {
  state.calorieLimit = Math.max(0, Number(calorieLimitInput.value) || 0);
  calorieLimitInput.value = state.calorieLimit;
  renderPlanner();
  saveState();
});

pantryForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const ingredient = normalizeIngredient(pantryIngredientInput.value);

  if (!ingredient || state.pantry.includes(ingredient)) {
    pantryIngredientInput.value = "";
    return;
  }

  state.pantry.push(ingredient);
  pantryIngredientInput.value = "";
  render();
});

pantryList.addEventListener("click", (event) => {
  const ingredient = event.target.dataset.removePantry;

  if (!ingredient) {
    return;
  }

  state.pantry = state.pantry.filter((item) => item !== ingredient);
  render();
});

suggestionsList.addEventListener("click", (event) => {
  const toggleButton = event.target.closest("[data-toggle-recipe]");

  if (toggleButton) {
    const recipeKey = toggleButton.dataset.toggleRecipe;
    openedRecipeKey = openedRecipeKey === recipeKey ? null : recipeKey;
    renderSuggestions();
    return;
  }

  const addButton = event.target.closest("[data-add-recipe]");
  const recipeKey = addButton?.dataset.addRecipe;

  if (!recipeKey) {
    return;
  }

  const recipe = getSuggestedRecipes().find((item) => item.key === recipeKey);

  if (!recipe) {
    return;
  }

  const suggestion = event.target.closest(".suggestion");
  const selectedDay = suggestion.querySelector("[data-recipe-day]").value;
  const selectedType = suggestion.querySelector("[data-recipe-type]").value;

  state.meals.push({
    id: createId(),
    day: selectedDay,
    type: selectedType,
    name: recipe.name,
    ingredients: [...recipe.ingredients],
    nutrition: { ...recipe.nutrition },
    steps: [...recipe.steps],
  });

  render();
});

closeRecipeSearchButton.addEventListener("click", () => {
  recipeSearchDialog.close();
});

recipeSearchForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const query = recipeSearchInput.value.trim();

  if (!query) {
    return;
  }

  const requestId = ++externalRequestId;

  recipeSearchStatus.textContent = "Trazim recepte...";
  recipeSearchResults.innerHTML = "";
  externalRecipeResults = [];

  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
      throw new Error("Recipe search failed");
    }

    const data = await response.json();

    if (requestId !== externalRequestId) {
      return;
    }

    externalRecipeResults = (data.meals || []).slice(0, 20).map(convertExternalMeal);

    if (externalRecipeResults.length === 0) {
      recipeSearchStatus.textContent = "Nema pronadjenih recepata. Probaj drugi ili medjunarodni naziv.";
      return;
    }

    recipeSearchStatus.textContent = `Pronadjeno: ${externalRecipeResults.length}`;
    renderExternalRecipeResults();
  } catch (error) {
    if (requestId !== externalRequestId) {
      return;
    }

    recipeSearchStatus.textContent =
      "Pretraga trenutno nije dostupna. Proveri internet vezu i pokusaj ponovo.";
  }
});

recipeSearchResults.addEventListener("click", async (event) => {
  const addButton = event.target.closest("[data-add-external-recipe]");

  if (!addButton || !customRecipeTarget) {
    return;
  }

  const originalRecipe = externalRecipeResults[Number(addButton.dataset.addExternalRecipe)];

  if (!originalRecipe) {
    return;
  }

  addButton.disabled = true;
  addButton.textContent = "Prevodim recept...";
  recipeSearchStatus.textContent = "Prevod je u toku. Ovo moze potrajati nekoliko sekundi.";

  try {
    const recipe = await translateExternalRecipe(originalRecipe);

    state.meals.push({
      id: createId(),
      day: customRecipeTarget.day,
      type: customRecipeTarget.type,
      name: recipe.name,
      ingredients: [...recipe.ingredients],
      nutrition: { ...recipe.nutrition },
      steps: [...recipe.steps],
    });

    choosingSlotKey = null;
    customRecipeTarget = null;
    recipeSearchDialog.close();
    render();
  } catch (error) {
    recipeSearchStatus.textContent =
      "Prevod trenutno nije dostupan. Proveri internet vezu i pokusaj ponovo.";
    addButton.disabled = false;
    addButton.textContent = "Prevedi i dodaj u termin";
  }
});

render();
translateSavedIngredientList();
