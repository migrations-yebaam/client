import { io, Socket } from 'socket.io-client';

export let socket: Socket;

class SocketService {
  setupSocketConnection() {
    socket = io(import.meta.env.VITE_BASE_ENDPOINT, {
      transports: ['websocket'],
      secure: true
    });
    this.socketConnectionEvents();
  }

  socketConnectionEvents() {
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('disconnect', (reason: Socket.DisconnectReason) => {
      console.log(`Reason: ${reason}`);
      socket.connect();
    });

    socket.on('connect_error', (error: Error) => {
      console.log(`${error}`);
      socket.connect();
    });
  }

  userConnected(userId: string, username: string) {
    socket.emit('userConnected', { userId, username });
  }

  onConnectedUsersUpdate(callback: (users: { uId: string; username: string; isOnline: boolean }[]) => void) {
    socket.on('connectedUsers', callback);
  }

  sendFriendRequest(senderId: string, receiverId: string) {
    socket.emit('sendFriendRequest', { senderId, receiverId });
  }

  onFriendRequestReceived(callback: (data: any) => void) {
    socket.on('friendRequestReceived', callback);
  }

  disconnect() {
    socket.disconnect();
  }
}

export const socketService = new SocketService();
