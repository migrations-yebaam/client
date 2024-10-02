import { FC, ReactElement } from 'react';
import {Link} from 'react-router-dom'

const FriendsList: FC<{ userId: string }> = ({ friends, isLoading, error }): ReactElement => {

  if (!friends) return <div>No hay amigos</div>;
  if (isLoading) return <div>Cargando lista de amigos...</div>;
  if (error) return <div>Error al cargar la lista de amigos</div>;
  return (
    <>
      <div className="list-group">
        {friends?.map((friend, index) => (
          <Link to={`/user/${friend?.authId || friend?._id}`} className='menu-link px-5'>
            <div key={index} className="list-group-item d-flex align-items-center">
              <img src={friend?.avatar} alt={friend?.name} className="rounded-circle me-3" style={{ width: '50px', height: '50px' }} />
              <div>
                <h6 className="mb-0">{`${friend?.first_name} ${friend?.last_name}`}</h6>
                <small className="text-muted">{friend?.mutualFriends} amigos en común</small>
                <h1>authId: {friend?.authId}</h1>
                <h1>_ID : {friend?._id}</h1>

              </div>
              <button className="btn btn-light ms-auto">
                <i className="bi bi-three-dots"></i>
              </button>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-3">
        <button className="btn btn-secondary">Ver todo</button>
      </div>
    </>
  );
};

export default FriendsList;
