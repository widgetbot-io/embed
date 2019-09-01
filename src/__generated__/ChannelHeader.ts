/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ChannelHeader
// ====================================================

export interface ChannelHeader_channel_NewsChannel {
  __typename: "NewsChannel" | "StoreChannel" | "VoiceChannel";
  name: string;
  id: string;
}

export interface ChannelHeader_channel_TextChannel {
  __typename: "TextChannel";
  name: string;
  id: string;
  topic: string | null;
}

export type ChannelHeader_channel = ChannelHeader_channel_NewsChannel | ChannelHeader_channel_TextChannel;

export interface ChannelHeader {
  channel: ChannelHeader_channel | null;
}

export interface ChannelHeaderVariables {
  channel: string;
}
