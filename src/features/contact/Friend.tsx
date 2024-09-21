import React from 'react';
import { ContactItemComponent } from './ContactItemComponent';

const Friend: React.FC = () => {
  const contacts = [
    { id: '1', imageUrl: 'https://images.unsplash.com/photo-1685903772095-f07172808761?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Darlinton Lozano', isOnline: true },
    { id: '2', imageUrl: 'https://plus.unsplash.com/premium_photo-1677094310899-02303289cadf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Sandra Rivas Rivas', isOnline: true },
    { id: '3', imageUrl: 'https://images.unsplash.com/photo-1656233542584-2601d0ae2398?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'La Xenxaxion Lokitha', isOnline: true },
  ];

  return (
    <div className="contacts-list p-3">
      {/* <ContactsHeaderComponent /> */}
      {contacts.map((contact, index) => (
        <ContactItemComponent key={index} id={contact.id} imageUrl={contact.imageUrl} name={contact.name} isOnline={contact.isOnline} />
      ))}
    </div>
  );
}

export default Friend;
