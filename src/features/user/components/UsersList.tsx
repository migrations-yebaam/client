import {FC} from 'react'
import {OverlayTrigger, Tooltip} from 'react-bootstrap'
import { toAbsoluteUrl } from '../../../components/helpers'
import { Content } from '../../../components/layout/components/Content'
import { IconUserModel } from '../../profile/ProfileModels'

type Props = {
  users?: Array<IconUserModel>
}

const UsersList: FC<Props> = ({users = undefined}) => {
  return (
    <Content>
      {users &&
        users.map((user, i) => {
          return (
            <OverlayTrigger
              key={`${i}-${user.name}`}
              placement='top'
              overlay={<Tooltip id='tooltip-user-name'>{user.name}</Tooltip>}
            >
              <div className='symbol symbol-35px symbol-circle'>
                {user.avatar && <img src={toAbsoluteUrl(user.avatar)} alt='Pic' />}
                {user.initials && (
                  <span className='symbol-label bg-primary text-inverse-primary fw-bolder'>
                    {user.initials}
                  </span>
                )}
              </div>
            </OverlayTrigger>
          )
        })}
    </Content>
  )
}

export {UsersList}
