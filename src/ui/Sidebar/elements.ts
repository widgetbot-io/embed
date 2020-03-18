import styled, { css } from '@lib/emotion'
import focusable from "@ui/shared/focusable";

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

  ${({ visible, theme }) =>
    visible && !theme.singleChannel
      ? css`
          @media (max-width: 520px) {
            box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2),
              0px 16px 24px 2px rgba(0, 0, 0, 0.14),
              0px 6px 30px 5px rgba(0, 0, 0, 0.12);
          }
          @media screen and (max-width: 520px) {
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
`;

export const Close = styled('button')`
    @media screen and (max-width: 520px) {
        position: absolute;
          right: 0;
          height: 30px;
          width: 30px;
          margin: auto 4px;
        
          background: ${({ theme }) =>
            `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='${encodeURIComponent(
                theme.colors.primary
            )}' viewBox='0 0 44 44'%3e%3cpath d='M38.8 0L44 5.2 5.2 44 0 38.8 38.8 0z'/%3e%3cpath d='M5.2 0L44 38.8 38.8 44 0 5.2 5.2 0z'/%3e%3c/svg%3e")`};
          background-size: 40%;
          background-position: 50% 50%;
          background-repeat: no-repeat;
          opacity: 0.5;
        
          border: none;
          outline: none;
          cursor: pointer;
          transition: background-color 0.1s ease;

          ${({theme}) => theme.singleChannel ? 'display: none' : null};
        
          &:hover,
          &:focus {
            background-color: ${({ theme }) =>
            theme.colors._primary.fade(0.8).string()};
          }
        
          &,
          &::after {
            border-radius: 50%;
          }
        
          ${focusable};
    }
`;
