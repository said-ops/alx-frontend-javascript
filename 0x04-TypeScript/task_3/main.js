"use strict";
// main.ts
exports.__esModule = true;
var CRUD = require("./crud");
// Create a row object with the RowElement type
var row = {
    firstName: "Guillaume",
    lastName: "Salva"
};
// Insert a row and get a new RowID
var newRowID = CRUD.insertRow(row);
// Create an updated row with an age field set to 23
var updatedRow = {
    firstName: "Guillaume",
    lastName: "Salva",
    age: 23
};
// Call the updateRow command
CRUD.updateRow(newRowID, updatedRow);
// Call the deleteRow command
CRUD.deleteRow(newRowID);
