import { Route, Routes } from "react-router-dom";

// component
import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";
import Degree from "./pages/Degree/Degree";
import About from "./pages/About/About";
import Certificate from "./pages/Certificate/Certificate"
import Direction from "./pages/Direction/Direction"
import News from "./pages/News/News"
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/degree" element={<Degree/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/cert" element={<Certificate/>}/>
        <Route path="/direction" element={<Direction/>}/>
        <Route path="/news" element={<News/>}/>
      </Routes>
    </div>
  );
}

export default App;
