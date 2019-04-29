import React from 'react';
import DatosDelCliente from './DatosDelCliente';
import DetalleDeCompra from './DetalleDeCompra';
import { fetchOrder } from '../redux/action-creators/action-creator';
import { connect } from 'react-redux';
import { buscarProducto } from '../redux/action-creators/products-actions';
import DispatchCarrito from '../components/DispatchCarrito';
import axios from 'axios'
import { fetchCarrito } from '../redux/action-creators/carrito-actions';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] }
  }
  componentDidMount() {
    this.props.fetchOC(this.props.ordenId);
    this.props.fetchProd(this.props.p);
    this.props.fetchCarrito(this.props.user.id)
    axios.get(`/api/ordencompra/getProducts/${this.props.orden.id}`)
      .then(res => this.setState({ products: res.data }));
  }

  render() {
    console.log('//////THIS.STATE', this.props);
    console.log("ESTADO LOCALLLL", this.state)
    return (
      <div className='checkoutview' style={{ width: '100vw' }} >
        <div className='datosgrid'><DatosDelCliente user={this.props.user} idOC={this.props.ordenId} /></div>
        {this.props.carrito && this.props.carrito.length > 0
          ? <div className='datosgrid'><DispatchCarrito carrito={this.props.carrito} prod={this.props.producto} orden={this.props.orden} /></div>
          : <div className='datosgrid'><DetalleDeCompra carrito={this.props.carrito} prod={this.props.producto} orden={this.props.orden} /></div>}
      </div>);
  }
}

const mapStateToProps = (state) => ({
  producto: state.selectedProd,
  orden: state.orden,
  user: state.usuario,
  carrito: state.carrito
});

const mapDispatchToProps = (dispatch) => ({
  fetchOC: (id) => dispatch(fetchOrder(id)),
  fetchProd: (id) => dispatch(buscarProducto(id)),
  fetchCarrito: (id) => dispatch(fetchCarrito(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
