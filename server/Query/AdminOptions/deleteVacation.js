const { db } = require("../../db/db");

const deleteVacation = async (id) => {
   
    const [{ affectedRows }] = await db.query(
        `DELETE FROM vacation WHERE (Id = ?)`,
        [id]
    );
 
    const result = affectedRows > 0 ? true : false;

    return affectedRows, result;
};

module.exports = { deleteVacation };
