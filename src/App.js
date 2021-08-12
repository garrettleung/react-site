import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Projects, Resume, Yelp} from "./components";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/Projects" exact component={() => <Projects />} />
          <Route path="/Resume" exact component={() => <Resume />} />
          <Route path="/Yelp" exact component={() => <Yelp />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;