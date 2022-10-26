import PropTypes from 'prop-types';
import FriendsListItem from './FriendListItem/FriendListItem';

const FriendsList = ({friends}) => {
  return <ul>
    {friends.map(({ id, isOnline, avatar, name }) => (
      < FriendsListItem
        key={id}
        isOnline={isOnline}
        src={avatar}
        name={name}
      />
    ))}
   </ul> 
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
  })).isRequired
}

export default FriendsList;