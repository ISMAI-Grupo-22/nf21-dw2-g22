"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicacaoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PublicacaoController = class PublicacaoController {
    constructor(publicacaoRepository) {
        this.publicacaoRepository = publicacaoRepository;
    }
    async create(publicacao) {
        return this.publicacaoRepository.create(publicacao);
    }
    async count(where) {
        return this.publicacaoRepository.count(where);
    }
    async find(filter) {
        return this.publicacaoRepository.find(filter);
    }
    async updateAll(publicacao, where) {
        return this.publicacaoRepository.updateAll(publicacao, where);
    }
    async findById(id, filter) {
        return this.publicacaoRepository.findById(id, filter);
    }
    async updateById(id, publicacao) {
        await this.publicacaoRepository.updateById(id, publicacao);
    }
    async replaceById(id, publicacao) {
        await this.publicacaoRepository.replaceById(id, publicacao);
    }
    async deleteById(id) {
        await this.publicacaoRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/publicacaos'),
    (0, rest_1.response)(200, {
        description: 'Publicacao model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Publicacao) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Publicacao, {
                    title: 'NewPublicacao',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PublicacaoController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/publicacaos/count'),
    (0, rest_1.response)(200, {
        description: 'Publicacao model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Publicacao)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PublicacaoController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/publicacaos'),
    (0, rest_1.response)(200, {
        description: 'Array of Publicacao model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Publicacao, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Publicacao)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PublicacaoController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/publicacaos'),
    (0, rest_1.response)(200, {
        description: 'Publicacao PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Publicacao, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Publicacao)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Publicacao, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PublicacaoController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/publicacaos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Publicacao model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Publicacao, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Publicacao, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PublicacaoController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/publicacaos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Publicacao PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Publicacao, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Publicacao]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PublicacaoController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/publicacaos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Publicacao PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Publicacao]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PublicacaoController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/publicacaos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Publicacao DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PublicacaoController.prototype, "deleteById", null);
PublicacaoController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.PublicacaoRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.PublicacaoRepository])
], PublicacaoController);
exports.PublicacaoController = PublicacaoController;
//# sourceMappingURL=publicacao.controller.js.map