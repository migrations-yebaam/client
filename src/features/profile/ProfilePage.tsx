import { FC, ReactElement, useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import { mockUser } from "../../mocks/index";
import { friendModel } from "../../models/friendModel";
import { UserModel } from "../../models/userModel";
import { getUserById } from "../../services/users";
import { useAppSelector } from "../../store/store";
import { IReduxState } from "../../store/store.interface";
import { FriendPage } from "../user/sections/FriendPage";
import { InfoUser } from "../user/sections/info/InfoProfileUser";
import { PhotoPage } from "../user/sections/PhotoPage";
import { PostUser } from "./components/postUser/PostUser";
import { VideoPage } from "./components/videos/VideoPage";
import { ProfileHeader } from "./ProfileHeader"
import { useGetFriendsListQuery } from "./services/friend.service";

const ProfilePage:FC = (): ReactElement => {

const { id: idUserPage } = useParams<{ id: string; }>();

console.log('IDPAGE:', idUserPage);

const [currentUser, setCurrentUser] = useState<UserModel>({});
const [selectedNav, setSelectedNav] = useState('Publicaciones');
const { data: friendsData } = useGetFriendsListQuery(idUserPage);
const [friends,setFriends] = useState<friendModel[]>([]);

const authUser = useAppSelector((state: IReduxState) => state.authUser);

  useEffect(()=>{
    const fetchCurrentUser = async()=>{
      console.log('no es el mismo');
      const fullUser = await getUserById(authUser.token, idUserPage);
      const composedUser ={...mockUser, ...fullUser }
;      setCurrentUser(composedUser);
    };
    if(authUser.authId !== idUserPage){fetchCurrentUser()} else {
      const composedUser ={...mockUser, ...authUser }
      setCurrentUser(composedUser)
    }
  }, []);

useEffect(() => {
    const fetchFriendInfo = async (friend: friendModel) => {
      const friendInfo = await getUserById(authUser.token, friend._id);
      return {...friend,...friendInfo};
    };
    const getFriendsInfo = async () => {
      try {
        const friendsInfoPromises = friendsData?.map(async (friend: any) => await fetchFriendInfo(friend));
        const friendsInfo = await Promise.all(friendsInfoPromises);
        setFriends(friendsInfo);
      } catch (error) {
        console.error('Error fetching friends info:', error);
      }
    };

    getFriendsInfo();
  }, [friendsData]);


  const sections = [ 
    { label: 'Publicaciones', value: <PostUser currentUser={currentUser} friends={friends}/> },
    { label: 'Amigos', value: <FriendPage friends={friends}/> },
    { label: 'Fotos', value: <PhotoPage userId={currentUser?.id} /> },
    { label: 'Videos', value: <VideoPage userId={currentUser?.id}  /> },
    { label: 'Información', value: <InfoUser  currentUser={currentUser} friends={friends} />},
  ];

  return (
    <div>
      <ProfileHeader
        currentUser={currentUser}
        friends={friends}
        onSelectedNav={setSelectedNav}
        currentSelectedNav={selectedNav}
        />
      <>{sections.map((item) => (selectedNav === item.label ? item.value : null))}</>
    </div>
  )
};export default ProfilePage
