import { DefaultCrudRepository } from '@loopback/repository';
import { SocialDataSource } from '../datasources';
import { Publicacao, PublicacaoRelations } from '../models';
export declare class PublicacaoRepository extends DefaultCrudRepository<Publicacao, typeof Publicacao.prototype.id, PublicacaoRelations> {
    constructor(dataSource: SocialDataSource);
}
