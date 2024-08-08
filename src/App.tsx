import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import About from "./pages/About";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<About />} />
          <Route path="/resume" element={<About />} />
          <Route path="/contact" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
