import Profile from "../Profile/Profile";
import Statistics from "components/Statistics/Statistics";
import FriendsList from "components/FriendsList/FriendsList";
import TransactionHistory from "components/TransactionHistory/TransactionHistory";
import user from "../Profile/user.json";
import data from "../Statistics/data.json";
import friends from "../FriendsList/friends.json";
import transactions from "../TransactionHistory/transactions.json";
import { Container } from "./App.styled";

export const App = () => {
  return (
    <Container>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics
        title="Upload stats"
        stats={data}
      />

      <FriendsList
        friends={friends}
      />

      <TransactionHistory items={transactions} />
        

    </Container>
  );
};
