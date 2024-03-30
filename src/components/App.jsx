import { Profile } from './Profile/Profile';
import user from 'components/Profile/user.json';
import { Statistics } from './Statistics/Statistics';
import data from 'components/Statistics/data.json';
import { FriendsList } from './FriendsList/FriendsList';
import friends from './FriendsList/friends.json';
import transactions from 'components/Transactions/transactions.json';
import { Transactions } from './Transactions/Transactions.jsx';

export const App = () => {
  return (
    <>
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
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
