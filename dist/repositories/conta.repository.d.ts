import { DefaultCrudRepository } from '@loopback/repository';
import { SocialDataSource } from '../datasources';
import { Conta, ContaRelations } from '../models';
export declare class ContaRepository extends DefaultCrudRepository<Conta, typeof Conta.prototype.id, ContaRelations> {
    constructor(dataSource: SocialDataSource);
}
