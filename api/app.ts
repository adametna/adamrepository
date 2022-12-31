import express from "express";
import { connect } from "./db/index";
import routes from "./routes";

const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: "*" }));

app.set("port", 3000);
app.use("/", routes);

connect().catch((error) => {
  console.log(error);
});
app.listen(3000, () => {
  console.log("listening tah l cia");
});
