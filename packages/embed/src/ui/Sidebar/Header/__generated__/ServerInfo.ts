/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ServerInfo
// ====================================================

export interface ServerInfo_server {
  __typename: 'Server'
  /**
   * Name of the server
   */
  name: string
  /**
   * Servers icon
   */
  icon: string
  /**
   * Amount of members in the server
   */
  memberCount: number
}

export interface ServerInfo {
  server: ServerInfo_server
}

export interface ServerInfoVariables {
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
