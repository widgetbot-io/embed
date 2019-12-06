import styled from "@lib/emotion";
import { css } from "emotion";
import focusable from "@ui/shared/focusable";

interface Props {
  visible: boolean
}

export const Root = styled('div')<Props>`
  z-index: 10;
`;

export const Close = styled('button')`
    @media screen and (max-width: 520px) {
        position: absolute;
          right: 0;
          height: 30px;
          width: 30px;
          margin: 4px;
        
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
