import { DefaultCrudRepository } from '@loopback/repository';
import { SocialDataSource } from '../datasources';
import { Emprego, EmpregoRelations } from '../models';
export declare class EmpregoRepository extends DefaultCrudRepository<Emprego, typeof Emprego.prototype.id, EmpregoRelations> {
    constructor(dataSource: SocialDataSource);
}
