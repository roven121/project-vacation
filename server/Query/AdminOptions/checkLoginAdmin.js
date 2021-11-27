const { db } = require("../../db/db");

const checkLoginAdmin = async (userName) => {
  
  const [userIsExist] = await db.query(
    `SELECT * FROM users where userName = ? and  isAdmin=1 `,
    [userName]
  );
 
  if (!userIsExist.length) {
   
    return false;
  }

  return true;
};
module.exports = {checkLoginAdmin};
