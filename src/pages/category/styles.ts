import styled from 'styled-components';

export const CategoryContainer = styled.div`
  margin: 12rem 0rem 0rem;

  h2 {
    color: ${({ theme }) => theme.darkTheme.colors.primary};
  }
`;
