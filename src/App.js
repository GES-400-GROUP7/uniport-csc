import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Team />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
