import styled from 'styled-components';

export const Container = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5rem auto;

  a {
    color: ${({ theme }) => theme.darkTheme.colors.primary};
    padding: 0.5rem 0.5rem;
    text-decoration: none;

    font-size: 1.3rem;

    transition: all 0.2s;

    &:hover {
      color: rgba(60, 140, 220, 0.8);
      background: rgba(255, 255, 255, 0.1);
      font-size: 1.25rem;
    }
  }
`;
export const PrevLink = styled.div``;

export const NextLink = styled.div`
  margin-left: auto;
`;
