import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/landing" element={<Landing/>}/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;
