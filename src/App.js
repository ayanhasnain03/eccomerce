import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen";
export default function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
        <Link to="/">amazona</Link>
      </header>
      </div>
        <Routes>
          <Route path='/' element={<HomeScreen/>}/>
          <Route path='/product/:slug' element={<ProductScreen/>}/>
          </Routes>
       
    </BrowserRouter>
  );
}
