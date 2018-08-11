/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Messages
// ====================================================

export interface Messages_server_channel_messages_TextMessage_author {
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

export interface Messages_server_channel_messages_TextMessage_reactions {
  __typename: 'Reaction'
  name: string
  count: number
  id: string | null
}

export interface Messages_server_channel_messages_TextMessage_attachment {
  __typename: 'Attachment'
  url: string
  height: number
  width: number
}

export interface Messages_server_channel_messages_TextMessage_embeds_fields {
  __typename: 'EmbedField'
  value: string
  name: string
  inline: boolean
}

export interface Messages_server_channel_messages_TextMessage_embeds_footer {
  __typename: 'EmbedFooter'
  iconURL: string | null
  proxyIconURL: string | null
  text: string
}

export interface Messages_server_channel_messages_TextMessage_embeds_thumbnail {
  __typename: 'EmbedThumbnail'
  height: number
  width: number
  proxyURL: string
  url: string
}

export interface Messages_server_channel_messages_TextMessage_embeds_video {
  __typename: 'EmbedVideo'
  height: number
  width: number
  url: string
}

export interface Messages_server_channel_messages_TextMessage_embeds {
  __typename: 'Embed'
  title: string | null
  description: string | null
  url: string | null
  timestamp: any | null
  color: string | null
  fields: Messages_server_channel_messages_TextMessage_embeds_fields[]
  footer: Messages_server_channel_messages_TextMessage_embeds_footer | null
  thumbnail: Messages_server_channel_messages_TextMessage_embeds_thumbnail | null
  video: Messages_server_channel_messages_TextMessage_embeds_video | null
}

export interface Messages_server_channel_messages_TextMessage {
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
  author: Messages_server_channel_messages_TextMessage_author
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
  reactions: Messages_server_channel_messages_TextMessage_reactions[]
  /**
   * Message attachment
   */
  attachment: Messages_server_channel_messages_TextMessage_attachment | null
  /**
   * Message embeds
   */
  embeds: Messages_server_channel_messages_TextMessage_embeds[] | null
}

export interface Messages_server_channel_messages_JoinMessage_author {
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

export interface Messages_server_channel_messages_JoinMessage {
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
  author: Messages_server_channel_messages_JoinMessage_author
}

export type Messages_server_channel_messages =
  | Messages_server_channel_messages_TextMessage
  | Messages_server_channel_messages_JoinMessage

export interface Messages_server_channel {
  __typename: 'Channel'
  /**
   * Channel ID
   */
  id: string
  /**
   * Fetches the messages on the channel
   */
  messages: Messages_server_channel_messages[] | null
}

export interface Messages_server {
  __typename: 'Server'
  /**
   * Query a channel
   */
  channel: Messages_server_channel
}

export interface Messages {
  server: Messages_server
}

export interface MessagesVariables {
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
