import * as OrderController from './../controllers/order';
import * as OrderItemController from './../controllers/order_item';
import { Router } from 'express';

const router = new Router();

router.get('/', OrderController.getAllOrders);
router.post('/', OrderController.createOrder);
router.get('/:order_id', OrderItemController.getAllOrderItems);
router.post('/:order_id', OrderItemController.createOrderItems);
router.patch('/:order_id', OrderController.updateOrder);
router.delete('/:order_id', OrderController.deleteOrder);
router.delete('/:order_id/:item_id', OrderItemController.deleteOrderItems);
router.patch('/:order_id/:item_id', OrderItemController.updateOrderItems);

export default router;