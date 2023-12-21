import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import "express-async-errors";
import chars from "./routes/chars.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

// Load the /chars routes
app.use("/api/chars", chars);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
})

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});