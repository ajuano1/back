const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a la base de datos (asegúrate de tener MongoDB instalado y ejecutándose)
mongoose.connect('mongodb://localhost/tu_basededatos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json());

// Rutas para clientes
const clientesRoutes = require('./routes/clientes');
app.use('/clientes', clientesRoutes);

// Rutas para productos
const productosRoutes = require('./routes/productos');
app.use('/productos', productosRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});


// models/cliente.js
const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  telefono: String,
});

module.exports = mongoose.model('Cliente', clienteSchema);


// models/producto.js
const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: String,
  precio: Number,
  descripcion: String,
});

module.exports = mongoose.model('Producto', productoSchema);


// routes/clientes.js
const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

// Rutas CRUD para clientes
router.post('/', clientesController.create);
router.get('/', clientesController.getAll);
router.get('/:id', clientesController.getById);
router.put('/:id', clientesController.update);
router.delete('/:id', clientesController.delete);

module.exports = router;


// controllers/clientesController.js
const Cliente = require('../models/cliente');

// Controladores CRUD para clientes
exports.create = (req, res) => {
  // Lógica para crear un cliente
};

exports.getAll = (req, res) => {
  // Lógica para obtener todos los clientes
};

exports.getById = (req, res) => {
  // Lógica para obtener un cliente por ID
};

exports.update = (req, res) => {
  // Lógica para actualizar un cliente por ID
};

exports.delete = (req, res) => {
  // Lógica para eliminar un cliente por ID
};