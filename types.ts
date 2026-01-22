export enum ProductCategory {
  DELTA = 'Serie DELTA',
  RIVER = 'Serie RIVER',
  TRAIL = 'Serie Trail',
  SOLAR = 'Paneles Solares',
  ACCESSORIES = 'Accesorios'
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductFeature {
  icon: 'battery' | 'bolt' | 'sun' | 'wifi' | 'clock' | 'weight' | 'search' | 'check'; 
  text: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  description: string;
  priceEstimate?: string; // Optional for catalog view
  imagePlaceholder: string; // Using generic placeholders as per constraints
  specs: ProductSpec[];
  features: ProductFeature[];
}