import { CHECK_USER, ADD_USER, ADM_ACCESS, RECEIVE_PRODUCT, GET_USER, SET_PRODUCTS, SET_CATEGORIAS, SEARCH_MARK, SET_ADDTOCART, SET_ORDER  } from '../constants';

const initialState = {
  products: [],
  selectedProd: {},
  userCheck: {},
  user: {},
  access: '',
  categorias: [],
  users: [],
  usuario: {},
  orden: {},
  ordenes: [],
  marcas: [],
  carrito: [],
};

export default (state = initialState, action) => {
  console.log('ACTIONS DEL REDUCER', action);
  switch (action.type) {
    case SET_PRODUCTS:
      return Object.assign({}, state, { products: action.products });
    case RECEIVE_PRODUCT:
      return Object.assign({}, state, { selectedProd: action.product });
    case CHECK_USER:
      return Object.assign({}, state, { userCheck: action.data });
    case ADD_USER:
      return Object.assign({}, state, { user: action.user });
    case ADM_ACCESS:
      return Object.assign({}, state, { access: action.qty });
    case SET_CATEGORIAS:
      return Object.assign({}, state, { categorias: action.categorias });
    case GET_USER:
      return Object.assign({}, state, { usuario: action.usuario });
    case 'SET_USERS':
      return Object.assign({}, state, { users: action.users });
    case 'SET_CARRITO':
      return Object.assign({}, state, { carrito: action.carrito });
    case SEARCH_MARK:
      return Object.assign({}, state, { marcas: action.marca });
    case 'REMOVE_USER':
      return { ...state, users: state.users.filter(user => user.id !== action.id) };
    case SET_ADDTOCART:
      return Object.assign({}, state, { carrito: [...state.carrito, action.productoCarrito] });
    case SET_ORDER:
      return Object.assign({}, state, { orden: action.orden });
    case 'SET_AllOC':
      return Object.assign({}, state, { ordenes: action.ordenes });
    default:
      return state;
  }
};
