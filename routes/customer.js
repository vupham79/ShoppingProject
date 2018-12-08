import * as CustomerController from './../controllers/customer';
import { Router } from 'express';

const router = new Router();

router.get('/', CustomerController.getAllCustomers);
router.post('/', CustomerController.createCustomer);
router.patch('/:id', CustomerController.updateCustomer);
router.delete('/:id', CustomerController.deleteCustomer);

export default router;