import React from 'react';

export const ChatSidebar: React.FC = () => (
  <div className="chat-sidebar w-100 w-lg-300px w-xl-400px mb-10 mb-lg-0">
    <div className="card card-flush">
      <div className="card-header pt-7" id="kt_chat_contacts_header">
        <form className="w-100 position-relative" autoComplete="off">
          <i className="bi bi-search fs-2 text-gray-500 position-absolute top-50 ms-5 translate-middle-y"></i>
          <input
            type="text"
            className="form-control form-control-solid px-15"
            name="search"
            placeholder="Search by username or email..."
          />
        </form>
      </div>

      <div className="card-body pt-5" id="kt_chat_contacts_body">
        <div className="scroll-y me-n5 pe-5 h-200px h-lg-auto">
          {/* Contactos */}
          {/* Repite este bloque para cada contacto */}
          <div className="d-flex flex-stack py-4">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-45px symbol-circle">
                <img alt="Pic" src="/media/avatars/300-1.jpg" />
              </div>
              <div className="ms-5">
                <a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">
                  Max Smith
                </a>
                <div className="fw-bold text-gray-500">max@kt.com</div>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end ms-2">
              <span className="text-muted fs-7 mb-1">20 hrs</span>
            </div>
          </div>
          {/* Fin de repetición */}
        </div>
      </div>
    </div>
  </div>
);
