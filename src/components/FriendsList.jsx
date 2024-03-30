export const FriendsList = ({ friends }) => {
  return (
    <>
      <ul className="friend-list">
        {friends.map((friend, index) => (
          <li className="item" key={index}>
            <span className="status">{friend.isOnline}</span>
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
