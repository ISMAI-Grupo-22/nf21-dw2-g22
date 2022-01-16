import {Entity, model, property} from '@loopback/repository';

@model()
export class Venda extends Entity {
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
  artigo: string;

  @property({
    type: 'number',
    required: true,
  })
  quantidade: number;

  @property({
    type: 'number',
    required: true,
  })
  valor: number;

  @property({
    type: 'number',
    required: true,
  })
  contacto: number;


  constructor(data?: Partial<Venda>) {
    super(data);
  }
}

export interface VendaRelations {
  // describe navigational properties here
}

export type VendaWithRelations = Venda & VendaRelations;
