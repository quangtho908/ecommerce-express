import mongoose from "../config/mongoose_config";

const schema = new mongoose.Schema({
    name: {type: String, required: true},
})

const CategoryModel = mongoose.model("categories", schema);

export default CategoryModel