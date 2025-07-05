import express from "express";
import { productRouter } from "./routes/product.js ";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static("public"));
app.use("/api/products", productRouter);

app
  .listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  })
  .on("error", (err) => {
    console.error("Failed to start server:", err);
  });
