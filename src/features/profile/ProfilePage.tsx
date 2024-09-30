import { FC, ReactElement, useEffect, useState } from "react"
import { friendModel } from "../../models/friendModel";
import { getMainlyFriends } from "../../services/friends";
import { getUserById } from "../../services/users";
import { FriendPage } from "../user/sections/FriendPage";
import { InfoUser } from "../user/sections/info/InfoProfileUser";
import { PhotoPage } from "../user/sections/PhotoPage";
import { PostUser } from "./components/postUser/PostUser";
import { VideoPage } from "./components/videos/VideoPage";
import { ProfileHeader } from "./ProfileHeader"

const ProfilePage:FC = (): ReactElement => {

const [currentUser, setCurrentUser] = useState({});
const [friends, setFriends] = useState<friendModel[]>([]);
const [selectedNav, setSelectedNav] = useState('Publicaciones');

  useEffect(()=>{
    const fetchCurrentUser = async()=>{
      const fullUser = await getUserById('215510789165');
      console.log({fullUser});
      setCurrentUser(fullUser);
    };
    fetchCurrentUser();
  }, []);

  useEffect(()=>{
    const fetchFriendList = async()=>{
      const fullFriendList = await getMainlyFriends(215510789165);
      console.log({fullFriendList});
      setFriends(fullFriendList);
    };
    fetchFriendList();
  }, []);

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
};
export default ProfilePage
