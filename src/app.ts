import express, { Application } from "express";
import greetingRoute from "./Routes/greeting.route";

const app: Application = express();

app.use(express.json());
app.use("/greeting", greetingRoute);
app.get("/", (req, res) => {
  res.send("Hello Worlddd");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
