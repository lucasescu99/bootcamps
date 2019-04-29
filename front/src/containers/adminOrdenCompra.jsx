import React from 'react';
import { fetchAllOrders } from '../redux/action-creators/action-creator';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class AllOrders extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchAllOrders();
  }

  render () {
    console.log(this.state);
    return (
      this.props.ordenes.length < 1
        ? <h2>Loading</h2>
        : <div style={{ margin: '2% 5%', border: '1px solid black' }} className="numOC"><table className="table">
          <thead style={{ backgroundColor: '#CCFFCC' }}>
            <tr>
              <th scope="col">Numero de Orden</th>
              <th scope="col">Estado</th>
              <th scope="col">Fecha de Orden</th>
              <th scope="col">Ver Detalles</th>
            </tr>
          </thead>
          {this.props.ordenes && this.props.ordenes.map((orden, index = 0) => {
            return (
              <tbody key={index++}>
                <tr>
                  <th scope="row" className="numOC">{orden.id}</th>
                  <td>{orden.status}</td>
                  <td>{orden.createdAt.split('T')[0]}</td>
                  <td><Link to={`/orders/${orden.id}`}><button className="btn-md btn-success">Ver Detalles</button></Link></td>
                </tr>
              </tbody>
            );
          })}
        </table></div>);
  };
}

const mapStateToProps = (state) => ({
  producto: state.selectedProd,
  ordenes: state.ordenes,
  user: state.usuario,
  orden: state.orden
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllOrders: () => dispatch(fetchAllOrders())
});

export default connect(mapStateToProps, mapDispatchToProps)(AllOrders);
