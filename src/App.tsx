import { Header } from "./components/Header/Header";
import { StorePage } from "./Pages/StorePage/StorePage";
import { ProductPage } from "./Pages/ProductPage/ProductPage";
import { CartPage } from "./Pages/CartPage/CartPage";
import { Route, Routes } from "react-router-dom";
import { Error404 } from "Pages/Error404/Error404";

function App() {
  return (
    <div>
      <Header /> 
      <Routes>
        <Route path="/" element={<StorePage />} />
        <Route path="/productpage/:id"element={<ProductPage />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="*" element={<Error404/>} />
      </Routes>
    </div>
  );
}

export default App;
