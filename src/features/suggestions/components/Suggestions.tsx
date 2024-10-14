import { useEffect } from 'react';
import { useGetAllUsersQuery } from '../services/suggestion.service';
import '../scss/Suggestions.scss';
import { useSendFriendRequestMutation } from '../../profile/services/friend.service';

const Suggestions = () => {
  const { data, error, isLoading } = useGetAllUsersQuery({ page: 1 });
  const [sendFriendRequest] = useSendFriendRequestMutation();

  useEffect(() => {
    if (data) {
      console.log("Datos del backend:", data);
    }

    if (error) {
      console.error("Error al cargar los datos:", error);
    }
  }, [data, error]);

  const handleSendFriendRequest = (receiverId: string) => {
    sendFriendRequest({ receiverId })
      .unwrap()
      .then((response) => {
        console.log("Solicitud enviada:", response);
      })
      .catch((error) => {
        console.error("Error al enviar solicitud:", error);
      });
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="suggestions">
      <h2 className="suggestions__title">Recomendaciones</h2>
      <ul className="suggestions__list">
        {data?.users.map((user: any, index: number) => (
          <li key={user.id || index} className="suggestions__item">
            <img src={user.profilePicture} alt={user.name} className="suggestions__image" />
            <div className="suggestions__info">
              <p className="suggestions__name">{user.name}</p>
              <button 
                className="suggestions__button" 
                onClick={() => handleSendFriendRequest(user.id)}
              >
                Enviar solicitud
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;
