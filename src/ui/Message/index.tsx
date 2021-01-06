import { Messages_channel_messages } from '@generated'
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
  Video,
  Attachment,
  AttachmentIcon,
  AttachmentInner,
  AttachmentSize,
  Audio,
  AudioMetadata,
  AudioPlayer,
  Command,
  ApplicationIcon,
  ApplicationName,
  CommandArgs,
  CommandArgsSpine,
  StickerTooltipIcon
} from './elements'
import { Image } from './Embed/elements/media'
import Reaction from './Reaction'
import Embed from './Embed'
import AttachmentSpoiler from '@ui/shared/markdown/render/elements/AttachmentSpoiler'
import { Locale } from '@lib/Locale'
import {Util} from '@lib/Util';
import { MessageType } from '@generated/globalTypes'
import { generalStore } from '@store'
import webpCheck from '@ui/shared/webpCheck'

interface Props {
  messages: Messages_channel_messages[],
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

    const avatarUrl = !firstMessage.author.avatar.startsWith('http') ? Util.craftAvatarUrl(firstMessage.author.id, firstMessage.author.avatar) : firstMessage.author.avatar;
    return (
      <Group style={this.props.style} className="group">
          <Avatar
            url={gifCheck(avatarUrl) || DEFAULT_AVATAR}
            className="avatar"
          />

        <Messages className="messages">
            <Author
              author={firstMessage.author}
              time={firstMessage.createdAt}
              crosspost={!!(firstMessage.flags & 1 << 1)}
              referenceGuild={firstMessage.messageReference && firstMessage.messageReference.guildId}
            />

          {messages.map((message, i) => {
            switch (message.type) {
              case MessageType.Default: {
                return (
                  <ThemeProvider key={message.id} theme={this.theme(message)}>
                    <Root className="message" id={message.id}>
                      <Content className="content">
                        {message.author.discrim === '0000'
                          ? <LinkMarkdown>{message.content}</LinkMarkdown>
                          : <Markdown>{message.content}</Markdown>}
                        {message.editedAt && (
                          <Tooltip
                            placement="top"
                            overlay={Moment(message.editedAt*1000).calendar()}
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
                                if(/\.(?:mp4|webm|mov)$/.test(attachment.fileName)) {
                                  return <Video controls
                                    key={attachment.url}
                                    src={attachment.url}
                                    height={+attachment.height}
                                    width={+attachment.width}
                                  />;
                                } else {
                                    return attachment.fileName.startsWith('SPOILER_') ? (
                                    <AttachmentSpoiler
                                      key={attachment.url}
                                      src={attachment.url}
                                      height={+attachment.height}
                                      width={+attachment.width}
                                    />) : (
                                    <Image
                                      key={attachment.url}
                                      src={attachment.url}
                                      height={+attachment.height}
                                      width={+attachment.width}
                                  />)
                              }
                            } else {
                              if(/\.(?:mp3|ogg|wav|flac)$/.test(attachment.fileName)) {
                                return <Audio key={attachment.url}>
                                    <AudioMetadata>
                                      <AttachmentIcon src="https://discord.com/assets/5b0da31dc2b00717c1e35fb1f84f9b9b.svg"/>
                                      <AttachmentInner>
                                        <div><a href={attachment.url}>{attachment.fileName}</a></div>
                                        <AttachmentSize>{attachment.size} bytes</AttachmentSize>
                                      </AttachmentInner>
                                      <a href={attachment.url} style={{margin: 'auto'}}>
                                        <svg aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path fill="#4f545c" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g></svg>
                                      </a>
                                    </AudioMetadata>
                                    <AudioPlayer controls src={attachment.url}></AudioPlayer>
                                  </Audio>
                              } else {
                                return <Attachment key={attachment.url}>
                                    <AttachmentIcon
                                      src={ /\.pdf$/.test(attachment.fileName) ? 'https://discord.com/assets/f167b4196f02faf2dc2e7eb266a24275.svg' // acrobat
                                          : /\.ae/.test(attachment.fileName) ? 'https://discord.com/assets/982bd8aedd89b0607f492d1175b3b3a5.svg' // ae
                                          : /\.sketch$/.test(attachment.fileName) ? 'https://discord.com/assets/f812168e543235a62b9f6deb2b094948.svg' // sketch
                                          : /\.ai$/.test(attachment.fileName) ? 'https://discord.com/assets/03ad68e1f4d47f2671d629cfeac048ef.svg' // ai
                                          : /\.(?:rar|zip|7z|tar|tar\.gz)$/.test(attachment.fileName) ? 'https://discord.com/assets/73d212e3701483c36a4660b28ac15b62.svg' // archive
                                          : /\.(?:c\+\+|cpp|cc|c|h|hpp|mm|m|json|js|rb|rake|py|asm|fs|pyc|dtd|cgi|bat|rss|java|graphml|idb|lua|o|gml|prl|sls|conf|cmake|make|sln|vbe|cxx|wbf|vbs|r|wml|php|bash|applescript|fcgi|yaml|ex|exs|sh|ml|actionscript)$/.test(attachment.url) ? 'https://discord.com/assets/481aa700fab464f2332ca9b5f4eb6ba4.svg' // code
                                          : /\.(?:txt|rtf|doc|docx|md|pages|ppt|pptx|pptm|key|log)$/.test(attachment.fileName) ? 'https://discord.com/assets/9f358f466473586417baee7bacfba5ca.svg' // document
                                          : /\.(?:xls|xlsx|numbers|csv)$/.test(attachment.fileName) ? 'https://discord.com/assets/85f7a4063578f6e0e2c73f60bca0fcce.svg' // spreadsheet
                                          : /\.(?:html|xhtml|htm|js|xml|xls|xsd|css|styl)$/.test(attachment.fileName) ? 'https://discord.com/assets/a11e895b46cde503a094dd31641060a6.svg' // webcode
                                          : 'https://discord.com/assets/985ea67d2edab4424c62009886f12e44.svg' // unknown
                                          }/>
                                    <AttachmentInner>
                                      <div><a href={attachment.url}>{attachment.fileName}</a></div>
                                      <AttachmentSize>{attachment.size} bytes</AttachmentSize>
                                    </AttachmentInner>
                                    <a href={attachment.url} style={{margin: 'auto'}}>
                                      <svg aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path fill="#4f545c" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g></svg>
                                    </a>
                                  </Attachment>
                              }
                            }
                          }) : null}

                      {message.embeds && message.embeds.map((e, i) => (
                          <Embed key={i} {...e} />
                      ))}

                      {message.stickers && message.stickers.map((s, i) => 
                        <Tooltip
                          placement="top"
                          overlay={<React.Fragment><StickerTooltipIcon width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.20038 2.39762V5.24178C9.20038 6.10455 9.89673 6.80072 10.7597 6.80072H13.6046C13.9558 6.80072 14.1343 6.37826 13.8844 6.12835L9.87292 2.11796C9.62295 1.86806 9.20038 2.04061 9.20038 2.39762ZM10.7461 8.01794C9.22044 8.01794 7.98197 6.77947 7.98197 5.25382V2.03499H3.19561C2.53749 2.03499 1.99902 2.57346 1.99902 3.23158V12.8043C1.99902 13.4624 2.53749 14.0009 3.19561 14.0009H12.7683C13.4265 14.0009 13.9649 13.4624 13.9649 12.8043V8.01794H10.7461ZM9.80015 9C9.80015 9.99411 8.99427 10.8 8.00015 10.8C7.00604 10.8 6.20015 9.99411 6.20015 9H5.00015C5.00015 10.6569 6.3433 12 8.00015 12C9.65701 12 11.0002 10.6569 11.0002 9H9.80015Z" fill="#dcddde"/></StickerTooltipIcon> {s.name}</React.Fragment>}
                          mouseEnterDelay={.25}
                          mouseLeaveDelay={0}
                        >
                          {s.formatType === 'LOTTIE' ? <span>Lottie Sticker: {s.name}</span>
                          : <img key={i} height={160} width={160} alt={s.name+' Sticker'} src={`https://cdn.discordapp.com/stickers/${s.id}/${s.icon}.png`} draggable={false} />}
                        </Tooltip>
                      )}

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

              case MessageType.ChannelPinnedMessage: {
                const member = (
                  <Member id={message.author.id} color={message.author.color}>
                    {message.author.name}
                  </Member>
                );

                return (
                  <React.Fragment key={message.id}>
                    <Secondary.Pinned>
                      {member} {Locale.translate('frontend.messages.pinned')}
                    </Secondary.Pinned>
                    <Timestamp time={message.createdAt} />
                  </React.Fragment>
                )
              }

              case MessageType.GuildMemberJoin: {
                const member = (
                  <Member id={message.author.id} color={message.author.color}>
                    {message.author.name}
                  </Member>
                );

                return (
                  <React.Fragment key={message.id}>
                    <Secondary.Join>
                      {joinMessageBeginning(message)}{member}{joinMessageEnd(message)}
                    </Secondary.Join>
                    <Timestamp time={message.createdAt} />
                  </React.Fragment>
                )
              }

              case MessageType.UserPremiumGuildSubscription:
              case MessageType.UserPremiumGuildTier1:
              case MessageType.UserPremiumGuildTier2:
              case MessageType.UserPremiumGuildTier3: {
                const member = (
                  <Member id={message.author.id} color={message.author.color}>
                    {message.author.name}
                  </Member>
                );

                if(message.type !== 'UserPremiumGuildSubscription') {
                  return (
                    <React.Fragment key={message.id}>
                      <Secondary.Boost>
                        {member} {Locale.translate('frontend.messages.boost')} {Locale.translate('frontend.messages.boost.achieved', {GUILD: generalStore.guild.name, TIER: message.type.replace('UserPremiumGuildTier', '')})}
                      </Secondary.Boost>
                      <Timestamp time={message.createdAt} />
                    </React.Fragment>
                  )
                } else {
                  return (
                    <React.Fragment key={message.id}>
                      <Secondary.Boost>
                        {member} {Locale.translate('frontend.messages.boost')}
                      </Secondary.Boost>
                      <Timestamp time={message.createdAt} />
                    </React.Fragment>
                  )
                }
              }

              case MessageType.ChannelFollowAdd: {
                const member = (
                  <Member id={message.author.id} color={message.author.color}>
                    {message.author.name}
                  </Member>
                );

                return (
                  <React.Fragment key={message.id}>
                    <Secondary.Join>
                      {member} {Locale.translate('frontend.messages.follow', {HOOK: message.content})}
                    </Secondary.Join>
                    <Timestamp time={message.createdAt} />
                  </React.Fragment>
                )
              }

              case MessageType.GuildDiscoveryDisqualified: {
                return (
                  <React.Fragment key={message.id}>
                    <Secondary.X>
                      This server has been removed from Server Discovery because it no longer passes all the requirements. Check Server Settings for more details.
                    </Secondary.X>
                    <Timestamp time={message.createdAt} />
                  </React.Fragment>
                )
              }

              case MessageType.GuildDiscoveryRequalified: {
                return (
                  <React.Fragment key={message.id}>
                    <Secondary.Check>
                      This server is eligible for Server Discovery again and has been automatically relisted!
                    </Secondary.Check>
                    <Timestamp time={message.createdAt} />
                  </React.Fragment>
                )
              }

              case MessageType.GuildDiscoveryGracePeriodInitialWarning: {
                return (
                  <React.Fragment key={message.id}>
                    <Secondary.Warning>
                      This server has failed Discovery activity requirements for 1 week. If this server fails for 4 weeks in a row, it will be automatically removed from Discovery.
                    </Secondary.Warning>
                    <Timestamp time={message.createdAt} />
                  </React.Fragment>
                )
              }

              case MessageType.GuildDiscoveryGracePeriodFinalWarning: {
                return (
                  <React.Fragment key={message.id}>
                    <Secondary.Warning>
                      This server has failed Discovery activity requirements for 3 weeks in a row. If this server fails for 1 more week, it will be removed from Discovery.
                    </Secondary.Warning>
                    <Timestamp time={message.createdAt} />
                  </React.Fragment>
                )
              }

              case MessageType.ApplicationCommand: {
                const member =
                  <Member id={message.author.id} color={message.author.color}>
                    {message.author.name}
                  </Member>

                const command = 
                  <Command>
                    {message.content.split(':')[0].substring(1)}
                  </Command>
                
                const application = 
                  <span>
                    <ApplicationIcon src={webpCheck(`https://cdn.discordapp.com/app-icons/${message.application.id}/${message.application.icon}.webp?size=64`)}></ApplicationIcon> <ApplicationName>{message.application.name}</ApplicationName>
                  </span>

                return (
                  <React.Fragment key={message.id}>
                    <Secondary.Command>
                      {member} used {command} with {application}
                    </Secondary.Command>
                    <Timestamp time={message.createdAt} />
                    {!message.content.endsWith('> ') && 
                      <React.Fragment>
                        <CommandArgsSpine/>
                        <CommandArgs>{message.content.split(':')[0].substring(1)} {message.content.split('> ')[1]}</CommandArgs>
                      </React.Fragment>
                    }
                  </React.Fragment>
                )
              }

              default:
                return `Unknown Message Type: ${message.type}`
            }
          })}
        </Messages>
      </Group>
    )
    // }
  }
}

export default Message


// Join messages: https://github.com/DJScias/Discord-Datamining/commit/c79bf619ca341d97af219fe127efac2b31d0dde5#comments

function joinMessageBeginning(message: { createdAt: number }): string {
  const messages: string[] = [
      '',
      '',
      'Welcome, ',
      'A wild ',
      '',
      '',
      '',
      'Welcome ',
      '',
      'Everyone welcome ',
      'Glad you\'re here, ',
      'Good to see you, ',
      'Yay you made it, '
  ];


  return messages[(Number(new Date(message.createdAt))) % messages.length]
}

function joinMessageEnd(message: { createdAt: number }): string {
  const messages: string[] = [
      ' joined the party.',
      ' is here.',
      '. We hope you brought pizza.',
      ' appeared.',
      ' just landed.',
      ' just slid into the server.',
      ' just showed up!',
      '. Say hi!',
      ' hopped into the server.',
      '!',
      '.',
      '.',
      '!'
  ];


  return messages[(Number(new Date(message.createdAt))) % messages.length]
}
