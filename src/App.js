import { Route, Routes } from "react-router-dom";

// component
import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";
import Degree from "./pages/Degree/Degree";
import About from "./pages/About/About";
import Certificate from "./pages/Certificate/Certificate"
import Direction from "./pages/Direction/Direction"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/degree" element={<Degree/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/cert" element={<Certificate/>}/>
        <Route path="/direction" element={<Direction/>}/>
      </Routes>
    </div>
  );
}

export default App;
