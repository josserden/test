import { CardList } from './components';
import users from './data/users.json';

export const App = () => {
  return <CardList users={users} />;
};
