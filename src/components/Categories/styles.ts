import styled from 'styled-components';

export const CategoriesContainer = styled.div`
  h2 {
    margin: 6rem 10rem 1rem;
  }
`;

export const CategoriesContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.darkTheme.colors.primary};

    border-radius: 4rem;

    &:hover {
      color: ${({ theme }) => theme.darkTheme.colors.onFocusCategorie};
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, 0.7);

    width: 8rem;
    padding: 3rem 3rem;

    border-radius: 4rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .categorie {
    width: 8rem;
    height: 8rem;
    border-radius: 4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.darkTheme.colors.primary};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    margin: 0.5rem;
    padding: 4rem;

    font-size: 1.7rem;
    text-align: justify;

    transition: all 0.2s;

    &:hover {
      filter: brightness(1.5);
    }
  }
`;
