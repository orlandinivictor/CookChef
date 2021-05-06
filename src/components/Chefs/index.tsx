import { ChefsContainer, Header, ChefsContent, Card } from './styles';

export const Chefs = () => {
  return (
    <ChefsContainer>
      <Header>
        <h2>Conheça nossos chefs</h2>

        <a href="">ver todos...</a>
      </Header>

      <ChefsContent>
        <Card>
          <a href="">
            <img src="/testCard.jpeg" alt="Chef" />
          </a>
          <div className="details">
            <h3>Victor Orlandini</h3>
            <div>
              <span>Receitas: 4</span>
              <span>Membro desde: 04/05/2021</span>
            </div>
          </div>
        </Card>
        <Card>
          <a href="">
            <img src="/testCard.jpeg" alt="Chef" />
          </a>
          <div className="details">
            <h3>Victor Orlandini</h3>
            <div>
              <span>Receitas: 4</span>
              <span>Membro desde: 04/05/2021</span>
            </div>
          </div>
        </Card>
        <Card>
          <a href="">
            <img src="/testCard.jpeg" alt="Chef" />
          </a>
          <div className="details">
            <h3>Victor Orlandini</h3>
            <div>
              <span>Receitas: 4</span>
              <span>Membro desde: 04/05/2021</span>
            </div>
          </div>
        </Card>
        <Card>
          <a href="">
            <img src="/testCard.jpeg" alt="Chef" />
          </a>
          <div className="details">
            <h3>Victor Orlandini</h3>
            <div>
              <span>Receitas: 4</span>
              <span>Membro desde: 04/05/2021</span>
            </div>
          </div>
        </Card>
      </ChefsContent>
    </ChefsContainer>
  );
};
