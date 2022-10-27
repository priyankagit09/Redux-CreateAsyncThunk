import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {getPosts} from "./features/postSlice"

function App() {
  const {posts, rejected, loading}=useSelector((state) => state.posts)


  const dispatch =useDispatch()

useEffect(() => {
  dispatch(getPosts())
})



  return (
    <div className="App">
     
      {posts.map((items) => {
        return (
          <div key={items.id}>
            
            <h1>{items.title}</h1>
          </div>
        )
      })}
      
    </div>
  );
}

export default App;
