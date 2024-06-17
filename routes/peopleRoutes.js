import { Router } from "express";
const router = Router();

import { getAllPeople, createPerson, updatePerson, getPerson, deletePerson } from "../controllers/personController.js";

router.route("/").get(getAllPeople).post(createPerson);
router.route("/:id").get(getPerson).patch(updatePerson).delete(deletePerson);

export default router;
