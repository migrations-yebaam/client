import axios from "axios";
import {  mockPosts } from "../mocks/index";

// const API_URL = import.meta.env.VITE_APP_THEME_API_URL;
const API_URL = 'http://localhost:5000/api/v1'
const POSTS_URL = `${API_URL}/post`;

const getAllPosts = async({token}): Promise<any> => {
  const { data: { posts } } = await axios.get(`${POSTS_URL}/all/1`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    withCredentials: true // includes session
  })
  return posts;
};


const getPostByUserId = async (authUser: any) => {
  const tempPostById = await getAllPosts(authUser);
  const filteredPost = tempPostById.filter(({userId})=> userId === authUser.authId);
  return {
    id: authUser.id,
    data: [...mockPosts, ...filteredPost],
  };
}

export {
  getAllPosts,
  getPostByUserId
}
