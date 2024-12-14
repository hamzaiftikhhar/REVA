import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
import MainFooter from "./components/MainFooter/MainFooter";
import ProductList from "./components/ProductList/ProductList";
// import TestComponent from "./components/TestComponent/TestComponent";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <ProductList/>
      {/* <TestComponent/> */}
      <GetStarted />
      <Footer/>
      <MainFooter/>
    </div>
  );
}

export default App;
