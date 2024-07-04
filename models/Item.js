import mongoose from "mongoose"

const itemSchema = new mongoose.Schema({
  _id:String,
  name: String,  
});
const User = mongoose.model("Item", itemSchema);
export default User