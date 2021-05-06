import styled from 'styled-components';

export const MenuContainer = styled.section`
  position: fixed;

  top: 0;
  left: 0;
  right: 0;

  z-index: 100;

  padding: 0 8rem;
  height: 7rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.darkTheme.colors.background};

  border-bottom: 1px solid ${({ theme }) => theme.darkTheme.colors.border};

  img {
    width: 12rem;
  }

  ul {
    li {
      display: inline-flex;

      height: 4rem;
      width: 6rem;

      margin-left: 0.325rem;

      border-radius: 0.4rem;

      font-size: 1rem;
      font-weight: 500;

      &:first-of-type {
        background: ${({ theme }) => theme.darkTheme.colors.header};

        font-size: 1.3rem;
        font-weight: 600;
      }

      transition: all 0.2s;

      &:hover {
        filter: brightness(1.35);
        background: ${({ theme }) => theme.darkTheme.colors.onFocus};
      }

      a {
        display: inline-flex;
        align-items: center;
        justify-content: center;

        height: 100%;
        width: 100%;

        text-decoration: none;
        color: ${({ theme }) => theme.darkTheme.colors.primary};
      }
    }
  }
`;

export const MenuNav = styled.nav``;
