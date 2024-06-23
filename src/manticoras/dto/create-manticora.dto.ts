import { ApiProperty } from '@nestjs/swagger';

export class CreateManticoraDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false})
  description?: string;

  @ApiProperty()
  lastSee: string;

  @ApiProperty()
  countLastSee: number;

  @ApiProperty({ default: false})
  extinct: boolean;
}
