import styled, { css } from '@lib/emotion'

interface Props {
  visible: boolean
}

export const Root = styled('div')<Props>`
  position: absolute;
  z-index: 9;
  background-color: ${({ theme }) =>
    theme.colors._background.darken(0.15).string()};
  width: 200px;
  height: 100%;
  flex-shrink: 0;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  will-change: transform;
  overflow: hidden;

  & > div > div:nth-child(1) {
    padding-bottom: 10px;
  }

  ${({ visible }) =>
    visible
      ? css`
          @media (max-width: 520px) {
            box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2),
              0px 16px 24px 2px rgba(0, 0, 0, 0.14),
              0px 6px 30px 5px rgba(0, 0, 0, 0.12);
          }
        `
      : css`
          transform: translateX(-250px);
        `};

  @media (max-width: 400px), (max-height: 340px) {
    width: 180px;
  }

  @media (max-width: 210px) {
    width: 150px;
  }

  @media (max-width: 170px) {
    width: 150px;
  }
`
