import React from 'react';

class CardComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            position: props.value.position,
            imgCourse: props.value.imgCourse,
            ageFrom: props.value.ageFrom,
            ageTo: props.value.ageTo,
            totalSessions: props.value.totalSessions,
            sessionsPerWeek: props.value.sessionsPerWeek,
            description: props.value.description,
            mode: 'display'
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.changeMode = this.changeMode.bind(this);
    }

    handleInputChange(event) {
        event.preventDefault(); 
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    changeMode(event){
        event.preventDefault();
        this.setState({
           mode:event.target.name
        });
    } 

    render() {
        return (
            <div className="data-container">
                <div className="course-image"><img src={this.state.imgCourse} /></div>
                <div className="second-container">
                    <form>
                        <div className="position-age-container">
                            <div className="position-container">
                                {this.state.mode == 'display' ?
                                    <div className="position-display display-show">{this.state.position}</div>
                                    :
                                    <input className="position-input input-show" name="position" defaultValue={this.state.position} onChange={this.handleInputChange} />
                                }
                            </div>
                            <div className="age-container">
                                {this.state.mode == 'display' ?
                                    <div className="age-display display-show">Age {this.state.ageFrom} - {this.state.ageTo}</div>
                                    :
                                    <div className="age-input input-show">Age <input className="agefrom-input" name="ageFrom" defaultValue={this.state.ageFrom} onChange={this.handleInputChange} /> - <input className="ageto-input" name="ageTo" defaultValue={this.state.ageTo} onChange={this.handleInputChange} /></div>
                                }
                            </div>
                        </div>
                        <div className="weeks-container">
                            {this.state.mode == 'display' ?
                                <div className="weeks-display display-show">{this.state.totalSessions} sessions | {this.state.sessionsPerWeek} per week</div>
                                :
                                <div className="age-input input-show"><input className="totalsessions-input" name="totalSessions" defaultValue={this.state.totalSessions} onChange={this.handleInputChange} /> sessions | <input className="sessionsperweek-input" name="sessionsPerWeek" defaultValue={this.state.sessionsPerWeek} onChange={this.handleInputChange} /> per week</div>
                            }
                        </div>
                        <div className="description-container">
                            {this.state.mode == 'display' ?
                                <div className="description-display display-show">{this.state.description}</div>
                                :
                                <div className="description-input input-show"><input name="description" defaultValue={this.state.description} onChange={this.handleInputChange} /></div>
                            }
                        </div>
                        <div className="view-detail-container">View Details</div>
                        <div className="button-container">
                            {this.state.mode == 'display' ?
                                <button className="edit-button" name="edit" onClick={this.changeMode}>Edit</button>
                                :
                                <button className="save-button" name="display" onClick={this.changeMode}>Save</button>
                            }
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default CardComponent;