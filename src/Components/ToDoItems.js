import React, { Component } from "react";
import { deleteItem } from "../action/itemActions";
import { connect } from "react-redux";
class ToDoItems extends Component {
  state = {
    done: false
  };
  checked = () => {
    this.setState({ done: !this.state.done });
  };
  render() {
    const { item } = this.props;
    return (
      <div>
        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
          <h6 className={this.state.done && "line"}>{item.title}</h6>
          <div className="todo-icon">
            <span className="mx-2 text-success spa">
              <i onClick={this.checked} className="fas fa-check chcked"></i>
            </span>
            <span
              className="mx-2 text-danger"
              onClick={() => this.props.deleteItem(item.id)}
            >
              <i className="fas fa-trash"></i>
            </span>
          </div>
        </li>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteItem: id => dispatch(deleteItem(id))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(ToDoItems);
