import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Homepage from "./pages/homepage/homepage";
import Meditation from "./pages/meditation/meditation";
import Track from "./pages/track/track";

// Components
import Navbar from "./components/Navbar/navbar.component";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className=" w-screen h-screen flex flex-col items-center">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/meditation" element={<Meditation />} />
          <Route path="/track" element={<Track />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
