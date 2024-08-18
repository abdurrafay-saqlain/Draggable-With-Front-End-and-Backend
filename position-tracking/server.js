// const express = require('express');
// const { sequelize } = require('./config/db'); // Import sequelize for DB connection
// const apiRouter = require('./routes/position'); // Import the router

// const app = express();

// app.use(express.json());
// app.use('/api', apiRouter); // Ensure the router is mounted correctly

// const PORT = process.env.PORT || 4000; // Use a different port for the server
// app.listen(PORT, async () => {
//     console.log(`Server is running on port ${PORT}`);
//     console.log('DATABASE_URL:', process.env.DATABASE_URL);
//     try {
//         await sequelize.authenticate();
//         console.log('Database connected');
//         await sequelize.sync();
//         console.log('Database synced');
//     } catch (err) {
//         console.error('Error connecting to the database:', err);
//     }
// });

const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const port = 4000;

// Use CORS middleware
app.use(cors());

app.use(express.json());
const positionsRouter = require('./routes/position'); // Adjust the path if needed
app.use('/api', positionsRouter);

app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from this origin
    methods: ['GET', 'POST'], // Allow only specific methods
    allowedHeaders: ['Content-Type'] // Allow only specific headers
}));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});