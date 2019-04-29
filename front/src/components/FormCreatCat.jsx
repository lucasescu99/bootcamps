/* eslint-disable no-unused-vars */
import React from 'react';

const Formulario = ({ onChange, onSubmit, title }) => (

  <form className='formProdAm' onSubmit={onSubmit} >
    <h1 style={{ textAlign: 'center', marginBottom: '50px', borderBottom: '1px solid black', paddingBottom: '20px' }}>{title} Crear Categoria: </h1>
    <div className="row">
      <div id='modelo' className="form-group col-lg-12">
        <div className="input-group input-group-lg">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-lg">Nueva Categoria :</span>
          </div>
          <input name='newCategory' onChange={onChange} type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
        </div>
      </div>
    </div>
    <div className="form-group ">
    </div>

    <button onSubmit={onSubmit} className='btn btn-lg btn-success'>SUBMIT</button>

  </form >
);

export default Formulario
;
