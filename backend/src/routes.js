const express = require("express");

const routes = express.Router();

const DevController = require("./controllers/DevController");
const LikeController = require("./controllers/LikeController");
const DislikeController = require("./controllers/DislikeController");

// routes.get("/", (req, res) => {
//   return res.json({ message: `Hello World ${req.query.name}` });
// });

// routes.post("/devs", (req, res) => {
//   return res.json(req.body);
// });
routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store);
routes.post("/devs/:devId/likes", LikeController.store);
routes.post("/devs/:devId/dislikes", DislikeController.store);

module.exports = routes;
