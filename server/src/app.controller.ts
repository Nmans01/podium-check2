import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageDto } from './dtos/message';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  getUsers(): any {
    return this.appService.getUsers();
  }

  @Get('message')
  getMessage(): MessageDto {
    return this.appService.getRandomMessage();
  }
}   