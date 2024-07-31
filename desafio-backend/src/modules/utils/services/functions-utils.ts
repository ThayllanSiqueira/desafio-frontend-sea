import { HashKey, MailMessage, SerialNumbers } from '../entities';
import { log } from '../../logger/presentation';

import { networkInterfaces } from 'os';
import { createTransport } from 'nodemailer';
import { generate } from 'generate-password';
import { PDFDocument } from 'pdf-lib';
import { lookup } from 'mime-types';
import libre from 'libreoffice-convert';
import { readFile, writeFile } from 'fs/promises';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve } from 'path';
import { promisify } from 'util';
import { diskLayout, uuid } from 'systeminformation';
import { createCipheriv, randomBytes, createDecipheriv } from 'crypto';
import axios from 'axios';

const algorithm = 'aes-256-ctr';
const codglobal = '1010193939181010101033332';
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
export const keyfix = '123456';
export const filedirLicense = './reg.lic';

export type KeyMapping<T, U> = {
  [K in keyof T]?: keyof U;
};

export const mapObject = <T, U>(source: T, mapping: KeyMapping<T, U>): U => {
  const target = {} as U;

  for (const key in mapping) {
    // eslint-disable-next-line no-prototype-builtins
    if (mapping.hasOwnProperty(key)) {
      const targetKey = mapping[key] as keyof U;
      const sourceKey = key as keyof T;
      target[targetKey] = source[sourceKey] as unknown as U[keyof U];
    }
  }

  return target;
};

export const dateformatbr = (date: string): string => {
  const data = new Date(date);
  const y = data.getFullYear();
  const m = addZero(Number(data.getMonth() + 1));
  const d = addZero(data.getDate());
  const h = addZero(data.getHours());
  const min = addZero(data.getMinutes());
  const s = addZero(data.getSeconds());
  return `${d}/${m}/${y} ${h}:${min}:${s}`;
};

export const dateisobr = (): string => {
  const date = new Date();
  const dateBrasil = new Date(date.valueOf() - date.getTimezoneOffset() * 60000);
  return dateBrasil.toISOString().slice(0, 19);
};

export const onlydate = (date: string | Date): string => {
  const data = new Date(date);
  const year = data.getUTCFullYear();
  const month = String(data.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(data.getUTCDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const addZero = (i: number): string => {
  let res: string;
  if (Number(i) < 10) {
    res = `0${i}`;
    return res;
  }
  res = String(i);
  return res;
};

export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const myIP = (): string => {
  const myAddressArray = networkInterfaces().Ethernet;
  if (myAddressArray !== undefined) {
    const ipv4 = myAddressArray.filter((obj) => obj.family === 'IPv4');
    return ipv4[0].address;
  }
  return '';
};

export const rangeIP = (): string => {
  const myAddressArray = networkInterfaces().Ethernet;
  if (myAddressArray !== undefined) {
    const ipv4 = myAddressArray.filter((obj) => obj.family === 'IPv4');
    const arrRange = ipv4[0].address.split('.');
    return `${arrRange[0]}.${arrRange[1]}.${arrRange[2]}.255`;
  }
  return '';
};

export const sendMail = async (toMessage: MailMessage): Promise<void> => {
  try {
    const port = Number(process.env.MAILPORT);
    const host = String(process.env.MAILHOST);
    const transporter = createTransport({
      host: host,
      port: port,
      //secure: true,
      //logger: false,
      //debug: false,
      auth: {
        user: process.env.MAILUSER,
        pass: process.env.MAILPASS,
      },
    });
    const message = {
      from: process.env.MAILUSER,
      to: toMessage.to,
      subject: toMessage.subject,
      text: toMessage.text,
    };
    await transporter.sendMail(message);
  } catch (error) {
    log.errors.error(error);
  }
};

export const imageToPdf = async (pathOrigin: string, pathDestination: string): Promise<void> => {
  try {
    const mimetype = lookup(resolve(pathOrigin));
    // Create a new PDFDocument
    const pdfDoc = await PDFDocument.create();
    let img;
    // const imagePage = pdfDoc.addPage();
    if (mimetype === 'image/jpeg') {
      img = await pdfDoc.embedJpg(readFileSync(resolve(pathOrigin)));
    } else if (mimetype === 'image/png') {
      img = await pdfDoc.embedPng(readFileSync(resolve(pathOrigin)));
    }
    if (img === undefined) return;

    const imagePage = pdfDoc.addPage([img.width, img.height]);

    imagePage.drawImage(img, {
      x: 0,
      y: 0,
      width: imagePage.getWidth(),
      height: imagePage.getHeight(),
    });

    const pdfBytes = await pdfDoc.save();
    writeFileSync(resolve(pathDestination), pdfBytes);
  } catch (error) {
    log.errors.error(error);
  }
};

export const officeToPdf = async (pathOrigin: string, pathDestination: string): Promise<void> => {
  try {
    const office: any = {};
    office.convertAsync = promisify(libre.convert);
    const inputPath = resolve(pathOrigin);
    const outputPath = resolve(pathDestination);
    // Read file
    const docxBuf = await readFile(inputPath);

    // Convert it to pdf format with undefined filter (see Libreoffice docs about filter)
    const pdfBuf = await office.convertAsync(docxBuf, 'pdf', undefined);

    // Here in done you have pdf file which you can save or transfer in another stream
    await writeFile(outputPath, pdfBuf);
  } catch (error) {
    log.errors.error(error);
  }
};

export const generateCode = (): string => {
  let gerado = '0';
  while (Number(gerado) < 100000) {
    gerado = generate({
      length: 6,
      numbers: true,
      symbols: false,
      lowercase: false,
      uppercase: false,
    });
  }

  return gerado;
};

export const generatePassword = (): string => {
  return generate({
    length: 8,
    numbers: true,
    symbols: true,
    lowercase: true,
    uppercase: true,
    exclude: '\'".,´`°ºª§¨¬',
  });
};

export const parseType = (type: string, value: string): string | number | boolean => {
  switch (type) {
    case 'number':
      return Number(value);
    case 'boolean':
      return value === 'true';
    case 'string':
    default:
      return String(value);
  }
};

export const getVersion = (): string | undefined => {
  return process.env.npm_package_version;
};

export const getRandomInt = (qtd: number): string => {
  return generate({
    length: qtd,
    numbers: true,
    symbols: false,
    lowercase: false,
    uppercase: false,
  });
};

export const generateLicense = async () => {
  const infos = await getHardwareInformation();
  const code = generateCodeKey(infos.hd, infos.mac, infos.uuidHardware, infos.uuidOs);
  const hash = encrypt(code);
  return hash;
};

export const getHardwareInformation = async (): Promise<SerialNumbers> => {
  const diskInfo = await diskLayout();
  const uuidInfo = await uuid();

  const disk = diskInfo.find((disk) => disk.device === '\\\\.\\PHYSICALDRIVE0');
  const hd = disk?.serialNum;
  const mac = uuidInfo.macs[0];
  const uuidOs = uuidInfo.os;
  const uuidHardware = uuidInfo.hardware;
  const serialInfo = {
    hd: `${hd}`,
    mac,
    uuidOs,
    uuidHardware,
  };
  return serialInfo;
};

export const generateCodeKey = (s1: string, s2: string, s3: string, s4: string) => {
  let newcode = '';
  const bigger = Math.max(s1.length, s2.length, s3.length, s4.length);
  for (let index = 0; index < bigger; index++) {
    if (Number(s1[index]) < s1.length) newcode = `${newcode}${s1[index]}`;
    if (Number(s2[index]) < s2.length) newcode = `${newcode}${s2[index]}`;
    if (Number(s3[index]) < s3.length) newcode = `${newcode}${s3[index]}`;
    if (Number(s4[index]) < s4.length) newcode = `${newcode}${s4[index]}`;
  }
  return `${newcode.replace(/\s/g, '')}${codglobal}`;
};

export const saveLicense = async (hash: HashKey) => {
  const register = JSON.stringify(hash);
  // writeFileSync(filedirLicense, register);
  await writeFile(filedirLicense, register);
};

export const readLicense = async () => {
  if (existsSync(resolve(filedirLicense))) {
    const license = readFileSync(resolve(filedirLicense), 'utf8');
    return await validKeyLicense(JSON.parse(license));
  } else {
    const lic = await generateLicense();

    const data = {
      lic,
      key: encrypt(keyfix),
      client: process.env.CLIENT,
      version: getVersion(),
      date: dateisobr(),
    };

    const dataEncrypted = encrypt(JSON.stringify(data));
    // const response = await axios.post('', { license: JSON.stringify(dataEncrypted) });
    const valid = true;
    // if (response.data) {
    if (valid) {
      await saveLicense(lic);
      return await validKeyLicense(lic);
    } else {
      return undefined;
    }
  }
};

export const encrypt = (text: string) => {
  const iv = randomBytes(16);
  const cipher = createCipheriv(algorithm, secretKey, iv);
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

  return {
    iv: iv.toString('hex'),
    content: encrypted.toString('hex'),
  };
};

export const decrypt = (hash: HashKey) => {
  const decipher = createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));
  const decrpyted = Buffer.concat([
    decipher.update(Buffer.from(hash.content, 'hex')),
    decipher.final(),
  ]);
  return decrpyted.toString();
};

export const validKeyLicense = async (key: HashKey) => {
  const codeDecripted = decrypt(key);
  const infos = await getHardwareInformation();
  const code = generateCodeKey(infos.hd, infos.mac, infos.uuidHardware, infos.uuidOs);
  return code === codeDecripted;
};
