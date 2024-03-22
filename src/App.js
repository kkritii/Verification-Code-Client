import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/general.css';
import Home from "./pages/Home.js";
import SuccessPage from "./pages/Success.js";

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
