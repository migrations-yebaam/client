import { object, string, ObjectSchema } from 'yup';
import { IHistoriePayload } from '../interfaces/historie.interfaces';

const historieSchema: ObjectSchema<IHistoriePayload> = object({
  content: string().required({ content: 'Content is a required field' }).min(5, { content: 'Content must be at least 5 characters' }),
  mediaUrl: string().required({ mediaUrl: 'Media URL is a required field' }),
  mediaType: string().oneOf(['image', 'video'], { mediaType: 'Media type must be either image or video' }).required({ mediaType: 'Media type is a required field' })
});

export { historieSchema };
