import { Router } from 'express';
import mentorRouter from './mentor.mjs';

const router = Router();

router.use('/api', mentorRouter);

export default router;