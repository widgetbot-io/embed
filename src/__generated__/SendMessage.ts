/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SendMessage
// ====================================================

export interface SendMessage_sendMessage_PinnedMessage {
  __typename: "PinnedMessage" | "BoostMessage" | "JoinMessage" | "FollowMessage";
  id: string;
}

export interface SendMessage_sendMessage_TextMessage {
  __typename: "TextMessage";
  id: string;
  content: string;
}

export type SendMessage_sendMessage = SendMessage_sendMessage_PinnedMessage | SendMessage_sendMessage_TextMessage;

export interface SendMessage {
  sendMessage: SendMessage_sendMessage;
}

export interface SendMessageVariables {
  channel: string;
  content: string;
}
