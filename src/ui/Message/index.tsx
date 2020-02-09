import { Messages_channel_TextChannel_messages } from '@generated'
import Markdown, {LinkMarkdown} from '@ui/shared/markdown/render'
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
  Root,
  Video
} from './elements'
import { Image } from './Embed/elements/media'
import Reaction from './Reaction'
import Embed from './Embed'
import AttachmentSpoiler from '@ui/shared/markdown/render/elements/AttachmentSpoiler'
import { Locale } from '@lib/Locale'

interface Props {
  messages: Messages_channel_TextChannel_messages[],
  style?
}

const DEFAULT_AVATAR = 'https://cdn.discordapp.com/embed/avatars/0.png';

const gifCheck = (url: string) => {
  return url.includes('/a_') ? url.replace('webp', 'gif') : url
}

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
            url={gifCheck(firstMessage.author.displayAvatarURL) || firstMessage.author.defaultAvatarURL || DEFAULT_AVATAR}
            className="avatar"
          />
        ) : null}

        <Messages className="messages">
          {firstMessage.__typename === 'TextMessage' ? (
            <Author
              author={firstMessage.author}
              member={firstMessage.member}
              time={firstMessage.createdAt}
              crosspost={firstMessage.flags.IS_CROSSPOST}
            />
          ) : null}

          {messages.map((message, i) => {
            switch (message.__typename) {
              case 'TextMessage': {
                return (
                  <ThemeProvider key={message.id} theme={this.theme(message)}>
                    <Root className="message" id={message.id}>
                      <Content className="content">
                        {message.author.discriminator === '0000'
                          ? <LinkMarkdown>{message.content}</LinkMarkdown>
                          : <Markdown>{message.content}</Markdown>}
                        {message.editedAt && (
                          <Tooltip
                            placement="top"
                            overlay={Moment(message.editedAt).calendar()}
                            mouseLeaveDelay={0}
                          >
                            <Edited className="edited">
                              {Locale.translate('frontend.edited')}
                            </Edited>
                          </Tooltip>
                        )}
                      </Content>

                        {message.attachments
                            ? message.attachments.map((attachment, i) => {
                              if(attachment.height && attachment.width) {
                                if(attachment.url.endsWith('.mp4') || attachment.url.endsWith('.mov') || attachment.url.endsWith('.webm')) {
                                  return <Video controls
                                    key={`${i}:${attachment}`}
                                    src={attachment.url}
                                    height={+attachment.height}
                                    width={+attachment.width}
                                  ></Video>;
                                } else {
                                    return attachment.spoiler ? (
                                    <AttachmentSpoiler
                                      key={`${i}:${attachment}`}
                                      src={attachment.url}
                                      height={+attachment.height} 
                                      width={+attachment.width}
                                    />) : (
                                    <Image
                                      key={`${i}:${attachment}`}
                                      src={attachment.url}
                                      height={+attachment.height}
                                      width={+attachment.width}
                                  />)
                              }
                            }
                          }) : null}
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
                  <Member id={message.author.id} color={message.member.displayHexColor}>
                    {message.member.displayName || message.author.username}
                  </Member>
                );

                return (
                  <React.Fragment key={message.id}>
                    <Secondary.Join>
                        {member}{randomMessage()}
                    </Secondary.Join>
                    <Timestamp time={message.createdAt} />
                  </React.Fragment>
                )
              }

              case 'PinnedMessage': {
                const member = (
                  <Member id={message.author.id} color={message.member.displayHexColor}>
                    {message.member.displayName || message.author.username}
                  </Member>
                );

                return (
                  <React.Fragment key={message.id}>
                    <Secondary.Pinned>
                      {member}{Locale.translate('frontend.messages.pinned')}
                    </Secondary.Pinned>
                    <Timestamp time={message.createdAt} />
                  </React.Fragment>
                )
              }

              case 'BoostMessage': {

                const member = (
                  <Member id={message.author.id} color={message.member.displayHexColor}>
                    {message.member.displayName || message.author.username}
                  </Member>
                );

                // @ts-ignore
                if(message.tier) {
                  return (
                    <React.Fragment key={message.id}>
                      <Secondary.Boost>
                        {member}{Locale.translate('frontend.messages.boost')} {Locale.translate('frontend.messages.boost.achieved', {GUILD: 'TODO guildName', TIER: message.tier})}
                      </Secondary.Boost>
                      <Timestamp time={message.createdAt} />
                    </React.Fragment>
                  )
                } else {
                  return (
                    <React.Fragment key={message.id}>
                      <Secondary.Boost>
                        {member}{Locale.translate('frontend.messages.boost')}
                      </Secondary.Boost>
                      <Timestamp time={message.createdAt} />
                    </React.Fragment>
                  )
                }
              }

              case 'FollowMessage': {
                const member = (
                  <Member id={message.author.id} color={message.member.displayHexColor}>
                    {message.member.displayName || message.author.username}
                  </Member>
                );

                return (
                  <React.Fragment key={message.id}>
                    <Secondary.Join>
                      {member}{Locale.translate('frontend.messages.follow', {HOOK: message.content})}
                    </Secondary.Join>
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
      `just joined. Everyone, look busy!`,
      `just joined. Can I get a heal?`,
      `joined your party.`,
      `joined. You must construct additional pylons.`,
      `just joined... or did they?`,
      `just arrived. Seems OP - please nerf.`,
      `hopped into the server. Kangaroo!!`,
      `has joined the battle bus.`,
      `has joined the server! It's super effective!`,
      `is here, as the prophecy foretold.`,
      `has joined. Stay a while and listen!`
  ];


  return messages[Math.floor(Math.random() * messages.length)]
}
