import express from "express";

const app = express();
const PORT = 5000;

app.get("/api/notes", (req, res) => {
  res.status(200).send("Here are your notes");
});

app.get("/*", (req, res) => {
  res.status(404).send("Route not found");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
