import { EventMessage, Message, MessageEvent } from '@line/bot-sdk';

export interface MessageHandle {
  handle(message: MessageEvent): void;
}

export interface MessageHandleList {
  [key: string]: MessageHandle;
}
