import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(
        private userService: UserService
    ) { }

    @Get()
    findMany(): any {
        return this.userService.findMany();
    }

    @Get(':id')
    findOneByID(): any {
        return this.userService.findOneByID(0);
    }
}
