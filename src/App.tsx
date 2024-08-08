import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="about" element={<About />} />
          <Route index path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
