// import { json } from '@sveltejs/kit';
// import * as db from '$lib/server/database';

// export const POST = async ({ request, cookies }) => {
//   const { description } = await request.json();

//   const userid = cookies.get('userid');
//   const { id } = await db.createTodo({ userid, description });

//   return json({ id }, { status: 201 });
// }