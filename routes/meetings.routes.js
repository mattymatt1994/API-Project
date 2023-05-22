import express from "express";
import meeting from "../controllers/meetings.controller";

const router = express.Router();

router.get("/:location?", async (req, res, next) => {
  try {
    const { location } = req.params;
    let data;

    if (location) {
      data = await meeting.findOne(location);
    } else {
      data = await meeting.findAll();
    }
    res.status(200);
    res.json(data);
  } catch (err) {
    next(err, req, res);
  }
});

router.post("/", async (req, res, next) => {
  try {
    let meetingLocation = req.body;
    let data = await meeting.addOne(meetingLocation);
    res.json(data);
  } catch (err) {
    next(err, req, res);
  }
});

router.put("/:location", async (req, res, next) => {
  try {
    const { location } = req.params;
    let meetingLocation = req.body;

    if (location && meetingLocation) {
      const result = await meeting.updateOne(location, meetingLocation);
      res.json(result);
    } else {
      throw Error("Looks like you got some missing data there bud");
    }
  } catch (err) {
    next(err, req, res);
  }
});

router.delete("/:location", async (req, res, next) => {
  try {
    const { location } = req.params;
    if (location) {
      let result = await meeting.removeOne(location);
      res.json(result);
    } else {
      throw Error("couldn't find proper info to complete delete");
    }
  } catch (err) {
    next(err, req, res);
  }
});

export default router;
