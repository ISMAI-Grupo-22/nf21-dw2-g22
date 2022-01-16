import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Autenticacao } from '../models';
import { AutenticacaoRepository } from '../repositories';
export declare class AutenticacaoController {
    autenticacaoRepository: AutenticacaoRepository;
    constructor(autenticacaoRepository: AutenticacaoRepository);
    create(autenticacao: Omit<Autenticacao, 'id'>): Promise<Autenticacao>;
    count(where?: Where<Autenticacao>): Promise<Count>;
    find(filter?: Filter<Autenticacao>): Promise<Autenticacao[]>;
    updateAll(autenticacao: Autenticacao, where?: Where<Autenticacao>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Autenticacao>): Promise<Autenticacao>;
    updateById(id: number, autenticacao: Autenticacao): Promise<void>;
    replaceById(id: number, autenticacao: Autenticacao): Promise<void>;
    deleteById(id: number): Promise<void>;
}
