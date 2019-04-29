import axios from 'axios';
import {
  RECEIVE_PRODUCT,
  SET_PRODUCTS,
  SET_CATEGORIAS,
  SEARCH_MARK
} from '../constants';

const setProducts = (products) => ({
  type: SET_PRODUCTS,
  products
});

const recibirProducto = (product) => ({
  type: RECEIVE_PRODUCT,
  product
});

const setCategorias = (categorias) => ({
  type: SET_CATEGORIAS,
  categorias
});

const buscarMarca = (marca) => ({
  type: SEARCH_MARK,
  marca
});

export const getProducts = searchProduct => dispatch => {
  return axios.get(`/api/productos${searchProduct}`)
    .then(res => {
      dispatch(setProducts(res.data));
    });
};

export const buscarProducto = prodID => dispatch => {
  return axios.get(`/api/productos/${prodID}`)
    .then(res => res.data)
    .then(producto => dispatch(recibirProducto(producto)))
};

export const buscarMarcas = markProd => dispatch => {
  return axios.get(`/api/categorias/marcas/${markProd}`)
    .then(res => {
      dispatch(buscarMarca(res.data));
    });
};
export const buscarCategorias = prodId => dispatch =>
  axios.get(`/api/categorias/${prodId}`)
    .then(info => info.data)
    .then(categorias => dispatch(setCategorias(categorias)));

export const borrarProd = (prodID) =>
  axios.delete(`/api/productos/${prodID}`)
;

