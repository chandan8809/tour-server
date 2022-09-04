import express  from "express";
const router =express.Router()
import auth from "../middleware/auth.js"

import { createTour,getTours ,getTour} from "../controllers/tour.js";

router.post("/",auth,createTour)
router.get("/",getTours)
router.get("/:id",getTour)

export default router