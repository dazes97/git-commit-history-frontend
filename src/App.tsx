import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage, NotFound } from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={MainPage} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
