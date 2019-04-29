/* eslint-disable no-unused-vars */
import React from 'react';
import Registro from '../components/Registro';
import Login from '../components/Login';
import { Route, Redirect, Switch, Link } from 'react-router-dom';

export default class AdminUsuarios extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      nombre: '',
      apellido: '',
      domicilio: '',
      email: '',
      password: '',
      isAdmin: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState(
      { [e.target.name]: e.target.value });
    console.log(this.state);
  }

  handleSubmit (e) {
    e.preventDefault();
    console.log(this.state);
  }

  render () {
    return (
      <div>
        <Link to="/user/login"> <button> LOGIN </button></Link>
        <Link to="/user/register"><button> REGISTER </button></Link>
        <Registro onChange={this.handleChange} onSubmit={this.handleSubmit} />
      </div>
    );
  }
};
