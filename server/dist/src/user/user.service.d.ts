import { PrismaService } from 'nestjs-prisma';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    findMany(): any;
    findOneByEmail(email: string): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User, never>;
    findOneByID(id: number): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User, never>;
}
