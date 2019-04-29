/* eslint-disable no-unused-vars */
import React from 'react';
import FormEditProd from '../components/FormEditProd';
import axios from 'axios';

export default class AdminProd extends React.Component {
  // static getDerivedStateFromProps (props, state) {
  //   return state.id ? state : props.prodId;
  // }
  constructor () {
    super();
    this.state = {
      productoAnterior: {},
      categorias: []
      // productoActual: {}

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    axios.get(`/api/productos/${this.props.prodId}`)
      .then(producto => this.setState({ productoAnterior: producto.data }));
    axios.get('/api/categorias/get')
      // .then(categorias => console.log(categorias.data))
      .then(categorias => this.setState({ categorias: categorias.data }));
  }

  handleChange (e) {
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    );
  }

  handleSubmit (e) {
    e.preventDefault();
    axios.put('/api/productos/edit/' + this.state.productoAnterior.id, {
      marca: this.state.Marca,
      modelo: this.state.Modelo,
      stock: this.state.Stock,
      precio: this.state.Precio,
      imagenes: this.state.Imagen && this.state.Imagen.split(','),
      descripcion: this.state.Descripcion
    })
      .then(product => {
        alert('Producto editado con éxito');
        this.props.history.push(`/productos/${product.data.id}`);
      });
  }

  render () {
    const { productoAnterior, Marca, Modelo } = this.state;
    return (
      <div>
        <FormEditProd
          array={this.state.categorias}
          productoAnterior={productoAnterior}
          marca={Marca}
          modelo={Modelo}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange} />
      </div>
    );
  }
}
