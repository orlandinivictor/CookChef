import styled from 'styled-components';

export const RecipesContainer = styled.div`
  margin: 12rem 10rem 0rem;

  img {
    width: 100%;
    height: 25rem;
    object-fit: cover;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  }

  div {
    margin: 2rem;
    color: ${({ theme }) => theme.darkTheme.colors.primary};
    font-size: 1.3rem;

    hr {
      margin: 1rem 0;
    }

    h1 {
      font-size: 2.5rem;
    }

    p {
      margin-top: 0.5rem;

      strong {
        line-height: 4rem;
        font-size: 1.4rem;
      }

      em {
        line-height: 2rem;
        font-size: 1.35rem;
      }
    }

    ul,
    ol {
      margin-left: 3rem;
    }
  }
`;
