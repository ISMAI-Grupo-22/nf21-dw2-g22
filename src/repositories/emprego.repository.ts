import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {SocialDataSource} from '../datasources';
import {Emprego, EmpregoRelations} from '../models';

export class EmpregoRepository extends DefaultCrudRepository<
  Emprego,
  typeof Emprego.prototype.id,
  EmpregoRelations
> {
  constructor(
    @inject('datasources.social') dataSource: SocialDataSource,
  ) {
    super(Emprego, dataSource);
  }
}
