const db = require("../../../database-config");

const searchDestinations = (req, res) => {
    const { name } = req.params;
    const sql = `SELECT * FROM globetravelers.destination where name LIKE '%${name}%'`;

    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json(err);
            throw err;
        }
        res.status(200).json(result[0]);
    });
};

module.exports = searchDestinations;