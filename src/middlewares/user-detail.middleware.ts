import { User, WebhookRequestBody } from '@line/bot-sdk';
import { Logger } from '@nestjs/common';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { ClientService } from 'src/services/client.service';
import { UserService } from 'src/services/user.service';

@Injectable()
export class UserDetailMiddleware implements NestMiddleware {
  private readonly logger = new Logger(UserDetailMiddleware.name);
  constructor(
    private readonly userService: UserService,
    private readonly clientService: ClientService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const webHookReq = <WebhookRequestBody>(<unknown>req.body);
    const eventMessage = webHookReq.events[0];
    const user = <User>eventMessage.source;

    const userDetail = this.userService.findOne(user.userId);

    const detail = await userDetail;

    if (!userDetail) {
      const userProfile = await this.clientService.getProfile(user.userId);
      this.logger.log(JSON.stringify(userProfile));
      await this.userService.create({ userId: user.userId });
    }

    this.logger.log(JSON.stringify(detail));
    next();
  }
}
