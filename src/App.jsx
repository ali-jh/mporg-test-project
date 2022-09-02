import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";

import { Login } from "./pages/login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;
