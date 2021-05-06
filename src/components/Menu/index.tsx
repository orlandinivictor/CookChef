import { MenuContainer, MenuNav } from './styles';

export const Menu = () => {
  return (
    <MenuContainer>
      <img src="/logoCC.png" alt="CookChef" />

      <MenuNav>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Chef&rsquo;s</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
        </ul>
      </MenuNav>
    </MenuContainer>
  );
};
