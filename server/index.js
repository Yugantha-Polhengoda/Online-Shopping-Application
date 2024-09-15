// import express from "express";
// import * as dotenv from "dotenv";
// import cors from "cors";

// import dalleRoutes from './routes/dalle.routes.js';

// // Load environment variables from .env file
// dotenv.config();

// // Initialize Express app
// const app = express(); // This should be invoked as a function

// // Middleware
// app.use(cors()); // This applies the CORS middleware
// app.use(express.json({ limit: "50mb" })); // This sets up JSON parsing with a limit

// app.use('/api/v1/dalle', dalleRoutes);

// // Define a route
// app.get("/", (req, res) => {
//   res.status(200).json({ message: "Hello from DressZone" });
// });

// // Start the server
// app.listen(8080, () => console.log("Server has started on port 8080"));
