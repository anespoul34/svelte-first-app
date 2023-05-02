import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
  if (params.slug === 'hello-world') {
    return {
      title: 'Hello world!',
      content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
    };
  }
  if (params.slug === 'toto') {
    return {
      title: 'Toto',
      content: "This is toto's page!"
    }
  }

  throw error(404, 'Not found');
}) satisfies PageLoad;