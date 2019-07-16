/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ChannelName
// ====================================================

export interface ChannelName_channel {
  __typename: "CategoryChannel" | "TextChannel" | "VoiceChannel";
  name: string;
  id: string;
}

export interface ChannelName {
  channel: ChannelName_channel | null;
}

export interface ChannelNameVariables {
  channel: string;
}
