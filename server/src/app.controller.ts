import { Controller, Get, Param, ParseIntPipe, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageDto } from './dtos/message';
import { UserService } from './user/user.service';
import { GetCurrentUserId } from './common/decorators';

@Controller('api')
export class AppController {
  constructor(
    private appService: AppService,
    private userService: UserService
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Return message based on user and user's context
  @Get('message')
  getMessage(@GetCurrentUserId() userId: number): Promise<MessageDto> {
    return this.appService.getMessage(userId);
  }

  // Return list of rooms that user is assigned to for the day (forms they need to complete/ have already completed)
  @Get('forms')
  getForms(@GetCurrentUserId() userId: number): any {
    return this.appService.getForms(userId);
  }

  // For room of given ID, return list of attributes, as well as list of projectors
  // This will be used to populate the form
  @Get('forms/:id')
  getFormByID(@Param('id') roomName: string): any {
    return this.appService.getFormByID(roomName);
  }

  // For room of given ID, receive lamp hours for projectors and mark room as completed
  @Post('forms/:id')
  postForm(): any {
    return this.appService.getHello();
  }

  // For assignments of given date, return room group, along with employees that have been assigned to each room group
  @Get('assignments/:date')
  getAssignmentsByDate(): any {
    return this.appService.getHello();
  }

  // For assignments of given date, receive list of newly assigned employees for each room group
  @Post('assignments/:date')
  postAssignmentsByDate(): any {
    return this.appService.getHello();
  }

  // Return lamp hour entries
  @Get('insights')
  getInsights(): any {
    return this.appService.getHello();
  }
}   