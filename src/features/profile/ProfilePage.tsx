import { FC, ReactElement, useEffect, useState } from "react"
import { friendModel } from "../../models/friendModel";
import { getMainlyFriends } from "../../services/friends";
import { getUserById } from "../../services/users";
import { PostUser } from "./components/postUser/PostUser";
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

  return (
    <div>
      <ProfileHeader
        currentUser={currentUser}
        friends={friends}
        onSelectedNav={setSelectedNav}
        currentSelectedNav={selectedNav}
        />
      {selectedNav  === 'Publicaciones' ? <PostUser currentUser={currentUser} friends={friends}/> : selectedNav}

    </div>
  )
}

export default ProfilePage