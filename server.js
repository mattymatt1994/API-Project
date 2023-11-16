import express from "express";
import config from "./config";
import router from "./routes";
// TODO: import router from routes/

const app = express();

app.use(express.json());
app.use("/api", router);
app.get("/short", (req, res) => {
  console.log(req.url);
  res.end("got this far...I think");
});
// TODO: use the imported router to handle all requests

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500);
  res.json({ name: err.name, msg: err.message });
});

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});

// app.listen(config.port, () => {
//   console.log(`Server listening on port ${config.port}...`);
// }); "Most import piece of code on this page"
// This "opens the door", actually allows server to take res/req