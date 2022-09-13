import { Injectable } from '@nestjs/common';
import { ResponseFileInterface } from 'src/Interfaces/file.interface';

@Injectable()
export class FileService {
  findFile(): string {
    return 'default.jpg';
  }

  setFile(file: Express.Multer.File): ResponseFileInterface {
    const RESPONSE_MESSAGE = 'File has been uploaded !';
    const RESPONSE_CODE = 201;

    const RESPONSE: ResponseFileInterface = {
      status: RESPONSE_CODE,
      message: RESPONSE_MESSAGE,
      infos: file,
    };

    return RESPONSE;
  }
}
