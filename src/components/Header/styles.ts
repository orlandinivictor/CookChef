import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: absolute;
  top: 7rem;
  left: 0;
  right: 0;

  height: 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.darkTheme.colors.border};

  background: ${({ theme }) => theme.darkTheme.colors.header};
  color: ${({ theme }) => theme.darkTheme.colors.primary};

  padding: 1rem 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 1rem;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.darkTheme.colors.primary};
      padding-right: 1rem;

      display: flex;
      align-items: center;

      border-radius: 1rem;

      transition: all 0.2s;

      span {
        margin-right: 0.5rem;
        border: 1px solid ${({ theme }) => theme.darkTheme.colors.border};
        border-radius: 2rem;
        font-size: 0;
        padding: 0.35rem;
      }

      &:hover {
        background: ${({ theme }) => theme.darkTheme.colors.onFocus};
        color: ${({ theme }) => theme.darkTheme.colors.onFocusColor};
      }
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;

  .actions {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 0.1rem;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.darkTheme.colors.primary};
      padding-right: 1rem;

      display: flex;
      align-items: center;

      border-radius: 1rem;

      transition: all 0.2s;

      span {
        margin-right: 0rem;
        border-radius: 2rem;
        font-size: 0;
        padding: 0.35rem;
      }

      &:hover {
        background: ${({ theme }) => theme.darkTheme.colors.onFocus};
        color: ${({ theme }) => theme.darkTheme.colors.onFocusColor};
      }
    }
  }
  .socials {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 0.1rem;

    border-left: 1px solid ${({ theme }) => theme.darkTheme.colors.border};
    padding-left: 1rem;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.darkTheme.colors.primary};
      margin: 0.1rem;
      display: flex;
      align-items: center;

      border-radius: 1rem;

      transition: all 0.2s;

      span {
        margin-right: 0rem;
        border-radius: 2rem;
        font-size: 0;
        border: 1px solid ${({ theme }) => theme.darkTheme.colors.border};
        padding: 0.35rem;
      }

      &:hover {
        background: ${({ theme }) => theme.darkTheme.colors.onFocus};
        color: ${({ theme }) => theme.darkTheme.colors.onFocusColor};
      }
    }
  }
`;
