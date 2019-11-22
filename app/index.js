import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

  class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        parent: [
          {motherName:''},
          {fatherName: ''},
          {groupName:''},
          {firstNameofChild: ''},
          {email: ''},
          {password: ''}
        ]
      }
    }

      handleRegistrationInput(event) {
        const { target: { name, value } } = event
        this.setState( { [name]: value })
        }

      handleSubmit(event) {
        event.preventDefault()

        const {
          motherName,
          fatherName,
          firstNameofChild,
          groupName,
          email,
          password,
        } = this.state
      }

    render () {
    return (
        <div class="container">
        <div class="row">
        <div className = 'Registration'>
        <h1>Registration</h1>
        <Form>
        <Form.Group>
          <Form.Label>
            Name of Mother:
              <Form.Control
                name="motherName"
                type="text"
                value={this.state.motherName}
                onChange={this.handleRegistrationInput} />
          </Form.Label>
          </Form.Group>
          <Form.Group>
          <Form.Label>
            Name of Father:
              <Form.Control
                name="fatherName"
                type="text"
                value={this.state.fatherName}
                onChange={this.handleRegistrationInput} />
          </Form.Label>
          </Form.Group>
          <Form.Group>
          <Form.Label>
            First Name of Child:
              <Form.Control
                name="firstNameofChild"
                type="text"
                value={this.state.firstNameofChild}
                onChange={this.handleRegistrationInput} />
          </Form.Label>
          </Form.Group>
          <Form.Group>
          <Form.Label>
            Group Name:
              <Form.Control
                name="groupName"
                type="text"
                value={this.state.group}
                onChange={this.handleRegistrationInput} />
          </Form.Label>
          </Form.Group>
          <Form.Group>
          <Form.Label>
            Email:
              <Form.Control
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleRegistrationInput} />
          </Form.Label>
          </Form.Group>
          <Form.Group>
          <Form.Label>
            Password:
              <Form.Control
                name="email"
                type="text"
                value={this.state.password} />
          </Form.Label>
          </Form.Group>
          <Button onSubmit={this.handleSubmit}>Submit</Button>
        </Form>
        </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
