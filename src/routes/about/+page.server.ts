export const load = async () => {
  return new Promise((fulfil) => {
    setTimeout(fulfil, 1000);
  });
}