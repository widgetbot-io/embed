module.exports = {
  languageData: {
    plurals: function(n, ord) {
      var s = String(n).split('.'),
        v0 = !s[1]
      if (ord) return 'other'
      return n == 1 && v0 ? 'one' : 'other'
    }
  },
  messages: {
    'ErrorScreen.Description': 'Etwas unerwartetes ist passiert',
    'ErrorScreen.Title': 'Error',
    'Header.joinDiscord': 'Beitreten auf Discord',
    'Header.memberCount': function(a) {
      return [
        a('0', 'plural', {
          one: ['#', ' Mitglied in diesem Server'],
          other: ['#', ' Mitglied in diesem Server']
        })
      ]
    },
    'Message.edited': '(bearbeitet)',
    'Message.welcomeMessage': function(a) {
      return [
        a('name'),
        ' ist beigetreten. Bleib ein bisschen hier und h\xF6re zu'
      ]
    },
    'Modal.openOriginal': 'Original \xF6ffnen',
    'PickChannelScreen.Description': 'W\xE4hle einen Kanal von links aus',
    'PickChannelScreen.Title': 'W\xE4hle einen Kanal aus'
  }
}
