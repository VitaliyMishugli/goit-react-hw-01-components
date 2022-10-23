import PropTypes from 'prop-types';
import { FriendsListRender, FriendsListItem, FriendsSection } from './FriendsList.styled';

const FriendsList = ({friends}) => {
  // console.log(friends);
  return   <FriendsListRender>
    {
      (friends.map(friend => {
        return   <FriendsListItem key={friend.id}>
          <span>{friend.isOnline }</span>
          <img src={friend.avatar} alt="User avatar" width="48" />
          <p>{friend.name}</p>
        </FriendsListItem>
      }))
    }
    </FriendsListRender>
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
  }))
}

export default FriendsList;