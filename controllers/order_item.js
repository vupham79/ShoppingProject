import model from "./../database/models";

export async function getAllOrderItems(req, res) {
  try {
    const order = await model.orders.findOne({
      where: {
        id: req.params.order_id
      }
    });
    if (order) {
      const items = await model.order_items.findAll({
        attributes: ["id", "order_id", "product_id", "quantity"],
        include: [
          {
            model: model.products,
            as: "product"
          },
          {
            model: model.orders,
            as: "order"
          }
        ],
        where: {
          order_id: req.params.order_id
        }
      });
      if (items.length > 0) {
        return res.status(200).json(items);
      }
      return res.status(200).json({ order });
    } else {
      return res
        .status(400)
        .json({ message: `Order ${req.params.order_id} not existing!` });
    }
  } catch (error) {
    return res.status(400).json({ message: "Error", error: error.message });
  }
}

export async function createOrderItems(req, res) {
  try {
    const order = await model.orders.findOne({
      where: {
        id: req.params.order_id
      }
    });
    if (order) {
      // const item = await model.order_items.create(
      //     {
      //         order_id: req.params.order_id,
      //         product_id: req.body.product_id,
      //         quantity: req.body.quantity
      //     },
      // );
      const item = 1;
      if (item) {
        // I want to update total field of the order
        const product = await model.products.findOne({
          attributes: ["price"],
          where: {
            id: req.body.product_id
          }
        });
        const totalPrice = product.price * req.body.quantity;
        await model.orders.update(
          {
            id: order.id,
            total: totalPrice,
            customer_id: order.customer_id,
            registered: order.registered,
            delivery_add_id: order.delivery_add_id,
            payment_type: order.payment_type,
            date: order.date,
            status: order.status,
            session: order.session,
            createdAt: order.createdAt,
            updatedAt: new Date()
          },
          {
            where: {
              id: order.id
            },
            fields: [
              "id",
              "customer_id",
              "registered",
              "delivery_add_id",
              "date",
              "status",
              "session",
              "createdAt",
              "updatedAt",
              "total"
            ]
          }
        );
        return res.json(item);
      } else {
        return res.json({ message: `Create item ${req.body.id} failed!` });
      }
    } else {
      return res.json({
        message: `Order ${req.params.order_id} not existing!`
      });
    }
  } catch (error) {
    return res.status(400).json({ message: "Error", error: error.message });
  }
}

export async function updateOrderItem(req, res) {
  try {
    const order = await model.order_items.update(
      {
        quantity: req.body.quantity
      },
      {
        where: {
          id: req.body.product_id,
          order_id: req.params.order_id
        }
      }
    );
    if (order) {
      return res.json(order);
    } else {
      return res.json({ message: `Update item ${req.body.id} failed!` });
    }
  } catch (error) {
    return res.json({ message: "Error", error: error.message });
  }
}

export async function deleteOrderItem(req, res) {
  try {
    const order = await model.orders.destroy({
      where: {
        id: req.params.id
      }
    });
    if (order) {
      return res.json(order);
    } else {
      return res.json({ message: `Delete item ${req.params.id} failed!` });
    }
  } catch (error) {
    return res.json({ message: "Error", error: error.message });
  }
}
