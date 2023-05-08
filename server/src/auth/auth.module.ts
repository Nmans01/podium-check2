import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AtStrategy, RtStrategy } from './strategies';
import { PrismaService } from 'nestjs-prisma';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthController],
  providers: [
    AuthService, 
    PrismaService,
    AtStrategy, 
    RtStrategy
  ],
})
export class AuthModule {}
