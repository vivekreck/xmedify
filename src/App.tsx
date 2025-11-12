import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { FindDoctors } from "./pages/FindDoctors";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/finddoctors" element={<FindDoctors />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
