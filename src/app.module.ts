import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ManticorasModule } from './manticoras/manticoras.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ManticorasModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
