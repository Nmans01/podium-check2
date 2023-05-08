import { PrismaService } from 'nestjs-prisma';
import { MessageDto } from './dtos/message';
export declare class AppService {
    private prisma;
    constructor(prisma: PrismaService);
    getHello(): string;
    getMessage(id: number): Promise<MessageDto>;
    getForms(id: any): import(".prisma/client").Prisma.Prisma__AssignmentClient<{
        roomGroup: {
            rooms: {
                roomName: string;
            }[];
            groupName: string;
        };
    }, never>;
    getFormByID(roomName: string): Promise<[{
        feature: import(".prisma/client").Feature;
    }[], import(".prisma/client").Projector[]]>;
}
