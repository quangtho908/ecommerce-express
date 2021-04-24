import mongoose from "mongoose";

const schema = new mongoose.Schema({
    id: String,
    email: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    address: {type: String, required: true},
    note: {type: String, required: true},
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true
    },
    status: String
})

const billModel = mongoose.model("bills", schema);

export default billModel;