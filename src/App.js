import './App.css';
// import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'
import Navber from './elements/Navber';
import News from './elements/News';

const App = () =>  {
  const pageSize = 16;
  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
      <Navber/>

      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      
      <Switch>
        <Route  exact path="/">
          <News  setProgress={setProgress } key="home" pageSize={pageSize}  category="general" country="in" />
        </Route>
        <Route  exact path="/business">
          <News  setProgress={setProgress } key="business" pageSize={pageSize}  category="business" country="in" />
        </Route>
        <Route  exact path="/entertainment">
          <News  setProgress={setProgress } key="entertainment" pageSize={pageSize}  category="entertainment" country="in" />
        </Route>
        <Route  exact path="/general">
          <News  setProgress={setProgress } key="general" pageSize={pageSize}  category="general" country="in" />
        </Route>
        <Route  exact path="/health">
          <News  setProgress={setProgress } key="health" pageSize={pageSize}  category="health" country="in" />
        </Route>
        <Route  exact path="/science">
          <News  setProgress={setProgress } key="science" pageSize={pageSize}  category="science" country="in" />
        </Route>
        <Route  exact path="/sports">
          <News  setProgress={setProgress } key="sports" pageSize={pageSize}  category="sports" country="in" />
        </Route>
        <Route  exact path="/technology">
          <News  setProgress={setProgress } key="technology" pageSize={pageSize}  category="technology" country="in" />
        </Route>
        
      </Switch>
      </Router>
    </div>
  )
  
}

export default App;

