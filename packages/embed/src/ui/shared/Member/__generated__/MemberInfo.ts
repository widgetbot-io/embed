/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MemberInfo
// ====================================================

export interface MemberInfo_server_member {
  __typename: 'Member'
  /**
   * Member's name (username + discriminator)
   */
  name: string
  /**
   * Member ID
   */
  id: string
}

export interface MemberInfo_server {
  __typename: 'Server'
  /**
   * Query a member
   */
  member: MemberInfo_server_member | null
}

export interface MemberInfo {
  server: MemberInfo_server
}

export interface MemberInfoVariables {
  server: string
  member: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
