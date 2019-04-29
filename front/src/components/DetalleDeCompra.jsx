import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div>
      <div className='pagos'>
        <div className='Detalle'><h1>Detalle de Compra</h1></div>
        <div className='TitOC'><h2>Orden de Compra #{props.orden.id}</h2></div>
        <div className='imgCompra'>
          <span >Foto</span>
          <span >Prod. Nro</span>
          <span >Cantidad</span>
          <span >Precio x Unid.</span>
          <span >SUBTOTAL</span>
        </div>
        <div className='textosOC'>
          <img className='OCimage' src={props.prod.imagenes}></img>
          <h2 className='texto'>{' ' + props.prod.marca + ' ' + props.prod.modelo}</h2>
          <input className='inputOC' type='number'  defaultValue='1'/>
          <h2 className='textoPrecio'>  $  {props.prod.precio} </h2>
          <h2 className='textoPrecio'>  $  {props.prod.precio} </h2>
        </div>
        <div className='preciofinal'>
          <h2>PRECIO FINAL</h2>
          <h2>$ {props.prod.precio}</h2>
        </div>
      </div>
      <Link to='/tarjeta'><button className="btn btn-lg btn-danger" id="btnTarjeta" style ={{ margin: '3% 0px 0px 1%' }}>Proceder al Método de Pago</button></Link>
    </div>
  );
}
;