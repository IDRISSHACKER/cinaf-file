import { Injectable } from '@nestjs/common';

@Injectable()
export class FileService {
  find(): string {
    return 'default.jpg';
  }
}
