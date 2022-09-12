import { Controller, Get } from '@nestjs/common';
import { FileService } from './file.service';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Get()
  find(): string {
    return this.fileService.find();
  }
}
