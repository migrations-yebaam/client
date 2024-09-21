import { FC } from 'react';
import { Content } from '../../../../components/layout/components/Content';
import { ContactList } from './ContactList';
import { SearchBar } from './SearchBat';
import { ChatBody } from './ChatBody';


const Private: FC = () => {
  return (
    <>
      <Content>
        <div className='d-flex flex-column flex-lg-row'>
          <div className='flex-column flex-lg-row-auto w-100 w-lg-300px w-xl-400px mb-10 mb-lg-0'>
            <div className='card card-flush'>
              <div className='card-header pt-7'>
                <SearchBar />
              </div>
              <div className='card-body pt-5'>
                <ContactList />
              </div>
            </div>
          </div>

          <div className='flex-lg-row-fluid ms-lg-7 ms-xl-10'>
            <div className='card' id='kt_chat_messenger'>
              <ChatBody />
            </div>
          </div>
        </div>
      </Content>
    </>
  );
};

export { Private };
