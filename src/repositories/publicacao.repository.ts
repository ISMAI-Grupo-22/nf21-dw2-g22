import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {SocialDataSource} from '../datasources';
import {Publicacao, PublicacaoRelations} from '../models';

export class PublicacaoRepository extends DefaultCrudRepository<
  Publicacao,
  typeof Publicacao.prototype.id,
  PublicacaoRelations
> {
  constructor(
    @inject('datasources.social') dataSource: SocialDataSource,
  ) {
    super(Publicacao, dataSource);
  }
}
