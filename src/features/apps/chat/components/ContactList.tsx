import React from 'react';
import { ContactItem } from './ContactItem';

export const ContactList: React.FC = () => {
  const contacts = [
    { name: 'Melody Macy', email: 'melody@altbox.com', time: '5 hrs', imgSrc: '', symbol: 'M' },
    { name: 'Max Smith', email: 'max@kt.com', time: '20 hrs', imgSrc: '/media/avatars/300-1.jpg', symbol: '' },
    // Otros contactos...
  ];

  return (
    <div
      className='scroll-y me-n5 pe-5 h-200px h-lg-auto'
      data-kt-scroll='true'
      data-kt-scroll-activate='{default: false, lg: true}'
      data-kt-scroll-max-height='auto'
      data-kt-scroll-dependencies='#kt_header, #kt_toolbar, #kt_footer, #kt_chat_contacts_header'
      data-kt-scroll-wrappers='#kt_content, #kt_chat_contacts_body'
      data-kt-scroll-offset='0px'
    >
      {contacts.map((contact, index) => (
        <ContactItem key={index} {...contact} />
      ))}
    </div>
  );
};
