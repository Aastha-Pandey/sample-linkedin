import 'tailwindcss/tailwind.css';
import TopNavBar from './components/header/TopNavBar';
import MidNavBar from './components/header/MidNavBar';
import Main from './components/Main';
import { homeIcon, usersIcon, briefCaseIcon, userIcon } from './../src/svg';

function App() {
  const tabNames = {
    Home: homeIcon,
    'My network': usersIcon,
    'Job offers': briefCaseIcon,
    'My profile': userIcon,
  };
  return (
    <>
      <TopNavBar />
      <MidNavBar tabNames={tabNames} size={4} />
      <Main />
    </>
  );
}

export default App;
