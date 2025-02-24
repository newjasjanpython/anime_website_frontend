import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/navbar";

import HomePage from "./pages/home";
import AboutPage from "./pages/about";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="about/" element={<AboutPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
