const express = require("express");
const cors = require("cors");
const foodsData = require("./foodsData.json");
const app = express();

app.use(cors());

app.get("/", (request, response) => {
  response.status(200).json({ data: "Service is running" });
});

app.get("/items", (request, response) => {
  try {
    response.status(200).json({ data: foodsData });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

app.get("/items/:id", (request, response) => {
  try {
    const { id } = request.params;
    const food = foodsData.find((el) => el.id === id);

    if (food) {
      return response.status(200).json({ data: food });
    }
    response.status(404).json({ error: `Could not find item with id ${id}` });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

module.exports = app;
