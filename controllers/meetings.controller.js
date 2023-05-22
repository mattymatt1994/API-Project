import query from "../db/utilis";

const findAll = async () => {
  return query("SELECT * FROM meetings");
};

const findOne = async (location) => {
  return query("select * from meetings where city = ?;", [location]);
};

const addOne = async (meeting) => {
  return await query("insert into meetings SET ?", [meeting]);
};

const updateOne = async (meeting, location) => {
  return await query("UPDATE meetings SET ? WHERE city = ?", [
    meeting,
    location
  ]);
};

const removeOne = async (location) => {
  return await query("DELETE FROM meetings WHERE name_of_meeting_id = ?", [location]);
};

export default {
  findAll,
  findOne,
  addOne,
  updateOne,
  removeOne,
};
