import { utils } from '../presentation';
import { MailMessage } from '../entities';
import i18next from '../../../locales/translation';

/* const date = new Date();
const dateBrasil = new Date(date.valueOf() - date.getTimezoneOffset() * 60000);
const dateIso = dateBrasil.toISOString().slice(0, 19);

const password = utils.generatePassword();
      const message: MailMessage = {
        to: userExists.usuarioemail,
        subject: `${i18next.t('email.recover_password_subject')}`,
        text: `${i18next.t('email.recover_password_text', { password })}`,
      };
      utils.sendMail(message);

console.log(utils.dateformatbr(dateIso));



*/
/* (async () => {
  const password = 'eXl]D?vR';
  const message: MailMessage = {
    to: 'thayllan.siqueira@cleversystems.com.br',
    // subject: 'Teste Senha',
    // text: `Essa é a sua senha:  ${password}`,
    subject: `${i18next.t('email.recover_password_subject')}`,
    text: `${i18next.t('email.recover_password_text', { password })}`,
  };
  utils.sendMail(message);
})(); */

/* (async () => {
  const message: MailMessage = {
    to: 'thayllan.siqueira@cleversystems.com.br',
    subject: 'Subject Teste',
    text: 'Hello Word Text',
  };
  utils.sendMail(message);
})(); */

//console.log(utils.generateCode());
//console.log(utils.generatePassword());
