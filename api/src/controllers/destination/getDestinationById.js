const db = require("../../../database-config");

const getDestinationById = (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM globetravelers.destination where dest_id = ?`;

    db.query(sql, [id], (err, result) => {
        if (err) {
            res.status(500).json(err);
            throw err;
        }
        console.log("result", result);
        res.status(200).json(result[0]);
    });
};

module.exports = getDestinationById;