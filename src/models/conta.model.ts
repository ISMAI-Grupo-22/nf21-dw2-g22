import {Entity, model, property} from '@loopback/repository';

@model()
export class Conta extends Entity {
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
  nome: string;

  @property({
    type: 'string',
    required: true,
  })
  genero: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  senha: string;


  constructor(data?: Partial<Conta>) {
    super(data);
  }
}

export interface ContaRelations {
  // describe navigational properties here
}

export type ContaWithRelations = Conta & ContaRelations;
