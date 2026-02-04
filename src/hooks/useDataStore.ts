import { useState, useEffect, useCallback } from 'react';
import { Project, NewsItem, MediaItem } from '@/lib/types';
import * as dataStore from '@/lib/dataStore';

// Initialize on first import
dataStore.initializeDataStore();

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(() => {
    setProjects(dataStore.getProjects());
    setLoading(false);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const create = useCallback((project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newProject = dataStore.createProject(project);
    refresh();
    return newProject;
  }, [refresh]);

  const update = useCallback((id: string, updates: Partial<Project>) => {
    const updated = dataStore.updateProject(id, updates);
    refresh();
    return updated;
  }, [refresh]);

  const remove = useCallback((id: string) => {
    const result = dataStore.deleteProject(id);
    refresh();
    return result;
  }, [refresh]);

  return { projects, loading, refresh, create, update, remove };
}

export function useNews() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(() => {
    setNews(dataStore.getNews());
    setLoading(false);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const create = useCallback((item: Omit<NewsItem, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newItem = dataStore.createNews(item);
    refresh();
    return newItem;
  }, [refresh]);

  const update = useCallback((id: string, updates: Partial<NewsItem>) => {
    const updated = dataStore.updateNews(id, updates);
    refresh();
    return updated;
  }, [refresh]);

  const remove = useCallback((id: string) => {
    const result = dataStore.deleteNews(id);
    refresh();
    return result;
  }, [refresh]);

  return { news, loading, refresh, create, update, remove };
}

export function useMedia() {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(() => {
    setMedia(dataStore.getMedia());
    setLoading(false);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const create = useCallback((item: Omit<MediaItem, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newItem = dataStore.createMedia(item);
    refresh();
    return newItem;
  }, [refresh]);

  const update = useCallback((id: string, updates: Partial<MediaItem>) => {
    const updated = dataStore.updateMedia(id, updates);
    refresh();
    return updated;
  }, [refresh]);

  const remove = useCallback((id: string) => {
    const result = dataStore.deleteMedia(id);
    refresh();
    return result;
  }, [refresh]);

  return { media, loading, refresh, create, update, remove };
}
