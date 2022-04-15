import Nav from "./components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import Vinyl from "./components/Vinyl/Vinyl";
import Carpet from "./components/Carpet/Carpet";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Vinyl />} />
        <Route path="/carpet" element={<Carpet />} />
      </Routes>
    </div>
  );
};

export default App;
