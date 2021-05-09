import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board";
import List from "./components/List";
import React from "react";
import data from "./sampleData";
import Home from "./components/pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotefound from "./components/pages/PageNotFound";

class App extends React.Component {
  state = {
    boards: [],
  };

  componentDidMount() {
    this.setState({ boards: data.boards });
  }

  createNewBoard = (board) => {
    this.setState({ boards: [...this.state.boards, board] });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/:userId/board"
              render={(props) => (
                <Home
                  {...props}
                  boards={this.state.boards}
                  createNewBoard={this.createNewBoard}
                />
              )}
            />

            <Route
              path="/board/:boardId"
              render={(props) => <Board {...props} />}
            />
            <Route component={PageNotefound} />
            {/* <Home boards={this.state.boards} createNewBoard={this.createNewBoard} />
        <Board /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
