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
