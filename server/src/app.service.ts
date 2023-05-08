import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { MessageDto } from './dtos/message';
import { User } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) { }

  getHello(): string {
    return 'Hello World!';
  }

  async getMessage(id: number): Promise<MessageDto> {

    let user = this.prisma.user.findFirst({
      where: {
        id
      }
    });

    let out: MessageDto = {
      text: "",
      actions: []
    };

    if (!user['admin']) {
      // user is regular employee

      let today = new Date();
      today.setHours(0, 0, 0, 0);
      let tomorrow = new Date(today.getDate() + 1);

      let assignments = await this.prisma.assignment.findMany({
        where: {
          userId: id,
          assignmentDate: {
            gte: today
          },
        },
        include: {
          roomGroup: {
            include: {
              rooms: true
            }
          }
        },
        orderBy: {
          assignmentDate: 'asc'
        }
      });

      if (!assignments.length) {
        // user has no upcoming assignment
        out.text = "You have nothing scheduled for today.";
        out.actions = [];
      } else {


        if (assignments[0].assignmentDate.getDate() < tomorrow.getDate()) {
          // user has an assignment today
          let rooms = assignments[0].roomGroup.groupName;
          let employees = "others"; //this.prisma.

          out.text = `Your assignment today is to ${rooms}, with ${employees}.`;
          out.actions = [
            {
              text: "Go to Forms",
              ref: "/forms"
            }
          ];
        } else {
          // user has an upcoming assignment
          let datestring = assignments[0].assignmentDate;

          out.text = `You have nothing scheduled for today.
          Your next assignment is for ${datestring}.`;
          out.actions = [];
        }
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
        let date = "";
        if (true) {
          // all groups are set
          out.text = `The next round of podium checks is scheduled for ${date}. All groups have been assigned.`;
          out.actions = [];
        } else {
          // not all groups are set
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

  getForms(id) {
    let rooms = this.prisma.assignment.findFirst({
      where: {
        userId: id
      },
      select: {
        roomGroup: {
          select: {
            groupName: true,
            rooms:
            {
              select: {
                roomName: true
              }
            }
          }
        }
      }
    });
    return rooms;
  }

  getFormByID(roomName: string) {
    let roomFeatures = this.prisma.roomFeature.findMany({
      where: {
        room: {
          roomName
        }
      },
      select: {
        feature: true
      }
    });

    let projectors = this.prisma.projector.findMany({
      where: {
        room: {
          roomName
        }
      }
    })

    return Promise.all([roomFeatures,projectors]);
  }
}
