import PropTypes from 'prop-types';
import css from "./FriendsList.module.css";
import { FriendsListRender, FriendsListItem,  FriendsSpan} from './FriendsList.styled';

const FriendsList = ({friends}) => {
  return  <FriendsListRender>
    {
      (friends.map(friend => {
        //  console.log(friend.isOnline);
        return <FriendsListItem key={friend.id} >
          <FriendsSpan online={friend.isOnline}></FriendsSpan>
         
          <img className={css.friendImg} src={friend.avatar} alt="User avatar" width="70" />
          <p className={css.name}>{friend.name}</p>
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