"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutenticacaoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AutenticacaoController = class AutenticacaoController {
    constructor(autenticacaoRepository) {
        this.autenticacaoRepository = autenticacaoRepository;
    }
    async create(autenticacao) {
        return this.autenticacaoRepository.create(autenticacao);
    }
    async count(where) {
        return this.autenticacaoRepository.count(where);
    }
    async find(filter) {
        return this.autenticacaoRepository.find(filter);
    }
    async updateAll(autenticacao, where) {
        return this.autenticacaoRepository.updateAll(autenticacao, where);
    }
    async findById(id, filter) {
        return this.autenticacaoRepository.findById(id, filter);
    }
    async updateById(id, autenticacao) {
        await this.autenticacaoRepository.updateById(id, autenticacao);
    }
    async replaceById(id, autenticacao) {
        await this.autenticacaoRepository.replaceById(id, autenticacao);
    }
    async deleteById(id) {
        await this.autenticacaoRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/autenticacaos'),
    (0, rest_1.response)(200, {
        description: 'Autenticacao model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Autenticacao) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Autenticacao, {
                    title: 'NewAutenticacao',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AutenticacaoController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/autenticacaos/count'),
    (0, rest_1.response)(200, {
        description: 'Autenticacao model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Autenticacao)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AutenticacaoController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/autenticacaos'),
    (0, rest_1.response)(200, {
        description: 'Array of Autenticacao model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Autenticacao, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Autenticacao)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AutenticacaoController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/autenticacaos'),
    (0, rest_1.response)(200, {
        description: 'Autenticacao PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Autenticacao, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Autenticacao)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Autenticacao, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AutenticacaoController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/autenticacaos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Autenticacao model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Autenticacao, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Autenticacao, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AutenticacaoController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/autenticacaos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Autenticacao PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Autenticacao, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Autenticacao]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AutenticacaoController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/autenticacaos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Autenticacao PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Autenticacao]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AutenticacaoController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/autenticacaos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Autenticacao DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AutenticacaoController.prototype, "deleteById", null);
AutenticacaoController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.AutenticacaoRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.AutenticacaoRepository])
], AutenticacaoController);
exports.AutenticacaoController = AutenticacaoController;
//# sourceMappingURL=autenticacao.controller.js.map