import { Entity } from '@loopback/repository';
export declare class Venda extends Entity {
    id?: number;
    artigo: string;
    quantidade: number;
    valor: number;
    contacto: number;
    constructor(data?: Partial<Venda>);
}
export interface VendaRelations {
}
export declare type VendaWithRelations = Venda & VendaRelations;
