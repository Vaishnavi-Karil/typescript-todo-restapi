import express from 'express';
import postsRoutes from './posts.route';
import userRoutes from './user.route';
const router = express.Router();

router.get('/welcome', (req, res)=> {
    res.send('Welcome to the API');
} )

router.use('/users', userRoutes )
router.use('/posts', postsRoutes )

export default router;