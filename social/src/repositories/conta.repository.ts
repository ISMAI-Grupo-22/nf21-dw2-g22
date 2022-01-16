import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {SocialDataSource} from '../datasources';
import {Conta, ContaRelations} from '../models';

export class ContaRepository extends DefaultCrudRepository<
  Conta,
  typeof Conta.prototype.id,
  ContaRelations
> {
  constructor(
    @inject('datasources.social') dataSource: SocialDataSource,
  ) {
    super(Conta, dataSource);
  }
}
