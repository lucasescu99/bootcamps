import React from 'react';
import { fetchOrder } from '../redux/action-creators/action-creator';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SingleOrder extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      owner: {},
      products: []
    };
  }

  componentDidMount () {
    this.props.fetchOC(this.props.ordenId);
    axios.get(`/api/ordencompra/getOwner/${this.props.ordenId}`)
      .then(res => this.setState({ owner: res.data }));
    axios.get(`/api/ordencompra/getProducts/${this.props.ordenId}`)
      .then(res => this.setState({ products: res.data }));
  }

  render () {
    const { orden } = this.props; const { owner } = this.state;
    return (
      <div>
        <div className="row" className='botonOC'><Link to="/admin/allOrders"><button className="btn btn-success">Volver a vista general</button></Link></div>
        <div id="singleProd" style={{ marginTop: '15px' }}>
          <div className="row">
            <div className="col-lg-8"><h1><strong>Orden de Compra # {orden.id}</strong></h1></div>
            <div className="col-lg-4"><h2>Status: </h2><strong><h1 style={{ color: 'green' }}>{orden.status}</h1></strong></div>
          </div>

          <div className="row">
            <div className="col-lg-6" style={{ marginTop: '15px' }}>
              <div className="col-lg-12" style={{ marginBottom: '20px' }}><h2><strong style={{ borderBottom: '1px solid black' }}>Datos de Envío</strong></h2></div>
              <div className="col-lg-12"><h4><strong>Domicilio de envío :</strong>   {orden.domicilio}</h4></div>
              <div className="col-lg-12"><h4><strong>Localidad :</strong>   {orden.localidad}</h4></div>
              <div className="col-lg-12"><h4><strong>Código Postal :</strong>  {orden.cp}</h4></div>
            </div>
            <div className="col-lg-6" style={{ marginTop: '15px' }}>
              <div className="col-lg-12" style={{ marginBottom: '20px' }}><h2><strong style={{ borderBottom: '1px solid black' }}>Datos del Cliente</strong></h2></div>
              <div className="col-lg-12"><h4><strong>Nombre :</strong> {owner.nombre ? owner.nombre + '  ' + owner.apellido : orden.nombre}</h4></div>
              <div className="col-lg-12"><h4><strong>Email :</strong>   {owner.email ? owner.email : orden.email}</h4></div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 ">
              <div style={{ margin: '2% 5%', border: '1px solid black' }} className="numOC"><table className="table">
                <thead style={{ backgroundColor: '#CCFFCC' }}>
                  <tr>
                    <th scope="col" className="numOC">Producto</th>
                    <th scope="col" >Cantidad</th>
                    <th scope="col" >Precio</th>
                    <th scope="col"> Subtotal</th>
                  </tr>
                </thead>
                {this.state.products && this.state.products.map((product, index = 0) => {
                  let subtotal = 0;
                  return (
                    <tbody key={index++}>
                      <tr>
                        <th scope="row" className="numOC">{product.marca + ' ' + product.modelo}</th>
                        <td>{product.cantidad ? product.cantidad : 1 }</td>
                        <td>{'$ ' + product.precio}</td>
                        <td>{'$ ' + (product.precio * (product.cantidad ? product.cantidad : 1))}</td>
                      </tr>
                    </tbody>
                  );
                })}
              </table></div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  producto: state.selectedProd,
  orden: state.orden,
  user: state.usuario
});

const mapDispatchToProps = (dispatch) => ({
  fetchOC: (id) => dispatch(fetchOrder(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(SingleOrder);
