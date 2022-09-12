import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  welcomeToCinafFile(): string {
    return 'Cinaf file!';
  }
}
