import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Add from './pages/Add';
import Edit from './pages/Edit';

const App = () => {

  return (
    <Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"add"} element={<Add />} />
          <Route exact path={"edit/:id"} element={<Edit />} />
        </Routes>
      </Router>
    </Fragment>
  );

}

export default App;
