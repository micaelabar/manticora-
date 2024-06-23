import { Injectable } from '@nestjs/common';
import { CreateManticoraDto } from './dto/create-manticora.dto';
import { UpdateManticoraDto } from './dto/update-manticora.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ManticorasService {
  constructor(private prisma: PrismaService) {}
  create(createManticoraDto: CreateManticoraDto) {
    return 'This action adds a new manticora';
  }

  findAllAlive() {
    return this.prisma.manticora.findMany({
      where: {extinct: false}
    });
  }


  findAllExtinct() {
    return this.prisma.manticora.findMany({
      where: {extinct: true}
    });
  }


  findOne(id: number) {
    return this.prisma.manticora.findUnique({
      where: { id }
    });
  }
  

  update(id: number, updateManticoraDto: UpdateManticoraDto) {
    return this.prisma.manticora.update({
      where: { id },
      data: updateManticoraDto,
    });
  }

  remove(id: number) {
    return this.prisma.manticora.delete({
      where: { id },
    });
  }
}
