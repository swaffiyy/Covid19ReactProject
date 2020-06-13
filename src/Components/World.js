import React, { Component } from 'react';
import { Card } from "react-bootstrap";
import axios from "axios";

class World extends Component{

    constructor() {
        super();
        this.state = {
          data: [],
          worldData:{}
        };
      }
    
      componentDidMount() {
        axios
          .get("https://corona.lmao.ninja/v2/countries")
          .then((response) => {
            
            this.setState({ data: response.data });
            console.log(response.data)
          });

          axios
          .get("https://corona.lmao.ninja/v2/all")
          .then((response) => {
            
            this.setState({ worldData: response.data });
            //console.log(response.data)
          });
      }
     
    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <h3>World</h3>
                </div>
                <div className="col-md-3">
          <Card className="badge badge-primary" style={{ width: "18rem" }}>
            <Card.Body className="text-center">
              <Card.Title>Total Cases</Card.Title>
              <h3>{this.state.worldData.cases}</h3>
              <Card.Text>
                [Today: {this.state.worldData.todayCases}]
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="badge badge-warning" style={{ width: "18rem" }}>
            <Card.Body className="text-center">
              <Card.Title>Active Cases</Card.Title>
              <h3>{this.state.worldData.active}</h3>
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
              <h3>{this.state.worldData.recovered}</h3>
              <Card.Text>
                [Today: {this.state.worldData.todayRecovered}]
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="badge badge-danger" style={{ width: "18rem" }}>
            <Card.Body className="text-center">
              <Card.Title>Total Deaths</Card.Title>
              <h3>{this.state.worldData.deaths}</h3>
              <Card.Text>
                [Today: {this.state.worldData.todayDeaths}]
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        
                <div className="col-md-12 mt-5">
                    <table className="table table-bordered table-striped">
                        <thead className="bg-info text-white">
                            <tr>
                                <td>Country</td>
                                <td>Cases</td>
                                <td>Recovered</td>
                                <td>Deaths</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((item,key)=>{
                                    return(
                                    <tr key={key}>
                                        <td>{item.country}</td>
                                        <td>{item.cases}</td>
                                        <td>{item.recovered}</td>
                                        <td>{item.deaths}</td>
                                    </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default World;