import { PrismaService } from 'nestjs-prisma';
import { MessageDto } from './dtos/message';
export declare class AppService {
    private prisma;
    constructor(prisma: PrismaService);
    getUsers(): any;
    getHello(): string;
    getRandomMessage(): MessageDto;
    getMessage(): MessageDto;
}
