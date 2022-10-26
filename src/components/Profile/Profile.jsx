import PropTypes from 'prop-types';
import { UserCard, Description, Image, FlexDescription, ProfileInfo, ProfileInfoItem, ProfileName, ProfileTag, ProfileLocation, ProfileLabel, ProfileQuantity } from './Profile.styled';

const Profile = (props) => {
  const { username, tag, location, avatar, stats:{followers, views, likes} } = props;
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
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired ,
  avatar: PropTypes.string.isRequired,

  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  }).isRequired
}

export default Profile;