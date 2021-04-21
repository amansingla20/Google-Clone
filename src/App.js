import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
          <Route exact path = '/' component={Home} />
            <Route path = '/search' >
             <SearchPage />
            </Route>
      </Switch>
     </div>
  </Router>
  );
}

export default App;
