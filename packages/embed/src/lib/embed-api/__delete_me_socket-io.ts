// import api from 'embed-api'
// import { addNotification } from 'notify'
// import * as R from 'ramda'
// import * as io from 'socket.io-client'

// import controller from '../cerebral'

// // Initiate socket-io
// export const socket = io({ path: '/api/socket-io', autoConnect: false })

// export { fetchInvite } from '@lib/socket-io/fetchInvite'
// export { subscribe, unsubscribe } from '@lib/socket-io/subscriptions'

// const initiate = () => {
//   // Register socket
//   // TODO: Remove
//   // socket.connect()
//   socket.on('connect', () => {
//     socket.emit('register', {
//       server: controller.state.server,
//       token: controller.state.url.token || controller.state.user.token,
//       subscriptions: controller.state.subscriptions.keys()
//     })
//   })

//   socket.on('signIn', controller.signals.signIn)

//   socket.on('message', controller.signals.insertMessage)
//   socket.on('messageUpdate', controller.signals.updateMessage)
//   socket.on('messageDelete', controller.signals.deleteMessage)
//   socket.on('messageDeleteBulk', controller.signals.deleteMessageBulk)

//   socket.on('messageReactionAdd', controller.signals.messageReactionAdd)
//   socket.on('messageReactionRemove', controller.signals.messageReactionRemove)

//   socket.on('notify', addNotification)

//   // Embed API
//   socket.on('signIn', d => api.emit('signIn', R.omit(['token'], d) as any))

//   socket.on('message', d => api.emit('message', d))
//   socket.on('messageUpdate', d => api.emit('messageUpdate', d))
//   socket.on('messageDelete', d => api.emit('messageDelete', d))
//   socket.on('messageDeleteBulk', ({ channel, ids }) =>
//     ids.forEach(id => api.emit('messageDelete', { channel, id }))
//   )

//   socket.on('messageReactionAdd', d => api.emit('messageReactionAdd', d))
//   socket.on('messageReactionRemove', d => api.emit('messageReactionRemove', d))
// }

// export default initiate

// // Debugging
// if (window) {
//   ;(window as any).socket = socket
// }
