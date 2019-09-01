/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ChannelInfo
// ====================================================

export interface ChannelInfo_channel_NewsChannel {
  __typename: "NewsChannel" | "StoreChannel" | "VoiceChannel";
}

export interface ChannelInfo_channel_TextChannel_category {
  __typename: "Category";
  name: string;
  position: number;
}

export interface ChannelInfo_channel_TextChannel {
  __typename: "TextChannel";
  name: string;
  id: string;
  category: ChannelInfo_channel_TextChannel_category | null;
}

export type ChannelInfo_channel = ChannelInfo_channel_NewsChannel | ChannelInfo_channel_TextChannel;

export interface ChannelInfo {
  channel: ChannelInfo_channel | null;
}

export interface ChannelInfoVariables {
  channel: string;
}
