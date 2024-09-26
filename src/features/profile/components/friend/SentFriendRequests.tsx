import { FC, ReactElement, useEffect } from 'react';
import { useGetFriendsSendRequestsQuery } from '../../services/friend.service';
import { IUserDocument } from '../../interfaces/friend.interface';
import './scss/SentFriendRequests.scss';

const SentFriendRequests: FC = (): ReactElement => {
  // Usamos el hook para obtener las solicitudes de amistad enviadas
  const { data, error, isLoading } = useGetFriendsSendRequestsQuery();

  // Mostrar los datos en la consola
  useEffect(() => {
    if (data) {
      console.log('Sent Friend Requests:', data);
    }
  }, [data]);

  if (isLoading) {
    return <div className="sent-requests__loading">Cargando solicitudes de amistad enviadas...</div>;
  }

  if (error) {
    return <div className="sent-requests__error">Error al cargar las solicitudes de amistad enviadas</div>;
  }

  return (
    <div className="sent-requests">
      <h2 className="sent-requests__title">Solicitudes de amistad enviadas</h2>
      <div className="sent-requests__grid">
        {data?.requests?.map((request: IUserDocument) => (
          <div key={request._id} className="sent-requests__card"> {/* Asegúrate de usar una key única */}
            <img
              src={request.profilePicture}
              alt={request.username}
              className="sent-requests__image"
            />
            <div className="sent-requests__info">
              <h3 className="sent-requests__username">{request.username}</h3>
              <p className="sent-requests__email">{request.email}</p>
              <button className="sent-requests__button">Cancelar solicitud</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SentFriendRequests;
