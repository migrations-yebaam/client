import { date, object, ObjectSchema, string } from 'yup';

import { IResetPassword, ISignInPayload, ISignUpPayload } from '../interfaces/auth.interface';

const loginUserSchema: ObjectSchema<ISignInPayload> = object({
  username: string().required({ username: 'Username is a required field' }).min(4, { username: 'Username is a required field' }),
  password: string().required({ password: 'Password is a required field' }).min(4, { password: 'Password is a required field' }),

});

const registerUserSchema: ObjectSchema<ISignUpPayload> = object({
  firstName: string().required({ firstName: 'First name is a required field' }).min(2, { firstName: 'First name must be at least 2 characters' }),
  lastName: string().required({ lastName: 'Last name is a required field' }).min(2, { lastName: 'Last name must be at least 2 characters' }),
  email: string().email({ email: 'Email is a required field' }).required({ email: 'Email is a required field' }),
  password: string().required({ password: 'Password is a required field' }).min(6, { password: 'Password must be at least 6 characters' }),
  gender: string().required({ gender: 'Gender is a required field' }),
  dateOfBirth: date().required({ dateOfBirth: 'Date of birth is a required field' }),
  profilePicture: string().required({ profilePicture: 'Profile picture is a required field' }), // base64 string for the image
  avatarColor: string().required({ avatarColor: 'Avatar color is a required field' })
});

const resetPasswordSchema: ObjectSchema<IResetPassword> = object({
  password: string().required({ password: 'Password is a required field' }).min(4, { password: 'Password is a required field' }),
  confirmPassword: string()
    .required({ confirmPassword: 'Confirm password is a required field' })
    .min(4, { password: 'Password is a required field' })
});

export { loginUserSchema, registerUserSchema, resetPasswordSchema };
