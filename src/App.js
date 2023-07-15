import React from 'react';
import './App.css'
import Header from './components/comman/heading/Header';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';
import Team from './components/team/Team';
import Price from './components/pricing/Price';
import Blog from './components/blog/Blog';

const App = () => {
  return (
    <div>
     <BrowserRouter>
        <Header/>
          <Switch>
            <Route exact path='/'> <Home/> </Route>
            <Route exact path='/about'> <About/> </Route>
            <Route exact path='/courses'> <CourseHome/> </Route>
            <Route exact path='/team'> <Team/> </Route>
            <Route exact path='/pricing'> <Price/> </Route>
            <Route exact path='/journal'> <Blog/> </Route>
          </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;