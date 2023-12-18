import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen";
import  Navbar  from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import  Container  from 'react-bootstrap/Container';
export default function App() {
  return (
    <BrowserRouter>
    <div className="d-flex flex-column site-container">
      <header>
        <Navbar variant="dark">
          <Container>
            <LinkContainer to="/">
<Navbar.Brand>amazona</Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>
        <Routes>
          <Route path='/' element={<HomeScreen/>}/>
          <Route path='/product/:slug' element={<ProductScreen/>}/>
          </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
        </div>
    </BrowserRouter>
  );
}
