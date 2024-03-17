import mongoose, { Schema } from "mongoose";

const Blog = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    author_id: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
    writeDate: { type: Date, default: Date.now }
});
export default mongoose.model("Blog", Blog);