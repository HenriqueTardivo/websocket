import { Test, TestingModule } from '@nestjs/testing';
import { MesasGateway } from './mesas.gateway';

describe('MesasGateway', () => {
  let gateway: MesasGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MesasGateway],
    }).compile();

    gateway = module.get<MesasGateway>(MesasGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
