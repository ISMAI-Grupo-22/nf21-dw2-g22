import { Entity } from '@loopback/repository';
export declare class Publicacao extends Entity {
    nome: string;
    id?: number;
    descricao: string;
    constructor(data?: Partial<Publicacao>);
}
export interface PublicacaoRelations {
}
export declare type PublicacaoWithRelations = Publicacao & PublicacaoRelations;
