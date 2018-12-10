import model from './../database/models';

export async function getAllOrders(req, res) {
    try {
        const orders = await model.orders.findAll({
            attributes: ['id', 'customer_id', 'registered', 'delivery_add_id', 'payment_type', 'date', 'status', 'session', 'total'],
        })
        if (orders) {
            return res.status(200).json(orders);
        } else {
            return res.status(400).json({ message: 'No orders existing!' });
        }
    } catch (error) {
        return res.status(400).json({ message: 'Error', error: error.message });
    }
}

export async function createOrder(req, res) {
    try {
        const order = await model.orders.create(
            {
                customer_id: req.body.customer_id,
                registered: req.body.registered,
                delivery_add_id: req.body.delivery_add_id,
                payment_type: req.body.payment_type,
                date: req.body.date,
                status: req.body.status,
                session: req.body.session,
            }
        );
        if (order) {
            return res.status(200).json(order);
        } else {
            return res.status(400).json({ message: `Create order ${req.body.id} failed!` });
        }
    } catch (error) {
        return res.status(400).json({ message: 'Error', error: error.message });
    }
}

export async function updateOrder(req, res) {
    try {
        const order = await model.orders.update({
            customer_id: req.body.customer_id,
            registered: req.body.registered,
            delivery_add_id: req.body.delivery_add_id,
            payment_type: req.body.payment_type,
            date: req.body.date,
            status: req.body.status,
            session: req.body.session,
        },
            {
                where: {
                    id: req.params.id
                }
            }
        );
        if (order) {
            return res.status(200).json(order);
        } else {
            return res.status(400).json({ message: `Create order ${req.body.id} failed!` });
        }
    } catch (error) {
        return res.status(400).json({ message: 'Error', error: error.message });
    }
}

export async function deleteOrder(req, res) {
    try {
        const order = await model.orders.destroy({
            where: {
                id: req.params.id,
            }
        });
        if (order) {
            return res.status(200).json(order);
        } else {
            return res.status(400).json({ message: `Delete order ${req.params.id} failed!` })
        }
    } catch (error) {
        return res.status(400).json({ message: 'Error', error: error.message });
    }
}