import { Entity } from '@loopback/repository';
export declare class Emprego extends Entity {
    id?: number;
    funcao: string;
    contrato: string;
    tipo: string;
    empresa: string;
    contacto: string;
    constructor(data?: Partial<Emprego>);
}
export interface EmpregoRelations {
}
export declare type EmpregoWithRelations = Emprego & EmpregoRelations;
