import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { MessageDto } from './dtos/message';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) { }

  getUsers(): any {
    return this.prisma.user.findMany();
  }

  getHello(): string {
    return 'Hello World!';
  }

  getRandomMessage(): MessageDto {
    return{
      text:"Sample message",
      actions: [
        {
          text: "Sample action",
          ref: "/about"
        },
        {
          text: "Different action",
          ref: "#"
        }
      ]
    };
  }

  getMessage(): MessageDto {

    /*  Sign in to get started.
        [Sign in]
    
        You have nothing scheduled for today.
        [View past forms]

        You have nothing scheduled for today.
        Your next assignment is for {"{day}"}, {"{date}"}.
        [View past forms]

        Your assignment today is to rooms {"{roomGroup rooms}"}, with {"{other employees}"}.
        [Go to form page]
        [View past forms]

        The next round of podium checks is scheduled for {"{date}"}. Some groups still need to be assigned.
        [Assign groups]
        [View past forms]

        The next round of podium checks is scheduled for {"{date}"}. All groups have been assigned.
        [View groups]
        [View past forms]

        All groups have been assigned for today.
        [View groups]
        [View past forms]

        {"{amount}"} groups are still unassigned for today!
        [Assign groups]
        [View past forms]
    */

    // TODO: get user object from JWT and fill in conditions

    let out: MessageDto;

    if (true) {
      // user is regular employee
      if (true) {
        // user has an assignment today
        let rooms = "";
        let employees = "";

        out.text = `Your assignment today is to rooms ${rooms}, with ${employees}.`;
        out.actions = [];
      } else if (true) {
        // user has an upcoming assignment
        let datestring = "";

        out.text = `You have nothing scheduled for today.\nYour next assignment is for ${datestring}.`;
        out.actions = [];
      } else {
        // user has no upcoming assignment
        out.text = "You have nothing scheduled for today.";
        out.actions = [];
      }
    } else if (true) {
      // user is supervisor/admin
      if (true) {
        // podium checks are scheduled for today
        if (true) {
          // all groups are set
          out.text = `All groups have been assigned for today.`;
          out.actions = [];
        } else {
          // not all groups are set
          let amount = 0;
          out.text = `${amount} groups are still unassigned for today!`;
          out.actions = [];
        }
      } else if (true) {
        // no podium checks today, but podium checks upcoming
        if (true) {
          // all groups are set
          let date = "";
          out.text = `The next round of podium checks is scheduled for ${date}. All groups have been assigned.`;
          out.actions = [];
        } else {
          // not all groups are set
          let date = "";
          out.text = `The next round of podium checks is scheduled for ${date}. Some groups still need to be assigned.`;
          out.actions = [];
        }
      } else {
        // no upcoming podium checks
        out.text = `There are no scheduled podium checks.`;
        out.actions = [];
      }
    }
    return out;
  }
}
