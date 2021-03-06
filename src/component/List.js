import React, { Component } from "react";
import { Button, Card, Form } from "react-bootstrap";
import axios from "axios";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      keyword: "",
      route: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://ujianservice.herokuapp.com/users")
      .then((res) => {
        const users = res.data;
        this.setState({ users });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }
  getDataSearch = () => {
    axios
      .get(
        "https://ujianservice.herokuapp.com/" +
          this.state.route +
          this.state.keyword
      )
      .then(function (res) {
        // handle success
        console.log(res.data);
        const users = res.data;
        this.setState({ users });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };
  handleRoute = (event) => {
    this.setState({ route: event.target.value });
    console.log(this.state.route);
  };

  handleChange = (event) => {
    this.setState({ keyword: event.target.value });
    console.log(this.state.keyword);
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Search By : </Form.Label>
            <Form.Control as="select" onChange={this.handleRoute}>
              <option value="">select</option>
              <option value="name/">name</option>
              <option value="email/">email</option>
              <option value="phone/">phone</option>
              <option value="address/">address</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>keyword</Form.Label>
            <Form.Control
              type="address"
              placeholder="keyword"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onPress={this.getDataSearch}>
            SEARCH
          </Button>
        </Form>
        <div>{this.state.users.map((person) => (
          <Card style={{ width: "30rem" }}>
            <Card.Body>
              <Card.Title>{person.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {person.email}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                {person.phone}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                {person.address}
              </Card.Subtitle>
              <Button variant="primary" style={{ width: "5rem" }}>edit</Button>
              <Button variant="primary" style={{ width: "5rem" }}>delete</Button>
            </Card.Body>
          </Card>
        ))}
        </div>
      </div>
    );
  }
}
