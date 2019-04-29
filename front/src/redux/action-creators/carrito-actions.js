import axios from 'axios';

const setCarrito = (carrito) => {
  return {
    type: 'SET_CARRITO',
    carrito
  };
};

const setAddToCart = (productoCarrito) => {
  return {
    type: 'SET_ADDTOCART',
    productoCarrito
  };
};

export const fetchCarrito = (id) => dispatch => {
  axios.get(`/api/carrito/${id}`)
    .then(res => res.data)
    .then(carrito => {
      console.log('A VER SI AHORA ES EL CARRITO HDP', carrito);
      dispatch(setCarrito(carrito));
    });
};

export const comprarCarrito = (id, cantidad, productos) => dispatch => {
  axios.post(`/api/carrito/${id}`, { cantidad, productos });
};

export const addToCart = (idProducto, idUsuario) => dispatch => {
  alert('Producto agregado al carrito')
  return axios.post('/api/carrito/add', { idProducto, idUsuario })
    .then(res => dispatch(setAddToCart(res.data)));
};

// .then(res.data => console.log('lo que trae axios', res.data));
