import "./App.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experiences from "./pages/Experiences";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/projects" element={<Projects/>} />
          <Route exact path="/experiences" element={<Experiences/>} />
          <Route exact path="/project/:id" element={<ProjectDisplay/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
