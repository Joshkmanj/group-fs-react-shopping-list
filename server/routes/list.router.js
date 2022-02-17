const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

// TODO - Add routes here...
router.get("/", (req, res) => {
  const sqlText = `SELECT * FROM "shopping-list" ORDER BY "purchase-status", "name" ASC;`;
  pool.query(sqlText).then((result) => {
    console.log("Router GET TEST", result);
  });
});

module.exports = router;
