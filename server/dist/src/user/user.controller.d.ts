import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findMany(): any;
    findOneByID(): any;
}
