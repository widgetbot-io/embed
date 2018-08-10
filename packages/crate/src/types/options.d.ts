type url = string
type size = string

export type horizontal = 'top' | 'bottom' | number
export type vertical = 'left' | 'right' | number

interface Options {
  // Server + channel IDs
  server: string
  channel?: string

  // Where the button should appear on-screen
  location?: [horizontal, vertical]

  // The color of the button
  color?: string
  // The glyph to display on the button
  glyph?: [url, size]
  // Custom CSS to be injected into the Shadow root
  css?: string

  // Message notifications
  notifications?: boolean
  // Unread message indicator
  indicator?: boolean
  // Notification timeout
  timeout?: number

  // Only load the widget once the user opens it
  defer?: boolean
  // Connect to a custom WidgetBot server
  shard?: url
}

export default Options
