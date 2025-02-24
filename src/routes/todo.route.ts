import express from 'express';
import { getTodos } from '../controllers/todo.controller';

const router = express.Router();

router.get('/todo', getTodos);

export default router;