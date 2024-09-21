import React from 'react';

interface PostItemProps {
  author: string;
  date: string;
  content: string;
  imageUrl?: string;
}

const PostItemComponent: React.FC<PostItemProps> = ({ author, date, content, imageUrl }) => {
  return (
    <div className="post-item mb-4">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <strong>{author}</strong> agregó una foto nueva a la biografía de {author}.
          <div className="text-muted">{date}</div>
        </div>
        <div className="post-options">
          {/* Aquí irían las opciones del post (e.g., botón de más opciones) */}
        </div>
      </div>
      <div className="post-content mt-2">
        {content}
        {imageUrl && <img src={imageUrl} alt="post" className="img-fluid mt-2" />}
      </div>
    </div>
  );
};

export { PostItemComponent };
