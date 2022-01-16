import { DefaultCrudRepository } from '@loopback/repository';
import { SocialDataSource } from '../datasources';
import { Venda, VendaRelations } from '../models';
export declare class VendaRepository extends DefaultCrudRepository<Venda, typeof Venda.prototype.id, VendaRelations> {
    constructor(dataSource: SocialDataSource);
}
