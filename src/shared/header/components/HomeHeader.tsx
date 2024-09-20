import { FC, ReactElement } from 'react';
import { useAppSelector } from 'src/store/store';
import { IReduxState } from 'src/store/store.interface';

import { IHomeHeaderProps } from '../interfaces/header.interface';

const HomeHeader: FC<IHomeHeaderProps> = (): ReactElement => {
  const authUser = useAppSelector((state: IReduxState) => state.authUser);

  return (
    <>
      <div>HEADER</div>
      <div>{authUser.username}</div>
    </>
  );
};

export default HomeHeader;
