import Nav from "./components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import Vinyl from "./components/Vinyl/Vinyl";
import Carpet from "./components/Carpet/Carpet";
import Overview from "./components/Overview/Overview";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Vinyl />} />
        <Route path="/carpet" element={<Carpet />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
