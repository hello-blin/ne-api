const express = require("express");
const bodyParser = require("body-parser");
const app = express();


//Express Json
app.use(express.json());

const port = 3000;

//Routing
const placesRouter = require("./routes/places-routes");
app.use('/api/places', placesRouter);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}`)
);
