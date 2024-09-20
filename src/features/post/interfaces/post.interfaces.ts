export interface PostData {
    author: string;
    profilePicture: string;
    content: string;
    timestamp: string;
  }
  

export const mockPosts: PostData[] = [
    {
      author: "Flower Moreno",
      profilePicture: "https://images.unsplash.com/photo-1719205153554-33eb4834cc36?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: "estoy fasinando",
      timestamp: "Hace un momento",
    },

  ];
  