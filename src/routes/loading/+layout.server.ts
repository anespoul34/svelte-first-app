import { posts } from './data';
import type { LayoutServerLoad } from './$types';

export const load = (() => {
  return {
    summaries: posts.map((post) => ({
			slug: post.slug,
			title: post.title
		}))
  };
}) satisfies LayoutServerLoad;