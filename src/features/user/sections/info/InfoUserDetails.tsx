import React from 'react';
import { InfoDetailUserItem } from './InfoDetailItem';

export const InfoUserDetails: React.FC = () => {
  const infoDetails = [
    {
      icon: 'bi-briefcase',
      title: 'Tecnologo en Radiología en Clínica Vida Ips',
      subtitle: 'Desde el 7 de marzo de 2020 hasta la fecha',
      privacyIcon: 'bi-lock-fill',
    },
    {
      icon: 'bi-mortarboard',
      title: 'Estudió Máster Desarrollo Web Full Stack + MultiCloud en UNIR - La Universidad Internacional de La Rioja en Colombia',
      subtitle: '',
      privacyIcon: 'bi-people-fill',
    },
    {
      icon: 'bi-house',
      title: 'Vive en Medellín',
      subtitle: '',
      privacyIcon: 'bi-people-fill',
    },
    {
      icon: 'bi-geo-alt',
      title: 'De Boca De Pepé, Choco, Colombia',
      subtitle: '',
      privacyIcon: 'bi-globe',
    },
    {
      icon: 'bi-plus-circle',
      title: 'Agrega tu situación sentimental',
      subtitle: '',
      privacyIcon: '',
    },
    {
      icon: 'bi-telephone',
      title: '321 6283458',
      subtitle: 'Celular',
      privacyIcon: 'bi-people-fill',
    },
  ];

  return (
    <div className="info-details">
      {infoDetails.map((detail, index) => (
        <InfoDetailUserItem
          key={index}
          icon={detail.icon}
          title={detail.title}
          subtitle={detail.subtitle}
          privacyIcon={detail.privacyIcon}
        />
      ))}
    </div>
  );
};
