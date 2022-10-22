import PropTypes from 'prop-types';
import { FriendsListRender, FriendsListItem } from './FriendsList.styled';

const FriendsList = ({friends}) => {
  return <FriendsListRender>
    {friends.map(friend => {
      console.log(friend);
      <FriendsListItem key={friend.id}>
      <span class="status"></span>
      <img src={friend.avatar} alt="User avatar" width="48" />
      <p>{friend.name}</p>
    </FriendsListItem>
    })}
    


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