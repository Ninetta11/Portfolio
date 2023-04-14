import { HashRouter as Router, Route } from "react-router-dom";
import 'antd/dist/antd.css';
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
    return (
        <Router>
            <Header />
            <Wrapper>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
            </Wrapper>
            <Footer />
        </Router>
    )
}

export default App;
