const productos = (marca, modelo, imagenes, stock, precio, descripcion, categorias) => (
  {
    marca,
    modelo,
    imagenes,
    stock,
    precio,
    descripcion,
    categorias
  }
);

const marcas = [
  'iPhone',
  'iPhone',
  'iPhone',
  'Samsung',
  'Samsung',
  'Samsung',
  'Motorola',
  'Motorola',
  'Motorola',
  'LG',
  'LG',
  'LG',
  'Xiaomi',
  'Xiaomi',
  'Xiaomi',
  'Huawei',
  'Huawei',
  'Huawei'
];
const modelos = [
  '7s',
  '8s',
  'Xs',
  's7',
  's8',
  's9',
  'g4',
  'g5',
  'g6',
  'q5',
  'q6',
  'q7',
  'Redmi 7',
  'mi 9',
  'Redmi note 7',
  'Mate 10',
  'gw',
  'P20 pro'
];
const imagenes = [
  ['https://images-na.ssl-images-amazon.com/images/I/51rxj5TepeL.jpg'],
  ['https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-rosegold-select-2016?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795424922'],
  ['https://media.wired.com/photos/5b22c5c4b878a15e9ce80d92/master/pass/iphonex-TA.jpg'],
  ['https://images.samsung.com/is/image/samsung/br-galaxy-s7-g930f-sm-g930fzdpzto-000000001-front-gold?$PD_GALLERY_L_JPG$'],
  ['https://media.aws.alkosto.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/8/8/8806088818405-1.jpg'],
  ['https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/samsung-galaxy-s9/lilac-purple/Samsung-Galaxy-S9-Lilac-Purple-1-3x.jpg'],
  ['https://media.aws.alkosto.com/media/catalog/product/cache/3/image/8bf9d84cc5f65bd89f2d4160406987fb/m/o/motog4plus-1_1.jpg'],
  ['https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/6/9/6947681540002-1.jpg'],
  ['https://tigocolombia.vteximg.com.br/arquivos/ids/155830-1200-1200/1.jpg?v=636784292516370000'],
  ['https://www.lg.com/it/images/telefoni-cellulari/md05854596/gallery/lg-smartphone-LG-Q6-astro-black-medium01.jpg'],
  ['https://www.lg.com/au/images/smartphones/md05999097/md05999098/gallery/medium01.jpg'],
  ['https://www.miaparato.es/file/2019/01/redmi-note-7-miaparato-azul-version-global.jpg'],
  ['https://tienda.claro.com.ar/wcsstore/Claro/images/catalog/productos/646x1000/20302325.jpg'],
  ['https://www.gizmochina.com/wp-content/uploads/2019/01/Xiaomi-Mi-9-600x425.jpg'],
  ['https://drop.ndtv.com/TECH/product_database/images/1016201764101PM_635_huawei_mate_10_pro.jpeg'],
  ['https://mx.celulares.com/fotos/huawei-gw-64066-g.jpg'],
  ['https://tienda.claro.com.co/wcsstore/Claro/images/catalog/equipos/646x1000/70027660.jpg'],
  ['https://media.wired.com/photos/5b22c5c4b878a15e9ce80d92/master/pass/iphonex-TA.jpg']
];
const stock = [
  1,
  10,
  17,
  5,
  17,
  19,
  140,
  16,
  14,
  1,
  13,
  15,
  12,
  11,
  10,
  9,
  9,
  8
];
const precios = [
  10000,
  10000,
  12000,
  18000,
  19000,
  15400,
  10600,
  11000,
  19000,
  13000,
  10000,
  10000,
  10000,
  10000,
  10000,
  10000,
  10000,
  10000
];
const descripciones = [
  'Soy un celular de nuestro eCommerce, ojala te guste',
  'Soy un celular de nuestro eCommerce, ojala te guste',
  'Soy un celular de nuestro eCommerce, ojala te guste',
  'Soy un celular de nuestro eCommerce, ojala te guste',
  'Soy un celular de nuestro eCommerce, ojala te guste',
  'Soy un celular de nuestro eCommerce, ojala te guste',
  'Soy un celular de nuestro eCommerce, ojala te guste',
  'Soy un celular de nuestro eCommerce, ojala te guste',
  'Soy un celular de nuestro eCommerce, ojala te guste',
  'Soy un celular de nuestro eCommerce, ojala te guste',
  'Soy un celular de nuestro eCommerce, ojala te guste',
  'Soy un celular de nuestro eCommerce, ojala te guste',
  'Soy un celular de nuestro eCommerce, ojala te guste',
  'Soy un celular de nuestro eCommerce, ojala te guste',
  'Soy un celular de nuestro eCommerce, ojala te guste',
  'Soy un celular de nuestro eCommerce, ojala te guste',
  'Soy un celular de nuestro eCommerce, ojala te guste',
  'Soy un celular de nuestro eCommerce, ojala te guste'
];
const categorias = [
  1,
  2,
  3
];

const crearCategorias = [
  'SmartPhone',
  'Movistar',
  '32 GB'
];

export const crearProductos = () => {
  const productos = [];
  for (let i = 0; i < 18; i++) {
    productos.push(productos(marcas[i], modelos[i], imagenes[i], stock[i], precios[i], descripciones[i], categorias));
  }
  return productos;
};
