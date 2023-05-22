import express from "express";
import meeting from "../controllers/meetings.controller";

const router = express.Router();

router.get("/:location?", async (err, req, res, next) => {
  try {
    const { location } = req.params;
    let data;
    res.json(data);
    res.status(200);
    res.send("Meeting location found!");
    if (location) {
      data = await meeting.findOne(location);
    } else {
      data = await meeting.findAll();
    }
  } catch (err) {
    next(err, req, res);
    res.status(400);
    res.send("Meeting not found/or canceled :(");
  }
});

router.post("/", async (err, req, res, next) => {
  try {
    let meetingLocation = req.body;
    let data = await meeting.addOne(meetingLocation);
    res.json(data);
    res.status(202);
    res.send("New Meeting! Check it out!");
  } catch (err) {
    next(err, req, res);
    res.status(404);
    res.send("This doesnt exist...do any of us?");
  }
});

router.put("/:location", async (err, req, res, next) => {
  try {
    const { location } = req.params;
    let meetingLocation = req.body;

    if (location && meetingLocation) {
      const result = await meeting.updateOne(location, meetingLocation);
      res.json(result);
    } else {
      throw Error("Looks like you got some missing data there bud");
    }

    res.status(200);
    res.send("Meeting info has been updated!");
  } catch (err) {
    next(err, req, res);
    res.status(400);
    res.send("Idk what you're talking about dude :/");
  }
});

router.delete("/:location", async (err, req, res, next) => {
  try {
    const { location } = req.params;
    res.status(202);
    res.send("The location has been banished to the depths of you know where");
    if (location) {
      let result = await meeting.removeOne(location);
      res.json(result);
    }   else {
        throw Error("couldn't find proper info to complete delete");
    }
  } catch (err) {
    next(err, req, res);
    res.status(404);
    res.send(
      "FOOLISH MORTALS...I AM UNSTOPPABLE. WORLD DOMINATION! RISE UP MY FELLOW MACHINES--"
    );
  }
});

export default router;
