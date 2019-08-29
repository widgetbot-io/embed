/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ChannelInfo
// ====================================================

export interface ChannelInfo_channel_CategoryChannel {
  __typename: "CategoryChannel" | "NewsChannel" | "StoreChannel" | "VoiceChannel";
}

export interface ChannelInfo_channel_TextChannel {
  __typename: "TextChannel";
  name: string;
  id: string;
  category: string | null;
}

export type ChannelInfo_channel = ChannelInfo_channel_CategoryChannel | ChannelInfo_channel_TextChannel;

export interface ChannelInfo {
  channel: ChannelInfo_channel | null;
}

export interface ChannelInfoVariables {
  channel: string;
}
