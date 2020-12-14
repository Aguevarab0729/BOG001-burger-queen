import './App.scss';
import Home from './components/home/Home.jsx';
//import Waiter from './views/Waiter.jsx';
//import Naver from './components/naver/Naver.jsx'
//import Header from './components/header/Header.jsx'
//import Footer from './components/home/Footer.jsx';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    </Router>
    /*<Header />,
    <Waiter />,
    <Naver />*/
  );
};

export default App;
