import { Twemoji } from '@ui/shared/Emoji/emoji'
import { parseAllowLinks, parseEmbedTitle } from '@ui/shared/markdown/render'
import { ThemeProvider } from 'emotion-theming'
import * as Moment from 'moment'
import * as React from 'react'

import { Content, Root, Title, Wrapper, Provider, VideoIframe, Gifv } from './elements'
import { Author, AuthorIcon, AuthorName } from './elements/author'
import { Description } from './elements/description'
import { Field, FieldName, Fields, FieldValue } from './elements/fields'
import { Footer, FooterIcon, FooterText } from './elements/footer'
import { Image } from './elements/media'
import { Thumbnail } from './elements/thumbnail'
import { Video } from '@ui/Message/elements'

// TODO: Refactor / cleanup

const parseEmojis = text =>
  text && typeof text === 'string' ? (
    <Twemoji resolveNames>{text}</Twemoji>
  ) : text instanceof Array ? (
    text.map(
      (part, i) =>
        typeof part === 'string' ? (
          <Twemoji resolveNames key={i + part}>
            {part}
          </Twemoji>
        ) : (
          part
        )
    )
  ) : (
    text
  )

const Link = ({ children, ...props }) => (
  <a target="_blank" rel="noreferrer" {...props}>
    {children}
  </a>
)

const EmbedTitle = ({ title, url }) =>
  title ? (
    url ? (
      <Title>
        <Link href={url}>{parseEmojis(parseEmbedTitle(title))}</Link>
      </Title>
    ) : (
      <Title>{parseEmojis(parseEmbedTitle(title))}</Title>
    )
  ) : null

const EmbedProvider = ({ name, url }) =>
  name ? (
    url ? (
      <Provider>
        <Link href={url}>{parseEmojis(parseEmbedTitle(name))}</Link>
      </Provider>
    ) : (
      <Provider>{parseEmojis(parseEmbedTitle(name))}</Provider>
    )
  ) : null

const EmbedDescription = ({ content }) =>
  content ? (
    <Description>{parseEmojis(parseAllowLinks(content))}</Description>
  ) : null

const EmbedVideo = ({ url, height, width }) =>
  url ? (
    <VideoIframe src={url} height={height} width={width}></VideoIframe>
  ) : null

const EmbedAuthor = ({ name, url, proxyIconURL }) => {
  if (!name) {
    return null
  }

  let authorName
  if (name) {
    authorName = <AuthorName>{name}</AuthorName>
    if (url) {
      authorName = (
        <AuthorName>
          <Link href={url}>{name}</Link>
        </AuthorName>
      )
    }
  }

  const authorIcon = proxyIconURL ? <AuthorIcon src={proxyIconURL} /> : null

  return (
    <Author>
      {authorIcon}
      {parseEmojis(authorName)}
    </Author>
  )
}

const EmbedField = ({ name, value, inline }) => {
  if (!name && !value) {
    return null
  }

  const fieldName = name ? (
    <FieldName>{parseEmojis(parseEmbedTitle(name))}</FieldName>
  ) : null
  const fieldValue = value ? (
    <FieldValue>{parseEmojis(parseAllowLinks(value))}</FieldValue>
  ) : null

  return (
    <Field inline={inline}>
      {fieldName}
      {fieldValue}
    </Field>
  )
}

const EmbedThumbnail = ({ type, proxyURL, height, width }) =>
  type === 'video' ? null :
    proxyURL ? (
      <Thumbnail
        src={proxyURL}
        height={height}
        width={width}
        maxWidth={/^article|image$/.test(type) ? 400 : 80}
        maxHeight={/^article|image$/.test(type) ? 300 : 80}
      />
    ) : null

const EmbedImage = ({ proxyURL, height, width }) =>
  proxyURL ? (
    <span>
      <Thumbnail
        rich
        src={proxyURL}
        height={height}
        width={width}
        maxWidth={400}
        maxHeight={300}
      />
    </span>
  ) : null

const EmbedFooter = ({ timestamp, text, proxyIconURL }) => {
  if (!text && !timestamp) {
    return null
  }

  // pass null, since undefined will make moment(...) return the current date/time
  let time = Moment(timestamp !== undefined ? timestamp : null)

  const footerText = [text, time.isValid() ? time.calendar() : null]
    .filter(Boolean)
    .join(' • ')

  const footerIcon =
    text && proxyIconURL ? <FooterIcon src={proxyIconURL} /> : null

  return (
    <Footer>
      {footerIcon}
      <FooterText>{parseEmojis(footerText)}</FooterText>
    </Footer>
  )
}

const EmbedFields = ({ fields }) => {
  if (!fields) {
    return null
  }

  return <Fields>{fields.map((f, i) => <EmbedField key={i} {...f} />)}</Fields>
}

const Embed = ({
  hexColor,
  author,
  title,
  url,
  description,
  fields,
  thumbnail,
  image,
  timestamp,
  footer,
  provider,
  video,
  ...embed
}) =>
  embed.type === 'gifv' ? (
    <Gifv autoPlay loop
      src={video.proxyURL || video.url}
      width={+video.width}
      height={+video.height}
    ></Gifv>
  ) : embed.type === 'image' ? (
    <Image
      src={thumbnail.proxyURL}
      width={+thumbnail.width}
      height={+thumbnail.height}
    />
  ) : embed.type === 'video' && !thumbnail ? (
    <Video controls
      src={video.proxyURL || video.url}
      width={+video.width}
      height={+video.height}
    ></Video>
  ) : (
    <ThemeProvider
      theme={theme => ({
        ...theme,
        embed
      })}
    >
      <Root>
        <Wrapper color={hexColor}>
          <Content>
            <div>
              <EmbedProvider {...provider}/>
              <EmbedAuthor {...author} />
              <EmbedTitle title={title} url={url} />
              {embed.type === 'video' ? 
                <EmbedVideo {...video} />:
                <EmbedDescription content={description} />}
              <EmbedFields fields={fields} />
            </div>
            <EmbedThumbnail type={embed.type} {...thumbnail} />
          </Content>
          <EmbedImage {...image} />
          <EmbedFooter timestamp={timestamp} {...footer} />
        </Wrapper>
      </Root>
    </ThemeProvider>
  )

export default Embed
