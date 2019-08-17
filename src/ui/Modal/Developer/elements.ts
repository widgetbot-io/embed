import withProps from 'recompose/withProps'
import Button from '@ui/shared/button'
import styled from '@lib/emotion'

import { Content } from '../elements'

export const Card = styled(Content)`
  padding: 18px 40px;
  padding-left: 15px;
`

export const Root = styled('div')`
  display: flex;

  @media (max-width: 550px) {
    flex-direction: column;
    text-align: center;
  }
`

export const Mugshot = styled('img')`
  height: 130px;
  width: 130px;
  padding: 10px;
  -webkit-user-drag: none;

  @media (max-width: 550px) {
    margin: 0 auto;
    margin-bottom: 5px;
  }

  @media (max-width: 400px) {
    height: 100px;
    width: 100px;
  }

  @media (min-width: 551px) {
    padding-right: 25px;
    margin-right: 20px;
    width: 145px;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
  }
`

export const Bio = styled('div')`
  max-width: 300px;
  white-space: pre-line;
`

export const Heading = styled('h3')`
  margin: 0;
  font-weight: 600;
  margin-bottom: 15px;
`

export const Description = styled('span')`
  display: block;
  font-size: 14px;
  margin-bottom: 12px;
`

const ButtonLink = withProps({
  variant: 'mini',
  color: 'rgba(255, 255, 255, 0.15)'
})(Button.withComponent('a') as any)

export const Chip = styled(ButtonLink)<any>`
  display: inline-block;
  text-decoration: none;
  opacity: 0.8;
  margin: 2px 0;
  margin-right: 4px;
`

interface GraphProps {
  username: string
}
export const Graph = styled('div')<GraphProps>`
  background-image: url(${({ username }) =>
    `"https://ghchart.rshah.org/${username}"`});

  display: block;
  width: 100%;
  height: 89px;
  margin-left: 10px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  cursor: pointer;

  @media (max-width: 380px), (max-height: 370px) {
    display: none;
  }
`
