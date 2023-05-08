import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class UserService {
    constructor(
        private prisma: PrismaService
    ) { }

    findMany(): any {
        return this.prisma.user.findMany();
    }

    findOneByEmail(email: string) {
        return this.prisma.user.findFirst({
            where: {
                email
            }
        });
    }

    findOneByID(id: number) {
        return this.prisma.user.findFirst({
            where: {
                id
            }
        });
    }
}
