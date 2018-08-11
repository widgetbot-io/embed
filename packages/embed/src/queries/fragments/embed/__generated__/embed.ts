/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: embed
// ====================================================

export interface embed_fields {
  __typename: 'EmbedField'
  value: string
  name: string
  inline: boolean
}

export interface embed_footer {
  __typename: 'EmbedFooter'
  iconURL: string | null
  proxyIconURL: string | null
  text: string
}

export interface embed_thumbnail {
  __typename: 'EmbedThumbnail'
  height: number
  width: number
  proxyURL: string
  url: string
}

export interface embed_video {
  __typename: 'EmbedVideo'
  height: number
  width: number
  url: string
}

export interface embed {
  __typename: 'Embed'
  title: string | null
  description: string | null
  url: string | null
  timestamp: any | null
  color: string | null
  fields: embed_fields[]
  footer: embed_footer | null
  thumbnail: embed_thumbnail | null
  video: embed_video | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
