import { Test, TestingModule } from '@nestjs/testing';
import { ManticorasService } from './manticoras.service';

describe('ManticorasService', () => {
  let service: ManticorasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManticorasService],
    }).compile();

    service = module.get<ManticorasService>(ManticorasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
