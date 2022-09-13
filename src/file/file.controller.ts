import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { IDENTIFIER_SUFIX, UPLOAD_FOLDER } from 'src/utils/Const';
import { FileService } from './file.service';
import { v4 as uuidv4 } from 'uuid';
import { ResponseFileInterface } from 'src/Interfaces/file.interface';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Get()
  handleGetFile(): string {
    return this.fileService.findFile();
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: UPLOAD_FOLDER,

        filename(req, file, callback) {
          const UNIQUE_ID = uuidv4();
          const UNIQUE_SUFIX = `${Date.now()}-${Math.round(
            Math.random() * 1e9,
          )}`;
          const EXTENSION = extname(file.originalname);
          const FILE_NAME = `${IDENTIFIER_SUFIX}-${
            file.originalname.split('.')[0]
          }-${UNIQUE_ID}-${UNIQUE_SUFIX}${EXTENSION}`;
          callback(null, FILE_NAME);
        },
      }),
    }),
  )
  handleUploadFile(
    @UploadedFile() file: Express.Multer.File,
  ): ResponseFileInterface {
    return this.fileService.setFile(file);
  }
}
