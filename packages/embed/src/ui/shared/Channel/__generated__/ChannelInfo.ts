/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ChannelInfo
// ====================================================

export interface ChannelInfo_server_channel {
  __typename: 'Channel'
  /**
   * Channel name
   */
  name: string
  /**
   * Channel category
   */
  category: string | null
  /**
   * Channel ID
   */
  id: string
}

export interface ChannelInfo_server {
  __typename: 'Server'
  /**
   * Query a channel
   */
  channel: ChannelInfo_server_channel
}

export interface ChannelInfo {
  server: ChannelInfo_server
}

export interface ChannelInfoVariables {
  server: string
  channel: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
