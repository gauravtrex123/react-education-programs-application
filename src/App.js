import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardComponent from './card-component';
import data from './data.json';

class App extends React.Component {
  constructor(props) {
    super(props)

    var tempObj = {};
    this.eduProgram = data;
  }

  render() {
    return (
      <div className="main-container">
        {
          this.eduProgram.map((v, i) => {
            return (
              <CardComponent value={v}/>
            )
          })
        }
      </div>
    )

  }
}


export default App;
