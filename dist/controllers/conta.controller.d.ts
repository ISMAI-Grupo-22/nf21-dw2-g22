import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Conta } from '../models';
import { ContaRepository } from '../repositories';
export declare class ContaController {
    contaRepository: ContaRepository;
    constructor(contaRepository: ContaRepository);
    create(conta: Omit<Conta, 'id'>): Promise<Conta>;
    count(where?: Where<Conta>): Promise<Count>;
    find(filter?: Filter<Conta>): Promise<Conta[]>;
    updateAll(conta: Conta, where?: Where<Conta>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Conta>): Promise<Conta>;
    updateById(id: number, conta: Conta): Promise<void>;
    replaceById(id: number, conta: Conta): Promise<void>;
    deleteById(id: number): Promise<void>;
}
