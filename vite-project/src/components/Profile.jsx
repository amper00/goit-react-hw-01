
import PropTypes from 'prop-types';


const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src={image}
          alt="User avatar"
          className="profile-image"
        />
        <p className="profile-name">{name}</p>
        <p className="profile-tag">@{tag}</p>
        <p className="profile-location">{location}</p>
      </div>

      <ul className="stats-list">
        <li className="stat-item">
          <span className="stat-label">Followers</span>
          <span className="stat-value">{stats.followers}</span>
        </li>
        <li className="stat-item">
          <span className="stat-label">Views</span>
          <span className="stat-value">{stats.views}</span>
        </li>
        <li className="stat-item">
          <span className="stat-label">Likes</span>
          <span className="stat-value">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
