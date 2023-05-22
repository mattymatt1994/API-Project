import express from "express";
import meetingsRouter from "./meetings.routes";
// TODO: import router from users.route

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});
router.use("/meetings", meetingsRouter);
router.get("/short", (req, res) => {
  console.log(req.url);
  res.end("got this far...jk you suck");
});
// TODO: use the imported router to handle all routes matching "/users"

export default router;
