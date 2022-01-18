import {Entity, model, property} from '@loopback/repository';

@model()
export class Emprego extends Entity {
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
  funcao: string;

  @property({
    type: 'string',
    required: true,
  })
  contrato: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;

  @property({
    type: 'string',
    required: true,
  })
  empresa: string;

  @property({
    type: 'string',
    required: true,
  })
  contacto: string;


  constructor(data?: Partial<Emprego>) {
    super(data);
  }
}

export interface EmpregoRelations {
  // describe navigational properties here
}

export type EmpregoWithRelations = Emprego & EmpregoRelations;
