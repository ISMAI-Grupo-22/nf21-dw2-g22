import {Entity, model, property} from '@loopback/repository';

@model()
export class Autenticacao extends Entity {
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
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  senha: string;


  constructor(data?: Partial<Autenticacao>) {
    super(data);
  }
}

export interface AutenticacaoRelations {
  // describe navigational properties here
}

export type AutenticacaoWithRelations = Autenticacao & AutenticacaoRelations;
