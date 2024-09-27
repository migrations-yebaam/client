/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState } from 'react';
import { Content } from '../../../components/layout/components/Content';
import { EnableSidebar } from '../../../components/layout/core';
import StoriesContainer from '../../histories/components/StoriesContainer';
import PostCreator from '../../post/PostCreator';
// import PostList from '../../post/PostList';
import { PostData, mockPosts } from '../../post/interfaces/post.interfaces';

const DashboardWrapper: FC = () => {
  // Usando los datos simulados
  const [posts, setPosts] = useState<PostData[]>(mockPosts);

  return (
    <EnableSidebar>
      <Content>
        <div className="mb-8">
          <StoriesContainer />
        </div>
        <div className="mb-6">
          <PostCreator />
        </div>
        <div className="mt-4">
          {/* <PostList posts={posts} /> */}
          {posts.length > 0 && (
            <div>
              {/* Aquí puedes poner el contenido que deseas renderizar solo si hay posts */}
              REDNDER aqui los post y las utimas novedades de la plataforma

            </div>
          )}
        </div>
      </Content>
    </EnableSidebar>
  );
};

export { DashboardWrapper };
