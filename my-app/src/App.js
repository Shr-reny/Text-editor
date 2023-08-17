import './App.css';
import NavBar from './Components/navbar.js';
import TextArea from './Components/text.js';
import Alert from './Components/alert.js';
import About from './Components/about.js';
import PropTypes from 'prop-types'
import React,{useState} from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  const[mode,setMode]=useState('light');
  const toggle=(cls)=>
  {
    removebg();
    document.body.classList.add('bg-'+cls);
    if(mode==='dark')
    {
      setMode('gray');
      document.body.style.backgroundColor='gray';
      showAlert("light mode enabled","success");
      document.title='TextUtils-Light';
    }
    else 
    {
      setMode('dark')
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
      showAlert("dark mode enabled","success");
      document.title='TextUtils-Dark';
    }
  }
    const removebg=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
  }
  const[alert,setAlert]=useState(null);
  const showAlert=(msg,type)=>
  {
    setAlert({
      msg:msg,
      type:type
    })
    window.setTimeout(
    function()
    {
      setAlert(null);
    },1500);
  }
  return (
    <Router>
    <NavBar title="text editor" etc="kuch aur" mode={mode} toggle={toggle}/>
    <Alert alert={alert}/>
    <div className="container my-5">
    <Switch>
          <Route path="/about">
          <About header="about" />
          </Route>
          <Route path="/">
          <TextArea title="Enter your text" showAlert={showAlert} mode={mode}/>
          </Route>
    </Switch>
    </div>
    </Router>
  );
}

NavBar.propTypes={
  title:PropTypes.string.isRequired
};

NavBar.defaultProps={
  title: 'set title',
  etc: 'kuch daalo'
};

export default App;
