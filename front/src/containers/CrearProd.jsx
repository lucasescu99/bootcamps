/* eslint-disable no-unused-vars */
import React from 'react';
import FormCrearProd from '../components/FormCrearProd';
import axios from 'axios';

export default class AdminProd extends React.Component {
  constructor () {
    super();
    this.state = {
      categorias: [],
      categoriesId: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    axios.get('/api/categorias/get')
      .then(categorias => this.setState({ categorias: categorias.data }));
  }

  handleChange (e) {
    this.setState(
      { [e.target.name]: e.target.value
      });
  }

  handleSubmit (e, categorias) {
    e.preventDefault();
    axios.post('/api/productos/add', {
      marca: this.state.Marca,
      modelo: this.state.Modelo,
      stock: this.state.Stock,
      precio: this.state.Precio,
      imagenes: this.state.Imagen.split(','),
      descripcion: this.state.Descripcion,
      categorias
    })
      .then(product => {
        alert('Se creo el producto' + ' ' + this.state.Marca + ' ' + this.state.Modelo)
        this.props.history.push(`/productos/${product.data.id}`);
      });
  }

  render () {
    // {console.log(this.state.categorias)}
    return (
      <div>
        <FormCrearProd
          array={this.state.categorias}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange} />
      </div>
    );
  }
}
