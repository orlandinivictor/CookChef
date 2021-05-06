import styled from 'styled-components';

export const HomeContainer = styled.main`
  background: rgba(0, 0, 0, 0.2);
  margin-top: 10rem;

  h2 {
    color: ${({ theme }) => theme.darkTheme.colors.primary};
  }
`;
