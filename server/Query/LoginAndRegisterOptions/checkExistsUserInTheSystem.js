const { db } = require('../../db/db');

// check if user Exists before register
const checkExistsUserInTheSystem = async (userName) => {
  const [userIsExist] = await db.query(
    `SELECT userName FROM users where userName = ?`,
    [userName]
  );
  console.log(userIsExist);
  if (!userIsExist.length) {
    console.log(0);
    return false;
  }
  console.log(1);
  return true;
};
module.exports = checkExistsUserInTheSystem;
