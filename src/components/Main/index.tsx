import { Searcher } from '../Searcher';
import { SliderContainer } from './styles';

type MainProps = {
  count: number;
};

export const Main = ({ count }: MainProps) => {
  return (
    <SliderContainer>
      <div className="actual">
        <img src="/bolodecenoura.jpg" alt="" />
        <span>
          <h2>Procure em uma de nossas {count} receitas.</h2>
          <p>
            Fique à vontade para pesquisar e compartilhar suas inspirações na
            cozinha! Temos receitas, fotos, vídeos que irão satisfazer o seu
            paladar.
          </p>
          <Searcher />
        </span>
      </div>
    </SliderContainer>
  );
};
