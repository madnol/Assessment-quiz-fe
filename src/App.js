import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//Style
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./styles/app.scss";
import { IoIosArrowForward } from "react-icons/io";

//Components
import QuestionPage from "./components/QuestionPage";
import ScoresPage from "./components/ScoresPage";
import StartingPage from "./components/StartingPage";

class App extends React.Component {
  state = {
    exam: {},
  };

  beginExam = exam => {
    this.setState({ exam: exam });
    console.log("exam in app.js");
    console.log(this.state.exam);
  };

  render() {
    return (
      <Router>
        <Route
          path="/"
          exact
          render={props => (
            <StartingPage {...props} beginExam={this.beginExam} />
          )}
        />
        <Route
          path="/exam/:examID"
          render={props => <QuestionPage {...props} exam={this.state.exam} />}
        />
      </Router>
    );
  }
}

export default App;
