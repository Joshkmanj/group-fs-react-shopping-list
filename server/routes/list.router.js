const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...









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


