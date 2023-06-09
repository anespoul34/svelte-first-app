import { fail } from '@sveltejs/kit';
import * as db from '$lib/server/database';

export const load = ({ cookies }) => {
  const id = cookies.get('userid');

  if (!id) {
    cookies.set('userid', crypto.randomUUID());
  }

  return {
    todos: db.getTodos(id) ?? []
  };
}

export const actions = {
  create: async ({ cookies, request }) => {
    await new Promise((fulfil) => setTimeout(fulfil, 1000));
    const data = await request.formData();

    try {
      db.createTodo(cookies.get('userid'), data.get('description'));
    } catch (error: any) {
      return fail(422, {
        description: data.get('description'),
        error: error.message
      });
    }
  },
  delete: async ({ cookies, request }) => {
    await new Promise((fulfil) => setTimeout(fulfil, 1000));
    const data = await request.formData();
    db.deleteTodo(cookies.get('userid'), data.get('id'));
  }
};