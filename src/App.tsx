import { Footer } from "./component/Footer";
import Header from "./component/Header";
import { Container } from "react-bootstrap";
import HomeScreen from "./page/HomeScreen";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import ProductScreen from "./page/ProductScreen";

function App() {
  return (
    <Routes>
      <Header />
      <main className="py-3">
        <Container>
          <Route component={HomeScreen} exact path="/"></Route>
          <Route component={ProductScreen} path="/product/:id"></Route>
        </Container>
      </main>
      <Footer />
    </Routes>
  );
}

export default App;
