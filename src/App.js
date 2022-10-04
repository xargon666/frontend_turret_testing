import {Routes, Route} from 'react-router-dom';
import { Home, SettingsPage, GamePage, KudosPage } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/settings' element={<SettingsPage />} />
        <Route path='/game' element={<GamePage />} />
        <Route path='/kudos' element={<KudosPage />} />
      </Routes>
    </>
  );
}

export default App;
