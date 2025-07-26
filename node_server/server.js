const express = require("express");
const sequelize = require("./Configs/DBConfig");
const cors = require("cors");
const app = express();

// Import routes
const bookingRoutes = require("./src/Routes/BookingRoutes");
const adminAccountRoutes = require("./src/Routes/AdminAccountRoutes");

// Middlewares
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  next();
});

// Routes
app.use("/", bookingRoutes);
app.use("/", adminAccountRoutes);

// Test DB connection and sync models
sequelize
  .sync()
  .then(() => {
    console.log("Database connected and models synced");
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});