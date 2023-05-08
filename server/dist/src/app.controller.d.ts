import { AppService } from './app.service';
import { MessageDto } from './dtos/message';
import { UserService } from './user/user.service';
export declare class AppController {
    private appService;
    private userService;
    constructor(appService: AppService, userService: UserService);
    getHello(): string;
    getMessage(userId: number): Promise<MessageDto>;
    getForms(userId: number): any;
    getFormByID(roomName: string): any;
    postForm(): any;
    getRoomGroups(): any;
    getUserFirstNames(): any;
    getAssignmentsByDate(): any;
    postAssignmentsByDate(): any;
    getInsights(): any;
}
