import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Flyttebilberegner from "./pages/Flyttebilberegner";
import Visualisering from "./pages/Visualisering";
import Tjekliste from "./pages/Tjekliste";
import Flytteguide from "./pages/Flytteguide";
import OmOs from "./pages/OmOs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flyttebilberegner" element={<Flyttebilberegner />} />
        <Route path="/3d-visualisering" element={<Visualisering />} />
        <Route path="/tjekliste" element={<Tjekliste />} />
        <Route path="/flytteguide" element={<Flytteguide />} />
        <Route path="/om-os" element={<OmOs />} />
      </Routes>
    </Router>
  );
}

export default App;