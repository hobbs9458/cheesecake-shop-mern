import express from 'express';
import {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  createVariant,
  editVariant,
  deleteVariant,
} from '../controllers/productController.js';
import { admin, protect } from '../controllers/userController.js';

const router = express.Router();

router.use(protect, admin);
router.route('/').get(getAllProducts).post(createProduct);
router.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct);
router.patch('/create-variant/:id', createVariant);
router.patch('/edit-variant/:id', editVariant);
router.delete('/delete-variant/:id', deleteVariant);

export default router;
