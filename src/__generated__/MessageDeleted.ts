/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: MessageDeleted
// ====================================================

export interface MessageDeleted_messageDelete {
  __typename: "DeletedMessage";
  id: string;
}

export interface MessageDeleted {
  messageDelete: MessageDeleted_messageDelete | null;
}

export interface MessageDeletedVariables {
  channel: string;
  guild: string;
}
