import PropTypes from 'prop-types';
import {FriendsListCard, FriendsSpan } from './FriendsListItem.styled';
import css from './FriendsListItem.module.css';


const FriendsListItem = ({ friends }) => {
  return       (friends.map(({id, isOnline,avatar, name}) => {
        //  console.log(friend.isOnline);
    return <FriendsListCard key={id} >
      <FriendsSpan online={isOnline}></FriendsSpan>
      
      <img className={css.friendImg} src={avatar} alt="User avatar" width="70" />
      <p className={css.name}>{name}</p>
    </FriendsListCard>
  }))
}


FriendsListItem.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
  })).isRequired
}

export default FriendsListItem;