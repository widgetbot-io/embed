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
  Video,
  Attachment,
  AttachmentIcon,
  AttachmentInner,
  AttachmentSize,
  Audio,
  AudioMetadata,
  AudioPlayer
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
                                if(/\.(?:mp4|webm|mov)$/.test(attachment.name)) {
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
                            } else {
                              if(/\.(?:mp3|ogg|wav|flac)$/.test(attachment.name)) {
                                return <Audio>
                                    <AudioMetadata>
                                      <AttachmentIcon src="https://discordapp.com/assets/5b0da31dc2b00717c1e35fb1f84f9b9b.svg"/>
                                      <AttachmentInner>
                                        <div><a href={attachment.url}>{attachment.name}</a></div>
                                        <AttachmentSize>{attachment.size} bytes</AttachmentSize>
                                      </AttachmentInner>
                                      <a href={attachment.url} style={{margin: 'auto'}}>
                                        <svg aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path fill="#4f545c" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g></svg>
                                      </a>
                                    </AudioMetadata>
                                    <AudioPlayer controls src={attachment.url}></AudioPlayer>
                                  </Audio>
                              } else {
                                return <Attachment>
                                    <AttachmentIcon 
                                      src={ /\.pdf$/.test(attachment.name) ? 'https://discordapp.com/assets/f167b4196f02faf2dc2e7eb266a24275.svg' // acrobat
                                          : /\.ae/.test(attachment.name) ? 'https://canary.discordapp.com/assets/982bd8aedd89b0607f492d1175b3b3a5.svg' // ae
                                          : /\.sketch$/.test(attachment.name) ? 'https://canary.discordapp.com/assets/f812168e543235a62b9f6deb2b094948.svg' // sketch
                                          : /\.ai$/.test(attachment.name) ? 'https://canary.discordapp.com/assets/03ad68e1f4d47f2671d629cfeac048ef.svg' // ai
                                          : /\.(?:rar|zip|7z|tar|tar\.gz)$/.test(attachment.name) ? 'https://canary.discordapp.com/assets/73d212e3701483c36a4660b28ac15b62.svg' // archive
                                          : /\.(?:c\+\+|cpp|cc|c|h|hpp|mm|m|json|js|rb|rake|py|asm|fs|pyc|dtd|cgi|bat|rss|java|graphml|idb|lua|o|gml|prl|sls|conf|cmake|make|sln|vbe|cxx|wbf|vbs|r|wml|php|bash|applescript|fcgi|yaml|ex|exs|sh|ml|actionscript)$/.test(attachment.url) ? 'https://canary.discordapp.com/assets/481aa700fab464f2332ca9b5f4eb6ba4.svg' // code
                                          : /\.(?:txt|rtf|doc|docx|md|pages|ppt|pptx|pptm|key|log)$/.test(attachment.name) ? 'https://canary.discordapp.com/assets/9f358f466473586417baee7bacfba5ca.svg' // document
                                          : /\.(?:xls|xlsx|numbers|csv)$/.test(attachment.name) ? 'https://canary.discordapp.com/assets/85f7a4063578f6e0e2c73f60bca0fcce.svg' // spreadsheet
                                          : /\.(?:html|xhtml|htm|js|xml|xls|xsd|css|styl)$/.test(attachment.name) ? 'https://canary.discordapp.com/assets/a11e895b46cde503a094dd31641060a6.svg' // webcode
                                          : 'https://discordapp.com/assets/985ea67d2edab4424c62009886f12e44.svg' // unknown
                                          }/>
                                    <AttachmentInner>
                                      <div><a href={attachment.url}>{attachment.name}</a></div>
                                      <AttachmentSize>{attachment.size} bytes</AttachmentSize>
                                    </AttachmentInner>
                                    <a href={attachment.url} style={{margin: 'auto'}}>
                                      <svg aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path fill="#4f545c" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g></svg>
                                    </a>
                                  </Attachment>
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
                        {member}{Locale.translate('frontend.messages.boost')} {Locale.translate('frontend.messages.boost.achieved', {GUILD: 'TODO guildName', TIER: String(message.tier)})}
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
