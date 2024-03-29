import { friends } from 'friends';

export const FriendsList = () => {
  return (
    <>
      <ul className="friend-list">
        {friends.map((f, index) => (
          <li className="item" key={index}>
            <span className="status">{f.isOnline}</span>
            <img
              className="avatar"
              src={f.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{f.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
