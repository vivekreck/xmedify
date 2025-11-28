import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { FindDoctors } from "./pages/FindDoctors";
import { MyBookings } from "./pages/MyBookings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/finddoctors" element={<FindDoctors />} />
        <Route path="/mybookings" element={<MyBookings />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
