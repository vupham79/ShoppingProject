import * as ProductController from './../controllers/product';
import { Router } from 'express';

const router = new Router();

router.get('/', ProductController.getAllProducts);
router.post('/', ProductController.createProduct);
router.patch('/:id', ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);

export default router;