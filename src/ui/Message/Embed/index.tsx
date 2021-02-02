import {Twemoji} from '@ui/shared/Emoji/emoji'
import {parseAllowLinks, parseEmbedTitle} from '@ui/shared/markdown/render'
import {ThemeProvider} from 'emotion-theming'
import * as Moment from 'moment'
import * as React from 'react'

import {Content, Root, Title, Wrapper, Provider, VideoIframe, Gifv} from './elements'
import {Author, AuthorIcon, AuthorName} from './elements/author'
import {Description} from './elements/description'
import {Field, FieldName, Fields, FieldValue} from './elements/fields'
import {Footer, FooterIcon, FooterText} from './elements/footer'
import {Image} from './elements/media'
import {Thumbnail} from './elements/thumbnail'
import {Video} from '@ui/Message/elements'
import {Embed_author, Embed_footer, Embed_image, Embed_thumbnail, Message_embeds} from "@generated";

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

const Link = ({children, ...props}) => (
    <a target="_blank" rel="noreferrer" {...props}>
        {children}
    </a>
)

const EmbedTitle = ({title, url}) =>
    title ? (
        url ? (
            <Title>
                <Link href={url}>{parseEmojis(parseEmbedTitle(title))}</Link>
            </Title>
        ) : (
            <Title>{parseEmojis(parseEmbedTitle(title))}</Title>
        )
    ) : null

const EmbedProvider = ({name, url}) =>
    name ? (
        url ? (
            <Provider>
                <Link href={url}>{parseEmojis(parseEmbedTitle(name))}</Link>
            </Provider>
        ) : (
            <Provider>{parseEmojis(parseEmbedTitle(name))}</Provider>
        )
    ) : null

const EmbedDescription = ({content}) =>
    content ? (
        <Description>{parseEmojis(parseAllowLinks(content))}</Description>
    ) : null

const EmbedVideo = ({url, height, width}) =>
    url ? (
        <VideoIframe src={url} height={height} width={width}/>
    ) : null

const EmbedAuthor = ({name, url, icon}: Embed_author) => {
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

    const authorIcon = icon ? <AuthorIcon src={icon}/> : null

    return (
        <Author>
            {authorIcon}
            {parseEmojis(authorName)}
        </Author>
    )
}

const EmbedField = ({name, value, inline}) => {
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

const EmbedThumbnail = ({url, height, width, type}: { height: number | null, width: number | null, url: string | null, type: string }) =>
    type === 'video' ? null :
        url ? (
            <Thumbnail
                src={url}
                height={height}
                width={width}
                maxWidth={/^Article|Image$/.test(type) ? 400 : 80}
                maxHeight={/^Article|Image$/.test(type) ? 300 : 80}
            />
        ) : null

const EmbedImage = ({url, height, width}: Embed_image) =>
    url ? (
        <span>
      <Thumbnail
          rich
          src={url}
          height={height}
          width={width}
          maxWidth={400}
          maxHeight={300}
      />
    </span>
    ) : null

const EmbedFooter = ({timestamp, text, url}: { timestamp: number, url: string | null, text: string }) => {
    if (!text && !timestamp) {
        return null
    }

    // pass null, since undefined will make moment(...) return the current date/time
    let time = Moment(timestamp ? timestamp * 1000 : null)

    const footerText = [text, time.isValid() ? time.calendar() : null]
        .filter(Boolean)
        .join(' • ')

    const footerIcon =
        text && url ? <FooterIcon src={url}/> : null

    return (
        <Footer>
            {footerIcon}
            <FooterText>{parseEmojis(footerText)}</FooterText>
        </Footer>
    )
}

const EmbedFields = ({fields}) => {
    if (!fields) {
        return null
    }

    return <Fields>{fields.map((f, i) => <EmbedField key={i} {...f} />)}</Fields>
}

const Embed = ({
   color,
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
}: Message_embeds) =>
    embed.type === 'GifV' ? (
        <Gifv autoPlay loop muted
              src={video.url}
              width={+video.width}
              height={+video.height}
        />
    ) : embed.type === 'Image' ? (
        <Image
            src={thumbnail.url}
            width={+thumbnail.width}
            height={+thumbnail.height}
        />
    ) : embed.type === 'Video' && !thumbnail ? (
        <Video controls
               src={video.url}
               width={+video.width}
               height={+video.height}
        />
    ) : (
        <ThemeProvider
            theme={theme => ({
                ...theme,
                embed
            })}
        >
            <Root>
                <Wrapper barColor={color}>
                    <Content>
                        <div>
                            <EmbedProvider {...provider}/>
                            <EmbedAuthor {...author} />
                            <EmbedTitle title={title} url={url}/>
                            {embed.type === 'Video' ?
                                <EmbedVideo {...video} /> :
                                <EmbedDescription content={description}/>}
                            <EmbedFields fields={fields}/>
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
