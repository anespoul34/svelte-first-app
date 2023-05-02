const greetings = {
  en: 'Hello!',
  de: 'Hallo!',
  fr: 'Bonjour!'
};

export const load = ({ params }) => {
  return {
    greetings: greetings[params.lang ?? 'en']
  };
};