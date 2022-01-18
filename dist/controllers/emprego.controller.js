"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpregoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EmpregoController = class EmpregoController {
    constructor(empregoRepository) {
        this.empregoRepository = empregoRepository;
    }
    async create(emprego) {
        return this.empregoRepository.create(emprego);
    }
    async count(where) {
        return this.empregoRepository.count(where);
    }
    async find(filter) {
        return this.empregoRepository.find(filter);
    }
    async updateAll(emprego, where) {
        return this.empregoRepository.updateAll(emprego, where);
    }
    async findById(id, filter) {
        return this.empregoRepository.findById(id, filter);
    }
    async updateById(id, emprego) {
        await this.empregoRepository.updateById(id, emprego);
    }
    async replaceById(id, emprego) {
        await this.empregoRepository.replaceById(id, emprego);
    }
    async deleteById(id) {
        await this.empregoRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/empregos'),
    (0, rest_1.response)(200, {
        description: 'Emprego model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Emprego) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Emprego, {
                    title: 'NewEmprego',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpregoController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/empregos/count'),
    (0, rest_1.response)(200, {
        description: 'Emprego model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Emprego)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpregoController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/empregos'),
    (0, rest_1.response)(200, {
        description: 'Array of Emprego model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Emprego, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Emprego)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpregoController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/empregos'),
    (0, rest_1.response)(200, {
        description: 'Emprego PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Emprego, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Emprego)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Emprego, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpregoController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/empregos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Emprego model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Emprego, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Emprego, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpregoController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/empregos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Emprego PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Emprego, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Emprego]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpregoController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/empregos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Emprego PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Emprego]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpregoController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/empregos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Emprego DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpregoController.prototype, "deleteById", null);
EmpregoController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.EmpregoRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.EmpregoRepository])
], EmpregoController);
exports.EmpregoController = EmpregoController;
//# sourceMappingURL=emprego.controller.js.map