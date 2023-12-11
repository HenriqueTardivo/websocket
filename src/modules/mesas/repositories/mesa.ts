export abstract class MesaRepository {
  abstract create(mesa: Omit<Mesa, "id_mesa">): Promise<Mesa>;
  abstract delete(id: number): Promise<boolean>;
  abstract list(query?: Partial<Mesa>): Promise<Mesa[]>;
}
