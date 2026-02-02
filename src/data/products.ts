import { Product } from '@/types';

export const products: Product[] = [
  // Product 1: Home Cutting Table - 15,000 DZD
  {
    id: 'table-home',
    nameAr: 'طاولة تفصيل منزلية',
    nameFr: 'Table de Couture Pliable',
    nameEn: 'Home Cutting Table',
    price: 15000,
    descriptionShortAr: 'طاولة قابلة للطي بأبعاد 90×180 سم، ارتفاع 90 سم، تطوى لتصبح بسمك 30 سم. تأتي بـ 6 عجلات للحركة السهلة.',
    descriptionShortFr: 'Table pliable avec dimensions 90×180 cm, hauteur 90 cm. Se replie à 30 cm d\'épaisseur. Livrée avec 6 roues pour une mobilité facile.',
    descriptionLongAr: 'أطلق العنان لإبداعك دون التضحية بمساحتك. طاولة الخياطة القابلة للطي هي الحل الأمثل لعشاق الخياطة الذين يعملون من المنزل. قوية ومستقرة وعملية بشكل لا يصدق، تتكشف لتوفر لك سطح عمل واسع يبلغ 180 سم، وتطوى في لمح البصر لتخزينها بسهولة.',
    descriptionLongFr: 'Libérez votre créativité sans sacrifier votre espace. Notre table de couture pliable est la solution parfaite pour les passionnés de couture qui travaillent à domicile. Robuste, stable et incroyablement pratique, elle se déplie pour vous offrir une surface de travail généreuse de 180cm, et se replie en un clin d\'œil pour se ranger discrètement.',
    images: [
      '/images/home-table-front.jpg',
      '/images/home-table-angled.jpg',
      '/images/home-table-materials.jpg',
      '/images/home-table-folding.jpg',
      '/images/home-table-inuse.jpg',
      '/images/home-table-folded.jpg',
    ],
    colors: [
      { nameAr: 'أبيض', nameFr: 'Blanc', value: '#ffffff' },
      { nameAr: 'بيج', nameFr: 'Beige', value: '#f5f5dc' },
      { nameAr: 'مارون', nameFr: 'Marron', value: '#8b4513' },
    ],
    features: [
      'HDF imported wood',
      '12mm solid iron frame',
      'Epoxy scratch-resistant paint',
      'PVC edge protection',
      '6 high-quality wheels',
      'Easy folding mechanism',
    ],
    specifications: {
      dimensionsOpen: '90 × 180 سم',
      dimensionsFolded: '90 × 30 × 90 سم',
      height: '90 سم',
      wheels: 6,
      frameMaterial: 'حديد صلب 12 ملم',
      surfaceMaterial: 'خشب HDF مستورد',
      workSurface: '1.62 م²',
    },
    category: 'home',
    isLargeTable: false,
  },

  // Product 2: Cutting Table with Shelves - 17,000 DZD
  {
    id: 'table-shelves',
    nameAr: 'طاولة تفصيل برفوف',
    nameFr: 'Table de Couture avec Rangement',
    nameEn: 'Cutting Table with Shelves',
    price: 17000,
    descriptionShortAr: 'نفس مواصفات الطاولة العادية مع إضافة رفوف تخزين في الأسفل لتنظيم معدات الخياطة.',
    descriptionShortFr: 'Mêmes spécifications que la table régulière avec des étagères de rangement intégrées pour organiser votre équipement de couture.',
    descriptionLongAr: 'نفس التصميم الذكي لطاولتنا الكلاسيكية، الآن مع أرفف تخزين مدمجة. حافظ على الأقمشة والخيوط والإكسسوارات في متناول يدك دون ازدحام مساحة عملك. إنه المزيج المثالي بين الوظيفية والتصميم.',
    descriptionLongFr: 'Le même design intelligent que notre table classique, maintenant avec des étagères de rangement intégrées. Gardez vos tissus, fils et accessoires à portée de main sans encombrer votre espace de travail.',
    images: [
      '/images/shelves-table-front.jpg',
      '/images/shelves-table-detail.jpg',
      '/images/shelves-table-angled.jpg',
      '/images/shelves-table-storage.jpg',
    ],
    colors: [
      { nameAr: 'أبيض', nameFr: 'Blanc', value: '#ffffff' },
      { nameAr: 'بيج', nameFr: 'Beige', value: '#f5f5dc' },
      { nameAr: 'مارون', nameFr: 'Marron', value: '#8b4513' },
    ],
    features: [
      'HDF imported wood',
      '12mm solid iron frame',
      'Epoxy scratch-resistant paint',
      'PVC edge protection',
      '6 high-quality wheels',
      'Storage shelves included',
    ],
    specifications: {
      dimensionsOpen: '90 × 180 سم',
      height: '90 سم',
      wheels: 6,
      frameMaterial: 'حديد صلب 12 ملم',
      surfaceMaterial: 'خشب HDF مستورد',
      storage: 'رفوف تخزين مدمجة',
    },
    category: 'home',
    isLargeTable: false,
  },

  // Product 3: Cutting Table Plus - 20,000 DZD
  {
    id: 'table-plus',
    nameAr: 'طاولة تفصيل بلس',
    nameFr: 'Table de Couture "Plus"',
    nameEn: 'Cutting Table Plus',
    price: 20000,
    descriptionShortAr: 'النسخة المطورة بإطار كامل من الحديد مع حواف HDF. بناء أقوى وأكثر متانة للاستخدام المهني.',
    descriptionShortFr: 'Version améliorée avec cadre entièrement métallique et bords HDF. Construction plus solide et plus durable pour une utilisation professionnelle.',
    descriptionLongAr: 'للمحترفين والحرفيين الذين يطلبون الأفضل، نسخة "بلاس" هي طاولتنا الأكثر قوة حتى الآن. مع قاعدة حديدية بالكامل تعزز كل حافة، فهي مصممة لتحمل سنوات من الاستخدام المكثف.',
    descriptionLongFr: 'Pour les professionnels et les artisans exigeants, la version "Plus" est notre table la plus robuste à ce jour. Avec une base entièrement en fer qui renforce chaque bord, elle est conçue pour résister à des années d\'utilisation intensive.',
    images: [
      '/images/plus-table-front.jpg',
      '/images/plus-table-frame.jpg',
      '/images/plus-table-edge.jpg',
      '/images/plus-table-wheels.jpg',
    ],
    colors: [
      { nameAr: 'أبيض', nameFr: 'Blanc', value: '#ffffff' },
      { nameAr: 'بيج', nameFr: 'Beige', value: '#f5f5dc' },
      { nameAr: 'مارون', nameFr: 'Marron', value: '#8b4513' },
    ],
    features: [
      'Full metal frame with HDF edges',
      '12mm reinforced iron construction',
      'Premium epoxy paint',
      'Industrial-grade PVC edging',
      '6 heavy-duty wheels',
      'Professional-grade durability',
    ],
    specifications: {
      dimensionsOpen: '90 × 180 سم',
      height: '90 سم',
      wheels: 6,
      frameMaterial: 'إطار معدني كامل معزز 12 ملم',
      surfaceMaterial: 'حواف HDF',
      grade: 'احترافي / صناعي',
    },
    category: 'professional',
    isLargeTable: false,
  },

  // Product 4: Cutting Table 120×200 - 30,000 DZD
  {
    id: 'table-large',
    nameAr: 'طاولة تفصيل 120×200',
    nameFr: 'Table de Travail XXL',
    nameEn: 'Cutting Table 120×200',
    price: 30000,
    descriptionShortAr: 'نفس نظام الطاولة بلس مع أبعاد أكبر 120×200 سم. تأتي بـ 8 عجلات لثبات إضافي وقدرة تحمل أكبر.',
    descriptionShortFr: 'Même système Plus avec des dimensions plus grandes 120×200 cm. Livré avec 8 roues pour une stabilité supplémentaire et une plus grande capacité de poids.',
    descriptionLongAr: 'فكر على نطاق أوسع. توفر طاولتنا 120/200 سطح عمل ضخم للمشاريع الأكثر طموحًا، مع الحفاظ على سحر الطي المدمج. مثبتة على 8 عجلات لسهولة الحركة.',
    descriptionLongFr: 'Voyez les choses en grand. Notre table 120/200 offre une surface de travail massive pour les projets les plus ambitieux, tout en conservant la magie du pliage compact. Montée sur 8 roues pour une mobilité sans effort.',
    images: [
      '/images/large-table-front.jpg',
      '/images/large-table-workspace.jpg',
      '/images/large-table-folded.jpg',
      '/images/large-table-comparison.jpg',
    ],
    colors: [
      { nameAr: 'أبيض', nameFr: 'Blanc', value: '#ffffff' },
      { nameAr: 'بيج', nameFr: 'Beige', value: '#f5f5dc' },
      { nameAr: 'مارون', nameFr: 'Marron', value: '#8b4513' },
    ],
    features: [
      'Extra-large work surface (120×200 cm)',
      'Plus system construction',
      '8 wheels for stability',
      'Professional-grade materials',
      'Foldable for storage',
      'Heavy-duty capacity',
    ],
    specifications: {
      dimensionsOpen: '120 × 200 سم',
      dimensionsFolded: '120 × 90 × 45 سم',
      height: '90 سم',
      wheels: 8,
      frameMaterial: 'إطار معدني كامل (نظام بلس)',
      surfaceMaterial: 'حواف HDF',
      workSurface: '2.4 م² (أكبر بـ 48%)',
      note: 'تكلفة توصيل أعلى',
    },
    category: 'xl',
    isLargeTable: true,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (category: 'home' | 'professional' | 'xl'): Product[] => {
  return products.filter((p) => p.category === category);
};
