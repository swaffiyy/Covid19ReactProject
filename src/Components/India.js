import React, { Component } from "react";
import { Card } from "react-bootstrap";
import States from "./States";
import axios from "axios";

class India extends Component {
  constructor(){
    super();
    this.state={
      indiaData : {}
    }
  }
  componentDidMount(){
    axios.get("https://corona.lmao.ninja/v2/countries/india").then(response =>{

    this.setState({indiaData: response.data});
    console.log(response)

    })
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <img src="https://www.countryflags.io/in/flat/64.png"></img>
          <h3>India</h3>
        </div>
        <div className="col-md-3">
          <Card className="badge badge-primary" style={{ width: "18rem" }}>
            <Card.Body className="text-center">
              <Card.Title>Total Cases</Card.Title>
              <h3>{this.state.indiaData.cases}</h3>
              <Card.Text>
                [Today: {this.state.indiaData.todayCases}]
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="badge badge-warning" style={{ width: "18rem" }}>
            <Card.Body className="text-center">
              <Card.Title>Active Cases</Card.Title>
              <h3>{this.state.indiaData.active}</h3>
              <Card.Text>
              [Today: ]
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="badge badge-success" style={{ width: "18rem" }}>
            <Card.Body className="text-center">
              <Card.Title>Recovered</Card.Title>
              <h3>{this.state.indiaData.recovered}</h3>
              <Card.Text>
                [Today: {this.state.indiaData.todayRecovered}]
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="badge badge-danger" style={{ width: "18rem" }}>
            <Card.Body className="text-center">
              <Card.Title>Total Deaths</Card.Title>
              <h3>{this.state.indiaData.deaths}</h3>
              <Card.Text>
                [Today: {this.state.indiaData.todayDeaths}]
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-12">
            <States/>
            </div>
      </div>
    );
  }
}
export default India;
