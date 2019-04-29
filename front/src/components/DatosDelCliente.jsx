import React from 'react';
import { connect } from 'react-redux';
import { fetchOrder } from '../redux/action-creators/action-creator';
import axios from 'axios';

class ShippingInfo extends React.Component {
  constructor (props) {
    super(props);

    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange (e) {
    this.setState(
      { [e.target.name]: e.target.value });
  }

  onSubmit (e) {
    e.preventDefault();
    axios.put('/api/ordencompra/update', { info: this.state, id: this.props.orden.id })
      .then(() => this.props.fetchOC(this.props.idOC))
      .then(() => alert('Tus datos se guardaron correctamente! (:'));
  }

  render () {
    return (
      <div>
        <div className="card">
          <div className="card-header">
            <strong>Datos del Cliente </strong>
          </div>
          <ul className="list-group list-group-flush">

            <li className="list-group-item"><strong>Nombre y apellido: </strong>
              {!this.props.user
                ? <input type="text" name="nombre" onChange={this.handleChange} className='inputDetail' id='fullnameInput' />
                : <span>{'    ' + this.props.user.nombre + ' ' + this.props.user.apellido}</span>
              }
            </li>
            <li className="list-group-item"><strong> Email: </strong>
              {!this.props.user
                ? <input type="email" name="email" onChange={this.handleChange} className='inputDetail' id='emailInput' />
                : <span>{'  ' + this.props.user.email}</span>}
            </li>
            <li className="list-group-item"><strong>Dirección de Envío: </strong>
              <input type="text" name="domicilio" onChange={this.handleChange} className='inputDetail' id='addressInput' />
            </li>
            <li className="list-group-item"><strong>Codigo Postal: </strong>
              <input type="text" name="cp" onChange={this.handleChange} className='inputDetail' id='cpInput' />
            </li>
            <li className="list-group-item"><strong>Localidad: </strong>
              <input type="text" name="localidad" className='inputDetail' id='localidadInput' onChange={this.handleChange} />
            </li>
            <li>
              <button className="btn btn-lg btn-success" style={{ margin: '15px 25%' }} onClick={this.onSubmit}>GUARDAR</button>
            </li>

          </ul>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  producto: state.selectedProd,
  orden: state.orden,
  categorias: state.categorias,
  user: state.usuario

});

const mapDispatchToProps = (dispatch) => ({
  fetchOC: (id) => dispatch(fetchOrder(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShippingInfo);
