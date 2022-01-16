"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let VendaRepository = class VendaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.Venda, dataSource);
    }
};
VendaRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.social')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.SocialDataSource])
], VendaRepository);
exports.VendaRepository = VendaRepository;
//# sourceMappingURL=venda.repository.js.map