const fallbackProducts = [
  {
    id: 1,
    name: "Yara",
    slug: "yara",
    inspiredBy: "Yara by Lattafa",
    image: "/parfum_glas/Yara.png",
    referenceImage: "/parfum_reference/Yara.png",
    generatedImages: {
      heroes: ["/generated/Yara/hero-01.png", "/generated/Yara/hero-02.png"],
      gallery: ["/generated/Yara/catalog-angle-left.png", "/generated/Yara/catalog-angle-right.png"],
      detailScenes: [],
    },
    accent: "#D4AF37",
    shortDescriptionFr:
      "Un parfum doux, féminin et chaleureux, parfait pour une présence élégante au quotidien.",
    shortDescriptionAr:
      "عطر ناعم، أنثوي ودافئ، مناسب لإطلالة أنيقة في الاستعمال اليومي.",
    notesFr: ["Doux", "Féminin", "Chaleureux"],
    notesAr: ["ناعم", "أنثوي", "دافئ"],
    options: [
      { size: "20ml", price: 29 },
      { size: "30ml", price: 39 },
    ],
  },
  {
    id: 2,
    name: "Prada",
    slug: "prada",
    inspiredBy: "Prada Paradoxe",
    image: "/parfum_glas/Prada.png",
    referenceImage: "/parfum_reference/Prada.png",
    generatedImages: {
      heroes: ["/generated/Prada/hero-01.png", "/generated/Prada/hero-02.png"],
      gallery: ["/generated/Prada/catalog-angle-left.png", "/generated/Prada/catalog-angle-right.png"],
      detailScenes: [],
    },
    accent: "#E74A68",
    shortDescriptionFr:
      "Une fragrance moderne, raffinée et audacieuse, idéale pour une signature féminine élégante.",
    shortDescriptionAr:
      "عطر عصري، راقٍ وجريء، مناسب لتوقيع أنثوي أنيق.",
    notesFr: ["Moderne", "Raffiné", "Audacieux"],
    notesAr: ["عصري", "راقٍ", "جريء"],
    options: [
      { size: "20ml", price: 29 },
      { size: "30ml", price: 39 },
    ],
  },
  {
    id: 3,
    name: "L’Interdit",
    slug: "linterdit",
    inspiredBy: "Givenchy L’Interdit",
    image: "/parfum_glas/L’Interdit.png",
    referenceImage: "/parfum_reference/L’Interdit.png",
    generatedImages: {
      heroes: ["/generated/LInterdit/hero-01.png", "/generated/LInterdit/hero-02.png"],
      gallery: ["/generated/LInterdit/catalog-angle-left.png", "/generated/LInterdit/catalog-angle-right.png"],
      detailScenes: [],
    },
    accent: "#168BFF",
    shortDescriptionFr:
      "Une senteur chic et lumineuse, pensée pour celles et ceux qui aiment les parfums remarquables.",
    shortDescriptionAr:
      "رائحة أنيقة ومضيئة، مناسبة لمن يحب عطراً واضح الحضور.",
    notesFr: ["Chic", "Lumineux", "Remarquable"],
    notesAr: ["أنيق", "مضيء", "لافت"],
    options: [
      { size: "20ml", price: 29 },
      { size: "30ml", price: 39 },
    ],
  },
  {
    id: 4,
    name: "Amirat Al Arab",
    slug: "amirat-al-arab",
    inspiredBy: "Amirat Al Arab",
    image: "/parfum_glas/Amirat Al Arab.png",
    referenceImage: "/parfum_reference/Amirat Al Arab.png",
    generatedImages: {
      heroes: ["/generated/AmiratAlArab/hero-01.png", "/generated/AmiratAlArab/hero-02.png"],
      gallery: ["/generated/AmiratAlArab/catalog-angle-left.png", "/generated/AmiratAlArab/catalog-angle-right.png"],
      detailScenes: [],
    },
    accent: "#00A86B",
    shortDescriptionFr:
      "Une inspiration orientale élégante, avec un caractère riche et chaleureux.",
    shortDescriptionAr:
      "عطر بطابع شرقي أنيق، غني ودافئ في الإحساس.",
    notesFr: ["Oriental", "Riche", "Chaleureux"],
    notesAr: ["شرقي", "غني", "دافئ"],
    options: [
      { size: "20ml", price: 29 },
      { size: "30ml", price: 39 },
    ],
  },
  {
    id: 5,
    name: "Kayali Vanilla",
    slug: "kayali-vanilla",
    inspiredBy: "Kayali Vanilla 28",
    image: "/parfum_glas/Kayali Vanilla.png",
    referenceImage: "/parfum_reference/Kayali Vanilla.png",
    generatedImages: {
      heroes: ["/generated/KayaliVanilla/hero-01.png", "/generated/KayaliVanilla/hero-02.png"],
      gallery: ["/generated/KayaliVanilla/catalog-angle-left.png", "/generated/KayaliVanilla/catalog-angle-right.png"],
      detailScenes: [],
    },
    accent: "#005B73",
    shortDescriptionFr:
      "Une fragrance gourmande et enveloppante, inspirée par la douceur de la vanille.",
    shortDescriptionAr:
      "عطر دافئ وناعم، مستوحى من حلاوة الفانيلا ولمستها الراقية.",
    notesFr: ["Vanillé", "Gourmand", "Enveloppant"],
    notesAr: ["فانيلا", "حلو", "دافئ"],
    options: [
      { size: "20ml", price: 29 },
      { size: "30ml", price: 39 },
    ],
  },
];

export default fallbackProducts;
