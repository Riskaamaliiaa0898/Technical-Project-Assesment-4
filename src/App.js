import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import AboutMe from "./Page/AboutMe/AboutMe";
import Portofolio from "./Page/Portofolio/Portofolio";
import Blog from "./Page/Blog/Blog";
import NotFound from "./Page/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Portofolio" element={<Portofolio />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
