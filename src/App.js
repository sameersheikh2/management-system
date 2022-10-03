import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/Home";
import Students from "./components/list/Students";
import Teachers from "./components/list/Teachers";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list/teachers" element={<Teachers />} />
        <Route path="/list/students" element={<Students />} />
      </Routes>
    </>
  );
}

export default App;
