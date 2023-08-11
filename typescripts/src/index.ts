import express from "express";
import cors from "cors";

import galaxiesRouter from "./routes/galaxies.js";
import itemsRouter from "./routes/items.js";

export const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

const router = express.Router();

router.use("/galaxies", galaxiesRouter);
router.use("/items", itemsRouter);

app.use("/api", router);

app.listen(3001, () => console.log("Server berhasil dijalankan di port 3001."));
