/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: textMessage
// ====================================================

export interface textMessage_reactions {
  __typename: 'Reaction'
  name: string
  count: number
  id: string | null
}

export interface textMessage_attachment {
  __typename: 'Attachment'
  url: string
  height: number
  width: number
}

export interface textMessage_embeds_fields {
  __typename: 'EmbedField'
  value: string
  name: string
  inline: boolean
}

export interface textMessage_embeds_footer {
  __typename: 'EmbedFooter'
  iconURL: string | null
  proxyIconURL: string | null
  text: string
}

export interface textMessage_embeds_thumbnail {
  __typename: 'EmbedThumbnail'
  height: number
  width: number
  proxyURL: string
  url: string
}

export interface textMessage_embeds_video {
  __typename: 'EmbedVideo'
  height: number
  width: number
  url: string
}

export interface textMessage_embeds {
  __typename: 'Embed'
  title: string | null
  description: string | null
  url: string | null
  timestamp: any | null
  color: string | null
  fields: textMessage_embeds_fields[]
  footer: textMessage_embeds_footer | null
  thumbnail: textMessage_embeds_thumbnail | null
  video: textMessage_embeds_video | null
}

export interface textMessage {
  __typename: 'TextMessage'
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
  reactions: textMessage_reactions[]
  /**
   * Message attachment
   */
  attachment: textMessage_attachment | null
  /**
   * Message embeds
   */
  embeds: textMessage_embeds[] | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
