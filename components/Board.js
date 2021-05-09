import React from "react";
import List from "./List";
import data from "../sampleData";

class Board extends React.Component {
  state = {
    currentLists: [],
  };

  componentDidMount() {
    this.setState({ currentLists: data.lists });
  }

  addBoardInput = React.createRef();

  createNewList = (e) => {
    e.preventDefault();
    console.log(this.addBoardInput.current.value);
    const list = {
      id: Math.random(),
      title: this.addBoardInput.current.value,
      board: 300,
      createdAt: new Date(),
      cards: [
        { id: 1, text: "Card 1" },
        { id: 2, text: "Card2" },
      ],
    };
    if (list.title) {
      this.setState({ currentLists: [...this.state.currentLists, list] });
    }
    this.addBoardInput.current.value = "";
  };

  render() {
    return (
      <div
        className="board-header"
        style={{ backgroundColor: this.props.location.state.background }}
      >
        <div className="board-wrapper">
          <h3>{this.props.location.state.title}</h3>
          <button>Delete board</button>
        </div>
        {/* How to display board ID, but we do not need to show it for our example <span>{this.props.match.params.boardId}</span> */}
        <div className="list-wrapper">
          {/* <button onClick={this.createNewList}>New List</button> */}
          {Object.keys(this.state.currentLists).map((key) => (
            <List
              key={this.state.currentLists[key].id}
              list={this.state.currentLists[key]}
            />
          ))}
        </div>
        <form onSubmit={this.createNewList} className="new-list-wrapper">
          <input
            type="text"
            ref={this.addBoardInput}
            name="name"
            placeholder="+New List"
          />
        </form>
      </div>
    );
  }
}

export default Board;
