import { mockFriends } from "../mocks/index";
import axios from "axios";

// const API_URL = import.meta.env.VITE_APP_THEME_API_URL;
const API_URL = 'http://localhost:5000/api/v1'
const POSTS_URL = `${API_URL}/friends`;


const getMainlyFriends = async (id: number) => {
  return mockFriends;
}


const getMainlyFriendsOld = async({token}): Promise<any> => {
  // const token : string = getDataFromSessionStorage('token');
  const { data: { friends } } = await axios.get(`${POSTS_URL}/user/profile/`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    withCredentials: true // includes session
  })
  return [...mockFriends];
};

export {
  getMainlyFriends,
  getMainlyFriendsOld
}


