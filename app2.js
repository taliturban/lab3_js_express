// Import the Express framework to create a web server
import express from 'express';

// Import the movie data from a movies.json file using the 'with { type: "json" }' syntax
import data from './data/movies.json' with { type: 'json' };

// Create an instance of an Express application
const app = express();

// Define the port number 
const PORT = 3000;

// Define a route to handle GET requests to "/movies"
app.get("/movies", (req, res) => {
    // Send the movie data as a JSON response
    res.json(data);
});

// Start the server 
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/movies`);
});