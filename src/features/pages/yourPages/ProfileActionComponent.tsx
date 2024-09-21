import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ProfileActionComponentProps {
  iconClass: string;
  actionName: string;
}

export const ProfileActionComponent: React.FC<ProfileActionComponentProps> = ({ iconClass, actionName }) => {
  return (
    <div className="d-flex align-items-center mb-2">
      <i className={`${iconClass} me-2`}></i>
      <span>{actionName}</span>
    </div>
  );
};
