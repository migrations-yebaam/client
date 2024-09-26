import { FC, ReactElement, useEffect } from 'react';
import { useGetSuggestedFriendsQuery } from '../../services/friend.service';
import { IUserDocument } from '../../interfaces/friend.interface';
import './scss/SuggestedFriends.scss'; // Importamos el archivo SCSS

const SuggestedFriends: FC = (): ReactElement => {
  // Usamos el hook para obtener los amigos sugeridos
  const { data, error, isLoading } = useGetSuggestedFriendsQuery();

  // Mostrar los datos en la consola
  useEffect(() => {
    if (data) {
      console.log('Suggested Friends Data:', data);
    }
  }, [data]);

  if (isLoading) {
    return <div className="suggested-friends__loading">Cargando amigos sugeridos...</div>;
  }

  if (error) {
    return <div className="suggested-friends__error">Error al cargar los amigos sugeridos</div>;
  }

  return (
    <div className="suggested-friends">
      <h2 className="suggested-friends__title">Amigos sugeridos</h2>
      <div className="suggested-friends__grid">
        {data?.suggestedFriends?.map((friend: IUserDocument) => (
          <div key={friend._id} className="suggested-friends__card">
            <img
              src={friend.profilePicture}
              alt={friend.username}
              className="suggested-friends__image"
            />
            <div className="suggested-friends__info">
              <h3 className="suggested-friends__username">{friend.username}</h3>
              <p className="suggested-friends__email">{friend.email}</p>
              <button className="suggested-friends__button">Enviar solicitud de amistad</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedFriends;
