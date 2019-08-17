/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ChannelInfo
// ====================================================

export interface ChannelInfo_channel_CategoryChannel {
  __typename: "CategoryChannel" | "VoiceChannel";
}

export interface ChannelInfo_channel_TextChannel_parent {
  __typename: "CategoryChannel";
  name: string;
}

export interface ChannelInfo_channel_TextChannel {
  __typename: "TextChannel";
  name: string;
  id: string;
  parent: ChannelInfo_channel_TextChannel_parent | null;
}

export type ChannelInfo_channel = ChannelInfo_channel_CategoryChannel | ChannelInfo_channel_TextChannel;

export interface ChannelInfo {
  channel: ChannelInfo_channel | null;
}

export interface ChannelInfoVariables {
  channel: string;
}
