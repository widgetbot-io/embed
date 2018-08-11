/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: NewMessages
// ====================================================

export interface NewMessages_message_message_TextMessage_author {
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

export interface NewMessages_message_message_TextMessage_reactions {
  __typename: 'Reaction'
  name: string
  count: number
  id: string | null
}

export interface NewMessages_message_message_TextMessage_attachment {
  __typename: 'Attachment'
  url: string
  height: number
  width: number
}

export interface NewMessages_message_message_TextMessage_embeds_fields {
  __typename: 'EmbedField'
  value: string
  name: string
  inline: boolean
}

export interface NewMessages_message_message_TextMessage_embeds_footer {
  __typename: 'EmbedFooter'
  iconURL: string | null
  proxyIconURL: string | null
  text: string
}

export interface NewMessages_message_message_TextMessage_embeds_thumbnail {
  __typename: 'EmbedThumbnail'
  height: number
  width: number
  proxyURL: string
  url: string
}

export interface NewMessages_message_message_TextMessage_embeds_video {
  __typename: 'EmbedVideo'
  height: number
  width: number
  url: string
}

export interface NewMessages_message_message_TextMessage_embeds {
  __typename: 'Embed'
  title: string | null
  description: string | null
  url: string | null
  timestamp: any | null
  color: string | null
  fields: NewMessages_message_message_TextMessage_embeds_fields[]
  footer: NewMessages_message_message_TextMessage_embeds_footer | null
  thumbnail: NewMessages_message_message_TextMessage_embeds_thumbnail | null
  video: NewMessages_message_message_TextMessage_embeds_video | null
}

export interface NewMessages_message_message_TextMessage {
  __typename: 'TextMessage'
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
  author: NewMessages_message_message_TextMessage_author
  /**
   * Message content
   */
  content: string | null
  /**
   * Time the message was edited
   */
  editedAt: any | null
  /**
   * Message reactions
   */
  reactions: NewMessages_message_message_TextMessage_reactions[]
  /**
   * Message attachment
   */
  attachment: NewMessages_message_message_TextMessage_attachment | null
  /**
   * Message embeds
   */
  embeds: NewMessages_message_message_TextMessage_embeds[] | null
}

export interface NewMessages_message_message_JoinMessage_author {
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

export interface NewMessages_message_message_JoinMessage {
  __typename: 'JoinMessage'
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
  author: NewMessages_message_message_JoinMessage_author
}

export type NewMessages_message_message =
  | NewMessages_message_message_TextMessage
  | NewMessages_message_message_JoinMessage

export interface NewMessages_message {
  __typename: 'MessageSub'
  message: NewMessages_message_message
}

export interface NewMessages {
  message: NewMessages_message
}

export interface NewMessagesVariables {
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
