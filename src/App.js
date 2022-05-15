import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { HashRouter , Routes, Route } from 'react-router-dom';
import Friends from './components/Friends/Friends';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function App() {
  return (
    <HashRouter>

      <div className='App-main'>

        <Header />

        <Navbar />

        <div className='App-content'>
          <Routes>

            <Route path='/profile' element={<Profile />} />
            <Route path='/dialogs' element={<Dialogs />} />
            <Route path='/friends' element={<Friends />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            
          </Routes>
        </div>
      </div >

    </HashRouter>
  );
}

export default App;
