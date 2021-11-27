const { db } = require("../../db/db");

async function setNewFollow(follow, Id) {
  try {
    const [{ affectedRows }] = await db.query(
      `UPDATE vacation SET follow = ? WHERE (Id = ?)`,
      [follow, Id]
    );

    const isUpdated = affectedRows > 0;

    return isUpdated;
  } catch (error) {
    return;
  }
}
module.exports = { setNewFollow };
