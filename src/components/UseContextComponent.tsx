import { useContext, useState } from 'react';
import UserContext, { UserState } from '../store';

const ConsumerComponent = () => {
  const user = useContext<UserState>(UserContext);
  return (
    <div>
      <div>First: {user.first}</div>
      <div>First: {user.last}</div>
    </div>
  );
};

const UseContextComponent = () => {
  const [user, setUser] = useState<UserState>({
    first: 'Jane',
    last: 'Smith',
  });
  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
      <button
        onClick={() =>
          setUser({
            first: 'Josie',
            last: 'Walas',
          })
        }
      >
        Change context
      </button>
    </UserContext.Provider>
  );
};

export default UseContextComponent;
