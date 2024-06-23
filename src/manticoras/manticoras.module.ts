import { Module } from '@nestjs/common';
import { ManticorasService } from './manticoras.service';
import { ManticorasController } from './manticoras.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ManticorasController],
  providers: [ManticorasService],
  imports: [PrismaModule],

})
export class ManticorasModule {}
