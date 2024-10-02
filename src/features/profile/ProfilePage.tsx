import { FC, ReactElement, useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import { mockUser } from "../../mocks/index";
import { friendModel } from "../../models/friendModel";
import { UserModel } from "../../models/userModel";
import { getUserById } from "../../services/users";
import { useAppSelector } from "../../store/store";
import { IReduxState } from "../../store/store.interface";
import { getFriendsInfo } from "../../utils/friends";
import { FriendPage } from "../user/sections/FriendPage";
import { InfoUser } from "../user/sections/info/InfoProfileUser";
import { PhotoPage } from "../user/sections/PhotoPage";
import { PostUser } from "./components/postUser/PostUser";
import { VideoPage } from "./components/videos/VideoPage";
import { ProfileHeader } from "./ProfileHeader"
import { useGetFriendsListQuery } from "./services/friend.service";

const ProfilePage:FC = (): ReactElement => {

const { id: idUserPage } = useParams<{ id: string; }>();
const [currentUser, setCurrentUser] = useState<UserModel>({});
const [selectedNav, setSelectedNav] = useState('Publicaciones');
const [friends,setFriends] = useState<friendModel[]>([]);
const { data: friendsData } = useGetFriendsListQuery();

const authUser = useAppSelector((state: IReduxState) => state.authUser);
const isShowCurrentUser = authUser.authId === idUserPage;

const sections = [ 
  { label: 'Publicaciones', value: <PostUser currentUser={currentUser} friends={friends}/> },
  { label: 'Amigos', value: <FriendPage friends={friends}/> },
  { label: 'Fotos', value: <PhotoPage userId={currentUser?.id} /> },
  { label: 'Videos', value: <VideoPage userId={currentUser?.id}  /> },
  { label: 'Información', value: <InfoUser  currentUser={currentUser} friends={friends} />},
];

  useEffect(()=>{
    const fetchCurrentUser = async()=>{
      const userById = await getUserById(authUser.token, idUserPage);
      setCurrentUser({...mockUser, ...userById });
    };
    if(!isShowCurrentUser) fetchCurrentUser();
    if(isShowCurrentUser) setCurrentUser({...mockUser, ...authUser });
  }, [idUserPage]);

  useEffect(() => {
    if(!isShowCurrentUser) getFriendsInfo(authUser.token, currentUser?.friends, setFriends);
  },[currentUser]);

  useEffect(() => {
    if(isShowCurrentUser) setFriends(friendsData);
  }, [friendsData, currentUser]);

  const selectedSection = sections
    .find((section) => section.label === selectedNav)?.value;

  return (
    <div>
      <ProfileHeader
        currentUser={currentUser}
        friends={friends}
        onSelectedNav={setSelectedNav}
        currentSelectedNav={selectedNav}
      />
      {selectedSection}
    </div>
  );
};
export default ProfilePage;
