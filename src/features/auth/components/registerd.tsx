/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, FC, ReactElement, useRef, useState } from 'react';
import { useDeviceData, useMobileOrientation } from 'react-device-detect';


import { useAuthSchema } from '../hooks/useAuthSchema';
import { ISignUpPayload } from '../interfaces/auth.interface';
import { addAuthUser } from '../reducers/auth.reducer';
import { updateLogout } from '../reducers/logout.reducer';
import { registerUserSchema } from '../schemes/auth.schema';
import { useSignUpMutation } from '../services/auth.service';
import { updateHeader } from '../../../shared/header/reducers/header.reducer';
import { IModalBgProps } from '../../../shared/modals/interfaces/modal.interface';
import ModalBg from '../../../shared/modals/ModalBg';
import { IResponse } from '../../../shared/shared.interface';
import { checkImage, readAsBase64 } from '../../../shared/utils/image-utils.service';
import { saveToSessionStorage } from '../../../shared/utils/utils.service';
import { useAppDispatch } from '../../../store/store';

const RegisterModal: FC<IModalBgProps> = (): ReactElement => {
  const mobileOrientation = useMobileOrientation();
  const deviceData = useDeviceData(window.navigator.userAgent);
  const [step, setStep] = useState<number>(1);
  const [alertMessage, setAlertMessage] = useState<string>('');
  const [passwordType, setPasswordType] = useState<string>('password');
  const [profileImage, setProfileImage] = useState<string>('https://placehold.co/330x220?text=Profile+Image');
  const [showImageSelect, setShowImageSelect] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<ISignUpPayload>({
    username: '',
    password: '',
    email: '',
    avatarColor:'#ffff'
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const [schemaValidation] = useAuthSchema({ schema: registerUserSchema, userInfo });
  const [signUp, { isLoading }] = useSignUpMutation();

  const handleFileChange = async (event: ChangeEvent): Promise<void> => {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    if (target.files) {
      const file: File = target.files[0];
      const isValid = checkImage(file, 'image');
      if (isValid) {
        const dataImage: string | ArrayBuffer | null = await readAsBase64(file);
        setProfileImage(`${dataImage}`);
        setUserInfo({ ...userInfo, profilePicture: `${dataImage}` });
      }
      setShowImageSelect(false);
    }
  };

  const onRegisterUser = async (): Promise<void> => {
    try {
      const isValid: boolean = await schemaValidation();
      if (isValid) {
        const result: IResponse = await signUp(userInfo).unwrap();
        setAlertMessage('');
        dispatch(addAuthUser({ authInfo: result.user }));
        dispatch(updateLogout(false));
        dispatch(updateHeader('home'));
        saveToSessionStorage(JSON.stringify(true), JSON.stringify(result.user?.username));
      }
    } catch (error) {
      console.log(error)
      // setAlertMessage(error?.data.message);
    }
  };

  return <ModalBg>register</ModalBg>;
};

export default RegisterModal;
