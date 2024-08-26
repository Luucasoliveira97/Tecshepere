import { Router } from 'express';
import UserController from '../controllers/userControllers';

const router = Router();

router.get('/user', UserController.getUser);

export default router;
