import React, { Component } from "react";
import axios from "axios";
import { Accordion, Card, Button } from "react-bootstrap";

class States extends Component {
  constructor() {
    super();
    this.state = {
      stateData: {},
    };
  }

  componentDidMount() {
    axios
      .get("https://api.covid19india.org/state_district_wise.json")
      .then((response) => {
        //console.log(response.data);
        this.setState({ stateData: response.data });
        // stateData is object not array
      });
  }
  render() {
      // so we want keys to iterate over object -we cant iterate object so we create- key names getting in array- array we iterate always
      let keys = Object.keys(this.state.stateData);
      //console.log(keys);
    return (
        
        // map work with array pnly not object - so we use accordion
        
      <div className="row">
        
        <div className="col-md-12 mt-5">
          <Accordion>
              {
                  keys.map((item,key)=>{
                      let districts = this.state.stateData[item].districtData;
                      let district_keys = Object.keys(districts);
                      //console.log(districts);
                      //console.log(district_keys);

                      let total_confirmed=0;
                      let total_active=0;
                      let total_recovered=0;
                      let total_deaths=0;

                      let district_list = [];
                      for(let x in districts){
                        total_confirmed+= districts[x].confirmed;
                          total_active += districts[x].active;
                          total_recovered += districts[x].recovered;
                          total_deaths += districts[x].deceased;

                          let dist = districts[x];
                          dist["district_name"]= x;
                          district_list.push(dist);
                          
                      }
                      //console.log(district_list)

                      return (
                        <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Button} variant="info" eventKey={key} className="w-100 text-left">
                      {item} - <span className="btn-secondary p-1 mr-2 rounded">Total Cases - {total_confirmed}</span>
                      <span className="btn-secondary p-1 mr-2 rounded">Active Cases - {total_active}</span>
                      <span className="btn-secondary p-1 mr-2 rounded">Recovered - {total_recovered}</span>
                      <span className="btn-secondary p-1 mr-2 rounded">Deaths - {total_deaths}</span>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={key}>
                          <Card.Body>
                              <table className="table table-bordered">
                                  <thead>
                                      <tr>
                                          <td>Districts</td>
                                          <td>Confiremed</td>
                                          <td>Active</td>
                                          <td>Recovered</td>
                                          <td>Deaths</td>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      {
                                    district_list.map((item,key)=>{
                                            return(
                                                <tr key={key}>
                                                    <td>{item.district_name}</td>
                                                    <td>{item.confirmed}</td>
                                                    <td>{item.active}</td>
                                                    <td>{item.recovered}</td>
                                                    <td>{item.deceased}</td>
                                                </tr>
                                            )
                                    })
                                }
                                    
                                      {/* {

                                        district_keys.map((item,key)=>{
                                        return(
                                            <tr>
                                                <td>{item}</td>
                                            </tr>
                                        )
                                          })
                                      } */}
                                     
                                  </tbody>
                              </table>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      )
                  })
              }
            
            
          </Accordion>
        </div>
      </div>
    );
  }
}
export default States;
