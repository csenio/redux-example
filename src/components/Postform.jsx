import React, { Component } from "react";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };

    // this.onChange = this.onChange.bind(this);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //   onSubmit(e){

  //   }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="title">Title: </label> <br />
            <input
              onChange={this.onChange}
              type="text"
              id="title"
              name="title"
              value={this.state.title}
            />
          </div>
          <div>
            <label htmlFor="body">Body: </label> <br />
            <textarea
              onChange={this.onChange}
              name="body"
              id=""
              cols="30"
              rows="5"
              value={this.state.body}
            />
          </div>{" "}
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
