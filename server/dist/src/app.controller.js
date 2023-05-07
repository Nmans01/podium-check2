"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const message_1 = require("./dtos/message");
(0, common_1.Controller)('api');
class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    getUsers() {
        return this.appService.getUsers();
    }
    getMessage() {
        return this.appService.getRandomMessage();
    }
    getForms() {
        return this.appService.getHello();
    }
    getFormByID() {
        return this.appService.getHello();
    }
    postForm() {
        return this.appService.getHello();
    }
    getAssignmentsByDate() {
        return this.appService.getHello();
    }
    postAssignmentsByDate() {
        return this.appService.getHello();
    }
    getInsights() {
        return this.appService.getHello();
    }
}
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)('message'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", message_1.MessageDto)
], AppController.prototype, "getMessage", null);
__decorate([
    (0, common_1.Get)('forms'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "getForms", null);
__decorate([
    (0, common_1.Get)('forms/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "getFormByID", null);
__decorate([
    (0, common_1.Post)('forms/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "postForm", null);
__decorate([
    (0, common_1.Get)('assignments/:date'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "getAssignmentsByDate", null);
__decorate([
    (0, common_1.Post)('assignments/:date'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "postAssignmentsByDate", null);
__decorate([
    (0, common_1.Get)('insights'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "getInsights", null);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map