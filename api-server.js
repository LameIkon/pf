import express from "express";
import cors from "cors";
import tempRouter from "./src/route/temperatureRouteAPI.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/temp", tempRouter);

app.listen("3500");