import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SmoothScrollbar from './components/SmoothScrollbar';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <SmoothScrollbar>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </SmoothScrollbar>
      </Router>
    </>
  );
}
