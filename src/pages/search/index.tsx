import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingMessage from '../components/Loading';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import { AlbumType } from '../../types';
import Header from '../components/Header';

function Search() {
  const [name, setName] = useState('');
  const [butonStatus, setButtonStatus] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [albuns, setAlbuns] = useState<AlbumType[]>([]);
  const [inputName, setInputName] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setName(value);
    setInputName(value);
    setButtonStatus(value.length < 2);
  };

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const artistName = await searchAlbumsAPI(name);
      setAlbuns(artistName);
      setInputName('');
    } catch (error) {
      console.log('Erro ao salvar o nome:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {
      isLoading ? <LoadingMessage />
        : (
          <>
            <form>
              <label htmlFor="artista"> Artista: </label>
              <input
                id="artista"
                data-testid="search-artist-input"
                type="text"
                placeholder="MC Pipoquinha"
                value={ inputName }
                onChange={ handleChange }
              />
              <button
                type="submit"
                data-testid="search-artist-button"
                disabled={ butonStatus }
                onClick={ handleClick }
              >
                Pesquisar
              </button>
            </form>
            <div>
              {
              albuns && !albuns.length ? <h2>Nenhum álbum foi encontrado</h2>
                : (
                  <div>
                    <h2>{`Resultado de álbuns de: ${name}`}</h2>
                    {
                      albuns.map((album) => (
                        <Link
                          key={ album.collectionId }
                          to={ `/album/${album.collectionId}` }
                          data-testid={ `link-to-album-${album.collectionId}` }
                        >
                          <img src={ album.artworkUrl100 } alt="Capa do álbum" />
                          <h5>{album.collectionName}</h5>
                        </Link>
                      ))
                    }
                  </div>
                )
              }
            </div>
          </>)
      }
    </div>
  );
}
export default Search;
