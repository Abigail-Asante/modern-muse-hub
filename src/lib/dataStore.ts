// LocalStorage-based data store for CMS
import { Project, NewsItem, MediaItem } from './types';

// Default data
const defaultProjects: Project[] = [
  {
    id: '1',
    title: 'Power Compact',
    description: 'Improving the quality and reliability of electricity in Ghana through infrastructure investment and regulatory strengthening.',
    icon: 'Lightbulb',
    color: 'bg-yellow-500/10 text-yellow-600',
    image: '/src/assets/power-sample.png',
    slug: 'power-compact',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Agricultural Projects',
    description: 'Enhancing the profitability of farming through irrigation, land tenure facilitation, and post-harvest infrastructure.',
    icon: 'Wheat',
    color: 'bg-green-500/10 text-green-600',
    image: '/src/assets/agriculture-sample.png',
    slug: 'agriculture',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Economic Enclaves',
    description: 'Developing industrial zones with reliable utilities to attract private sector investment and create jobs.',
    icon: 'Building2',
    color: 'bg-blue-500/10 text-blue-600',
    image: '/src/assets/industrial-sample.png',
    slug: 'economic-enclaves',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'Digital Youth Hubs',
    description: 'Empowering youth with digital skills and entrepreneurship opportunities in modern tech hubs.',
    icon: 'Laptop',
    color: 'bg-purple-500/10 text-purple-600',
    image: '/src/assets/digital-sample.png',
    slug: 'digital-youth-hubs',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const defaultNews: NewsItem[] = [
  {
    id: '1',
    title: 'MiDA to drive Grow24 with proven MCC models',
    excerpt: "The Millennium Development Authority (MiDA) is poised to play a central role in Ghana's agricultural transformation...",
    content: '',
    date: 'July 6, 2025',
    category: 'Agriculture',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: "We'll implement outcomes of economic dialogue – MiDA Boss",
    excerpt: 'MiDA commits to implementing key outcomes from recent economic dialogues to accelerate development...',
    content: '',
    date: 'March 5, 2025',
    category: 'Leadership',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'MiDA welcomes new acting Chief Executive Officer',
    excerpt: 'Alex Mould assumes leadership of the Millennium Development Authority with a vision for transformation...',
    content: '',
    date: 'February 18, 2025',
    category: 'Announcements',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'Ghana prepares for new MCC engagement',
    excerpt: 'Preparations underway for new strategic partnership discussions with the Millennium Challenge Corporation...',
    content: '',
    date: 'November 12, 2024',
    category: 'Partnerships',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const STORAGE_KEYS = {
  projects: 'mida_projects',
  news: 'mida_news',
  media: 'mida_media',
  isInitialized: 'mida_initialized',
};

// Initialize data store with defaults if empty
export function initializeDataStore(): void {
  if (!localStorage.getItem(STORAGE_KEYS.isInitialized)) {
    localStorage.setItem(STORAGE_KEYS.projects, JSON.stringify(defaultProjects));
    localStorage.setItem(STORAGE_KEYS.news, JSON.stringify(defaultNews));
    localStorage.setItem(STORAGE_KEYS.media, JSON.stringify([]));
    localStorage.setItem(STORAGE_KEYS.isInitialized, 'true');
  }
}

// Generic CRUD operations
function getItems<T>(key: string): T[] {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}

function setItems<T>(key: string, items: T[]): void {
  localStorage.setItem(key, JSON.stringify(items));
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Projects
export function getProjects(): Project[] {
  return getItems<Project>(STORAGE_KEYS.projects);
}

export function getProjectById(id: string): Project | undefined {
  return getProjects().find(p => p.id === id);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getProjects().find(p => p.slug === slug);
}

export function createProject(project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Project {
  const newProject: Project = {
    ...project,
    id: generateId(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  const projects = getProjects();
  projects.push(newProject);
  setItems(STORAGE_KEYS.projects, projects);
  return newProject;
}

export function updateProject(id: string, updates: Partial<Project>): Project | undefined {
  const projects = getProjects();
  const index = projects.findIndex(p => p.id === id);
  if (index === -1) return undefined;
  
  projects[index] = {
    ...projects[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  setItems(STORAGE_KEYS.projects, projects);
  return projects[index];
}

export function deleteProject(id: string): boolean {
  const projects = getProjects();
  const filtered = projects.filter(p => p.id !== id);
  if (filtered.length === projects.length) return false;
  setItems(STORAGE_KEYS.projects, filtered);
  return true;
}

// News
export function getNews(): NewsItem[] {
  return getItems<NewsItem>(STORAGE_KEYS.news);
}

export function getNewsById(id: string): NewsItem | undefined {
  return getNews().find(n => n.id === id);
}

export function createNews(news: Omit<NewsItem, 'id' | 'createdAt' | 'updatedAt'>): NewsItem {
  const newNews: NewsItem = {
    ...news,
    id: generateId(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  const allNews = getNews();
  allNews.unshift(newNews);
  setItems(STORAGE_KEYS.news, allNews);
  return newNews;
}

export function updateNews(id: string, updates: Partial<NewsItem>): NewsItem | undefined {
  const allNews = getNews();
  const index = allNews.findIndex(n => n.id === id);
  if (index === -1) return undefined;
  
  allNews[index] = {
    ...allNews[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  setItems(STORAGE_KEYS.news, allNews);
  return allNews[index];
}

export function deleteNews(id: string): boolean {
  const allNews = getNews();
  const filtered = allNews.filter(n => n.id !== id);
  if (filtered.length === allNews.length) return false;
  setItems(STORAGE_KEYS.news, filtered);
  return true;
}

// Media
export function getMedia(): MediaItem[] {
  return getItems<MediaItem>(STORAGE_KEYS.media);
}

export function getMediaById(id: string): MediaItem | undefined {
  return getMedia().find(m => m.id === id);
}

export function createMedia(media: Omit<MediaItem, 'id' | 'createdAt' | 'updatedAt'>): MediaItem {
  const newMedia: MediaItem = {
    ...media,
    id: generateId(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  const allMedia = getMedia();
  allMedia.unshift(newMedia);
  setItems(STORAGE_KEYS.media, allMedia);
  return newMedia;
}

export function updateMedia(id: string, updates: Partial<MediaItem>): MediaItem | undefined {
  const allMedia = getMedia();
  const index = allMedia.findIndex(m => m.id === id);
  if (index === -1) return undefined;
  
  allMedia[index] = {
    ...allMedia[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  setItems(STORAGE_KEYS.media, allMedia);
  return allMedia[index];
}

export function deleteMedia(id: string): boolean {
  const allMedia = getMedia();
  const filtered = allMedia.filter(m => m.id !== id);
  if (filtered.length === allMedia.length) return false;
  setItems(STORAGE_KEYS.media, filtered);
  return true;
}

// Reset to defaults
export function resetToDefaults(): void {
  localStorage.removeItem(STORAGE_KEYS.isInitialized);
  initializeDataStore();
}
