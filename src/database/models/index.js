import Admins from "./admins";
import Categories from "./categories";
import Customers from "./customers";
import Delivery_Addresses from "./delivery_addresses";
import Logins from "./logins";
import Order_Items from "./order_items";
import Orders from "./orders";
import Products from "./products";

Admins.associate();
Customers.associate();
Logins.associate();
Categories.associate();
Products.associate();
Delivery_Addresses.associate();
Orders.associate();
Order_Items.associate();

export {
  Admins,
  Categories,
  Customers,
  Delivery_Addresses,
  Logins,
  Order_Items,
  Orders,
  Products
};
