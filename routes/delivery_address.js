import * as DeliveryAddressController from './../controllers/delivery_address';
import { Router } from 'express';

const router = new Router();

router.get('/', DeliveryAddressController.getAllDeliveryAddresses);
router.post('/', DeliveryAddressController.createDeliveryAddress);
router.patch('/:id', DeliveryAddressController.updateDeliveryAddress);
router.delete('/:id', DeliveryAddressController.deleteDeliveryAddress);

export default router;