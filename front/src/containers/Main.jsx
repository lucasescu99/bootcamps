/* eslint-disable no-unused-vars */
import React from 'react';
import EditProd from './EditProd';
import CreateCat from './CreateCat';

// eslint-disable-next-line no-unused-vars
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import ProductsContainer from './ProductsContainer';
import CrearProd from './CrearProd';
import HomeRL from './HomeRL';
import MarkProductsContainer from './MarkProductsContainer';
import Registro from '../components/Registro';
import Login from '../components/Login';
import Home from '../components/Home';
import UserAsAdmin from '../components/UserAsAdmin';
import Header from '../components/Header';
import SingleProd from '../containers/SingleProductCont';
import NavbarContainer from '../containers/NavbarContainer';
import { checkUserLogin, fetchUser } from '../redux/action-creators/action-creator';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Checkout from '../components/Checkout';
import TarjetaDeCredito from '../components/TarjetaDeCredito';
import UsersContainer from './UsersContainer';
import CarritoContainer from './CarritoContainer';
import AdminAllOC from './adminOrdenCompra';
import SingleOC from './singleOc';

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount () {
    this.props.fetchUser()
      .then(() =>
        this.setState({
          loading: false
        }));
  }

  render () {
    return (
      this.state.loading ? <h2>Loading...</h2>
        : <div id='main' className='container-fluid'>
          <Route render= {({ history }) => (<Header login={this.props.usuario.id} history={history} fetchUser={this.props.fetchUser} />)} />
          <NavbarContainer isAdmin={this.props.usuario.isAdmin} />
          <Switch>
            <Route exact path="/usuarios" render={() => (<HomeRL />)} />
            <Route exact path="/usuarios/all" render={({history}) => (<UsersContainer history={history} />)} />
            <Route exact path="/usuarios/registro" render={({ history }) => (<Registro history={history} />)} />
            <Route exact path="/usuarios/login" render={({ history, location }) => (<Login history={history} location={location} />)} />
            <Route exact path='/' component={Home} />
            <Route exact path= '/categorias/add' render={() => (<CreateCat />)} />
            <Route exact path='/categorias/marcas/:marca' render={({ match }) => <MarkProductsContainer marca={match.params.marca}/>}/>
            <Route exact path='/productos' render={({ location }) => <ProductsContainer search={location.search} />} />
            <Route exact path='/usuarios/addadmin' render={({ history }) => (<UserAsAdmin history={history}/>)} />
            <Route exact path='/productos/add' render={({ history }) => (<CrearProd history={history} />)} />   
            <Route exact path='/productos/edit/:id' render={({ match, history }) => (<EditProd history={history} prodId={match.params.id} />)} />
            <Route exact path="/productos/:id" render={({ match, history }) => <SingleProd prodId={match.params.id} isAdmin={this.props.usuario.isAdmin} history={history} />} />
            <Route exact path="/productos/:p/checkout/:oc" render={({ match }) => <Checkout ordenId={match.params.oc} p={match.params.p} />} />
            <Route exact path='/tarjeta' render={({ history }) => (<TarjetaDeCredito history={history}/>)} />
            <Route exact path='/admin/allOrders' render={({ history }) => (<AdminAllOC history={history} />)} />
            <Route exact path='/orders/:id' render={({ match }) => (<SingleOC history={history} ordenId={match.params.id} />)} />
            <Route exact path='/cart'  render={({ history }) => (<CarritoContainer history={history} />)} />
            <Route exact path='/checkout/:OCid' render={({ match }) => <Checkout ordenId={match.params.OCid} />} />
          </Switch>
        </div >
    );
  }
};

const mapStateToProps = (state) => ({
  userCheck: state.userCheck,
  usuario: state.usuario,
  orden: state.orden
});
const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(fetchUser()),
  checkUser: () => dispatch(checkUserLogin())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
