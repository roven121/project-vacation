const { db } = require("../../db/db");

const chartVacation = async (userName) => {
  try {
    return []
    // const [result] = await db.query(
    //   ` SELECT idVacation, COUNT(idVacation) amount FROM followers
    //   GROUP BY idVacation`,
    //   [userName]
    // );

    // return result;
  } catch (error) {
    console.log(
      "🚀 ~ file: chartVacation.js ~ line 14 ~ chartVacation ~ error",
      error
    );
    return [];
  }
};
module.exports = { chartVacation };
