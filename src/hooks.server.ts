import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
  // if (event.url.pathname.startsWith('/custom')) {
  //   return new Response('custom response');
  // }

  // event.locals.user = await getUserInformation(event.cookies.get('sessionid'));

  // const response = await resolve(event, {
  //   transformPageChunk: ({ html }) => html.replace('old', 'new'),
  //   filterSerializedResponseHeaders: (name) => name.startsWith('x-'),
  //   preload: ({ type, path }) => type === 'js' || path.includes('/important')
  // });
  // response.headers.set('x-custom-header', 'potato');

  // return response;

  event.locals.answer = 42;

  return await resolve(event);

}) satisfies Handle;
