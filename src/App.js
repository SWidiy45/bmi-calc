import "./App.css";
import React from "react";
// import { render } from "@testing-library/react";
import male from "./male.png";
import female from "./female.png";

class Cek extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      weight: null,
      height: null,
      jk: "",
      bmi: null,
      imt: null,
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    let weight = this.state.weight;
    let height = this.state.height;
    let jk = this.state.jk;
    let perc;
    let bmi;
    let imt;
    if (weight === null || height === null || jk === "") {
      alert("Make sure the data is filled");
    } else if (!Number(weight) || !Number(height)) {
      alert("Your weight dan height must be a number");
    } else {
      if (jk === "wanita") {
        perc = 10 / 100;
      } else {
        perc = 15 / 100;
      }
      bmi = [height - 100] - [(height - 100) * perc];
      imt = weight / [(height * height) / 10000];
      console.log(`index${imt}`);

      if (imt <= 18.5) {
        imt = "You are <i>Skinny</i>";
      } else if (imt > 18.5 && imt <= 22.9) {
        imt = "You are Normal";
      } else if (imt > 22.9 && imt <= 27.5) {
        imt = "You are Overweight";
      } else {
        imt = "You are Obesitas";
      }

      this.setState((state) => ({
        bmi: bmi,
        imt: imt,
      }));
    }
  };
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <div className="card mb-3">
          <h1 className="card-header bg-transparent text-center">Let's Go </h1>
          <div className="card-body">
            <label>Enter your name :</label>
            <input className="form-control" type="text" name="username" onChange={this.myChangeHandler} />
            <div className="row">
              <div className="form-check">
                <input type="radio" name="jk" value="pria" id={this.state.val === "pria"} onChange={this.myChangeHandler} />
                <img src={male} className="App-logo" alt="male" />
                <br />
              </div>
              <div className="form-check">
                <input type="radio" name="jk" value="wanita" id={this.state.val === "wanita"} onChange={this.myChangeHandler} />
                <img src={female} className="App-logo" alt="female" />
              </div>
            </div>
            <label>Enter your weight :</label>
            <input className="form-control" type="text" name="weight" onChange={this.myChangeHandler} placeholder="kg" />
            <label>Enter your height :</label>
            <input className="form-control" type="text" name="height" onChange={this.myChangeHandler} placeholder="cm" />
            <br />
            <div className="text-center">
              <input className="submit-button" type="submit" />
            </div>
            <br />
          </div>
          <div className="card-footer bg-transparent">
            <h1 className="text-center">
              Hello {this.state.username} {this.state.imt}
            </h1>
            <h1> BMI : {this.state.bmi}</h1>
          </div>
        </div>
      </form>
    );
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> </h1>
        <Cek />
      </header>
    </div>
  );
}

export default App;
