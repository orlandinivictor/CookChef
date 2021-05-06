import { HeaderContainer, Content, Actions } from './styles';
import { HiMail, HiPhone, HiLockClosed, HiOutlinePlusSm } from 'react-icons/hi';
import {
  IoLogoTwitter,
  IoLogoGoogleplus,
  IoLogoInstagram,
} from 'react-icons/io';
import {
  ImFacebook,
  ImLinkedin2,
  ImPinterest,
  ImYoutube2,
} from 'react-icons/im';
import React from 'react';

export const Header = () => {
  return (
    <HeaderContainer>
      <Content>
        <div>
          <a href="">
            <span>
              <HiMail size={16} />
            </span>
            victorcintra99@outlook.com
          </a>
        </div>
        <div>
          <a href="">
            <span>
              <HiPhone size={16} />
            </span>
            (01) 23456-7890
          </a>
        </div>
      </Content>

      <Actions>
        <div className="actions">
          <div>
            <a href="">
              <span>
                <HiOutlinePlusSm size={16} />
              </span>
              Envie sua Receita
            </a>
          </div>
          <div>
            <a href="">
              <span>
                <HiLockClosed size={16} />
              </span>
              Cadastre-se
            </a>
          </div>
        </div>

        <div className="socials">
          <div>
            <a href="">
              <span>
                <IoLogoTwitter size={12} />
              </span>
            </a>
          </div>
          <div>
            <a href="">
              <span>
                <ImFacebook size={12} />
              </span>
            </a>
          </div>
          <div>
            <a href="">
              <span>
                <ImLinkedin2 size={12} />
              </span>
            </a>
          </div>
          <div>
            <a href="">
              <span>
                <ImPinterest size={12} />
              </span>
            </a>
          </div>
          <div>
            <a href="">
              <span>
                <IoLogoInstagram size={12} />
              </span>
            </a>
          </div>
          <div>
            <a href="">
              <span>
                <IoLogoGoogleplus size={12} />
              </span>
            </a>
          </div>
          <div>
            <a href="">
              <span>
                <ImYoutube2 size={12} />
              </span>
            </a>
          </div>
        </div>
      </Actions>
    </HeaderContainer>
  );
};
