import Crate from '../../src'

const crate = new Crate({
  // server: '436136130035843082',
  // channel: '436136130035843084',
  // shard: 'http://localhost:3000',
  shard: 'https://cl1.widgetbot.io',
  server: '299881420891881473',
  channel: '355719584830980096',
  // glyph: ['https://samdd.me/favicon.ico', '50%'],
  css: `
  &:not(.open) .button {
    background: blue;
    &:hover {
      background: red;
    }
  }
`
  // defer: true
})

crate.on('signIn', user => {
  console.log(user)
  crate.emit('sendMessage', 'Testing')
})
