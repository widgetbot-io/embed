/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Channel
// ====================================================

export interface Channel_server_channel {
  __typename: 'Channel'
  /**
   * Channel name
   */
  name: string
  /**
   * Channel ID
   */
  id: string
  /**
   * Channel topic
   */
  topic: string | null
}

export interface Channel_server {
  __typename: 'Server'
  /**
   * Query a channel
   */
  channel: Channel_server_channel
}

export interface Channel {
  server: Channel_server
}

export interface ChannelVariables {
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
