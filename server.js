const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

require("./routes/index")(app);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, "127.0.0.1", () =>
  console.log(`Server is Up and Running on PORT: ${PORT}`)
);
