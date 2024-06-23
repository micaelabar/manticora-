import { PartialType } from '@nestjs/mapped-types';
import { CreateManticoraDto } from './create-manticora.dto';

export class UpdateManticoraDto extends PartialType(CreateManticoraDto) {}
