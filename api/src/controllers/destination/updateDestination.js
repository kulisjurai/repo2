const db = require("../../../database-config");

const updateDestination = async(req, res) => {
    const {
        name,
        country,
        description,
        program,
        broj_dana,
        transport_id,
        price,
        image1,
        image2,
        image3,
    } = req.body;

    console.log("broj_danaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", broj_dana);

    const destinationId = parseInt(req.params["id"]);

    const sql = `UPDATE globetravelers.destination
     SET name = ?, country = ?, description = ?, program = ?, broj_dana = ?, transport_id = ?, price = ?, image1 = ?, image2 = ?, image3 = ? WHERE dest_id = ${destinationId}`;
    // const sql = `SELECT * FROM destination WHERE dest_id = ?`;
    db.query(
        sql, [
            name,
            country,
            description,
            program,
            parseInt(broj_dana),
            transport_id,
            price,
            image1,
            image2,
            image3,
        ],
        (err, result) => {
            if (err) {
                res.status(500).json(err);
                console.log("message", err);
                return;
            }
            console.log("sucsess", result);
            res.status(200).json({ msg: "Destinacija je uspješno izmjenjena" });
        }
    );
};

module.exports = updateDestination;