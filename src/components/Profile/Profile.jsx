// import user from "./user.json";
import PropTypes from 'prop-types';
import { UserCard, Description, Image, FlexDescription, ProfileInfo } from './Profile.styled';

 const Profile = (props) => {
   const { username, tag, location, avatar, followers, views, likes } = props;
  return <UserCard>
  <Description>
    <Image
      src={avatar}
      alt="User avatar"
      className="avatar"
      />
      <FlexDescription>
    <p className="name">{username}</p>
      <p className="tag">{tag}</p>
        <p className="location">{location}</p>
        </FlexDescription>
  </Description>

  <ProfileInfo>
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </li>
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