import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/form';
import {reduxForm, Field} from 'redux-form';
import {required, isInt, minLength, isEmpty} from './validators';

class App extends Component {
  onSubmit(values){
    let body = {
      trackingNumber: values.trackingNumber,
      details: values.details,
      issue: values.issue
    }

    return fetch('https://us-central1-delivery-form-api.cloudfunctions.net/api/report',{
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      console.log(res);
    })
    // console.log(JSON.stringify(body));
  }
  render() {
    // console.log(this.props)

    let successMessage;
    if(this.props.succeeded){
      successMessage = (
        <div>
          Complaint has been sent successfully
        </div>
      );
    }

    return (
      <div className="App">
        <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                
                <Field 
                    type='text' 
                    name='trakingNumber'
                    id='trackingNumber'
                    component={Input}
                    validate={[required, isInt, minLength, isEmpty]}
                    element='input'
                    label='Tracking Number'
                />
                <Field 
                    name='issue'
                    id='issue' 
                    component={Input} 
                    element='select'
                    label='Please choose your issue'
                  >
                    <option value={'My delivery hasn\'t arrived'}>My delivery hasn't arrived</option>
                    <option value='The wrong item was delivered'>The wrong item was delivered</option>
                    <option value='Part of my order was missing'>Part of my order was missing</option>
                    <option value='Some of my order arrived damaged'>Some of my order arrived damaged</option>
                </Field>
                <Field 
                  label='Give details'
                  type="text"
                  name="details"
                  id="details"
                  component={Input} 
                  element='textarea'
                  />
                <button type="submit" >Submit</button>
            </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'contact'
})(App);
