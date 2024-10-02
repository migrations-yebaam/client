import React, { useState } from 'react';
import PostInitiator from './PostInitiator';
import PostModal from './PostModal';

const PostCreator: React.FC = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <PostInitiator onClick={() => setModalShow(true)} />
      <PostModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default PostCreator;
