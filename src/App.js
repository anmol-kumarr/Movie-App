import { Outlet } from 'react-router-dom';
import './App.css';
import Navigation from './components/navbar';
import MobileNav from './components/mobilenav';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Outlet></Outlet>
      <MobileNav></MobileNav>
    </div>
  );
}

export default App;
