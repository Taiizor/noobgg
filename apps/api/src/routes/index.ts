import { Hono } from "hono";
import { homeController } from "../controllers/main.controller";
import anyRoutes from "./any-route";
import gamesRoutes from "./games";
import distributorsRoutes from "./distributors";
import platformsRoutes from "./platforms";
import gameRanksRoutes from "./game-ranks";


const router = new Hono();

router.get("/", homeController);
router.route("/", anyRoutes);
router.route("/", gamesRoutes);
router.route("/", distributorsRoutes);
router.route("/", platformsRoutes);
router.route("/", gameRanksRoutes);

export default router;
