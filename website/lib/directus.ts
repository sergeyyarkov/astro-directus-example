import { Directus } from '@directus/sdk';
import type { DirectusCollections } from './directus-collections';

let isAuthenticated = false;
const directus = new Directus<DirectusCollections>(import.meta.env.DIRECTUS_URL);

export function getAssetURL(id: string) {
  return `${import.meta.env.DIRECTUS_URL}/assets/${id}`;
}

async function getClient() {
  try {
    if (import.meta.env.DIRECTUS_EMAIL && import.meta.env.DIRECTUS_PASSWORD) {
      if (!isAuthenticated) {
        await directus.auth.login({
          email: import.meta.env.DIRECTUS_EMAIL,
          password: import.meta.env.DIRECTUS_PASSWORD,
        });
        isAuthenticated = true;
      }
    } else if (import.meta.env.DIRECTUS_STATIC_TOKEN) {
      await directus.auth.static(import.meta.env.DIRECTUS_STATIC_TOKEN);
    }

    return directus;
  } catch (error) {
    isAuthenticated = false;
    throw new Error(`${error}`);
  }
}

const client = await getClient();

export { client };
