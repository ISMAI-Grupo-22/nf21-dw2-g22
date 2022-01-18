"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let VendaController = class VendaController {
    constructor(vendaRepository) {
        this.vendaRepository = vendaRepository;
    }
    async create(venda) {
        return this.vendaRepository.create(venda);
    }
    async count(where) {
        return this.vendaRepository.count(where);
    }
    async find(filter) {
        return this.vendaRepository.find(filter);
    }
    async updateAll(venda, where) {
        return this.vendaRepository.updateAll(venda, where);
    }
    async findById(id, filter) {
        return this.vendaRepository.findById(id, filter);
    }
    async updateById(id, venda) {
        await this.vendaRepository.updateById(id, venda);
    }
    async replaceById(id, venda) {
        await this.vendaRepository.replaceById(id, venda);
    }
    async deleteById(id) {
        await this.vendaRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/vendas'),
    (0, rest_1.response)(200, {
        description: 'Venda model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Venda) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Venda, {
                    title: 'NewVenda',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VendaController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/vendas/count'),
    (0, rest_1.response)(200, {
        description: 'Venda model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Venda)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VendaController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/vendas'),
    (0, rest_1.response)(200, {
        description: 'Array of Venda model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Venda, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Venda)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VendaController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/vendas'),
    (0, rest_1.response)(200, {
        description: 'Venda PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Venda, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Venda)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Venda, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VendaController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/vendas/{id}'),
    (0, rest_1.response)(200, {
        description: 'Venda model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Venda, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Venda, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VendaController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/vendas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Venda PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Venda, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Venda]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VendaController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/vendas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Venda PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Venda]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VendaController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/vendas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Venda DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VendaController.prototype, "deleteById", null);
VendaController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.VendaRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.VendaRepository])
], VendaController);
exports.VendaController = VendaController;
//# sourceMappingURL=venda.controller.js.map