import{BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/Productos/ItemListContainer"
import ItemDetailsContainer from"./components/Details/ItemDetailsContainer"
import Cart from "./components/Cart";
import CartProvider from "./components/Context/CartContext";


function App() {
  return (
  <CartProvider>
  <BrowserRouter>
  <Navbar/>
  <Routes>
          <Route exact path="/" element={<ItemListContainer/>} />
            <Route exact  path="/category/:categoryId" element={<ItemListContainer />} />
            <Route exact  path="/category/:categoryId" element={<ItemListContainer />} />
           <Route exact path="/item/:id" element={<ItemDetailsContainer/>} />
           <Route  path="/cart" element={<Cart/>} />
        </Routes>
  
  </BrowserRouter>
  </CartProvider>
  ); 
}

export default App;
