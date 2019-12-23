/* eslint-disable no-unused-vars */
const express = require("express");

const router = express.Router();

// Returns the list of all employess
router.get("/", (req, res, next) => {});

// Return the specified employee
router.get("/:id", (req, res, next) => {});

// Update an employee
router.put("/:id", (req, res, next) => {});

// Insert an new employee
router.post("/", (req, res, next) => {});

module.exports = router;
