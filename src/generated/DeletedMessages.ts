/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: DeletedMessages
// ====================================================

export interface DeletedMessages_messageDelete {
  __typename: "TextMessage";
  /**
   * Message ID
   */
  id: string;
}

export interface DeletedMessages {
  messageDelete: DeletedMessages_messageDelete[];
}

export interface DeletedMessagesVariables {
  channel: string;
}
