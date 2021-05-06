import styled from 'styled-components';

export const SliderContainer = styled.div`
  width: 100%;
  height: calc(100vh - 10rem);

  margin-bottom: 1rem;

  display: flex;
  flex-direction: column;

  overflow-y: hidden;

  position: relative;

  .actual {
    width: 100%;

    img {
      width: 100%;
      filter: brightness(0.5);
    }

    span {
      position: absolute;
      left: 0;
      bottom: 10rem;

      width: 100%;
      h2 {
        font-size: 3rem;
        width: 80%;
        margin: 0 auto;
      }

      p {
        margin: 0.2rem auto 4rem;
        width: 80%;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.darkTheme.colors.primary};
      }
    }
  }
`;
