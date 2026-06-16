import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Pages/Index.jsx";
import Sign_in from "./Pages/Sign_in.jsx";
import CreateAccount from "./Pages/CreateAccount.jsx";
import Home from "./Pages/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sign-in" element={<Sign_in />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;