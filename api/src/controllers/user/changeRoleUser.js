const db = require("../../../database-config");

const changeRoleUser = (req, res) => {
    const { user_id } = req.body;
    console.log("req.body", req.body);
    console.log("req.bparams", req.params);

    const role_id = parseInt(req.params["id"]);
    console.log(req.body);
    console.log("role", role_id);
    console.log("user_id", parseInt(user_id));

    const sql = `UPDATE globetravelers.user SET
      uloga_id = ? WHERE user_id = ${user_id}`;

    db.query(sql, [parseInt(role_id)], (err, result) => {
        if (err) {
            res.status(500).json(err);
            throw err;
        }
        res.status(200).json({ msg: "Uloga je promjenjena" });
    });
};

module.exports = changeRoleUser;