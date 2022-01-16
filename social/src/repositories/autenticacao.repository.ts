import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {SocialDataSource} from '../datasources';
import {Autenticacao, AutenticacaoRelations} from '../models';

export class AutenticacaoRepository extends DefaultCrudRepository<
  Autenticacao,
  typeof Autenticacao.prototype.id,
  AutenticacaoRelations
> {
  constructor(
    @inject('datasources.social') dataSource: SocialDataSource,
  ) {
    super(Autenticacao, dataSource);
  }
}
