import express from 'express';
// import { transferTokens } from '../controllers/transferController';
import { transferTokens } from '../controllers/transferController';


const router = express.Router();

router.post('/transfer', transferTokens);

export default router;
