import {Entity, model, property} from '@loopback/repository';

@model()
export class Publicacao extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  descricao: string;


  constructor(data?: Partial<Publicacao>) {
    super(data);
  }
}

export interface PublicacaoRelations {
  // describe navigational properties here
}

export type PublicacaoWithRelations = Publicacao & PublicacaoRelations;
