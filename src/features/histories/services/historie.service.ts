import { IResponse } from '../../../shared/shared.interface';
import { api } from '../../../store/api';
import { IHistoriePayload, IStory } from '../interfaces/historie.interfaces';

export const historieApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Endpoint para crear una nueva historia
    createHistorie: build.mutation<IResponse, IHistoriePayload>({
      query(body: IHistoriePayload) {
        return {
          url: '/create-historie',
          method: 'POST',
          body,
        };
      },
    }),

    // Endpoint para obtener todas las historias del usuario autenticado
    getUserHistories: build.query<IResponse, void>({
      query: () => ({
        url: '/user/histories',
        method: 'GET',
      }),
    }),

    // Endpoint para obtener todas las historias disponibles
    getAllHistories: build.query<IResponse, void>({
      query: () => ({
        url: '/histories',
        method: 'GET',
      }),
    }),

    // Endpoint para obtener una historia específica por su ID
    getHistorieById: build.query<IResponse, string>({
      query: (historieId) => ({
        url: `/histories/${historieId}`,
        method: 'GET',
      }),
    }),

    // Endpoint para eliminar una historia por ID
    deleteHistorie: build.mutation<IResponse, string>({
      query: (id) => ({
        url: `/histories/${id}`,
        method: 'DELETE',
      }),
    }),

    // Endpoint para actualizar una historia por ID
    updateHistorie: build.mutation<IResponse, { id: string; body: IHistoriePayload }>({
      query: ({ id, body }) => ({
        url: `/histories/${id}`,
        method: 'PUT',
        body,
      }),
    }),
  }),
});

export const {
  useCreateHistorieMutation,
  useGetUserHistoriesQuery,
  useGetAllHistoriesQuery,
  useGetHistorieByIdQuery,
  useDeleteHistorieMutation,
  useUpdateHistorieMutation,
} = historieApi;
