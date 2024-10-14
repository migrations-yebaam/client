import { useEffect, useState } from 'react';
import { socketService } from './sockets/socket.service';
import { useAppSelector } from './store/store';
import './index.scss'; // Archivo de estilos SCSS

const ConnectedUsersComponent = () => {
  const [connectedUsers, setConnectedUsers] = useState<{ uId: string; username: string; isOnline: boolean }[]>([]);
  const authUser = useAppSelector((state) => state.authUser); // Usando Redux para obtener el usuario autenticado

  useEffect(() => {
    // Iniciar la conexión cuando el componente se monta
    socketService.setupSocketConnection();

    // Enviar el evento de usuario conectado
    if (authUser) {
      socketService.userConnected(authUser.uId, authUser.username);
    }

    // Escuchar las actualizaciones de los usuarios conectados
    socketService.onConnectedUsersUpdate((users) => {
      // Filtrar al usuario autenticado y mapear la estructura de los datos
      const filteredUsers = users
        .filter((user) => user.uId !== authUser.uId)
        .map((user) => ({
          uId: user.uId,
          username: user.username,
          isOnline: true, // Establecer como online
        }));
      setConnectedUsers(filteredUsers);
    });

    // Desconectar el socket cuando el componente se desmonte
    return () => {
      socketService.disconnect();
    };
  }, [authUser]);

  return (
    <div className="connected-users">
      <h2>Usuarios Conectados</h2>
      <ul>
        {connectedUsers.map((user) => (
          <li key={user.uId}>
            <span className={`status-icon ${user.isOnline ? 'online' : 'offline'}`}></span>
            {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConnectedUsersComponent;
