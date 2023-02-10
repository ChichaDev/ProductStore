import { Header } from "./components/Header/Header";
import {StorePage} from "./Pages/StorePage/StorePage"
import {ProductPage} from "./Pages/ProductPage/ProductPage"
import {CartPage} from "./Pages/CartPage/CartPage"

function App() {
  return (
    <div>
      <Header />
      <StorePage/>
      {/* <ProductPage/> */}
      {/* <CartPage/> */}
    </div>
  );
}

export default App;
