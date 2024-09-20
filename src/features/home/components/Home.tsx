import { FC, ReactElement } from 'react';
import { useAppSelector } from '../../../store/store';
import { IReduxState } from '../../../store/store.interface';


const Home: FC = (): ReactElement => {
  const authUser = useAppSelector((state: IReduxState) => state.authUser);
  console.log('authUser',authUser)

  return (
    <>
      <h1>HOME login</h1>
      <div>{authUser.email}</div>
    </>
  );
};

export default Home;
