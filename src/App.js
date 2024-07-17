import { Outlet } from 'react-router-dom';
import './App.css';
import Navigation from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
