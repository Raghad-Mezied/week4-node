const path = require("path");
const fs = require("fs");

const suggestionsHandler = (req, res) => {
  let allData = "";
  req.on("data", (chunks) => {
    allData += chunks;
  });

  req.on("end", () => {
    const filePath = path.join(__dirname, "..", "suggestions.json");

    fs.readFile(filePath, (err, file) => {
      if (err) {
        res.writeHead(500);
        res.end("SERVER ERROR");
      } else {
        const suggestions = JSON.parse(file);
        const filteredSuggestions = suggestions.filter((film) =>
          film.name.includes(allData)
        );
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify(filteredSuggestions));
      }
    });
  });
};

module.exports = suggestionsHandler;
