
// Import the Express module using ES module syntax
import express from "express";

// Create an Express application
const app = express();

// Define the port number where the server will listen
const PORT = 3000;

// Define a route using the .route() method, which allows handling multiple HTTP methods on the same endpoint
app.route('/route')
    // Handle GET requests — typically used to retrieve data
    .get((req, res) => {
        res.send('Practising .get() HTTP method for "Read/Retrieve"');
    })
    // Handle POST requests — typically used to create new data
    .post((req, res) => {
        res.send('Practising .post() HTTP method for "Create"');
    })
    // Handle PUT requests — typically used to update existing data
    .put((req, res) => {
        res.send('Practising .put() HTTP method for "Update"');
    })
    // Handle DELETE requests — typically used to delete data
    .delete((req, res) => {
        res.send('Practising .delete() HTTP method for "Delete"');
    });

// Start the server 
app.listen(PORT, () => {
    console.log(`Example app base url: http://localhost:${PORT}`);
});