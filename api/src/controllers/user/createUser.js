const db = require("../../../database-config");
const bcrypt = require("bcrypt");
const { sendWelcomeEmail } = require("../../mail.service");

const createUser = async(req, res) => {
    const { username, email, firstName, lastName, address, password } = req.body;
    console.log(req.body);

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    const sql = `INSERT INTO globetravelers.user (username, email, first_name, last_name, address, password) VALUES(?, ?, ?, ?, ?, ?)`;

    db.query(
        sql, [username, email, firstName, lastName, address, passwordHash],
        (err, result) => {
            if (err) {
                console.log("err", err);
                if (err.Error == "ER_DUP_ENTRY" || err.errno == 1062) {
                    res
                        .status(400)
                        .json({ msg: "Korisničko ime ili adresa već postoje" });
                    return;
                } else {
                    res.status(500).json(err);
                    console.log("message", err);
                    return;
                }
            }
            sendWelcomeEmail(email, firstName);
            res.status(200).json({ msg: "Uspješna registracija." });
        }
    );
};

module.exports = createUser;