import styled from 'styled-components';

export const ChefsContainer = styled.div`
  margin: 2rem 10rem 0;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 8rem 0 2rem;

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

export const ChefsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
  gap: 3rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.darkTheme.colors.primary};
  box-shadow: 0 2px 5px rgba(255, 255, 255, 0.4);

  a {
    transition: filter 0.3s;

    img {
      width: 100%;
    }

    &:hover {
      filter: brightness(0.65);
    }
  }

  h3 {
    text-align: center;
  }

  .details {
    padding: 1rem 1rem 0;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin: 2rem 0 0.5rem;

      font-size: 0.8rem;
      color: ${({ theme }) => theme.darkTheme.colors.border};
    }
  }
`;
