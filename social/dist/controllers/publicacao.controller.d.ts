import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Publicacao } from '../models';
import { PublicacaoRepository } from '../repositories';
export declare class PublicacaoController {
    publicacaoRepository: PublicacaoRepository;
    constructor(publicacaoRepository: PublicacaoRepository);
    create(publicacao: Omit<Publicacao, 'id'>): Promise<Publicacao>;
    count(where?: Where<Publicacao>): Promise<Count>;
    find(filter?: Filter<Publicacao>): Promise<Publicacao[]>;
    updateAll(publicacao: Publicacao, where?: Where<Publicacao>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Publicacao>): Promise<Publicacao>;
    updateById(id: number, publicacao: Publicacao): Promise<void>;
    replaceById(id: number, publicacao: Publicacao): Promise<void>;
    deleteById(id: number): Promise<void>;
}
