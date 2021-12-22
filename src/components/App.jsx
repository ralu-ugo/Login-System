import React from 'react';
import Form from './Form';

const isLoggedIn = false;


const App = () => {
  return (
    <div className="container">
      {!isLoggedIn ?<h1>Welcome Ralu! <br/> You are logged in.</h1> : <Form />  }
    </div>

  )
}

export default App;
