/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavbarUser extends Component {
  render () {
    return (
      <div className="navbar-light" id='navbar-light'>
        <div className="row">
          <div className="col-sm-2 nav-link">
            <div className='col-lg-12 '>
              <Link to='/productos' onClick = { this.handleClick }>PRODUCTOS</Link> 
            </div>
          </div>
          <div className="col-sm-2 nav-link">
            <div className='col-lg-12 '>
              <Link to='/productos/add' onClick = { this.handleClick }>CREAR PRODUCTO</Link> 
            </div>
          </div>
          <div className="col-sm-2 nav-link">
            <div className='col-lg-12 '>
              <Link to='/admin/allOrders' onClick={this.handleClick}>ORDENES DE COMPRA</Link>
            </div>
          </div>
          <div className="col-sm-2 nav-link">
            <div className='col-lg-12 '>
              <Link to='/usuarios/addadmin' onClick={this.handleClick}>ADD ADMINISTRADOR</Link>
            </div>
          </div>
          <div className="col-sm-2 nav-link">
            <div className='col-lg-12 '>
              <Link to='/usuarios/all' onClick={this.handleClick}>LISTA DE USUARIOS</Link>
            </div>
          </div>
          <div className="col-sm-2 nav-link">
            <div className='col-lg-12 '>
              <Link to='/categorias/add' onClick={this.handleClick}>ADD CATEGORIAS</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
