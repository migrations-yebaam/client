import axios from "axios";

// const API_URL = import.meta.env.VITE_APP_THEME_API_URL;
const API_URL = 'http://localhost:5000/api/v1'
const PROFILE_URL = `${API_URL}/user/profile`;

const getUserById = async (token: any, id: any) => {
  const { data:  user  } = await axios.get(`${PROFILE_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    withCredentials: true
  })
  console.log(`responseeeee/ para ${id}`);
  console.log({ user });
  return { 
    first_name: 'userFirstName',
    last_name: 'userLastName',
    ...user};
}

export {
  getUserById,
}
