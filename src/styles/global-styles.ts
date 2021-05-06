import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @media (max-width: 1680px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 1440px) {
    html {
      font-size: 87.5%;
    }
  }

  @media (max-width: 1367px) {
    html {
      font-size: 81.25%;
    }
  }

  @media (max-width: 1080px) {
    html {
      font-size: 75%;
    }
  }

  @media (max-width: 780px) {
    html {
      font-size: 68.75%;
    }
  }

  * {
    &::-webkit-scrollbar {
      width: 1rem;
    }

    &::-webkit-scrollbar-track {
      border-left: 1px solid ${({ theme }) => theme.darkTheme.colors.border};
      background: ${({ theme }) => theme.darkTheme.colors.background};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.darkTheme.colors.primary};

      &:hover {
        background: ${({ theme }) => theme.darkTheme.colors.onFocus};
      }
    }
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button {
    font: 600 1rem 'Raleway', sans-serif;
    background: ${({ theme }) => theme.darkTheme.colors.backgroundPage};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
    font-family: 'Noto Sans SC', sans-serif;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }
`;
