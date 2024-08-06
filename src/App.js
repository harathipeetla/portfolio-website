import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './components/Header'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
   <Header/>
          <Switch>
            <Route exact path = "/" component={Home}/>
            <Route  path = "/about" component={About}/>
            <Route  path = "/projects" component={Projects}/>
            <Route path = "/contact" component={Contact}/>
          </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
