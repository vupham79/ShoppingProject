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
            return res.status(200).json(items);
        } else {
            return res.status(400).json({ message: 'No items existing!' });
        }
    } catch (error) {
        return res.status(400).json({ message: 'Error', error: error.message });
    }
}

export async function createOrderItems(req, res) {
    try {
        const items = await model.order_items.bulkCreate(
            req.body.items,
            {
                where: {
                    order_id: req.params.id,
                }
            });
        if (items) {
            return res.status(200).json(items);
        } else {
            return res.status(400).json({ message: `Create items for order ${req.params.id} failed!` });
        }
    } catch (error) {
        return res.status(400).json({ message: 'Error', error: error.message });
    }
}

export async function updateOrderItems(req, res) {
    try {
        const item = await model.order_items.update({
            order_id: req.body.order_id,
            product_id: req.body.product_id,
            quantity: req.body.quantity
        },
            {
                where: {
                    id: req.params.id
                }
            }
        );
        if (item) {
            return res.status(200).json(item);
        } else {
            return res.status(400).json({ message: `Update item ${req.body.id} failed!` });
        }
    } catch (error) {
        return res.status(400).json({ message: 'Error', error: error.message });
    }
}

export async function deleteOrderItems(req, res) {
    try {
        const item = await model.order_items.destroy({
            where: {
                id: req.params.id,
            }
        });
        if (item) {
            return res.status(200).json(item);
        } else {
            return res.status(400).json({ message: `Delete item ${req.params.id} failed!` })
        }
    } catch (error) {
        return res.status(400).json({ message: 'Error', error: error.message });
    }
}