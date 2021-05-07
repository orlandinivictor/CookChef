import styled from 'styled-components';

export const AllPostsLink = styled.a`
  display: block;
  text-align: center;
  margin: 3rem 0;
`;

export const AllRecipes = styled.div`
  margin: 12rem 0;

  h2 {
    color: ${({ theme }) => theme.darkTheme.colors.primary};
  }
`;
