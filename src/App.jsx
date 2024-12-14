// src/App.jsx
import { CartProvider } from "./components/CartContext/CartContext";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
import MainFooter from "./components/MainFooter/MainFooter";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <div>
          <div className="white-gradient" />
          <Header />
          <Hero />
        </div>
        <Companies />
        <Residencies />
        <ProductList />
        <Cart />
        <GetStarted />
        <Footer />
        <MainFooter />
      </div>
    </CartProvider>
  );
}

export default App;