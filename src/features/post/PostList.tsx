import React from 'react';
import Post from './Post';

interface PostData {
  author: string;
  profilePicture: string;
  content: string;
  timestamp: string;
}

interface PostListProps {
  posts: PostData[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <Post
            key={index}
            author={post.author}
            profilePicture={post.profilePicture}
            content={post.content}
            timestamp={post.timestamp}
          />
        ))
      ) : (
        <p>No hay publicaciones disponibles.</p>
      )}
    </div>
  );
};

export default PostList;
