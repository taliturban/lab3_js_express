// Import the Express framework to create a web server
import express from 'express';

// Create an instance of an Express application
const app = express();

// Define the port number 
const PORT = 3000;

//Display message and group members names
app.get('/', (req, res) => {
    res.send("<h1><br>Beatriz Goulart<br>Talita Urban Silva</h1>");
});

// Start server in the port 3000
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});