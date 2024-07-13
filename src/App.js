import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Homepage from "./screens/HomeScreen";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/CSE/BTech" element={<Navigate to="/btech-in-computer-science-engineering" />} /> */}
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/Sugam-Darshan" element={<div className="h-screen flex items-center justify-center">
            <p style={{ fontSize: 30, fontWeight: 'bolder' }}>Services Categories work in progress</p>
          </div>} />
          <Route exact path="/b" element={<p>Special Promo work in progress</p>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;