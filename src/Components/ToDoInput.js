import React, { Component } from "react";
import { connect } from "react-redux";
import uuid from "uuid";
import { addItem } from "../action/itemActions";

class TodoInput extends Component {
  handelchange = e => {
    this.setState({ title: e.target.value });
  };
  handelSubmit = e => {
    e.preventDefault();
    this.props.AjoutItem({
      ...this.state,
      id: uuid()
    });
  };

  render() {
    return (
      <div className="card card-body my-3">
        <form>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span
                className="input-group-text bg-primary text-white"
                id="basic-addon1"
              >
                <i className="fas fa-book"></i>
              </span>
            </div>
            <input
              type="text"
              name="title"
              className="form-control text-capitalize"
              placeholder="Add to do items"
              onChange={this.handelchange}
            />
          </div>
          <button
            onClick={this.handelSubmit}
            type="submit"
            className="btn btn-block btn-primary"
          >
            Add item
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    AjoutItem: newItem => dispatch(addItem(newItem))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(TodoInput);
