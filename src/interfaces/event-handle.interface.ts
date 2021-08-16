import { WebhookEvent } from '@line/bot-sdk';

export interface EventHandle {
  handle(event: WebhookEvent);
}

export interface EventHandleList {
  [key: string]: EventHandle;
}
