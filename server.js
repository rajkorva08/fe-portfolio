const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
require("./routes/index")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server is Up and Running on PORT: ${PORT}`)
);
