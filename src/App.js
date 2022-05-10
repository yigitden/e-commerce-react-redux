
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; 
import CardDetails from "./pages/CardDetails";
 import Main from "./pages/Main";
import ProductOfCategory from "./pages/ProductOfCategory";
function App() {
  return (
   <>
       
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}/> 
      <Route path="/:categoryName" element={<ProductOfCategory />}/>
      <Route path="/carddetails" element={<CardDetails />}/>  
       
    </Routes>
  </BrowserRouter>
   
  
     </>
  );
}

export default App;
