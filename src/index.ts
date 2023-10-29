import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const { PORT } = process.env;

// Import Routers
import { productsRouter } from "./routers/products";
import { categoriesRouter } from "./routers/categories";
import { usersRouter } from "./routers/users";

// Endpoints
app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);
app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
