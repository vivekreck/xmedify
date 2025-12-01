import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { FindDoctors } from "./pages/FindDoctors";
import { MyBookings } from "./pages/MyBookings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-doctors" element={<FindDoctors />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
