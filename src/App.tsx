import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import ProjectDetail from "./ui/ProjectDetail";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="about" element={<About />} />
          <Route index path="projects" element={<Projects />} />
          <Route index path="projects/:id" element={<ProjectDetail />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
