import { Entity } from '@loopback/repository';
export declare class Conta extends Entity {
    id?: number;
    nome: string;
    genero: string;
    email: string;
    senha: string;
    constructor(data?: Partial<Conta>);
}
export interface ContaRelations {
}
export declare type ContaWithRelations = Conta & ContaRelations;
