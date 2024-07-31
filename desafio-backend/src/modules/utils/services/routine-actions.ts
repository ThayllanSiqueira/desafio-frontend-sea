import { utils } from '../presentation';

import { unlinkSync } from 'fs';

const oneday = 1000 * 60 * 60 * 24;
// const twominute = 2000 * 60;
// const eightHours = 1000 * 60 * 60 * 8;
// const oneHour = 1000 * 60 * 60 * 1;

const checkLicense = async (): Promise<void> => {
  const lic = await utils.generateLicense();

  const data = {
    lic,
    key: utils.encrypt(utils.keyfix),
    client: process.env.CLIENT,
    version: utils.getVersion(),
    date: utils.dateisobr(),
  };

  const dataEncrypted = utils.encrypt(JSON.stringify(data));
  // console.log(JSON.stringify(dataEncrypted));
  // const response = await axios.post('https://lincenca.net/api', { license: JSON.stringify(dataEncrypted) });
  const valid = true;
  // if (response.data) {
  if (valid) {
    // setTimeout(checkLicense, twominute);
    setTimeout(checkLicense, oneday);
    return;
  } else {
    setTimeout(() => {
      process.exit(1);
    }, 5000);
    unlinkSync(utils.filedirLicense);
    throw new Error('Sem licença válida');
  }
};

(async () => {
  // checkLicense();
})();
