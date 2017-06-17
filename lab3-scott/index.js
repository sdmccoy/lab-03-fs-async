'use strict';

const printFiles = require('./lib/print-files.js');

let filePaths = process.argv.splice(2);

// paths inputted in CLI that process.argv puts in to the printFileContent()
// ['./data/set1.txt', './data/set2.txt', './data/set3.txt'];

let printFileContent = () => {
  printFiles(filePaths, (err, data) => {
    err ? console.log(err) : console.log(data);
  });
};
printFileContent();

// This is a param of the printFiles function. This param is a function in itself that takes in two args which will be our callback. The err arg will be used if the file being read has an err ie:(bad path), the data arg will take the results var which holds the newly constructed array from print-files iife and put it through the callback function to log the array to terminal. 
//(err, data) => {err ? console.log(err) : console.log(data);});
