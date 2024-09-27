import { FC, ReactElement, useEffect } from 'react';
import { useAppSelector } from '../../store/store';
import { FriendsList } from './components/friend/FriendsList';

const ProfilePage: FC = (): ReactElement => {
  const authUser = useAppSelector((state) => state.authUser); // Usuario conectado

  // Obtener amigos del usuario
  
  // Obtener lista de usuarios en la página 1
  
  // Para enviar solicitudes de amistad
  
  // Obtener solicitudes de amistad enviadas
  const { data: sentRequests, error: sentRequestsError, isLoading: sentRequestsLoading } = useGetFriendsSendRequestsQuery();


  // Efecto para manejar las solicitudes de amistad enviadas
  useEffect(() => {
    if (sentRequests) {
      console.log('Solicitudes enviadas:', sentRequests);
    }
    if (sentRequestsError) {
      console.error('Error fetching sent friend requests:', sentRequestsError);
    }
  }, [sentRequests, sentRequestsError]);

  if (sentRequestsLoading) return <div>Cargando solicitudes enviadas...</div>;

  return (
    <div>
      <h1>Amigos de {authUser?.username}</h1>

      {/* <FriendsList userId={authUser?.id || ''} /> */}
      {/* <SuggestedFriends/>
      <SentFriendRequests /> */}
    
    </div>
  );
};

export default ProfilePage;
