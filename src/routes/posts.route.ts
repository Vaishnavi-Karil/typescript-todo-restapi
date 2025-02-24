import express from 'express'; 
import {createPost, getPostByPostId, getPostByUserId, getPosts} from '../controllers/post.controller';
const router = express.Router(); 

router.route('/').get(getPosts).post(createPost);
router.route('/user/:userId').get(getPostByUserId);
router.route('/:postId').get(getPostByPostId)
export default router;