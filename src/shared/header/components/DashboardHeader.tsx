import { FC, ReactElement } from 'react';
import { useAppSelector } from 'src/store/store';
import { IReduxState } from 'src/store/store.interface';

const DashboardHeader: FC = (): ReactElement => {
  const authUser = useAppSelector((state: IReduxState) => state.authUser);

  return (
    <>
      <header>
        <h1>DashboardHeader</h1>
        {authUser.userId}
      </header>
    </>
  );
};

export default DashboardHeader;
