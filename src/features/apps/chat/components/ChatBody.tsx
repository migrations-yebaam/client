import React, { useRef } from 'react';
import { ChatInner } from '../../../../components/partials';
import { Dropdown1 } from '../../../../components/partials';

export const ChatBody: React.FC = () => {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleFullscreenToggle = () => {
    if (chatContainerRef.current) {
      if (!document.fullscreenElement) {
        chatContainerRef.current.requestFullscreen().catch(err => {
          console.error(`Error trying to enable full-screen mode: ${err.message} (${err.name})`);
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div ref={chatContainerRef} className="card" id="kt_chat_messenger">
      <div className="card-header" id="kt_chat_messenger_header">
        <div className="card-title">
          <div className="d-flex justify-content-center flex-column me-3">
            <a href="#" className="fs-4 fw-bolder text-gray-900 text-hover-primary me-1 mb-2 lh-1">
              Brian Cox
            </a>
            <div className="mb-0 lh-1">
              <span className="badge badge-success badge-circle w-10px h-10px me-1"></span>
              <span className="fs-7 fw-bold text-gray-500">Active</span>
            </div>
          </div>
        </div>

        <div className="card-toolbar">
          <div className="me-n3">
            <button
              className="btn btn-sm btn-icon btn-active-light-primary"
              onClick={handleFullscreenToggle}
              title="Toggle fullscreen"
            >
              <i className="bi bi-arrows-fullscreen me-2"></i> {/* Icono de fullscreen */}
            </button>
            <button
              className="btn btn-sm btn-icon btn-active-light-primary"
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
              data-kt-menu-flip="top-end"
            >
              <i className="bi bi-three-dots fs-2"></i>
            </button>
            <Dropdown1 />
          </div>
        </div>
      </div>

      <div className="card-body" id="kt_chat_messenger_body">
        <ChatInner />
      </div>

      <div className="card-footer" id="kt_chat_messenger_footer">
        <textarea
          className="form-control form-control-solid"
          rows={1}
          placeholder="Escribe un mensaje..."
        ></textarea>
      </div>
    </div>
  );
};
