import express from 'express';
import {
  signup,
  login,
  getAllUsers,
  getUser,
  changePassword,
  deleteUser,
} from './user.controller.js';
import { authMiddleware } from '../../middleware/authMiddleware.js';
import { adminMiddleware } from '../../middleware/adminMiddleware.js';

const router = express.Router();

// Routes
router.post('/signup', signup); // Signup
router.post('/login', login); // Login
router.get('/users', authMiddleware, adminMiddleware, getAllUsers); // Admin can get all users
router.get('/users/:id', getUser); // Get specific user
router.put('/change-password', changePassword); // Change password
router.delete('/users/:id', authMiddleware, adminMiddleware, deleteUser); // Admin can delete users

export default router;
