export interface Color {
  nameAr: string;
  nameFr: string;
  value: string;
}

export interface Product {
  id: string;
  nameAr: string;
  nameFr: string;
  nameEn: string;
  price: number;
  descriptionShortAr: string;
  descriptionShortFr: string;
  descriptionLongAr: string;
  descriptionLongFr: string;
  images: string[];
  colors: Color[];
  features: string[];
  specifications: {
    dimensionsOpen: string;
    dimensionsFolded?: string;
    height: string;
    wheels: number;
    frameMaterial: string;
    surfaceMaterial: string;
    [key: string]: string | number | undefined;
  };
  category: 'home' | 'professional' | 'xl';
  isLargeTable?: boolean;
}

export interface OrderData {
  name: string;
  phone: string;
  productId: string;
  productName: string;
  state: string;
  commune: string;
  shipments: 'home' | 'bureau';
  color: string;
  totalPrice: number;
  timestamp?: string;
}

export interface BusinessInfo {
  name: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  addressAr: string;
  hours: string;
  hoursAr: string;
  facebook: string;
  instagram: string;
  facebookPixelId: string;
}

export interface Feature {
  id: string;
  titleAr: string;
  titleFr: string;
  descriptionAr: string;
  descriptionFr: string;
  icon: string;
}

export interface State {
  code: string;
  nameAr: string;
  nameFr: string;
  communes: string[];
}

export interface TrustBadge {
  id: string;
  textAr: string;
  textFr: string;
  icon: string;
}
