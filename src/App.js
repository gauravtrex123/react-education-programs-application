import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';

class App extends React.Component {
  constructor(props) {
    super(props)

    var tempObj = {};
    this.eduProgram = data;

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
    document.querySelectorAll('.' + e.target.dataset.id_button + '-input-show').forEach(function (v) {
      v.style.display = 'none';
    })

    document.querySelectorAll('.' + e.target.dataset.id_button + '-display-show').forEach(function (v) {
      v.style.display = 'block';
    })

    document.querySelector('.' + e.target.dataset.id_button + '-save-button').style.display = 'none';
    document.querySelector('.' + e.target.dataset.id_button + '-edit-button').style.display = 'block';

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
    document.querySelectorAll('.' + e.target.dataset.id_parent + '-input-show').forEach(function (v) {
      v.style.display = 'block';
    })

    document.querySelectorAll('.' + e.target.dataset.id_parent + '-display-show').forEach(function (v) {
      v.style.display = 'none';
    })

    document.querySelector('.' + e.target.dataset.id_parent + '-save-button').style.display = 'block';
    document.querySelector('.' + e.target.dataset.id_parent + '-edit-button').style.display = 'none';

    document.querySelector('[data-id="' + e.currentTarget.dataset.id_parent + '"]').value = this.state[e.currentTarget.dataset.id_parent];
    document.querySelector('[data-id="' + e.currentTarget.dataset.id_parent + 'ageFrom"]').value = this.state[e.currentTarget.dataset.id_parent + "ageFrom"];
    document.querySelector('[data-id="' + e.currentTarget.dataset.id_parent + 'ageTo"]').value = this.state[e.currentTarget.dataset.id_parent + "ageTo"];
    document.querySelector('[data-id="' + e.currentTarget.dataset.id_parent + 'totalSessions"]').value = this.state[e.currentTarget.dataset.id_parent + "totalSessions"];
    document.querySelector('[data-id="' + e.currentTarget.dataset.id_parent + 'sessionsPerWeek"]').value = this.state[e.currentTarget.dataset.id_parent + "sessionsPerWeek"];
    document.querySelector('[data-id="' + e.currentTarget.dataset.id_parent + 'description"]').value = this.state[e.currentTarget.dataset.id_parent + "description"];
  }

  render() {
    return (
      <div className="main-container">
        {
          this.eduProgram.map((v, i) => {
            return (
              <div className="data-container" key={v.position + i}>
                <div className="course-image"><img src={v.imgCourse} /></div>
                <div className="second-container">
                  <div className="position-age-container">
                    <div className="position-container">
                      <div className={"position-display display-show " + v.position + "-display-show"}>{this.state[v.position]}</div>
                      <input className={"position-input input-show " + v.position + "-input-show"} data-id={v.position} />
                    </div>
                    <div className="age-container">
                      <div className={"age-display display-show " + v.position + "-display-show"}>Age {this.state[v.position + "ageFrom"]} - {this.state[v.position + "ageTo"]}</div>
                      <div className={"age-input input-show " + v.position + "-input-show"}>Age <input className="agefrom-input" data-id={v.position + "ageFrom"} /> - <input className="ageto-input" data-id={v.position + "ageTo"} /></div>
                    </div>
                  </div>
                  <div className="weeks-container">
                    <div className={"weeks-display display-show " + v.position + "-display-show"}>{this.state[v.position + "totalSessions"]} sessions | {this.state[v.position + "sessionsPerWeek"]} per week</div>
                    <div className={"age-input input-show " + v.position + "-input-show"}><input className="totalsessions-input" data-id={v.position + "totalSessions"} /> sessions | <input className="sessionsperweek-input" data-id={v.position + "sessionsPerWeek"} /> per week</div>
                  </div>
                  <div className="description-container">
                    <div className={"description-display display-show " + v.position + "-display-show"}>{this.state[v.position + "description"]}</div>
                    <div className={"description-input input-show " + v.position + "-input-show"}><input data-id={v.position + "description"} /></div>
                  </div>
                  <div className="button-container"><button className={"edit-button " + v.position + "-edit-button"} data-id_parent={v.position} onClick={((e) => this.openChanges(e))}>Edit</button>
                    <button className={"save-button " + v.position + "-save-button"} data-id_button={v.position} onClick={((e) => this.saveChanges(e))}>Save</button></div>
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
