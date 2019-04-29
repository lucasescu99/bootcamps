/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

export default (props) => {
  const handleSubmit = (e, red) => {
    e.preventDefault();
    red.push(`/productos?modelo=${e.target.input.value}`);
  };

  return (
    !props.login
      ? <header className='header'>
        <div>
          <Link to='/' id='linkLogo' ><img id='logo' src="/utils/logoBlanco.jpg"></img></Link>
        </div>
        <Route render={({ history }) => {
          return (
            <form method='GET' onSubmit={(e) => handleSubmit(e, history)}>
              <input name='modelo' placeholder='Busca tu producto 🔎' id='input' />
            </form>
          );
        }
        } />
        <Link to='/usuarios/login' id='linkLogIn'><img id='userLogIn' src="/utils/logout.svg"></img>
          <span className='caption2'>Ingresa</span></Link>
        <Link to='/cart' id='linkCart'><img id='carrito' src="/utils/carrito.svg"></img></Link>

      </header>
      : <header className='header'>
        <Link to='/' id='linkLogo' ><img id='logo' src="/utils/logoBlanco.jpg"></img></Link>
        <Route render={({ history }) => {
          return (
            <form method='GET' onSubmit={(e) => handleSubmit(e, history)}>
              <input name='modelo' placeholder='    Busca tu producto 🔎' id='input' />
            </form>
          );
        }
        } />
        <Link to="/">
          <button id="logOut" className="btn btn-outline-danger"
            onClick={(e) => {
              e.preventDefault();
              axios.get('/api/usuarios/logOut')
                .then(data => props.fetchUser(data.data));
              return props.history.push('/');
            }}>
            Salir
          </button>
        </Link>
        <Link to='/cart' id='linkCart'><img id='carrito' src="/utils/carrito.svg"></img></Link>

      </header>
  );
};
