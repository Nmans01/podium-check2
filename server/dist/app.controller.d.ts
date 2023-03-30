import { AppService } from './app.service';
import { MessageDto } from './dtos/message';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getUsers(): any;
    getMessage(): MessageDto;
}
