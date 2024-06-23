import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ManticorasService } from './manticoras.service';
import { CreateManticoraDto } from './dto/create-manticora.dto';
import { UpdateManticoraDto } from './dto/update-manticora.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('manticoras')
@ApiTags('manticoras')
export class ManticorasController {
  constructor(private readonly manticorasService: ManticorasService) {}

  @Post()
  create(@Body() createManticoraDto: CreateManticoraDto) {
    return this.manticorasService.create(createManticoraDto);
  }

  @Get()
  findAll() {
    return this.manticorasService.findAllAlive();
  }

  @Get('extinct')
findAllExtinct() {
  return this.manticorasService.findAllExtinct();
}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.manticorasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateManticoraDto: UpdateManticoraDto) {
    return this.manticorasService.update(+id, updateManticoraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.manticorasService.remove(+id);
  }
}
