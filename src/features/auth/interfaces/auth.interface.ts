import { ObjectSchema } from 'yup';

// export interface IAuthUser {
//   email: string | null;
//   userId: string | null;
//   avatarColor: string | null;
//   id: number | null;
//   uId: string | null;
//   iat?: number | null;
//   username: string | null;
// }

export interface IAuthDocument {
  _id?: string;
  uId: string;

  profilePublicId?: string;
  username?: string;
  email?: string;
  password?: string;
  avatarColor: string;
  country?: string;
  profilePicture?: string;
  emailVerified?: number;
  emailVerificationToken?: string;
  createdAt?: Date;
  updatedAt?: Date;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  browserName?: string;
  deviceType?: string;
}

export interface IUseAuthSchema {
  schema: ObjectSchema<ISignInPayload | ISignUpPayload | IResetPassword>;
  userInfo: ISignInPayload | ISignUpPayload | IResetPassword;
}

export const AUTH_FETCH_STATUS = {
  IDLE: '',
  SUCCESS: 'success',
  ERROR: 'error'
};

export interface ISignUpPayload {
  [key: string]: string | null | undefined |Date;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;
  dateOfBirth: Date; 
  profilePicture: string; 
  avatarColor: string;
}


export interface ISignInPayload {
  [key: string]: string | null | undefined;
  username: string;
  password: string;

}

export interface IForgotPassword {
  email: string;
}

export interface IResetPassword {
  [key: string]: string;
  password: string;
  confirmPassword: string;
}

export interface IReduxAuthPayload {
  authInfo?: IAuthDocument;
}

export interface IReduxAddAuthUser {
  type: string;
  payload: IReduxAuthPayload;
}

export interface IReduxLogout {
  type: string;
  payload: boolean;
}

export interface IAuthResponse {
  message: string;
}


// interfaces/auth.interface.ts

export interface IAuthUser {
  phone: string;
  address: any;
  email: string | null;           // Email del usuario
  userId: string | null;          // ID único del usuario
  username: string | null;        // Nombre de usuario
  firstName: string | null;        // Nombre de usuario
  lastName: string | null;        // Nombre de usuario
  avatarColor: string | null;     // Color del avatar del usuario
  id: number | null;              // ID secundario que podría ser usado internamente
  uId: string | null;             // Otro identificador único
  authId: string | null;          // ID de autenticación
  bgImageId: string | null;       // ID de la imagen de fondo del perfil
  bgImageVersion: string | null;  // Versión de la imagen de fondo
  blocked: boolean;               // Si el usuario está bloqueado
  blockedBy: string | null;       // Usuario que bloqueó a este usuario
  createdAt: Date | null;         // Fecha de creación del perfil del usuario
  followersCount: number;         // Número de seguidores
  followingCount: number;         // Número de seguidos
  profilePicture: string | null;  // URL del perfil de imagen
  quote: string | null;           // Cita o frase del perfil
  school: string | null;          // Escuela del usuario
  social: string | null;          // Información de redes sociales
  work: string | null;            // Información laboral del usuario
  notifications: string[];        // Lista de notificaciones del usuario
}
