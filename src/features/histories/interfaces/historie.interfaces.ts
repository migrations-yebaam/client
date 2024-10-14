// Interface para los datos de una historia en el frontend
export interface IHistoriePayload {
    content?: string;             // Texto opcional en la historia
    mediaUrl?: string;            // URL de la imagen o video
    mediaType?: 'image' | 'video'; // Tipo de archivo (imagen o video)
  }
  
  // Interface para el estado de una historia en el frontend
  export interface IHistorieState {
    stories: IHistoriePayload[];  // Lista de historias
    isLoading: boolean;           // Indicador de estado de carga
    error?: string;               // Manejo de errores
  }
  

  export interface IStory {
    _id: string;
    content: string;
    mediaUrl: string;
    mediaType: 'image' | 'video';
    duration: number;
    user: {
      _id: string;
      firstName: string;
      profilePicture: string;
    };
  }
  