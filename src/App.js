
import Login from './components/Login';
import Pages from './Pages';
import {BrowserRouter as Router} from 'react-router-dom';
import { DataProvider } from './GlobalState';
function App() {
  return (
    <DataProvider>
        <div className="App">
          <Router>
            <Pages />
          </Router>
        </div>
      
    </DataProvider>
  );
}

export default App;
