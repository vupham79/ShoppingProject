import model from './../database/models';

export async function getAllOrderItems(req, res) {
    try {
        const items = await model.order_items.findAll({
            attributes: ['id', 'order_id', 'product_id', 'quantity'],
            // include: [{
            //     model: model.products,
            // },
            // {
            //     where: {
            //         order_id: req.params.order_id
            //     }
            // }],
            include: [{
                model: model.products,
                as: 'products',
                required: false
            }, {
                where: {
                    order_id: req.params.order_id
                }
            }]
        })
        if (items) {
            return res.status(200).send(json(items));
        } else {
            return res.status(400).send(json({ message: 'No items existing!' }));
        }
    } catch (error) {
        return res.status(400).send(json({ message: 'Error', error: error }));
    }
}

export async function createOrderItems(req, res) {
    try {
        const order = await model.orders.bulkCreate(req.items.map(item => {

        }),
            {
                where: {
                    id: req.params.id
                }
            }
        );
        if (order) {
            return res.json(order);
        } else {
            return res.json({ message: `Create order ${req.body.id} failed!` });
        }
    } catch (error) {
        return res.status(400).send(json({ message: 'Error', error: error }));
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
            return res.json(order);
        } else {
            return res.json({ message: `Create order ${req.body.id} failed!` });
        }
    } catch (error) {
        return res.json({ message: 'Error', error: error });
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
            return res.json(order);
        } else {
            return res.json({ message: `Delete order ${req.params.id} failed!` })
        }
    } catch (error) {
        return res.json({ message: 'Error', error: error });
    }
}