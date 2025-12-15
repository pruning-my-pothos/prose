import type { CollectionEntry } from 'astro:content';

export function isPublished<T extends CollectionEntry<string>>(entry: T) {
  return entry.data.status === 'published';
}

export function sortByDateDesc<T extends CollectionEntry<string>>(a: T, b: T) {
  return b.data.date.valueOf() - a.data.date.valueOf();
}
