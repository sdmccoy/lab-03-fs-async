'use strict';

const printFiles = require('./lib/print-files.js');

let files = process.argv = ['../data/set1.txt', '../data/set2.txt', '../data/set3.txt'];

let printToCLI = () => {
  let results = printFiles.splice(files, 2);
  console.log(results);
  return results;
};

printToCLI(printFiles(files));
