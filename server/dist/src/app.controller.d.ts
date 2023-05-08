import { AppService } from './app.service';
import { MessageDto } from './dtos/message';
import { UserService } from './user/user.service';
export declare class AppController {
    private appService;
    private userService;
    constructor(appService: AppService, userService: UserService);
    getHello(): string;
    getMessage(req: Request): MessageDto;
    getForms(): any;
    getFormByID(): any;
    postForm(): any;
    getAssignmentsByDate(): any;
    postAssignmentsByDate(): any;
    getInsights(): any;
}
