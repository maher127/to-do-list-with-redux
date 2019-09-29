import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteItems } from "../action/itemActions";
import ToDoItems from "./ToDoItems";

class ToDoList extends Component {
  render() {
    return (
      <div>
        <ul className="list-group my-5">
          <h3 className="text-center text-capitalize">to do list</h3>
          {this.props.items.map((item, index) => {
            return <ToDoItems item={item} key={index} />;
          })}
          <button
            className="text-capitalize btn btn-danger mt-5"
            onClick={() => this.props.clearList()}
          >
            clear list
          </button>
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.ItemsReducer
  };
};
const mapDispatchToProps = dispatch => {
  return {
    clearList: () => dispatch(deleteItems())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
