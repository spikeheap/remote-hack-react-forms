import React, { Component } from 'react';

import './Form.css';

class Form extends Component {
  state = {
    errors: {},
    form: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  };


  handleInputFieldChange = (e) => {
    this.setState({ 
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state)
  };

  validateForm = () => {
    const errors = {};
    for (const [fieldName, value] of Object.entries(this.state.form)) {
      if (value.length === 0) {
        errors[fieldName] = `${fieldName} must not be empty`;
      }
    }; 
    
    this.setState({
      errors: errors
    })

    return Object.entries(errors).length === 0;
  };

  handleSubmit = () => {
    if (this.validateForm()) {
      console.log('Success!');
    } else {
      console.log('Failure!');
    }
  };

  render() {
    return (
      <main className="form-container">
        
        <form
          className="Form"
          onSubmit={ (e) => {
            e.preventDefault();
            this.handleSubmit();
          } }
        >
          <h1>Sign up</h1> 
          
          <label for="firstName">
            First name
            <input name="firstName" onChange={this.handleInputFieldChange }/>
          </label>
          <label for="lastName">
            Last name
            <input name="lastName" onChange={this.handleInputFieldChange }/>
          </label>

          <label for="email">
            Email address
            <input name="email" type="email" onChange={this.handleInputFieldChange }/>
          </label>

          <label for="password">
            Password
            <input name="password" type="password" onChange={this.handleInputFieldChange }/>
          </label>

          <button className="no-margin-bottom">Submit</button>
        </form>
      </main>
    );
  }
}

export default Form;