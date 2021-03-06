"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let ContaRepository = class ContaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.Conta, dataSource);
    }
};
ContaRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.social')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.SocialDataSource])
], ContaRepository);
exports.ContaRepository = ContaRepository;
//# sourceMappingURL=conta.repository.js.map