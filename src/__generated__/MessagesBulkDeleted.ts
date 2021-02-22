/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: MessagesBulkDeleted
// ====================================================

export interface MessagesBulkDeleted_messageDeleteBulk {
  __typename: "BulkDeletedMessages";
  ids: string[];
}

export interface MessagesBulkDeleted {
  messageDeleteBulk: MessagesBulkDeleted_messageDeleteBulk | null;
}

export interface MessagesBulkDeletedVariables {
  channel: string;
  guild: string;
}
