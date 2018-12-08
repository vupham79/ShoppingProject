import CustomerRoutes from './customer';
import OrderRoutes from './order';
import LoginRoutes from './login';
import ProductRoutes from './product';
import AdminRoutes from './admin';
import CategoryRoutes from './category';
import DeliveryAddressRoutes from './delivery_address';

export default app => {
    app.use('/customer', CustomerRoutes);
    app.use('/order', OrderRoutes);
    app.use('/category', CategoryRoutes);
    app.use('/product', ProductRoutes);
}