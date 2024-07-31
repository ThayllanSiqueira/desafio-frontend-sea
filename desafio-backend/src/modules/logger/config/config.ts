import { format } from 'winston';
import rootPath from 'app-root-path';
import { resolve } from 'path';

let pathLog = '';
/* console.log('isDevelopment: ');
console.log(process.env.NODE_ENV); */
if (process.env.NODE_ENV === 'development') {
  pathLog = `${rootPath}`;
} else {
  pathLog = resolve(String(process.env.LOGS));
  // pathLog = '/dados/artwork.cleversystems.net/logs';
}
/* console.log('envLog: ', process.env.LOGS);
console.log('pathlog: ', pathLog); */
export const options = {
  fileaccess: {
    level: 'info',
    filename: `${pathLog}/logs/access.log`,
    handleExceptions: true,
    format: format.printf((info) => `${[info.timestamp]} - ${info.message}`),
    colorize: true,
    exitOnError: true,
  },
  filebusiness: {
    level: 'info',
    filename: `${pathLog}/logs/business.log`,
    handleExceptions: true,
    format: format.printf((info) => `${[info.timestamp]} - ${info.message}`),
    colorize: true,
    exitOnError: false,
  },
  fileerror: {
    level: 'error',
    filename: `${pathLog}/logs/errors.log`,
    handleExceptions: true,
    format: format.printf((error) => `${[error.timestamp]} - ${error.message}`),
    colorize: true,
    exitOnError: false,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    format: format.printf((debug) => `${debug.level}: ${[debug.timestamp]} - ${debug.message}`),
    json: true,
    colorize: true,
    exitOnError: false,
  },
};
