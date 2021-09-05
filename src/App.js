import axios from "axios";
import React, { Component } from "react";
import GetDate from "./components/GetDate";
import Picture from "./components/Picture";

class App extends Component {
  state = {
    date: "",
    photo: ""
  };

  updateDate = e => {
    e.preventDefault();
    let dateFromInput = e.target[0].value;
    this.setState({ date: dateFromInput });
    this.getPicture(dateFromInput);
  };

  getPicture = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=aA53jfDx54NAdobPRkGVM0aYu7uex2u6KhWI3CBV`)
      .then(response => response.json())
      .then(photoData => this.setState({ photo: photoData }));
  };

  render() {
    return (
      <div>
        <h1>NASA's Astronomy Picture of the Day</h1>
        <GetDate updateDate={this.updateDate} />
        <Picture photo={this.state.photo} />
      </div>
    );
  }
}

export default App;