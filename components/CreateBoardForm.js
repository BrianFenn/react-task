import { checkPropTypes } from "prop-types";
import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";

class CreateBoardForm extends React.Component {
  state = {
    title: "",
    background: "#80ccff",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    const board = {
      title: this.state.title,
      background: this.state.background,
      createdAt: new Date(),
      user: "abc123",
    };
    if (board.title && board.background) {
      this.props.createNewBoard(board);
    }
  };

  render() {
    return (
      <form className="create-board-wrapper" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="board name"
          onChange={(e) => this.setState({ title: e.target.value })}
        />
        <select
          name="background"
          onChange={(e) => this.setState({ background: e.target.value })}
        >
          <option value="#80ccff">Blue</option>
          <option value="#80ffaa">Green</option>
          <option value="#F94a1e">Red</option>
          <option value="#ffb3ff">Pink</option>
          <option value="#bf00ff">Purple</option>
          <option value="#ffad33">Orange</option>
        </select>
        <button type="submit">Create New Board</button>
      </form>
    );
  }
}

CreateBoardForm.propTypes = {
  createNewBoard: PropTypes.func.isRequired,
};

export default CreateBoardForm;
