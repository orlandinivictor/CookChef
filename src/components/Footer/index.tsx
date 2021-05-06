import { FooterContainer } from './styles';

import {
  IoLogoTwitter,
  IoLogoGoogleplus,
  IoLogoInstagram,
  IoMdTime,
} from 'react-icons/io';
import {
  ImFacebook,
  ImLinkedin2,
  ImPinterest,
  ImYoutube2,
} from 'react-icons/im';

type Post = {
  id: number;
  thumbnail: string;
  title: string;
};

type FooterProps = {
  posts: Post[];
};

export const Footer = ({ posts }: FooterProps) => {
  return (
    <FooterContainer>
      <div className="content">
        <h3>Sobre nós</h3>
        <hr />
        <p>
          Somos uma empresa que foi criada com o intuíto de facilitar a vida de
          cada um de nossos usuários, afinal, não são todos que nascem com o dom
          da culinária, mas estamos aqui para possibilitar o seu desenvolvimento
          como Chef.
        </p>

        <div className="socials">
          <a href="">
            <span>
              <IoLogoTwitter size={20} />
            </span>
          </a>

          <a href="">
            <span>
              <ImFacebook size={20} />
            </span>
          </a>

          <a href="">
            <span>
              <ImLinkedin2 size={20} />
            </span>
          </a>

          <a href="">
            <span>
              <ImPinterest size={20} />
            </span>
          </a>

          <a href="">
            <span>
              <IoLogoInstagram size={20} />
            </span>
          </a>

          <a href="">
            <span>
              <IoLogoGoogleplus size={20} />
            </span>
          </a>

          <a href="">
            <span>
              <ImYoutube2 size={20} />
            </span>
          </a>
        </div>
      </div>

      <div className="content">
        <h3>Links rápidos</h3>
        <hr />

        <ul>
          <li>
            <a href="">Envie suas receitas</a>
          </li>
          <li>
            <a href="">Política de privacidade</a>
          </li>
          <li>
            <a href="">Termos & condições</a>
          </li>
        </ul>
      </div>

      <div className="content">
        <h3>Utimas receitas</h3>
        <hr />
        {posts.map((post) => (
          <div key={post.id}>
            <img src={`${post.thumbnail}`} alt={post.title} />
            <div className="details">
              <h4>{post.title}</h4>
              <span>
                <IoMdTime size={12} color="red" />{' '}
                <strong>{post.id * 10}min</strong>
              </span>
            </div>
          </div>
        ))}
      </div>
    </FooterContainer>
  );
};
