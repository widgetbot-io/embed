import styled from 'react-emotion'
import * as Modal from '@ui/Modal'
import { Tag as OriginalTag } from '@ui/Message/Author/Badges'

export const Root = styled(Modal.Content)`
    padding: 0;
    text-align: center;
    user-select: none;
    width: 250px;
    max-width: 100%;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
`

export const Inner = styled.div`
    padding: 20px;
    margin-right: auto;
    margin-left: auto;
    width: fit-content;
`

export const Avatar = styled.img`
    width: 128px;
    height: 128px;
    border-radius: 100%;
`

export const Text = styled.div`
    user-select: text;
`

export const Bold = styled.span`
    font-weight: 600;
`

export const Discrim = styled.span`
    color: hsla(0,0%,100%,.6);
`

export const UnderNick = styled.span`
    color: hsla(0,0%,100%,.6);
    font-size: 14px;
`

export const Tag = styled(OriginalTag)`
    vertical-align: bottom;
`

