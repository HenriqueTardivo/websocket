type Mesa = { id_mesa: number; nome: string; criadaEm: Date };

type AtualizaMesa = {
  id_atualizacao_mesa: number;
  id_mesa: number;
  cor: string;
  texto: string;
  atualizadaEm: Date;
};
