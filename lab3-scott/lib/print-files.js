'use strict';

const fs = require('fs');

const pf = module.exports = {};

let contentArr = [];

pf.fetchFiles = (files) => {
  files.forEach((file) =>
    fs.readFile(file, (err, data) => {
      (err) ? console.log(err) : contentArr.push(data.toString());
    })
  );
  return contentArr;
};
