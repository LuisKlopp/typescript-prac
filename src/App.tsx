// import React, { useState } from 'react';
// import List from './components/List';
import './App.css';
// import AddTolist from './components/AddToList';
import UseStateComponent from './components/UseStateComponent';
import UseEffectComponent from './components/UseEffectComponent';
import UseContextComponent from './components/UseContextComponent';
import UseReducerComponent from './components/UseReducerComponent';

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  // const [people, setPeople] = useState<IState['people']>([
  //   {
  //     name: 'LeBron James',
  //     age: 36,
  //     url: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
  //     note: 'Allegeric to staying on the same team',
  //   },
  // ]);

  return (
    <div>
      {/* <h1>people invited in my party</h1>
      <List people={people} />
      <AddTolist people={people} setPeople={setPeople} /> */}
      <h1>useReducer</h1>
      <UseReducerComponent />
      <h1>useContext</h1>
      <UseContextComponent />
      <h1>useEffect</h1>
      <UseEffectComponent />
      <h1>useState</h1>
      <UseStateComponent />
    </div>
  );
}

export default App;
