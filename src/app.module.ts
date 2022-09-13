import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileModule } from './file/file.module';
import { MulterModule } from '@nestjs/platform-express/multer';
import { TMP_FOLDER } from './utils/Const';

@Module({
  imports: [FileModule, MulterModule.register({ dest: TMP_FOLDER })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
