import { Router } from "express";
import { Routescontroller } from "./controllers/RoutesController";

const router = Router();
const controller = new Routescontroller();

router
	.get("/", controller.home)
	.post("/", controller.post)
	.delete("/", controller.delete);

export default router;
