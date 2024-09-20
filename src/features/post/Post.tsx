import React from 'react';
import CommentSection from './CommentSection';
import ReactionBar from './ReactionBar';


interface PostProps {
  author: string;
  profilePicture: string;
  content: string;
  timestamp: string;
}

const Post: React.FC<PostProps> = ({ author, profilePicture, content, timestamp }) => {
  return (
    <div className="post mb-4 p-3 bg-white rounded shadow-sm">
      <div className="d-flex align-items-center mb-2">
        <img src={profilePicture} alt="Profile" className="rounded-circle" style={{ width: '40px', height: '40px', objectFit: 'cover' }} />
        <div className="ml-3">
          <strong>{author}</strong>
          <div className="text-muted" style={{ fontSize: '12px' }}>{timestamp}</div>
        </div>
      </div>
      <div className="content mb-3">
        <p>{content}</p>
      </div>
      <ReactionBar />
      <hr />
      <CommentSection author={author} profilePicture={profilePicture} />
    </div>
  );
};

export default Post;
