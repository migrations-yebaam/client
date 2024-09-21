/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { PostItemComponent } from './PostItemComponent';

interface PostUserProps {
  userId: string;
}

const PostUser: React.FC<PostUserProps> = ({ userId }) => {
  const posts: any[] = [
    // Aquí irían los datos simulados de las publicaciones del usuario
  ];

  return (
    <div>
      <h2>Publicaciones</h2>
      {posts.map((post, index) => (
        <PostItemComponent key={index} {...post} />
      ))}
    </div>
  );
};

export { PostUser };
