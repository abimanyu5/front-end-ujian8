import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      address: "",
    };
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  };
  handleChangeE = (event) => {
    this.setState({ email: event.target.value });
    console.log(this.state.email);
  };
  handleChangeP = (event) => {
    this.setState({ phone: event.target.value });
    console.log(this.state.phone);
  };
  handleChangeA = (event) => {
    this.setState({ address: event.target.value });
    console.log(this.state.address);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("sudah di submit");

    const user = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
    };

    axios({
      method: "POST",
      url: "https://ujianservice.herokuapp.com/",
      data: user,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });
  };

  render() {
    return (
      <div>
        <h1>REGISTER</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Username"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={this.handleChangeE}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>phone</Form.Label>
            <Form.Control
              type="phone"
              placeholder="Phone"
              onChange={this.handleChangeP}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>address</Form.Label>
            <Form.Control
              type="address"
              placeholder="Address"
              onChange={this.handleChangeA}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
