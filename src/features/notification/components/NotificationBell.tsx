import { useAppSelector } from "../../../store/store";

const NotificationBell = () => {
  const notification = useAppSelector((state) => state.notification);  // Accede al estado de las notificaciones

  return (
    <div>
      {notification.hasUnreadNotification ? (
        <span className="notification-indicator">🔔 Tienes nuevas notificaciones</span>
      ) : (
        <span>🔔 No hay notificaciones</span>
      )}
    </div>
  );
};

export default NotificationBell;
