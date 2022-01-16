import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {SocialDataSource} from '../datasources';
import {Venda, VendaRelations} from '../models';

export class VendaRepository extends DefaultCrudRepository<
  Venda,
  typeof Venda.prototype.id,
  VendaRelations
> {
  constructor(
    @inject('datasources.social') dataSource: SocialDataSource,
  ) {
    super(Venda, dataSource);
  }
}
