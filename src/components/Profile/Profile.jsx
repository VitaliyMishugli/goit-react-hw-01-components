import PropTypes from 'prop-types';
import css from "./Profile.module.css";
import { UserCard, Description, Image, FlexDescription, ProfileInfo, ProfileInfoItem } from './Profile.styled';



const Profile = (props) => {
  const { username, tag, location, avatar, followers, views, likes } = props;
  return <UserCard>
  <Description>
    <Image
      src={avatar}
      alt="User avatar"
      />
    <FlexDescription>
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
    </FlexDescription>
  </Description>

  <ProfileInfo>
    <ProfileInfoItem>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{followers}</span>
    </ProfileInfoItem>
    <ProfileInfoItem>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{views}</span>
    </ProfileInfoItem>
    <ProfileInfoItem>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{likes}</span>
    </ProfileInfoItem>
  </ProfileInfo>
</UserCard>
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string ,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number

}

export default Profile;