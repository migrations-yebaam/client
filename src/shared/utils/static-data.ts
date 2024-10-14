import { IAuthUser } from "../../features/auth/interfaces/auth.interface";

export const initialAuthUserValues: IAuthUser = {
  email: null,
  userId: null,
  avatarColor: null,
  id: null,
  uId: null,
  username: null,
  authId: null,
  bgImageId: null,
  bgImageVersion: null,
  blocked: false,
  blockedBy: null,
  createdAt: null,
  followersCount: 0,
  followingCount: 0,
  profilePicture: null,
  quote: null,
  school: null,
  social: null,
  work: null,
  notifications: [],
  phone: "",
  address: undefined
};

export const PASSWORD_TYPE = {
  TEXT: 'text',
  PASSWORD: 'password'
};

export const STATIC_DATA = {
  EMPTY: '',
  USERNAME: 'username',
  PASSWORD: 'password',
  CONFIRM_PASSWORD: 'confirmPassword',
  EMAIL: 'email',
  COUNTRY: 'country',
  PROFILE_PICTURE: 'profilePicture',
  TITLE: 'title',
  BASIC_TITLE: 'basicTitle',
  BASIC_DESCRIPTION: 'basicDescription',
  DESCRIPTION: 'description',
  CATEGORIES: 'categories',
  SUB_CATEGORIES: 'subCategories',
  TAGS: 'tags',
  PRICE: 'price',
  EXPECTED_DELIVERY: 'expectedDelivery',
  COVER_IMAGE: 'coverImage',
  FULLNAME: 'fullName',
  ONELINER: 'oneliner',
  RESPONSE_TIME: 'responseTime',
  YEAR: 'year',
  MAJOR: 'major',
  UNIVERSITY: 'university',
  COMPANY: 'company',
  START_DATE: 'startDate',
  END_DATE: 'endDate',
  LANGUAGE: 'language',
  LEVEL: 'level'
};
