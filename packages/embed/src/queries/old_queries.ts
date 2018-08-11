// TODO: Delete

// export const server_ = gql`
//   query Messages($server: String!, $channel: String, $withChannel: Boolean!) {
//     server(id: $server) {
//       name
//       memberCount
//       icon
//       members {
//         tag
//         id
//         status
//         avatar
//       }
//       emoji {
//         name
//         id
//       }
//       channels {
//         name
//         category
//         id
//         permissions {
//           SEND_MESSAGES
//         }
//       }
//       channel(id: $channel) @include(if: $withChannel) {
//         topic
//       }
//       theme {
//         colors {
//           primary
//           accent
//           background
//         }
//         css
//       }
//     }
//   }
// `

// export const channel_ = gql`
//   query Messages($server: String!, $channel: String!) {
//     server(id: $server) {
//       channel(id: $channel) {
//         name
//         topic
//       }
//     }
//   }
// `

// export const messages =
//   'messages' +
//   gql`
//     {
//       timestamp
//       id
//       content
//       author {
//         name
//         id
//         avatar
//         type
//         color
//       }
//       reactions {
//         id
//         name
//         count
//       }
//       mentions {
//         members {
//           name
//           id
//           roles {
//             color
//             position
//             name
//           }
//         }
//         roles {
//           name
//           color
//           id
//         }
//         everyone
//       }
//       type
//       editedAt
//       attachment {
//         url
//         height
//         width
//       }
//       embeds {
//         color
//         title
//         type
//         description
//         url
//         timestamp
//         author {
//           name
//           url
//           iconURL
//         }
//         fields {
//           value
//           name
//           inline
//         }
//         footer {
//           proxyIconUrl
//           text
//         }
//         thumbnail {
//           height
//           width
//           proxyURL
//         }
//         image {
//           height
//           width
//           proxyURL
//         }
//         provider {
//           name
//           url
//         }
//         video {
//           height
//           width
//           url
//         }
//       }
//     }
//   `
