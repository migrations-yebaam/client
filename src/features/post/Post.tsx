import React from 'react';
import { KTIcon } from '../../components/helpers/index';
import CommentSection from './CommentSection';
import ReactionBar from './ReactionBar';


interface PostProps {
  author: string;
  profilePicture: string;
  content: string;
  timestamp: string;
}

const Post: React.FC<PostProps> = ({ author, image, profilePicture, content, timestamp }) => {
  return (
    <div className="post mb-4 p-3 bg-white rounded shadow-sm">
      <div className="d-flex align-items-center mb-2">
        {!!profilePicture
          ? <img src={profilePicture}
              alt="Profile" className="rounded-circle"
              style={{ width: '40px', height: '40px', objectFit: 'cover' }} />
          :( <KTIcon iconName='profile-circle' className='fs-2 text-primary' />)
        }
        <div className="ml-3">
          <strong>{author}</strong>
          <div className="text-muted" style={{ fontSize: '12px' }}>{timestamp}</div>
        </div>
      </div>
      <div className="content d-block mb-3">
        <p className="mb-4">{content}</p>
        {image && <img src={image} alt="post image" className="w-100img-fluid d-block mx-auto mt-3" /> }
      </div>
      <ReactionBar />
      <hr />
      <CommentSection author={author} profilePicture={profilePicture} />
    </div>
  );
};

export default Post;
