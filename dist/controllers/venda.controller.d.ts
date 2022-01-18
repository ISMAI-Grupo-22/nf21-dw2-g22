import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Venda } from '../models';
import { VendaRepository } from '../repositories';
export declare class VendaController {
    vendaRepository: VendaRepository;
    constructor(vendaRepository: VendaRepository);
    create(venda: Omit<Venda, 'id'>): Promise<Venda>;
    count(where?: Where<Venda>): Promise<Count>;
    find(filter?: Filter<Venda>): Promise<Venda[]>;
    updateAll(venda: Venda, where?: Where<Venda>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Venda>): Promise<Venda>;
    updateById(id: number, venda: Venda): Promise<void>;
    replaceById(id: number, venda: Venda): Promise<void>;
    deleteById(id: number): Promise<void>;
}
