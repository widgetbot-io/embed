# html-embed

[CodeSandbox](https://codesandbox.io/s/y32o59nn0v)

```html
<html>

<body>
  <button id="hello-world">Send "Hello world"</button>
  <widgetbot
    server="299881420891881473"
    channel="355719584830980096"
    id="embed"
    height="300"
    width="500"
  >
  </widgetbot>
  <script src="https://unpkg.com/@widgetbot/html-embed"></script>

  <script>
    const embed = document.getElementById('embed')

    document.getElementById('hello-world').addEventListener('click', () => {
      embed.emit(
        'sendMessage',
        `Hello world! from \`@widgetbot/html-embed!\`\n` +
          `<https://codesandbox.io/s/y32o59nn0v>`
      )
    })

    embed.on('signIn', data => {
      console.log(`You've signed in as ${data.name}`)
    })
  </script>
</body>

</html>
```
