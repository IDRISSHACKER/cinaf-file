export default interface FileInterface {
  path: string;
}

export interface ResponseFileInterface {
  status: number;
  message: string;
  infos: Express.Multer.File;
}
