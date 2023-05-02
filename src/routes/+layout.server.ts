// export const load = () => {
//   throw new Error('yikes');
// }
export const load = (event) => {
  return {
    message: `the answer is ${event.locals.answer}`
  };
}