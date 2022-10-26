import PropTypes from 'prop-types';
import {FriendsListCard, FriendsSpan } from './FriendsListItem.styled';
import css from './FriendsListItem.module.css';

const FriendsListItem = ({  isOnline, src, name }) => {
 
    return <FriendsListCard  >
      <FriendsSpan online={isOnline}></FriendsSpan>
      
      <img className={css.friendImg} src={src} alt="User avatar" width="70" />
      <p className={css.name}>{name}</p>
    </FriendsListCard>
  }

FriendsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
}

export default FriendsListItem;