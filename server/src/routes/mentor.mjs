import { Router } from "express";
import { createMentor,updateMentor, patchMentor, deleteMentor,getMentors } from "../controllers/method.controller.mjs";
import { createValidationSchema,updateValidationSchema } from "../utils/validationSchemas.mjs";
import { checkSchema } from "express-validator";

const router = Router();

router.get('/mentors', getMentors);

router.post("/create-mentor", checkSchema(createValidationSchema), createMentor);

router.put("/mentors/:id", checkSchema( updateValidationSchema), updateMentor)

router.patch("/mentors/:id", checkSchema( updateValidationSchema), patchMentor)

router.delete("/mentors/:id", deleteMentor);

export default router;