import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser } from '../../services/userAPI';
import { UserType } from '../../types';
import LoadingMessage from './Loading';

function Header() {
  const USER_INFO = {
    name: '',
    email: '',
    image: '',
    description: '',
  };

  const [user, setUser] = useState<UserType>(USER_INFO);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleName = async () => {
      const usuario = await getUser();
      setUser(usuario);
      setIsLoading(false);
    };
    handleName();
  }, []);

  return (
    <header data-testid="header-component">
      <nav>
        <NavLink to="/search" data-testid="link-to-search">
          {' Pesquisar'}
        </NavLink>

        <NavLink to="favorites" data-testid="link-to-favorites">
          {' Favoritos'}
        </NavLink>

        <NavLink to="profile" data-testid="link-to-profile">
          {' Perfil'}
        </NavLink>

      </nav>
      {isLoading
        ? (
          <div className="userResume">
            <LoadingMessage />
          </div>
        ) : (
          <div className="userResume">
            <img src={ user.image } alt="Profile icon" />
            <span data-testid="header-user-name">{ user.name }</span>
          </div>
        )}
    </header>
  );
}

export default Header;
