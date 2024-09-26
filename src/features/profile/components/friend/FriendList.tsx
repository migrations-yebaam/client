import { FC, ReactElement } from 'react';
import { useGetFriendsListQuery } from '../../services/friend.service';

const FriendsList: FC<{ userId: string }> = ({ userId }): ReactElement => {
  const { data: friendsData, error, isLoading } = useGetFriendsListQuery(userId);

  if (isLoading) return <div>Cargando lista de amigos...</div>;
  if (error) return <div>Error al cargar la lista de amigos</div>;

  return (
    <div>
      <h2>Lista de Amigos</h2>
      <ul>
        {friendsData?.friends?.map((friendId: string) => (
          <li key={friendId}>
            Amigo con ID: {friendId}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;
