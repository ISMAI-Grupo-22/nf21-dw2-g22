import { Entity } from '@loopback/repository';
export declare class Autenticacao extends Entity {
    id?: number;
    email: string;
    senha: string;
    constructor(data?: Partial<Autenticacao>);
}
export interface AutenticacaoRelations {
}
export declare type AutenticacaoWithRelations = Autenticacao & AutenticacaoRelations;
