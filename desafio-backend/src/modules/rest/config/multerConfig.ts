import multer from 'multer';
import { extname, resolve } from 'path';
import { Request } from 'express';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export const iconConfig = {
  fileFilter: (req: Request, file: any, cb: any) => {
    if (
      file.mimetype !== 'image/png' &&
      file.mimetype !== 'image/jpeg' &&
      file.mimetype !== 'image/jpg'
    ) {
      return cb(new multer.MulterError('LIMIT_UNEXPECTED_FILE', 'Arquivo precisa ser PNG ou JPG'));
    }
    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(`${String(process.env.IMAGEUSERSICON)}icon/`));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
