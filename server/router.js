const { publicHandler, suggestionsHandler } = require("./handlers");

const router = (req, res) => {
  const endPoint = req.url;

  if (endPoint === "/") {
    publicHandler(res, "public/index.html");
  } else if (endPoint.includes("public")) {
    publicHandler(res, endPoint);
  } else if (endPoint === "/suggestions") {
    suggestionsHandler(req, res);
  } else {
    res.writeHead(404);
    res.end("Page Not Found");
  }
};

module.exports = router;
