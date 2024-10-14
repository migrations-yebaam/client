import { updateNotification } from "../../../shared/header/reducers/notification.reducer";
import { socket } from "../../../sockets/socket.service";
import { useAppDispatch } from "../../../store/store";

class NotificationService {
  private dispatch = useAppDispatch();  // Acceso al dispatch de Redux

  constructor() {
    this.listenForNotifications();
  }

  // Escuchar notificaciones en tiempo real
  listenForNotifications() {
    socket.on('friendRequestReceived', (data) => {
      console.log('Solicitud de amistad recibida:', data);

      // Aquí puedes actualizar el estado global de notificaciones en Redux
      this.dispatch(updateNotification({
        hasUnreadNotification: true,
        // Si tienes más información en la notificación, puedes pasarla aquí
        notificationData: data // Por ejemplo, podrías almacenar los detalles de la notificación
      }));
    });

    // Si tienes más eventos, como mensajes recibidos, podrías hacer lo mismo:
    socket.on('messageReceived', (data) => {
      console.log('Mensaje recibido:', data);

      this.dispatch(updateNotification({
        hasUnreadNotification: true,
        hasUnreadMessage: true,
        notificationData: data
      }));
    });
  }
}

export const notificationService = new NotificationService();
