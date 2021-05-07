import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.darkTheme.colors.background};

  margin-top: 10rem;
  padding: 2rem 6rem;

  color: ${({ theme }) => theme.darkTheme.colors.primary};

  display: flex;
  align-items: center;
  justify-content: space-between;

  .content {
    width: 24rem;
    height: 18rem;
    margin: 1rem 0;

    h3 {
      font-size: 1.7rem;
      margin-bottom: 0.5rem;
    }

    hr {
      width: 3.65rem;
      border: 1px solid ${({ theme }) => theme.darkTheme.colors.separator};
      box-shadow: 1px 1px 5px rgba(255, 255, 255, 0.2);
    }

    p {
      margin: 2rem 0;
      text-align: justify;
      font-size: 1.08rem;
    }

    .socials {
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        text-decoration: none;
        color: ${({ theme }) => theme.darkTheme.colors.primary};

        display: flex;
        align-items: center;

        border-radius: 2rem;

        transition: all 0.2s;

        span {
          border: 1px solid ${({ theme }) => theme.darkTheme.colors.border};
          border-radius: 2rem;
          font-size: 0;
          padding: 0.7rem;
        }

        &:hover {
          background: ${({ theme }) => theme.darkTheme.colors.onFocus};
          color: ${({ theme }) => theme.darkTheme.colors.onFocusColor};
        }
      }
    }

    ul {
      list-style: none;
      margin: 2rem 0;
      font-size: 1.3rem;

      li {
        margin-bottom: 1rem;

        a {
          color: ${({ theme }) => theme.darkTheme.colors.primary};
          padding: 0.5rem 0.5rem;
          text-decoration: none;

          transition: all 0.2s;

          &:hover {
            color: rgba(60, 140, 220, 0.8);
            background: rgba(255, 255, 255, 0.1);
            font-size: 1.35rem;
          }
        }
      }
    }

    div {
      display: flex;
      align-items: center;

      margin: 1rem 0;

      h4 {
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
      }

      img {
        width: 7rem;
        height: 5.5rem;
        object-fit: cover;

        box-shadow: 1px 1px 5px rgba(255, 255, 255, 0.4);
      }

      .details {
        display: flex;
        flex-direction: column;
        align-items: start;

        margin-left: 1rem;

        span {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-top: 0.2rem;

          strong {
            margin-left: 0.5rem;
          }
        }
      }
    }
  }
`;
