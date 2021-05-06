import styled from 'styled-components';

export const SearcherContainer = styled.form`
  div {
    display: flex;
    width: 90%;

    margin: 1rem auto;

    box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);

    border-radius: 1rem;

    input {
      width: 50%;
      background: white;
      border: 0;
      border-right: 2px solid rgba(0, 0, 0, 0.1);

      padding: 1rem;
      font-size: 1.4rem;

      &:first-of-type {
        border-radius: 1rem 0 0 1rem;
        width: 90%;
      }
    }

    button {
      border: none;
      padding: 0 2.4rem;

      background: ${({ theme }) => theme.darkTheme.colors.header};

      color: ${({ theme }) => theme.darkTheme.colors.primary};

      border-radius: 0 1rem 1rem 0;

      display: flex;
      align-items: center;

      transition: all 0.2s;

      h6 {
        font-size: 1.3rem;
        margin-left: 0.8rem;
      }

      &:hover {
        filter: brightness(1.35);
        background: ${({ theme }) => theme.darkTheme.colors.onFocus};
      }
    }
  }
`;
