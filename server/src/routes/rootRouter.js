import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import creatureRouter from "./api/v1/CreatureRouter.js";
import encounterRouter from "./api/v1/EncounterRouter.js";

const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);

rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use("/api/v1/creatures", creatureRouter);
rootRouter.use("/api/v1/encounters", encounterRouter)


export default rootRouter;
