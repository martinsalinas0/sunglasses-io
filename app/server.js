const express = require('express');
const jwt = require('jsonwebtoken');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml'); // Replace './swagger.yaml' with the path to your Swagger file
const app = express();
const queryString = require('querystring')


app.use(express.json()); 

// Importing the data from JSON files
const users = require('../initial-data/users.json');
const brands = require('../initial-data/brands.json');
const products = require('../initial-data/products.json');
const { totalmem } = require('os');

// Error handling
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send('Something broke!');
});

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Starting the server
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
	console.log(`Server connected. \nServer is now running on: ${PORT}`)
})

server.on("error", (err) => { 
	console.error(`Error starting server: ${err.message}`); 
	process.exit(1); 
})


//get brands
app.get('/api/brands', (request, response)=> { 
	response.status(200).json({brands})
}); 


// POST /api/login
// GET /api/me/cart
// POST /api/me/cart
// DELETE /api/me/cart/:productId
// POST /api/me/cart/:productId




module.exports = app;





