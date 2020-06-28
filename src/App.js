import React from 'react';
import './App.css';
import CardComponent from './card-component';
import data from './data.json';
import 'font-awesome/css/font-awesome.min.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.eduProgram = data;
    this.quantShow = this.quantShow.bind(this);
    this.state = {
      showMode: 'See All'
    }
  }

  quantShow() {
    if (this.state.showMode == 'See All') {
      this.setState({
        showMode: 'See Less'
      })
    } else {
      this.setState({
        showMode: 'See All'
      })
    }
  }

  render() {
    return (
      <div className="main-container">
        <div className="title-content">
          <div className="browse-content">
            <div className="browse-main-content">Browse Programs</div>
            <div className="browse-sub-content">Choose from variety of programs based on your child's interest and enroll them for weekly learning sessions</div>
          </div>
          <div className="show-less-more" onClick={this.quantShow}>{this.state.showMode}<i className="fa fa-chevron-circle-right show-icon"></i></div>
        </div>
        <div className="program-container">
          {
            this.eduProgram.map((v, i) => {
              if (this.state.showMode == 'See All') {
                if (i < 3) {
                  return (
                    <CardComponent key={v.position} value={v} />
                  )
                }
              } else {
                return (
                  <CardComponent key={v.position} value={v} />
                )
              }
            })
          }
        </div>
      </div>
    )

  }
}


export default App;
