import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Emprego } from '../models';
import { EmpregoRepository } from '../repositories';
export declare class EmpregoController {
    empregoRepository: EmpregoRepository;
    constructor(empregoRepository: EmpregoRepository);
    create(emprego: Omit<Emprego, 'id'>): Promise<Emprego>;
    count(where?: Where<Emprego>): Promise<Count>;
    find(filter?: Filter<Emprego>): Promise<Emprego[]>;
    updateAll(emprego: Emprego, where?: Where<Emprego>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Emprego>): Promise<Emprego>;
    updateById(id: number, emprego: Emprego): Promise<void>;
    replaceById(id: number, emprego: Emprego): Promise<void>;
    deleteById(id: number): Promise<void>;
}
