import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  getUsers(): any {
    return this.prisma.user.findMany();
  }
  getHello(): string {
    return 'Hello World!';
  }
}
