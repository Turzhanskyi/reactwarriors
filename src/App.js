import React from 'react';
import './App.css'

function MovieItem(props) {
  console.log("props = ", props);
  return(
      <div>
        <p>{props.title}</p>
        <p>{props.vote_average}</p>
      </div>
  )
}

function App() {
  return(
      <div className="div">
        <MovieItem title="Title new" vote_average={10.1}/>
      </div>
      )
}

export default App;
