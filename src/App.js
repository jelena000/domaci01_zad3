import React from 'react';
import Home from './pages/Home';
import AddPost from './pages/AddPost';
import NavBar from './components/NavBar'
import Post from './pages/Post';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div style={{paddingBottom: 50}}>
      <BrowserRouter>
        <NavBar></NavBar>
        <Route exact path="/" component={Home}></Route>
        <Route path="/add-post" component={AddPost}></Route>
        <Route path="/post/:id" component={Post}/>

      </BrowserRouter>
    </div >
  );
}

export default App;
