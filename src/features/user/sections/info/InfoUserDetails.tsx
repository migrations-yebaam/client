import React from 'react';
import { UserModel } from '../../../../models/userModel';
import { InfoDetailUserItem } from './InfoDetailItem';


type InfoProfileUserProps = {
  currentUser?: UserModel,
  selectedInfoSection: string
}
export const InfoUserDetails: React.FC<InfoProfileUserProps> = ({currentUser, selectedInfoSection}) => {
  const infoDetails = [
    {
      icon: 'bi-briefcase',
      title: currentUser?.occupation,
      subtitle: 'Desde el 7 de marzo de 2020 hasta la fecha',
      privacyIcon: 'bi-lock-fill',
      categories: ['Empleo y formación', 'Información general'],
    },
    {
      icon: 'bi-mortarboard',
      title: 'Estudió Máster Desarrollo Web Full Stack + MultiCloud en UNIR - La Universidad Internacional de La Rioja en Colombia',
      subtitle: '',
      privacyIcon: 'bi-people-fill',
      categories: ['Empleo y formación', 'Información general'],
    },
    {
      icon: 'bi-house',
      title: `${currentUser?.address?.city}`,
      subtitle: '',
      privacyIcon: 'bi-people-fill',
      categories: ['Lugares de residencia'],
    },
    {
      icon: 'bi-geo-alt',
      title: ` ${currentUser?.address?.addressLine}, ${currentUser?.address?.state}`,
      subtitle: `${currentUser?.address?.postCode}`,
      privacyIcon: 'bi-globe',
      categories: ['Lugares de residencia', 'Información general', 'Información básica y de contacto'],
    },
    {
      icon: 'bi-telephone',
      title: currentUser?.phone,
      subtitle: 'Celular',
      privacyIcon: 'bi-people-fill',
      categories: ['Información básica y de contacto', 'Información general'],
    },
    {
      icon: 'bi-plus-circle',
      title: 'Agrega tu situación sentimental',
      subtitle: '',
      privacyIcon: '',
      categories: ['Familia y relaciones','Información general'],
    },
  ];

  const detailFiltered = infoDetails.filter(detail => 
    detail?.categories?.includes(selectedInfoSection));

  return (
    <div className="info-details">
      {detailFiltered.map((detail, index) => (
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
