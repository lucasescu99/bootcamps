/* eslint-disable no-unused-vars */
import React from 'react';
import FormCreatCat from '../components/FormCreatCat';
import axios from 'axios';

export default class AdminProd extends React.Component {

  constructor () {
    super();
    this.state = {


    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange (e) {
    this.setState(
      {
        [e.target.name]: e.target.value }
    );
  }

  handleSubmit (e) {
    e.preventDefault();
    axios.post('/api/categorias/add', {
      name: this.state.newCategory
    });
    alert("La categoría se creo correctamente")
  }

  render () {
    console.log(this.props)
    return (
      <div>
        <FormCreatCat
          onSubmit={this.handleSubmit}
          onChange={this.handleChange} />
      </div>
    );
  }
}
