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
  status: string;
  title: string;
  slug: 'published' | 'draft' | 'archieved';
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
  about_us: AboutUsCollection;
  contacts: ContactsCollection;
  articles: ArticleCollection;
  settings: SettingsCollection;
};
