export interface LeadSubmission {
  id: string;
  fullName: string;
  phone: string;
  message?: string;
  date: string;
  status: 'new' | 'contacted' | 'completed';
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  location: string;
  priceStart: string;
  details: string[];
  features: string[];
}

export interface Service {
  id: string;
  title: string;
  iconName: string;
  description: string;
  longDescription: string;
}

export interface PropertyUnit {
  id: string;
  name: string;
  type: 'سكني' | 'فندقي' | 'تجاري' | 'إداري' | 'طبي' | 'ساحلي';
  projectName: string;
  developerName: string;
  address: string;
  area: string;
  floor: string;
  totalPrice: string;
  pricePerMeter: string;
  rooms: string;
  bathrooms: string;
  finishing: 'تشطيب كامل' | 'نصف تشطيب' | 'بدون تشطيب' | 'سوبر لوكس';
  status: 'متاح' | 'محجوز' | 'مباع';
  images: string[];
  videoUrl: string;
  notes: string;
  addedDate: string;
}
