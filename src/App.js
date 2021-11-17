import 'tailwindcss/tailwind.css';
import TopNavBar from './components/header/TopNavBar';
import MidNavBar from './components/header/MidNavBar';
import Main from './components/main/Main';
import { createContext, useState } from 'react';
import { midTabNames, userData } from './constants';

export const userContext = createContext();

function App() {
  const [user] = useState(userData);
  return (
    <>
      <userContext.Provider value={{ user }}>
        <TopNavBar />
        <MidNavBar tabNames={midTabNames} />
        <Main />
      </userContext.Provider>
    </>
  );
}

export default App;
