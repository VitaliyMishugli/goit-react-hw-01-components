import PropTypes from 'prop-types';
// import css from "./Profile.module.css";
import { UserCard, Description, Image, FlexDescription, ProfileInfo, ProfileInfoItem, ProfileName, ProfileTag, ProfileLocation, ProfileLabel, ProfileQuantity } from './Profile.styled';



const Profile = (props) => {
  const { username, tag, location, avatar, followers, views, likes } = props;
  return <UserCard>
  <Description>
    <Image
      src={avatar}
      alt="User avatar"
      />
    <FlexDescription>
        <ProfileName>{username}</ProfileName>
        <ProfileTag>{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
    </FlexDescription>
  </Description>

  <ProfileInfo>
    <ProfileInfoItem>
      <ProfileLabel>Followers</ProfileLabel>
      <ProfileQuantity>{followers}</ProfileQuantity>
    </ProfileInfoItem>
    <ProfileInfoItem>
      <ProfileLabel>Views</ProfileLabel>
      <ProfileQuantity>{views}</ProfileQuantity>
    </ProfileInfoItem>
    <ProfileInfoItem>
      <ProfileLabel>Likes</ProfileLabel>
      <ProfileQuantity>{likes}</ProfileQuantity>
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