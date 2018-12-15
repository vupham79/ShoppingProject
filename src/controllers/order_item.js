import { Order_Items, Orders } from "./../database/models";

export async function getAllOrderItems(req, res) {
  try {
    const order = await Orders.findOne({
      where: {
        id: req.params.order_id
      }
    });
    if (order) {
      const items = await Order_Items.findAll({
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
    const order = await Orders.findOne({
      where: {
        id: req.params.order_id
      }
    });
    if (order) {
      const item = await Order_Items.create({
        order_id: req.params.order_id,
        product_id: req.body.product_id,
        quantity: req.body.quantity
      });
      if (item) {
        // I want to update 'total' field of the order
        const product = await Products.findOne({
          attributes: ["price"],
          where: {
            id: req.body.product_id
          }
        });
        const totalPrice = product.price * req.body.quantity;
        await Orders.update(
          {
            total: totalPrice
          },
          {
            where: {
              id: order.id
            }
          }
        );
        return res.status(200).json(item);
      } else {
        return res
          .status(400)
          .json({ message: `Create item ${req.body.id} failed!` });
      }
    } else {
      return res.status(400).json({
        message: `Order ${req.params.order_id} not existing!`
      });
    }
  } catch (error) {
    return res.status(400).json({ message: "Error", error: error.message });
  }
}

export async function updateOrderItem(req, res) {
  try {
    const order = await Order_Items.update(
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
      return res.status(200).json(order);
    } else {
      return res
        .status(400)
        .json({ message: `Update item ${req.body.id} failed!` });
    }
  } catch (error) {
    return res.status(400).json({ message: "Error", error: error.message });
  }
}

export async function deleteOrderItem(req, res) {
  try {
    const item = await Order_Items.destroy({
      where: {
        id: req.params.item_id
      }
    });
    if (item) {
      return res.status(200).json(item);
    } else {
      return res
        .status(400)
        .json({ message: `Delete item ${req.params.id} failed!` });
    }
  } catch (error) {
    return res.status(400).json({ message: "Error", error: error.message });
  }
}
