import { BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HeaderTop from "./components/Header/HeaderTop";
import Home from "./pages/Home/Home";

function App() {
  return (
   <>
   <BrowserRouter>
   <HeaderTop></HeaderTop>
   <Header></Header>
   <Routes>
   
   </Routes>
</BrowserRouter>
   </>
  );
}

export default App;
