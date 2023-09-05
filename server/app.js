const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

//middleware
app.use(cors());
app.use(morgan("combined"));

//Running the server

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
