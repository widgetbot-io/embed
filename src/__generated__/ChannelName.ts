/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ChannelName
// ====================================================

export interface ChannelName_channel_StoreChannel {
  __typename: "StoreChannel" | "VoiceChannel";
  name: string;
  id: string;
}

export interface ChannelName_channel_TextChannel {
  __typename: "TextChannel";
  name: string;
  id: string;
  nsfw: boolean;
  canSend: boolean;
}

export interface ChannelName_channel_NewsChannel {
  __typename: "NewsChannel";
  name: string;
  id: string;
  nsfw: boolean;
  canSend: boolean;
}

export type ChannelName_channel = ChannelName_channel_StoreChannel | ChannelName_channel_TextChannel | ChannelName_channel_NewsChannel;

export interface ChannelName {
  channel: ChannelName_channel | null;
}

export interface ChannelNameVariables {
  channel: string;
}
