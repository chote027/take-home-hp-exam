import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import router from "./routes/list.router";

const app = express();
const port = 3000;

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use("/lists", router);

app.listen(port, () => {
  console.log(`Running at port ${port}`);
});
