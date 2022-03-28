import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import DogCreate from "./components/DogCreate";
import Detail from "./components/Detail";
// import About from "./components/About";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/dog" element={<DogCreate />} />
          <Route exact path="/dogs/:id" element={<Detail />} />
          {/* <Route exact path="/about" element={<About/>}/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
