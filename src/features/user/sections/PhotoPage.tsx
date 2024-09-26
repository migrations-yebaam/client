import React, { useEffect, useState } from 'react';
import { postModel } from '../../../models/postModel';
import { getPostByUserId } from '../../../services/posts';
import { useAppSelector } from '../../../store/store';
import { PhotoTabs } from './photos/PhotoTabs';

interface PhotoPageProps {
  userId: string;
}

const PhotoPage: React.FC<PhotoPageProps> = () => {
  
  const [postsPhotos, setPostsPhotos] = useState<postModel[]>([]);
  const authUser = useAppSelector((state: { authUser: any; }) => state.authUser);

  useEffect(() => {

    const fetchPosts = async () => {
      const { data } = await getPostByUserId(authUser);
      const photos = data.map((post: postModel) => post); // añadir filtro a las que traigan fotos
      setPostsPhotos(photos);
    }
    fetchPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div>
      <h2>Fotos del usuario {authUser.username}</h2>
      <PhotoTabs photos={postsPhotos}/>
    </div>
  );
};

export { PhotoPage };
