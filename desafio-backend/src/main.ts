import * as dotenv from 'dotenv';
import fs from 'fs';
import { resolve } from 'path';

let isDevelopment = true;
const envProduction = './.env';

(async () => {
  if (fs.existsSync(envProduction)) {
    isDevelopment = false;
  }

  if (isDevelopment) {
    dotenv.config(); // development
  } else {
    dotenv.config({
      path: envProduction, // production
    });
  }

  // import { utils } from './modules/utils/presentation';
  const { utils } = await import('./modules/utils/presentation');

  //const licence = await utils.readLicense();
  const licence = true;
  if (licence) {
    import('./modules/database/initial-charge');

    import('./modules/rest/server');

    import('./modules/utils/services/routine-actions');

    const version = utils.getVersion();
    if (version !== undefined) {
      fs.writeFileSync(resolve(__dirname, 'version.json'), JSON.stringify({ version: version }));
    }
    console.log('Licença Válida!');
  } else {
    // throw new Error('Sem licença válida');
    console.log('Sem Licença');
  }
})();
