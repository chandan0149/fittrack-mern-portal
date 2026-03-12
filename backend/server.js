const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const programRoutes = require("./routes/programRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");

const errorHandler = require("./middleware/errorHandler");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/programs", programRoutes);
app.use("/api/enroll", enrollmentRoutes);

app.use(errorHandler);

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server running on port 5000");
});

module.exports = app;