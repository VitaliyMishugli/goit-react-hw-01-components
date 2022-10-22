import Profile from "../Profile/Profile";
import Statistics from "components/Statistics/Statistics";
import user from "../Profile/user.json";
import data from "../Statistics/data.json";
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
        

    </Container>
  );
};
