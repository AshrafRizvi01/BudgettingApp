import {BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/sidebar/Navbar';
import Budget from './pages/Budget';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Budget" component={Budget} />
          <Route path="/Reports" component={Reports} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
