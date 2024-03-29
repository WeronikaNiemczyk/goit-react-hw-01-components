import { data } from 'data';
import { Profile } from './Profile';
import { Statistics } from './Statistics';
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
        <Profile />
        <Statistics title stats statisticData={data} />
        <FriendsList friends={friends} />
        <Transactions items={transactions} />
      </div>
    </>
  );
};
