import React, { useState } from 'react';
import { UserProfileComponent } from './UserProfileComponent';
import { NavItemComponent } from './NavItemComponent';
import { NavListComponent } from './NavListComponent';

export const SidebarComponent: React.FC = () => {
  const [expanded, setExpanded] = useState(false);


  return (
    <div className="sidebar">
      <UserProfileComponent />
      <NavListComponent>
        <NavItemComponent title="Amigos" icon="bi-people" route="/friends" />
        <NavItemComponent title="Grupos" icon="bi-people-fill" route="/groups" />
        <NavItemComponent title="Video" icon="bi-camera-video" route="/videos" />
        <NavItemComponent title="Blog" icon="bi-camera-video" route="/videos" />
        
        {/* Mostrar los componentes adicionales solo si expanded es true */}
        {expanded && (
          <>
            <NavItemComponent title="Foro" icon="bi-camera-video" route="/videos" />
            <NavItemComponent title="Clubes" icon="bi-camera-video" route="/videos" />
            <NavItemComponent title="Portales" icon="bi-camera-video" route="/videos" />
            <NavItemComponent title="Negocios" icon="bi-camera-video" route="/videos" />
            <NavItemComponent title="Mercados" icon="bi-camera-video" route="/videos" />
            <NavItemComponent title="Noticias" icon="bi-camera-video" route="/videos" />
            <NavItemComponent title="Comunidades" icon="bi-camera-video" route="/videos" />
            <NavItemComponent title="Feeds" icon="bi-rss" route="/feeds" />
          </>
        )}

        <SeeMoreButtonComponent expanded={expanded} setExpanded={setExpanded} />
      </NavListComponent>
      {/* Aquí puedes agregar otra sección si es necesario */}
    </div>
  );
};

// Actualiza el SeeMoreButtonComponent para recibir las props
export const SeeMoreButtonComponent: React.FC<{ expanded: boolean; setExpanded: (expanded: boolean) => void }> = ({ expanded, setExpanded }) => {
  return (
    <button className="btn btn-link see-more-btn" onClick={() => setExpanded(!expanded)}>
      {expanded ? 'Ver menos' : 'Ver más'}
      <i className={`bi ${expanded ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
    </button>
  );
};
