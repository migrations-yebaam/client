import React, { useState } from 'react';

interface CommentSectionProps {
  author: string;
  profilePicture: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ author, profilePicture }) => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  return (
    <div className="comment-section">
      <div className="d-flex align-items-center mb-2">
        <img src={profilePicture} alt="Profile" className="rounded-circle" style={{ width: '30px', height: '30px', objectFit: 'cover' }} />
        <input
          type="text"
          className="form-control ml-2"
          placeholder={`Comentar como ${author}`}
          value={comment}
          onChange={handleCommentChange}
        />
      </div>
      <div className="d-flex justify-content-between mt-2">
        <button className="btn btn-link">
          <i className="fas fa-smile"></i>
        </button>
        <button className="btn btn-link">
          <i className="fas fa-camera"></i>
        </button>
        <button className="btn btn-link">
          <i className="fas fa-gif"></i>
        </button>
        <button className="btn btn-link">
          <i className="fas fa-sticky-note"></i>
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
