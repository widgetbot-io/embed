import styled, { css } from '../ThemeContext'

export const Root = styled('div')`
  position: relative;
  margin-top: 5px;
  max-width: 520px;
  display: flex;
  color: ${({ theme }) => theme.colors._primary.fade(0.3).string()};
`
interface Props {
  color: number
}
export const Wrapper = styled('div')<Props>`
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
  border-color: ${({ color }) =>
    color
      ? color
      : `rgba(0, 0, 0, .4)`};
`

export const Content = styled('div')`
  width: 100%;
  display: flex;
  overflow: hidden;
  ${({ theme }) =>
    /^article|image$/.test(theme.embed.type)
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
