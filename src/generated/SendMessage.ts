/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SendMessage
// ====================================================

export interface SendMessage_sendMessage {
  __typename: "TextMessage";
  /**
   * Message ID
   */
  id: string;
  /**
   * Message content
   */
  content: string | null;
}

export interface SendMessage {
  sendMessage: SendMessage_sendMessage | null;
}

export interface SendMessageVariables {
  channel: string;
  content: string;
}
