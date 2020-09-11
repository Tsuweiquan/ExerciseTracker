import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercises extends Component {
    constructor(props) {
        super(props);   // for every constructor, require super(props)
        
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // in react, there is no variables but state
        // setup the default state
        this.state = {
            username:'',
            description : '',
            duration : 0,
            date: new Date(),
            users: []
        }
    }

    //This is a react lifecycle method that react will automatically call at different points
    // will call before anythin displays on the page 
    componentDidMount() {
        this.setState({
            users:['testUser'],
            username: "test user",
        })
    }

    //Page will be update on state change
    // textbox form is target
    onChangeUsername(e) {
        this.setState({
            username: e.target.value    // only updates the variable in the state
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value    // only updates the variable in the state
        })
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value    // only updates the variable in the state
        })
    }

    // uses the calandar
    onChangeDate(date) {
        this.setState({
            date: date    // only updates the variable in the state
        })
    }

    // on submit form
    onSubmit(e) {
        e.preventDefault();     // prevernt the default HTML form submit behavior
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }
        console.log(exercise)
        window.location = '/';  // take the person back to our home page!
    }

    render() {
        return (
            <div>
                <h3>Create New Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    <label>Username: </label>
                    <select ref="userInput"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}>
                        {
                        this.state.users.map(function(user) {
                            return <option 
                            key={user}
                            value={user}>{user}
                            </option>;
                        })
                        }
                    </select>
                </div>
                <div className="form-group"> 
                    <label>Description: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                        />
                </div>
                <div className="form-group">
                    <label>Duration (in minutes): </label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.state.duration}
                        onChange={this.onChangeDuration}
                        />
                </div>
                <div className="form-group">
                    <label>Date: </label>
                    <div>
                    <DatePicker
                        selected={this.state.date}
                        onChange={this.onChangeDate}
                    />
                    </div>
                </div>

                <div className="form-group">
                    <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                </div>
                </form>
            </div>
        )
    }
}