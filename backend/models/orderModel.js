import mongoose, { mongo } from "mongoose";

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
  orderItems: [     // array of obects
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      imgae: { type: String, required: true },
      product: {
        type: mongoose.Types.ObjectId,
        ref: "Product",
        required: true
      }
    },
  ],
  shippingAddress: {
    address: { type: String, required: true},
    city: { type: String, required: true},
    postalCode: {type: String, required: true},
    country: {type: String, required: true }
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  paymentResult:{
    id: {type: String},
    status: {type: String},
    updateTime: {type: String},
    email: {type: String}
  },
  itemsPrice: {
    type: Number,
    required: true,
    default: 0.0
  },
  taxPrice: {
    type: Number,
    required: true,
    default: 0.0
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 0.0
  },
  isPaid: {
    type: Boolean,
    required: true,
    default: false
  },
  paidAt: {
    type: Date
  },
  isDelevered: {
    type: Boolean,
    required: true,
    default: false
  },
  deliveredAt:{
    type: Date
  }
},
{
  timestamps: true
});

const Order = mongoose.model("Order", orderSchema)

export default Order;
