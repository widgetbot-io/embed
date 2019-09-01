import { Messages_channel_TextChannel_messages } from '@generated'
import Markdown from '@ui/shared/markdown/render'
import { ThemeProvider } from 'emotion-theming'
import Moment from 'moment'
import Tooltip from 'rc-tooltip'
import * as React from 'react'

import Author, { Timestamp } from './Author'
import {
  Avatar,
  Content,
  Edited,
  Group,
  Member,
  Secondary,
  Messages,
  Reactions,
  Root
} from './elements'
import { Image } from './Embed/elements/media'
import Reaction from './Reaction'
import { Trans } from '@lingui/react'
import Embed from './Embed'

interface Props {
  messages: Messages_channel_TextChannel_messages[]
  style?
}

const DEFAULT_AVATAR = 'https://cdn.discordapp.com/embed/avatars/0.png'

class Message extends React.PureComponent<Props, any> {
  theme = message => theme => ({
    ...theme,
    message
  });

  render() {
    const { messages } = this.props;
    const [firstMessage] = messages;

    return (
      <Group style={this.props.style} className="group">
        {firstMessage.__typename === 'TextMessage' ? (
          <Avatar
            url={firstMessage.author.displayAvatarURL || firstMessage.author.defaultAvatarURL || DEFAULT_AVATAR}
            className="avatar"
          />
        ) : null}

        <Messages className="messages">
          {firstMessage.__typename === 'TextMessage' ? (
            <Author
              author={firstMessage.author}
              member={firstMessage.member}
              time={firstMessage.createdAt}
            />
          ) : null}

          {messages.map((message, i) => {
            switch (message.__typename) {
              case 'TextMessage': {
                return (
                  <ThemeProvider key={message.id} theme={this.theme(message)}>
                    <Root className="message" id={message.id}>
                      <Content className="content">
                        <Markdown>{message.content}</Markdown>
                        {message.editedAt && (
                          <Tooltip
                            placement="top"
                            overlay={Moment(message.editedAt).calendar()}
                            mouseLeaveDelay={0}
                          >
                            <Edited className="edited">
                              <Trans id="Message.edited">(edited)</Trans>
                            </Edited>
                          </Tooltip>
                        )}
                      </Content>

                      {message.attachments
                        ? message.attachments.map((attachment, i) => (
                            <Image
                              key={`${i}:${attachment}`}
                              src={attachment.url}
                              height={+attachment.height}
                              width={+attachment.width}
                            />
                          ))
                        : null}

                      {message.embeds.map((e, i) => (
                          // @ts-ignore
                          <Embed key={i} {...e} />
                      ))}

                      {message.reactions && (
                        <Reactions className="reactions">
                          {message.reactions.map((reaction, i) => (
                            <Reaction key={i} {...reaction} />
                          ))}
                        </Reactions>
                      )}
                    </Root>
                  </ThemeProvider>
                )
              }

              case 'JoinMessage': {
                const member = (
                  <Member id={message.author.id}>
                    {message.member.displayName || message.author.username}
                  </Member>
                );

                return (
                  <React.Fragment key={message.id}>
                    <Secondary.Join>
                      <Trans id="Message.welcomeMessage">
                        {member}{randomMessage()}
                      </Trans>
                    </Secondary.Join>
                    <Timestamp time={message.createdAt} />
                  </React.Fragment>
                )
              }

              case 'PinnedMessage': {
                const member = (
                  <Member id={message.author.id}>
                    {message.member.displayName || message.author.username}
                  </Member>
                );

                return (
                  <React.Fragment key={message.id}>
                    <Secondary.Pinned>
                      <Trans id="Message.pinnedMessage">
                        {member}pinned a message to this channel.
                      </Trans>
                    </Secondary.Pinned>
                    <Timestamp time={message.createdAt} />
                  </React.Fragment>
                )
              }

              default:
                return null
            }
          })}
        </Messages>
      </Group>
    )
    // }
  }
}

export default Message

function randomMessage(): string {
  const messages: string[] = [
      `has joined. Stay a while and listen!`,
      `joined. You must construct additional pylons.`,
      `tripped on the welcome mat!`,
      `just joined the server - glhf!`,
      `just arrived. Seems OP - please nerf.`
  ];


  return messages[Math.floor(Math.random() * messages.length)]
}
