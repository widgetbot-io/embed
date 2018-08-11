import styled from './ThemeContext'

export const Image = styled('img')`
  background-image: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.1) 25%,
      rgba(255, 255, 255, 0.1) 25%,
      rgba(255, 255, 255, 0.1) 75%,
      rgba(0, 0, 0, 0.1) 75%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.1) 25%,
      rgba(255, 255, 255, 0.1) 25%,
      rgba(255, 255, 255, 0.1) 75%,
      rgba(0, 0, 0, 0.1) 75%,
      rgba(0, 0, 0, 0.1) 100%
    );
  background-size: 50px 50px;
  background-position: 0 0, 25px 25px;

  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 3px;
  max-width: 70vw;
  max-height: 70vh;
  user-select: none;
`

export const OpenImage = styled('a')`
  color: #fff;
  line-height: 30px;
  opacity: 0.5;
  transition: opacity 0.15s ease;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  user-select: none;

  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
`
