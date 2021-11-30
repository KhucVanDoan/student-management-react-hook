import "./App.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/add" element={<AddStudent />}></Route>
        <Route path="/edit/:id" element={<EditStudent />}></Route>
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
