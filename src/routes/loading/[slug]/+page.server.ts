import { error } from '@sveltejs/kit';
import { posts } from '../data';

export const load = ({ params } : { params : any}) => {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) throw error(404);

  return {
    post
  };
}