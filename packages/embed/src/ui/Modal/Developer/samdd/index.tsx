import * as React from 'react'

import {
  Bio,
  Card,
  Chip,
  Description,
  Graph,
  Heading,
  Mugshot,
  Root
} from '../elements'

class Developer extends React.PureComponent {
  render() {
    return (
      <Card>
        <Root>
          <Mugshot src="https://cdn.samdd.me/static/widgetbot/avatar.svg" />
          <Bio>
            <Heading>samdd</Heading>
            <Description>
              {`Hey there! I build products for humans.\nI created the current iteration of this chat platform.`}
            </Description>

            <Chip href="https://samdd.me/r?github" target="_blank">
              GitHub
            </Chip>
            <Chip href="https://twitter.com/thesamdd" target="_blank">
              Twitter
            </Chip>
            <Chip href="https://samdd.me" target="_blank">
              Website
            </Chip>
            <Chip
              // href="/channels/335836376031428618/339910176956219403/"
              href="https://discord.gg/dxxFh9Q"
              target="_blank"
            >
              Discord
            </Chip>
          </Bio>
        </Root>
        <Graph
          username="samdenty99"
          onClick={() => window.open('https://samdd.me/r?github')}
        />
      </Card>
    )
  }
}

export default Developer
