import { Profile } from './Profile/Profile';
import { user } from 'components/Profile/user';
import { Statistics } from './Statistics/Statistics';
import { data } from 'components/Statistics/data';
import { FriendsList } from './FriendsList/FriendsList';
import { friends } from 'components/FriendsList/friends';
import { transactions } from 'components/Transactions/transactions';
import { Transactions } from './Transactions/Transactions.jsx';

export const App = () => {
  return (
    <>
      <div
        style={{
          // height: '100vh',
          // display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          // color: '#010101',
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
