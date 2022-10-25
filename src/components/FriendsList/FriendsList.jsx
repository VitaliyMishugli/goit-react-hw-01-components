import PropTypes from 'prop-types';
import friends from "../FriendsList/friends.json";
import FriendsListItem from './FriendListItem/FriendListItem';

const FriendsList = () => {
  return  <ul>
            <FriendsListItem
            friends={friends}/>
          </ul>
}

export default FriendsList;