/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Channels
// ====================================================

export interface Channels_server_channels {
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

export interface Channels_server {
  __typename: 'Server'
  /**
   * Fetches all the channels on the server
   */
  channels: Channels_server_channels[]
}

export interface Channels {
  server: Channels_server
}

export interface ChannelsVariables {
  server: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
