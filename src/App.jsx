import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/index.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
