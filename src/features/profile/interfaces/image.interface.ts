// interfaces/image.interface.ts
export interface IImageResponse {
    bgImageVersion: any;
    bgImageId: any;
    imgVersion: any;
    imgId: any;
    success: boolean;
    message: string;
    imageUrl?: string; // URL de la imagen si la respuesta la incluye
  }
  