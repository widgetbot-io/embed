# embed-api

```ts
import { Client } from '@widgetbot/embed-api'

const api = new Client({
  id: 'test',
  iframe: document.getElementsByTagName('iframe')[0]
})

api.on('message', message => {
  console.log('message:', message.id)
})

api.emit('sendMessage', 'hello world')
```

```ts
import { Server } from '@widgetbot/embed-api'

const api = new Server({ id: 'test' })

api.on('sendMessage', message => {
  console.log('sending:', message)
})

api.emit('message', { id: 'testmessage' })
```
