const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/products', productRoute);

app.listen(3000, () => {
    console.log("Server Running!!!");
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});

mongoose.connect('mongodb+srv://user:123@backenddb.ftb0smf.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB').then(() => {
    console.log("Connected to MongoDB");
}).catch(() => {
    console.log("Connection Failed");
});

// additional code lines ...

// app.get('/api/products', async (req, res) => {
//     try{
//         const products = await Product.find({});
//     } catch(error) {
//         res.status(500).json({message: error.message});
//     }
// });

// app.get('/api/products/:id', async (req, res) => {
//     try{
//         const {id} = req.params;
//         const product = await Product.findById(req.params.id);
//         res.status(200).json(product);
//     } catch(error) {
//         res.status(500).json({message: error.message});
//     }
// });

// app.post('/api/products', async (req, res) => {
//     // console.log(req.body);
//     // res.send(req.body);
//     try{
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//     } catch(error) {
//         res.status(500).json({message: error.message});
//     }
//     // const product = {
//     //     name: req.body.name,
//     //     quantity: req.body.quantity,
//     //     price: req.body.price,
//     //     image: req.body.image
//     // }
//     // res.send(product);
// });

// update a product ...
// app.put('/api/products/:id', async (req, res) => {
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);
//
//         if(!product){
//             return res.status(404).json({message: 'Product not found'});
//         }
//
//         //const updatedProduct = await product.findById(id);
//         //res.status(200).json(updatedProduct);
//
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });

// delete a product ...
// app.delete('/api/products/:id', async (req, res) => {
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndDelete(id);
//
//         if(!product){
//             return res.status(404).json({message: 'Product not found'});
//         }
//
//         res.status(200).json({message: 'Product deleted successfully'});
//
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });