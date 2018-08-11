module.exports = {
  languageData: {
    plurals: function(n, ord) {
      var s = String(n).split('.'),
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2)
      if (ord)
        return n10 == 1 && n100 != 11
          ? 'one'
          : n10 == 2 && n100 != 12
            ? 'two'
            : n10 == 3 && n100 != 13
              ? 'few'
              : 'other'
      return n == 1 && v0 ? 'one' : 'other'
    }
  },
  messages: {
    'ErrorScreen.Description': 'Something unexpected occurred',
    'ErrorScreen.Title': 'Error',
    'Header.joinDiscord': 'Join on Discord',
    'Header.memberCount': function(a) {
      return [
        a('0', 'plural', {
          one: ['#', ' member in this server'],
          other: ['#', ' members in this server']
        })
      ]
    },
    'Message.edited': '(edited)',
    'Message.welcomeMessage': function(a) {
      return [a('name'), ' has joined. Stay a while and listen!']
    },
    'Modal.openOriginal': 'Open original',
    'PickChannelScreen.Description': 'Pick a channel from the left',
    'PickChannelScreen.Title': 'Select a channel'
  }
}
