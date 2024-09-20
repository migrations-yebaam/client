import React from 'react';

export const ChatInput: React.FC = () => (
  <div className="card-footer" id="kt_chat_messenger_footer">
    <textarea
      className="form-control form-control-solid"
      rows={1}
      placeholder="Escribe un mensaje..."
    ></textarea>
  </div>
);
