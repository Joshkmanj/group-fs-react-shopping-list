const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

// TODO - Add routes here...
router.get("/", (req, res) => {
  const sqlText = `SELECT * FROM "shopping-list" ORDER BY "purchase-status", "name" ASC;`;
  pool
    .query(sqlText)
    .then((result) => {
      console.log("Router GET TEST", result);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("GET route error", error);
    });
});


router.post('/', (req, res) => {
    const newItemInfo = req.body;
    console.log(newItemInfo);
    const sqlText = `
    INSERT INTO "shopping-list" ("name", "quantity", "unit")
    VALUES ($1, $2, $3);`
    const itemDetails = [newItemInfo.name, newItemInfo.quantity, newItemInfo.unit]

    pool.query(sqlText, itemDetails)
        .then(result => {
            res.sendStatus(201);
        }).catch(err => {
            res.sendStatus(500);
        })
})














module.exports = router;


