import { Route, Routes } from "react-router-dom";

// component
import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";
import Degree from "./pages/Degree/Degree";
import About from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<Team />} /> */}
        <Route path="/degree" element={<Degree/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
