import React, { useEffect, useState } from 'react';
import { postModel } from '../../models/postModel';
import { UserModel } from '../../models/userModel';
import { getPostByUserId } from '../../services/posts';
import { useAppSelector } from '../../store/store';

type PostList = {
  currentUser: UserModel;
};
  
const PostList: React.FC<PostList> = ({currentUser}) => {
  const authUser = useAppSelector((state: { authUser: any; }) => state.authUser);
  const [posts, setPosts] = useState<postModel[]>([]);
  const actionsList = [ {
    name: 'Me gusta',
    icon: 'bi bi-hand-thumbs-up',
  },
  {
    name: 'Comentar',
    icon: 'bi bi-chat',
  },
  {
    name: 'Enviar',
    icon: 'bi bi-share',
  },

  ];
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
        <div key={post.id} className="post mb-4 p-3 bg-light rounded">
          <div className="d-flex align-items-center mb-2">
          <img
            src={currentUser.pic} alt="User"
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
            {actionsList.map((action, index) => (      
              <div key={index} className="d-flex align-items-center">
                <i className={action.icon}></i>
                <span className="ms-1">{action.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export { PostList };