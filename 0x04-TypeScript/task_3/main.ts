// main.ts

/// <reference path="./crud.d.ts" />

// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create a row object with the RowElement type
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

// Insert a row and get a new RowID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row with an age field set to 23
const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23
};

// Call the updateRow command
CRUD.updateRow(newRowID, updatedRow);

// Call the deleteRow command
CRUD.deleteRow(newRowID);



