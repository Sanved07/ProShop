import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductsScreen from "./screens/ProductsScreen";
import CartScreen from "./screens/CartScreen";
import { Route, BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className="py-3">
          <Container>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/products/:id" component={ProductsScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
          </Container>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
