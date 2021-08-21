import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Footer, NavBar } from "./components";
import { HomePage } from "./pages";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Router>
                <Switch>
                    <Route path="/" component={HomePage} />
                    <Route path="/#about" component={HomePage} exact />
                    <Route path="/#team" component={HomePage} exact />
                </Switch>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
