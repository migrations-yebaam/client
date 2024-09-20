import React from 'react';
import { KTIcon } from '../../../../components/helpers';

export const SearchBar: React.FC = () => (
  <form className='w-100 position-relative' autoComplete='off'>
    <KTIcon
      iconName='magnifier'
      className='fs-2 text-lg-1 text-gray-500 position-absolute top-50 ms-5 translate-middle-y'
    />
    <input
      type='text'
      className='form-control form-control-solid px-15'
      name='search'
      placeholder='Search by username or email...'
    />
  </form>
);
