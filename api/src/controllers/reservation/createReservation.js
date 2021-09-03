const db = require("../../../database-config");
const bcrypt = require("bcrypt");

const createReservation = async(req, res) => {
    const { user_id, destination_id, transport_id } = req.body;
    console.log(req.body);

    const sql = `INSERT INTO globetravelers.reservation (user_id, destination_id, transport_id) VALUES(?, ?, ?)`;

    db.query(sql, [user_id, destination_id, transport_id], (err, result) => {
        if (err) {
            res.status(500).json(err);
            console.log("message", err);
            return;
        }
        res.status(200).json({ msg: "Uspješna rezervacija." });
    });
};

module.exports = createReservation;