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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_prisma_1 = require("nestjs-prisma");
let AppService = class AppService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    getHello() {
        return 'Hello World!';
    }
    getSampleMessage() {
        return {
            text: "Sample message",
            actions: [
                {
                    text: "Sample action",
                    ref: "/about"
                },
                {
                    text: "Different action",
                    ref: "#"
                }
            ]
        };
    }
    getMessage(email) {
        let out;
        if (true) {
            if (true) {
                let rooms = "";
                let employees = "";
                out.text = `Your assignment today is to rooms ${rooms}, with ${employees}.`;
                out.actions = [];
            }
            else if (true) {
                let datestring = "";
                out.text = `You have nothing scheduled for today.\nYour next assignment is for ${datestring}.`;
                out.actions = [];
            }
            else {
                out.text = "You have nothing scheduled for today.";
                out.actions = [];
            }
        }
        else if (true) {
            if (true) {
                if (true) {
                    out.text = `All groups have been assigned for today.`;
                    out.actions = [];
                }
                else {
                    let amount = 0;
                    out.text = `${amount} groups are still unassigned for today!`;
                    out.actions = [];
                }
            }
            else if (true) {
                let date = "";
                if (true) {
                    out.text = `The next round of podium checks is scheduled for ${date}. All groups have been assigned.`;
                    out.actions = [];
                }
                else {
                    out.text = `The next round of podium checks is scheduled for ${date}. Some groups still need to be assigned.`;
                    out.actions = [];
                }
            }
            else {
                out.text = `There are no scheduled podium checks.`;
                out.actions = [];
            }
        }
        return out;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_prisma_1.PrismaService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map