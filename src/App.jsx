import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ProductDetail from "./Components/ProductDetail";
function App() { 
  const [searchInput, setSearchInput] = useState("");
  return (
   
    <>
       <Header settingSearch={setSearchInput} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main inputValue={searchInput} />}></Route>
          <Route path="/products/:slug" element={<ProductDetail />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
