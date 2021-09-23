import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// Components
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import News from './pages/News';
import Login from './pages/Login';
import Register from './pages/Register';
import ContactBar from './components/ContactBar';

function App() {
  return (
    <React.Fragment>
      <ContactBar />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/rooms' exact component={Rooms} />
        <Route path='/about_us' exact component={AboutUs} />
        <Route path='/services' exact component={Services} />
        <Route path='/contact_us' exact component={ContactUs} />
        <Route path='/news' exact component={News} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <Route path='/rooms/:slug' exact component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
