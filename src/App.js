import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import "./App.css";
import List from './Components/list'



function App() {
  return (
    <Router>
      <main>
        <Switch>
            <Route path="/">
              <List />
            </Route>
        </Switch>
      </main>
    </Router>
  );

}

export default App;