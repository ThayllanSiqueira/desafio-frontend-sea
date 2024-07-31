import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import { LanguageDetector } from 'i18next-http-middleware';
import { resolve } from 'path';

let pathLoad = '';
if (process.env.NODE_ENV === 'development') {
  pathLoad = `src/locales/{{lng}}/translation.json`;
} else {
  pathLoad = `${resolve(__dirname, '{{lng}}/translation.json')}`;
}
i18next
  .use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'pt',
    backend: {
      //loadPath: `./locales/{{lng}}/translation.json`,
      loadPath: `${pathLoad}`,
    },
    interpolation: { escapeValue: false },
  });

export default i18next;
