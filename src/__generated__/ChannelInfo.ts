/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ChannelInfo
// ====================================================

export interface ChannelInfo_channel_category {
  __typename: "Category";
  name: string;
  position: number;
}

export interface ChannelInfo_channel {
  __typename: "TextChannel";
  name: string;
  id: string;
  category: ChannelInfo_channel_category | null;
}

export interface ChannelInfo {
  channel: ChannelInfo_channel;
}

export interface ChannelInfoVariables {
  channel: string;
}
