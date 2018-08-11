/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: message
// ====================================================

export interface message_author {
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

export interface message {
  __typename: 'TextMessage' | 'JoinMessage'
  /**
   * Message ID
   */
  id: string
  /**
   * Message timestamp
   */
  timestamp: any
  /**
   * Message author
   */
  author: message_author
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
