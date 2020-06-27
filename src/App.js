import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props)

    var tempObj = {};
    this.eduProgram = [
      {
        position: "Astronmer",
        ageFrom: 6,
        ageTo: 7,
        totalSessions: 6,
        sessionsPerWeek: 2,
        description: "Skills idea generation originality of choice"
      },
      {
        position: "Mathematician",
        ageFrom: 6,
        ageTo: 7,
        totalSessions: 6,
        sessionsPerWeek: 2,
        description: "Skills idea generation originality of choice"
      },
      {
        position: "Writer",
        ageFrom: 6,
        ageTo: 7,
        totalSessions: 6,
        sessionsPerWeek: 2,
        description: "Skills idea generation originality of choice"
      }
    ]

    this.eduProgram.forEach((v) => {
      tempObj[v.position] = v.position;
      tempObj[v.position + "ageFrom"] = v.ageFrom;
      tempObj[v.position + "ageTo"] = v.ageTo;
      tempObj[v.position + "totalSessions"] = v.totalSessions;
      tempObj[v.position + "sessionsPerWeek"] = v.sessionsPerWeek;
      tempObj[v.position + "description"] = v.description
    });

    this.state = tempObj;
    this.openChanges = this.openChanges.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
  }

  saveChanges(e) {
    e.persist();
    console.log(e);
    e.stopPropagation();
    console.log('........................');
    var that = this;
    var tempObjSub = {
      [e.target.dataset.id_button]: document.querySelector('[data-id="' + e.target.dataset.id_button + '"]').value,
      [e.target.dataset.id_button + "ageFrom"]: document.querySelector('[data-id="' + e.target.dataset.id_button + 'ageFrom"]').value,
      [e.target.dataset.id_button + "ageTo"]: document.querySelector('[data-id="' + e.target.dataset.id_button + 'ageTo"]').value,
      [e.target.dataset.id_button + "totalSessions"]: document.querySelector('[data-id="' + e.target.dataset.id_button + 'totalSessions"]').value,
      [e.target.dataset.id_button + "sessionsPerWeek"]: document.querySelector('[data-id="' + e.target.dataset.id_button + 'sessionsPerWeek"]').value,
      [e.target.dataset.id_button + "description"]: document.querySelector('[data-id="' + e.target.dataset.id_button + 'description"]').value
    }
    this.setState(tempObjSub);
  }

  openChanges(e) {
    e.persist();
    console.log(e);
    console.log('........................');
    document.querySelector('[data-id="' + e.currentTarget.dataset.id_parent + '"]').value = this.state[e.currentTarget.dataset.id_parent];
    document.querySelector('[data-id="' + e.currentTarget.dataset.id_parent + 'ageFrom"]').value = this.state[e.currentTarget.dataset.id_parent + "ageFrom"];
    document.querySelector('[data-id="' + e.currentTarget.dataset.id_parent + 'ageTo"]').value = this.state[e.currentTarget.dataset.id_parent + "ageTo"];
    document.querySelector('[data-id="' + e.currentTarget.dataset.id_parent + 'totalSessions"]').value = this.state[e.currentTarget.dataset.id_parent + "totalSessions"];
    document.querySelector('[data-id="' + e.currentTarget.dataset.id_parent + 'sessionsPerWeek"]').value = this.state[e.currentTarget.dataset.id_parent + "sessionsPerWeek"];
    document.querySelector('[data-id="' + e.currentTarget.dataset.id_parent + 'description"]').value = this.state[e.currentTarget.dataset.id_parent + "description"];
  }

  render() {
    return (
      <div>
        {
          this.eduProgram.map((v, i) => {
            return (
              <div key={v.position + i}>
                <div className="data-container" >
                  <div className="edit-button"><button data-id_parent={v.position} onClick={((e) => this.openChanges(e))}>Edit</button></div>
                  <div className="position-display display-show">{this.state[v.position]}</div>
                  <input className="position-input input-show" data-id={v.position} />
                  <div className="age-display display-show">age from {this.state[v.position + "ageFrom"]} - {this.state[v.position + "ageTo"]}</div>
                  <div className="age-input input-show">age from <input className="agefrom-input" data-id={v.position + "ageFrom"} /> - <input className="ageto-input" data-id={v.position + "ageTo"} /></div>
                  <div className="weeks-display display-show">{this.state[v.position + "totalSessions"]} weeks | {this.state[v.position + "sessionsPerWeek"]} sessions per week</div>
                  <div className="age-input input-show"><input className="totalsessions-input" data-id={v.position + "totalSessions"} /> weeks | <input className="sessionsperweek-input" data-id={v.position + "sessionsPerWeek"} /> sessions per week</div>
                  <div className="description-display display-show">{this.state[v.position + "description"]}</div>
                  <div className="description-display display-show"><input data-id={v.position + "description"} /></div>
                  <div className="save-button"><button data-id_button={v.position} onClick={((e) => this.saveChanges(e))}>Save</button></div>
                </div>
              </div>
            )
          })
        }
      </div>
    )

  }
}


export default App;
