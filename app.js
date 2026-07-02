if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}

const mountains = [
  { id: "tara", name: "Tara", lat: 43.889, lng: 19.566, height: "1.544 m", region: "Zapadna Srbija" },
  { id: "zlatibor", name: "Zlatibor", lat: 43.729, lng: 19.697, height: "1.496 m", region: "Zapadna Srbija" },
  { id: "kopaonik", name: "Kopaonik", lat: 43.276, lng: 20.822, height: "2.017 m", region: "Centralna Srbija" },
  { id: "stara-planina", name: "Stara planina", lat: 43.368, lng: 22.615, height: "2.169 m", region: "Istočna Srbija" },
  { id: "fruska-gora", name: "Fruška gora", lat: 45.153, lng: 19.723, height: "539 m", region: "Vojvodina" },
  { id: "golija", name: "Golija", lat: 43.338, lng: 20.255, height: "1.833 m", region: "Jugozapadna Srbija" },
  { id: "rtanj", name: "Rtanj", lat: 43.776, lng: 21.893, height: "1.565 m", region: "Istočna Srbija" },
  { id: "avala", name: "Avala", lat: 44.687, lng: 20.514, height: "511 m", region: "Beograd" },
  { id: "kosmaj", name: "Kosmaj", lat: 44.467, lng: 20.567, height: "626 m", region: "Šumadija" },
  { id: "rudnik", name: "Rudnik", lat: 44.138, lng: 20.498, height: "1.132 m", region: "Šumadija" },
  { id: "maljen", name: "Maljen", lat: 44.109, lng: 19.975, height: "1.103 m", region: "Zapadna Srbija" },
  { id: "povlen", name: "Povlen", lat: 44.119, lng: 19.730, height: "1.347 m", region: "Zapadna Srbija" },
  { id: "cer", name: "Cer", lat: 44.601, lng: 19.475, height: "687 m", region: "Zapadna Srbija" },
  { id: "gucevo", name: "Gučevo", lat: 44.493, lng: 19.182, height: "779 m", region: "Zapadna Srbija" },
  { id: "javor", name: "Javor", lat: 43.493, lng: 20.035, height: "1.520 m", region: "Jugozapadna Srbija" },
  { id: "jadovnik", name: "Jadovnik", lat: 43.196, lng: 19.714, height: "1.734 m", region: "Jugozapadna Srbija" },
  { id: "zlatarska-planina", name: "Zlatar", lat: 43.383, lng: 19.804, height: "1.627 m", region: "Jugozapadna Srbija" },
  { id: "murtenica", name: "Murtenica", lat: 43.576, lng: 19.821, height: "1.480 m", region: "Jugozapadna Srbija" },
  { id: "ozren", name: "Ozren", lat: 43.665, lng: 21.878, height: "1.174 m", region: "Istočna Srbija" },
  { id: "devica", name: "Devica", lat: 43.588, lng: 21.957, height: "1.187 m", region: "Istočna Srbija" },
  { id: "homoljske-planine", name: "Homoljske planine", lat: 44.218, lng: 21.637, height: "940 m", region: "Istočna Srbija" },
  { id: "kucajske-planine", name: "Kučajske planine", lat: 44.013, lng: 21.746, height: "1.284 m", region: "Istočna Srbija" },
  { id: "deli-jovan", name: "Deli Jovan", lat: 44.150, lng: 22.126, height: "1.141 m", region: "Istočna Srbija" },
  { id: "mucanj", name: "Mučanj", lat: 43.595, lng: 20.114, height: "1.534 m", region: "Jugozapadna Srbija" },
  { id: "mokra-gora", name: "Mokra Gora", lat: 43.118, lng: 20.777, height: "2.155 m", region: "Kosovo / Srbija" },
  { id: "besna-kobila", name: "Besna Kobila", lat: 42.546, lng: 22.219, height: "1.922 m", region: "Južna Srbija" },
  { id: "vlasina", name: "Vardenik", lat: 42.694, lng: 22.331, height: "1.875 m", region: "Južna Srbija" },
  { id: "kukavica", name: "Kukavica", lat: 42.789, lng: 21.959, height: "1.442 m", region: "Južna Srbija" },
  { id: "raden", name: "Radan", lat: 43.030, lng: 21.500, height: "1.409 m", region: "Južna Srbija" },
  { id: "suvobor", name: "Suvobor", lat: 44.095, lng: 20.165, height: "866 m", region: "Zapadna Srbija" },
  { id: "prokletije", name: "Prokletije", lat: 42.525, lng: 19.811, height: "2.694 m", region: "Crna Gora / Albanija / Kosovo" },
  { id: "durmitor", name: "Durmitor", lat: 43.128, lng: 19.033, height: "2.523 m", region: "Crna Gora" },
  { id: "sara", name: "Šar-planina", lat: 42.083, lng: 20.833, height: "2.747 m", region: "Kosovo / Severna Makedonija" },
  { id: "lovcen", name: "Lovćen", lat: 42.399, lng: 18.837, height: "1.749 m", region: "Crna Gora" },
  { id: "bjelasica", name: "Bjelasica", lat: 42.900, lng: 19.673, height: "2.139 m", region: "Crna Gora" },
  { id: "sinjajevina", name: "Sinjajevina", lat: 42.982, lng: 19.386, height: "2.277 m", region: "Crna Gora" },
  { id: "maglic", name: "Maglić", lat: 43.281, lng: 18.733, height: "2.386 m", region: "BiH / Crna Gora" },
  { id: "jahorina", name: "Jahorina", lat: 43.735, lng: 18.565, height: "1.916 m", region: "Bosna i Hercegovina" },
  { id: "bjelasnica", name: "Bjelašnica", lat: 43.704, lng: 18.255, height: "2.067 m", region: "Bosna i Hercegovina" },
  { id: "romanija", name: "Romanija", lat: 43.906, lng: 18.805, height: "1.652 m", region: "Bosna i Hercegovina" }
];

const mountainLabelAngles = {
  tara: -24,
  zlatibor: -18,
  kopaonik: -28,
  "stara-planina": -22,
  "fruska-gora": 7,
  golija: -30,
  rtanj: -18,
  avala: 4,
  kosmaj: -8,
  rudnik: -16,
  maljen: -20,
  povlen: -22,
  cer: 9,
  gucevo: -12,
  javor: -28,
  jadovnik: -25,
  "zlatarska-planina": -20,
  murtenica: -24,
  ozren: -15,
  devica: -18,
  "homoljske-planine": -10,
  "kucajske-planine": -15,
  "deli-jovan": -20,
  mucanj: -23,
  "mokra-gora": -27,
  "besna-kobila": -18,
  vlasina: -18,
  kukavica: -14,
  raden: -12,
  suvobor: -18,
  prokletije: -30,
  durmitor: -23,
  sara: -34,
  lovcen: -18,
  bjelasica: -25,
  sinjajevina: -20,
  maglic: -24,
  jahorina: -18,
  bjelasnica: -22,
  romanija: -16
};

const rivers = [
  {
    id: "dunav",
    name: "Dunav",
    length: "2.850 km",
    region: "Srednja i jugoistočna Evropa",
    path: [
      [45.49, 18.91],
      [45.39, 19.02],
      [45.31, 19.22],
      [45.24, 19.51],
      [45.25, 19.86],
      [45.08, 20.05],
      [44.92, 20.22],
      [44.82, 20.45],
      [44.78, 20.72],
      [44.66, 20.93],
      [44.69, 21.17],
      [44.72, 21.42],
      [44.68, 21.68],
      [44.65, 21.92],
      [44.67, 22.18],
      [44.55, 22.33],
      [44.37, 22.48],
      [44.24, 22.66]
    ]
  },
  {
    id: "sava",
    name: "Sava",
    length: "945 km",
    region: "Slovenija / Hrvatska / BiH / Srbija",
    path: [
      [45.19, 15.88],
      [45.26, 16.22],
      [45.21, 16.62],
      [45.15, 17.02],
      [45.16, 17.39],
      [45.07, 17.78],
      [44.97, 18.22],
      [44.94, 18.61],
      [44.87, 18.96],
      [44.83, 19.28],
      [44.78, 19.62],
      [44.76, 19.86],
      [44.77, 20.12],
      [44.82, 20.45]
    ]
  },
  {
    id: "drina",
    name: "Drina",
    length: "346 km",
    region: "Srbija / BiH",
    path: [
      [43.34, 18.84],
      [43.45, 18.95],
      [43.55, 19.13],
      [43.65, 19.27],
      [43.79, 19.33],
      [43.91, 19.42],
      [44.03, 19.50],
      [44.15, 19.51],
      [44.28, 19.47],
      [44.39, 19.35],
      [44.52, 19.23],
      [44.67, 19.20],
      [44.78, 19.28],
      [44.89, 19.34]
    ]
  },
  {
    id: "morava",
    name: "Velika Morava",
    length: "185 km",
    region: "Centralna Srbija",
    path: [
      [43.72, 21.38],
      [43.84, 21.36],
      [43.94, 21.27],
      [44.04, 21.22],
      [44.16, 21.18],
      [44.27, 21.12],
      [44.38, 21.08],
      [44.49, 21.03],
      [44.60, 21.00],
      [44.70, 21.08],
      [44.75, 21.17]
    ]
  },
  {
    id: "nisava",
    name: "Nišava",
    length: "218 km",
    region: "Bugarska / Srbija",
    path: [
      [43.16, 22.90],
      [43.12, 22.76],
      [43.15, 22.61],
      [43.18, 22.45],
      [43.25, 22.31],
      [43.30, 22.13],
      [43.31, 22.00],
      [43.32, 21.90]
    ]
  },
  {
    id: "ibar",
    name: "Ibar",
    length: "272 km",
    region: "Crna Gora / Kosovo / Srbija",
    path: [
      [42.66, 20.05],
      [42.74, 20.20],
      [42.82, 20.40],
      [42.88, 20.60],
      [42.98, 20.68],
      [43.10, 20.70],
      [43.20, 20.67],
      [43.31, 20.62],
      [43.43, 20.62],
      [43.55, 20.66],
      [43.67, 20.68],
      [43.73, 20.69]
    ]
  },
  {
    id: "tisa",
    name: "Tisa",
    length: "966 km",
    region: "Panonska nizija",
    path: [
      [46.18, 20.10],
      [46.02, 20.12],
      [45.86, 20.11],
      [45.72, 20.14],
      [45.57, 20.12],
      [45.43, 20.17],
      [45.29, 20.21],
      [45.14, 20.27]
    ]
  },
  {
    id: "lim",
    name: "Lim",
    length: "219 km",
    region: "Crna Gora / Srbija / BiH",
    path: [
      [42.60, 19.92],
      [42.72, 19.88],
      [42.86, 19.82],
      [43.00, 19.75],
      [43.12, 19.74],
      [43.23, 19.67],
      [43.35, 19.61],
      [43.46, 19.49],
      [43.53, 19.36]
    ]
  }
];

const lakes = [
  { id: "djerdapsko-jezero", name: "Đerdapsko jezero", lat: 44.58, lng: 22.12, region: "Srbija / Rumunija", size: "akumulacija", angle: -18 },
  { id: "vlasinsko-jezero", name: "Vlasinsko jezero", lat: 42.72, lng: 22.34, region: "Južna Srbija", size: "akumulacija", angle: -12 },
  { id: "perucac", name: "Perućačko jezero", lat: 43.97, lng: 19.40, region: "Srbija / BiH", size: "akumulacija", angle: -24 },
  { id: "zlatarsko-jezero", name: "Zlatarsko jezero", lat: 43.47, lng: 19.77, region: "Jugozapadna Srbija", size: "akumulacija", angle: -18 },
  { id: "uvacko-jezero", name: "Uvačko jezero", lat: 43.36, lng: 19.94, region: "Jugozapadna Srbija", size: "akumulacija", angle: -22 },
  { id: "gazivode", name: "Gazivode", lat: 42.94, lng: 20.56, region: "Kosovo / Srbija", size: "akumulacija", angle: -24 },
  { id: "palicko-jezero", name: "Palićko jezero", lat: 46.10, lng: 19.75, region: "Severna Bačka", size: "jezero", angle: 6 },
  { id: "ludosko-jezero", name: "Ludoško jezero", lat: 46.06, lng: 19.81, region: "Severna Bačka", size: "jezero", angle: -8 },
  { id: "srebrno-jezero", name: "Srebrno jezero", lat: 44.75, lng: 21.47, region: "Istočna Srbija", size: "jezero", angle: 4 },
  { id: "skadarsko-jezero", name: "Skadarsko jezero", lat: 42.20, lng: 19.19, region: "Crna Gora / Albanija", size: "jezero", angle: -8 },
  { id: "bilecko-jezero", name: "Bilećko jezero", lat: 42.78, lng: 18.45, region: "BiH / Crna Gora", size: "akumulacija", angle: -20 }
];

const riverLabelAngles = {
  dunav: -10,
  sava: 5,
  drina: -58,
  morava: -74,
  nisava: -8,
  ibar: -72,
  tisa: -84,
  lim: -54
};

const settlements = [
  { id: "belgrade", name: "Beograd", lat: 44.817, lng: 20.457, region: "Srbija" },
  { id: "novi-sad", name: "Novi Sad", lat: 45.267, lng: 19.833, region: "Srbija" },
  { id: "becej", name: "Bečej", lat: 45.617, lng: 20.033, region: "Srbija" },
  { id: "novi-becej", name: "Novi Bečej", lat: 45.598, lng: 20.135, region: "Srbija" },
  { id: "novi-knezevac", name: "Novi Kneževac", lat: 46.050, lng: 20.100, region: "Srbija" },
  { id: "novi-banovci", name: "Novi Banovci", lat: 44.956, lng: 20.281, region: "Srbija" },
  { id: "novi-karlovci", name: "Novi Karlovci", lat: 45.075, lng: 20.180, region: "Srbija" },
  { id: "novi-slankamen", name: "Novi Slankamen", lat: 45.125, lng: 20.239, region: "Srbija" },
  { id: "novi-ledinci", name: "Novi Ledinci", lat: 45.203, lng: 19.800, region: "Srbija" },
  { id: "novi-zednik", name: "Novi Žednik", lat: 45.947, lng: 19.667, region: "Srbija" },
  { id: "novi-itebej", name: "Novi Itebej", lat: 45.566, lng: 20.701, region: "Srbija" },
  { id: "novi-kozarci", name: "Novi Kozarci", lat: 45.782, lng: 20.622, region: "Srbija" },
  { id: "novi-sip", name: "Novi Sip", lat: 44.506, lng: 22.456, region: "Srbija" },
  { id: "novo-milosevo", name: "Novo Miloševo", lat: 45.720, lng: 20.303, region: "Srbija" },
  { id: "novo-orahovo", name: "Novo Orahovo", lat: 45.787, lng: 19.789, region: "Srbija" },
  { id: "nova-pazova", name: "Nova Pazova", lat: 44.943, lng: 20.219, region: "Srbija" },
  { id: "nova-varos", name: "Nova Varoš", lat: 43.460, lng: 19.812, region: "Srbija" },
  { id: "nova-crnja", name: "Nova Crnja", lat: 45.668, lng: 20.606, region: "Srbija" },
  { id: "nova-gajdobra", name: "Nova Gajdobra", lat: 45.340, lng: 19.448, region: "Srbija" },
  { id: "nova-moldava", name: "Nova Moldava", lat: 44.736, lng: 21.633, region: "Srbija" },
  { id: "nis", name: "Niš", lat: 43.320, lng: 21.896, region: "Srbija" },
  { id: "kragujevac", name: "Kragujevac", lat: 44.012, lng: 20.912, region: "Srbija" },
  { id: "kraljevo", name: "Kraljevo", lat: 43.724, lng: 20.687, region: "Srbija" },
  { id: "cacak", name: "Čačak", lat: 43.891, lng: 20.350, region: "Srbija" },
  { id: "uzice", name: "Užice", lat: 43.858, lng: 19.842, region: "Srbija" },
  { id: "zajecar", name: "Zaječar", lat: 43.904, lng: 22.284, region: "Srbija" },
  { id: "pirot", name: "Pirot", lat: 43.153, lng: 22.586, region: "Srbija" },
  { id: "leskovac", name: "Leskovac", lat: 42.999, lng: 21.946, region: "Srbija" },
  { id: "vranje", name: "Vranje", lat: 42.551, lng: 21.900, region: "Srbija" },
  { id: "valjevo", name: "Valjevo", lat: 44.270, lng: 19.884, region: "Srbija" },
  { id: "subotica", name: "Subotica", lat: 46.100, lng: 19.665, region: "Srbija" },
  { id: "sombor", name: "Sombor", lat: 45.774, lng: 19.112, region: "Srbija" },
  { id: "novi-pazar", name: "Novi Pazar", lat: 43.137, lng: 20.517, region: "Srbija" },
  { id: "prijepolje", name: "Prijepolje", lat: 43.390, lng: 19.650, region: "Srbija" },
  { id: "bajina-basta", name: "Bajina Bašta", lat: 43.971, lng: 19.565, region: "Srbija" },
  { id: "sokobanja", name: "Sokobanja", lat: 43.645, lng: 21.870, region: "Srbija" },
  { id: "bela-palanka", name: "Bela Palanka", lat: 43.219, lng: 22.314, region: "Srbija" }
];

const attractions = [
  { id: "kalemegdan", name: "Kalemegdan", lat: 44.823, lng: 20.451, category: "tvrđava", note: "Beogradska tvrđava i pogled na ušće Save u Dunav" },
  { id: "avala-toranj", name: "Avalski toranj", lat: 44.695, lng: 20.515, category: "vidikovac", note: "Vidikovac iznad Beograda" },
  { id: "smederevo", name: "Smederevska tvrđava", lat: 44.666, lng: 20.929, category: "tvrđava", note: "Velika srednjovekovna tvrđava na Dunavu" },
  { id: "golubac", name: "Golubačka tvrđava", lat: 44.661, lng: 21.678, category: "tvrđava", note: "Tvrđava na ulazu u Đerdapsku klisuru" },
  { id: "lepenski-vir", name: "Lepenski vir", lat: 44.559, lng: 22.025, category: "arheologija", note: "Praistorijsko naselje uz Dunav" },
  { id: "djerdap", name: "Nacionalni park Đerdap", lat: 44.528, lng: 21.966, category: "priroda", note: "Klisura Dunava i vidikovci" },
  { id: "fruska-manastiri", name: "Fruškogorski manastiri", lat: 45.143, lng: 19.826, category: "manastiri", note: "Manastirski pojas Fruške gore" },
  { id: "petrovaradin", name: "Petrovaradinska tvrđava", lat: 45.252, lng: 19.862, category: "tvrđava", note: "Tvrđava iznad Dunava u Novom Sadu", aliases: "Petrovaradin|Petrovaradinska tvrdjava|Petrovaradinska tvrđava" },
  { id: "palic", name: "Palić", lat: 46.102, lng: 19.758, category: "jezero", note: "Jezero, park i secesijska arhitektura" },
  { id: "oplenac", name: "Oplenac", lat: 44.253, lng: 20.682, category: "istorija", note: "Crkva Svetog Đorđa i mauzolej Karađorđevića" },
  { id: "manasija", name: "Manasija", lat: 44.101, lng: 21.480, category: "manastir", note: "Utvrđeni manastir kod Despotovca" },
  { id: "resavska-pecina", name: "Resavska pećina", lat: 44.074, lng: 21.628, category: "priroda", note: "Jedna od poznatijih pećina u Srbiji" },
  { id: "gamzigrad", name: "Felix Romuliana", lat: 43.899, lng: 22.186, category: "arheologija", note: "Rimska carska palata kod Zaječara" },
  { id: "nis-tvrdjava", name: "Niška tvrđava", lat: 43.325, lng: 21.895, category: "tvrđava", note: "Tvrđava u centru Niša" },
  { id: "cele-kula", name: "Ćele-kula", lat: 43.312, lng: 21.923, category: "istorija", note: "Memorijalni spomenik iz Prvog srpskog ustanka" },
  { id: "davolja-varos", name: "Đavolja varoš", lat: 42.996, lng: 21.402, category: "priroda", note: "Zemljane figure kod Kuršumlije" },
  { id: "studeniца", name: "Studenica", lat: 43.486, lng: 20.531, category: "manastir", note: "Jedan od najznačajnijih srpskih manastira" },
  { id: "zica", name: "Žiča", lat: 43.696, lng: 20.646, category: "manastir", note: "Manastir kod Kraljeva" },
  { id: "maglic-tvrdjava", name: "Maglič", lat: 43.612, lng: 20.541, category: "tvrđava", note: "Tvrđava iznad Ibra" },
  { id: "sarganska-osmica", name: "Šarganska osmica", lat: 43.792, lng: 19.508, category: "železnica", note: "Muzejska železnica kod Mokre Gore" },
  { id: "drvengrad", name: "Drvengrad", lat: 43.795, lng: 19.507, category: "etno", note: "Etno-selo na Mećavniku" },
  { id: "uvac", name: "Uvac", lat: 43.353, lng: 19.946, category: "priroda", note: "Meandri Uvca i kolonija beloglavog supa" },
  { id: "sirogojno", name: "Sirogojno", lat: 43.687, lng: 19.889, category: "etno", note: "Muzej na otvorenom na Zlatiboru" },
  { id: "sopocani", name: "Sopoćani", lat: 43.118, lng: 20.373, category: "manastir", note: "Srednjovekovni manastir kod Novog Pazara" },
  { id: "viminacium", name: "Viminacijum", lat: 44.736, lng: 21.225, category: "arheologija", note: "Rimski grad i vojni logor kod Kostolca" },
  { id: "topola", name: "Topola", lat: 44.254, lng: 20.682, category: "istorija", note: "Oplenac i Karađorđev kraj" },
  { id: "risovaca", name: "Pećina Risovača", lat: 44.305, lng: 20.560, category: "pećina", note: "Paleolitsko nalazište kod Aranđelovca" },
  { id: "stopica-pecina", name: "Stopića pećina", lat: 43.674, lng: 19.848, category: "pećina", note: "Pećina sa bigrenim kadama kod Zlatibora" },
  { id: "potpecka-pecina", name: "Potpećka pećina", lat: 43.807, lng: 19.951, category: "pećina", note: "Pećina kod Užica sa monumentalnim ulazom" },
  { id: "petnicka-pecina", name: "Petnička pećina", lat: 44.246, lng: 19.931, category: "pećina", note: "Pećinski sistem kod Valjeva" },
  { id: "rajkova-pecina", name: "Rajkova pećina", lat: 44.419, lng: 21.951, category: "pećina", note: "Uređena pećina kod Majdanpeka" },
  { id: "lazareva-pecina", name: "Lazareva pećina", lat: 44.033, lng: 21.950, category: "pećina", note: "Pećina u Lazarevom kanjonu kod Bora" },
  { id: "bogovinska-pecina", name: "Bogovinska pećina", lat: 43.920, lng: 21.946, category: "pećina", note: "Duga pećina kod Boljevca" },
  { id: "ceremosnja", name: "Ceremošnja", lat: 44.372, lng: 21.623, category: "pećina", note: "Pećina u Homolju" },
  { id: "ravnistarka", name: "Ravništarka", lat: 44.370, lng: 21.612, category: "pećina", note: "Pećina kod Kučeva" },
  { id: "prerasti-vratna", name: "Prerasti Vratne", lat: 44.357, lng: 22.348, category: "priroda", note: "Kameni mostovi u istočnoj Srbiji" },
  { id: "vodopad-prskalo", name: "Vodopad Prskalo", lat: 44.050, lng: 21.720, category: "vodopad", note: "Neobičan vodopad na Kučajskim planinama" },
  { id: "vodopad-lisine", name: "Vodopad Lisine", lat: 44.100, lng: 21.636, category: "vodopad", note: "Vodopad Veliki buk kod Despotovca" },
  { id: "vodopad-ripaljka", name: "Ripaljka", lat: 43.648, lng: 21.872, category: "vodopad", note: "Vodopad kod Sokobanje" },
  { id: "vodopad-gostilje", name: "Gostiljski vodopad", lat: 43.642, lng: 19.772, category: "vodopad", note: "Vodopad u zlatiborskom selu Gostilje" },
  { id: "tupavica", name: "Tupavica", lat: 43.322, lng: 22.765, category: "vodopad", note: "Vodopad na Staroj planini" },
  { id: "piljski-vodopad", name: "Piljski vodopad", lat: 43.292, lng: 22.760, category: "vodopad", note: "Jedan od visokih vodopada Stare planine" },
  { id: "sopotnicki-vodopadi", name: "Sopotnički vodopadi", lat: 43.246, lng: 19.754, category: "vodopad", note: "Vodopadi kod Prijepolja" },
  { id: "trsic", name: "Tršić", lat: 44.499, lng: 19.265, category: "kultura", note: "Rodno mesto Vuka Karadžića" },
  { id: "brankovina", name: "Brankovina", lat: 44.316, lng: 19.886, category: "kultura", note: "Kulturno-istorijski kompleks kod Valjeva" },
  { id: "takovo", name: "Takovo", lat: 44.032, lng: 20.388, category: "istorija", note: "Mesto Drugog srpskog ustanka" },
  { id: "orasje-maricevica-jaruga", name: "Orašac", lat: 44.309, lng: 20.607, category: "istorija", note: "Mesto početka Prvog srpskog ustanka" },
  { id: "vukov-sabor", name: "Vukov sabor", lat: 44.501, lng: 19.266, category: "kultura", note: "Kulturni prostor u Tršiću" },
  { id: "ravanica", name: "Ravanica", lat: 43.966, lng: 21.522, category: "manastir", note: "Zadužbina kneza Lazara kod Ćuprije" },
  { id: "ljubostinja", name: "Ljubostinja", lat: 43.620, lng: 21.006, category: "manastir", note: "Manastir kod Trstenika" },
  { id: "kalenic", name: "Kalenić", lat: 43.833, lng: 21.050, category: "manastir", note: "Moravska škola arhitekture u Levču" },
  { id: "blagovestenje-ovcar", name: "Blagoveštenje", lat: 43.905, lng: 20.194, category: "manastir", note: "Jedan od manastira Ovčarsko-kablarske klisure" },
  { id: "nikolje-ovcar", name: "Nikolje", lat: 43.906, lng: 20.181, category: "manastir", note: "Manastir u Ovčarsko-kablarskoj klisuri" },
  { id: "mileseseva", name: "Mileševa", lat: 43.363, lng: 19.704, category: "manastir", note: "Manastir kod Prijepolja" },
  { id: "gradac", name: "Gradac", lat: 43.363, lng: 20.532, category: "manastir", note: "Manastir u dolini reke Gradac" },
  { id: "djurdjevi-stupovi", name: "Đurđevi stupovi", lat: 43.151, lng: 20.508, category: "manastir", note: "Srednjovekovni manastir iznad Novog Pazara" },
  { id: "stari-ras", name: "Stari Ras", lat: 43.127, lng: 20.416, category: "arheologija", note: "Srednjovekovno jezgro Raške" },
  { id: "latin-grad", name: "Latin grad", lat: 43.574, lng: 21.318, category: "arheologija", note: "Utvrđenje kod Aleksinca" },
  { id: "medijana", name: "Medijana", lat: 43.312, lng: 21.948, category: "arheologija", note: "Rimsko nalazište kod Niša" },
  { id: "justiniana-prima", name: "Caričin grad", lat: 42.950, lng: 21.719, category: "arheologija", note: "Vizantijski grad Justiniana Prima kod Lebana" },
  { id: "baba-vida", name: "Baba Vida", lat: 43.993, lng: 22.887, category: "tvrđava", note: "Srednjovekovna tvrđava u Vidinu" },
  { id: "ram-tvrdjava", name: "Ramska tvrđava", lat: 44.810, lng: 21.329, category: "tvrđava", note: "Tvrđava na Dunavu kod Rama" },
  { id: "fetislam", name: "Fetislam", lat: 44.609, lng: 22.610, category: "tvrđava", note: "Tvrđava u Kladovu" },
  { id: "bač-tvrdjava", name: "Tvrđava Bač", lat: 45.391, lng: 19.236, category: "tvrđava", note: "Srednjovekovna tvrđava u Baču" },
  { id: "solotnik", name: "Solotnik", lat: 43.972, lng: 19.573, category: "tvrđava", note: "Ostaci tvrđave kod Bajine Bašte" },
  { id: "sokograd", name: "Sokograd", lat: 43.653, lng: 21.879, category: "tvrđava", note: "Srednjovekovno utvrđenje kod Sokobanje" },
  { id: "vrmdza", name: "Vrmdža", lat: 43.705, lng: 21.870, category: "selo", note: "Selo podno Rtnja sa starim utvrđenjem" },
  { id: "rajac-pimnice", name: "Rajačke pimnice", lat: 44.099, lng: 22.544, category: "kultura", note: "Vinski kompleksi kod Negotina" },
  { id: "roglyevo-pimnice", name: "Rogljevske pimnice", lat: 44.100, lng: 22.605, category: "kultura", note: "Tradicionalno vinsko naselje" },
  { id: "mokranjceva-kuca", name: "Mokranjčeva kuća", lat: 44.226, lng: 22.530, category: "kultura", note: "Muzej Stevana Mokranjca u Negotinu" },
  { id: "bora-stankovic-kuca", name: "Kuća Bore Stankovića", lat: 42.551, lng: 21.900, category: "kultura", note: "Muzej u Vranju" },
  { id: "siroka-caršija", name: "Stara čaršija u Prizrenu", lat: 42.209, lng: 20.739, category: "kultura", note: "Istorijska čaršija i kameni most" },
  { id: "patrijarsija-pec", name: "Pećka patrijaršija", lat: 42.661, lng: 20.266, category: "manastir", note: "Manastirski kompleks kod Peći" },
  { id: "visoki-decani", name: "Visoki Dečani", lat: 42.546, lng: 20.267, category: "manastir", note: "Srednjovekovni manastir kod Dečana" },
  { id: "gracanica", name: "Gračanica", lat: 42.598, lng: 21.193, category: "manastir", note: "Manastir kod Prištine" },
  { id: "arilje-crkva", name: "Crkva Svetog Ahilija", lat: 43.754, lng: 20.096, category: "kultura", note: "Srednjovekovna crkva u Arilju" },
  { id: "kremna", name: "Kremna", lat: 43.847, lng: 19.578, category: "selo", note: "Planinsko selo između Tare i Zlatibora" },
  { id: "zaovine", name: "Zaovine", lat: 43.882, lng: 19.388, category: "priroda", note: "Jezero i predeli Nacionalnog parka Tara" },
  { id: "banjska-stena", name: "Banjska stena", lat: 43.952, lng: 19.425, category: "vidikovac", note: "Poznati vidikovac na Tari" },
  { id: "kablar-vidikovac", name: "Kablar", lat: 43.900, lng: 20.179, category: "vidikovac", note: "Pogled na meandre Zapadne Morave" },
  { id: "lazar-kanjon", name: "Lazarev kanjon", lat: 44.050, lng: 21.950, category: "priroda", note: "Kanjon u istočnoj Srbiji" },
  { id: "uvac-molitva", name: "Vidikovac Molitva", lat: 43.361, lng: 19.955, category: "vidikovac", note: "Pogled na meandre Uvca" },
  { id: "stara-planina-topli-do", name: "Topli Do", lat: 43.219, lng: 22.741, category: "selo", note: "Planinsko selo ispod Stare planine" },
  { id: "temska", name: "Temska", lat: 43.263, lng: 22.548, category: "selo", note: "Selo i manastir kod Pirota" },
  { id: "pirotski-grad", name: "Pirotski grad", lat: 43.153, lng: 22.587, category: "tvrđava", note: "Momčilov grad u Pirotu" },
  { id: "sićevačka-klisura", name: "Sićevačka klisura", lat: 43.320, lng: 22.092, category: "priroda", note: "Klisura Nišave istočno od Niša" },
  { id: "jerma-kanjon", name: "Kanjon Jerme", lat: 42.908, lng: 22.636, category: "priroda", note: "Kanjon i klisura kod Poganova" },
  { id: "poganovo", name: "Poganovo", lat: 42.943, lng: 22.626, category: "manastir", note: "Manastir u dolini Jerme" },
  { id: "zasavica", name: "Zasavica", lat: 44.960, lng: 19.522, category: "rezervat prirode", note: "Specijalni rezervat prirode kod Sremske Mitrovice" },
  { id: "carska-bara", name: "Carska bara", lat: 45.269, lng: 20.390, category: "rezervat prirode", note: "Močvarni rezervat i stanište ptica kod Zrenjanina" },
  { id: "obedska-bara", name: "Obedska bara", lat: 44.733, lng: 20.003, category: "rezervat prirode", note: "Jedno od najpoznatijih močvarnih područja u Sremu" },
  { id: "deliblatska-pescara", name: "Deliblatska peščara", lat: 44.900, lng: 21.050, category: "rezervat prirode", note: "Peščara i stepsko područje u Banatu" },
  { id: "slano-kopovo", name: "Slano Kopovo", lat: 45.632, lng: 20.206, category: "rezervat prirode", note: "Slatinsko jezero i važno stanište ptica" },
  { id: "gornje-podunavlje", name: "Gornje Podunavlje", lat: 45.764, lng: 18.948, category: "rezervat prirode", note: "Ritsko područje uz Dunav kod Apatina i Sombora" },
  { id: "karadjordjevo", name: "Karađorđevo", lat: 45.300, lng: 19.300, category: "priroda", note: "Poznato lovište i ergela u Bačkoj" },
  { id: "ludas", name: "Ludaš", lat: 46.064, lng: 19.815, category: "rezervat prirode", note: "Jezerski rezervat kod Subotice" },
  { id: "selevenjske-pustare", name: "Selevenjske pustare", lat: 46.140, lng: 19.960, category: "rezervat prirode", note: "Zaštićeno područje peskova i pašnjaka kod Horgoša" },
  { id: "titelski-breg", name: "Titelski breg", lat: 45.210, lng: 20.300, category: "priroda", note: "Lesni plato iznad Tise i Dunava" },
  { id: "koviljsko-petrovaradinski-rit", name: "Koviljsko-petrovaradinski rit", lat: 45.191, lng: 20.010, category: "rezervat prirode", note: "Ritsko područje uz Dunav kod Kovilja" },
  { id: "uvac-rezervat", name: "Specijalni rezervat Uvac", lat: 43.356, lng: 19.957, category: "rezervat prirode", note: "Meandri, kanjon i beloglavi sup" },
  { id: "klisura-tresnjice", name: "Klisura Trešnjice", lat: 44.163, lng: 19.532, category: "rezervat prirode", note: "Klisura kod Ljubovije i stanište beloglavog supa" },
  { id: "gradac-kanjon", name: "Kanjon Gradca", lat: 44.230, lng: 19.860, category: "priroda", note: "Bistra reka i izletište kod Valjeva" },
  { id: "taorska-vrela", name: "Taorska vrela", lat: 44.115, lng: 19.760, category: "priroda", note: "Vrela i sedrene kaskade kod Kosjerića" },
  { id: "ovcarsko-kablarska-klisura", name: "Ovčarsko-kablarska klisura", lat: 43.899, lng: 20.191, category: "priroda", note: "Klisura, manastiri i vidikovci kod Čačka" },
  { id: "vratna-rezervat", name: "Vratna", lat: 44.357, lng: 22.348, category: "priroda", note: "Prerasti, kanjon i manastir kod Negotina" },
  { id: "stara-planina-rezervat", name: "Stara planina", lat: 43.250, lng: 22.750, category: "park prirode", note: "Vodopadi, sela i planinski predeli istočne Srbije" },
  { id: "suva-planina", name: "Suva planina", lat: 43.150, lng: 22.150, category: "priroda", note: "Planinski greben i izletišta iznad Niša i Bele Palanke" },
  { id: "jermenska-klisura", name: "Klisura Jerme", lat: 42.900, lng: 22.640, category: "priroda", note: "Uska klisura i manastiri kod Pirota" },
  { id: "vratna-manastir", name: "Manastir Vratna", lat: 44.363, lng: 22.344, category: "manastir", note: "Manastir blizu kamenih prerasti" },
  { id: "temska-manastir", name: "Manastir Temska", lat: 43.264, lng: 22.551, category: "manastir", note: "Manastir kod Pirota i Stare planine" },
  { id: "sukovo", name: "Manastir Sukovo", lat: 42.931, lng: 22.603, category: "manastir", note: "Manastir u blizini kanjona Jerme" },
  { id: "divljana", name: "Manastir Divljana", lat: 43.159, lng: 22.306, category: "manastir", note: "Manastir kod Bele Palanke" },
  { id: "sveti-prohor-pcinjski", name: "Prohor Pčinjski", lat: 42.315, lng: 21.904, category: "manastir", note: "Manastir u dolini Pčinje kod Vranja" },
  { id: "tronoša", name: "Tronoša", lat: 44.485, lng: 19.284, category: "manastir", note: "Manastir kod Tršića i Loznice" },
  { id: "kaona", name: "Kaona", lat: 44.533, lng: 19.697, category: "manastir", note: "Manastir u Tamnavi kod Šapca" },
  { id: "celije", name: "Ćelije", lat: 44.243, lng: 19.862, category: "manastir", note: "Manastir kod Valjeva" },
  { id: "pustinja", name: "Pustinja", lat: 44.204, lng: 19.768, category: "manastir", note: "Manastir u okolini Valjeva" },
  { id: "vraćevšnica", name: "Vraćevšnica", lat: 44.146, lng: 20.489, category: "manastir", note: "Manastir pod Rudnikom" },
  { id: "voljavča", name: "Voljavča", lat: 44.164, lng: 20.649, category: "manastir", note: "Manastir u Šumadiji kod Stragara" },
  { id: "koporin", name: "Koporin", lat: 44.330, lng: 20.912, category: "manastir", note: "Manastir kod Velike Plane" },
  { id: "pokajnica", name: "Pokajnica", lat: 44.315, lng: 20.959, category: "kultura", note: "Crkva brvnara kod Velike Plane" },
  { id: "kuca-save-sumanovica", name: "Spomen-kuća Save Šumanovića", lat: 45.127, lng: 19.226, category: "spomen-kuća", note: "Galerija i spomen-kuća u Šidu" },
  { id: "kuca-milankovica", name: "Kuća Milutina Milankovića", lat: 45.394, lng: 19.157, category: "spomen-kuća", note: "Rodna kuća naučnika u Dalju" },
  { id: "kuca-mihajla-pupina", name: "Mihajlo Pupin, Idvor", lat: 45.188, lng: 20.514, category: "spomen-kuća", note: "Rodna kuća i muzej Mihajla Pupina" },
  { id: "dositej-obradovic-cakovo", name: "Dositej Obradović, Čakovo", lat: 45.473, lng: 21.128, category: "spomen-kuća", note: "Mesto rođenja Dositeja Obradovića" },
  { id: "kuca-stepe-stepanovica", name: "Kuća Stepe Stepanovića", lat: 44.517, lng: 20.570, category: "spomen-kuća", note: "Spomen-kuća vojvode Stepe u Kumodražu" },
  { id: "kuca-zivojina-misica", name: "Struganik", lat: 44.170, lng: 20.090, category: "spomen-kuća", note: "Rodna kuća vojvode Živojina Mišića" },
  { id: "kuca-desanke-maksimovic", name: "Desankina škola", lat: 44.318, lng: 19.887, category: "kultura", note: "Brankovina i prostor vezan za Desanku Maksimović" },
  { id: "kuca-radoja-domanovica", name: "Radoje Domanović, Ovsište", lat: 44.010, lng: 20.710, category: "spomen-kuća", note: "Zavičajno mesto satiričara u Šumadiji" },
  { id: "dobrica-cosic-velika-drenova", name: "Velika Drenova", lat: 43.645, lng: 21.061, category: "kultura", note: "Zavičajni kraj Dobrice Ćosića" },
  { id: "muzej-naivne-kovacica", name: "Kovačica", lat: 45.112, lng: 20.623, category: "kultura", note: "Naivno slikarstvo i galerije u Kovačici" },
  { id: "belo-blato", name: "Belo Blato", lat: 45.274, lng: 20.377, category: "selo", note: "Banatsko selo uz Carsku baru" },
  { id: "mokrin", name: "Mokrin", lat: 45.934, lng: 20.412, category: "selo", note: "Selo poznato po tradiciji i seoskom turizmu" },
  { id: "melenci-rusanda", name: "Rusanda", lat: 45.519, lng: 20.315, category: "banja", note: "Banja i slano jezero kod Melenaca" },
  { id: "vrnjacka-banja", name: "Vrnjačka Banja", lat: 43.622, lng: 20.895, category: "banja", note: "Najpoznatije banjsko mesto u Srbiji" },
  { id: "sokobanja-park", name: "Sokobanja", lat: 43.645, lng: 21.870, category: "banja", note: "Banja, Ozren, Lepterija i Sokograd" },
  { id: "prolom-banja", name: "Prolom Banja", lat: 43.038, lng: 21.400, category: "banja", note: "Banja blizu Đavolje varoši" },
  { id: "lukovska-banja", name: "Lukovska Banja", lat: 43.166, lng: 21.033, category: "banja", note: "Planinska banja na obroncima Kopaonika" },
  { id: "gornja-trepca", name: "Atomska banja", lat: 43.925, lng: 20.481, category: "banja", note: "Banja Gornja Trepča kod Čačka" },
  { id: "banja-koviljaca", name: "Banja Koviljača", lat: 44.515, lng: 19.153, category: "banja", note: "Banja podno Gučeva" },
  { id: "bukovicka-banja", name: "Bukovička Banja", lat: 44.306, lng: 20.556, category: "banja", note: "Park i izvori mineralne vode u Aranđelovcu" },
  { id: "sijarinska-banja", name: "Sijarinska Banja", lat: 42.744, lng: 21.602, category: "banja", note: "Banja sa gejzerom kod Medveđe" },
  { id: "kamenicka-vis", name: "Kamenički vis", lat: 43.399, lng: 21.993, category: "vidikovac", note: "Izletište i pogled iznad Niša" },
  { id: "bojanine-vode", name: "Bojanine vode", lat: 43.209, lng: 21.988, category: "priroda", note: "Izletište na Suvoj planini" },
  { id: "jankov-kamen", name: "Jankov kamen", lat: 43.334, lng: 20.259, category: "vidikovac", note: "Vrh i vidikovac na Goliji" },
  { id: "odvracenica", name: "Odvraćenica", lat: 43.274, lng: 20.280, category: "priroda", note: "Planinski predeli Golije" },
  { id: "golija-park", name: "Park prirode Golija", lat: 43.315, lng: 20.235, category: "park prirode", note: "Šume, vidikovci i rezervati biosfere" },
  { id: "mokra-gora-park", name: "Park prirode Mokra Gora", lat: 43.790, lng: 19.510, category: "park prirode", note: "Šarganska osmica, Mećavnik i planinski predeli" },
  { id: "tara-np", name: "Nacionalni park Tara", lat: 43.900, lng: 19.430, category: "nacionalni park", note: "Vidikovci, šume i kanjon Drine" },
  { id: "kopaonik-np", name: "Nacionalni park Kopaonik", lat: 43.285, lng: 20.822, category: "nacionalni park", note: "Planinski centar, staze i panorame" },
  { id: "fruska-gora-np", name: "Nacionalni park Fruška gora", lat: 45.150, lng: 19.760, category: "nacionalni park", note: "Manastiri, šume, izletišta i jezera" },
  { id: "šumarice", name: "Šumarice", lat: 44.024, lng: 20.886, category: "memorijal", note: "Memorijalni park u Kragujevcu" },
  { id: "kadinjača", name: "Kadinjača", lat: 43.844, lng: 19.724, category: "memorijal", note: "Memorijalni kompleks kod Užica" },
  { id: "tekerys", name: "Tekeriš", lat: 44.548, lng: 19.480, category: "memorijal", note: "Spomen-kompleks Cerske bitke" },
  { id: "očna-banja", name: "Očno", lat: 44.395, lng: 19.493, category: "memorijal", note: "Područje Cera i ratne istorije" },
  { id: "spomen-park-popina", name: "Popina", lat: 43.559, lng: 21.018, category: "memorijal", note: "Spomen-park kod Trstenika" },
  { id: "spomenik-kosmaj", name: "Kosmaj memorijal", lat: 44.467, lng: 20.567, category: "memorijal", note: "Spomenik na Kosmaju" },
  { id: "bubanj", name: "Bubanj", lat: 43.309, lng: 21.859, category: "memorijal", note: "Memorijalni park kod Niša" },
  { id: "crveni-krst-logor", name: "Logor Crveni krst", lat: 43.331, lng: 21.895, category: "memorijal", note: "Memorijalni muzej u Nišu" }
];

const map = L.map("map", {
  zoomControl: false
}).setView([44.05, 20.55], 7);

L.control.zoom({ position: "topright" }).addTo(map);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const mountainLayer = L.layerGroup().addTo(map);
const waterLabelLayer = L.layerGroup().addTo(map);
const routeLayer = L.layerGroup().addTo(map);
const attractionLayer = L.layerGroup().addTo(map);
const featureById = new Map();

const startIcon = L.divIcon({
  html: "A",
  className: "route-marker start",
  iconSize: [30, 30],
  iconAnchor: [15, 15]
});

const endIcon = L.divIcon({
  html: "B",
  className: "route-marker end",
  iconSize: [30, 30],
  iconAnchor: [15, 15]
});

function waypointIcon(index) {
  return L.divIcon({
    html: String(index + 1),
    className: "route-marker waypoint",
    iconSize: [28, 28],
    iconAnchor: [14, 14]
  });
}

const attractionIcon = L.divIcon({
  html: "•",
  className: "attraction-marker",
  iconSize: [22, 22],
  iconAnchor: [11, 11]
});

function popupHtml(feature) {
  if (feature.type === "attraction") {
    return `<p class="popup-title">${feature.name}</p><p class="popup-meta">${feature.category}<br>${feature.note}</p>`;
  }
  if (feature.type === "settlement") {
    return `<p class="popup-title">${feature.name}</p><p class="popup-meta">Mesto<br>${feature.region}</p>`;
  }

  const label = feature.type === "mountain" ? `Visina: ${feature.height}` : feature.type === "lake" ? `Tip: ${feature.size}` : `Dužina: ${feature.length}`;
  return `<p class="popup-title">${feature.name}</p><p class="popup-meta">${label}<br>${feature.region}</p>`;
}

mountains.forEach((item) => {
  const feature = { ...item, type: "mountain" };
  const angle = mountainLabelAngles[item.id] ?? 0;
  const mountainNameIcon = L.divIcon({
    html: `<span style="--label-angle: ${angle}deg">${item.name}</span>`,
    className: "mountain-name-marker",
    iconSize: null,
    iconAnchor: [0, 12]
  });
  const marker = L.marker([item.lat, item.lng], { icon: mountainNameIcon }).bindPopup(popupHtml(feature));
  marker.on("click", () => selectFeature(feature.id));
  marker.addTo(mountainLayer);
  featureById.set(feature.id, { feature, layer: marker });
});

rivers.forEach((item) => {
  const feature = { ...item, type: "river" };
  const angle = riverLabelAngles[item.id] ?? 0;
  const labelMarker = L.marker(riverCenter(item.path), {
    icon: L.divIcon({
      html: `<span style="--label-angle: ${angle}deg">${item.name}</span>`,
      className: "water-name-marker river-name-marker",
      iconSize: null,
      iconAnchor: [0, 10]
    }),
    interactive: false
  }).addTo(waterLabelLayer);
  featureById.set(feature.id, { feature, labelMarker });
});

lakes.forEach((item) => {
  const feature = { ...item, type: "lake" };
  const labelMarker = L.marker([item.lat, item.lng], {
    icon: L.divIcon({
      html: `<span style="--label-angle: ${item.angle ?? 0}deg">${item.name}</span>`,
      className: "water-name-marker lake-name-marker",
      iconSize: null,
      iconAnchor: [0, 10]
    }),
    interactive: false
  }).addTo(waterLabelLayer);
  featureById.set(feature.id, { feature, labelMarker });
});

const elements = {
  list: document.querySelector("#featureList"),
  count: document.querySelector("#visibleCount"),
  viewLabel: document.querySelector("#viewLabel"),
  search: document.querySelector("#searchInput"),
  searchSuggestions: document.querySelector("#searchSuggestions"),
  locate: document.querySelector("#locateBtn"),
  reset: document.querySelector("#resetBtn"),
  routeAddress: document.querySelector("#routeAddressInput"),
  routeAddressSuggestions: document.querySelector("#routeAddressSuggestions"),
  addressStart: document.querySelector("#addressStartBtn"),
  addressWaypoint: document.querySelector("#addressWaypointBtn"),
  addressEnd: document.querySelector("#addressEndBtn"),
  startFromLocation: document.querySelector("#startFromLocationBtn"),
  pickStart: document.querySelector("#pickStartBtn"),
  pickWaypoint: document.querySelector("#pickWaypointBtn"),
  pickEnd: document.querySelector("#pickEndBtn"),
  deleteStart: document.querySelector("#deleteStartBtn"),
  deleteWaypoints: document.querySelector("#deleteWaypointsBtn"),
  deleteEnd: document.querySelector("#deleteEndBtn"),
  route: document.querySelector("#routeBtn"),
  clearRoute: document.querySelector("#clearRouteBtn"),
  routeStatus: document.querySelector("#routeStatus"),
  waypointsList: document.querySelector("#waypointsList"),
  routeAttractionsList: document.querySelector("#routeAttractionsList")
};

const routeState = {
  start: null,
  end: null,
  startMarker: null,
  endMarker: null,
  waypoints: [],
  routeLine: null,
  attractionMarkers: [],
  selectedAddressFeature: null,
  pickMode: null
};

const generatedPlaces = Array.isArray(window.SERBIA_PLACES) ? window.SERBIA_PLACES : [];
const remoteSuggestionById = new Map();
const remoteSuggestionQueries = {
  search: "",
  address: ""
};
const remoteSuggestionTimers = {
  search: null,
  address: null
};
let searchEntriesCache = null;

function normalize(text) {
  return text
    .toLocaleLowerCase("sr-Latn")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "dj")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function localSearchEntries() {
  const settlementEntries = settlements.map((item) => ({
    name: item.name,
    region: item.region,
    priority: 1,
    latlng: [item.lat, item.lng]
  }));
  const features = Array.from(featureById.values()).map(({ feature }) => ({
    name: feature.name,
    region: feature.region,
    priority: 2,
    latlng: featureLatLng(feature)
  }));
  const attractionEntries = attractions.map((item) => ({
    name: item.name,
    region: item.category,
    priority: 3,
    latlng: [item.lat, item.lng]
  }));
  return [...settlementEntries, ...features, ...attractionEntries];
}

function topSearchEntries() {
  if (searchEntriesCache) {
    const remoteEntries = Array.from(remoteSuggestionById.values()).map((feature) => ({ feature }));
    return [...searchEntriesCache, ...remoteEntries];
  }

  const mapFeatures = Array.from(featureById.values());
  const manualSettlementNames = new Set(settlements.map((item) => normalize(item.name)));
  const settlementEntries = settlements.map((item) => ({
    feature: {
      ...item,
      id: `settlement-${item.id}`,
      type: "settlement"
    }
  }));
  const generatedPlaceEntries = generatedPlaces
    .filter((item) => !manualSettlementNames.has(normalize(item.name)) || item.municipality)
    .map((item, index) => ({
      feature: {
        ...item,
        id: `place-${index}-${normalize(`${item.name} ${item.municipality}`).replace(/\s+/g, "-")}`,
        type: "settlement",
        region: item.municipality ? `opština/odrednica: ${item.municipality}` : "Srbija",
        category: item.urban ? "gradsko naselje" : "naselje",
        aliases: `${item.name} ${item.municipality || ""}`,
        source: "local-list"
      }
    }));
  const attractionEntries = attractions.map((item) => ({
    feature: {
      ...item,
      id: `attraction-${item.id}`,
      type: "attraction",
      region: item.category
    }
  }));

  searchEntriesCache = [...mapFeatures, ...settlementEntries, ...generatedPlaceEntries, ...attractionEntries];
  const remoteEntries = Array.from(remoteSuggestionById.values()).map((feature) => ({ feature }));
  return [...searchEntriesCache, ...remoteEntries];
}

function searchEntryById(id) {
  return topSearchEntries().find(({ feature }) => feature.id === id);
}

function remoteFeatureFromResult(result) {
  const address = result.address || {};
  const name =
    address.city ||
    address.town ||
    address.village ||
    address.hamlet ||
    address.municipality ||
    result.name ||
    result.display_name.split(",")[0];
  const region = [address.county, address.state, address.country].filter(Boolean).join(", ");
  const id = `remote-${result.place_id}`;
  return {
    id,
    type: "settlement",
    name,
    lat: Number(result.lat),
    lng: Number(result.lon),
    region: region || "OpenStreetMap",
    aliases: result.display_name,
    source: "osm"
  };
}

async function fetchRemotePlaceSuggestions(query) {
  if (normalize(query).length < 4) return [];
  const params = new URLSearchParams({
    format: "jsonv2",
    limit: "12",
    addressdetails: "1",
    "accept-language": "sr",
    countrycodes: "rs,ba,me,mk,hr,hu,ro,bg,al,xk",
    q: query
  });
  const response = await fetch(`https://nominatim.openstreetmap.org/search?${params.toString()}`);
  if (!response.ok) return [];
  const results = await response.json();
  return results
    .filter((result) => ["city", "town", "village", "hamlet", "administrative"].includes(result.addresstype || result.type))
    .map(remoteFeatureFromResult);
}

async function updateRemoteSuggestions(source, query) {
  remoteSuggestionQueries[source] = query;
  try {
    const features = await fetchRemotePlaceSuggestions(query);
    if (remoteSuggestionQueries[source] !== query) return;

    features.forEach((feature) => remoteSuggestionById.set(feature.id, feature));
    if (source === "search") {
      renderSearchSuggestions();
      renderVisibleList();
    } else {
      renderRouteAddressSuggestions();
    }
  } catch (error) {
    // Local suggestions remain usable if the remote service is unavailable.
  }
}

function scheduleRemoteSuggestions(source, query) {
  window.clearTimeout(remoteSuggestionTimers[source]);
  if (normalize(query).length < 4) return;
  remoteSuggestionTimers[source] = window.setTimeout(() => {
    updateRemoteSuggestions(source, query);
  }, 650);
}

async function geocodeLocation(query) {
  const normalizedQuery = normalize(query.trim());
  const entries = localSearchEntries();
  const exactMatch = entries
    .filter((entry) => normalize(entry.name) === normalizedQuery)
    .sort((a, b) => a.priority - b.priority)[0];
  const localMatch =
    exactMatch ||
    entries
      .filter((entry) => {
        const normalizedName = normalize(entry.name);
        const haystack = normalize(`${entry.name} ${entry.region}`);
        return haystack.includes(normalizedQuery) || normalizedQuery.includes(normalizedName);
      })
      .sort((a, b) => a.priority - b.priority)[0];

  if (localMatch) {
    return {
      lat: localMatch.latlng[0],
      lng: localMatch.latlng[1],
      label: localMatch.name
    };
  }

  const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&accept-language=sr&countrycodes=rs,ba,me,mk,hr,hu,ro,bg,al,xk&q=${encodeURIComponent(query)}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("geocode-request-failed");
  const results = await response.json();
  if (!results.length) throw new Error("geocode-empty");

  return {
    lat: Number(results[0].lat),
    lng: Number(results[0].lon),
    label: results[0].display_name
  };
}

async function resolveFeatureLatLng(feature) {
  const existing = featureLatLng(feature);
  if (existing) return existing;

  const query = [feature.name, feature.municipality, "Srbija"].filter(Boolean).join(", ");
  const result = await geocodeLocation(query);
  feature.lat = result.lat;
  feature.lng = result.lng;
  return [result.lat, result.lng];
}

function riverCenter(path) {
  const totals = path.reduce(
    (acc, point) => {
      acc.lat += point[0];
      acc.lng += point[1];
      return acc;
    },
    { lat: 0, lng: 0 }
  );
  return [totals.lat / path.length, totals.lng / path.length];
}

function featureLatLng(feature) {
  if (!Number.isFinite(feature.lat) || !Number.isFinite(feature.lng)) return null;
  if (feature.type === "mountain" || feature.type === "lake" || feature.type === "settlement" || feature.type === "attraction") return [feature.lat, feature.lng];
  return riverCenter(feature.path);
}

function formatDistance(meters) {
  if (meters >= 1000) return `${(meters / 1000).toFixed(1)} km`;
  return `${Math.round(meters)} m`;
}

function formatDuration(seconds) {
  const minutes = Math.round(seconds / 60);
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest ? `${hours} h ${rest} min` : `${hours} h`;
}

function toRadians(value) {
  return (value * Math.PI) / 180;
}

function latLngDistanceMeters(a, b) {
  const earthRadius = 6371000;
  const dLat = toRadians(b.lat - a.lat);
  const dLng = toRadians(b.lng - a.lng);
  const lat1 = toRadians(a.lat);
  const lat2 = toRadians(b.lat);
  const h =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  return 2 * earthRadius * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

function pointToSegmentDistanceMeters(point, start, end) {
  const meanLat = toRadians((point.lat + start.lat + end.lat) / 3);
  const metersPerDegreeLat = 111320;
  const metersPerDegreeLng = 111320 * Math.cos(meanLat);
  const px = point.lng * metersPerDegreeLng;
  const py = point.lat * metersPerDegreeLat;
  const sx = start.lng * metersPerDegreeLng;
  const sy = start.lat * metersPerDegreeLat;
  const ex = end.lng * metersPerDegreeLng;
  const ey = end.lat * metersPerDegreeLat;
  const dx = ex - sx;
  const dy = ey - sy;
  const lengthSquared = dx * dx + dy * dy;
  const t = lengthSquared ? Math.max(0, Math.min(1, ((px - sx) * dx + (py - sy) * dy) / lengthSquared)) : 0;
  const closestX = sx + t * dx;
  const closestY = sy + t * dy;
  return Math.hypot(px - closestX, py - closestY);
}

function distanceFromRouteMeters(point, routePoints) {
  let nearest = Infinity;
  for (let index = 1; index < routePoints.length; index += 1) {
    const distance = pointToSegmentDistanceMeters(point, routePoints[index - 1], routePoints[index]);
    if (distance < nearest) nearest = distance;
  }
  return nearest;
}

function renderRouteAttractions(routePoints) {
  attractionLayer.clearLayers();
  routeState.attractionMarkers = [];

  const nearby = attractions
    .map((item) => ({
      ...item,
      routeDistance: distanceFromRouteMeters({ lat: item.lat, lng: item.lng }, routePoints)
    }))
    .filter((item) => item.routeDistance <= 30000)
    .sort((a, b) => a.routeDistance - b.routeDistance)
    .slice(0, 20);

  if (!nearby.length) {
    elements.routeAttractionsList.innerHTML = "<p>Nema označenih zanimljivosti blizu ove rute.</p>";
    return;
  }

  nearby.forEach((item) => {
    const marker = L.marker([item.lat, item.lng], { icon: attractionIcon })
      .bindPopup(`<p class="popup-title">${item.name}</p><p class="popup-meta">${item.category}<br>${item.note}</p>`)
      .addTo(attractionLayer);
    routeState.attractionMarkers.push(marker);
  });

  elements.routeAttractionsList.innerHTML = nearby
    .map(
      (item) => `
        <button class="attraction-item" type="button" data-attraction-id="${item.id}">
          <span class="attraction-name">${item.name}</span>
          <span class="attraction-meta">${item.category} · ${formatDistance(item.routeDistance)} od rute</span>
        </button>
      `
    )
    .join("");
}

function setRouteStatus(message) {
  elements.routeStatus.textContent = message;
}

function setPickMode(mode) {
  routeState.pickMode = mode;
  map.getContainer().classList.toggle("is-picking-route", Boolean(mode));
  const messages = {
    start: "Klikni na mapu za start.",
    waypoint: "Klikni na mapu za tačku usput.",
    end: "Klikni na mapu za cilj."
  };
  setRouteStatus(messages[mode]);
}

function clearRouteLineAndAttractions() {
  if (routeState.routeLine) {
    routeLayer.removeLayer(routeState.routeLine);
    routeState.routeLine = null;
  }
  attractionLayer.clearLayers();
  routeState.attractionMarkers = [];
  elements.routeAttractionsList.innerHTML = "<p>Pronađi rutu da vidiš mesta usput.</p>";
}

function renderWaypointsList() {
  if (!routeState.waypoints.length) {
    elements.waypointsList.innerHTML = "";
    return;
  }

  elements.waypointsList.innerHTML = routeState.waypoints
    .map(
      (item, index) => `
        <button class="waypoint-item" type="button" data-waypoint-index="${index}">
          <span>Tačka ${index + 1}</span>
          <small>${item.latlng.lat.toFixed(3)}, ${item.latlng.lng.toFixed(3)}</small>
        </button>
      `
    )
    .join("");
}

function refreshWaypointMarkers() {
  routeState.waypoints.forEach((item, index) => {
    item.marker.setIcon(waypointIcon(index));
    item.marker.bindPopup(`Tačka usput ${index + 1}`);
  });
}

function setRoutePoint(type, latlng) {
  if (type === "waypoint") {
    const point = L.latLng(latlng.lat, latlng.lng);
    const index = routeState.waypoints.length;
    const marker = L.marker(point, { icon: waypointIcon(index) }).bindPopup(`Tačka usput ${index + 1}`).addTo(routeLayer);
    routeState.waypoints.push({ latlng: point, marker });
    clearRouteLineAndAttractions();
    renderWaypointsList();
    setRouteStatus(`Dodato tačaka usput: ${routeState.waypoints.length}.`);
    return;
  }

  const key = type === "start" ? "start" : "end";
  const markerKey = type === "start" ? "startMarker" : "endMarker";
  const icon = type === "start" ? startIcon : endIcon;
  const label = type === "start" ? "Start" : "Cilj";

  routeState[key] = L.latLng(latlng.lat, latlng.lng);

  if (routeState[markerKey]) {
    routeState[markerKey].setLatLng(routeState[key]);
  } else {
    routeState[markerKey] = L.marker(routeState[key], { icon }).bindPopup(label).addTo(routeLayer);
  }

  clearRouteLineAndAttractions();

  const hasBothPoints = routeState.start && routeState.end;
  setRouteStatus(hasBothPoints ? "Start i cilj su postavljeni." : `${label} je postavljen. Dodaj još jednu tačku.`);
}

async function setAddressAsRoutePoint(type) {
  const query = elements.routeAddress.value.trim();
  if (!query) {
    setRouteStatus("Upiši adresu ili naziv mesta.");
    return;
  }

  if (routeState.selectedAddressFeature && normalize(routeState.selectedAddressFeature.name) === normalize(query)) {
    try {
      const [lat, lng] = await resolveFeatureLatLng(routeState.selectedAddressFeature);
      setRoutePoint(type, { lat, lng });
      map.setView([lat, lng], Math.max(map.getZoom(), 10));
      setRouteStatus(`Postavljeno kao ${type === "start" ? "start" : type === "waypoint" ? "tačka usput" : "cilj"}: ${routeState.selectedAddressFeature.name}.`);
    } catch (error) {
      setRouteStatus("Ne mogu da pronađem koordinate za izabrano mesto.");
    }
    return;
  }

  const settlementCandidates = settlementSuggestions(query);
  const exactSettlement = settlementCandidates.find((item) => normalize(item.name) === normalize(query));
  if (!exactSettlement && settlementCandidates.length) {
    setRouteStatus(`Ponuđena mesta: ${settlementCandidates.map((item) => item.name).join(", ")}. Upiši pun naziv ili izaberi iz liste.`);
    renderRouteAddressSuggestions();
    return;
  }

  const labels = {
    start: "start",
    waypoint: "tačku usput",
    end: "cilj"
  };

  setRouteStatus(`Tražim lokaciju: ${query}...`);
  try {
    const result = await geocodeLocation(query);
    setRoutePoint(type, { lat: result.lat, lng: result.lng });
    map.setView([result.lat, result.lng], Math.max(map.getZoom(), 10));
    setRouteStatus(`Postavljeno kao ${labels[type]}: ${result.label}.`);
  } catch (error) {
    setRouteStatus("Ne mogu da pronađem tu lokaciju. Probaj sa nazivom mesta i države.");
  }
}

function deleteStartPoint() {
  if (routeState.startMarker) routeLayer.removeLayer(routeState.startMarker);
  routeState.start = null;
  routeState.startMarker = null;
  clearRouteLineAndAttractions();
  setRouteStatus("Start je obrisan.");
}

function deleteEndPoint() {
  if (routeState.endMarker) routeLayer.removeLayer(routeState.endMarker);
  routeState.end = null;
  routeState.endMarker = null;
  clearRouteLineAndAttractions();
  setRouteStatus("Cilj je obrisan.");
}

function deleteWaypointPoints() {
  routeState.waypoints.forEach((item) => routeLayer.removeLayer(item.marker));
  routeState.waypoints = [];
  renderWaypointsList();
  clearRouteLineAndAttractions();
  setRouteStatus("Tačke usput su obrisane.");
}

function clearRoute() {
  routeLayer.clearLayers();
  attractionLayer.clearLayers();
  routeState.start = null;
  routeState.end = null;
  routeState.startMarker = null;
  routeState.endMarker = null;
  routeState.waypoints = [];
  routeState.routeLine = null;
  routeState.attractionMarkers = [];
  routeState.pickMode = null;
  map.getContainer().classList.remove("is-picking-route");
  setRouteStatus("Postavi start i cilj.");
  renderWaypointsList();
  elements.routeAttractionsList.innerHTML = "<p>Pronađi rutu da vidiš mesta usput.</p>";
}

async function calculateRoute() {
  if (!routeState.start || !routeState.end) {
    setRouteStatus("Prvo postavi start i cilj.");
    return;
  }

  setRouteStatus("Računam rutu...");
  const routePointsToVisit = [
    routeState.start,
    ...routeState.waypoints.map((item) => item.latlng),
    routeState.end
  ];
  const coordinateString = routePointsToVisit.map((point) => `${point.lng},${point.lat}`).join(";");
  const url = `https://router.project-osrm.org/route/v1/driving/${coordinateString}?overview=full&geometries=geojson`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("route-request-failed");

    const data = await response.json();
    const route = data.routes && data.routes[0];
    if (!route) throw new Error("route-not-found");

    const routePoints = route.geometry.coordinates.map(([lng, lat]) => ({ lat, lng }));
    const latLngs = routePoints.map((point) => [point.lat, point.lng]);
    if (routeState.routeLine) routeLayer.removeLayer(routeState.routeLine);
    routeState.routeLine = L.polyline(latLngs, {
      color: "#b9572b",
      weight: 6,
      opacity: 0.92,
      lineCap: "round",
      lineJoin: "round"
    }).addTo(routeLayer);

    map.fitBounds(routeState.routeLine.getBounds().pad(0.18));
    renderRouteAttractions(routePoints);
    setRouteStatus(`Ruta: ${formatDistance(route.distance)}, oko ${formatDuration(route.duration)} autom.`);
  } catch (error) {
    setRouteStatus("Ne mogu da izračunam rutu. Proveri internet vezu ili pomeri tačke bliže putevima.");
  }
}

function isFeatureVisible(entry, bounds) {
  const { feature, layer } = entry;
  if (feature.type === "mountain") {
    return bounds.contains(layer.getLatLng());
  }
  if (feature.type === "lake") {
    return bounds.contains([feature.lat, feature.lng]);
  }
  if (feature.type === "settlement" || feature.type === "attraction") {
    return bounds.contains([feature.lat, feature.lng]);
  }
  return feature.path.some((point) => bounds.contains(point));
}

function enabledType(feature) {
  return ["mountain", "river", "lake", "settlement", "attraction"].includes(feature.type);
}

function featureTypeRank(feature) {
  if (feature.type === "settlement") return 0;
  if (feature.type === "attraction") return 1;
  if (feature.type === "mountain") return 2;
  if (feature.type === "lake") return 3;
  return 4;
}

function searchScore(feature, rawQuery) {
  const query = normalize(rawQuery);
  if (!query) return 0;
  const queryVariants = new Set([query]);
  if (query.includes("b")) queryVariants.add(query.replace(/b/g, "v"));
  if (query.includes("v")) queryVariants.add(query.replace(/v/g, "b"));

  const name = normalize(feature.name);
  const aliases = normalize(feature.aliases || "");
  const category = normalize(feature.category || "");
  const region = normalize(feature.region || "");
  const note = normalize(feature.note || "");
  const id = normalize(feature.id || "");
  const searchable = normalize([feature.name, feature.region, feature.category, feature.note, feature.aliases, feature.id].filter(Boolean).join(" "));
  const queryTokens = query.split(" ").filter(Boolean);

  if (Array.from(queryVariants).some((variant) => name === variant)) return 0;
  if (Array.from(queryVariants).some((variant) => aliases.split(" ").includes(variant) || aliases === variant)) return 5;
  if (Array.from(queryVariants).some((variant) => name.startsWith(variant))) return 10;
  if (Array.from(queryVariants).some((variant) => aliases.includes(variant))) return 15;
  if (Array.from(queryVariants).some((variant) => name.includes(variant))) return 25;
  if (queryTokens.length && queryTokens.every((token) => name.includes(token))) return 35;
  if (`${category} ${region}`.includes(query)) return 55;
  if (searchable.includes(query)) return 75;
  if (queryTokens.length && queryTokens.every((token) => searchable.includes(token))) return 85;
  if (id.includes(query)) return 95;
  return Infinity;
}

function isExactSearchMatch(feature, rawQuery) {
  const query = normalize(rawQuery);
  if (!query) return false;
  const name = normalize(feature.name);
  const aliases = String(feature.aliases || "")
    .split(/\s{2,}|\|/)
    .map((alias) => normalize(alias))
    .filter(Boolean);
  return name === query || aliases.includes(query);
}

function exactSearchEntries(rawQuery) {
  const query = normalize(rawQuery);
  if (!query) return [];
  return topSearchEntries().filter(({ feature }) => isExactSearchMatch(feature, query));
}

function activeEntries() {
  const query = elements.search.value.trim();
  const entries = query ? topSearchEntries() : Array.from(featureById.values());
  const normalizedQuery = normalize(query);
  const queryIsShort = normalizedQuery.length > 0 && normalizedQuery.length < 3;
  const scoredEntries = entries
    .filter(({ feature }) => !queryIsShort || feature.type === "settlement")
    .map((entry) => ({ ...entry, score: searchScore(entry.feature, query) }))
    .filter(({ feature, score }) => enabledType(feature) && score !== Infinity)
    .sort((a, b) => {
      if (!query) return a.feature.name.localeCompare(b.feature.name, "sr-Latn");
      if (a.score !== b.score) return a.score - b.score;
      const typeDifference = featureTypeRank(a.feature) - featureTypeRank(b.feature);
      if (typeDifference) return typeDifference;
      return a.feature.name.localeCompare(b.feature.name, "sr-Latn");
    });

  if (!query) return scoredEntries;

  const settlementMatches = scoredEntries.filter((entry) => entry.feature.type === "settlement");
  const otherMatches = scoredEntries.filter((entry) => entry.feature.type !== "settlement");
  return [...settlementMatches, ...otherMatches].slice(0, 60);
}

function suggestionNamesForQuery(rawQuery) {
  return activeEntries()
    .filter(({ feature }) => feature.type === "settlement")
    .slice(0, 8)
    .map(({ feature }) => feature.name);
}

function suggestionTypeLabel(feature) {
  if (feature.type === "settlement") return "mesto";
  if (feature.type === "mountain") return "planina";
  if (feature.type === "river") return "reka";
  if (feature.type === "lake") return "jezero";
  return feature.category || "zanimljivost";
}

function renderSearchSuggestions() {
  const query = elements.search.value.trim();
  if (!query) {
    elements.searchSuggestions.innerHTML = "";
    elements.searchSuggestions.classList.remove("is-open");
    return;
  }

  const suggestions = activeEntries().slice(0, 12);
  if (!suggestions.length) {
    elements.searchSuggestions.innerHTML = '<div class="suggestion-empty">Nema rezultata</div>';
    elements.searchSuggestions.classList.add("is-open");
    return;
  }

  elements.searchSuggestions.innerHTML = suggestions
    .map(({ feature }) => {
      const detail = feature.type === "attraction" ? feature.note : feature.region || feature.category || "";
      return `
        <button class="suggestion-item" type="button" role="option" data-suggestion-id="${feature.id}">
          <span>${feature.name}</span>
          <small>${suggestionTypeLabel(feature)}${detail ? ` · ${detail}` : ""}</small>
        </button>
      `;
    })
    .join("");
  elements.searchSuggestions.classList.add("is-open");
}

function routeAddressEntries() {
  const query = elements.routeAddress.value.trim();
  if (!query) return [];
  const normalizedQuery = normalize(query);
  const queryIsShort = normalizedQuery.length > 0 && normalizedQuery.length < 3;
  return topSearchEntries()
    .filter(({ feature }) => !queryIsShort || feature.type === "settlement")
    .map((entry) => ({ ...entry, score: searchScore(entry.feature, query) }))
    .filter(({ score }) => score !== Infinity)
    .sort((a, b) => {
      if (a.score !== b.score) return a.score - b.score;
      const typeDifference = featureTypeRank(a.feature) - featureTypeRank(b.feature);
      if (typeDifference) return typeDifference;
      return a.feature.name.localeCompare(b.feature.name, "sr-Latn");
    })
    .slice(0, 60);
}

function renderRouteAddressSuggestions() {
  const query = elements.routeAddress.value.trim();
  if (!query) {
    elements.routeAddressSuggestions.innerHTML = "";
    elements.routeAddressSuggestions.classList.remove("is-open");
    return;
  }

  const suggestions = routeAddressEntries().slice(0, 12);
  if (!suggestions.length) {
    elements.routeAddressSuggestions.innerHTML = '<div class="suggestion-empty">Nema rezultata</div>';
    elements.routeAddressSuggestions.classList.add("is-open");
    return;
  }

  elements.routeAddressSuggestions.innerHTML = suggestions
    .map(({ feature }) => {
      const detail = feature.type === "attraction" ? feature.note : feature.region || feature.category || "";
      return `
        <button class="suggestion-item" type="button" role="option" data-address-suggestion-id="${feature.id}">
          <span>${feature.name}</span>
          <small>${suggestionTypeLabel(feature)}${detail ? ` · ${detail}` : ""}</small>
        </button>
      `;
    })
    .join("");
  elements.routeAddressSuggestions.classList.add("is-open");
}

function settlementSuggestions(rawQuery) {
  const query = normalize(rawQuery);
  if (!query) return [];
  const queryVariants = new Set([query]);
  if (query.includes("b")) queryVariants.add(query.replace(/b/g, "v"));
  if (query.includes("v")) queryVariants.add(query.replace(/v/g, "b"));

  return settlements
    .filter((item) => {
      const name = normalize(item.name);
      return Array.from(queryVariants).some((variant) => name.startsWith(variant) || name.includes(variant));
    })
    .sort((a, b) => {
      const aName = normalize(a.name);
      const bName = normalize(b.name);
      const aStarts = Array.from(queryVariants).some((variant) => aName.startsWith(variant));
      const bStarts = Array.from(queryVariants).some((variant) => bName.startsWith(variant));
      if (aName === query && bName !== query) return -1;
      if (bName === query && aName !== query) return 1;
      if (aStarts && !bStarts) return -1;
      if (bStarts && !aStarts) return 1;
      return a.name.localeCompare(b.name, "sr-Latn");
    })
    .slice(0, 20);
}

function updateLayers() {
  const isMobile = window.matchMedia("(max-width: 760px)").matches;
  const showLabels = !isMobile || map.getZoom() >= 8;
  if (showLabels) {
    map.addLayer(mountainLayer);
    map.addLayer(waterLabelLayer);
  } else {
    map.removeLayer(mountainLayer);
    map.removeLayer(waterLabelLayer);
  }
  renderVisibleList();
}

function renderVisibleList() {
  const bounds = map.getBounds();
  const hasQuery = Boolean(elements.search.value.trim());
  const visible = activeEntries()
    .filter((entry) => hasQuery || isFeatureVisible(entry, bounds))
    .slice(0, hasQuery ? 25 : window.matchMedia("(max-width: 760px)").matches ? 20 : Infinity);

  elements.count.textContent = `${visible.length} ${visible.length === 1 ? "objekat" : "objekata"}`;
  elements.viewLabel.textContent = elements.search.value.trim() ? "u prikazu i pretrazi" : "u trenutnom prikazu";

  if (!visible.length) {
    elements.list.innerHTML = '<div class="feature-item"><span></span><div><div class="feature-title">Nema rezultata</div><div class="feature-meta">Pomeri mapu, odzumiraj ili promeni filter.</div></div></div>';
    return;
  }

  elements.list.innerHTML = visible
    .map(({ feature }) => {
      const typeLabel =
        feature.type === "mountain"
          ? "planina"
          : feature.type === "lake"
            ? "jezero"
            : feature.type === "river"
              ? "reka"
              : feature.type === "settlement"
                ? "mesto"
                : feature.category;
      const mainMeta =
        feature.type === "mountain"
          ? feature.height
          : feature.type === "lake"
            ? feature.size
            : feature.type === "river"
              ? feature.length
              : feature.type === "settlement"
                ? feature.region
                : feature.note;
      return `
        <button class="feature-item" type="button" data-id="${feature.id}">
          <span class="feature-swatch ${feature.type}"></span>
          <span>
            <span class="feature-title">${feature.name}<small>${typeLabel}</small></span>
            <span class="feature-meta">${mainMeta} · ${feature.region}</span>
          </span>
        </button>
      `;
    })
    .join("");
}

async function selectFeature(id) {
  const entry = featureById.get(id) || searchEntryById(id);
  if (!entry) return;

  const { feature, layer } = entry;
  if (!enabledType(feature)) return;

  if (routeState.pickMode) {
    try {
      const [lat, lng] = await resolveFeatureLatLng(feature);
      setRoutePoint(routeState.pickMode, { lat, lng });
      routeState.pickMode = null;
      map.getContainer().classList.remove("is-picking-route");
    } catch (error) {
      setRouteStatus("Ne mogu da pronađem koordinate za izabrano mesto.");
    }
    return;
  }

  if (feature.type === "river") {
    const bounds = L.latLngBounds(feature.path);
    map.fitBounds(bounds.pad(0.35), { maxZoom: 8 });
    L.popup()
      .setLatLng(featureLatLng(feature))
      .setContent(popupHtml(feature))
      .openOn(map);
  } else if (feature.type === "lake") {
    map.setView(featureLatLng(feature), Math.max(map.getZoom(), 10));
    L.popup()
      .setLatLng(featureLatLng(feature))
      .setContent(popupHtml(feature))
      .openOn(map);
  } else if (feature.type === "settlement" || feature.type === "attraction") {
    try {
      const latlng = await resolveFeatureLatLng(feature);
      map.setView(latlng, Math.max(map.getZoom(), 11));
      L.popup()
        .setLatLng(latlng)
        .setContent(popupHtml(feature))
        .openOn(map);
    } catch (error) {
      setRouteStatus("Ne mogu da pronađem koordinate za izabrano mesto.");
    }
  } else {
    map.setView(featureLatLng(feature), Math.max(map.getZoom(), 10));
    layer.openPopup();
  }
}

elements.list.addEventListener("click", (event) => {
  const item = event.target.closest("[data-id]");
  if (item) selectFeature(item.dataset.id);
});

elements.waypointsList.addEventListener("click", (event) => {
  const item = event.target.closest("[data-waypoint-index]");
  if (!item) return;

  const index = Number(item.dataset.waypointIndex);
  const waypoint = routeState.waypoints[index];
  if (!waypoint) return;

  routeLayer.removeLayer(waypoint.marker);
  routeState.waypoints.splice(index, 1);
  refreshWaypointMarkers();
  renderWaypointsList();
  clearRouteLineAndAttractions();
  setRouteStatus(routeState.waypoints.length ? `Tačaka usput: ${routeState.waypoints.length}.` : "Međutačke su uklonjene.");
});

elements.routeAttractionsList.addEventListener("click", (event) => {
  const item = event.target.closest("[data-attraction-id]");
  if (!item) return;

  const attraction = attractions.find((entry) => entry.id === item.dataset.attractionId);
  if (!attraction) return;

  map.setView([attraction.lat, attraction.lng], Math.max(map.getZoom(), 11));
  L.popup()
    .setLatLng([attraction.lat, attraction.lng])
    .setContent(`<p class="popup-title">${attraction.name}</p><p class="popup-meta">${attraction.category}<br>${attraction.note}</p>`)
    .openOn(map);
});

elements.search.addEventListener("input", () => {
  scheduleRemoteSuggestions("search", elements.search.value.trim());
  renderSearchSuggestions();
  renderVisibleList();
});

elements.search.addEventListener("focus", () => {
  renderSearchSuggestions();
});

elements.searchSuggestions.addEventListener("click", (event) => {
  const item = event.target.closest("[data-suggestion-id]");
  if (!item) return;

  elements.searchSuggestions.classList.remove("is-open");
  selectFeature(item.dataset.suggestionId);
});

elements.routeAddress.addEventListener("input", () => {
  routeState.selectedAddressFeature = null;
  scheduleRemoteSuggestions("address", elements.routeAddress.value.trim());
  renderRouteAddressSuggestions();
});

elements.routeAddress.addEventListener("focus", () => {
  renderRouteAddressSuggestions();
});

elements.routeAddressSuggestions.addEventListener("click", (event) => {
  const item = event.target.closest("[data-address-suggestion-id]");
  if (!item) return;

  const entry = searchEntryById(item.dataset.addressSuggestionId);
  if (!entry) return;

  elements.routeAddress.value = entry.feature.name;
  routeState.selectedAddressFeature = entry.feature;
  elements.routeAddressSuggestions.classList.remove("is-open");
});

elements.search.addEventListener(
  "keydown",
  (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    event.stopPropagation();
    if (typeof event.stopImmediatePropagation === "function") event.stopImmediatePropagation();

    const query = elements.search.value.trim();
    const exactMatches = exactSearchEntries(query);
  if (exactMatches.length !== 1) {
      renderSearchSuggestions();
      renderVisibleList();
      const suggestions = suggestionNamesForQuery(query);
      setRouteStatus(
        suggestions.length
          ? `Ponuđena mesta: ${suggestions.join(", ")}. Izaberi jedno iz liste.`
          : "Nema tačnog mesta za taj unos. Izaberi rezultat iz liste."
      );
      return;
    }

    selectFeature(exactMatches[0].feature.id);
    elements.searchSuggestions.classList.remove("is-open");
  },
  true
);

document.addEventListener("click", (event) => {
  if (event.target.closest(".search-group") || event.target.closest(".address-route")) return;
  elements.searchSuggestions.classList.remove("is-open");
  elements.routeAddressSuggestions.classList.remove("is-open");
});

map.on("moveend zoomend", updateLayers);
map.on("click", (event) => {
  if (!routeState.pickMode) return;
  setRoutePoint(routeState.pickMode, event.latlng);
  routeState.pickMode = null;
  map.getContainer().classList.remove("is-picking-route");
});

elements.reset.addEventListener("click", () => {
  elements.search.value = "";
  elements.searchSuggestions.classList.remove("is-open");
  elements.routeAddressSuggestions.classList.remove("is-open");
  updateLayers();
  map.setView([44.05, 20.55], 7);
});

elements.locate.addEventListener("click", () => {
  if (!navigator.geolocation) {
    window.alert("Pregledač ne podržava geolokaciju.");
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      map.setView([latitude, longitude], 11);
      L.circleMarker([latitude, longitude], {
        radius: 8,
        color: "#b9572b",
        weight: 3,
        fillColor: "#ffffff",
        fillOpacity: 1
      })
        .bindPopup("Tvoja trenutna lokacija")
        .addTo(map)
        .openPopup();
    },
    () => window.alert("Lokacija nije dostupna ili nije dozvoljena.")
  );
});

elements.pickStart.addEventListener("click", () => setPickMode("start"));
elements.pickWaypoint.addEventListener("click", () => setPickMode("waypoint"));
elements.pickEnd.addEventListener("click", () => setPickMode("end"));
elements.deleteStart.addEventListener("click", deleteStartPoint);
elements.deleteWaypoints.addEventListener("click", deleteWaypointPoints);
elements.deleteEnd.addEventListener("click", deleteEndPoint);
elements.clearRoute.addEventListener("click", clearRoute);
elements.route.addEventListener("click", calculateRoute);
elements.addressStart.addEventListener("click", () => setAddressAsRoutePoint("start"));
elements.addressWaypoint.addEventListener("click", () => setAddressAsRoutePoint("waypoint"));
elements.addressEnd.addEventListener("click", () => setAddressAsRoutePoint("end"));
elements.routeAddress.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    setAddressAsRoutePoint("start");
  }
});

elements.startFromLocation.addEventListener("click", () => {
  if (!navigator.geolocation) {
    window.alert("Pregledač ne podržava geolokaciju.");
    return;
  }
  setRouteStatus("Tražim tvoju lokaciju...");
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const latlng = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      setRoutePoint("start", latlng);
      map.setView(latlng, 12);
    },
    () => setRouteStatus("Lokacija nije dostupna ili nije dozvoljena.")
  );
});

renderVisibleList();
