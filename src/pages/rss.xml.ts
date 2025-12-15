import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { isPublished, sortByDateDesc } from '../utils/content';
import { withBase } from '../utils/paths';

export async function GET(context) {
  const philosophy = await getCollection('philosophy', isPublished);
  const workingNotes = [
    ...(await getCollection('lab', isPublished)),
    ...(await getCollection('creative', isPublished)),
    ...(await getCollection('comms', isPublished)),
  ];

  const allEntries = [...philosophy, ...workingNotes].sort(sortByDateDesc);

  return rss({
    title: 'Pruning My Pothos · Philosophy and Notes',
    description: 'Reflective essays and working notes from practice.',
    site: context.site,
    items: allEntries.map((item) => {
      const isPhilosophy = item.collection === 'philosophy';
      const link = isPhilosophy
        ? withBase(`/philosophy/${item.slug}`)
        : withBase(`/working-notes/${item.slug}`);

      return {
        title: item.data.title,
        description: item.data.description,
        pubDate: item.data.date,
        link,
      };
    }),
  });
}
