import mongoose from "mongoose";
import express from "express";
import cors from "cors";


import tempRouter from "./src/route/temperatureRoute.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/temp", tempRouter);

app.listen("3000");