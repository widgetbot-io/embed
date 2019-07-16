import autobind from 'autobind-decorator'
import * as React from 'react'
import N from 'react-notification-system'

import { Notifications } from './elements'

const initial: N.Notification[] = []
let ref

export const addNotification = (
  notifications: N.Notification | N.Notification[]
) => {
  if (!(notifications instanceof Array)) notifications = [notifications]

  notifications.forEach(n => {
    const notification = {
      ...(/^warning|error$/.test(n.level) && {
        action: {
          label: 'Support server',
          callback() {
            window.open('https://discord.gg/zyqZWr2')
          }
        }
      }),
      ...n,
      message:
        typeof n.message === 'string' ? n.message : JSON.stringify(n.message)
    }

    if (ref) return ref(notification)

    initial.push(notification)
  })
}

class Notify extends React.PureComponent {
  private notifications: N.System

  render() {
    return (
      <Notifications>
        <N ref={ref => (this.notifications = ref)} />
      </Notifications>
    )
  }

  componentDidMount() {
    if (initial.length) {
      for (let notification of initial) {
        this.addNotification(notification)
      }
    }
    ref = this.addNotification
  }

  @autobind
  addNotification(notification: N.Notification) {
    if (this.notifications) {
      this.notifications.addNotification({
        position: 'br',
        ...notification
      })
    }
  }
}

export default Notify

// Debugging
if (window) {
  ;(window as any).addNotification = addNotification
}
