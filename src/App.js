import { HashRouter as Router, Route } from "react-router-dom";
import 'antd/dist/antd.css';
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Achievements from "./pages/Achievements";
import About from "./pages/About";
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
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/achievements" component={Achievements} />
                <Route exact path="/about" component={About} />
            </Wrapper>
            <Footer />
        </Router>
    )
}

export default App;
