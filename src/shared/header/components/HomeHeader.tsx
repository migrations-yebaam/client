import { FC, ReactElement } from 'react';


import { IHomeHeaderProps } from '../interfaces/header.interface';
import { useAppSelector } from '../../../store/store';
import { IReduxState } from '../../../store/store.interface';

const HomeHeader: FC<IHomeHeaderProps> = (): ReactElement => {
  const authUser = useAppSelector((state: IReduxState) => state.authUser);

  return (
    <>
      <div>HEADER HOME</div>
      <div>{authUser.username}:username</div>
      <div>{authUser.avatarColor}:avatarColor</div>
      <div>{authUser.uId}:uId</div>
    </>
  );
};

export default HomeHeader;
