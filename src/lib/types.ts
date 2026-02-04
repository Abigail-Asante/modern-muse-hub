// Data types for the CMS

export interface Project {
  id: string;
  title: string;
  description: string;
  icon: 'Lightbulb' | 'Wheat' | 'Building2' | 'Laptop';
  color: string;
  image: string;
  slug: string;
  fullDescription?: string;
  createdAt: string;
  updatedAt: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image?: string;
  author?: string;
  createdAt: string;
  updatedAt: string;
}

export interface MediaItem {
  id: string;
  title: string;
  type: 'image' | 'video' | 'document';
  url: string;
  thumbnail?: string;
  description?: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}

export interface SiteSettings {
  siteName: string;
  tagline: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
  };
}
