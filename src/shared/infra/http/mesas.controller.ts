import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UseGuards,
} from "@nestjs/common";
import {
  AtualizaMesaUseCase,
  CreateMesa,
  DeleteMesa,
  ListaMesasUseCase,
} from "src/modules/mesas/use-case";
import { ApiKeyGuard } from "src/shared/guards/api-key.guard";
import { AtualizaMesaDto } from "./dto/atualiza-mesa.dto";
import { CreateMesaDto } from "./dto/create-mesa.dto";

@Controller("mesa")
@UseGuards(ApiKeyGuard)
export class MesasController {
  constructor(
    private readonly listaMesasUseCase: ListaMesasUseCase,
    private readonly createMesaUseCase: CreateMesa,
    private readonly deleteMesaUseCase: DeleteMesa,
    private readonly atualizaMesaUseCase: AtualizaMesaUseCase
  ) {}

  @Get("/")
  @HttpCode(200)
  public async listMesas() {
    const result = await this.listaMesasUseCase.execute();

    return result;
  }

  @Post("/")
  @HttpCode(201)
  public async createMesa(@Body() { nome }: CreateMesaDto) {
    const result = await this.createMesaUseCase.execute(nome);

    return result;
  }

  @Put("/")
  @HttpCode(201)
  public async atualizaMesa(@Body() body: AtualizaMesaDto) {
    const result = await this.atualizaMesaUseCase.execute(body);

    return result;
  }

  @Delete("/:id")
  @HttpCode(200)
  public async deleteMesa(@Param() { id }: { id: number }) {
    const result = await this.deleteMesaUseCase.execute(id);

    return result;
  }
}
