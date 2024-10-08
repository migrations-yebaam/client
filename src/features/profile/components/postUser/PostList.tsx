import React, { useEffect, useState } from 'react';
import { getPostByUserId } from '../../../../services/posts';
import { useAppSelector } from '../../../../store/store';
import Post from '../../../post/Post';
import { postModel } from '../../../../models/postModel';
import { UserModel } from '../../../../models/userModel';

type PostList = {
  currentUser: UserModel;
};
  
const PostList: React.FC<PostList> = ({currentUser}) => {
  const authUser = useAppSelector((state) => state.authUser);

  const [posts, setPosts] = useState<postModel[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await getPostByUserId(authUser);
      setPosts(data);
    }
    fetchPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className="post-list">
      {posts.map(post => (
       /*  <div key={post.id} className="post mb-4 p-3 bg-light rounded">
          <div className="d-flex align-items-center mb-2">
          <img
            src={post.profilePicture} alt="User"
            className="rounded-circle me-2" 
            style={{ width: '40px', height: '40px', objectFit: 'cover', marginLeft: '-10px' }}
            />
          <h6 className="mb-0">{currentUser.fullname}</h6>

          <div>
          <small className="text-muted">{post.imgVersion}</small>
            </div>
          </div>
          <img src={post.image} alt="post image" className="img-fluid me-2" />
          <p className='mt-3'>{post.post}</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-light"><i className="bi bi-hand-thumbs-up"></i> Me gusta</button>
            <button className="btn btn-light"><i className="bi bi-chat"></i> Comentar</button>
            <button className="btn btn-light"><i className="bi bi-share"></i> Enviar</button>
          </div>
        </div> */
        <Post
          key={post.id}
          author={post.username || post.author || currentUser.fullname} 
          image={post.image}
          profilePicture={currentUser.pic || post.profilePicture}
          content={post.post}
          timestamp={post.createdAt}
        />


      ))}
    </div>
  );
};
export { PostList };