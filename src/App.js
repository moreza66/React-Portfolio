import React from 'react';
import Header from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  return (
    <>
    <div>
      <Header></Header>
    </div>
 
  </>
  );
}


// const express = require('express')
// const app = express();

// const path = require('path');
// const port = process.env.PORT || 5000;
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static('build'));
//   app.get ('*', (req, res) => {
//     req.sendfile(path.resolve(__dirname, 'build', 'index.html'));
//   })
// }

// app.listen(port, (err) => {
//   if (err) return console.log(err);
//   console.log('Server Running', port);
// })


export default App;