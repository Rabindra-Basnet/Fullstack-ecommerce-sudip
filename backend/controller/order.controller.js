import Order from "../models/order.model.js";
import asyncHandler from "../middleware/asynchandler.middleware.js";

const addOrder = asyncHandler(async (req, res) => {
  let { orderItems, itemPrice, shippingCharge, totalPrice, shippingAddress } =
    req.body; // // Comes from body but matches with ordermodel.js.
  // // Adding the data in the database.
  let order = await Order.create({
    user: req.user._id, // // Comes from auth.middleware.js
    // // to all the product part inside the orderItems.
    orderItems: orderItems.map((item) => ({
      ...item,
      product: item._id,
      _id: undefined, // // id is already stored in the product field just above. So, to protect _id being stored in the database we did undefined.
    })),
    itemPrice,
    shippingCharge,
    totalPrice,
    shippingAddress,
  });
  res.send({
    message: "Order Placed with id " + order._id,
    orderId: order._id,
  });
});

const getOrders = asyncHandler(async (req, res) => {
  let orders = await Order.find({}).populate("user", "name email -_id"); // // To get user details instead of id we used populate.
  res.send(orders);
});
const getOrderById = asyncHandler(async (req, res) => {
  let id = req.params.id;
  let order = await Order.findById(id).populate("user", "name email -_id");
  res.send(order);
});
// // Give the order record given by the login user.
const getMyOrders = asyncHandler(async (req, res) => {
  let orders = await Order.find({ user: req.user._id });
  res.send(orders);
});

// // Now add section : isDelivered and isPaid should be true in the database and status should be delivered.

export { addOrder, getOrders, getOrderById, getMyOrders };
