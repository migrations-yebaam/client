import React, { useEffect, useState } from 'react';
import { postModel } from '../../../../models/postModel';
import { getPostByUserId } from '../../../../services/posts';
import { useAppSelector } from '../../../../store/store';
import { isValidPhoto } from '../../../../utils/generic';

export const UserPhotosPanel: React.FC = () => {
  // Ejemplo de fotos

  const [postsPhotos, setPostsPhotos] = useState<string[]>([]);
  const authUser = useAppSelector((state: { authUser: any; }) => state.authUser);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await getPostByUserId(authUser);
      const photos = data.map((post: postModel) => post.image);
      setPostsPhotos(photos);
    }
    fetchPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="user-photos-panel mt-4 p-4 bg-light rounded">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold">Fotos</h5>
        <a href="#!" className="text-primary">Ver todas las fotos</a>
      </div>
      <div className="row">
        {postsPhotos.map((photo, index) => (
          <div key={index} className="col-3 mb-2">
            {isValidPhoto(photo) && (<img src={photo} alt={`Foto ${index}`} className="img-fluid rounded" />)}
          </div>
        )
        )}
      </div>
    </div>
  );
};
