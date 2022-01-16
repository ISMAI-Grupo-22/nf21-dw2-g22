"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ContaController = class ContaController {
    constructor(contaRepository) {
        this.contaRepository = contaRepository;
    }
    async create(conta) {
        return this.contaRepository.create(conta);
    }
    async find(filter) {
        return this.contaRepository.find(filter);
    }
    async updateAll(conta, where) {
        return this.contaRepository.updateAll(conta, where);
    }
    async findById(id, filter) {
        return this.contaRepository.findById(id, filter);
    }
    async updateById(id, conta) {
        await this.contaRepository.updateById(id, conta);
    }
    async replaceById(id, conta) {
        await this.contaRepository.replaceById(id, conta);
    }
    async deleteById(id) {
        await this.contaRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/contas'),
    (0, rest_1.response)(200, {
        description: 'Conta model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Conta) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Conta, {
                    title: 'NewConta',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ContaController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/contas'),
    (0, rest_1.response)(200, {
        description: 'Array of Conta model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Conta, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Conta)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ContaController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/contas'),
    (0, rest_1.response)(200, {
        description: 'Conta PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Conta, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Conta)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Conta, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ContaController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/contas/{id}'),
    (0, rest_1.response)(200, {
        description: 'Conta model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Conta, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Conta, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ContaController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/contas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Conta PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Conta, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Conta]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ContaController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/contas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Conta PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Conta]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ContaController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/contas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Conta DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ContaController.prototype, "deleteById", null);
ContaController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.ContaRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.ContaRepository])
], ContaController);
exports.ContaController = ContaController;
//# sourceMappingURL=conta.controller.js.map