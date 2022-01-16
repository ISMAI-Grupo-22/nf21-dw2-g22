import { DefaultCrudRepository } from '@loopback/repository';
import { SocialDataSource } from '../datasources';
import { Autenticacao, AutenticacaoRelations } from '../models';
export declare class AutenticacaoRepository extends DefaultCrudRepository<Autenticacao, typeof Autenticacao.prototype.id, AutenticacaoRelations> {
    constructor(dataSource: SocialDataSource);
}
