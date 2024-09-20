/* eslint-disable react-hooks/exhaustive-deps */
import { FC, ReactElement, useCallback, useEffect, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';



import { addAuthUser } from './auth/reducers/auth.reducer';
import { useCheckCurrentUserQuery } from './auth/services/auth.service';
import Home from './home/components/Home';
import Index from './index/Index';
import HomeHeader from '../shared/header/components/HomeHeader';
import { saveToSessionStorage, applicationLogout } from '../shared/utils/utils.service';
import { useAppSelector, useAppDispatch } from '../store/store';
import { IReduxState } from '../store/store.interface';
import { MasterLayout } from '../components/layout/MasterLayout';

const AppPage: FC = (): ReactElement => {
  const authUser = useAppSelector((state: IReduxState) => state.authUser);
  const appLogout = useAppSelector((state: IReduxState) => state.logout);
  const [tokenIsValid, setTokenIsValid] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();
  const { data: currentUserData, isError } = useCheckCurrentUserQuery(undefined, { skip: authUser.uId === null });

  const checkUser = useCallback(async () => {
    try {
      if (currentUserData && currentUserData.user && !appLogout) {
        setTokenIsValid(true);
        dispatch(addAuthUser({ authInfo: currentUserData.user }));
        saveToSessionStorage(JSON.stringify(true), JSON.stringify(authUser.username));
      }
    } catch (error) {
      console.log(error);
    }
  }, [currentUserData, navigate, dispatch, appLogout, authUser.username]);

  const logoutUser = useCallback(async () => {
    if ((!currentUserData && appLogout) || isError) {
      setTokenIsValid(false);
      applicationLogout(dispatch, navigate);
    }
  }, [currentUserData, dispatch, navigate, appLogout, isError]);

  useEffect(() => {
    checkUser();
    logoutUser();
  }, [checkUser, logoutUser]);

  if (authUser) {
    return !tokenIsValid && !authUser.id ? (
      <Index />
    ) : (
      <>
  
        <MasterLayout />
      </>
    );
  } else {
    return <Index />;
  }
};

export default AppPage;
