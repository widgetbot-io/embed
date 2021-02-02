/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ChannelHeader
// ====================================================

export interface ChannelHeader_channel {
  __typename: "TextChannel";
  name: string;
  id: string;
  topic: string | null;
}

export interface ChannelHeader {
  channel: ChannelHeader_channel;
}

export interface ChannelHeaderVariables {
  channel: string;
}
