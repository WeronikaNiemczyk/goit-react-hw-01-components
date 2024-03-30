import PropTypes from 'prop-types';
import css from './FriendsStyle.module.css';

export const FriendsList = ({ friends }) => {
  return (
    <>
      <ul className={css.friend_list}>
        {friends.map((friend, index) => (
          <li className={css.person} key={index}>
            <span
              className={css.status}
              style={{
                backgroundColor: `${friend.isOnline ? 'green' : 'red'}`,
              }}
            ></span>
            <img
              className={css.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.node,
};
