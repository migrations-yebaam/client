import { api } from "../../../store/api";
import { IImageResponse } from "../interfaces/image.interface";

// Define el servicio para consumir las APIs de imágenes
export const imagesApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Ruta para subir imagen de perfil
    uploadProfileImage: build.mutation<IImageResponse, { image: string }>({
      query: ({ image }) => ({
        url: `/images/profile`,
        method: 'POST',
        body: { image },
      }),

    }),
    // Ruta para subir imagen de fondo
    uploadBackgroundImage: build.mutation<IImageResponse, { image: string }>({
      query: ({ image }) => ({
        url: `/images/background`,
        method: 'POST',
        body: { image },
      }),
    }),
    // Ruta para obtener imágenes del usuario
    getUserImages: build.query<IImageResponse, { userId: string }>({
      query: ({ userId }) => ({
        url: `/images/${userId}`,
        method: 'GET',
      }),
    }),
    // Ruta para eliminar imagen de perfil
    deleteProfileImage: build.mutation<IImageResponse, { imageId: string }>({
      query: ({ imageId }) => ({
        url: `/images/${imageId}`,
        method: 'DELETE',
      }),
    }),
    // Ruta para eliminar imagen de fondo
    deleteBackgroundImage: build.mutation<IImageResponse, { bgImageId: string }>({
      query: ({ bgImageId }) => ({
        url: `/images/background/${bgImageId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

// Exportar los hooks para usar en el frontend
export const {
  useUploadProfileImageMutation,
  useUploadBackgroundImageMutation,
  useGetUserImagesQuery,
  useDeleteProfileImageMutation,
  useDeleteBackgroundImageMutation
} = imagesApi;
