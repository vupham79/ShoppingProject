import express from "express";
import CustomerRoutes from "./routes/customer";
import OrderRoutes from "./routes/order";
import ProductRoutes from "./routes/product";
import CategoryRoutes from "./routes/category";
import DeliveryAddressRoutes from "./routes/delivery_address";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 8000;

// express configuration
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

// express middleware routes
app.use("/customer", CustomerRoutes);
app.use("/order", OrderRoutes);
app.use("/category", CategoryRoutes);
app.use("/product", ProductRoutes);
app.use("/address", DeliveryAddressRoutes);

app.listen(PORT, () => {
  console.log("   Server is running on port 8000 👍👍👍👍");
});
