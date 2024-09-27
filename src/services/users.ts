import axios from "axios";
import { mockUser } from "../mocks/index";

// const API_URL = import.meta.env.VITE_APP_THEME_API_URL;
const API_URL = 'http://localhost:5000/api/v1'
const POSTS_URL = `${API_URL}/post`;

const getUserById = async (authUser: any) => {
  const { data: { user } } = await axios.get(`${POSTS_URL}/all/1`, {
    headers: {
      Authorization: `Bearer ${authUser.token}`
    },
    withCredentials: true
  })
  return mockUser || user;
}

export {
  getUserById,
}
