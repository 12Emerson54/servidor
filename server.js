const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const app = express();
// configuraciones
const port = process.env.PORT || 3000;
//Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
//rutas
app.use('/api/clientes', require('./app/routes/cliente.routes'));
app.use('/api/proveedores', require('./app/routes/proveedor.routes'));
app.use('/api/empleados', require('./app/routes/empleado.routes'));
app.use('/api/users', require('./app/routes/user.routes'));
app.use('/api/productos', require('./app/routes/producto.routes'));
app.use('/api/ventas', require('./app/routes/venta.routes'));
//archivos estaticos
app.use(express.static(__dirname + '/app/public'));
//servidor
app.listen(port,()=>{
    console.log('Server is running on port', port);
});