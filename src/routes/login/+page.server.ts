import { redirect } from '@sveltejs/kit';

export const load = () => {
  throw redirect(307, '/todos');
}

// import type { PageServerLoad, Actions } from './$types';
// import { fail } from '@sveltejs/kit';

// export const load = (async ({ cookies }) => {
//   const user = await db.getUserFromSession(cookies.get('sessionid'));
//   return { user };
// }) satisfies PageServerLoad;

// export const actions = {
//   login: async ({ cookies, request }) => {
//     const data = await request.formData();
//     const email = data.get('email');
//     const password = data.get('password');

//     if (!email) {
//       return fail(400, { email, missing: true });
//     }

//     const user = await db.getUser(email);

//     if (!user || user.password !== hash(password)) {
//       return fail(400, { email, incorrect: true });
//     }

//     cookies.set('sessionid', await db.createSession(user));

//     return { success: true };
//   },
//   register: async (event) => {
//     // register the user
//   }
// } satisfies Actions;