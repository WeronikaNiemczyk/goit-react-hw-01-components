import React from 'react';
import PropTypes from 'prop-types';
import './friendsStyle.module.css';

export const FriendsList = ({ friends }) => {
  return (
    <>
      <ul className="friend-list">
        {friends.map((friend, index) => (
          <li className="person" key={index}>
            <span
              className={
                friend.isOnline
                  ? friendsStyle.statusOnline
                  : friendsStyle.statusOffline
              }
            ></span>
            <img
              className="avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{friend.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
FriendsList.propTypes = {
  friends: PropTypes.node,
};
