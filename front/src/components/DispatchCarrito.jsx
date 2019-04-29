import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div>
      <div className='pagos'>
        <div className='TitDC'><h2>Orden de Compra #{props.orden.id}</h2></div>
        {props.carrito && props.carrito.length > 0
          ? <div>
            <table className="table">
              <thead style={{ backgroundColor: '#CCFFCC' }}>
                <tr>
                  <th scope="col">Foto</th>
                  <th scope="col">Producto</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Precio</th>
                  <th scope='col'>Subtotal</th>
                </tr>
              </thead>
              {props.carrito && props.carrito.map((producto, index = 0) => {
                return (
                  <tbody key={index++}>
                    <tr>
                      <td><img className="mr-3 imgCarritoList" src={producto.imagenes[0]}></img></td>
                      <td>{producto.marca + ' ' + producto.modelo}</td>
                      <td><input className='inputOC' type='number' defaultValue='1' /></td>
                      <td>{'$ ' + producto.precio}</td>
                      <td>{'$ ' + (producto.precio * (producto.cantidad ? producto.cantidad : 1))}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table></div>
          : <h2>Cargando el Carrito</h2>}

        <div className='preciofinal'>
          <h2>PRECIO FINAL</h2>
          <h2>{props.carrito && props.carrito.reduce((valorAnterior, valorActual, index, vector) => {
            return '$ ' + (Number(valorAnterior.precio) + Number(valorActual.precio));
          })
          } </h2>
        </div>
      </div>
      <Link to='/tarjeta'><button className="btn btn-lg btn-danger" id="btnTarjeta" style={{ margin: '3% 0px 0px 1%' }}>Proceder al Método de Pago</button></Link>
    </div>
  );
}
;
