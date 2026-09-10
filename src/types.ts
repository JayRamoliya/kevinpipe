export interface ProductSpecRow {
  size: string;
  classRating: string;
  outerDiameter: string;
  wallThickness: string;
  workingPressure: string;
}

export interface ProductItem {
  id: string; // e.g. 'upvc-pressure-pipe'
  name: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  sizes: string;
  standard: string;
  pressureRating: string;
  types?: string[];
  features: string[];
  applications: string[];
  technicalOverview?: string;
  benefits?: string[];
  specifications?: ProductSpecRow[];
  gallery?: string[];
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  productInterest: string;
  estimatedQuantity: string;
  projectLocation: string;
  message: string;
}

export interface PartnerFormData {
  name: string;
  companyName: string;
  mobile: string;
  email: string;
  city: string;
  state: string;
  partnerType: 'Dealer' | 'Distributor';
  message: string;
}

export interface CareerFormData {
  fullName: string;
  mobile: string;
  email: string;
  city: string;
  position: string;
  experience: string;
  resumeFileName?: string;
  message: string;
}

export interface ContactFormData {
  name: string;
  mobile: string;
  email: string;
  subject: string;
  message: string;
}

