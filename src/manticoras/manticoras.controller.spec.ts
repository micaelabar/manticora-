import { Test, TestingModule } from '@nestjs/testing';
import { ManticorasController } from './manticoras.controller';
import { ManticorasService } from './manticoras.service';

describe('ManticorasController', () => {
  let controller: ManticorasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManticorasController],
      providers: [ManticorasService],
    }).compile();

    controller = module.get<ManticorasController>(ManticorasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
