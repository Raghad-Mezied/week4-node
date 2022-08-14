const path = require("path");
const fs = require("fs");
const mimeType = require("mime-types");

const publicHandler = (res, endPoint) => {
  const filePath = path.join(__dirname, "..", "..", endPoint);
  const contentType = mimeType.lookup(endPoint);

  fs.readFile(filePath, (err, file) => {
    if (err) {
      res.writeHead(500);
      res.end("SERVER ERROR");
    } else {
      res.writeHead(200, { "content-type": contentType });
      res.end(file);
    }
  });
};

module.exports = publicHandler;
