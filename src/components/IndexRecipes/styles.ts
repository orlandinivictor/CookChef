import styled from 'styled-components';

export const RecipesContainer = styled.div`
  margin: 2rem 10rem 0;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 6rem 0 2rem;

  a {
    color: ${({ theme }) => theme.darkTheme.colors.primary};
    padding: 0.5rem 0.5rem;
    text-decoration: none;

    transition: all 0.2s;

    &:hover {
      color: rgba(60, 140, 220, 0.8);
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

export const Recipes = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  gap: 3rem;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.darkTheme.colors.backgroundPage};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  height: 17rem;

  a {
    display: flex;
    text-decoration: none;
    color: ${({ theme }) => theme.darkTheme.colors.primary};
    filter: brightness(0.9);
    transition: filter 0.3s;

    img {
      width: 50%;
      height: 17rem;
    }

    div {
      padding: 1rem;
      display: flex;
      flex-direction: column;

      h3 {
        max-width: 10rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      p {
        display: -webkit-box;
        -webkit-line-clamp: 8;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;

        text-align: left;

        font-size: 1rem;
        margin-top: 0.5rem;
        max-width: 10rem;
      }
    }

    &:hover {
      filter: brightness(0.5);
    }
  }
`;
