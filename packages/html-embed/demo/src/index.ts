import WidgetBot from '../../src'

const html = String.raw

document.querySelector('#demo').innerHTML = html`
  <widgetbot
    server="436136130035843082"
    channel="436136130035843084"
    shard="http://localhost:3000"
    id="embed"
    height="300"
    width="500"
  >
  </widgetbot>

  <widgetbot
    server="299881420891881473"
    shard="http://localhost:3000"
  >
  </widgetbot>
`

new WidgetBot()

const embed: any = document.getElementById('embed')

embed.on('signIn', data => {
  console.log(data.name)

  embed.emit('sendMessage', `Hello world! my name is ${data.name}`)
})
