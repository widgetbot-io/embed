/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Members
// ====================================================

export interface Members_server_members {
  __typename: 'Member'
  /**
   * Member's name (username + discriminator)
   */
  name: string
  /**
   * Member's display color
   */
  color: string | null
  /**
   * Member ID
   */
  id: string
  /**
   * Member's avatar CDN url
   */
  avatarURL: string
}

export interface Members_server {
  __typename: 'Server'
  /**
   * Members in the server
   */
  members: Members_server_members[]
}

export interface Members {
  server: Members_server
}

export interface MembersVariables {
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
