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
      class="avatar"
      />
      <FlexDescription>
    <p class="name">{username}</p>
      <p class="tag">{tag}</p>
        <p class="location">{location}</p>
        </FlexDescription>
  </Description>

  <ProfileInfo>
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{likes}</span>
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