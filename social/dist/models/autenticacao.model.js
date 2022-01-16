"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autenticacao = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Autenticacao = class Autenticacao extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Autenticacao.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Autenticacao.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Autenticacao.prototype, "senha", void 0);
Autenticacao = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Autenticacao);
exports.Autenticacao = Autenticacao;
//# sourceMappingURL=autenticacao.model.js.map