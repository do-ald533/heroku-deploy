import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import router from "./routes";
import { connectDB } from './database/connection'

dotenv.config({ path: ".env" });

const app = express();

connectDB()

app.use(morgan("dev"));

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(router);

app.listen(process.env.PORT, () =>
	console.log(`http://localhost:${process.env.PORT}`)
);
