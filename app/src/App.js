import Nav from './components/Nav/Nav'
import {Route, Routes} from 'react-router-dom'
import Vinyl from './components/Vinyl/Vinyl';

const App = () => {
  return (
      <div className="App">
      <Nav />
    <Routes>
      <Route path='/' element={<Vinyl />} />
    </Routes>
    </div>
  );
}

export default App;