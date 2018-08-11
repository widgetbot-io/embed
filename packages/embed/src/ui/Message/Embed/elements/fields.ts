import styled, { css } from '../ThemeContext'

interface Props {
  inline: boolean
}

export const Fields = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 4px;
`

export const Field = styled('div')<Props>`
  flex: 0;
  /* padding-top: 10px; */
  min-width: 100%;
  max-width: 506px;
  ${({ inline }) =>
    inline
      ? css`
          flex: 1;
          min-width: 150px;
          flex-basis: auto;
        `
      : null};
`

export const FieldName = styled('div')`
  font-size: 14px;
  margin-bottom: 4px;
  font-weight: 500;
  color: hsla(0, 0%, 100%, 1);
`

export const FieldValue = styled('div')`
  font-size: 14px;
  font-weight: 400;
`
