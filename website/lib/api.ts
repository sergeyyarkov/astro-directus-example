import { client as directus } from './directus';

export async function getLatestArticles() {
  const data = await directus
    .items('articles')
    .readByQuery({ limit: -1, filter: { status: 'published' }, sort: ['-date_created'] });
  return data;
}
