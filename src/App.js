import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React from "react";
import { Footer, NavBar } from "./components";
import { HomePage,Login,Register} from "./pages";
 function App() {
     return (
         <React.Fragment>
             
         <div className="App">
             <NavBar />
             <Router>
                 <Switch>
                     <Route path="/login" component={Login} />
                     <Route path="/register" component={Register} />
                     <Route path="/" component={HomePage} />
                     <Route path="/#about" component={HomePage} exact />
                     <Route path="/#team" component={HomePage} exact />

                 </Switch>
                 </Router>
             <Footer />
         </div>
         
        
         </React.Fragment>
     );
 }

export default App;
