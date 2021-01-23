import styled, { css } from '../ThemeContext'

export const Root = styled('div')`
  position: relative;
  margin-top: 5px;
  max-width: 520px;
  display: flex;
  color: ${({ theme }) => theme.colors._primary.fade(0.3).string()};
`
interface WrapperProps {
  barColor: number
}
export const Wrapper = styled('div')<WrapperProps>`
  padding: 8px 10px;
  border-radius: 0 3px 3px 0;
  position: relative;
  max-width: 520px;
  display: inline-grid;
  padding: 8px 16px 16px;
  background-color: rgba(0, 0, 0, 0.15);
  overflow: hidden;
  border-left: 4px solid;
  border-radius: 4px;
  border-color: ${({ barColor }) =>
    barColor
      ? '#'+barColor.toString(16).padStart(6, '0')
      : `rgba(0, 0, 0, .4)`};
`

interface ContentProps {
  type: string
}
export const Content = styled('div')<ContentProps>`
  width: 100%;
  display: flex;
  overflow: hidden;
  ${({ type }) =>
    /^article|image$/.test(type)
      ? css`
          flex-direction: column;
        `
      : null};

  & > div {
    display: flex;
    flex-direction: column;
  }

  & code.inline {
    font-size: 85%;
  }
`

export const Title = styled('div')`
  color: hsla(0, 0%, 100%, 1);
  display: inline-block;
  font-weight: 600;
  font-size: 1rem;
  margin-top: 8px;
`

export const Provider = styled('div')`
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 400;
  grid-column: 1/1;
  margin-top: 8px;
  & > a {
    color: inherit;
  }
}
`

export const VideoIframe = styled('iframe')`
  border: none;
  margin-top: 8px;
  max-height: 225px;
  width: 400px;
  max-width: 100%;
`

export const Gifv = styled('video')`
  max-height: 300px;
  width: 400px;
  max-width: 100%;
`