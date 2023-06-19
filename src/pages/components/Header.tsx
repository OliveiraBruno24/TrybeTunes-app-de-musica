import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div data-testid="header-component">
      <nav>
        <NavLink to="/search" data-testid="link-to-search">
          Pesquisar
        </NavLink>

        <NavLink to="favorites" data-testid="link-to-favorites">
          Favoritos
        </NavLink>

        <NavLink to="profile" data-testid="link-to-profile">
          Perfil
        </NavLink>

      </nav>
    </div>
  );
}

export default Header;
