import express from "express";
import noteRoutes from "./routes/noteRoutes.js";

const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/notes", noteRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// mongodb+srv://vyecyec7_db_user:mj9cfNBjgG9dGp3s@cluster0.bmz0vhw.mongodb.net/?appName=Cluster0
