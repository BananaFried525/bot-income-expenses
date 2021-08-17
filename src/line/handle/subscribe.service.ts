import { User, WebhookEvent } from '@line/bot-sdk';
import { Injectable, Logger } from '@nestjs/common';
import { EventHandle } from 'src/interfaces/event-handle.interface';
import { ClientService } from 'src/services/client.service';
import { UserService } from 'src/services/user.service';

@Injectable()
export class FollowService implements EventHandle {
  private readonly logger = new Logger(FollowService.name);
  constructor(private readonly userService: UserService) {}

  async handle(event: WebhookEvent) {
    this.logger.log(`follow log:${JSON.stringify(event)}`);
    const userSource = <User>event.source;
    const user = await this.userService.findOne(userSource.userId);
    if (user == undefined || user == null) {
      await this.userService.create({ userId: userSource.userId });
      this.logger.log(`userId: ${user.userId} is new follower`);
    } else {
      user.isActive = true;
      await this.userService.update(user);
      this.logger.log(`userId: ${user.userId} now active`);
    }
  }
}

@Injectable()
export class UnFollowService implements EventHandle {
  private readonly logger = new Logger(FollowService.name);
  constructor(private readonly userService: UserService) {}

  async handle(event: WebhookEvent) {
    this.logger.log(`follow log:${JSON.stringify(event)}`);
    const userSource = <User>event.source;
    const user = await this.userService.findOne(userSource.userId);
    if (!user == undefined || !user == null) {
      user.isActive = false;
      await this.userService.update(user);
      this.logger.log(`userId: ${user.userId} this user has unfollow`);
    }
  }
}
