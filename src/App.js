import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home.js";
import SuccessPage from "./pages/Success.js";

import './styles/general.css';

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/success" element={<SuccessPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
