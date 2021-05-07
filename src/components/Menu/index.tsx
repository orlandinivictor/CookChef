import Link from 'next/link';

import { MenuContainer, MenuNav } from './styles';

export const Menu = () => {
  return (
    <MenuContainer>
      <img src="/logoCC.png" alt="CookChef" />

      <MenuNav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Chef&rsquo;s</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a href="">Contato</a>
            </Link>
          </li>
        </ul>
      </MenuNav>
    </MenuContainer>
  );
};
