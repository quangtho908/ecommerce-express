import mongoose from "../config/mongoose_config";

const schema = new mongoose.Schema({
    fieldname: String,
    originalname: String,
    encoding: String,
    mimetype: String,
    destination: String,
    filename: String,
    path: String,
    size: Number
});

const ImageModel = mongoose.model("libraries", schema);

export default ImageModel;

