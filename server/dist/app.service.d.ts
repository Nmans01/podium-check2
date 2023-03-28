import { PrismaService } from 'nestjs-prisma';
export declare class AppService {
    private prisma;
    constructor(prisma: PrismaService);
    getUsers(): any;
    getHello(): string;
}
