import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
          <Route exact path = '/' component={Home} />
            <Route path = '/search' >
              <h1 style= {{textAlign:'center'}}>This is Search Page which will going to be build shortly</h1>
            </Route>
      </Switch>
     </div>
  </Router>
  );
}

export default App;
