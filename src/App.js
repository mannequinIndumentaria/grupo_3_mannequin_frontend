import React from 'react';
import './App.css';
import Menu from './components/Menu';
// import BarraUser from './components/BarraUser';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';


function App() {
  return (
    <div id="wrapper">
      <Menu />
      <div id="content">
        {/*<BarraUser />*/}
        <Dashboard />
        <Footer />
      </div>
    </div>
  );
}

export default App;
