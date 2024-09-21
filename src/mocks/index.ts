import { friendModel } from "../models/friendModel";
import { postModel } from "../models/postModel";
import { UserModel } from "../models/userModel";

const mockUser: UserModel = {
    id: 1,
    username: "camiNickName",
    password: "dym123",
    email: "cami1@gmail.com",
    first_name: "cami",
    last_name: "cano",
    fullname: "cami cano",
    occupation: "Software Engineer",
    companyName: "Tech Solutions Inc.",
    phone: "+1234567890",
    roles: [1, 2],
    pic: 'https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png',
    language: 'en',
    timeZone: "GMT-5",
    website: "https://keenthemes.com",
    emailSettings: {
      emailNotification: true,
      sendCopyToPersonalEmail: false,
      activityRelatesEmail: {
        youHaveNewNotifications: true,
        youAreSentADirectMessage: false,
        someoneAddsYouAsAsAConnection: true,
        uponNewOrder: false,
        newMembershipApproval: true,
        memberRegistration: false,
      },
      updatesFromKeenthemes: {
        newsAboutKeenthemesProductsAndFeatureUpdates: true,
        tipsOnGettingMoreOutOfKeen: false,
        thingsYouMissedSindeYouLastLoggedIntoKeen: true,
        newsAboutStartOnPartnerProductsAndOtherServices: false,
        tipsOnStartBusinessProducts: true,
      }
    },
    auth: {
      api_token: "abcd1234",
      refreshToken: "efgh5678"
    },
    communication: {
      email: true,
      sms: false,
      phone: true
    },
    address: {
      addressLine: "123 Main St",
      city: "Bogota",
      state: "cundinamarca",
      postCode: "10001"
    },
    socialNetworks: {
      linkedIn: "https://www.linkedin.com/in/cami1",
      facebook: "https://www.facebook.com/cami1",
      twitter: "https://www.twitter.com/cami1",
      instagram: "https://www.instagram.com/cami1"
    }  
  };
  

const mockFriends: friendModel[] = [
  {
    id: 1,
    name: 'Friend 1',
    imageSrc: 'https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg',
    mutualFriends: 7,
  },
  {
    id: 2,
    name: 'Friend 2',
    imageSrc: 'https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png',
    mutualFriends: 15,
  },
  {
    id: 3,
    name: 'Friend 3',
    imageSrc: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg',
    mutualFriends: 18,
  },
];

const mockPosts: postModel[] = [
  {
    id: 1,
    bgColor: '#f44336',
    post: 'empezando el dia',
    gifUrl: '',
    imgId: '',
    imgVersion: '',
    image: 'https://beapython.dev/wp-content/uploads/2020/01/canva-software-developer-working.jpg?w=800',
    privacy: 'Public',
    profilePicture: 'https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png',
    feelings: 'happy'
  },
  {
    id: 2,
    bgColor: '#f44336',
    post: 'post del medio dia',
    gifUrl: '',
    imgId: '',
    imgVersion: '',
    image: 'https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2018/07/01153710/benefits-of-working-from-home-1024x512.jpg',
    privacy: 'Public',
    profilePicture: 'https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png',
    feelings: 'happy'
    },
    {
      id: 3,  
      bgColor: '#f44336',
      post: 'trabajando en la noche',
      gifUrl: '',
      imgId: '',
      imgVersion: '',
      image: 'https://beapython.dev/wp-content/uploads/2020/01/canva-software-developer-working.jpg?w=800',
      privacy: 'Public',
      profilePicture: 'https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png',
      feelings: 'happy'
      },
];


  export {mockUser, mockFriends, mockPosts}