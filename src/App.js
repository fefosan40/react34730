import{BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/Productos/ItemListContainer"
import ItemDetailsContainer from"./components/Details/ItemDetailsContainer"


function App() {
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
          <Route exact path="/" element={<ItemListContainer/>} />
            <Route exact  path="/category/:categoryId" element={<ItemListContainer />} />
            <Route exact  path="/category/:categoryId" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailsContainer/>} />
        </Routes>
  
  </BrowserRouter>
  ); 
}

export default App;
