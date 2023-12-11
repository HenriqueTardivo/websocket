export abstract class AtualizaMesaRepository {
  abstract atualiza(
    atualizacao: Omit<AtualizaMesa, "id_atualizacao_mesa">
  ): Promise<AtualizaMesa>;
}
