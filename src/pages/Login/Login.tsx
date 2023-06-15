import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/userAPI';
import LoadingMessage from '../components/Loading';

function Login() {
  const [name, setName] = useState('');
  const [butonStatus, setButtonStatus] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setName(value);
    setButtonStatus(value.length < 3);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  const handleClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      await createUser({ name });
      navigate('/Search');
    } catch (error) {
      console.log('Erro ao salvar o nome:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="name">Nome:</label>
      <input
        id="name"
        type="text"
        data-testid="login-name-input"
        value={ name }
        onChange={ handleChange }
      />
      {isLoading ? (
        <LoadingMessage />
      ) : (
        <button
          type="submit"
          data-testid="login-submit-button"
          disabled={ butonStatus }
          onClick={ handleClick }
        >
          Entrar

        </button>
      )}

    </form>
  );
}

export default Login;
