import type { ID } from '@directus/sdk';

export type AboutUsCollection = {
  id: ID;
  heading?: string;
  body?: string;
};

export type ContactsCollection = {
  id: ID;
  heading?: string;
  body?: string;
  contacts: any[];
};

export type ArticleCollection = {
  id: ID;
  status: 'published' | 'draft' | 'archieved';
  title: string;
  slug: string;
  description?: string;
  cover?: string;
  body?: string;
  user_created: string;
  date_created: string;
  date_updated: string;
};

export type SettingsCollection = {
  id: ID;
  site_icon?: string;
  site_title: string;
  site_description?: string;
};

export type DirectusCollections = {
  articles: ArticleCollection;
  about_us: AboutUsCollection;
  contacts: ContactsCollection;
  settings: SettingsCollection;
};
