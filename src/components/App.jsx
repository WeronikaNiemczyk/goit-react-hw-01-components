// import { data } from 'data';
import { Profile } from './Profile';
import { user } from 'user';
import { Statistics } from './Statistics';
import { data } from 'data';
import { FriendsList } from './FriendsList';
import { friends } from 'friends';
import { Transactions } from './Transactions';
import { transactions } from 'transactions';

export const App = () => {
  return (
    <>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendsList friends={friends} />
        <Transactions items={transactions} />
      </div>
    </>
  );
};
