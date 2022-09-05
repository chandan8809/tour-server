import express  from "express";
const router =express.Router()
import auth from "../middleware/auth.js"

import { createTour,getTours ,getTour, getTourByUser} from "../controllers/tour.js";

router.post("/",auth,createTour)
router.get("/",getTours)
router.get("/:id",getTour)
router.get("/userTours/:id",auth, getTourByUser)


export default router